const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', '03_bao_gia_va_specs_chi_tiet.md');
let mdContent = fs.readFileSync(mdPath, 'utf8');

// --- 1. REPLACE THE ENTIRE SECTION BEFORE THE PRICING TABLE ---
// We find from "## GÓI 1:" down to "## BẢNG 1:"
const startIdx = mdContent.indexOf('## GÓI 1:');
const endIdx = mdContent.indexOf('## BẢNG 1:');

if (startIdx !== -1 && endIdx !== -1) {
    const newDescription = `## I. GÓI TỔNG THỂ: CHUẨN HÓA THƯƠNG HIỆU & VẬN HÀNH TRUYỀN THÔNG ĐỒNG HÀNH (800.000.000 VND)

Giải pháp tổng thể tích hợp toàn bộ hai cấu phần cốt lõi nhằm chuẩn hóa hình ảnh nhận diện, thiết lập lá chắn pháp lý vững chắc cho HUCE và chuyên nghiệp hóa quy trình tác nghiệp truyền thông số đồng hành trong 12 tháng.

### 1. Cấu phần A: Chuẩn hóa nhận diện thương hiệu & Bảo hộ pháp lý SHTT (Trị giá: 500.000.000 VND)
*   **Giai đoạn 1: Khảo sát hiện trạng & Kiểm toán thương hiệu (02 tuần):** Thu thập toàn bộ dữ liệu lịch sử logo, đo lường các sai lệch màu sắc tại 13+ đơn vị khoa/phòng ban.
*   **Giai đoạn 2: Tinh chỉnh hình học Logo gốc (Logo Refinement - 02 tuần):** Tinh chỉnh lưới hình học biểu trưng gốc (tay nâng sách + hoa cách điệu X + cẩu tháp Â) đảm bảo hiển thị sắc nét trên các thiết bị kỹ thuật số.
*   **Giai đoạn 3: Thiết kế Hệ thống website & Khung tiêu chuẩn quà tặng (03 tuần):** Redesign giao diện hệ thống website Portal, Admissions, templates các khoa/viện và đóng gói thiết kế quà tặng.
*   **Giai đoạn 4: Biên soạn Playbook, Media Kit & Dịch vụ in ấn xuất bản (02 tuần):** Biên soạn toàn diện cuốn Brand Guidelines & Playbook, thực hiện in ấn sản xuất 15 cuốn cao cấp lưu hành nội bộ và tổ chức nghiệm thu.

#### Danh mục bàn giao chi tiết của Cấu phần A:
*   **Logo Refinement:** 01 Logo gốc hoàn chỉnh tối ưu lưới hình học và 04 phiên bản ứng dụng chuẩn (.Ai, .Eps, .Svg).
*   **Brand Guidelines (Thiết kế & Quy chuẩn):** Thiết lập quy cách chuẩn hóa thiết kế nhận diện thương hiệu HUCE, bao gồm: Logo grid, khoảng cách an toàn, bảng màu chuẩn Cobalt Blue, kiểu chữ (typography) tiêu biểu, quy chuẩn ứng dụng trên các chất liệu và kịch bản sử dụng do's/don'ts. Bàn giao file cẩm nang thiết kế định dạng PDF tương tác.
*   **Office Stationery (Ấn phẩm văn phòng):** Thiết kế danh thiếp, letterhead (bản in & file Word), phong bì thư (A4, A5, DL), kẹp file tài liệu, Slide Template PowerPoint thương hiệu HUCE (30 layout chuyên nghiệp).
*   **Digital Assets (Tài sản số):** Thiết kế hệ thống 05 Social Media Grids templates phục vụ đăng tải mạng xã hội (Facebook/Zalo/YouTube), 03 mẫu chữ ký email chuẩn HTML cho các chức danh, và 05 hình nền Zoom/Teams phục vụ họp trực tuyến và hội thảo quốc tế.
*   **Thiết kế Khung Quy chuẩn Quà tặng Thương hiệu (Brand Gift Design Framework):** Thiết lập tiêu chuẩn và định hướng mỹ thuật quà tặng theo phân cấp đối tượng:
    1.  *Quà tặng Lãnh đạo cao cấp:* Mẫu quà khánh tiết và đối ngoại VIP (sổ da dập chìm ép kim, bút ký laser, kỷ niệm chương pha lê chế tác cẩu tháp tinh xảo).
    2.  *Quà tặng Khách hàng & Cán bộ, giảng viên:* Quà tặng hội thảo, sự kiện thường niên (ô cầm tay Cobalt Blue, bình giữ nhiệt, cốc sứ).
    3.  *Quà tặng Sinh viên & Ứng viên tuyển dụng:* Quà tặng quảng bá diện rộng (áo polo cotton thêu logo, túi vải canvas thân thiện môi trường).
    4.  *Quà tặng theo Chiến dịch:* Định hướng thiết kế các ấn phẩm quà tặng lưu niệm theo mốc thời gian.
*   **Thiết kế lại Giao diện Website (Web UI/UX Redesign):** Thiết kế UI/UX hiện đại (bàn giao Figma UI Kit) cho trang chủ Portal trường, trang tuyển sinh, và khung giao diện (template) dùng chung cho website 13+ Khoa và Viện nghiên cứu. Tối ưu hiển thị Responsive cho di động.
*   **Bảo hộ sở hữu trí tuệ (IP Protection):** Đại diện thực hiện toàn bộ thủ tục pháp lý, soạn thảo hồ sơ nộp đơn đăng ký bảo hộ độc quyền nhãn hiệu và logo HUCE tại Cục Sở hữu Trí tuệ cho 4 nhóm sản phẩm/dịch vụ cốt lõi (Nhóm 41, 16, 25, 35).
*   **Landing Page Giới thiệu:** Thiết kế và lập trình Landing Page giới thiệu thương hiệu HUCE tích hợp theo dõi lượt truy cập và cổng VietQR tự động.
*   **Biên soạn tổng hợp PlayBook - Media Kit & Dịch vụ xuất bản in ấn:** Tổng hợp và đóng gói bộ Brand Playbook hoàn chỉnh, đóng gói Digital Media Kit (bao gồm các file thiết kế gốc chuẩn, logo, icons, templates ready-to-use). Đảm bảo dịch vụ in ấn xuất bản 15 cuốn Playbook cao cấp bìa cứng khổ ngang, giấy mỹ thuật chuyên dụng, bìa ép nhũ lưu hành nội bộ.

### 2. Cấu phần B: Quy trình quản lý & Vận hành website đồng hành (Trị giá: 300.000.000 VND)
*   **Hạng mục B.1: Tư vấn quy trình quản lý & Nền tảng hoạt động chuẩn hóa (120.000.000 VND):**
    *   Xây dựng quy trình tác nghiệp truyền thông chuẩn (SOPs) đa phòng ban và phê duyệt di động.
    *   Thiết lập khung lịch biên tập truyền thông (Editorial Calendar) tổng thể đa kênh (Website, Facebook).
    *   Xây dựng Quy chế & Kịch bản phản ứng nhanh phòng ngừa khủng hoảng truyền thông trực tuyến trong 30 phút.
    *   Tập huấn nâng cao năng lực (02 buổi) cho Ban Truyền thông trường và cán bộ Đoàn thanh niên.
*   **Hạng mục B.2: Dịch vụ chăm sóc, bảo trì và điều hành Website HUCE (180.000.000 VND - Thời hạn 12 tháng):**
    *   Bảo trì kỹ thuật máy chủ, tối ưu tốc độ tải trang, cập nhật bảo mật SSL định kỳ, sao lưu dữ liệu hàng tuần.
    *   Biên tập nội dung, đăng tải tin tức, văn bản thông báo hoạt động lên website Portal chính của trường chuẩn SEO.
    *   Thiết kế banner trang chủ và các đồ họa minh hoạt hoạt động thường nhật của trường trên website (tối đa 15 banner/tháng).

`;
    mdContent = mdContent.substring(0, startIdx) + newDescription + mdContent.substring(endIdx);
    console.log('Description updated successfully.');
} else {
    console.log('Error: Could not locate description indexes.');
}

