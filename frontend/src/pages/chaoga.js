import React from "react";
import { Link } from "react-router-dom";

const ChaoGaNgon = () => {
  const dish = {
    name: "Cháo Gà Ngon",
    image_url:
      "https://mms.img.susercontent.com/vn-11134513-7r98o-lstx7hnsta6c9c@resize_ss1242x600!@crop_w1242_h600_cT",
    restaurant: "Quán Bà Hào",
    restaurant_link: "/Chao",
    price: 5.74,
    description:
      "Cháo Gà Ngon là món ăn truyền thống với hương vị tinh tế, được nấu từ gạo thơm dẻo, kết hợp với nước dùng gà hầm đậm đà. Mỗi bát cháo được phục vụ với thịt gà mềm, trứng gà bùi bùi, hành lá tươi xanh và tiêu xay cay nhẹ. Đặc biệt, cháo còn có gừng thái sợi giúp tăng thêm hương vị ấm áp, rất thích hợp để thưởng thức vào buổi sáng hoặc những ngày se lạnh.",
    ingredients: [
      "Gạo thơm dẻo",
      "Nước hầm gà",
      "Thịt gà xé",
      "Trứng gà",
      "Hành lá",
      "Tiêu xay",
      "Gừng thái sợi",
      "Nước mắm và gia vị",
    ],
    benefits: [
      "Giúp ấm bụng và hồi phục sức khỏe nhanh chóng",
      "Cung cấp năng lượng nhẹ nhàng, dễ tiêu hóa",
      "Tăng sức đề kháng nhờ gừng và nước hầm gà",
      "Chứa protein từ thịt và trứng gà tốt cho cơ thể",
      "Hỗ trợ miễn dịch và làm dịu cảm lạnh",
      "Giảm mệt mỏi và căng thẳng sau một ngày dài",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Hình ảnh */}
        <div className="flex justify-center">
          <img
            src={dish.image_url}
            alt={dish.name}
            className="w-80 h-80 rounded-full border-8 border-yellow-300 shadow-md object-cover transition-transform duration-300 hover:scale-105"
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

          {/* Nút điều hướng */}
          <div className="mt-4">
            <Link
              to={dish.restaurant_link}
              className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-600 transition-all duration-300"
            >
              Xem nhà hàng
            </Link>
          </div>
        </div>
      </div>

      {/* Thành phần & Lợi ích: chia đôi màn hình */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Thành phần */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-yellow-300 pb-1">
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-green-400 pb-1">
            Lợi ích sức khỏe
          </h2>
          <ul className="list-disc list-inside space-y-1 text-green-700">
            {dish.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChaoGaNgon;
