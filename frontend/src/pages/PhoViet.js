import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const PhoVietDetail = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    { name: "Phở Tái Nạm", price: "79K",desc: "Đậm đà hương vị Việt", img: "https://phovihoang.vn/wp-content/uploads/2018/02/N%E1%BA%A0M-T%C3%81I.png" },
    { name: "Phở Tái Gân", price: "85K",desc: "Ngon ngon", img: "https://bundau57.com/wp-content/uploads/2024/04/pho-bo-tai-gan-e1712753963245.jpg" },
    { name: "Phở Xương", price: "90K",desc: "Ngon ngọt miễn chê", img: "https://pho10.net/upload/sanpham/24126dcb7d309f6ec621-6824.jpg" },
    { name: "Phở Bò Hầm", price: "95K",desc: "Đậm đà, lôi cuốn", img: "https://alotoday.vn/uploads/images/202308/img_x300_64f01e2b638507-34632890-85481970.jpg" },
    { name: "Phở Thập Cẩm", price: "100K",desc: "Đầy đặn đủ 2 người ăn", img: "https://botocuchigiasi.net/wp-content/uploads/2021/09/unnamed-2.jpg" },
    { name: "Phở Lõi Thăn", price: "110K",desc: "Thử đi ngon lắm", img: "https://botocuchigiasi.vn/wp-content/uploads/2022/01/Cach-lam-pho-nam-bo-thom-ngon-hap-dan.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-orange-100 to-yellow-50
 flex flex-col md:flex-row">
        <img
          src="https://media.istockphoto.com/id/508894120/vi/anh/ph%E1%BB%9F-s%C3%BAp-b%C3%B2-truy%E1%BB%81n-th%E1%BB%91ng-vi%E1%BB%87t-nam.jpg?s=612x612&w=0&k=20&c=ZmCcWATLBpexpU9YZ8cFfkHVuPce9MpJ6sPgBLVu-4Q="
          alt="Phở Việt"
          className="w-full md:w-1/2 h-80 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
          <h1 className="text-4xl font-extrabold text-orange-700">🍲 Phở Việt</h1>
          <p className="mt-2 text-gray-600">📍 22 Phan Văn Hớn, Tân Thới Nhất, Quận 12, Hồ Chí Minh</p>
          <p className="text-gray-500">🕒 Giờ mở cửa: <strong>6:00 – 22:00</strong></p>
          <p className="text-gray-700 font-semibold">📞 0933 125 789</p>

          <div className="flex items-center mt-3 text-yellow-500">
            <ReactStars count={5} value={4.9} size={24} edit={false} activeColor="#facc15" />
            <span className="ml-2 text-gray-600 text-sm">(4.9/5 từ 980+ đánh giá)</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=22+Phan+V%C4%83n+H%E1%BB%9Bn%2C+T%C3%A2n+Th%E1%BB%9Bi+Nh%E1%BA%A5t%2C+Qu%E1%BA%ADn+12%2C+H%E1%BB%93+Ch%C3%AD+Minh"
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
        <h2 className="text-2xl font-bold text-red-700">Giới thiệu</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Phở Việt – nơi giữ gìn hương vị <strong>phở Bắc truyền thống</strong> giữa lòng Sài Gòn.
          Nước dùng trong vắt, thơm nức mùi xương ninh, từng miếng thịt bò mềm ngọt đúng chuẩn.
        </p>
        <p className="text-gray-700 mt-2 italic">
          Không gian bình dị nhưng ấm cúng, phục vụ tận tâm, món ăn thì khỏi bàn – đúng chuẩn “đỉnh của chóp” như dân Quận 12 vẫn thường nói!
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
              <p className="text-gray-600 font-medium">Giá: {item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bản đồ */}
      <div className="mt-10">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-xl shadow-lg"
          src="https://www.google.com/maps?q=10.827614495893187,106.62418067105855&hl=vi&z=17&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PhoVietDetail;
