CREATE DATABASE PMMCK;
USE PMMCK;
-- 1️⃣ Bảng Users (Người dùng)
CREATE TABLE users (
    user_number varchar(50) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2️⃣ Bảng Roles (Phân quyền)
CREATE TABLE roles (
    role_number varchar(50)  PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

-- 3️⃣ Bảng User Roles (Liên kết người dùng với quyền)
CREATE TABLE user_roles (
    user_number varchar(50)  NOT NULL,
    role_number varchar(50)  NOT NULL,
    PRIMARY KEY (user_number, role_number),
    FOREIGN KEY (user_number) REFERENCES users(user_number) ON DELETE CASCADE,
    FOREIGN KEY (role_number) REFERENCES roles(role_number) ON DELETE CASCADE
);

-- 4️⃣ Bảng Restaurants (Nhà hàng)
CREATE TABLE restaurants (
    restaurant_number varchar(50)  PRIMARY KEY,
    restaurant_name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(20),
    description TEXT,
    opening_hours VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 5️⃣ Bảng Menus (Thực đơn)
CREATE TABLE menus (
    menu_number varchar(50)  PRIMARY KEY,
    restaurant_number varchar(50)  NOT NULL,
    menu_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurant_number) REFERENCES restaurants(restaurant_number) ON DELETE CASCADE
);

-- 6️⃣ Bảng Reviews (Đánh giá nhà hàng)
CREATE TABLE reviews (
    review_number varchar(50)  PRIMARY KEY,
    user_number varchar(50)  NOT NULL,
    restaurant_number varchar(50)  NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_approved BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_number) REFERENCES users(user_number) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_number) REFERENCES restaurants(restaurant_number) ON DELETE CASCADE
);

-- 7️⃣ Bảng Favorites (Nhà hàng yêu thích)
CREATE TABLE favorites (
    favorite_number varchar(50)  PRIMARY KEY,
    user_number varchar(50)  NOT NULL,
    restaurant_number varchar(50)  NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_number) REFERENCES users(user_number) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_number) REFERENCES restaurants(restaurant_number) ON DELETE CASCADE
);

-- 8️⃣ Bảng Search History (Lịch sử tìm kiếm)
CREATE TABLE search_history (
    search_number varchar(50)  PRIMARY KEY,
    user_number varchar(50)  NOT NULL,
    search_query VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_number) REFERENCES users(user_number) ON DELETE CASCADE
);

-- 🟢 Thêm vai trò (Admin & Khách hàng)
INSERT INTO roles (role_number, role_name) VALUES
(1, 'admin'),
(2, 'customer');

