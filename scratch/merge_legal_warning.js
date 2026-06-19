const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    
    let html = fs.readFileSync(filePath, 'utf8');
    console.log(`\n=== PROCESSING ${file} ===`);

    // 1. Fix date header format
    const oldDateStr = 'Hà Nội | Ngày <span id="current-date">';
    const newDateStr = 'Hà Nội | <span id="current-date">';
    if (html.includes(oldDateStr)) {
        html = html.replace(oldDateStr, newDateStr);
        console.log("- Removed word 'Ngày' and aligned date inline after '|'.");
    } else {
        const regexDate = /Hà\s+Nội\s*\|\s*Ngày\s*<span\s+id="current-date">/i;
        if (regexDate.test(html)) {
            html = html.replace(regexDate, 'Hà Nội | <span id="current-date">');
            console.log("- Aligned date inline via regex.");
        } else {
            console.log("- Date header format already modified or target not found.");
        }
    }

    // 2. Locate Page 1 boundaries
    const p1StartIdx = html.indexOf('<div id="page1-content" class="tab-view">');
    const p1EndIdx = html.indexOf('<div id="page2-content" class="tab-view">');

    if (p1StartIdx === -1 || p1EndIdx === -1) {
        console.log("- Error: Page 1 boundaries not found.");
        return;
    }

    // Extract the dashboard block from the current HTML correctly using the old p1-sec4 header boundary
    const dbStart = html.indexOf('<!-- BẢN ĐỒ CHỈ SỐ SỨC KHỎE THƯƠNG HIỆU HUCE - DASHBOARD ĐỘNG SIÊU TO -->');
    const targetHeaderIdx = html.indexOf('id="p1-sec4"');
    const dbEnd = html.lastIndexOf('<div class="print-page-section">', targetHeaderIdx);
    
    let dashboardHTML = '';
    if (dbStart !== -1 && dbEnd !== -1 && dbStart < dbEnd) {
        dashboardHTML = html.substring(dbStart, dbEnd).trim();
        console.log("- Extracted Dashboard HTML block successfully. Size:", dashboardHTML.length);
    } else {
        console.log("- Error: Dashboard block not found or indices invalid.", dbStart, dbEnd);
        return;
    }

    // 3. Construct new Page 1 HTML
    const newPage1HTML = `<div id="page1-content" class="tab-view">
                <!-- Anchor Bar -->
                <div class="document-vault-bar" style="margin-bottom: 1.5rem;">
                    <span>🔗 CUỘN NHANH ĐẾN PHẦN:</span>
                    <a href="javascript:void(0)" onclick="scrollToSection('p1-sec1')" class="vault-btn">1. Nhu Cầu &amp; Cảnh Báo</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p1-sec2')" class="vault-btn">2. Khảo Sát Thực Trạng</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p1-sec3')" class="vault-btn">3. Phân Tích SWOT</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p1-sec4')" class="vault-btn">4. Đề Xuất Giải Pháp</a>
                </div>

                <!-- SECTION 1: NHU CẦU CẤP THIẾT & ĐỊNH HƯỚNG TIẾP CẬN + CẢNH BÁO PHÁP LÝ -->
                <div class="print-page-section"><div class="panel-card" id="p1-sec1">
                    <h3 style="text-transform: uppercase; color: var(--primary); border-bottom: 1px solid rgba(0, 42, 92, 0.1); padding-bottom: 8px; margin-bottom: 12px;">1. NHU CẦU CẤP THIẾT &amp; ĐỊNH HƯỚNG TIẾP CẬN</h3>
                    
                    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin: 0 0 0.5rem 0;">1.1. Các nhu cầu cấp thiết về thương hiệu và truyền thông</h4>
                    <p style="margin-bottom: 1rem;">Hiện tại, Trường Đại học Xây dựng Hà Nội (HUCE) đang đứng trước 3 nhu cầu cấp thiết về mặt thương hiệu và truyền thông:</p>
                    <ul style="padding-left: 1.2rem; line-height: 1.6; margin-bottom: 1rem; color: #334155;">
                        <li style="margin-bottom: 0.5rem;"><strong>Chuẩn hóa và Đồng bộ hình ảnh:</strong> Khắc phục triệt để sự phân mảnh hình ảnh và sai lệch màu sắc ở các khoa/phòng ban.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Quy trình quản lý và Điều phối truyền thông:</strong> Xây dựng quy chế tác nghiệp, kênh truyền thông thống nhất nhằm nâng cao năng lực phản ứng nhanh, tránh khủng hoảng dư luận.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Hạ tầng và các dịch vụ truyền thông sự kiện:</strong> Đồng hành vận hành các nền tảng trực tuyến (website) và sản xuất các ấn phẩm truyền thông, sự kiện thực tế của trường.</li>
                    </ul>
                    <p style="font-style: italic; color: var(--text-muted); margin-bottom: 1.5rem;">Các hành động này nhằm giải quyết triệt để các vấn đề cốt lõi dưới đây về thương hiệu và truyền thông của nhà trường, trong đó cột mốc Đại lễ H60 đóng vai trò là động lực thúc đẩy.</p>
                    
                    <h4 style="font-size: 0.95rem; font-weight: 700; color: #ef4444; margin: 1.5rem 0 0.5rem 0; border-top: 1px dashed rgba(239, 68, 68, 0.2); padding-top: 1.2rem;">1.2. Cảnh báo pháp lý khẩn cấp: Chưa đăng ký bảo hộ Sở hữu trí tuệ</h4>
                    <div class="info-callout danger" style="background: rgba(239, 68, 68, 0.04); border-left: 4px solid #ef4444; padding: 1.25rem; margin: 1rem 0; border-radius: 8px;">
                        <strong style="color: #ef4444; font-size: 0.95rem; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">⚠️ RỦI RO PHÁP LÝ NGHIÊM TRỌNG</strong>
                        <p style="font-size: 0.8rem; margin: 0; color: var(--text-light); line-height: 1.55;">
                            Qua rà soát dữ liệu tại Cục Sở hữu Trí tuệ Việt Nam, toàn bộ hệ thống nhận diện thương hiệu mới của trường kể từ khi đổi tên năm 2021 bao gồm: <strong>Tên viết tắt "HUCE"</strong> và <strong>Logo mới (lưới tinh chỉnh hình học cẩu tháp - quyển sách)</strong> hiện <strong>CHƯA ĐƯỢC ĐĂNG KÝ BẢO HỘ NHÃN HIỆU ĐỘC QUYỀN</strong>.
                        </p>
                    </div>
                    
                    <h5 style="font-size: 0.85rem; font-weight: 700; color: var(--primary); margin: 1.2rem 0 0.5rem 0;">Các rủi ro cụ thể nếu không hành động ngay:</h5>
                    <ul style="padding-left: 1.2rem; line-height: 1.5; color: #475569; margin-bottom: 1.2rem;">
                        <li style="margin-bottom: 0.4rem;"><strong>Nguy cơ mất thương hiệu (Bị nộp đơn trước):</strong> Theo nguyên tắc ưu tiên nộp đơn trước (First-to-file) của Việt Nam, nếu có một đơn vị khác đăng ký trước tên viết tắt "HUCE" hoặc logo tương tự trong nhóm ngành Giáo dục/Truyền thông, nhà trường có thể bị buộc phải đổi tên hoặc mất quyền sử dụng hợp pháp bộ nhận diện hiện tại.</li>
                        <li style="margin-bottom: 0.4rem;"><strong>Tranh chấp và Xâm phạm nhãn hiệu:</strong> Các tổ chức giáo dục tư nhân hoặc doanh nghiệp có thể sử dụng trái phép tên "HUCE" để tuyển sinh, quảng cáo trục lợi mà nhà trường không có đủ công cụ pháp lý mạnh để cưỡng chế dừng vi phạm.</li>
                        <li style="margin-bottom: 0.4rem;"><strong>Tranh chấp tên miền và kênh truyền thông số:</strong> Việc thiếu văn bằng bảo hộ nhãn hiệu gây khó khăn lớn khi yêu cầu các nền tảng mạng xã hội (Facebook, TikTok, Google) xác minh tích xanh chính chủ hoặc xử lý các trang giả mạo trường.</li>
                    </ul>
                    
                    <h5 style="font-size: 0.85rem; font-weight: 700; color: var(--primary); margin: 1.2rem 0 0.5rem 0;">Đề xuất hành động:</h5>
                    <ul style="padding-left: 1.2rem; line-height: 1.5; color: #475569; margin-bottom: 0;">
                        <li style="margin-bottom: 0.4rem;">Bổ sung ngay dịch vụ <strong>Tư vấn và thực hiện thủ tục đăng ký bảo hộ nhãn hiệu độc quyền</strong> làm cấu phần cốt lõi trong Gói Tổng Thể của đề xuất này.</li>
                        <li style="margin-bottom: 0.4rem;">Đăng ký tối thiểu tại các nhóm ngành thiết yếu:
                            <br>• <strong>Nhóm 41:</strong> Giáo dục, đào tạo, tổ chức sự kiện văn hóa, thể thao.
                            <br>• <strong>Nhóm 16:</strong> Sách, tài liệu, giáo trình, ấn phẩm in ấn học thuật.
                            <br>• <strong>Nhóm 25:</strong> Đồng phục học đường, áo thun, mũ, thời trang thương hiệu.
                            <br>• <strong>Nhóm 35:</strong> Hoạt động quảng cáo, truyền thông tuyển sinh, hội chợ triển lãm thương mại.
                        </li>
                    </ul>
                </div></div>

                <!-- SECTION 2: KHẢO SÁT THỰC TRẠNG TÀI SẢN & KÊNH TRUYỀN THÔNG HUCE -->
                <div class="print-page-section"><div class="panel-card" id="p1-sec2">
                    <h3 style="text-transform: uppercase; color: var(--primary);">2. KHẢO SÁT THỰC TRẠNG TÀI SẢN &amp; KÊNH TRUYỀN THÔNG HUCE (SỐ LIỆU ĐỊNH LƯỢNG)</h3>
                    <p style="margin-bottom: 1.2rem;">Qua khảo sát thực tế bộ tài liệu nhận diện <code>BỘ NHẬN DIỆN MÀU MỚI 27_02.pdf</code> và các kênh truyền thông trực tuyến của HUCE, Tổ tư vấn ghi nhận các chỉ số cụ thể sau:</p>
                    
                    <h4 style="color: var(--primary); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">2.1. Sự phân mảnh tài sản thương hiệu (Brand Assets Audit)</h4>
                    <ul style="padding-left: 1.2rem; line-height: 1.5; color: #475569; margin-bottom: 1.5rem;">
                        <li style="margin-bottom: 0.4rem;"><strong>Lệch tông màu Cobalt Blue chủ đạo (<code>#002a5c</code>):</strong> Khảo sát 13+ đơn vị khoa, phòng ban và Đoàn thanh niên cho thấy <strong>85% ấn phẩm tự phát dùng sai mã màu</strong> (chuyển sang xanh navy xỉn hoặc xanh lam sáng), làm mất tính nhất quán thương hiệu.</li>
                        <li style="margin-bottom: 0.4rem;"><strong>Lỗi hiển thị Logo trên website:</strong> File logo trên website chính thức sử dụng định dạng ảnh chất lượng thấp, dẫn đến tình trạng <strong>vỡ nét, nhòe viền</strong> khi hiển thị ở độ phân giải cao hoặc màn hình di động.</li>
                        <li style="margin-bottom: 0.4rem;"><strong>Bất nhất về tên miền (Domain Name):</strong> Cuốn Guidelines hiện tại của trường vẫn dùng email và website cũ <code>nuce.edu.vn</code> đan xen với <code>huce.edu.vn</code>, tạo sự đứt gãy nhận diện kỹ thuật số.</li>
                    </ul>
                    
                    <h4 style="color: var(--primary); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">2.2. Hiệu suất các Kênh truyền thông trực tuyến</h4>
                    <ul style="padding-left: 1.2rem; line-height: 1.5; color: #475569; margin-bottom: 1.5rem;">
                        <li style="margin-bottom: 0.4rem;"><strong>Website chính thức (<code>huce.edu.vn</code>):</strong>
                            <br>• <em>Tốc độ tải trang:</em> Chậm (điểm số di động dưới <strong>45/100</strong> trên Google PageSpeed Insights).
                            <br>• <em>Trải nghiệm di động (Responsive Layout):</em> Kém, giao diện chật hẹp, bố cục kiểu cũ.
                            <br>• <em>Tỷ lệ giữ chân người dùng (Retention Rate):</em> Dưới <strong>1.5 phút/phiên</strong> do nội dung khô cứng, nặng tính hành chính.
                        </li>
                        <li style="margin-bottom: 0.4rem;"><strong>Fanpage Facebook trường (<code>truongdhxaydung</code>):</strong>
                            <br>• <em>Quy mô:</em> ~85,000 Followers nhưng tỷ lệ tương tác (Engagement Rate) cực thấp, chỉ đạt <strong>~1.1%</strong> (chủ yếu là xem thụ động).
                            <br>• <em>Nhận diện liên kết:</em> URL fanpage vẫn giữ tên cũ <code>/truongdhxaydung</code>, không đồng bộ với tên viết tắt HUCE.
                        </li>
                        <li style="margin-bottom: 0.4rem;"><strong>Các kênh không chính thức (Group cộng đồng tự phát):</strong>
                            <br>• <em>Group Sinh viên HUCE:</em> ~95,000 thành viên (tương tác >100 bài đăng/ngày).
                            <br>• <em>Group Cựu sinh viên:</em> ~25,000 thành viên.
                            <br>• <em>Đánh giá:</em> Lượng thảo luận khổng lồ nhưng <strong>hoàn toàn nằm ngoài tầm kiểm soát của nhà trường</strong>, tiềm ẩn nguy cơ phát sinh thông tin sai lệch hoặc tiêu cực.
                        </li>
                    </ul>
                    
                    ${dashboardHTML}
                </div></div>

                <!-- SECTION 3: PHÂN TÍCH SWOT RÚT GỌN -->
                <div class="print-page-section"><div class="panel-card" id="p1-sec3">
                    <h3 style="text-transform: uppercase; color: var(--primary);">3. PHÂN TÍCH SWOT RÚT GỌN</h3>
                    <div class="audit-table-wrapper">
                        <table class="audit-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                            <thead>
                                <tr style="background: var(--primary); color: #ffffff;">
                                    <th style="width: 50%; padding: 12px; text-align: left; font-weight: 700; border: 1px solid #cbd5e1; font-family: 'Plus Jakarta Sans', sans-serif;">ĐIỂM MẠNH (STRENGTHS)</th>
                                    <th style="width: 50%; padding: 12px; text-align: left; font-weight: 700; border: 1px solid #cbd5e1; font-family: 'Plus Jakarta Sans', sans-serif;">ĐIỂM YẾU (WEAKNESSES)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 12px; vertical-align: top; border: 1px solid #cbd5e1; line-height: 1.6; font-size: 0.8rem; color: #334155; font-family: 'Inter', sans-serif;">
                                        • Lịch sử 70 năm đào tạo, uy tín học thuật cao.<br>
                                        • Đạt chuẩn kiểm định HCERES (Pháp) và AUN-QA.<br>
                                        • Mạng lưới cựu sinh viên hùng hậu toàn quốc.
                                    </td>
                                    <td style="padding: 12px; vertical-align: top; border: 1px solid #cbd5e1; line-height: 1.6; font-size: 0.8rem; color: #334155; font-family: 'Inter', sans-serif;">
                                        • Hệ thống nhận diện số chưa đồng bộ, vỡ nét.<br>
                                        • Thương hiệu chưa được đăng ký bảo hộ SHTT.<br>
                                        • Giao diện website lỗi thời, tốc độ tải chậm.
                                    </td>
                                </tr>
                                <tr style="background: var(--primary); color: #ffffff;">
                                    <th style="padding: 12px; text-align: left; font-weight: 700; border: 1px solid #cbd5e1; font-family: 'Plus Jakarta Sans', sans-serif;">CƠ HỘI (OPPORTUNITIES)</th>
                                    <th style="padding: 12px; text-align: left; font-weight: 700; border: 1px solid #cbd5e1; font-family: 'Plus Jakarta Sans', sans-serif;">THÁCH THỨC (THREATS)</th>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; vertical-align: top; border: 1px solid #cbd5e1; line-height: 1.6; font-size: 0.8rem; color: #334155; font-family: 'Inter', sans-serif;">
                                        • Cột mốc chuyển đổi số để kích hoạt tái định vị thương hiệu.<br>
                                        • Nhu cầu nhân lực các ngành công nghệ/đô thị xanh.<br>
                                        • Khai thác nguồn lực đối lưu tài trợ doanh nghiệp.
                                    </td>
                                    <td style="padding: 12px; vertical-align: top; border: 1px solid #cbd5e1; line-height: 1.6; font-size: 0.8rem; color: #334155; font-family: 'Inter', sans-serif;">
                                        • Xu hướng chọn ngành công nghệ thay vì xây dựng.<br>
                                        • Đối thủ cạnh tranh tuyển sinh truyền thông mạnh mẽ.<br>
                                        • Rủi ro mất quyền sở hữu trí tuệ thương hiệu HUCE.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div></div>

                <!-- SECTION 4: ĐỀ XUẤT GIẢI PHÁP TRỌNG TÂM -->
                <div class="print-page-section"><div class="panel-card" id="p1-sec4">
                    <h3 style="text-transform: uppercase; color: var(--primary);">4. ĐỀ XUẤT GIẢI PHÁP TRỌNG TÂM</h3>
                    <p style="margin-bottom: 1.5rem;">Để giải quyết triệt để các vấn đề trên, nhà trường cần tập trung thực thi các nhóm giải pháp tích hợp trong Gói Tổng Thể:</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin: 1rem 0;">
                        <!-- Col A -->
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.08); background: rgba(0, 42, 92, 0.02); padding: 1.5rem; border-radius: 12px; transition: var(--transition);">
                            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 0.8rem; text-transform: uppercase;">Cấu phần A: Chuẩn hóa Nhận diện &amp; Đăng ký bảo hộ SHTT</h4>
                            <ul style="font-size: 0.8rem; color: #475569; padding-left: 1.2rem; line-height: 1.5;">
                                <li style="margin-bottom: 0.5rem;">Tinh chỉnh hình học logo, khóa mã màu chuẩn HSL Cobalt Blue.</li>
                                <li style="margin-bottom: 0.5rem;">Ban hành cuốn Brand Guidelines toàn diện.</li>
                                <li style="margin-bottom: 0.5rem;">Thiết kế lại toàn bộ giao diện hệ thống website của trường (bàn giao Figma UI Kit).</li>
                                <li style="margin-bottom: 0.5rem;">Đóng gói thiết kế cấu hình khung quà tặng thương hiệu đồng bộ.</li>
                                <li style="margin-bottom: 0.5rem;"><strong>Thực hiện trọn gói thủ tục đăng ký bảo hộ SHTT cho logo và nhãn hiệu HUCE tại Cục SHTT.</strong></li>
                            </ul>
                        </div>
                        <!-- Col B -->
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.08); background: rgba(0, 42, 92, 0.02); padding: 1.5rem; border-radius: 12px; transition: var(--transition);">
                            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 0.8rem; text-transform: uppercase;">Cấu phần B: Quy trình quản lý &amp; Vận hành website đồng hành</h4>
                            <ul style="font-size: 0.8rem; color: #475569; padding-left: 1.2rem; line-height: 1.5;">
                                <li style="margin-bottom: 0.5rem;">Xây dựng quy chế phối hợp, quy trình phê duyệt tin bài chuẩn (SOPs).</li>
                                <li style="margin-bottom: 0.5rem;">Biên soạn kịch bản ứng phó sự cố và xử lý khủng hoảng truyền thông trực tuyến (30 phút).</li>
                                <li style="margin-bottom: 0.5rem;">Cung cấp nhân sự chuyên nghiệp chăm sóc, cập nhật nội dung website trường liên tục trong 12 tháng.</li>
                            </ul>
                        </div>
                    </div>
                </div></div>
            </div>`;

    // Replace old Page 1 block
    html = html.substring(0, p1StartIdx) + newPage1HTML + html.substring(p1EndIdx);
    console.log("- Page 1 updated: Legal warnings integrated into section 1, renumbered subsequent sections.");

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`=== SUCCESSFULLY UPDATED ${file} ===`);
});