// --- 2. REPLACE THE PRICING TABLE ---
const tableStartIdx = mdContent.indexOf('## BẢNG 1:');
const tableEndIdx = mdContent.indexOf('---', tableStartIdx);

if (tableStartIdx !== -1 && tableEndIdx !== -1) {
    const newTable = `## BẢNG 1: BẢNG BÁO GIÁ TRỌN GÓI HỆ THỐNG THƯƠNG HIỆU & VẬN HÀNH TRUYỀN THÔNG HUCE
*(Mức giá chưa bao gồm thuế 10% VAT)*

| STT | Hạng mục / Nội dung công việc | Số lượng | ĐVT | Đơn giá (VND) | Thành tiền (VND) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **I** | **GÓI TỔNG THỂ: CHUẨN HÓA HỆ THỐNG THƯƠNG HIỆU & VẬN HÀNH ĐỒNG HÀNH** | | | | **800,000,000** |
| 1 | Nghiên cứu di sản & Tinh chỉnh hình học Logo gốc (Logo Refinement) | 1 | Gói | 30,000,000 | 30,000,000 |
| 2 | Biên soạn Cẩm nang quy chuẩn thương hiệu (Brand Guidelines - Thiết kế & Quy chuẩn) | 1 | Gói | 45,000,000 | 45,000,000 |
| 3 | Thiết kế Bộ ấn phẩm văn phòng (Office Stationery) | 1 | Gói | 45,000,000 | 45,000,000 |
| 4 | Thiết kế Bộ tài sản truyền thông số (Digital Assets) | 1 | Gói | 35,000,000 | 35,000,000 |
| 5 | Thiết kế lại Giao diện hệ thống Website trường (Web UI/UX Redesign) | 1 | Gói | 90,000,000 | 90,000,000 |
| 6 | Thiết kế Bộ nhận diện khuôn viên trường (Campus Branding) | 1 | Gói | 65,000,000 | 65,000,000 |
| 7 | Thiết kế Bộ nhận diện Sự kiện và Lễ kỷ niệm (Event Branding) | 1 | Gói | 55,000,000 | 55,000,000 |
| 8 | Thiết kế Khung Quy chuẩn Quà tặng Thương hiệu (Brand Gift Design Framework) | 1 | Gói | 50,000,000 | 50,000,000 |
| 9 | Dịch vụ tư vấn pháp lý & Nộp đơn Đăng ký bảo hộ độc quyền nhãn hiệu (SHTT) | 1 | Gói | 30,000,000 | 30,000,000 |
| 10 | Sản xuất Landing Page Giới thiệu Thương hiệu HUCE | 1 | Gói | 30,000,000 | 30,000,000 |
| 11 | Biên soạn tổng hợp PlayBook - Media Kit và dịch vụ xuất bản in ấn tài liệu lưu hành | 1 | Gói | 25,000,000 | 25,000,000 |
| 12 | Tư vấn quy trình quản lý truyền thông & Nền tảng hoạt động chuẩn hóa | 1 | Gói | 120,000,000 | 120,000,000 |
| 13 | Dịch vụ chăm sóc, cập nhật nội dung & Điều hành hệ thống website HUCE (12 tháng) | 12 | Tháng | 15,000,000 | 180,000,000 |
| | **TỔNG KINH PHÍ GÓI TỔNG THỂ CỐ ĐỊNH TRỌN GÓI (I)** | | | | **800,000,000** |

`;
    mdContent = mdContent.substring(0, tableStartIdx) + newTable + mdContent.substring(tableEndIdx);
    console.log('Pricing table updated successfully.');
} else {
    console.log('Error: Could not locate pricing table indexes.');
}

fs.writeFileSync(mdPath, mdContent, 'utf8');
console.log('03_bao_gia_va_specs_chi_tiet.md updated fully and written to disk.');
