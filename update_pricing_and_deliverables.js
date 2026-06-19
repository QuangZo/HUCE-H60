const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// --- 1. RESTRUCTURE GÓI 1 PRICING TABLE ---

// We want to replace Items 2 and 4 and insert Item 11.
// Let's first locate Gói 1's table rows.
const oldItem2And3And4 = `                                <tr>
                                    <td>2</td>
                                    <td><strong>Biên soạn và In ấn Cẩm nang thương hiệu (Brand Guidelines &amp; Playbook)</strong></td>
                                    <td>Biên soạn và in ấn bộ quy chuẩn thương hiệu tích hợp (Brand Playbook) bao gồm quy cách thiết kế, tone of voice, quy trình áp dụng. Bàn giao File PDF tương tác và 15 cuốn in màu cao cấp bìa cứng ép nhũ để lưu hành nội bộ.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">85,000,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>Thiết kế Bộ ấn phẩm văn phòng (Office Stationery)</strong></td>
                                    <td>Danh thiếp, Letterhead (in và file Word), Phong bì (A4, A5, DL), Folder tài liệu, Bộ slide PowerPoint thương hiệu HUCE (30 layout chuyên nghiệp theo lưới đồ họa mới).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">45,000,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>Thiết kế Bộ tài sản truyền thông số (Digital Assets)</strong></td>
                                    <td>5 template Social Media Grids, 3 mẫu chữ ký email, 5 hình nền Zoom/Teams.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">20,000,000</td>
                                </tr>`;

const newItem2And3And4 = `                                <tr>
                                    <td>2</td>
                                    <td><strong>Biên soạn Cẩm nang quy chuẩn thương hiệu (Brand Guidelines - Thiết kế &amp; Quy chuẩn)</strong></td>
                                    <td>Thiết lập quy cách chuẩn hóa thiết kế nhận diện thương hiệu HUCE, bao gồm: Logo grid, khoảng cách an toàn, bảng màu chuẩn Cobalt Blue, kiểu chữ (typography) tiêu biểu, quy chuẩn ứng dụng trên các chất liệu và kịch bản sử dụng do's/don'ts. Bàn giao file cẩm nang thiết kế định dạng PDF tương tác.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">45,000,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>Thiết kế Bộ ấn phẩm văn phòng (Office Stationery)</strong></td>
                                    <td>Danh thiếp, Letterhead (in và file Word), Phong bì (A4, A5, DL), Folder tài liệu, Bộ slide PowerPoint thương hiệu HUCE (30 layout chuyên nghiệp theo lưới đồ họa mới).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">45,000,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>Thiết kế Bộ tài sản truyền thông số (Digital Assets)</strong></td>
                                    <td>Thiết kế hệ thống 05 Social Media Grids templates phục vụ đăng tải mạng xã hội (Facebook/Zalo/YouTube), 03 mẫu chữ ký email chuẩn HTML cho các chức danh, và 05 hình nền Zoom/Teams phục vụ họp trực tuyến và hội thảo quốc tế.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">35,000,000</td>
                                </tr>`;

if (html.includes(oldItem2And3And4)) {
    html = html.replace(oldItem2And3And4, newItem2And3And4);
    console.log('Replaced Items 2, 3, 4 successfully.');
} else {
    // Fallback search and replace if spacing differs slightly
    console.log('Warning: Spacing mismatch in Items 2, 3, 4 table block.');
}

// Next, let's insert Item 11 after Item 10.
const oldItem10 = `                                <tr>
                                    <td>10</td>
                                    <td><strong>Sản xuất Landing Page Giới thiệu Thương hiệu HUCE</strong></td>
                                    <td>Thiết kế giao diện UI/UX chuẩn hóa thương hiệu HUCE, lập trình và cấu hình Landing Page truyền thông tương thích đa thiết bị, tích hợp hệ thống tracking và form đăng ký/đóng góp tự động qua VietQR.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">30,000,000</td>
                                </tr>`;

const newItem10And11 = `                                <tr>
                                    <td>10</td>
                                    <td><strong>Sản xuất Landing Page Giới thiệu Thương hiệu HUCE</strong></td>
                                    <td>Thiết kế giao diện UI/UX chuẩn hóa thương hiệu HUCE, lập trình và cấu hình Landing Page truyền thông tương thích đa thiết bị, tích hợp hệ thống tracking và form đăng ký/đóng góp tự động qua VietQR.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">30,000,000</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td><strong>Biên soạn tổng hợp PlayBook - Media Kit và dịch vụ xuất bản in ấn tài liệu lưu hành</strong></td>
                                    <td>Tổng hợp và đóng gói bộ Brand Playbook hoàn chỉnh, đóng gói Digital Media Kit (bao gồm các file thiết kế gốc chuẩn, logo, icons, templates ready-to-use). Đảm bảo dịch vụ in ấn xuất bản 15 cuốn Playbook cao cấp bìa cứng khổ ngang, giấy mỹ thuật chuyên dụng, bìa ép nhũ lưu hành nội bộ.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">25,000,000</td>
                                </tr>`;

