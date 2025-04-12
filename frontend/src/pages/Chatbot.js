import React, { useState } from "react";
import { sendMessageToChatbot } from "../api";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // Gửi tin nhắn đến API
    const handleSendMessage = async (message = input) => {
        if (!message.trim()) return;

        const userMessage = { sender: "user", text: message };

        // Cập nhật danh sách tin nhắn ngay khi người dùng gửi
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setInput(""); // Xóa nội dung input

        try {
            const botResponse = await sendMessageToChatbot(message);
            const botMessage = { sender: "bot", text: botResponse };

            // Cập nhật tin nhắn của bot sau khi nhận phản hồi
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Lỗi gửi tin nhắn:", error);
        }
    };

    // Xử lý khi bấm nút gợi ý
    const handleQuickReply = (text) => {
        handleSendMessage(text);
    };

    return (
        <div>
            {/* Nút mở chat */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600"
            >
                💬 Chatbot
            </button>

            {/* Hộp thoại chat */}
            {isOpen && (
                <div className="fixed bottom-16 right-4 w-80 bg-white shadow-lg border rounded-lg flex flex-col max-h-[80vh]">
                    <div className="p-4 border-b bg-orange-500 text-white font-bold">Chat với chúng tôi</div>

                    {/* Nút gợi ý */}
                    <div className="p-2 border-b bg-gray-50 flex flex-wrap gap-2 justify-center text-sm">
                        <button onClick={() => handleQuickReply("xin chào")} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">👋 Xin chào</button>
                        <button onClick={() => handleQuickReply("đồ ăn nào ngon")} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">🍜 Gợi ý món</button>
                        <button onClick={() => handleQuickReply("nhà hàng 5 sao")} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">📍 Gợi ý quận</button>
                        <button onClick={() => handleQuickReply("giá cả thế nào")} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">💰 Gợi ý giá</button>
                    </div>

                   {/* Nội dung chat */}
    <div className="p-4 h-64 overflow-y-auto flex-1">
      {messages.map((msg, index) => (
        <div key={index} className={`mb-2 p-2 rounded ${msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-200 text-left"}`}>
            {msg.sender === "user" ? (
                <p><strong>Bạn: </strong>{msg.text}</p>
            ) : (
                <p>
                    <strong>Bot: </strong>
                    <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                </p>
            )}
        </div>
       ))}
    </div>
                    {/* Nhập tin nhắn */}
                    <div className="p-4 border-t flex">
                        <input
                            type="text"
                            className="flex-1 p-2 border rounded-l"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Nhập tin nhắn..."
                        />
                        <button onClick={() => handleSendMessage()} className="bg-orange-500 text-white px-4 rounded-r">Gửi</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
