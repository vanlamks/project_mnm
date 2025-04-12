import React from "react";
import { Link } from "react-router-dom";

const SalmonSushi = () => {
  const dish = {
    name: "Salmon Sushi",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQY0l9-FAHVSBlz37GlRlBDBpUatJ6THzGQ&s",
    restaurant: "Ikai Sushi",
    restaurant_link: "/izakaya",
    price: 9.99,
    description:
      "Salmon Sushi là một món ăn Nhật Bản truyền thống được làm từ cá hồi tươi sống, cơm giấm Nhật Bản và rong biển. Với vị béo ngậy của cá hồi hòa quyện cùng cơm mềm dẻo, đây là món sushi hấp dẫn không thể bỏ qua.",
    ingredients: [
      "Cá hồi tươi",
      "Cơm giấm Nhật Bản",
      "Rong biển (Nori)",
      "Nước tương",
      "Wasabi",
      "Gừng muối",
      "Mè rang",
    ],
    benefits: [
      "Cung cấp Omega-3 tốt cho tim mạch",
      "Tăng cường trí nhớ và chức năng não bộ",
      "Hỗ trợ hệ tiêu hóa nhờ vi khuẩn lợi khuẩn từ giấm gạo",
      "Bổ sung protein chất lượng cao giúp xây dựng cơ bắp",
      "Chứa nhiều vitamin B12 giúp tăng năng lượng",
      "Chống lão hóa da nhờ collagen từ cá hồi",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-gradient-to-tr from-orange-50 to-white rounded-3xl shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          <h1 className="text-4xl font-extrabold text-orange-600 mb-2">{dish.name}</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{dish.description}</p>

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
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-orange-300 pb-1">
                Thành phần
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {dish.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Lợi ích */}
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
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition-all duration-300"
            >
              Xem nhà hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalmonSushi;
