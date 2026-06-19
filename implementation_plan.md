# Kế hoạch Triển khai: Tối giản hóa Sư phạm & Chuẩn hóa Hành chính HUCE H60

Kế hoạch này phác thảo các thay đổi về mặt thiết kế giao diện và quy chuẩn văn bản hành chính để nâng cấp Cổng thông tin Đề xuất Tư vấn **HUCE H60** (`huce_h60_proposal.html` và `index.html`) sang phong cách tối giản, sư phạm, nền trắng và đồng bộ hóa ngôn ngữ chuẩn văn bản Việt Nam.

## Yêu cầu Đánh giá từ Người dùng

Chúng tôi cần người dùng xác nhận các nguyên tắc thiết kế mới:
1. **Kiểu chữ (Font-family):** Sử dụng `UTM Avo` làm phông chữ chính cho toàn bộ văn bản và tiêu đề. Lớp font dự phòng sẽ là `Segoe UI`, `Arial`, `sans-serif` trong trường hợp thiết bị người xem chưa cài sẵn phông chữ UTM này.
2. **Màu sắc chủ đạo (Light Theme):** Chuyển đổi toàn bộ giao diện từ màu tối (Dark Mode) sang màu sáng (Light Mode) với nền trắng và xám trung tính, chữ màu tối (Slate-900), đồng thời giữ nguyên màu xanh Royal Blue (`#002a5c`) chính thức của HUCE cho các tiêu đề/thành phần quan trọng để giữ tính trang trọng, sư phạm.
3. **Quy chuẩn Viết hoa Tiếng Việt:** Chuẩn hóa toàn bộ các tiêu đề, nhãn (labels), bảng biểu, mục lục theo Nghị định 30/2020/NĐ-CP (chỉ viết hoa chữ cái đầu tiên của câu/tiêu đề và danh từ riêng/tên cơ quan, viết thường các danh từ chung). Thay thế ký tự `&` bằng từ `và`.

---

## Các Thay đổi Đề xuất

### 1. Thành phần Giao diện & CSS (Light-Theme & UTM Avo)

#### [MODIFY] [huce_h60_proposal.html](file:///C:/Users/Admin/.gemini/antigravity/scratch/huce_h60_project/huce_h60_proposal.html) (và bản sao index.html ở cả 2 thư mục)

*   **CSS Variable `:root` (Light Theme):**
    *   `--primary`: `#002a5c` (Royal Blue chính thức)
    *   `--primary-light`: `#0a468c`
    *   `--bg-dark`: `#f8fafc` (Xám nhạt nền ngoài)
    *   `--card-dark`: `#ffffff` (Nền thẻ trắng)
    *   `--card-border`: `#cbd5e1` (Đường viền mỏng)
    *   `--text-light`: `#0f172a` (Chữ tối chính)
    *   `--text-muted`: `#475569` (Chữ xám phụ)
    *   `--white`: `#ffffff`
    *   `--accent`: `#ff9f1c` (Màu cam nhấn, làm phẳng, không hiệu ứng phát sáng)
*   **CSS Fonts:**
    *   Thay đổi phông chữ của `body` và tất cả tiêu đề `h1, h2, h3, h4, h5, h6` thành `'UTM Avo', 'Segoe UI', Arial, sans-serif`.
*   **CSS Sidebar (Thanh điều hướng):**
    *   Thay đổi nền sidebar thành màu sáng nhạt `#f1f5f9`, viền `#e2e8f0`.
    *   Bỏ thuộc tính `filter: brightness(0) invert(1)` trên logo ConsMedia để logo hiển thị dạng tối/nguyên bản trên nền sáng.
    *   Đổi màu chữ các mục nav-item thành `#475569`. Khi active/hover sẽ có màu `#002a5c` trên nền `#cbd5e1` hoặc `#e2e8f0`.
*   **CSS Panel Cards (Thẻ nội dung):**
    *   Đổi nền sang màu trắng tinh `#ffffff`, bỏ hiệu ứng làm mờ kính (backdrop-filter) và các gradient phát sáng ở góc.
    *   Sử dụng bóng đổ rất nhẹ để tạo chiều sâu sư phạm sạch sẽ.
*   **CSS SWOT & Pillars:**
    *   Đưa các khối SWOT về dạng hộp phẳng, viền màu nhạt tương ứng: Điểm mạnh (Xanh lá nhạt), Điểm yếu (Đỏ nhạt), Cơ hội (Xanh dương nhạt), Thách thức (Cam nhạt), chữ tối màu dễ đọc.
