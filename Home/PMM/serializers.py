from rest_framework import serializers
from .models import Restaurant, User, Menu, SearchHistory, Favorite, UserRole, Role, Review

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'  

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_number', 'full_name', 'email', 'password_hash', 'created_at']
        read_only_fields = ['created_at'] 

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class SearchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchHistory
        fields = '__all__'

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = '__all__' 

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__' 


# UserRole Serializer
class UserRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRole
        fields = '__all__'


# Review Serializer
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'