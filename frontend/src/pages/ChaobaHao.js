import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const ChaoSuonBaHaoDetail = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
      name: "🥣 Cháo sườn truyền thống",
      desc: "Cháo mịn, sườn non mềm, ăn kèm hành phi thơm nức.",
      price: "25.000đ",
      img: "https://static.hawonkoo.vn/hwks1/images/2023/10/chao-suon-4.jpg",
    },
    {
      name: "🍖 Xíu mại",
      desc: "Viên xíu mại đậm đà, béo ngậy, ăn cùng cháo cực hợp.",
      price: "10.000đ",
      img: "https://cdn.tgdd.vn/Files/2021/10/13/1390088/vao-bep-lam-xiu-mai-sot-ca-an-voi-com-hay-banh-mi-deu-ngon-so-dzach-202110132259248256.jpg",
    },
    {
      name: "🐷 Bao tử, gan, phèo",
      desc: "Các loại topping giòn dai, ăn kèm cháo tạo cảm giác lạ miệng.",
      price: "15.000đ",
      img: "https://bepxua.vn/wp-content/uploads/2021/03/bao-tu-ham-tieu2.jpg",
    },
    {
      name: "🥚 Trứng bắc thảo",
      desc: "Trứng bắc thảo béo bùi, tăng thêm hương vị cho cháo.",
      price: "12.000đ",
      img: "https://cdn.tgdd.vn/2021/03/CookProduct/1200-1200x676-48.jpg",
    },
  ];
  

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
<div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-50 flex flex-col md:flex-row">
  <img
    src="https://static.hawonkoo.vn/hwks1/images/2023/10/chao-suon-4.jpg"
    alt="Cháo Sườn Bà Hào"
    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
  />
  <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
    <h1 className="text-4xl font-extrabold text-orange-700">🥣 Cháo Sườn Bà Hào</h1>
    <p className="mt-2 text-gray-600">
      📍 109/15 Trần Khắc Chân, P. Tân Định, Q.1, Hồ Chí Minh
    </p>
    <p className="text-gray-500">🕒 17:00 - 09:00 sáng hôm sau</p>
    <p className="text-gray-700 font-semibold">📞 0343 399 879</p>

    <div className="flex items-center mt-3 text-yellow-500">
      <ReactStars count={5} value={4.5} size={24} edit={false} activeColor="#facc15" />
      <span className="ml-2 text-gray-600 text-sm">(4.5/5 từ 2,000+ đánh giá)</span>
    </div>

    <div className="flex flex-wrap gap-3 mt-5">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=109%2F15+Tr%E1%BA%A7n+Kh%E1%BA%AFc+Ch%C3%A2n%2C+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+%C4%90%E1%BB%8Bnh%2C+Qu%E1%BA%ADn+1%2C+H%E1%BB%93+Ch%C3%AD+Minh"
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
          Quán cháo của <strong>bà Nguyễn Thị Hào</strong> đã tồn tại hơn 45 năm, phục vụ hàng nghìn lượt khách mỗi ngày.
          Từ một gánh cháo nhỏ trong con hẻm, nay trở thành địa chỉ quen thuộc của người Sài Gòn yêu thức khuya.
        </p>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Từ cháo sườn truyền thống đến các món ăn kèm như xíu mại, bao tử, gan, trứng bắc thảo,... mang đến hương vị đậm đà, đặc trưng khó quên.
        </p>
      </div>

      {/* Thực đơn */}
<div className="mt-10">
  <h2 className="text-2xl font-bold text-red-700 mb-4">🍽 Món ăn nổi bật</h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {menuItems.map((item, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: idx * 0.1 }}
        className="bg-white border-2 border-transparent hover:border-red-400 rounded-xl p-5 shadow hover:shadow-xl"
      >
        <img
          src={item.img}
          alt={item.name}
          className="rounded-lg w-full h-40 object-cover mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
        {item.price && (
          <p className="text-red-600 mt-2 font-medium">Giá: {item.price}</p>
        )}
      </motion.div>
    ))}
  </div>
</div>


      {/* Bản đồ */}
      <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          className="w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2104130388598!2d106.69071549562881!3d10.795416946552061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ce7f461ad1%3A0x5e3fc80397ba83cc!2zMTA5LzE1IMSQLiBUcuG6p24gS2jhuqFjIENo4bqnbiwgVMOibiDEkOG7i25oLCBRdeG6rW4gMSwgSG_DoCBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1711567890123"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ChaoSuonBaHaoDetail;