*   **CSS App Simulator Mockup (Giả lập di động & iPad):**
    *   Giữ nguyên khung viền thiết bị màu tối (như màu máy thật) để tăng tính chân thực.
    *   Chuyển đổi toàn bộ giao diện bên trong màn hình giả lập (`.phone-screen` và `.ipad-screen`) sang giao diện sáng (Light Theme):
        *   Nền màn hình: `#f8fafc` hoặc `#ffffff`.
        *   Thanh header app: Giữ màu xanh `#002a5c` với chữ trắng để tạo tính đồng bộ thương hiệu trường học.
        *   Các thẻ nội dung bên trong app: Nền trắng `#ffffff`, chữ tối `#0f172a`, viền `#e2e8f0`.
        *   Footer tabbar app: Nền trắng `#ffffff`, viền trên `#e2e8f0`, các biểu tượng tab viết thường chuẩn hóa.

### 2. Chuẩn hóa Quy cách Viết hoa & Viết tắt (Nghị định 30/2020/NĐ-CP)

*   **Mục lục thanh Sidebar:**
    *   `Trang Chủ Chiến Dịch H60` -> `Trang chủ chiến dịch H60`
    *   `Đánh Giá Sức Khỏe Thương Hiệu` -> `Đánh giá sức khỏe thương hiệu`
    *   `Đề Xuất Hành Động & Cơ Chế` -> `Đề xuất hành động và cơ chế`
    *   `Báo Giá & Thuyết Minh Kỹ Thuật` -> `Báo giá và thuyết minh kỹ thuật`
    *   `Demo App Quản Trị H60` -> `Giả lập ứng dụng quản trị H60`
*   **Các tiêu đề trang chính:**
    *   `TRANG CHỦ ĐỀ XUẤT TƯ VẤN CHIẾN LƯỢC` -> `Trang chủ đề xuất tư vấn chiến lược`
    *   `ĐẠT VẤN ĐỀ & BỐI CẢNH CHIẾN DỊCH` -> `Đặt vấn đề và bối cảnh chiến dịch`
    *   `SWOT Grid` -> `Ma trận SWOT thương hiệu`
    *   `4 Trụ Cột` -> `Bốn trụ cột cốt lõi`
    *   `MA TRẬN PHÂN ĐỊNH TRÁCH NHIỆM PHỐI HỢP (RACI) CHI TIẾT` -> `Ma trận phân định trách nhiệm phối hợp (RACI) chi tiết`
    *   `QUẢN TRỊ LANDING PAGE` -> `Quản trị landing page`
    *   `PHÊ DUYỆT THEO LUỒNG (WORKFLOW APPROVAL)` -> `Phê duyệt theo luồng (Workflow approval)`
    *   `LỊCH TRÌNH & KÊNH TRUYỀN THÔNG CHÍNH THỨC` -> `Lịch trình và kênh truyền thông chính thức`
    *   `QUẢN LÝ DỰ ÁN & SỰ KIỆN THÀNH PHẦN` -> `Quản lý dự án và sự kiện thành phần`
*   **Các danh từ riêng được viết hoa chuẩn:**
    *   `Ban Giám hiệu`, `Ban Tổ chức`, `Trường Đại học Xây dựng Hà Nội`, `ConsMedia`, `HUCE`, `HUCA`, `VietQR`, `MOU`, `cựu sinh viên`, `Đoàn thanh niên`.

---

## Kế hoạch Xác minh

### Thử nghiệm Tự động / Cú pháp
*   Sử dụng đoạn mã kiểm tra để xác nhận các biến CSS trong cả 4 file HTML đã được cập nhật thành các giá trị Light Theme.
*   Đo lượng độ cân bằng mở/đóng thẻ `div` sau khi cập nhật cấu trúc.

### Xác minh Thủ công
1. Mở trực tiếp các file `index.html` và `huce_h60_proposal.html` bằng trình duyệt web.
2. Xác minh giao diện hiển thị sáng sủa, nền trắng, chữ đen sậm, phông chữ `UTM Avo` hiển thị chính xác.
3. Kiểm tra mockup điện thoại và máy tính bảng có nền app sáng, chữ rõ ràng, không bị lem màu hay khó đọc.
4. Rà soát tất cả các tiêu đề lớn nhỏ và mục lục để đảm bảo không còn lỗi viết hoa bừa bãi kiểu tiếng Anh, sử dụng chữ thường cho danh từ chung.
