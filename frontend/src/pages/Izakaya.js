import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const Izakaya = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
        name: "🍣 Sushi Lươn Nướng",
        price: "119K",
        desc: "Thơm lừng, đậm vị",
        img: "https://product.hstatic.net/200000300020/product/luon_a4385ff62c2d47a8a3a1e1f233196f3f.png"
      },
      {
        name: "🥢 Cơm Lươn Đặc Biệt",
        price: "299K – 399K",
        desc: "Cơm lươn sốt ngọt, thơm mềm",
        img: "https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2020_10_10/118691890_145368397237486_226001583072806427_n.jpg"
      },
      {
        name: "🍣 Sushi Cá Hồi Khè",
        price: "119K",
        desc: "Cá hồi tươi, khè lửa thơm nức",
        img: "https://product.hstatic.net/1000030244/product/maki-ca-hoi_871baf3452a249008cc8e4f5c6a71f8f_1024x1024.jpg"
      },
      {
        name: "🍤 Sushi Hải Sản 3 Loại",
        price: "119K",
        desc: "Đủ vị tôm, mực, trứng cá",
        img: "https://file.hstatic.net/200000391061/article/sushi-mon-an-quoc-dan-cua-nguoi-nhat-2_c940b210a8094194b29216c31a3620d0.jpg"
      },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
<div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-50 flex flex-col md:flex-row">
  <img
    src="https://i0.wp.com/unatotovietnam.com/wp-content/uploads/2025/03/IMG_4061.jpg?resize=1020%2C765&ssl=1"
    alt="Izakaya Unatoto"
    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
  />
  <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
    <h1 className="text-4xl font-extrabold text-orange-700">🍱 Izakaya Unatoto</h1>
    <p className="mt-2 text-gray-600">
      📍 248 Nguyễn Hồng Đào, P.14, Tân Bình, Hồ Chí Minh
    </p>
    <p className="text-gray-500">
      🕒 Giờ mở cửa: <strong>10:00 – 22:00</strong>
    </p>
    <p className="text-gray-700 font-semibold">📞 0283 5355 154</p>

    <div className="flex items-center mt-3 text-yellow-500">
      <ReactStars count={5} value={4.6} size={24} edit={false} activeColor="#facc15" />
      <span className="ml-2 text-gray-600 text-sm">(4.6/5 từ 620+ đánh giá)</span>
    </div>

    <div className="flex flex-wrap gap-3 mt-5">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=248+Nguy%E1%BB%85n+H%E1%BB%93ng+%C4%90%C3%A0o%2C+P.14%2C+T%C3%A2n+B%C3%ACnh%2C+H%E1%BB%93+Ch%C3%AD+Minh"
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
              href="https://facebook.com"
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
        <h2 className="text-2xl font-bold text-red-700">Giới thiệu</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Izakaya Unatoto là chuỗi nhà hàng nổi tiếng tại Nhật, chuyên về các món lươn chất lượng cao với mức giá hợp lý.
          Không gian ấm cúng, thực đơn đậm đà hương vị Nhật Bản, đặc biệt là món cơm lươn trứ danh.
        </p>
        <p className="text-gray-700 mt-2 italic">
          “Unagi chuẩn Nhật, đậm đà vị lươn nướng thơm lừng!”
        </p>
      </div>

      {/* Thực đơn */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4">🍽 Món ăn nổi bật</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white border-2 border-transparent hover:border-red-400 rounded-xl p-5 shadow hover:shadow-xl"
            >
              <img src={item.img} alt={item.name} className="rounded-lg w-full h-40 object-cover mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-red-600 mt-1 font-medium">Giá: {item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bản đồ */}
      <div className="mt-10">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-2xl shadow-lg"
          src="https://www.google.com/maps?q=10.7973398,106.6410845&hl=vi&z=17&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Izakaya;