// 4. Update the markdown file 01_danh_gia_suc_khoe_thuong_hieu.md
const mdPath = path.join(__dirname, '..', '01_danh_gia_suc_khoe_thuong_hieu.md');
if (fs.existsSync(mdPath)) {
    let md = fs.readFileSync(mdPath, 'utf8');
    
    // Replace Section 1 and Section 2 headers and restructure
    const oldMdSection1And2 = `## 1. NHU CẦU CẤP THIẾT & ĐỊNH HƯỚNG TIẾP CẬN

Hiện tại, Trường Đại học Xây dựng Hà Nội (HUCE) đang đứng trước 3 nhu cầu cấp thiết về mặt thương hiệu và truyền thông:
1.  **Chuẩn hóa và Đồng bộ hình ảnh:** Khắc phục triệt để sự phân mảnh hình ảnh và sai lệch màu sắc ở các khoa/phòng ban.
2.  **Quy trình quản lý và Điều phối truyền thông:** Xây dựng quy chế tác nghiệp, kênh truyền thông thống nhất nhằm nâng cao năng lực phản ứng nhanh, tránh khủng hoảng dư luận.
3.  **Hạ tầng và các dịch vụ truyền thông sự kiện:** Đồng hành vận hành các nền tảng trực tuyến (website) và sản xuất các ấn phẩm truyền thông, sự kiện thực tế của trường.

*Các hành động này nhằm giải quyết triệt để các vấn đề cốt lõi dưới đây về thương hiệu và truyền thông của nhà trường, trong đó cột mốc Đại lễ H60 đóng vai trò là động lực thúc đẩy.*

---

## 2. CẢNH BÁO PHÁP LÝ KHẨN CẤP: CHƯA ĐĂNG KÝ BẢO HỘ SỞ HỮU TRÍ TUỆ

> [!CAUTION]
> **RỦI RO PHÁP LÝ NGHIÊM TRỌNG:**
> Qua rà soát dữ liệu tại Cục Sở hữu Trí tuệ Việt Nam, toàn bộ hệ thống nhận diện thương hiệu mới của trường kể từ khi đổi tên năm 2021 bao gồm: **Tên viết tắt "HUCE"** và **Logo mới (lưới tinh chỉnh hình học cẩu tháp - quyển sách)** hiện **CHƯA ĐƯỢC ĐĂNG KÝ BẢO HỘ NHÃN HIỆU ĐỘC QUYỀN**.

### Các rủi ro cụ thể nếu không hành động ngay:
*   **Nguy cơ mất thương hiệu (Bị nộp đơn trước):** Theo nguyên tắc ưu tiên nộp đơn trước (First-to-file) của Việt Nam, nếu có một đơn vị khác đăng ký trước tên viết tắt "HUCE" hoặc logo tương tự trong nhóm ngành Giáo dục/Truyền thông, nhà trường có thể bị buộc phải đổi tên hoặc mất quyền sử dụng hợp pháp bộ nhận diện hiện tại.
*   **Tranh chấp và Xâm phạm nhãn hiệu:** Các tổ chức giáo dục tư nhân hoặc doanh nghiệp có thể sử dụng trái phép tên "HUCE" để tuyển sinh, quảng cáo trục lợi mà nhà trường không có đủ công cụ pháp lý mạnh để cưỡng chế dừng vi phạm.
*   **Tranh chấp tên miền và kênh truyền thông số:** Việc thiếu văn bằng bảo hộ nhãn hiệu gây khó khăn lớn khi yêu cầu các nền tảng mạng xã hội (Facebook, TikTok, Google) xác minh tích xanh chính chủ hoặc xử lý các trang giả mạo trường.

### Đề xuất hành động:
*   Bổ sung ngay dịch vụ **Tư vấn và thực hiện thủ tục đăng ký bảo hộ nhãn hiệu độc quyền** làm cấu phần cốt lõi trong Gói Tổng Thể của đề xuất này.
*   Đăng ký tối thiểu tại các nhóm ngành thiết yếu:
    *   **Nhóm 41:** Giáo dục, đào tạo, tổ chức sự kiện văn hóa, thể thao.
    *   **Nhóm 16:** Sách, tài liệu, giáo trình, ấn phẩm in ấn học thuật.
    *   **Nhóm 25:** Đồng phục học đường, áo thun, mũ, thời trang thương hiệu.
    *   **Nhóm 35:** Hoạt động quảng cáo, truyền thông tuyển sinh, hội chợ triển lãm thương mại.

---

## 3. KHẢO SÁT THỰC TRẠNG TÀI SẢN & KÊNH TRUYỀN THÔNG HUCE (SỐ LIỆU ĐỊNH LƯỢNG)`;

    const newMdSection1And2 = `## 1. NHU CẦU CẤP THIẾT & ĐỊNH HƯỚNG TIẾP CẬN

### 1.1. Các nhu cầu cấp thiết về thương hiệu và truyền thông
Hiện tại, Trường Đại học Xây dựng Hà Nội (HUCE) đang đứng trước 3 nhu cầu cấp thiết về mặt thương hiệu và truyền thông:
1.  **Chuẩn hóa và Đồng bộ hình ảnh:** Khắc phục triệt để sự phân mảnh hình ảnh và sai lệch màu sắc ở các khoa/phòng ban.
2.  **Quy trình quản lý và Điều phối truyền thông:** Xây dựng quy chế tác nghiệp, kênh truyền thông thống nhất nhằm nâng cao năng lực phản ứng nhanh, tránh khủng hoảng dư luận.
3.  **Hạ tầng và các dịch vụ truyền thông sự kiện:** Đồng hành vận hành các nền tảng trực tuyến (website) và sản xuất các ấn phẩm truyền thông, sự kiện thực tế của trường.

*Các hành động này nhằm giải quyết triệt để các vấn đề cốt lõi dưới đây về thương hiệu và truyền thông của nhà trường, trong đó cột mốc Đại lễ H60 đóng vai trò là động lực thúc đẩy.*

### 1.2. Cảnh báo pháp lý khẩn cấp: Chưa đăng ký bảo hộ Sở hữu trí tuệ

> [!CAUTION]
> **RỦI RO PHÁP LÝ NGHIÊM TRỌNG:**
> Qua rà soát dữ liệu tại Cục Sở hữu Trí tuệ Việt Nam, toàn bộ hệ thống nhận diện thương hiệu mới của trường kể từ khi đổi tên năm 2021 bao gồm: **Tên viết tắt "HUCE"** và **Logo mới (lưới tinh chỉnh hình học cẩu tháp - quyển sách)** hiện **CHƯA ĐƯỢC ĐĂNG KÝ BẢO HỘ NHÃN HIỆU ĐỘC QUYỀN**.

#### Các rủi ro cụ thể nếu không hành động ngay:
*   **Nguy cơ mất thương hiệu (Bị nộp đơn trước):** Theo nguyên tắc ưu tiên nộp đơn trước (First-to-file) của Việt Nam, nếu có một đơn vị khác đăng ký trước tên viết tắt "HUCE" hoặc logo tương tự trong nhóm ngành Giáo dục/Truyền thông, nhà trường có thể bị buộc phải đổi tên hoặc mất quyền sử dụng hợp pháp bộ nhận diện hiện tại.
*   **Tranh chấp và Xâm phạm nhãn hiệu:** Các tổ chức giáo dục tư nhân hoặc doanh nghiệp có thể sử dụng trái phép tên "HUCE" để tuyển sinh, quảng cáo trục lợi mà nhà trường không có đủ công cụ pháp lý mạnh để cưỡng chế dừng vi phạm.
*   **Tranh chấp tên miền và kênh truyền thông số:** Việc thiếu văn bằng bảo hộ nhãn hiệu gây khó khăn lớn khi yêu cầu các nền tảng mạng xã hội (Facebook, TikTok, Google) xác minh tích xanh chính chủ hoặc xử lý các trang giả mạo trường.

#### Đề xuất hành động:
*   Bổ sung ngay dịch vụ **Tư vấn và thực hiện thủ tục đăng ký bảo hộ nhãn hiệu độc quyền** làm cấu phần cốt lõi trong Gói Tổng Thể của đề xuất này.
*   Đăng ký tối thiểu tại các nhóm ngành thiết yếu:
    *   **Nhóm 41:** Giáo dục, đào tạo, tổ chức sự kiện văn hóa, thể thao.
    *   **Nhóm 16:** Sách, tài liệu, giáo trình, ấn phẩm in ấn học thuật.
    *   **Nhóm 25:** Đồng phục học đường, áo thun, mũ, thời trang thương hiệu.
    *   **Nhóm 35:** Hoạt động quảng cáo, truyền thông tuyển sinh, hội chợ triển lãm thương mại.

---

## 2. KHẢO SÁT THỰC TRẠNG TÀI SẢN & KÊNH TRUYỀN THÔNG HUCE (SỐ LIỆU ĐỊNH LƯỢNG)`;

    // Check if it matches exactly
    const mdNormalized = md.replace(/\r\n/g, '\n');
    const oldNormalized = oldMdSection1And2.replace(/\r\n/g, '\n');
    const newNormalized = newMdSection1And2.replace(/\r\n/g, '\n');

    if (mdNormalized.includes(oldNormalized)) {
        md = mdNormalized.replace(oldNormalized, newNormalized);
        console.log("- Updated markdown section 1 & 2 content successfully.");
    } else {
        // Fallback replacement for headings
        md = md.replace('## 1. NHU CẦU CẤP THIẾT & ĐỊNH HƯỚNG TIẾP CẬN', '## 1. NHU CẦU CẤP THIẾT & ĐỊNH HƯỚNG TIẾP CẬN\n\n### 1.1. Các nhu cầu cấp thiết về thương hiệu và truyền thông');
        md = md.replace('## 2. CẢNH BÁO PHÁP LÝ KHẨN CẤP: CHƯA ĐĂNG KÝ BẢO HỘ SỞ HỮU TRÍ TUỆ', '### 1.2. Cảnh báo pháp lý khẩn cấp: Chưa đăng ký bảo hộ Sở hữu trí tuệ');
        md = md.replace('## 3. KHẢO SÁT THỰC TRẠNG TÀI SẢN & KÊNH TRUYỀN THÔNG HUCE (SỐ LIỆU ĐỊNH LƯỢNG)', '## 2. KHẢO SÁT THỰC TRẠNG TÀI SẢN & KÊNH TRUYỀN THÔNG HUCE (SỐ LIỆU ĐỊNH LƯỢNG)');
        console.log("- Renumbered markdown headings via fallback.");
    }

    // Renumber SWOT and solutions in md
    md = md.replace('## 4. PHÂN TÍCH SWOT RÚT GỌN', '## 3. PHÂN TÍCH SWOT RÚT GỌN');
    md = md.replace('## 5. ĐỀ XUẤT GIẢI PHÁP TRỌNG TÂM', '## 4. ĐỀ XUẤT GIẢI PHÁP TRỌNG TÂM');
    
    fs.writeFileSync(mdPath, md, 'utf8');
    console.log("- Updated 01_danh_gia_suc_khoe_thuong_hieu.md file.");
    
    // Copy to brain folder
    const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\a5bb0902-08f9-4c1c-a377-7c5160196c76';
    const brainMdPath = path.join(brainDir, '01_danh_gia_suc_khoe_thuong_hieu.md');
    fs.copyFileSync(mdPath, brainMdPath);
    console.log("- Copied updated markdown to brain directory.");
}
