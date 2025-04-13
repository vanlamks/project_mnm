import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const RestaurantDetailh = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
      name: "Hủ tiếu",
      price: "50K",
      desc: "Vị ngon đặc trưng từ hủ tiếu",
      img: "https://img-global.cpcdn.com/recipes/90267c96d71f1775/1200x630cq70/photo.jpg",
    },
    {
      name: "Mì bò",
      price: "60K",
      desc: "Đậm đà đặc trưng từ bò và mì",
      img: "https://cdn.tgdd.vn/2021/09/CookDish/cach-nau-mi-thit-bo-sieu-hap-dan-cho-bua-sang-day-nang-luong-avt-1200x676.jpg",
    },
    {
      name: "Nước mía",
      price: "15K",
      desc: "giải khát mùa hè",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jJtRFSVSzK1vYheGYs5KpXlzFUlscHxBTQ&s",
    },
    {
      name: "Nước sâm",
      price: "10K",
      desc: "giải khát mùa hè",
      img: "https://dayphache.edu.vn/wp-content/uploads/2019/05/cong-thuc-nau-sam-mia-lau.jpg",
    },
    {
      name: "Cơm niêu",
      price: "165K",
      desc: "Chuẩn vị cơm nhà",
      img: "https://duonggiahotel.vn/wp-content/uploads/2023/10/nha-hang-com-nieu-da-nang-AB.jpg",
    },
    {
      name: "Bánh xèo",
      price: "45K",
      desc: "Đặc sản miền trung",
      img: "https://daylambanh.edu.vn/wp-content/uploads/2019/03/banh-xeo-bang-bot-pha-san-600x400.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
<div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-50 flex flex-col md:flex-row">
  <img
    src="https://topbaclieuaz.com/wp-content/uploads/2023/10/khach-san-thanh-dat-bac-lieu_5.jpg"
    alt="Hủ Tiếu Nam Vang Thành Đạt"
    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
  />
  <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
    <h1 className="text-4xl font-extrabold text-orange-700">🍜 Thành Đạt - Hủ Tiếu Nam Vang</h1>
    <p className="mt-2 text-gray-600">
      📍 34 Cô Bắc, Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh
    </p>
    <p className="text-gray-500">
      🕒 Giờ mở cửa: <strong>06:00 – 22:00</strong>
    </p>
    <p className="text-gray-700 font-semibold">📞 0973 691 733</p>

    <div className="flex items-center mt-3 text-yellow-500">
      <ReactStars count={5} value={4.5} size={24} edit={false} activeColor="#facc15" />
      <span className="ml-2 text-gray-600 text-sm">(4.5/5 từ 450+ đánh giá)</span>
    </div>

    <div className="flex flex-wrap gap-3 mt-5">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=34+C%C3%B4+B%E1%BA%AFc%2C+Ph%C6%B0%E1%BB%9Dng+C%E1%BA%A7u+%C3%94ng+L%C3%A3nh%2C+Qu%E1%BA%ADn+1%2C+H%E1%BB%93+Ch%C3%AD+Minh"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl flex items-center shadow">
      <MapPin className="w-4 h-4 mr-2" /> Chỉ đường
    </button>
  </a>

  <div className="relative">
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowShareMenu(!showShareMenu)}
      className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-xl flex items-center shadow"
    >
      {/* Nút chia sẻ ở đây */}
      Chia sẻ
    </motion.button>
        {showShareMenu && (
          <div className="absolute z-10 bg-white border rounded-lg mt-2 shadow-lg">
            <a
              href="https://www.facebook.com/profile.php?id=100083043115379"
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Facebook
            </a>
            <a
              href="https://zalo.me/pc"
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Zalo
            </a>
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
          Quán Thành Đạt là điểm dừng chân lý tưởng cho những tín đồ Hủ Tiếu Nam Vang chính hiệu. Từng sợi hủ tiếu dai mềm, nước dùng trong thanh, kết hợp cùng lòng heo, trứng cút, tôm tươi – tất cả tạo nên hương vị khó quên.
        </p>
        <p className="text-gray-700 mt-2 italic">“Vị ngon trọn vẹn – đậm chất Thành Đạt!”</p>
      </div>

      {/* Món ăn nổi bật */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">🍽 Món ăn nổi bật</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border-2 border-transparent hover:border-orange-400 rounded-xl p-5 shadow hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg w-full h-40 object-cover mb-3"
              />
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.518079356649!2d106.69426267578923!3d10.771947759272432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b5c7c2b2b%3A0x9b1465a6885a3e75!2zMzQgQ8O0IELhuq9jLCBQaMaw4budbmcgQ8OhdSBPbmcgTMOibmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaA!5e0!3m2!1sen!2s!4v1649485093731!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default RestaurantDetailh;
