import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const NhaHangAnDo = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
      name: "Kaju Katali",
      price: "77K",
      desc: "Ngon khó cưỡng",
      img: "https://5.imimg.com/data5/VQ/VT/GN/SELLER-68526974/kaju-katli-2-500x500.jpg",
    },
    {
      name: "Besan Ladoo",
      price: "99K",
      desc: "Nên thử nhé",
      img: "https://c.ndtvimg.com/2019-09/fufi21u_besan-ladoo_625x300_11_September_19.jpg",
    },
    {
      name: "Nước dừa",
      price: "50K",
      desc: "Mát lạnh từ thiên nhiên",
      img: "https://rachelcooksthai.com/wp-content/uploads/2011/02/How-to-Open-a-Young-Coconut-4.jpg",
    },
    {
      name: "Boondi Ladoo",
      price: "87K",
      desc: "Món đậm từ Ấn Độ",
      img: "https://www.gopalsweetsindia.com/cdn/shop/files/DSC01542.jpg?v=1718540165&width=1200",
    },
    {
      name: "Namakpara",
      price: "122K",
      desc: "Món ngọt từ Ấn Độ",
      img: "https://i.ytimg.com/vi/YKudM1Lvq68/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqcHI3gEefLPYNeaTtpmodg3V3vg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-50 flex flex-col md:flex-row">
        <img
          src="https://cdn.tgdd.vn/Files/2021/12/20/1405656/10-nha-hang-an-do-o-sai-gon-co-huong-vi-moi-la-202112210024286286.jpg"
          alt="Nhà hàng Ấn Độ"
          className="w-full md:w-1/2 h-80 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
          <h1 className="text-4xl font-extrabold text-orange-700">🍛 Pranaam Bhart</h1>
          <p className="mt-2 text-gray-600">📍 20 Nguyễn Cừ, Thảo Điền, Thủ Đức, Hồ Chí Minh</p>
          <p className="text-gray-500">🕒 Giờ mở cửa: <strong>08:00 – 22:00</strong></p>
          <p className="text-gray-700 font-semibold">📞 0762 782 545</p>

          <div className="flex items-center mt-3 text-yellow-500">
            <ReactStars count={5} value={4.3} size={24} edit={false} activeColor="#facc15" />
            <span className="ml-2 text-gray-600 text-sm">(4.3/5 từ 540+ đánh giá)</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl flex items-center shadow">
              <MapPin className="w-4 h-4 mr-2" /> Chỉ đường
            </button>
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-xl flex items-center shadow"
              >
                <Share className="w-4 h-4 mr-2 animate-pulse" /> Chia sẻ
              </motion.button>
              {showShareMenu && (
                <div className="absolute z-10 bg-white border rounded-lg mt-2 shadow-lg">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Facebook</a>
                  <a href="https://zalo.me/pc" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Zalo</a>
                </div>
              )}
            </div>
            <button
              onClick={handleReviewClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl flex items-center shadow"
            >
              ⭐ Đánh giá
            </button>
          </div>
        </div>
      </div>

      {/* Giới thiệu */}
      <div className="mt-10 p-6 rounded-2xl bg-white/50 backdrop-blur-xl shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-orange-700">Giới thiệu</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Nhà hàng Ấn Độ Pranaam Bhart là địa điểm lý tưởng cho những ai yêu thích hương vị Ấn truyền thống.
          Mỗi món ăn là một sự kết hợp tinh tế giữa gia vị nồng nàn và tình yêu ẩm thực.
        </p>
        <p className="text-gray-700 mt-2 italic">
          “Chuẩn Ấn Độ” – không chỉ là khẩu hiệu, mà là lời cam kết về hương vị đậm chất Diwali!
        </p>
      </div>

      {/* Thực đơn */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">🍽 Món ăn nổi bật</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white border-2 border-transparent hover:border-orange-400 rounded-xl p-5 shadow hover:shadow-xl"
            >
              <img src={item.img} alt={item.name} className="rounded-lg w-full h-40 object-cover mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-orange-600 mt-1 font-medium">Giá: {item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bản đồ */}
      <div className="mt-10">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-2xl shadow-lg"
          src="https://www.google.com/maps?q=10.804169454179977,106.72863950529987&hl=vi&z=17&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default NhaHangAnDo;
