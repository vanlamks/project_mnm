from django.shortcuts import render, get_object_or_404, redirect
from rest_framework import generics
from .models import Restaurant, User, Menu, SearchHistory, Favorite, Role, UserRole, Review
from .serializers import RestaurantSerializer, UserSerializer, MenuSerializer, SearchHistorySerializer, FavoriteSerializer, RoleSerializer, UserRoleSerializer, ReviewSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.contrib.auth import authenticate, login
from .forms import LoginForm  # Import form đăng nhập
from django import forms
from django.contrib.auth.hashers import make_password, check_password
from django.core.mail import send_mail
import random
from django.utils import timezone
from datetime import timedelta

# API chào mừng
class WelcomeAPI(APIView):
    def get(self, request):
        return Response({"message": "Welcome to the restaurant API!"})

# API tạo mới và xem danh sách nhà hàng
class RestaurantCreate(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

# API xem, cập nhật, xóa nhà hàng theo ID
class RestaurantRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = "restaurant_number"



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'user_number'
    def get_queryset(self):
        return User.objects.all()
    def create(self, request, *args, **kwargs):
        data = request.data
        user = User.objects.create(
            user_number=data['user_number'],
            full_name=data['full_name'],
            email=data['email'],
            password_hash=data['password_hash']
        )
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)

class LoginForm(forms.Form):
    identifier = forms.CharField(label="Email hoặc User Number")
    password = forms.CharField(widget=forms.PasswordInput)


class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class SearchHistoryViewSet(viewsets.ModelViewSet):
    serializer_class = SearchHistorySerializer

    def get_queryset(self):
        """
        Lọc queryset dựa trên user_number từ query parameters.
        Nếu không có user_number, trả về toàn bộ dữ liệu.
        """
        queryset = SearchHistory.objects.all()
        user_number = self.request.query_params.get('user_number', None)
        if user_number is not None:
            queryset = queryset.filter(user_number=user_number)
        return queryset

    def create(self, request, *args, **kwargs):
        """
        Xử lý yêu cầu POST để tạo mới một bản ghi lịch sử tìm kiếm.
        """
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Lịch sử tìm kiếm đã được lưu", "data": serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RegisterAPIView(APIView):
    def post(self, request):
        data = request.data.copy()
        
        # Kiểm tra user_number đã tồn tại
        if User.objects.filter(user_number=data.get('user_number')).exists():
            return Response({'message': 'Tài khoản đã tồn tại'}, status=status.HTTP_400_BAD_REQUEST)

        # Kiểm tra email đã tồn tại
        if User.objects.filter(email=data.get('email')).exists():
            return Response({'message': 'Email đã được sử dụng'}, status=status.HTTP_400_BAD_REQUEST)

        # Kiểm tra mật khẩu có được gửi lên không
        if 'password_hash' not in data or not data['password_hash']:
            return Response({'message': 'Mật khẩu không được để trống'}, status=status.HTTP_400_BAD_REQUEST)

        # Hash mật khẩu trước khi lưu
        data['password_hash'] = make_password(data['password_hash'])

        # Dùng UserSerializer để tạo user mới
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Đăng ký thành công'}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    def post(self, request):
        data = request.data
        email = data.get("email")
        password = data.get("password")

        try:
            user = User.objects.get(email=email)
            if check_password(password, user.password_hash):
                return Response({"message": "Đăng nhập thành công", "user_number": user.user_number}, status=status.HTTP_200_OK)
            return Response({"message": "Mật khẩu không đúng"}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({"message": "Email không tồn tại"}, status=status.HTTP_400_BAD_REQUEST)
        

        
def simplemap(request):
    return render(request, 'simple-map.html')

class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    lookup_field = "role_number" 

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class UserRoleViewSet(viewsets.ModelViewSet):
    queryset = UserRole.objects.all()
    serializer_class = UserRoleSerializer

class ResetPasswordView(APIView):
    def post(self, request):
        email = request.data.get('email')
        code = request.data.get('code')
        new_password = request.data.get('new_password')

        try:
            user = User.objects.get(email=email)

            if user.reset_code != code:
                return Response({'message': 'Mã xác nhận không đúng'}, status=status.HTTP_400_BAD_REQUEST)

            # (Tuỳ chọn) kiểm tra thời gian hết hạn mã (ví dụ 15 phút)
            if timezone.now() - user.reset_code_created_at > timedelta(minutes=15):
                return Response({'message': 'Mã xác nhận đã hết hạn'}, status=status.HTTP_400_BAD_REQUEST)

            user.password_hash = make_password(new_password)
            user.reset_code = None
            user.reset_code_created_at = None
            user.save()

            return Response({'message': 'Mật khẩu đã được cập nhật'})

        except User.DoesNotExist:
            return Response({'message': 'Email không tồn tại'}, status=status.HTTP_404_NOT_FOUND)
class ForgotPasswordView(APIView):
    def post(self, request):
        email = request.data.get('email')
        full_name = request.data.get('full_name')

        try:
            user = User.objects.get(email=email, full_name=full_name)
            code = random.randint(100000, 999999)

            user.reset_code = str(code)
            user.reset_code_created_at = timezone.now()
            user.save()

            send_mail(
                'Mã đặt lại mật khẩu',
                f'Mã xác nhận của bạn là: {code}',
                'noreply@yourdomain.com',
                [email],
                fail_silently=False,
            )

            return Response({'message': 'Mã xác nhận đã gửi qua email!'})
        except User.DoesNotExist:
            return Response({'message': 'Không tìm thấy người dùng'}, status=status.HTTP_404_NOT_FOUND)