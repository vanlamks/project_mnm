import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        user_number: "",
        full_name: "",
        email: "",
        password_hash: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Đăng ký thành công!");
                navigate("/dangnhap");  // Chuyển hướng sau khi đăng ký thành công
            } else {
                setError(data.message || "Đăng ký thất bại!");
            }
        } catch (error) {
            setError("Lỗi kết nối đến máy chủ!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Đăng ký</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" 
                        name="user_number" 
                        placeholder="Mã người dùng" 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="text" 
                        name="full_name" 
                        placeholder="Họ và tên" 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        name="password_hash" 
                        placeholder="Mật khẩu" 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;