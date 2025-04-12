import { useState } from "react";
import { MapPin, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";

const OcGio = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleReviewClick = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    navigate(isLoggedIn ? "/reviews" : "/dangnhap");
  };

  const menuItems = [
    {
      name: "Ốc hương xào bơ tỏi",
      img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(100)/2023_10_24_638337429256555003_oc-huong-xao-bo-toi-thumb.jpg",
      price: "49K",
    },
    {
      name: "Càng ghẹ rang muối",
      img: "https://i.ytimg.com/vi/FPKSMrieQxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJmnkXR-zOee2tfTKHip2dnVwDVA",
      price: "39K",
    },
    {
      name: "Sò huyết nướng mỡ hành",
      img: "https://file.hstatic.net/200000325181/file/so_huyet_nuong_mo_hanh_b009aed61cf84ff4a60159819b3903e7_grande.jpg",
      price: "42K",
    },
    {
      name: "Hàu phô mai nướng",
      img: "https://cdn.netspace.edu.vn/images/2021/07/18/cach-lam-hau-nuong-phomai-ngon-800.jpg",
      price: "29K",
    },
    {
      name: "Tôm nướng mọi",
      img: "https://cdn.tgdd.vn/Files/2021/11/06/1396249/chia-se-8-cach-uop-tom-nuong-dam-vi-chinh-phuc-nhung-thuc-khach-kho-tinh-202111062310435916.jpg",
      price: "84K",
    },
    {
      name: "Ốc móng tay xào rau muống",
      img: "https://comnieungonvungtau.com/wp-content/uploads/2023/03/oc-mong-tay-xao-ra-muong.webp",
      price: "39K",
    },
  ];
  

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-orange-100 to-yellow-50 flex flex-col md:flex-row">
        <img
          src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/481125793_1069668428518755_4154182283105718494_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=RKm1Toev8B0Q7kNvwFrEFfH&_nc_oc=Adnwta0h2VlImwrY6NEbjEL9-RURMddglX9d4BBejTDxvLG64vZgcmpCAa6korKEyZ8BUe4JmceHi-Apiv7hTKir&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=PagQ72Q878U_dXfU7_dmeA&oh=00_AfGH9hU9fu1QWt__1HG8GmbHloBo10WtJzsBLx7nPmva9g&oe=67FE92E4"
          alt="Quán Ốc Gió"
          className="w-full md:w-1/2 h-80 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10 flex-1 flex flex-col justify-center text-gray-800">
          <h1 className="text-4xl font-extrabold text-orange-700">🦐 Quán Ốc Gió</h1>
          <p className="mt-2 text-gray-600">📍 223 Bình Trị Đông, Bình Tân, TP.HCM</p>
          <p className="text-gray-500">🕒 Giờ mở cửa: <strong>19:00 – 02:00</strong></p>
          <p className="text-gray-700 font-semibold">📞 0939 983 339</p>

          <div className="flex items-center mt-3 text-yellow-500">
            <ReactStars count={5} value={4.2} size={24} edit={false} activeColor="#facc15" />
            <span className="ml-2 text-gray-600 text-sm">(4.2/5 từ 320+ đánh giá)</span>
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
          Ốc Gió – quán ốc đêm được yêu thích tại Bình Tân với thực đơn đa dạng như ốc hương, càng ghẹ, tôm nướng, đến sò huyết và hàu mỡ hành thơm nức. Phù hợp tụ họp bạn bè, ăn nhậu “tới bến”.
        </p>
        <p className="text-gray-700 mt-2 italic">"Đến Gió là có gió – ngon, mặn mà và rất chill!"</p>
      </div>

      {/* Món nổi bật */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">🦀 Món nổi bật</h2>
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
              <p className="text-orange-600 mt-1 font-medium">Món siêu ngon và siêu rẻ</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bản đồ */}
      <div className="mt-10">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-2xl shadow-lg"
          src="https://www.google.com/maps?q=10.766867558160179,106.60944242244139&hl=vi&z=17&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default OcGio;
