import React from "react";
import { Link } from "react-router-dom";

const Oclen = () => {
  const dish = {
    name: "Ốc Len Xào Dừa",
    image_url:
      "https://i.pinimg.com/736x/6e/ac/dd/6eacdd73c6c5903636d215a17950b126.jpg",
    restaurant: "Ốc Bình Tân",
    restaurant_link: "/ocngon",
    price: 3.49,
    description:
      "Ốc Len Xào Dừa là món đặc sản miền Nam với hương vị béo ngậy từ nước cốt dừa hòa quyện cùng vị ngọt tự nhiên của ốc len. Món ăn thường được dùng nóng, ăn kèm bánh mì chấm nước dừa đậm đà, vừa thơm ngon vừa gây nghiện.",
    ingredients: [
      "Ốc len tươi",
      "Nước cốt dừa",
      "Tỏi, sả, ớt",
      "Rau răm",
      "Gia vị: đường, muối, bột ngọt",
    ],
    benefits: [
      "Ốc chứa nhiều protein, ít chất béo, tốt cho tim mạch",
      "Cung cấp canxi và sắt giúp chắc xương, đẹp da",
      "Chất béo thực vật từ dừa tốt cho hệ tiêu hóa",
      "Giúp bổ sung năng lượng tự nhiên, không gây đầy bụng",
      "Tăng cường đề kháng nhờ các loại gia vị như sả, ớt",
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

export default Oclen;
