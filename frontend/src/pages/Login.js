import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
            const response = await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Lưu token và thông tin người dùng vào localStorage
                localStorage.setItem("user_number", data.user_number);
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("full_name", data.full_name);
                localStorage.setItem("email", data.email);
                
                alert("Đăng nhập thành công!");
                navigate("/");
            } else {
                setError(data.message || "Đăng nhập thất bại!");
            }
        } catch (error) {
            setError("Lỗi kết nối đến máy chủ!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-center text-xl font-bold mb-4">Đăng nhập</h2>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Nhập email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Nhập mật khẩu"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Đăng nhập
                    </button>
                </form>
                <div className="flex justify-between mt-4">
                    <a className="text-sm text-blue-900" href="/quenmatkhau">Quên mật khẩu?</a>
                    <a className="text-sm text-blue-900" href="/dangky">Bạn chưa có tài khoản?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
