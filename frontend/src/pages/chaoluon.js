import React from "react";
import { Link } from "react-router-dom";

const Chaoluon = () => {
  const dish = {
    name: "Cháo Lươn",
    image_url:
      "https://daotaobeptruong.vn/wp-content/uploads/2020/11/chao-luon.jpg",
    restaurant: "Izakaya Unatoto",
    restaurant_link: "/izakaya",
    price: 4.99,
    description:
      "Cháo Lươn là món ăn truyền thống nổi tiếng của xứ Nghệ với hương vị đậm đà, thanh ngọt. Cháo nấu từ gạo tẻ thơm dẻo cùng thịt lươn mềm ngọt, được nêm nếm với nghệ, hành phi và tiêu, tạo nên món ăn bổ dưỡng, dễ tiêu hoá, thích hợp cả người lớn lẫn trẻ nhỏ.",
    ingredients: [
      "Lươn đồng làm sạch",
      "Gạo tẻ ngon",
      "Nghệ tươi, hành tím, hành lá",
      "Nước mắm, tiêu, muối, bột ngọt",
      "Ớt và rau răm ăn kèm",
    ],
    benefits: [
      "Lươn giàu protein và omega-3, tốt cho tim mạch",
      "Cháo dễ tiêu hoá, thích hợp cho người bệnh hoặc trẻ nhỏ",
      "Nghệ có tính kháng viêm, hỗ trợ tiêu hoá",
      "Giúp hồi phục sức khoẻ nhanh chóng",
      "Giàu vitamin A, sắt và kẽm tốt cho máu và da",
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
            className="w-80 h-80 rounded-full border-8 border-yellow-400 shadow-md transition-transform duration-300 hover:scale-105 object-cover"
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
                className="text-yellow-600 font-semibold hover:underline"
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

export default Chaoluon;
