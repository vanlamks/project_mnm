import React, { useEffect, useState } from "react";
import { getMenus, getRestaurants } from "../api";
import Chatbot from "./Chatbot";

const RestaurantPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Hàm xử lý khi nhấn Enter để tìm kiếm và lưu vào cơ sở dữ liệu
  const handleSearch = async (e) => {
    console.log("handleSearch triggered", e.key, searchTerm);
    if (e.key === "Enter" && searchTerm.trim()) {
      const userNumber = localStorage.getItem("user_number");
      console.log("userNumber:", userNumber);
      if (!userNumber) {
        alert("Vui lòng đăng nhập để sử dụng chức năng tìm kiếm!");
        return;
      }
      try {
        const searchNumber = `SEARCH_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
        console.log("searchNumber generated:", searchNumber);

        console.log("Sending request to http://127.0.0.1:8000/api/search-history/");
        const response = await fetch("http://127.0.0.1:8000/api/search-history/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            search_number: searchNumber,
            user_number: userNumber,
            search_query: searchTerm.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error("Lỗi khi lưu lịch sử tìm kiếm");
        }

        const data = await response.json();
        console.log("Lịch sử tìm kiếm đã được lưu:", data);
      } catch (error) {
        console.error("Lỗi khi gửi dữ liệu tìm kiếm:", error);
        alert("Có lỗi xảy ra khi lưu lịch sử tìm kiếm. Vui lòng thử lại!");
      }
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <HeroSection />
      <AboutSection />
      <RestaurantSection searchTerm={searchTerm} />
      <MenuSection searchTerm={searchTerm} />
      <Chatbot />
      <FooterSection /> {/* Thêm FooterSection vào đây */}
    </div>
  );
};

// Dữ liệu tĩnh cho nhà hàng và liên kết
const restaurantLinks = {
  "Hủ Tiếu Nam Vang": "http://localhost:3000/local",
  "Phong Vị": "http://localhost:3000/phongvi",
  "Ikai Sushi": "http://localhost:3000/sushiikai",
  "Maison": "http://localhost:3000/maison",
  "Nhà hàng Ấn Độ": "http://localhost:3000/nhahangando",
  "Cháo sườn bà Hào": "http://localhost:3000/Chao",
  "Ốc Bình Tân": "http://localhost:3000/ocngon",
  "Phở Việt": "http://localhost:3000/PhoViet",
  "Izakaya Unatoto": "http://localhost:3000/izakaya",
  "Phố Hàng Phở": "http://localhost:3000/phohangpho",
};

const restaurantImages = {
  "Hủ Tiếu Nam Vang": "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/2/29/1309772/Hong-Phat.jpg",
  "Phong Vị": "https://lauphongvi24h.com/thumbs/500x610x1/upload/news/KIN06858.jpg",
  "Ikai Sushi": "https://lh3.googleusercontent.com/p/AF1QipPm1MAASx1Vxon-R49WMQTc_CS6n-yu0_Tmbdzh=s680-w680-h510",
  "Maison": "https://lh3.googleusercontent.com/p/AF1QipOiSdJX47xGyUlXXzolVQQcL2TzVxDKEAN1yM4Z=s1360-w1360-h1020",
  "Nhà hàng Ấn Độ": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2XNDJQ4g0_vI8HgkTu1Vgj4baG1QTfToC470l6lMXUZrrmmB49mJfYh7j1_Jud__hw0&usqp=CAU",
  "Cháo sườn bà Hào": "https://afamilycdn.com/150157425591193600/2021/11/5/img0444-16360884363942124480082.jpg",
  "Ốc Bình Tân": "https://aeonmall-review-rikkei.cdn.vccloud.vn/public/wp/15/news/BQRnx1x7GzVpApSKYJnzWexGKcz9M8TN2b2Zzw4S.png",
  "Phở Việt": "https://blog.dktcdn.net/files/thiet-ke-quan-pho.png",
  "Izakaya Unatoto": "https://i0.wp.com/unatotovietnam.com/wp-content/uploads/2023/01/fd757-dscf1693jpg.jpg?resize=1020%2C680&ssl=1",
  "Phố Hàng Phở": "https://lh3.googleusercontent.com/p/AF1QipMwdQ_JMmDzarzRenEmH8S4PMQqqWHos6hPilcB=s1360-w1360-h1020",
};

// Component Navbar với ô tìm kiếm
const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <img
          alt="Logo"
          className="h-10 w-10 rounded-full"
          src="https://ipos.vn/wp-content/uploads/2021/10/chup-anh-9.jpg"
        />
        <span className="ml-3 text-2xl font-bold text-orange-500">HAE TOMTO</span>
      </div>
      <input
        type="text"
        placeholder="🔎 Tìm kiếm món ăn hoặc nhà hàng..."
        className="p-2 border rounded w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch} // Gọi hàm handleSearch khi nhấn phím
      />
      <div className="flex space-x-2">
        <a href="/dangnhap" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Đăng nhập
        </a>
        <a href="/dangky" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Đăng ký
        </a>
        <a href="/profile" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          Trang cá nhân
        </a>
      </div>
    </div>
  </header>
);

// HeroSection không thay đổi
const HeroSection = () => (
  <section className="relative">
    <img
      alt="Restaurant Interior"
      className="w-full h-96 object-cover brightness-75"
      src="https://expro.vn/thumbnail/post_1626458018_thiet-ke-web-ban-do-an-nhanh.jpg"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white animate-fade-in">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">HAE TOMTO</h1>
      <p className="text-lg mb-6">Khám phá ẩm thực tuyệt vời từ khắp Việt Nam</p>
    </div>
  </section>
);

// AboutSection không thay đổi
const AboutSection = () => (
  <section className="bg-white py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-orange-500">Giới thiệu về HAE TOMTO</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Về chúng tôi */}
        <div className="flex flex-col items-center">
          <img
            alt="Về chúng tôi"
            className="w-24 h-24 mb-4 rounded-full shadow-md object-cover"
            src="https://png.pngtree.com/png-vector/20230801/ourlarge/pngtree-3-cartoon-friends-standing-together-vector-png-image_6829826.png"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Về chúng tôi</h3>
          <p className="text-gray-600">
            Chung tôi là nền tảng giúp bạn tìm kiếm những món ăn ngon, nhà hàng chất lượng với hàng ngàn sự lựa chọn đa dạng từ khắp Việt Nam.
          </p>
        </div>

        {/* Khám phá ẩm thực */}
        <div className="flex flex-col items-center">
          <img
            alt="Khám phá ẩm thực"
            className="w-24 h-24 mb-4 rounded-full shadow-md object-cover"
            src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-appetizer-clipart-food-platter-on-wooden-board-cartoon-vector-png-image_11067976.png"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Khám phá ẩm thực</h3>
          <p className="text-gray-600">
            Dễ dàng tìm kiếm những món ăn yêu thích, nhà hàng gần bạn nhất, quán ăn chất lượng với thông tin chi tiết và đánh giá chân thực.
          </p>
        </div>

        {/* Trải nghiệm tiện lợi */}
        <div className="flex flex-col items-center">
          <img
            alt="Trải nghiệm tiện lợi"
            className="w-24 h-24 mb-4 rounded-full shadow-md object-cover"
            src="https://img.lovepik.com/png/20231109/eat-dinner-clipart-vector-illustration-of-young-boy-in-front_545453_wh1200.png"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Trải nghiệm tiện lợi</h3>
          <p className="text-gray-600">
            Chỉ vài thao tác đơn giản, bạn có thể đặt món ăn trực tuyến mà không cần phải đến tận nơi, tiết kiệm thời gian và công sức.
          </p>
        </div>

        {/* Sự kết nối */}
        <div className="flex flex-col items-center">
          <img
            alt="Sự kết nối"
            className="w-24 h-24 mb-4 rounded-full shadow-md object-cover"
            src="https://nld.mediacdn.vn/zoom/700_438/2018/7/18/google-maps-nang-cap-15319086437771827275943.jpg"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Sự kết nối</h3>
          <p className="text-gray-600">
            Kết nối với cộng đồng yêu ẩm thực, chia sẻ trải nghiệm của bạn, đánh giá món ăn và nhà hàng để lan tỏa niềm vui.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// RestaurantItem không thay đổi
const RestaurantItem = ({ restaurant_name }) => {
  const restaurantLink = restaurantLinks[restaurant_name] || `/restaurants/${encodeURIComponent(restaurant_name)}`;
  const imageUrl = restaurantImages[restaurant_name] || "https://via.placeholder.com/300";

  return (
    <a
      href={restaurantLink}
      className="bg-white p-6 rounded-lg shadow-md text-center block hover:bg-orange-100 transform hover:scale-105 transition"
    >
      <img alt={restaurant_name} className="w-full h-40 object-cover rounded-md mb-4" src={imageUrl} />
      <h3 className="text-xl font-bold text-gray-800">{restaurant_name || "Không có tên"}</h3>
    </a>
  );
};

// RestaurantSection không thay đổi
const RestaurantSection = ({ searchTerm }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants().then((data) => setRestaurants(data));
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-orange-500">Danh sách nhà hàng</h2>
        {filteredRestaurants.length === 0 ? (
          <p className="text-gray-600">Không tìm thấy nhà hàng nào...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {filteredRestaurants.map((restaurant, index) => (
              <RestaurantItem key={index} restaurant_name={restaurant.restaurant_name} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Dữ liệu tĩnh cho thực đơn
const restaurantLink = {
  "Cháo Gà": "http://localhost:3000/chaoga",
  "Salmon Sushi": "http://localhost:3000/sushi",
  "Pho": "http://localhost:3000/ctpho",
  "Cơm Tấm": "http://localhost:3000/suonbicha",
  "Súp lươn": "http://localhost:3000/supluon",
  "Ốc Len": "http://localhost:3000/oclen",
  "Lẩu cua đồng": "http://localhost:3000/laucuadong",
  "Lươn đồng": "http://localhost:3000/chaoluon",
};

// MenuSection không thay đổi
const MenuSection = ({ searchTerm }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenus().then((data) => setMenuItems(data));
  }, []);

  const filteredItems = menuItems.filter((item) =>
    item.menu_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-orange-500">Thực đơn</h2>
        {filteredItems.length === 0 ? (
          <p className="text-gray-600">Không tìm thấy món ăn nào...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <MenuItem key={index} name={item.menu_name} description={item.description} image={item.image_url} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// MenuItem không thay đổi
const MenuItem = ({ name, description, image }) => {
  const link = restaurantLink[name] || "#";

  return (
    <a href={link} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:bg-orange-100 transition transform hover:scale-105">
        <img alt={name} className="w-24 h-24 mx-auto mb-4 rounded-full shadow-md" src={image} />
        <h3 className="text-xl font-bold mb-2 text-orange-500">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

// FooterSection
const FooterSection = () => (
  <footer className="bg-white text-gray-800 py-8">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Bạn đã sẵn sàng ăn uống chưa?</h2>
      <img
        alt="Beef Food Cartoon"
        className="w-32 h-32 mx-auto mb-4"
        src="https://png.pngtree.com/png-clipart/20240920/original/pngtree-beef-food-3d-cartoon-png-image_16049857.png"
      />
      <div className="flex justify-center items-center mb-4">
        <div className="bg-red-600 text-white px-4 py-2 rounded-l-lg">
          Về chúng tôi
        </div>
        <div className="bg-red-800 text-white px-4 py-2 rounded-r-lg">
          Khám phá ẩm thực ngay
        </div>
      </div>
      <p className="text-gray-600 mb-2">
        Chúng tôi là nền tảng giúp bạn tìm kiếm những món ăn ngon, nhà hàng chất lượng với hàng ngàn sự lựa chọn đa dạng từ khắp Việt Nam.
      </p>
      <p className="text-gray-600 mb-2">Thông tin liên hệ:</p>
      <p className="text-gray-600 mb-2">+84 8123456789</p>
      <p className="text-gray-600 mb-2">hae@gmail.com</p>
      <p className="text-gray-600 mb-4">Ho Chi Minh - Viet Nam</p>
      <p className="text-gray-500 text-sm">Designed by Hae VietNam</p>
    </div>
  </footer>
);

export default RestaurantPage;