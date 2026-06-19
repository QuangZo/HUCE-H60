const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

// 1. Load clean style and html content of dashboard from extracted files
const cleanStylePath = path.join(__dirname, 'index_clean.html');
if (!fs.existsSync(cleanStylePath)) {
    console.error("Error: scratch/index_clean.html not found! Run git extraction first.");
    process.exit(1);
}
const cleanHTML = fs.readFileSync(cleanStylePath, 'utf8');

// Style block extraction
const styleToken = '.brand-health-dashboard {';
const styleStart = cleanHTML.indexOf('<style>', cleanHTML.indexOf(styleToken) - 1000);
const styleEnd = cleanHTML.indexOf('</style>', styleStart) + 8;
const dashboardStyle = cleanHTML.substring(styleStart, styleEnd);

// HTML block extraction (perfect balanced count)
const htmlStart = cleanHTML.indexOf('<div class="brand-health-dashboard" id="bh-dashboard-section">');
let openCount = 0;
let pos = htmlStart;
let matchedEnd = -1;
while (pos < cleanHTML.length) {
    const nextOpen = cleanHTML.indexOf('<div', pos);
    const nextClose = cleanHTML.indexOf('</div', pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
        openCount++;
        pos = nextOpen + 4;
    } else {
        openCount--;
        if (openCount === 0) {
            matchedEnd = nextClose + 6;
            break;
        }
        pos = nextClose + 5;
    }
}
const dashboardBody = cleanHTML.substring(htmlStart, matchedEnd);

// Full dashboard block combined
const fullDashboardHTML = dashboardStyle + '\n' + dashboardBody;

