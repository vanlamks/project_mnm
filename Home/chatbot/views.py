from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["POST"])
def chatbot_api(request):
    """API nhận tin nhắn từ frontend và trả về phản hồi tương ứng."""
    user_message = request.data.get("text", "").strip().lower()  # Chuẩn hóa tin nhắn từ frontend

    # Danh sách phản hồi có sẵn
    responses = {
        # Chào hỏi & thông tin cơ bản
        "xin chào": "Chào bạn! Tôi có thể giúp gì?",
        "chào": "Xin chào! Tôi là trợ lý ẩm thực của bạn hôm nay.",
        "giờ làm việc": "Chúng tôi mở cửa từ 8h sáng đến 10h tối.",
        "địa chỉ": "Chúng tôi ở 108/37 Miếu Bình Đông, TP.HCM.",

        # Gợi ý món ăn
        "đồ ăn nào ngon": "Bạn có thể nói rõ bạn muốn ăn gì không? Ví dụ: gà, bò, cá...",
        "có món gà không": "Chúng tôi có món gà nướng mật ong, gà chiên mắm và gà xối mỡ.",
        "có món bò không": "Chúng tôi có bò nướng lá lốt, bò lúc lắc và lẩu bò nhúng giấm.",
        "có món chay không": "Có chứ! Chúng tôi có cơm chay, bún chay và lẩu nấm.",
        "có món hải sản không": "Chúng tôi có tôm hấp nước dừa, mực nướng sa tế và lẩu hải sản.",
        "món ăn hàn quốc": "Chúng tôi có cơm trộn, tokbokki và gà cay phô mai.",
        "món ăn nhật": "Có sushi, sashimi, mì ramen và tempura.",
        "món ăn trung quốc": "Bạn có thể thử vịt quay Bắc Kinh, mì hoành thánh và xíu mại.",
        "có món lẩu không": "Dĩ nhiên! Có lẩu thái, lẩu gà lá giang, lẩu bò và lẩu nấm chay.",
        "có món chay đặc biệt không": "Bạn có thể thử bún riêu chay, bánh xèo chay hoặc nấm kho tiêu.",
        "có món ăn vặt không": "Có nhé! Có bánh tráng trộn, nem chua rán, khoai tây chiên và cá viên chiên.",
        "có món ăn sáng không": "Chúng tôi có phở, hủ tiếu, bánh mì ốp la và xôi mặn.",
        "có món ăn tối không": "Có cơm phần, lẩu, mì xào và bít tết rất hợp cho bữa tối.",
        "có món ăn healthy không": "Có salad cá ngừ, ức gà áp chảo và súp rau củ rất tốt cho sức khỏe.",

        # Gợi ý theo quận
        "nhà hàng 5 sao": "Chúng tôi có danh sách nhà hàng 5 sao ở nhiều quận. Bạn muốn tìm ở quận nào?",
        "quận 1": "Bạn đang ở quận 1 phải không? Hãy thử <a href='/Chao' target='_blank' style='color: orange; font-weight: bold;'>Cháo sườn bà Hào</a> – nổi tiếng thơm ngon và lâu đời. Nếu muốn không gian lãng mạn, hãy ghé <a href='/maison' target='_blank' style='color: orange; font-weight: bold;'>Maison</a>. Còn nếu thích món ăn bình dân mà chất lượng, đừng bỏ qua <a href='/local' target='_blank' style='color: orange; font-weight: bold;'>Thành Đạt</a>.",
        "quận 2": "Quận 2 có nhà hàng gà <span style='color: crimson; font-weight: bold;'>Linh Tinh</span>. Bạn thích gà chiên hay nướng?",
        "quận 3": "Nếu bạn ở quận 3, hãy ghé <span style='color: teal; font-weight: bold;'>Ngô Long Tự</span> – nhà hàng kiểu Mỹ rất nổi tiếng.",
        "quận 4": "Quận 4 có nhà hàng <span style='color: blueviolet; font-weight: bold;'>Hải Long Minh</span> chuyên hải sản tươi sống.",
        "quận 5": "Ở quận 5, <a href='/phongvi' target='_blank' style='color: gold; font-weight: bold;'>Phong Vị</a> là nhà hàng nổi tiếng với các món lẩu và hải sản tươi sống.",
        "quận 6": "Bạn đang ở quận 6? Hãy ghé <a href='/sushiikai' target='_blank' style='color: gold; font-weight: bold;'>Ikai Sushi</a> – thiên đường của những món cá hồi tươi sống.",
        "quận 7": "Quận 7 có nhà hàng Trung Hoa <span style='color: darkgreen; font-weight: bold;'>Gia Cát Lượng</span> với không gian đậm chất cổ trang.",
        "quận 8": "Nếu thích món Pháp, quận 8 có nhà hàng <span style='color: navy; font-weight: bold;'>Kinh Kong</span> độc đáo và lãng mạn.",
        "quận 9": "Món Hàn Quốc ngon nhất ở quận 9 phải kể đến <span style='color: deeppink; font-weight: bold;'>Seoul Food</span>.",
        "quận 10": "Bạn nên thử <a href='/phohangpho' target='_blank' style='color: orange; font-weight: bold;'>Phố Hàng Phở</a> ở quận 10 – nổi tiếng với ẩm thực phở Việt Nam đa dạng, mang lại cảm giác ấm cúng.",
        "quận thủ đức": "Ở Thủ Đức có <a href='/nhahangando' target='_blank' style='color: orange; font-weight: bold;'>Nhà hàng Ấn Độ</a> – chuyên các loại đồ ngọt đặc trưng của Ấn.",
        "quận bình thạnh": "Nếu bạn thích món Việt Nam, hãy đến <span style='color: chocolate; font-weight: bold;'>Bếp Nhà Kiểu Việt</span> ở Bình Thạnh.",
        "quận tân bình": "Bạn đang ở Tân Bình? Hãy ghé <a href='/izakaya' target='_blank' style='color: orange; font-weight: bold;'>Izakaya Unatoto</a> – nhà hàng phong cách Nhật Bản rất được yêu thích.",
        "quận bình tân": "Nếu bạn ở Bình Tân, đừng bỏ qua <a href='/ocngon' target='_blank' style='color: orange; font-weight: bold;'>Ốc Bình Tân</a> – nổi tiếng vì vừa rẻ vừa ngon.",
        "quận 12": "Ở quận 12, bạn nên thử <a href='/PhoViet' target='_blank' style='color: orange; font-weight: bold;'>Phở Việt</a> – chuẩn vị Bắc, đông khách bởi chất lượng và sự thân thiện.",

        # Giá cả
        "giá cả thế nào": "Giá dao động từ 50.000đ đến 500.000đ tuỳ món và nhà hàng.",
        "món ăn giá rẻ": "Bạn có thể thử cơm tấm, bánh mì, bún bò với giá dưới 50.000đ.",
        "món ăn cao cấp": "Bạn có thể thử bò wagyu, hải sản nhập khẩu hoặc set menu 5 sao.",
        "món ăn dưới 100k": "Có rất nhiều lựa chọn như cơm chiên, mì xào, bún thịt nướng.",
        "món ăn dưới 50k": "Có bánh cuốn, bún thịt nướng, hủ tiếu và cơm gà xối mỡ.",
        "món ăn 100k đến 200k": "Bạn có thể chọn lẩu nhỏ, steak bò Mỹ hoặc combo sushi mini.",
        "món ăn đắt tiền": "Chúng tôi có tôm hùm, cua hoàng đế, và các món Âu cao cấp.",

        # Dịch vụ & đặt bàn
        "có đặt bàn không": "Có, bạn có thể đặt bàn trước qua chatbot hoặc gọi hotline 0368221867.",
        "có giao hàng không": "Chúng tôi có hỗ trợ giao hàng qua app hoặc trực tiếp.",
        "có thanh toán thẻ không": "Có, chúng tôi hỗ trợ cả tiền mặt và thanh toán thẻ.",

        # Câu hỏi chung
        "gợi ý món ăn": "Bạn thích món Á, Âu hay món ăn vặt?",
        "hôm nay ăn gì": "Bạn muốn ăn nhẹ hay ăn no? Gợi ý: bún bò, phở, cơm gà hoặc lẩu nướng.",
        "có món tráng miệng không": "Có chứ! Có chè, bánh flan, kem, trái cây tươi.",
        "có ưu đãi gì không": "Hiện tại có combo lẩu nướng giảm 20% và tặng nước ngọt.",

        # Giao tiếp
        "bạn tên gì": "Tôi là trợ lý ẩm thực – bạn có thể gọi tôi là A.Foodie!",
        "bạn có khỏe không": "Tôi luôn sẵn sàng để giúp bạn tìm món ngon 😄",
        "cảm ơn": "Không có chi! Chúc bạn có một bữa ăn thật ngon!",
        "bye": "Tạm biệt nhé! Hẹn gặp lại bạn sớm!"
    }

    # Phản hồi mặc định nếu không khớp từ khóa
    bot_response = responses.get(
        user_message,
        "Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi lại rõ hơn không?"
    )

    return Response({"response": bot_response})
