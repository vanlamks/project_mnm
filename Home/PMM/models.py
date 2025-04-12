from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.utils import timezone


# Model Restaurant
class Restaurant(models.Model):
    restaurant_number = models.CharField(max_length=50, unique=True, primary_key=True)
    restaurant_name = models.CharField(max_length=255)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    description = models.TextField(blank=True, null=True)
    opening_hours = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=10, decimal_places=8)
    longitude = models.DecimalField(max_digits=11, decimal_places=8)

    class Meta:
        db_table = 'restaurants'

    def __str__(self):
        return self.restaurant_name


# Model User
class User(models.Model):
    user_number = models.CharField(max_length=50, primary_key=True)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password_hash = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        db_table = 'users'

    def save(self, *args, **kwargs):
        if self.password_hash and not self.password_hash.startswith("pbkdf2_sha256$"):
            self.password_hash = make_password(self.password_hash)
        super(User, self).save(*args, **kwargs)

    def check_password(self, password):
        return check_password(password, self.password_hash)

    def __str__(self):
        return self.full_name


# Model Menu
class Menu(models.Model):
    menu_number = models.CharField(max_length=50, primary_key=True)
    restaurant_number = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, db_column='restaurant_number'
    )
    menu_name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'menus'

    def __str__(self):
        return self.menu_name


# Model SearchHistory
class SearchHistory(models.Model):
    search_number = models.CharField(max_length=50, primary_key=True)
    user_number = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column='user_number',
        to_field='user_number'  # Liên kết đến trường user_number thay vì id
    )
    search_query = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'search_history'

    def __str__(self):
        return f"{self.user_number} - {self.search_query}"



# Model Favorite
class Favorite(models.Model):
    favorite_number = models.CharField(max_length=50, primary_key=True)
    user_number = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_number')
    restaurant_number = models.ForeignKey(Restaurant, on_delete=models.CASCADE, db_column='restaurant_number')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'favorites'

    def __str__(self):
        return f"Favorite {self.favorite_number} - User {self.user_number} - Restaurant {self.restaurant_number}"


class Role(models.Model):
    role_number = models.CharField(max_length=50, primary_key=True)  # Đặt role_number làm khóa chính
    role_name = models.CharField(max_length=50)

    class Meta:
        db_table = 'roles'
    def __str__(self):
        return self.role_name


# Model UserRole
class UserRole(models.Model):
    user_number = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_number')
    role_number = models.ForeignKey(Role, on_delete=models.CASCADE, db_column='role_number')

    class Meta:
        db_table = 'user_roles'
        unique_together = ('user_number', 'role_number')

    def __str__(self):
        return f"User {self.user_number} - Role {self.role_number}"


# Model Review
class Review(models.Model):
    review_number = models.CharField(max_length=50, primary_key=True)
    user_number = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_number')
    restaurant_number = models.ForeignKey(Restaurant, on_delete=models.CASCADE, db_column='restaurant_number')
    rating = models.IntegerField()
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)  # Tinyint(1) trong MySQL tương ứng với BooleanField

    class Meta:
        db_table = 'reviews'

    def __str__(self):
        return f"Review {self.review_number} - {self.user_number} - {self.restaurant_number} - Rating: {self.rating}"

