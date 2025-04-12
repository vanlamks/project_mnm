import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const IkaiSushiDetail = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const dishes = [
    {
      name: "🍣 Sushi tổng hợp",
      price: "Liên hệ giá",
      desc: "Ngon khó tả",
      img: "https://sushikuan.vn/wp-content/uploads/2024/09/SS03.png",
    },
    {
      name: "🥗 Salad rong biển & cá hồi",
      price: "79K",
      desc: "Ngon ngon, thịt cá hồi còn tươi",
      img: "https://rongnhont.com/wp-content/uploads/2021/07/salad-rong-nho-ca-hoi-2.jpeg",
    },
    {
      name: "🍤 Tempura rau củ & hải sản",
      price: "89K",
      desc: "Thanh đạm giàu dinh dưỡng",
      img: "https://cdn.tgdd.vn/2020/10/CookProduct/thumbcn-1200x676-8.jpg",
    },
    {
      name: "🍜 Mì Udon nóng",
      price: "69K",
      desc: "Mì nóng hổi, thơm ngon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRwjJbQO9wyC_gyULWCFLTSyIt53UVhjVYA&s",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
<div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-50 flex flex-col md:flex-row">
  <img
    src="https://xuongmocso1.com/uploads/images/thiet-ke-nha-hang-sushi-2.jpg"
    alt="Ikai Sushi"
    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
  />
  <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
    <h1 className="text-4xl font-extrabold text-orange-700">🍣 Ikai Sushi</h1>
    <p className="mt-2 text-gray-600">📍 27 Đ. Hậu Giang, Phường 2, Quận 6, Hồ Chí Minh</p>
    <p className="text-gray-500">🕒 Giờ mở cửa: <strong>11h – 22h</strong></p>
    <p className="text-gray-700 font-semibold">📞 0768 618 818</p>

    <div className="flex items-center mt-3 text-yellow-500">
      <ReactStars count={5} value={4.5} size={24} edit={false} activeColor="#facc15" />
      <span className="ml-2 text-gray-600 text-sm">(4.5/5 từ 800+ đánh giá)</span>
    </div>

    <div className="flex flex-wrap gap-3 mt-5">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center shadow">
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
        <h2 className="text-2xl font-bold text-blue-700">Giới thiệu</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Ikai Sushi mang đến trải nghiệm ẩm thực Nhật Bản chuẩn mực giữa lòng Sài Gòn. Với nguyên liệu tươi ngon và cách chế biến tỉ mỉ, nhà hàng là điểm đến lý tưởng cho các tín đồ sushi, sashimi và món ăn Nhật hiện đại.
        </p>
        <p className="text-gray-700 mt-2 italic">
          “Vị Nhật chuẩn vị” – nơi giao thoa giữa truyền thống và hiện đại trong từng món ăn.
        </p>
      </div>

      {/* Thực đơn */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🍽 Món ăn nổi bật</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white border-2 border-transparent hover:border-blue-400 rounded-xl p-5 shadow hover:shadow-xl"
            >
              <img src={item.img} alt={item.name} className="rounded-lg w-full h-40 object-cover mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-blue-600 mt-1 font-medium">Giá: {item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bản đồ */}
      <div className="mt-10">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-2xl shadow-lg"
          src="https://www.google.com/maps?q=10.740526102593373,106.63688777502627&hl=vi&z=17&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default IkaiSushiDetail;
