from django.contrib import admin
from .models import (
    User, Role, UserRole, Restaurant, Menu, Review, Favorite, SearchHistory
)

# USER
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_number', 'full_name', 'email', 'created_at')
    search_fields = ('full_name', 'email')
    readonly_fields = ('created_at',)
    list_filter = ('created_at',)
    ordering = ('-created_at',)

# ROLE
@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ('role_number', 'role_name')
    search_fields = ('role_name',)
    ordering = ('role_name',)

# USER ROLE
@admin.register(UserRole)
class UserRoleAdmin(admin.ModelAdmin):
    list_display = ('user_number', 'role_number')
    search_fields = ('user_number__full_name', 'role_number__role_name')
    autocomplete_fields = ('user_number', 'role_number')
    ordering = ('user_number',)

# RESTAURANT
@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('restaurant_number', 'restaurant_name', 'phone', 'opening_hours', 'latitude', 'longitude')
    search_fields = ('restaurant_name', 'address', 'phone')
    ordering = ('restaurant_name',)

# MENU
@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ('menu_number', 'menu_name', 'price', 'restaurant_number')
    search_fields = ('menu_name', 'restaurant_number__restaurant_name')
    autocomplete_fields = ('restaurant_number',)
    ordering = ('-created_at',)

# REVIEW
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('review_number', 'user_number', 'restaurant_number', 'rating', 'is_approved')
    search_fields = ('user_number__full_name', 'restaurant_number__restaurant_name')
    list_filter = ('is_approved', 'rating', 'created_at')
    autocomplete_fields = ('user_number', 'restaurant_number')
    ordering = ('-created_at',)

# FAVORITE
@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ('favorite_number', 'user_number', 'restaurant_number')
    search_fields = ('user_number__full_name', 'restaurant_number__restaurant_name')
    autocomplete_fields = ('user_number', 'restaurant_number')
    ordering = ('-created_at',)

# SEARCH HISTORY
@admin.register(SearchHistory)
class SearchHistoryAdmin(admin.ModelAdmin):
    list_display = ('search_number', 'user_number', 'search_query', 'created_at')
    search_fields = ('user_number__full_name', 'search_query')
    autocomplete_fields = ('user_number',)
    ordering = ('-created_at',)
