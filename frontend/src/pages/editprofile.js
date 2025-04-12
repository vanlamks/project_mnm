import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [previewAvatar, setPreviewAvatar] = useState(null);
    const navigate = useNavigate();

    const userNumber = localStorage.getItem('user_number');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/users/${userNumber}/`);
                const data = await response.json();
                setFullName(data.full_name || '');
                setEmail(data.email || '');
                setPreviewAvatar(data.avatar_image || null);
            } catch (error) {
                console.error('Lỗi khi tải thông tin user:', error);
            }
        };

        fetchUser();
    }, [userNumber]);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
            setPreviewAvatar(URL.createObjectURL(file)); // Preview ảnh mới
        }
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('full_name', fullName);
        formData.append('email', email);
        if (avatar) formData.append('avatar_image', avatar); // Nếu có ảnh mới

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${userNumber}/`, {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                navigate('/profile'); // Quay lại trang profile sau khi lưu thành công
            } else {
                console.error('Lỗi khi cập nhật thông tin:', await response.text());
            }
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Chỉnh sửa thông tin cá nhân</h2>
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Họ và tên</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full border px-4 py-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border px-4 py-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Ảnh đại diện</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="mb-2"
                    />
                    {previewAvatar && (
                        <img
                            src={previewAvatar}
                            alt="Avatar preview"
                            className="h-24 w-24 rounded-full object-cover"
                        />
                    )}
                </div>
                <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Lưu thay đổi
                </button>
            </div>
        </div>
    );
};

export default EditProfile;