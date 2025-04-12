from django.urls import path, include
from .views import RestaurantCreate, RestaurantRetrieveUpdateDestroy, UserViewSet, MenuViewSet, SearchHistoryViewSet, RegisterAPIView, LoginAPIView,simplemap, FavoriteViewSet, ReviewViewSet, RoleViewSet, UserRoleViewSet
from rest_framework.routers import DefaultRouter
from .views import ForgotPasswordView, ResetPasswordView

# Khai báo một router duy nhất
router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'menus', MenuViewSet, basename='menu')
router.register(r'search-history', SearchHistoryViewSet, basename='search-history')
router.register(r'favorites', FavoriteViewSet) 
router.register(r'roles', RoleViewSet, basename='role')
router.register(r'reviews', ReviewViewSet, basename='review')
router.register(r'user-roles', UserRoleViewSet, basename='user-role')

urlpatterns = [
    path('restaurant/', RestaurantCreate.as_view(), name="restaurant-create"),
    path('restaurant/<int:restaurant_number>/', RestaurantRetrieveUpdateDestroy.as_view(), name="restaurant-update"),
    path('', include(router.urls)),
    path("register/", RegisterAPIView.as_view(), name="register"),
path("login/", LoginAPIView.as_view(), name="login"),
 path('simplemap/', simplemap, name='simplemap'), 
  path("pw/", ForgotPasswordView.as_view(), name="forgot-password"), 
    path("reset-password/", ResetPasswordView.as_view(), name="reset-password"), 
]
