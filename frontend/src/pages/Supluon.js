import React from "react";
import { Link } from "react-router-dom";

const Supluon = () => {
  const dish = {
    name: "Súp Lươn",
    image_url:
      "https://danviet.mediacdn.vn/296231569849192448/2022/2/5/27058835652750998958379343500148681851500844n-16440368354581598530855.jpg",
    restaurant: "Izakaya Unatoto",
    restaurant_link: "/izakaya",
    price: 4.89,
    description:
      "Súp Lươn là món ăn bổ dưỡng được chế biến từ thịt lươn mềm ngọt, hòa quyện với nước dùng đậm đà, cay nhẹ. Hương thơm của hành, tiêu và nghệ tạo nên hương vị đặc trưng, kích thích vị giác và rất phù hợp trong những ngày se lạnh.",
    ingredients: [
      "Lươn tươi làm sạch",
      "Nước hầm xương",
      "Hành tím, tỏi, tiêu",
      "Nghệ tươi xay",
      "Rau răm, hành lá",
      "Ớt bột, gia vị",
    ],
    benefits: [
      "Bổ máu và tăng cường sinh lực",
      "Giàu omega-3 tốt cho tim mạch và não bộ",
      "Giúp làm ấm cơ thể, tăng sức đề kháng",
      "Giảm mệt mỏi và phục hồi cơ thể nhanh chóng",
      "Tốt cho người suy nhược hoặc mới ốm dậy",
      "Hỗ trợ tiêu hóa và làm dịu dạ dày",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-gradient-to-tr from-yellow-50 to-white rounded-3xl shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          <h1 className="text-4xl font-extrabold text-yellow-700 mb-2">
            {dish.name}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Thành phần */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-yellow-300 pb-1">
                Thành phần
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {dish.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Lợi ích sức khỏe */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-green-300 pb-1">
                Lợi ích sức khỏe
              </h2>
              <ul className="list-disc list-inside space-y-1 text-green-700">
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
              className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-600 transition-all duration-300"
            >
              Xem nhà hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supluon;