-- 🟢 Thêm người dùng mẫu
INSERT INTO users (user_number, full_name, email, password_hash) VALUES
(0002, 'Minh', 'vanminh99@gmail.com', 'pbkdf2_sha256$870000$zXEWVCuPdheRm6QMuu6r0W$4zwk96wIAQs7DZcJZbkVMkxW+IwYAWACcI2PlwdVtWE='),
(101, 'Admin User', 'admin@example.com', 'hashed_password_admin'),
(102, 'John Doe', 'johndoe@gmail.com', 'hashed_password_123'),
(103, 'Alice Smith', 'alice@gmail.com', 'hashed_password_456'),
(1111, 'lam', 'vanlam@gmail.com', 'pbkdf2_sha256$870000$VefUimgQHEmrRvijrtkGDB$2OC0p+lN24GG7S1xIrKb1bwD479I53/p9QjzVNFQL8A='),
(174, 'Quang Minh', 'Ngocam@gmail.com', 'pbkdf2_sha256$870000$O85ASjDaz5NlMJRNPb3PiW$xLsBzT+D6SHbsdQK6WPb7FIESGsQsW/cRH8Nj38eQ1s='),
(2222, 'Hoang', 'vanlam002@gmail.com', 'pbkdf2_sha256$870000$Lq62uO3sqW25OL4I3CQt1p$USyuVRfHsZJzPMyyZkXchjxW0xVtu2wVazJLrwBFqwo='),
(774, 'aaaa', 'hungg@gmail.com', 'ssssssss'),
('H20', 'Trần Văn Lâm', 'vanlamn@gmail.com', 'pbkdf2_sha256$870000$MtSYL3isz3Jb9oetWrZqwV$tdWGqOi08um/9ghY3oVRoe8vdcZI4jW9/NoR7mXzd4M='),
('H24', 'Hữu Hoàng', 'hailhappy@gmail.com', 'pbkdf2_sha256$870000$UMsL5pIFUwZxST7gTrkzwG$oEyFRYnOH7kPpDsETodOItl9W7zxQx2U//fSulsT3ow='),
('H25', 'Trần Văn Lâm', 'vanlamem@gmail.com', 'pbkdf2_sha256$870000$LRuPaXmUF7nWuGs3fyyY4y$sIqhUn9kgs8GM0ySIa1mz5OFRcMKlPE08lnRJefbZAw='),
('H28', 'Ái My', 'Myne@gmail.com', 'pbkdf2_sha256$870000$gqhcAEhmnPldYwplb1RRbf$dUJezS3PzEgpyV0vOaXeQC0U35yCWjWNijTEv2UZHbg='),
('H29', 'Ái My', 'Myenne@gmail.com', 'pbkdf2_sha256$870000$m5HEQ0kRRmwAo0FyvkAeMB$VxhXYTaL4Um3t8wikO2404LNBYLjZYcJqGWpbrutZfM='),
('H71', 'Trung', 'Trung@gmail.com', 'pbkdf2_sha256$870000$XVR0pBnNvWN6tTvvI45BGM$nlWEHJYf9qshjvnoZ0CMGNR0zBhzQsvlBqHpqsdkyTY='),
('H880', 'Văn Lâm Trần', 'vanlamp04@gmail.com', 'pbkdf2_sha256$870000$cTv4Kq8dbJvW3N3WYtym0m$Nobh5rM+SVL6fQ95ssWbh6Vc1uCkdxCV2+cH76L+Am8='),
('H90', 'Trung Sơn', 'Trungne@gmail.com', 'pbkdf2_sha256$870000$p6XAVL0AAJFltQ9QdAOO3V$uV4WxlvQPb8fx/7PQ2AYITI1L8wIdmn7+dlmp/dT6LM='),
('Q44', 'Ngô Chính C...', 'cuong2004@gmail.com', 'pbkdf2_sha256$870000$bHDJUfX0qZdVOTwBFWgkBo$2+Ce/tfZVE4/7GJCQi47eRYv2WT14PA6/j+8QnpII44='),
('TDuong', 'Thùy Dương', 'thuyduong@gmail.com', 'pbkdf2_sha256$870000$NhPnJBctV8y6wACwCEaaC4$/nki70IZkorPS/FZgmn8ASJxRPGmcNjdsiOHsiGlc+c=');


-- 🟢 Gán quyền cho người dùng
INSERT INTO user_roles (user_number, role_number) VALUES
(101, 1), -- User 101 là Admin
(102, 2), -- User 102 là Khách hàng
(103, 2); -- User 103 là Khách hàng

-- 🟢 Thêm nhà hàng
INSERT INTO restaurants (
    restaurant_number, 
    restaurant_name, 
    address, 
    phone, 
    description, 
    opening_hours, 
    latitude, 
    longitude
) VALUES
(100, 'Izakaya Unatoto', '248 Đ. Nguyễn Hồng Đào, Phường 14, Tân Bình, Hồ Chí Minh, Việt Nam', '02835355154', 'Premium sushi.', '11:00 AM - 10:00 PM', 10.79041731, 106.64047450),
(11, 'Phong Vị', 'Nhà Hàng Lẩu Quận 5, 259 Trần Phú, Phường 7, Quận 5, Hồ Chí Minh', '0325563699', 'dR', '7h', 19.50000000, 19.60000000),
(13, 'Cháo sườn bà Hào', '109:15, Đ. Trần Khắc Chân, Phường Tân Định, Quận 1, Hồ Chí Minh, Việt Nam', '0343399879', 'Cháo Ngon', '6h-22h', 10.79532210, 106.69067258),
(199, 'Phở Việt', '22 Phan Văn Hớn, Tân Thới Nhất, Quận 12, Hồ Chí Minh, Việt Nam.', '0933125789', 'Đỉnh của chóp.', '6:00 AM - 10:00 PM', 10.81081200, 106.62689566),
(202, 'Ikai Sushi', '27 Đ. Hậu Giang, Phường 2, Quận 6, Hồ Chí Minh, Việt Nam', '0768618818', 'Premium sushi, fresh ingredients.', '11:00 AM - 10:00 PM', 10.74968000, 106.64829200),
(207, 'Maison', '27J Đ. Trần Nhật Duật, Phường Tân Định, Quận 1, Hồ Chí Minh 700000, Việt Nam', '0933774487', 'Chuyên các buổi tiệc lớn và hẹn hò.', '08:00 AM - 10:00 PM', 10.79327910, 106.69015200),
(2081, 'Ốc Bình Tân', '223 Đ. Bình Trị Đông, Bình Trị Đông A, Bình Tân, Hồ Chí Minh 700000, Việt Nam', '0939983339', 'Ngon khó cưỡng.', '7:00 AM - 2:00 PM', 10.76699400, 106.60961408),
(21, 'Phố Hàng Phở', '18 Đường Số 4, Hà Đô Centrosa Garden, Quận 10, Hồ Chí Minh, Việt Nam', '0333 858 789', 'Ngon nhất quận 10.', '6:00 AM - 10:00 PM', 10.77677320, 106.67901690),
(441, 'Nhà hàng Ấn Độ', '20 Nguyễn Cừ, Thảo Điền, Thủ Đức, Hồ Chí Minh 700000, Việt Nam', '0762782545', 'Chuẩn Ấn Độ', '8h', 10.80381854, 106.72858840),
(455, 'Hủ Tiếu Nam Vang', '34 Cô Bắc, Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh', '0973691733', 'ds', '6h-22h', 10.76637771, 106.69572083);


