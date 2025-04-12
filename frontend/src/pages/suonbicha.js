import React from "react";
import { Link } from "react-router-dom";

const SuonBiCha = () => {
  const dish = {
    name: "Cơm Tấm - Sườn Bì Chả",
    image_url:
      "https://simg.zalopay.com.vn/zlp-website/assets/com_tam_ngon_sai_gon_Com_tam_Tai_Com_tam_ngon_Sai_Gon_nuc_tieng_66d50ff8eb.jpg",
    restaurant: "Thành Đạt",
    restaurant_link: "/comtamthanhdat",
    price: 20.01,
    description:
      "Cơm Tấm - Sườn Bì Chả là một món ăn đặc trưng của miền Nam Việt Nam, với hạt cơm tấm mềm dẻo kết hợp cùng sườn nướng thơm lừng, bì trộn thính bùi bùi và chả trứng béo ngậy. Món ăn đi kèm với nước mắm chua ngọt, dưa chua và rau sống giúp cân bằng hương vị.",
    ingredients: [
      "Gạo tấm",
      "Sườn nướng",
      "Bì trộn thính",
      "Chả trứng hấp",
      "Nước mắm chua ngọt",
      "Dưa chua",
      "Rau sống",
    ],
    benefits: [
      "Cung cấp nhiều protein từ sườn nướng và chả trứng",
      "Hàm lượng chất xơ cao từ rau sống và dưa chua",
      "Giúp cung cấp năng lượng cho cả ngày dài nhờ cơm tấm giàu tinh bột",
      "Hương vị đậm đà, cân bằng giữa các thành phần dinh dưỡng",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-10 bg-gradient-to-tr from-orange-50 to-whit shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Hình ảnh */}
        <div className="flex justify-center">
          <img
            src={dish.image_url}
            alt={dish.name}
            className="w-80 h-80 rounded-full border-8 border-yellow-300 shadow-md transition-transform duration-300 hover:scale-105 object-cover"
          />
        </div>

        {/* Nội dung */}
        <div>
          <h1 className="text-4xl font-extrabold text-yellow-800 mb-3">
            {dish.name}
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            {dish.description}
          </p>

          <div className="mb-4">
            <p className="text-gray-700">
              Bán tại:{" "}
              <Link
                to={dish.restaurant_link}
                className="text-red-600 font-semibold hover:underline"
              >
                {dish.restaurant}
              </Link>
            </p>
            <p className="text-green-700 font-bold mt-1 text-xl">
              Giá: ${dish.price.toFixed(2)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Thành phần */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b border-yellow-400 pb-1 mb-2">
                Thành phần
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {dish.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Lợi ích sức khỏe */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b border-green-300 pb-1 mb-2">
                Lợi ích sức khỏe
              </h2>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                {dish.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nút điều hướng */}
          <div className="mt-6">
            <Link
              to={dish.restaurant_link}
              className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-600 transition duration-300"
            >
              Xem nhà hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuonBiCha;
