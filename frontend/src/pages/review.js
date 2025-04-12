import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const navigate = useNavigate();
  const [userReviews, setUserReviews] = useState([]);
  const token = localStorage.getItem("userToken") || null; // Kiểm tra token hợp lệ
  const user_number = localStorage.getItem("user_number") || null;

  // Kiểm tra đăng nhập
  useEffect(() => {
    if (!token || token === "null") {
      alert("Bạn cần đăng nhập để xem bình luận của mình!");
      navigate("/dangnhap");
    } else {
      fetchUserReviews();
    }
  }, [token, navigate]);

  // Lấy bình luận của người dùng
  const fetchUserReviews = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/reviews/user/${user_number}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,  // Gửi token lên backend
          "Content-Type": "application/json"
        }
      });

      if (response.status === 401) {
        alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        localStorage.removeItem("userToken"); // Xóa token cũ
        navigate("/dangnhap");
        return;
      }

      const data = await response.json();
      setUserReviews(data.length > 0 ? data : []);
    } catch (error) {
      console.error("Lỗi khi lấy bình luận:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Bình luận của bạn</h1>

      <div className="mt-4 space-y-4">
        {userReviews.length > 0 ? (
          userReviews.map((review) => (
            <div key={review.review_number} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="font-bold">{review.name}</p>
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} className="w-4 h-4">★</span>
                ))}
              </div>
              <p className="text-gray-700 mt-1">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Bạn chưa có bình luận nào.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
