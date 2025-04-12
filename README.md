# Hướng Dẫn Chạy Project

## Bước 1: Cài Đặt Cơ Sở Dữ Liệu
- Mở **Visual Studio** và mở folder vừa tải về.
- Chạy file tạo database trong **MySQL**.
- Truy cập file `settings.py` của project **Home** để chỉnh sửa thông tin kết nối với MySQL.

## Bước 2: Cài Đặt Môi Trường
Mở Terminal và chạy các dòng lệnh sau:

```bash
cd Home
pip install django
pip install mysqlclient
pip install djangorestframework
pip install django-cors-headers
npm install
npm install framer-motion react-rating-stars-component
# Cài Gói Frontend
cd Home
python manage.py migrate
#Khởi Tạo Database
cd Home
python manage.py migrate
#Tạo Tài Khoản Quản Trị (Admin)
cd Home
python manage.py createsuperuser
#Chạy Trang Web
cd Home
py manage.py runserver
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

#Frontend
cd Home/frontend
npm start
