# 🍽️ Dự Án Django + React - Hướng Dẫn Cài Đặt & Chạy

## 📦 Yêu cầu hệ thống

- Python 3.8+
- Node.js 16+
- MySQL đang chạy
- pip, npm đã cài

---

## 🔧 Cài đặt Backend (Django)

```bash
# Di chuyển vào thư mục dự án backend
# Mở terminal
cd Home

# Cài đặt các gói cần thiết
pip install django
pip install mysqlclient
pip install djangorestframework
pip install django-cors-headers

# Tạo migration và apply vào database
python manage.py makemigrations
python manage.py migrate

# Tạo tài khoản admin
python manage.py createsuperuser

# Chạy server Django
python manage.py runserver

Truy cập trang admin: http://127.0.0.1:8000/admin/ (yêu cầu đăng nhập admin).

Một số endpoint API:

http://127.0.0.1:8000/api/restaurant/

http://127.0.0.1:8000/api/search-history/

http://127.0.0.1:8000/api/menus/

http://127.0.0.1:8000/api/users/

http://127.0.0.1:8000/api/register/

http://127.0.0.1:8000/api/login/

http://127.0.0.1:8000/chat/chatbot/

http://127.0.0.1:8000/api/favorite/

http://127.0.0.1:8000/api/reviews/

http://127.0.0.1:8000/api/roles/

http://127.0.0.1:8000/api/pw/

http://127.0.0.1:8000/api/reset-password/

# Di chuyển vào thư mục frontend
cd frontend

# Cài đặt các thư viện cần thiết
npm install
npm install framer-motion react-rating-stars-component

# Nếu lỗi "react-scripts not found"
npm install react-scripts --save

# Mở terminal mới
# Chạy frontend
npm start

