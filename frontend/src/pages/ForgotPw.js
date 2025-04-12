import { useState } from "react";

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: ""
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if (!formData.email || !formData.full_name) {
            setError("Vui lòng nhập đầy đủ họ tên và email.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/pw/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setIsCodeSent(true);
                setMessage("✅ Mã xác nhận đã được gửi đến email của bạn.");
            } else {
                setError(data.message || "❌ Không tìm thấy tài khoản.");
            }
        } catch (error) {
            setError("⚠️ Không thể kết nối đến máy chủ.");
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if (!verificationCode || !newPassword) {
            setError("Vui lòng nhập mã xác nhận và mật khẩu mới.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/reset-password/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    code: verificationCode,
                    new_password: newPassword
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("🎉 Mật khẩu đã được cập nhật thành công!");
                // Reset tất cả
                setFormData({ full_name: "", email: "" });
                setVerificationCode("");
                setNewPassword("");
                setIsCodeSent(false);
            } else {
                setError(data.message || "❌ Mã xác nhận không đúng.");
            }
        } catch (error) {
            setError("⚠️ Không thể kết nối đến máy chủ.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">🔐 Quên Mật Khẩu</h2>

            {message && <p className="text-green-600 mb-4 text-center">{message}</p>}
            {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

            {!isCodeSent ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Họ và tên"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mb-3 border rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mb-3 border rounded"
                    />
                    <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white p-2 rounded">
                        Gửi yêu cầu
                    </button>
                </form>
            ) : (
                <form onSubmit={handleResetPassword}>
                    <input
                        type="text"
                        placeholder="Mã xác nhận"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                        className="w-full p-2 mb-3 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu mới"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="w-full p-2 mb-3 border rounded"
                    />
                    <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white p-2 rounded">
                        Đặt lại mật khẩu
                    </button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
