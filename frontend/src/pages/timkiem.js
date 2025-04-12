import React, { useEffect, useState } from "react";
import axios from "axios";

const TimKiem = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);
  const [loadingFavorites, setLoadingFavorites] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [userNumber, setUserNumber] = useState("");

  useEffect(() => {
    const storedUserNumber = localStorage.getItem("user_number");
    if (!storedUserNumber) return;

    setUserNumber(storedUserNumber);
    setLoadingSearch(true);

    axios
      .get(`http://127.0.0.1:8000/api/search-history/?user_number=${storedUserNumber}`)
      .then((res) => setSearchHistory(res.data))
      .catch((err) => console.error("Lỗi fetch lịch sử:", err))
      .finally(() => setLoadingSearch(false));
  }, []);

  const handleShowFavorites = async () => {
    const storedUserNumber = localStorage.getItem("user_number");
    if (!storedUserNumber) return;

    setShowFavorites(true);
    setLoadingFavorites(true);

    try {
      const favoriteRes = await axios.get(
        `http://127.0.0.1:8000/api/favorites/?user_number=${storedUserNumber}`
      );
      const restaurantRes = await axios.get(`http://127.0.0.1:8000/api/restaurant/`);

      const matched = favoriteRes.data.map((fav) => {
        const res = restaurantRes.data.find(
          (r) => r.restaurant_number === fav.restaurant_number
        );
        return {
          id: fav.favorite_number,
          name: res?.restaurant_name || "Không xác định",
          address: res?.address || "Không xác định",
        };
      });

      setFavoriteRestaurants(matched);
    } catch (err) {
      console.error("Lỗi fetch yêu thích:", err);
    } finally {
      setLoadingFavorites(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen font-sans">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        📜 Lịch sử tìm kiếm của người dùng {userNumber}
      </h1>

      <ul className="mb-6 list-disc pl-6 text-gray-600">
        <li>
          <button
            onClick={handleShowFavorites}
            className="text-indigo-500 underline hover:text-indigo-700 transition"
          >
            💟 Xem danh sách nhà hàng yêu thích
          </button>
        </li>
      </ul>

      {/* LỊCH SỬ TÌM KIẾM */}
      {loadingSearch ? (
        <p className="text-gray-500 italic">Đang tải lịch sử tìm kiếm...</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow bg-white mb-10">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3">STT</th>
                <th className="px-6 py-3">Từ khóa</th>
                <th className="px-6 py-3">Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {searchHistory.length > 0 ? (
                searchHistory.map((item, index) => (
                  <tr key={item.search_number} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{item.search_query}</td>
                    <td className="px-6 py-4">
                      {new Date(item.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    Không có dữ liệu tìm kiếm
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* NHÀ HÀNG YÊU THÍCH */}
      {showFavorites && (
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            💖 Danh sách nhà hàng yêu thích
          </h2>
          {loadingFavorites ? (
            <p className="text-gray-500 italic">Đang tải nhà hàng yêu thích...</p>
          ) : favoriteRestaurants.length > 0 ? (
            <div className="overflow-x-auto rounded-xl shadow bg-white">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-6 py-3">STT</th>
                    <th className="px-6 py-3">Tên nhà hàng</th>
                    <th className="px-6 py-3">Địa chỉ</th>
                  </tr>
                </thead>
                <tbody>
                  {favoriteRestaurants.map((r, idx) => (
                    <tr key={r.id || idx} className="border-b hover:bg-gray-50 transition">
                      <td className="px-6 py-4">{idx + 1}</td>
                      <td className="px-6 py-4 font-medium text-gray-800">{r.name}</td>
                      <td className="px-6 py-4 text-gray-700">{r.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 mt-4">Bạn chưa có nhà hàng yêu thích nào.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TimKiem;