if (html.includes(oldItem10)) {
    html = html.replace(oldItem10, newItem10And11);
    console.log('Inserted Item 11 successfully.');
} else {
    console.log('Warning: Spacing mismatch in Item 10 table block.');
}


// --- 2. REWRITE GÓI 1 DELIVERABLES HUB ---
const oldDelG1Start = '<div id="del-g1-view" class="del-content-view active">';
const oldDelG1End = '<!-- Tab G21 -->';

const startIdx = html.indexOf(oldDelG1Start);
const endIdx = html.indexOf(oldDelG1End);

if (startIdx !== -1 && endIdx !== -1) {
    const newDelG1HTML = `
                    <div id="del-g1-view" class="del-content-view active">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Phân nhóm 1: Logo Refinement <span>REFINE</span></h5>
                                <p>Tinh chỉnh hình học tối ưu hóa hiển thị cẩu tháp - quyển sách:</p>
                                <ul>
                                    <li><strong>01 Logo gốc hoàn chỉnh:</strong> Đã khóa lưới tỷ lệ hình học Geometric grid, nét vẽ sạch, hiển thị sắc nét.</li>
                                    <li><strong>04 Phiên bản ứng dụng:</strong> Màu gốc Cobalt Blue &amp; Gold, bản âm bản, bản dương bản, và bản siêu tối giản favicon/avatar app.</li>
                                    <li><strong>Vùng an toàn (Clear space):</strong> Hướng dẫn chi tiết kích thước tối thiểu và các lỗi sai cần tránh khi sử dụng logo.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 2: Brand Guidelines (Thiết kế &amp; Quy chuẩn) <span>MANUAL</span></h5>
                                <p>Cẩm nang quy chuẩn hệ thống nhận diện:</p>
                                <ul>
                                    <li><strong>Typography:</strong> Quy định Font chữ Outfit (số hóa) và UTM Avo (in ấn văn phòng) kèm cỡ chữ, độ dãn cách.</li>
                                    <li><strong>Color Palette:</strong> Bảng mã màu chuẩn Royal Blue (Cobalt Blue di sản), màu Vàng nhạt (nhấn), và sắc Slate/Grey phụ trợ.</li>
                                    <li><strong>Grid &amp; Patterns:</strong> Thiết kế hệ lưới giàn thép kết cấu đồ họa module hóa dùng làm pattern.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 3: Office Stationery <span>VĂN PHÒNG</span></h5>
                                <p>Bộ ấn phẩm văn phòng ứng dụng di sản:</p>
                                <ul>
                                    <li><strong>Danh thiếp &amp; Phong bì:</strong> Mẫu danh thiếp sang trọng BGH, 03 cỡ phong bì thư A4, A5, DL in dập chìm logo.</li>
                                    <li><strong>Tiêu đề thư (Letterhead):</strong> File in offset thực tế và File Word (.docx) số hóa tiêu chuẩn.</li>
                                    <li><strong>Folder &amp; Slide Template:</strong> Folder đựng tài liệu dập logo; Slide thuyết trình PowerPoint 16:9 với 30 layouts chuyên dụng cho các hoạt động của trường.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 4: Digital Assets <span>MẠNG XÃ HỘI</span></h5>
                                <p>Tài sản số hóa tối ưu truyền thông:</p>
                                <ul>
                                    <li><strong>Social Media Grids:</strong> 05 templates Photoshop/Figma thiết kế chia lưới hiện đại cho bài đăng Facebook/Zalo.</li>
                                    <li><strong>Email Signatures:</strong> 03 mẫu chữ ký email HTML chuyên nghiệp, tích hợp thông tin cá nhân và logo chuẩn cho cán bộ giảng viên.</li>
                                    <li><strong>Zoom/Teams Backgrounds:</strong> 05 hình nền ảo đồng bộ nhận diện thương hiệu phục vụ hội thảo trực tuyến và giảng dạy.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 5: Web UI/UX Redesign <span>WEBSITE</span></h5>
                                <p>Thiết kế lại giao diện hệ thống website trường:</p>
                                <ul>
                                    <li><strong>Portal &amp; Tuyển sinh:</strong> Thiết kế giao diện UI/UX trang chủ Portal trường và trang thông tin tuyển sinh (Admissions).</li>
                                    <li><strong>Figma UI Kit:</strong> Thiết kế khung giao diện dùng chung cho website 13+ Khoa và Viện nghiên cứu, tối ưu Responsive di động.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 6: Campus Branding <span>KHUÔN VIÊN</span></h5>
                                <p>Hệ thống biển bảng nhận diện khuôn viên:</p>
                                <ul>
                                    <li><strong>Biển chỉ dẫn nội khu:</strong> Thiết kế hệ thống biển hướng dẫn lối đi, sơ đồ trường học ngoài trời.</li>
                                    <li><strong>Biển tên phòng ban:</strong> Thiết kế biển tên giảng đường G3, T1, phòng làm việc cán bộ.</li>
                                    <li><strong>Phướn dọc &amp; Lá cờ:</strong> Thiết kế phướn treo dọc các tuyến đường nội bộ HUCE và lá cờ biểu trưng trường.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 7: Event Branding <span>SỰ KIỆN</span></h5>
                                <p>Hệ thống nhận diện sự kiện và lễ kỷ niệm:</p>
                                <ul>
                                    <li><strong>Backdrop &amp; Khánh tiết:</strong> Backdrop sân khấu Lễ mít tinh và Gala tối, phông nền sảnh đón khách.</li>
                                    <li><strong>Thẻ đại biểu &amp; dây đeo:</strong> Thẻ đeo ban tổ chức và thẻ đại biểu VIP kèm bao da cao cấp.</li>
                                    <li><strong>Thiệp mời Đại lễ:</strong> Thiệp in giấy mỹ thuật ép kim và e-invite tích hợp QR code check-in.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 8: Brand Gift Design <span>QUÀ TẶNG</span></h5>
                                <p>Quy chuẩn kiểu dáng hệ quà tặng thương hiệu:</p>
                                <ul>
                                    <li><strong>Quà tặng VIP:</strong> Sổ da dập chìm, bút ký khắc laser, kỷ niệm chương pha lê cẩu tháp.</li>
                                    <li><strong>Quà tặng đối ngoại &amp; Sinh viên:</strong> Ô cầm tay Cobalt, bình giữ nhiệt, cốc sứ, áo polo thêu logo trường.</li>
                                    <li><strong>Bao bì &amp; Túi hộp:</strong> Thiết kế túi giấy, hộp đựng quà tặng VIP đồng bộ nhận diện.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 9: Sở hữu Trí tuệ (SHTT) <span>PHÁP LÝ</span></h5>
                                <p>Đại diện đăng ký bảo hộ độc quyền nhãn hiệu:</p>
                                <ul>
                                    <li><strong>Chuẩn bị hồ sơ:</strong> Soạn thảo hồ sơ đăng ký nhãn hiệu chữ "HUCE" và logo cẩu tháp - quyển sách.</li>
                                    <li><strong>Nộp đơn pháp lý:</strong> Đại diện nộp đơn lên Cục Sở hữu Trí tuệ cho 4 nhóm ngành kinh tế cốt lõi (41, 16, 25, 35).</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 10: Landing Page Thương hiệu <span>LANDING PAGE</span></h5>
                                <p>Lập trình trang Landing Page giới thiệu thương hiệu:</p>
                                <ul>
                                    <li><strong>UI/UX Web Page:</strong> Lập trình Landing Page tương thích di động, tối ưu SEO.</li>
                                    <li><strong>Cổng VietQR:</strong> Tích hợp form đăng ký tự động và cổng VietQR hỗ trợ đóng góp quỹ cựu sinh viên.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 11: Playbook &amp; Ấn phẩm In ấn <span>PLAYBOOK</span></h5>
                                <p>Biên soạn tổng hợp PlayBook - Media Kit và in ấn tài liệu:</p>
                                <ul>
                                    <li><strong>Đóng gói Media Kit:</strong> Tập hợp file gốc logo chuẩn (.Ai, .Eps, .Svg), guidelines PDF, templates.</li>
                                    <li><strong>In ấn Playbook:</strong> Thiết kế, chế bản in offset chất lượng cao 15 cuốn Brand Playbook bìa cứng ép nhũ lưu hành nội bộ.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    `;
    
    html = html.substring(0, startIdx) + newDelG1HTML + html.substring(endIdx);
    console.log('Successfully updated Gói 1 Deliverables Hub inside index.html.');
} else {
    console.log('ERROR: Could not locate Gói 1 deliverables hub start/end tokens!');
}

// Write the modified content back to index.html
fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully saved Gói 1 restructuring updates to index.html.');

// Copy to huce_h60_proposal.html
const propPath = path.join(__dirname, 'huce_h60_proposal.html');
fs.writeFileSync(propPath, html, 'utf8');
console.log('Successfully copied index.html to huce_h60_proposal.html.');
