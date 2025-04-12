import React from "react";
import { Link } from "react-router-dom";

const LauCuaDong = () => {
  const dish = {
    name: "Lẩu Cua Đồng",
    image_url:
      "https://www.cet.edu.vn/wp-content/uploads/2018/09/lau-cua-dong.jpg",
    restaurant: "Maison",
    restaurant_link: "/maison",
    price: 15.99,
    description:
      "Lẩu Cua Đồng là món ăn truyền thống đậm chất quê hương với vị ngọt thanh tự nhiên từ cua đồng tươi, kết hợp cùng đậu hũ, rau xanh và bún tươi. Nước dùng thơm lừng mùi hành phi và cà chua xào tạo nên hương vị đặc trưng khó cưỡng.",
    ingredients: [
      "Cua đồng xay nhuyễn",
      "Cà chua, hành tím, mắm tôm",
      "Đậu hũ non",
      "Rau mồng tơi, rau muống, hoa chuối",
      "Bún tươi",
      "Gia vị: muối, tiêu, bột ngọt, nước mắm",
    ],
    benefits: [
      "Cua đồng chứa nhiều canxi, tốt cho xương khớp",
      "Cung cấp sắt và protein giúp tăng sức đề kháng",
      "Chất xơ từ rau xanh hỗ trợ tiêu hóa",
      "Giúp giải nhiệt, đặc biệt phù hợp ngày hè",
      "Ít chất béo, phù hợp chế độ ăn lành mạnh",
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
            className="w-80 h-80 rounded-full border-8 border-orange-300 shadow-md transition-transform duration-300 hover:scale-105 object-cover"
          />
        </div>

        {/* Nội dung */}
        <div>
          <h1 className="text-4xl font-extrabold text-orange-800 mb-3">
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
                className="text-orange-600 font-semibold hover:underline"
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
              <h2 className="text-xl font-bold text-gray-800 border-b border-orange-400 pb-1 mb-2">
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
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition duration-300"
            >
              Xem nhà hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LauCuaDong;
