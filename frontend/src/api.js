import axios from "axios";

// URL Backend Django
const API_BASE_URL = "http://127.0.0.1:8000/api/";

// Khởi tạo axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default function App() {
  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      Tailwind CSS đang hoạt động!
    </div>
  );
}

// API gọi danh sách users
export const getUsers = async () => {
  try {
    const response = await api.get("users/");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách người dùng:", error);
    return [];
  }
};

// API gọi danh sách menus
export const getMenus = async () => {
  try {
    const response = await api.get("menus/");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách menus:", error);
    return [];
  }
};

// API lấy danh sách nhà hàng
export const getRestaurants = async () => {
  try {
    const response = await api.get("restaurant/"); // Đường dẫn API Django
    console.log("Danh sách nhà hàng:", response.data); // Debug
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách nhà hàng:", error);
    return [];
  }
};

// Đăng ký
export const registerUser = async (userData) => {
  try {
    const response = await axios.post("register/", userData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Đăng nhập
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post("login/", credentials);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// API gọi danh sách Review
export const getReview = async () => {
  try {
    const response = await api.get("reviews/");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách review:", error);
    return [];
  }
};

export const sendMessageToChatbot = async (message) => {
  try {
      const response = await axios.post("http://127.0.0.1:8000/chat/chatbot/", { text: message });
      return response.data.response; // Nhận phản hồi từ Django
  } catch (error) {
      console.error("Lỗi khi gửi tin nhắn:", error);
      return "Lỗi kết nối đến chatbot.";
  }
};

// API gọi danh sách yêu thích
export const getSearch = async () => {
  try {
    const response = await api.get("search-history/");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách nhà hàng yêu thích:", error);
    return [];
  }
};