INSERT INTO menus (menu_number, restaurant_number, menu_name, description, price, image_url) VALUES
(302, 202, 'Salmon Sushi', 'Fresh salmon sushi', 9.99, 'https://cdn.tgdd.vn/Files/2021/11/24/1400129/10-quan-sushi-ngon-voi-gia-thanh-hop-li-nhat-sai-gon-cac-ban-nen-ghe-thu-202111241314096533.jpg'),
(111, 13, 'Cháo Gà', 'Cháo Gà Ngon', 5.74, 'https://mms.img.susercontent.com/vn-11134513-7r98o-lstx7hnsta6c9c@resize_ss1242x600!@crop_w1242_h600_cT'),
(20, 441, 'Súp lươn', 'Lươn nè', 47.01, 'https://lh5.googleusercontent.com/proxy/gEMy0_5F6_FUClgcAHbL_14lqd-DrzLY46l2H1Wbz5mkS4P0WfNhJl5XEwmoEYPMo6vAh8cYaFZUXGJWc02uKrsf5GoOtjr7RSko5v4KB6mrwsFtdhvmELN5Ggut63isyRGTmr0uUtE'),
(32, 202, 'Phở', 'Phở Việt', 3.99, 'https://i1-dulich.vnecdn.net/2020/03/04/7174177733-6c0af1a0b2-b-4778-1583317457.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=W5Ll2-T9398seyb0orXqFA'),
(77, 455, 'Cơm Tấm', 'Sườn bì chả', 20.01, 'https://simg.zalopay.com.vn/zlp-website/assets/com_tam_ngon_sai_gon_Com_tam_Tai_Com_tam_ngon_Sai_Gon_nuc_tieng_66d50ff8eb.jpg'),
(800, 11, 'Ốc Len', 'Ngon ngon', 30.01, 'https://cdn.tgdd.vn/Files/2021/07/31/1372103/2-cach-lam-oc-len-xao-dua-va-xao-sa-ot-thom-ngon-beo-ngay-don-gian-tai-nha-202107311825254395.jpg'),
(88, 2081, 'Lẩu cua đồng', 'Lẩu nè', 87.01, 'https://cdn.tgdd.vn/Files/2019/10/19/1210128/cach-nau-lau-cua-dong-ngot-nuoc-dam-huong-vi-que-nha-202106192036388069.jpg'),
(958, 441, 'Lươn đồng', 'Lươn nè', 47.01, 'https://static.vinwonders.com/production/sup-luon-nghe-an-banner.jpg');


-- 🟢 Thêm đánh giá
INSERT INTO reviews (review_number, user_number, restaurant_number, rating, comment, is_approved) VALUES
(402, 103, 202, 4, 'Fresh sushi but service was slow.', TRUE);

-- 🟢 Thêm nhà hàng yêu thích
INSERT INTO favorites (favorite_number, user_number, restaurant_number) VALUES
(170, 0002, 11), 
(100, 0002, 202), 
(502, 103, 202);

INSERT INTO search_history (search_number, user_number, search_query) VALUES
(601, 102, 'Pizza'),
(602, 103, 'Best sushi in Los Angeles'),
(199, 0002, 'Pizza'),
(400, 'TDuong', 'Sushi'),
('SEARCH_1744291045806_y3jfi', 0002, 'cháo'),
('SEARCH_1744364568087_5mpv0', 0002, 'Phở'),
('SEARCH_1744364591686_8ci8x', 'TDuong', 'Phở');




