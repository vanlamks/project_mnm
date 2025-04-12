import React from "react";
import { Link } from "react-router-dom";

const PhoVietj = () => {
  const dish = {
    name: "Phở Việt",
    image_url:
      "https://media.istockphoto.com/id/1299419373/vi/anh/pho-bo-vietnamese-soup.jpg?s=612x612&w=0&k=20&c=MTp9dmYOEV33fM8QD2XV0uHCerBdyZpCsm59TyLHSSc=",
    restaurant: "Phở Việt",
    restaurant_link: "/PhoViet",
    price: 3.99,
    description:
      "Phở Việt là món ăn truyền thống nổi tiếng của Việt Nam, được làm từ bánh phở mềm mịn, nước dùng bò hầm đậm đà và các loại gia vị đặc trưng. Hương vị thanh ngọt tự nhiên của nước dùng kết hợp cùng thịt bò thơm ngon tạo nên một trải nghiệm ẩm thực tuyệt vời.",
    ingredients: [
      "Bánh phở",
      "Thịt bò tái/nạm/gầu",
      "Xương bò hầm",
      "Hành lá, ngò gai",
      "Gừng, quế, hồi, thảo quả",
      "Nước mắm, đường phèn",
      "Chanh, ớt, giá đỗ",
    ],
    benefits: [
      "Cung cấp protein từ thịt bò giúp cơ bắp săn chắc",
      "Chứa nhiều collagen từ xương bò giúp đẹp da",
      "Hỗ trợ tiêu hóa nhờ các loại gia vị tự nhiên",
      "Cung cấp năng lượng cho ngày dài hoạt động",
      "Giúp giữ ấm cơ thể, phù hợp với mọi thời tiết",
      "Nguồn dinh dưỡng cân bằng, không gây nặng bụng",
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

export default PhoVietj;
