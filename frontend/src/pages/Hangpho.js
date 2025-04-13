import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const PhoHangPhoDetail = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
      name: "Phở Lõi Rùa",
      price: "110K",
      desc: "Lõi rùa mềm, thơm, đậm vị", // ➕ thêm dòng này
      img: "https://vcdn1-ngoisao.vnecdn.net/2024/06/25/bigtummii-1686411575-312216904-4923-5568-1719330202.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=Rhqj1CqRnE4Ic8W_PLzSkQ"
    },
    {
      name: "Phở Tái Lăn",
      price: "89K",
      desc: "Ngon chuẩn bắc",
      img: "https://hidafoods.vn/wp-content/uploads/2024/07/pho-bo-tai-lan-3.jpg"
    },
    {
      name: "Phở Bắp, Nạm, Gầu, Nhừ, Trộn",
      price: "79K",
      desc: "Nên thử",
      img: "https://inox-vietnam.vn/wp-content/uploads/2021/01/pho-bo-truyen-thong.jpg"
    },
    {
      name: "Phở Gân / Đuôi",
      price: "89K",
      desc: "Ngon khó cưỡng",
      img: "https://phovihoang.vn/wp-content/uploads/2018/02/tai-gan-1.png"
    },
    {
      name: "Phở Thập Cẩm",
      price: "100K",
      desc: "Đầy đủ từ gân, tái, nạm",
      img: "https://phovihoang.vn/wp-content/uploads/2018/01/48267.png"
    },
    {
      name: "Phở Lõi Thập Cẩm",
      price: "120K",
      desc: "Siêu đặc biệt",
      img: "https://dulichmedia.dalat.vn//Images/LDG/bongconganh/Ph%E1%BB%9F%20Th%C6%B0ng/cropper_636937078491131397.jpg"
    }
  ];
  

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
     {/* Header */}
<div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-50 flex flex-col md:flex-row">
  <img
    src="https://blog.dktcdn.net/files/mo-quan-pho.png"
    alt="Phố Hàng Phở"
    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
  />
  <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
    <h1 className="text-4xl font-extrabold text-orange-700">🍜 Phố Hàng Phở</h1>
    <p className="mt-2 text-gray-600">📍 18 Đường Số 4, Hà Đô Centrosa Garden, Quận 10, Hồ Chí Minh</p>
    <p className="text-gray-500">🕒 Giờ mở cửa: <strong>6:00 – 22:00</strong></p>
    <p className="text-gray-700 font-semibold">📞 0333 858 789</p>

    <div className="flex items-center mt-3 text-yellow-500">
      <ReactStars count={5} value={4.9} size={24} edit={false} activeColor="#f59e0b" />
      <span className="ml-2 text-gray-600 text-sm">(4.9/5 từ 1.200+ đánh giá)</span>
    </div>

    <div className="flex flex-wrap gap-3 mt-5">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=18+%C4%90%C6%B0%E1%BB%9Dng+S%E1%BB%91+4%2C+H%C3%A0+%C4%90%C3%B4+Centrosa+Garden%2C+Qu%E1%BA%ADn+10%2C+H%E1%BB%93+Ch%C3%AD+Minh"
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
        <h2 className="text-2xl font-bold text-gray-800">Giới thiệu</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Phở Hàng Phở nổi tiếng với nước dùng trong, ngọt thanh tự nhiên từ xương bò hầm lâu, cùng sợi phở mềm mại. Hương vị đặc trưng khiến bạn khó quên từ lần đầu.
        </p>
        <p className="text-gray-700 mt-2 italic">
          "Ngon nhất Quận 10" – không phải là slogan, mà là lời công nhận từ hàng nghìn thực khách mỗi ngày.
        </p>
      </div>

      {/* Thực đơn */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽 Món ăn nổi bật</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white border-2 border-transparent bg-clip-padding hover:border-orange-400 rounded-xl p-5 shadow hover:shadow-xl"
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
          src="https://www.google.com/maps?q=10.772084,106.673105&hl=vi&z=17&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PhoHangPhoDetail;
