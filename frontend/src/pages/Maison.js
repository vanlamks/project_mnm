import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const MaisonDetail = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
      name: "Bò nướng sốt tiêu đen",
      price: "135K",
      desc: "Thị bò thơm ngon",
      img: "https://i-giadinh.vnecdn.net/2022/10/09/-5080-1665301792.jpg"
    },
    {
      name: "Lẩu Thái cay hải sản",
      price: "199K",
      desc: "Vị cay chuẩn Thái",
      img: "https://product.hstatic.net/200000679901/product/lau_thai_hs_chua_cay_ed10bccdf2924c9d898e62a4fddb459e.jpg"
    },
    {
      name: "Hàu nướng phô mai",
      price: "89K",
      desc: "Ăn một lần là nhớ mãi",
      img: "https://cdn.netspace.edu.vn/images/2020/07/27/cach-lam-hau-nuong-pho-mai-800.jpg"
    },
    {
      name: "Pasta hải sản",
      price: "145K",
      desc: "Món Ý ngon miệng",
      img: "https://www.anchordairy.com/vi/vi/recipes/dinner/creamy-seafood-chilli-pasta/_jcr_content/root/container/container/container/image.coreimg.jpeg/1722985673508/anchor-thailand-recipes-creamy-seafood-chilli-pasta.jpeg"
    },
    {
        name: "Strong Bow",
        price: "100K",
        desc: "Rượu nhẹ vừa hợp với những đồ ăn ngon",
        img: "https://ganhhao.com.vn/wp-content/uploads/2019/05/1550206175727_7795711.jpg"
      },
      {
        name: "Bia Sài Gòn",
        price: "88K",
        desc: "Bia Sài Gòn ngon và rẻ",
        img: "https://product.hstatic.net/200000078749/product/13873-l_bia_sai_gon_lager_loc_6x330ml_dc3444d2c4e2418795fc6f6dc6f3bd7a_cfa3a8638068417597397c9cda6d7b2a.jpg"
      },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-50 flex flex-col md:flex-row">
  <img
    src="https://lh3.googleusercontent.com/p/AF1QipPPAwbL1GQjGVhlpX1BQinHP7vtajf5yNOv5l0=s1360-w1360-h1020"
    alt="Maison"
    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
  />
  <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
    <h1 className="text-4xl font-extrabold text-orange-700">🍷 Maison Saigon</h1>
    <p className="mt-2 text-gray-600">📍 55 Nguyễn Du, Quận 1, Hồ Chí Minh</p>
    <p className="text-gray-500">🕒 Giờ mở cửa: <strong>10:00 – 23:00</strong></p>
    <p className="text-gray-700 font-semibold">📞 028 3925 6789</p>

    <div className="flex items-center mt-3 text-yellow-500">
      <ReactStars count={5} value={4.8} size={24} edit={false} activeColor="#facc15" />
      <span className="ml-2 text-gray-600 text-sm">(4.8/5 từ 850+ đánh giá)</span>
    </div>

    <div className="flex flex-wrap gap-3 mt-5">
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl flex items-center shadow">
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
        <h2 className="text-2xl font-bold text-gray-800">Giới thiệu</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Maison Saigon là nhà hàng phong cách Âu – Á hiện đại, nơi giao thoa giữa nghệ thuật ẩm thực và không gian sang trọng. Từng món ăn đều được chế biến tỉ mỉ từ nguyên liệu hảo hạng, kết hợp cách trình bày tinh tế.
        </p>
        <p className="text-gray-700 mt-2 italic">
          “Maison không chỉ là bữa ăn – mà là trải nghiệm nghệ thuật vị giác.”
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
          src="https://www.google.com/maps?q=10.7769,106.7009&hl=vi&z=17&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MaisonDetail;
