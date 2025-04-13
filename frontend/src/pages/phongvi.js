import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const PhongViDetail = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
      name: "🔥 Lẩu Mala Đài Loan",
      price: "Liên hệ giá",
      desc: "Vị cay tê đặc trưng từ ớt và hoa tiêu",
      img: "https://pos.nvncdn.com/3a420a-79556/art/20201227_rLr8BPpuXCWxSPC15DP2TLgS.jpg",
    },
    {
      name: "🔥 Lẩu Mala Tứ Xuyên",
      price: "Liên hệ giá",
      desc: "Đậm đà và nồng nàn vị cay",
      img: "https://channel.mediacdn.vn/2019/1/28/photo-1-154867008310526678053.jpg",
    },
    {
      name: "🦐 Lẩu xương hải sản bò",
      price: "249K",
      desc: "Xương hầm thanh ngọt, topping hải sản và thịt",
      img: "https://media2.gody.vn/public/mytravelmap/images/2020/4/23/thinh1596/e344138551a63320dfd5293436a05ed2.jpg",
    },
    {
      name: "🌶️ Lẩu Tomyum ba chỉ bò",
      price: "189K",
      desc: "Hương vị Thái chua cay, thơm ngon",
      img: "https://bizweb.dktcdn.net/100/068/387/files/gia-vi-lau-thai-2.jpg?v=1554264891955",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-orange-100 to-yellow-50
 flex flex-col md:flex-row">
        <img
          src="https://cdn-images.vtv.vn/thumb_w/640/2022/12/21/photo-3-16716106972422052059081.jpg"
          alt="Nhà Hàng Phong Vị"
          className="w-full md:w-1/2 h-80 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
          <h1 className="text-4xl font-extrabold text-orange-700">🍲 Nhà Hàng Phong Vị</h1>
          <p className="mt-2 text-gray-600">📍 259 Trần Phú, P.7, Q.5, Hồ Chí Minh</p>
          <p className="text-gray-500">🕒 Giờ mở cửa: <strong>7:00 sáng</strong></p>
          <p className="text-gray-700 font-semibold">📞 0325 563 699</p>

          <div className="flex items-center mt-3 text-yellow-500">
            <ReactStars count={5} value={4.4} size={24} edit={false} activeColor="#facc15" />
            <span className="ml-2 text-gray-600 text-sm">(4.4/5 từ 1,200+ đánh giá)</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=259+Tr%E1%BA%A7n+Ph%C3%BA%2C+P.7%2C+Q.5%2C+H%E1%BB%93+Ch%C3%AD+Minh"
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
          Nhà hàng Phong Vị nổi bật với các món lẩu đa dạng như Lẩu Tomyum, Lẩu Hải Sản, Lẩu Mala,... với nguyên liệu tươi ngon, phục vụ chuyên nghiệp.
        </p>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Đây là địa điểm lý tưởng để tụ họp bạn bè, gia đình hay tổ chức các bữa tiệc nhẹ tại trung tâm Quận 5.
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
        <h3 className="text-lg font-semibold text-red-600">{item.name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
        <p className="text-red-700 font-bold mt-2">{item.price}</p>
      </motion.div>
    ))}
  </div>
</div>

      {/* Bản đồ */}
      <div className="mt-10">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4017111919244!2d106.67206831533133!3d10.757391513201856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed3b7389d95%3A0x0!2zMjU5IFRy4bqnbiBQaMO6LCBQaMaw4budbmcgNywgUXXDoW4gNSwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1712823283774"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PhongViDetail;