console.log("Extracted perfect dashboard combined size:", fullDashboardHTML.length);

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    
    // We start from the clean committed version in git to ensure NO div tag issues!
    console.log(`\n=== PROCESS AND REBUILD ${file} ===`);
    const cleanGitContent = fs.readFileSync(filePath, 'utf8');
    let html = cleanGitContent;

    // -----------------------------------------------------------------
    // 1. Date Header format change: remove "Ngày", inline after "|"
    // -----------------------------------------------------------------
    html = html.replace('Hà Nội | Ngày <span id="current-date">', 'Hà Nội | <span id="current-date">');
    
    // -----------------------------------------------------------------
    // 2. Rename sidebar first tab: "Tổng quan & Khái quát Chào giá" -> "Tổng Quan"
    //    and renumber circular badges: 01->00, 02->01, 03->02, 04->03
    // -----------------------------------------------------------------
    const oldSidebar = `<ul class="nav-list">
                <li class="nav-item active" onclick="switchPageView('page0')">
                    <span class="nav-item-num">01</span>
                    Tổng quan &amp; Khái quát Chào giá
                </li>
                <li class="nav-item" onclick="switchPageView('page1')">
                    <span class="nav-item-num">02</span>
                    Báo cáo 01: Đánh giá Sức khỏe Thương hiệu &amp; Cảnh báo Bảo hộ Pháp lý HUCE
                </li>
                <li class="nav-item" onclick="switchPageView('page2')">
                    <span class="nav-item-num">03</span>
                    Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông
                </li>
                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">04</span>
                    Báo cáo 03: Đề xuất Giải pháp &amp; Bảng báo giá Chi tiết Hệ thống Thương hiệu
                </li>
            </ul>`;

    const newSidebar = `<ul class="nav-list">
                <li class="nav-item active" onclick="switchPageView('page0')">
                    <span class="nav-item-num">00</span>
                    Tổng Quan
                </li>
                <li class="nav-item" onclick="switchPageView('page1')">
                    <span class="nav-item-num">01</span>
                    Báo cáo 01: Đánh giá sơ bộ Sức khỏe thương hiệu HUCE
                </li>
                <li class="nav-item" onclick="switchPageView('page2')">
                    <span class="nav-item-num">02</span>
                    Báo cáo 02: Đề xuất Hành động &amp; Lộ trình triển khai
                </li>
                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">03</span>
                    Báo cáo 03: Đề xuất Chào giá
                </li>
            </ul>`;

    html = html.replace(oldSidebar, newSidebar);

    // -----------------------------------------------------------------
    // 3. Rename dynamic title JS logic
    // -----------------------------------------------------------------
    const oldJS = `            if (pageId === 'page0') {
                pageTitle.innerText = "Hồ sơ Đề xuất Phương án Tư vấn: Chuẩn hóa Thương hiệu & Tái cấu trúc Hệ thống Vận hành Truyền thông";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page1') {
                pageTitle.innerText = "Báo cáo 01: Đánh giá Sức khỏe Thương hiệu & Cảnh báo Bảo hộ Pháp lý HUCE";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page2') {
                pageTitle.innerText = "Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page3') {
                pageTitle.innerText = "Báo cáo 03: Đề xuất Giải pháp & Bảng báo giá Chi tiết Hệ thống Thương hiệu";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            }`;

    const newJS = `            if (pageId === 'page0') {
                pageTitle.innerText = "Tổng Quan";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page1') {
                pageTitle.innerText = "Báo cáo 01: Đánh giá sơ bộ Sức khỏe thương hiệu HUCE";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page2') {
                pageTitle.innerText = "Báo cáo 02: Đề xuất Hành động & Lộ trình triển khai";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page3') {
                pageTitle.innerText = "Báo cáo 03: Đề xuất Chào giá";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            }`;

    html = html.replace(oldJS, newJS);

    // -----------------------------------------------------------------
    // 4. Rebuild Page 0 Content (tab-view active)
    // -----------------------------------------------------------------
    const p0StartIdx = html.indexOf('<div id="page0-content" class="tab-view active">');
    const p0EndIdx = html.indexOf('<div id="page1-content" class="tab-view">');

    if (p0StartIdx === -1 || p0EndIdx === -1) {
        console.error("- Error: Page 0 boundaries not found.");
        return;
    }

    const newPage0HTML = `<div id="page0-content" class="tab-view active">
                <!-- 1. TÓM TẮT ĐỀ XUẤT (Executive Summary) -->
                <div class="panel-card">
                    <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem; color: #0f172a;">
                        ConsMedia trân trọng gửi tới Trường Đại học Xây dựng Hà Nội (HUCE) phương án tư vấn đồng hành chuẩn hóa hệ thống hình ảnh nhận diện thương hiệu và tái cấu trúc quy trình vận hành truyền thông. Đề xuất này thiết lập nền tảng thương hiệu vững chắc và an toàn pháp lý cho nhà trường, lấy cột mốc Đại lễ Kỷ niệm 60 năm làm động lực thúc đẩy triển khai.
                    </p>
                    <div style="font-size: 0.82rem; font-weight: 800; color: var(--primary); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #e4e4e7; padding-top: 1rem;">THÔNG TIN CHUNG DỰ ÁN</div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; font-size: 0.8rem; color: var(--text-muted); line-height: 1.6;">
                        <div style="grid-column: span 2; border-bottom: 1px dashed rgba(0,42,92,0.1); padding-bottom: 8px;">
                            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2s4 2 4 8c0 2.08.31 3.3 1 4.5V17H7v-2.5c.69-1.2 1-2.42 1-4.5 0-6 4-8 4-8zm0 17h3v2h-3v-2zm-6.27.56c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-.71-.71zm12.54 0-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-.71-.71z"/></svg>
                            <strong>Tên dự án:</strong> Chuẩn hóa Thương hiệu &amp; Tái cấu trúc Hệ thống Vận hành Truyền thông
                        </div>
                        <div>
                            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <strong>Khách hàng:</strong> Trường ĐHXD HN
                        </div>
                        <div>
                            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
                            <strong>Phạm vi nghiên cứu:</strong> Nhận diện thương hiệu, bảo hộ SHTT, quy trình SOPs và vận hành truyền thông
                        </div>
                        <div>
                            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.89L11 13.7V7h1.5v5.8l3.7 2.2-.71 1.09z"/></svg>
                            <strong>Thời gian:</strong> Từ 05.2026
                        </div>
                        <div>
                            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                            <strong>Mã HS:</strong> Huce.260516.v.1.2
                        </div>
                    </div>
                </div>

                <!-- 2. NỘI DUNG ĐỀ XUẤT (Infographic list) -->
                <div class="panel-card">
                    <h3 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--primary); margin-bottom: 0.8rem;"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> NỘI DUNG ĐỀ XUẤT</h3>
                    <div class="info-flow-grid">
                        <div class="info-flow-card">
                            <div class="info-flow-num">01</div>
                            <h4><svg class="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Báo cáo 01: Đánh giá sơ bộ Sức khỏe thương hiệu HUCE</h4>
                            <p>Kiểm toán di sản thương hiệu, đo lường sai lệch màu sắc tại 13+ đơn vị và cảnh báo rủi ro pháp lý nhãn hiệu chưa được bảo hộ sở hữu trí tuệ.</p>
                        </div>
                        <div class="info-flow-card">
                            <div class="info-flow-num">02</div>
                            <h4><svg class="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Báo cáo 02: Đề xuất Hành động &amp; Lộ trình triển khai</h4>
                            <p>Xây dựng quy trình tác nghiệp truyền thông chuẩn (SOPs), phân định trách nhiệm RACI và kịch bản ứng phó khủng hoảng trực tuyến.</p>
                        </div>
                        <div class="info-flow-card">
                            <div class="info-flow-num">03</div>
                            <h4><svg class="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Báo cáo 03: Đề xuất Chào giá</h4>
                            <p>Báo giá chi tiết các gói (Cấu phần A: Nhận diện &amp; SHTT, Gói 2: Tư vấn &amp; Vận hành Web) cùng menu dịch vụ lẻ sự kiện gia tăng.</p>
                        </div>
                    </div>
                </div>

                <!-- 3. KHÁI QUÁT SỨC KHỎE THƯƠNG HIỆU (Full Brand Health Dashboard) -->
                <div class="panel-card">
                    <h3 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--primary); margin-bottom: 0.8rem;"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M5 19.29V5h2v14.29H5zm4-6V5h2v8.29H9zm4 6V5h2v14.29h-2zm4-10V5h2v8.29h-2z"/></svg> KHÁI QUÁT SỨC KHỎE THƯƠNG HIỆU HUCE</h3>
                    ${fullDashboardHTML}
                </div>

                <!-- 4. LỘ TRÌNH SẢN XUẤT SẢN PHẨM & DUY TRÌ (Product Delivery Roadmap) -->
                <div class="panel-card">
                    <h3 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--primary); margin-bottom: 0.8rem;"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> LỘ TRÌNH SẢN XUẤT SẢN PHẨM &amp; DUY TRÌ DÀI HẠN</h3>
                    <div class="simple-roadmap-list">
                        <!-- GIAI ĐOẠN 1 -->
                        <div class="simple-roadmap-item" style="border-left: 4px solid var(--primary);">
                            <div class="sr-badge">01</div>
                            <div class="sr-content">
                                <div class="sr-info">
                                    <h5>Giai đoạn 1: Khảo sát &amp; Đánh giá Thực trạng truyền thông HUCE</h5>
                                    <p>Tiếp cận, khảo sát thực tế di sản hình ảnh tại 13+ đơn vị khoa/phòng ban HUCE, đo lường độ phân mảnh màu sắc và đánh giá rủi ro pháp lý sở hữu trí tuệ của nhãn hiệu.</p>
                                </div>
                                <span class="sr-time"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> 20/05/2026 - 19/06/2026</span>
                            </div>
                        </div>
                        <!-- GIAI ĐOẠN 2 -->
                        <div class="simple-roadmap-item">
                            <div class="sr-badge">02</div>
                            <div class="sr-content">
                                <div class="sr-info">
                                    <h5>Giai đoạn 2: Chuẩn hóa Nhận diện &amp; Nộp hồ sơ bảo hộ SHTT</h5>
                                    <p>Tinh chỉnh lưới hình học logo gốc, thiết kế bộ Brand Guidelines &amp; Playbook, in ấn 15 cuốn cao cấp lưu hành nội bộ, nộp hồ sơ bảo hộ tại Cục SHTT.</p>
                                </div>
                                <span class="sr-time"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> 20/06/2026 - 15/07/2026</span>
                            </div>
                        </div>
                        <!-- GIAI ĐOẠN 3 -->
                        <div class="simple-roadmap-item">
                            <div class="sr-badge">03</div>
                            <div class="sr-content">
                                <div class="sr-info">
                                    <h5>Giai đoạn 3: Thiết kế Hệ thống Ấn phẩm &amp; UI/UX Kênh số</h5>
                                    <p>Thiết kế bộ văn phòng, bộ tài sản số truyền thông và thiết kế Figma UI Kit trang chủ Portal trường/Admissions/Khoa.</p>
                                </div>
                                <span class="sr-time"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> 16/07/2026 - 15/08/2026</span>
                            </div>
                        </div>
                        <!-- GIAI ĐOẠN 4 -->
                        <div class="simple-roadmap-item" style="border-left: 4px solid #ec4899;">
                            <div class="sr-badge" style="background: #ec4899; color: #ffffff;">04</div>
                            <div class="sr-content">
                                <div class="sr-info">
                                    <h5>Giai đoạn 4: Quy trình Quản lý SOPs &amp; Đóng gói Quà tặng VIP (Phục vụ trước Đại lễ)</h5>
                                    <p>Biên soạn bộ quy trình truyền thông chuẩn (SOPs), kịch bản phản ứng nhanh khủng hoảng, thiết kế hệ thống quà tặng thương hiệu VIP và các ấn phẩm sự kiện phục vụ Đại lễ.</p>
                                </div>
                                <span class="sr-time" style="background:#fdf2f8; color:#ec4899; border-color:#fbcfe8;"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> 16/08/2026 - 15/09/2026</span>
                            </div>
                        </div>
                        <!-- GIAI ĐOẠN 5 -->
                        <div class="simple-roadmap-item">
                            <div class="sr-badge">05</div>
                            <div class="sr-content">
                                <div class="sr-info">
                                    <h5>Giai đoạn 5: Đồng hành Vận hành &amp; Duy trì Kênh số (Hỗ trợ Đại lễ &amp; Hậu H60)</h5>
                                    <p>Bảo trì kỹ thuật website trường, tối ưu SEO tin bài, biên tập bài viết hoạt động và thiết kế banner thường nhật trong 6 tháng.</p>
                                </div>
                                <span class="sr-time"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> 16/09/2026 - 15/11/2026</span>
                            </div>
                        </div>
                        <!-- GIAI ĐOẠN 6 -->
                        <div class="simple-roadmap-item" style="border-left: 4px solid var(--green);">
                            <div class="sr-badge" style="background: var(--green);">06</div>
                            <div class="sr-content">
                                <div class="sr-info">
                                    <h5>Giai đoạn 6: Bảo trì, Gia hạn &amp; Đồng hành Pháp lý (Dài Hạn)</h5>
                                    <p>Đồng hành thẩm định đơn nhãn hiệu tại Cục SHTT, hỗ trợ kỹ thuật máy chủ 12 tháng và chuyển giao năng lực tự vận hành cho trường.</p>
                                </div>
                                <span class="sr-time" style="background:#f0fdf4; color:var(--green); border-color:#bbf7d0;"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> 16/11/2026 - 15/06/2027</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    html = html.substring(0, p0StartIdx) + newPage0HTML + html.substring(p0EndIdx);
    console.log("- Page 0 (Tổng Quan) content updated successfully with full health dashboard.");

    // -----------------------------------------------------------------
    // 5. Rebuild Page 1 Content (tab-view)
    // -----------------------------------------------------------------
    const p1StartIdx_new = html.indexOf('<div id="page1-content" class="tab-view">');
    const p1EndIdx_new = html.indexOf('<div id="page2-content" class="tab-view">');

    if (p1StartIdx_new === -1 || p1EndIdx_new === -1) {
        console.error("- Error: Page 1 boundaries not found after page 0 replace.");
        return;
    }

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
                    
                    ${fullDashboardHTML}
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

    html = html.substring(0, p1StartIdx_new) + newPage1HTML + html.substring(p1EndIdx_new);
    console.log("- Page 1 content updated successfully.");

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`=== SUCCESSFULLY REBUILT ${file} ===`);
});
