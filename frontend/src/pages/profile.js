import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [avatarImage, setAvatarImage] = useState("https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/484130931_1782531922320233_7579058599679105257_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=70ITH47RUXwQ7kNvwGE44tL&_nc_oc=AdkXY-sPrhBaCERUhV2ULJzJiZuS8MHXsUnMKYEP-vOyyKbXndtmvuQGyPgze5ufTXCUt_A-atv3_Ljy1KavKdxb&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=PztMM8n6c0-6b3AdoHhyhw&oh=00_AfFR8m18adqMCUlFd4GbeG4i8S-bHeMO7_VvDa3ibyDi6Q&oe=67FEB095");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const userNumber = localStorage.getItem('user_number');
            if (!userNumber) return;

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/users/${userNumber}/`);
                if (!response.ok) throw new Error("Failed to fetch user data");
                const data = await response.json();
                setUser(data);
                if (data.avatar_image) setAvatarImage(data.avatar_image);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUser();
    }, []);

    const handleReviewsClick = () => navigate('/reviews');
    const handleEditProfile = () => navigate('/suathongtin');
    const handleFavoriteRestaurants = () => navigate('/timkiem');
    const handleLogout = () => {
        localStorage.clear();
        navigate('/dangnhap');
    };

    const handleAvatarUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/upload/avatar/', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setAvatarImage(data.avatar_image_url);
                alert("Tải ảnh lên thành công!");
            } else {
                alert("Tải ảnh thất bại!");
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert("Lỗi khi tải ảnh!");
        }
    };

    if (!user) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <p className="text-xl text-gray-600">Đang tải thông tin người dùng...</p>
        </div>
    );

    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="w-2/3 bg-white rounded-lg shadow-lg p-6">
                <div
                    className="relative h-40 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url('https://i.imgur.com/zQZSWrt.jpg')` }}
                >
                    <div className="absolute bottom-0 left-0 p-4">
                        <img
                            src={avatarImage}
                            alt="Avatar"
                            className="h-24 w-24 rounded-full border-4 border-white"
                        />
                        <h2 className="text-2xl font-bold text-white mt-2">{user.full_name}</h2>
                        <p className="text-white">{user.email}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-around">
                    <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                        onClick={handleEditProfile}
                    >
                        Chỉnh sửa thông tin
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Hoạt động</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={handleReviewsClick}
                            >
                                Đánh giá của tôi
                            </button>
                        </li>
                        <li>
                            <label className="text-blue-500 hover:underline cursor-pointer">
                                Tải ảnh đại diện mới
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarUpload}
                                    className="hidden"
                                />
                            </label>
                        </li>
                        <li>
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={handleFavoriteRestaurants}
                            >
                                Nhà hàng yêu thích
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
