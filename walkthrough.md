# Báo cáo Nghiệm thu Hoàn thành: Tái cơ cấu và Chuẩn hóa Đề xuất Truyền thông HUCE H60

Tài liệu này tổng hợp kết quả nghiệm thu nâng cấp và tái cơ cấu toàn diện Cổng thông tin **"Bảng Đề Xuất Tư Vấn Truyền Thông Tổng Thể HUCE H60"** (`huce_h60_proposal.html` và `index.html`) nhằm tập trung giải quyết các nhu cầu cấp thiết thực tế của Trường Đại học Xây dựng Hà Nội (HUCE), đồng thời cảnh báo pháp lý về Sở hữu trí tuệ (SHTT).

---

## 🚀 Các Hạng Mục Đã Cập Nhật & Hoàn Thành

### 1. Cảnh báo Pháp lý Khẩn cấp & Gói nộp đơn bảo hộ SHTT
*   **Thêm cảnh báo SHTT:** Đã tích hợp một khung cảnh báo nổi bật màu đỏ tại Page 1 (Đặt vấn đề) nêu rõ rủi ro pháp lý nghiêm trọng do nhãn hiệu viết tắt "HUCE" và biểu trưng Logo mới (áp dụng từ 2021) chưa được đăng ký bảo hộ độc quyền nhãn hiệu tại Cục Sở hữu Trí tuệ Việt Nam.
*   **Dịch vụ bảo hộ SHTT:** Tích hợp dịch vụ đại diện pháp lý, soạn thảo hồ sơ và nộp đơn đăng ký bảo hộ độc quyền nhãn hiệu trọn gói cho 4 nhóm cốt lõi (41, 16, 25, 35) vào Gói 1.

### 2. Tái cơ cấu 3 Trụ cột Hành động & Gói dịch vụ
Loại bỏ hoàn toàn các gói công nghệ phần mềm tự xây dựng cồng kềnh (App HUCA, Campaign Portal) và định hướng lại dịch vụ theo 3 nhu cầu cấp thiết:
*   **Trụ cột 1: Chuẩn hóa nhận diện & SHTT (500.000.000 VND)**
    *   Tinh chỉnh hình học logo gốc, chuẩn hóa cẩm nang thương hiệu.
    *   Thiết kế lại toàn bộ giao diện hệ thống website của trường (Figma UI Kit trang chủ Portal, Admissions, templates dùng chung cho các Khoa/Viện).
    *   Thiết kế hệ thống quà tặng thương hiệu HUCE H60 đồng bộ.
    *   Dịch vụ đại diện nộp đơn bảo hộ độc quyền nhãn hiệu HUCE (4 nhóm).
    *   Sản xuất Landing Page Chiến dịch H60 tích hợp cổng đóng góp tự động VietQR.
*   **Trụ cột 2: Quy trình quản lý truyền thông & Vận hành website đồng hành (300.000.000 VND)**
    *   *Gói 2.1 (120.000.000 VND):* Tư vấn xây dựng quy trình tác nghiệp truyền thông chuẩn (SOPs), lịch biên tập đa kênh, kịch bản ứng phó khủng hoảng và tập huấn nhân sự.
    *   *Gói 2.2 (180.000.000 VND):* Dịch vụ chăm sóc website, bảo trì kỹ thuật, tối ưu SEO, biên tập bài viết và thiết kế banner thường nhật trong 12 tháng năm 2026 (15M/tháng).
*   **Trụ cột 3: Dịch vụ sự kiện gia tăng (Menu dịch vụ lẻ)**
    *   Menu báo giá lẻ on-demand phục vụ quay phim highlight, chụp ảnh, livestream đa góc máy, tổng đạo diễn, MC và lễ tân sự kiện.

### 3. Cập nhật Báo giá, Calculator & Loại bỏ Page 4
*   **Interactive Calculator:** Cập nhật 3 checkbox tính toán ngân sách mới:
    *   *Checkbox 1 (Gói 1):* 500.000.000 VND.
    *   *Checkbox 2 (Gói 2.1):* 120.000.000 VND.
    *   *Checkbox 3 (Gói 2.2):* 180.000.000 VND.
    *   *Tổng kinh phí mặc định:* **800.000.000 VND** khi chọn cả 3 gói (được tính toán động khi bật/tắt các gói).
*   **Bảng báo giá tĩnh:** Đồng bộ hóa toàn bộ bảng giá và chi tiết deliverables theo đúng spec 10 phân nhóm của Gói 1 và 2 cấu phần của Gói 2.
*   **Loại bỏ Page 4:** Gỡ bỏ hoàn toàn trang giả lập ứng dụng quản trị điều phối (mockup di động và iPad) khỏi thanh sidebar điều hướng và mã nguồn hiển thị do các gói ứng dụng công nghệ đã được lược bỏ.
*   **Cập nhật Section 7:** Thay thế chiến lược repurposed app/portal cũ bằng "Chiến lược đồng hành và phương án bảo trì website theo các giai đoạn" dài hạn sau năm 2026.

---

## 🛠️ Kết Quả Thử Nghiệm Kỹ Thuật

| Tiêu chí kiểm tra | Trạng thái | Chi tiết kỹ thuật |
| :--- | :---: | :--- |
| **Loại bỏ Page 4** | **ĐẠT** | Không còn bất kỳ từ khóa `page4` nào trong file `index.html`. Sidebar chỉ hiển thị 3 trang (00-03). |
| **Interactive Calculator** | **ĐẠT** | Tổng tiền mặc định hiển thị là `800,000,000`. Khi bỏ chọn từng box, giá trị giảm tương ứng (500M, 120M, 180M). |
| **Logic JavaScript** | **ĐẠT** | Khởi tạo giá trị `currentTotal = 800000000` thành công, chạy trơn tru không lỗi script. |
| **CSS & Responsive** | **ĐẠT** | Giao diện hiển thị chuẩn phong cách Light Theme tối giản, phông chữ `UTM Avo` hiển thị sắc nét. |

---

## 📂 Các Tệp Đã Cập Nhật

1. **Bản Trình Bày Tích Hợp (Project):** [huce_h60_proposal.html](file:///C:/Users/Admin/.gemini/antigravity/scratch/huce_h60_project/huce_h60_proposal.html)
2. **Trang Chủ Live Demo (Project):** [index.html](file:///C:/Users/Admin/.gemini/antigravity/scratch/huce_h60_project/index.html)
3. **Báo cáo Đánh giá Thương hiệu:** [01_danh_gia_suc_khoe_thuong_hieu.md](file:///C:/Users/Admin/.gemini/antigravity/scratch/huce_h60_project/01_danh_gia_suc_khoe_thuong_hieu.md)
4. **Báo cáo Đề xuất Hành động:** [02_de_xuat_hanh_dong_va_co_che.md](file:///C:/Users/Admin/.gemini/antigravity/scratch/huce_h60_project/02_de_xuat_hanh_dong_va_co_che.md)
5. **Báo cáo Báo giá chi tiết:** [03_bao_gia_va_specs_chi_tiet.md](file:///C:/Users/Admin/.gemini/antigravity/scratch/huce_h60_project/03_bao_gia_va_specs_chi_tiet.md)
6. **Báo Cáo Nghiệm Thu Hoàn Thành (Project):** [walkthrough.md](file:///C:/Users/Admin/.gemini/antigravity/scratch/huce_h60_project/walkthrough.md)
