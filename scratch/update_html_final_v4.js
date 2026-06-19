const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const copyPath = path.join(__dirname, '..', 'huce_h60_proposal.html');

let content = fs.readFileSync(filePath, 'utf8');

// Normalize all line endings to \n to avoid CRLF mismatch on Windows
content = content.replace(/\r\n/g, '\n');

console.log('Line endings normalized to LF.');

// --- 1. UNIFY REPORT NAMES IN SIDEBAR NAVIGATION ---
const oldSidebarNav = `            <ul class="nav-list">
                <li class="nav-item active" onclick="switchPageView('page0')">
                    <span class="nav-item-num">01</span>
                    01. Tổng quan &amp; Khái quát Chào giá
                </li>
                <li class="nav-item" onclick="switchPageView('page1')">
                    <span class="nav-item-num">02</span>
                    02. Đánh giá Sức khỏe Thương hiệu
                </li>
                <li class="nav-item" onclick="switchPageView('page2')">
                    <span class="nav-item-num">03</span>
                    03. Lộ trình &amp; Cơ chế Phối hợp
                </li>
                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">04</span>
                    04. Báo giá Chi tiết &amp; Đặc tả
                </li>
            </ul>`;

const newSidebarNav = `            <ul class="nav-list">
                <li class="nav-item active" onclick="switchPageView('page0')">
                    <span class="nav-item-num">01</span>
                    01. Tổng quan &amp; Khái quát Chào giá
                </li>
                <li class="nav-item" onclick="switchPageView('page1')">
                    <span class="nav-item-num">02</span>
                    02. Báo cáo 01: Đánh giá Sức khỏe Thương hiệu &amp; Cảnh báo Bảo hộ Pháp lý HUCE
                </li>
                <li class="nav-item" onclick="switchPageView('page2')">
                    <span class="nav-item-num">03</span>
                    03. Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông
                </li>
                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">04</span>
                    04. Báo cáo 03: Đề xuất Giải pháp &amp; Bảng báo giá Chi tiết Hệ thống Thương hiệu
                </li>
            </ul>`;

if (content.includes(oldSidebarNav)) {
    content = content.replace(oldSidebarNav, newSidebarNav);
    console.log('Updated sidebar navigation report titles.');
} else {
    console.log('ERROR: Could not find sidebar navigation block.');
}

// --- 2. UNIFY REPORT NAMES IN PRINT NAV BAR ---
const oldPrintNav = `            <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0;">
                <li class="print-nav-item" onclick="openPrintPreview('page1')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    01. Báo cáo Sức khỏe
                </li>
                <li class="print-nav-item" onclick="openPrintPreview('page2')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    02. Cơ chế &amp; Lộ trình
                </li>
                <li class="print-nav-item" onclick="openPrintPreview('page3')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    03. Báo giá &amp; Đặc tả
                </li>
            </ul>`;

const newPrintNav = `            <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0;">
                <li class="print-nav-item" onclick="openPrintPreview('page1')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    01. Báo cáo 01: Đánh giá Sức khỏe Thương hiệu &amp; Cảnh báo Bảo hộ Pháp lý HUCE
                </li>
                <li class="print-nav-item" onclick="openPrintPreview('page2')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    02. Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông
                </li>
                <li class="print-nav-item" onclick="openPrintPreview('page3')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    03. Báo cáo 03: Đề xuất Giải pháp &amp; Bảng báo giá Chi tiết Hệ thống Thương hiệu
                </li>
            </ul>`;

if (content.includes(oldPrintNav)) {
    content = content.replace(oldPrintNav, newPrintNav);
    console.log('Updated print navigation report titles.');
} else {
    console.log('ERROR: Could not find print navigation block.');
}

// --- 3. UNIFY REPORT NAMES IN JAVASCRIPT switchPageView ---
const oldJSSwitch = `            } else if (pageId === 'page1') {
                pageTitle.innerText = "02. Phân tích Sức khỏe Thương hiệu HUCE";
                pageSubtitle.innerText = "Báo cáo Đánh giá Sức khỏe Thương hiệu & Mục tiêu Chiến lược";
            } else if (pageId === 'page2') {
                pageTitle.innerText = "03. Lộ trình Triển khai & Cơ chế Phối hợp";
                pageSubtitle.innerText = "Khung Hợp tác, Lộ trình Sản xuất & Quy trình Tác nghiệp";
            } else if (pageId === 'page3') {
                pageTitle.innerText = "04. Báo giá Chi tiết & Đặc tả";
                pageSubtitle.innerText = "Đặc tả các gói, Bảng báo giá trọn gói & Menu dịch vụ lẻ";
            }`;

const newJSSwitch = `            } else if (pageId === 'page1') {
                pageTitle.innerText = "Báo cáo 01: Đánh giá Sức khỏe Thương hiệu & Cảnh báo Bảo hộ Pháp lý HUCE";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page2') {
                pageTitle.innerText = "Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            } else if (pageId === 'page3') {
                pageTitle.innerText = "Báo cáo 03: Đề xuất Giải pháp & Bảng báo giá Chi tiết Hệ thống Thương hiệu";
                pageSubtitle.innerText = "Trường Đại học Xây dựng Hà Nội (HUCE)";
            }`;

if (content.includes(oldJSSwitch)) {
    content = content.replace(oldJSSwitch, newJSSwitch);
    console.log('Updated switchPageView javascript report titles.');
} else {
    console.log('ERROR: Could not find switchPageView javascript titles block.');
}

// --- 4. UNIFY REPORT NAMES IN HOME PAGE (PAGE 0) CARDS ---
const oldHomeCards = `                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.1); background: rgba(0, 42, 92, 0.03); border: 1px solid rgba(0, 42, 92, 0.08); cursor: pointer; padding: 1.5rem; border-radius: 12px; transition: var(--transition);" onclick="switchPageView('page1')">
                            <div class="objective-icon-num" style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">01</div>
                            <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> 01. Đánh giá sức khỏe thương hiệu</h3>
                            <p style="font-size: 0.82rem; margin-bottom: 1.2rem; color: var(--text-muted); line-height: 1.5; height: 75px; overflow: hidden;">Nghiên cứu hiện trạng định vị, bối cảnh đổi tên trường năm 2021, khảo sát tài sản thương hiệu, SWOT chi tiết và đề xuất giải pháp nhằm chuẩn hóa thương hiệu HUCE.</p>
                            <button class="btn-main" style="padding: 0.45rem 0.9rem; font-size: 0.75rem; width: auto; border-radius: 6px; background: var(--primary); color: var(--white); cursor: pointer; border: none; font-weight: 600; transition: var(--transition);" onclick="event.stopPropagation(); switchPageView('page1')">📖 Đọc Báo Cáo</button>
                        </div>
                        
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.1); background: rgba(0, 42, 92, 0.03); border: 1px solid rgba(0, 42, 92, 0.08); cursor: pointer; padding: 1.5rem; border-radius: 12px; transition: var(--transition);" onclick="switchPageView('page2')">
                            <div class="objective-icon-num" style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">02</div>
                            <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> 02. Đề Xuất và Cơ Thế Hợp Tác Thương Hiệu</h3>
                            <p style="font-size: 0.82rem; margin-bottom: 1.2rem; color: var(--text-muted); line-height: 1.5; height: 75px; overflow: hidden;">Khung hợp tác theo MOU 2025, ba trụ cột hành động chính, ma trận phối hợp trách nhiệm RACI chi tiết, quy trình phê duyệt tin bài và cơ chế phòng ngừa xử lý khủng hoảng nhãn hiệu.</p>
                            <button class="btn-main" style="padding: 0.45rem 0.9rem; font-size: 0.75rem; width: auto; border-radius: 6px; background: var(--primary); color: var(--white); cursor: pointer; border: none; font-weight: 600; transition: var(--transition);" onclick="event.stopPropagation(); switchPageView('page2')">📖 Đọc Báo Cáo</button>
                        </div>
                        
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.1); background: rgba(0, 42, 92, 0.03); border: 1px solid rgba(0, 42, 92, 0.08); cursor: pointer; padding: 1.5rem; border-radius: 12px; transition: var(--transition);" onclick="switchPageView('page3')">
                            <div class="objective-icon-num" style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">03</div>
                            <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> 03. Thuyết Minh Specs và Báo Giá</h3>
                            <p style="font-size: 0.82rem; margin-bottom: 1.2rem; color: var(--text-muted); line-height: 1.5; height: 75px; overflow: hidden;">Báo giá thiết kế nhận diện &amp; bảo hộ SHTT (Gói 1), gói tư vấn quy trình và vận hành website đồng hành (Gói 2), cơ cấu hợp tác và menu dịch vụ truyền thông sự kiện lẻ (Gói 3).</p>
                            <button class="btn-main" style="padding: 0.45rem 0.9rem; font-size: 0.75rem; width: auto; border-radius: 6px; background: var(--primary); color: var(--white); cursor: pointer; border: none; font-weight: 600; transition: var(--transition);" onclick="event.stopPropagation(); switchPageView('page3')">📖 Đọc Báo Cáo</button>
                        </div>`;

const newHomeCards = `                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.1); background: rgba(0, 42, 92, 0.03); border: 1px solid rgba(0, 42, 92, 0.08); cursor: pointer; padding: 1.5rem; border-radius: 12px; transition: var(--transition);" onclick="switchPageView('page1')">
                            <div class="objective-icon-num" style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">01</div>
                            <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> Báo cáo 01: Đánh giá Sức khỏe Thương hiệu &amp; Cảnh báo Bảo hộ Pháp lý HUCE</h3>
                            <p style="font-size: 0.82rem; margin-bottom: 1.2rem; color: var(--text-muted); line-height: 1.5; height: 75px; overflow: hidden;">Nghiên cứu hiện trạng định vị, bối cảnh đổi tên trường năm 2021, khảo sát tài sản thương hiệu, SWOT chi tiết và đề xuất giải pháp nhằm chuẩn hóa thương hiệu HUCE.</p>
                            <button class="btn-main" style="padding: 0.45rem 0.9rem; font-size: 0.75rem; width: auto; border-radius: 6px; background: var(--primary); color: var(--white); cursor: pointer; border: none; font-weight: 600; transition: var(--transition);" onclick="event.stopPropagation(); switchPageView('page1')">📖 Đọc Báo Cáo</button>
                        </div>
                        
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.1); background: rgba(0, 42, 92, 0.03); border: 1px solid rgba(0, 42, 92, 0.08); cursor: pointer; padding: 1.5rem; border-radius: 12px; transition: var(--transition);" onclick="switchPageView('page2')">
                            <div class="objective-icon-num" style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">02</div>
                            <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông</h3>
                            <p style="font-size: 0.82rem; margin-bottom: 1.2rem; color: var(--text-muted); line-height: 1.5; height: 75px; overflow: hidden;">Khung hợp tác theo MOU 2025, ba trụ cột hành động chính, ma trận phối hợp trách nhiệm RACI chi tiết, quy trình phê duyệt tin bài và cơ chế phòng ngừa xử lý khủng hoảng nhãn hiệu.</p>
                            <button class="btn-main" style="padding: 0.45rem 0.9rem; font-size: 0.75rem; width: auto; border-radius: 6px; background: var(--primary); color: var(--white); cursor: pointer; border: none; font-weight: 600; transition: var(--transition);" onclick="event.stopPropagation(); switchPageView('page2')">📖 Đọc Báo Cáo</button>
                        </div>
                        
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.1); background: rgba(0, 42, 92, 0.03); border: 1px solid rgba(0, 42, 92, 0.08); cursor: pointer; padding: 1.5rem; border-radius: 12px; transition: var(--transition);" onclick="switchPageView('page3')">
                            <div class="objective-icon-num" style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">03</div>
                            <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> Báo cáo 03: Đề xuất Giải pháp &amp; Bảng báo giá Chi tiết Hệ thống Thương hiệu</h3>
                            <p style="font-size: 0.82rem; margin-bottom: 1.2rem; color: var(--text-muted); line-height: 1.5; height: 75px; overflow: hidden;">Báo giá thiết kế nhận diện &amp; bảo hộ SHTT (Gói 1), gói tư vấn quy trình và vận hành website đồng hành (Gói 2), cơ cấu hợp tác và menu dịch vụ truyền thông sự kiện lẻ (Gói 3).</p>
                            <button class="btn-main" style="padding: 0.45rem 0.9rem; font-size: 0.75rem; width: auto; border-radius: 6px; background: var(--primary); color: var(--white); cursor: pointer; border: none; font-weight: 600; transition: var(--transition);" onclick="event.stopPropagation(); switchPageView('page3')">📖 Đọc Báo Cáo</button>
                        </div>`;

if (content.includes(oldHomeCards)) {
    content = content.replace(oldHomeCards, newHomeCards);
    console.log('Updated homepage (page 0) cards report titles.');
} else {
    console.log('ERROR: Could not find homepage cards block.');
}

// --- 5. SPLIT CALCULATOR CHECKBOXES BACK ---
const oldCalc = `                                <div class="checklist-group-title" style="font-size:0.8rem; font-weight:700; color:var(--primary); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">Gói Dự Án Trọn Gói (I + II)</div>
                                <div class="checklist-scroll" style="margin-bottom: 1.2rem; display:flex; flex-direction:column; gap:8px;">
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 800000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói Tổng Thể: Chuẩn hóa &amp; Vận hành truyền thông đồng hành <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Trọn gói thiết kế thương hiệu, nộp đơn bảo hộ SHTT, Landing Page, xây quy trình SOPs và vận hành website 12 tháng</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">800M</div>
                                    </div>
                                </div>`;

const newCalc = `                                <div class="checklist-group-title" style="font-size:0.8rem; font-weight:700; color:var(--primary); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">Hạng mục Dự án Cố định (Gói 1 &amp; Gói 2)</div>
                                <div class="checklist-scroll" style="margin-bottom: 1.2rem; display:flex; flex-direction:column; gap:8px;">
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 500000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói 1: Chuẩn hóa Nhận diện &amp; Bảo hộ SHTT <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Tinh chỉnh logo, cẩm nang Guidelines, bộ văn phòng, Digital assets, thiết kế web UI Kit, quà tặng, Brand Portal và đại diện bảo hộ SHTT.</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">500M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 120000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói 2.1: Tư vấn Quy trình quản lý truyền thông <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Xây dựng quy trình tác nghiệp truyền thông chuẩn (SOPs), kịch bản ứng phó sự cố truyền thông 30 phút và tập huấn kỹ năng.</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">120M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 180000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói 2.2: Dịch vụ vận hành website đồng hành <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Biên tập nội dung chuẩn SEO, thiết kế banner thường nhật (tối đa 15/tháng), chăm sóc kỹ thuật và bảo trì website Portal trong 12 tháng.</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">180M</div>
                                    </div>
                                </div>`;

if (content.includes(oldCalc)) {
    content = content.replace(oldCalc, newCalc);
    console.log('Split calculator checkboxes back.');
} else {
    console.log('ERROR: Could not find calculator checkboxes block.');
}

// --- 6. SPLIT PAGE 3 SPECS SECTION BACK ---
const oldSpecs = `                <div class="print-page-section"><div class="panel-card" id="p3-sec1">
                    <h3 style="text-transform: uppercase;">I. GÓI TỔNG THỂ: CHUẨN HÓA HỆ THỐNG THƯƠNG HIỆU &amp; VẬN HÀNH TRUYỀN THÔNG ĐỒNG HÀNH (800.000.000 VND)</h3>
                    <p>Giải pháp tổng thể tích hợp toàn bộ hai cấu phần cốt lõi: Chuẩn hóa hệ thống nhận diện hình ảnh thương hiệu (bảo vệ bằng lá chắn pháp lý SHTT) và Xây dựng quy trình tác nghiệp truyền thông số kèm dịch vụ biên tập vận hành đồng hành website trường 12 tháng.</p>
                    
                    <h4 style="margin-top: 1.5rem; color: var(--primary); font-size: 1.05rem;">Cấu phần A: Chuẩn hóa nhận diện thương hiệu &amp; Bảo hộ pháp lý SHTT (Trị giá: 500,000,000 VND)</h4>
                    <p style="font-size: 0.8rem; margin-bottom: 0.8rem;">Bao gồm nghiên cứu di sản thương hiệu, thiết lập quy chuẩn cẩm nang Brand Guidelines, thiết kế bộ ấn phẩm văn phòng và quà tặng, thiết kế giao diện website (Figma UI Kit), sản xuất Landing Page giới thiệu và đại diện đăng ký độc quyền nhãn hiệu HUCE tại Cục SHTT.</p>
                    
                    <div style="padding-left: 1rem; border-left: 3px solid var(--primary); margin-bottom: 1.5rem;">
                        <p style="font-size: 0.8rem; margin-bottom: 0.4rem;"><strong>Quy trình triển khai 4 giai đoạn:</strong></p>
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 1 (02 tuần):</strong> Nghiên cứu di sản, kiểm toán thương hiệu &amp; tinh chỉnh logo gốc.</p>
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 2 (03 tuần):</strong> Thiết kế nhận diện văn phòng, digital assets &amp; nộp đơn pháp lý bảo hộ nhãn hiệu.</p>
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 3 (03 tuần):</strong> Thiết kế UI/UX hệ thống website Portal/Admissions và khung quy chuẩn quà tặng.</p>
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 4 (02 tuần):</strong> Biên soạn Playbook, Media Kit, in ấn xuất bản cẩm nang lưu hành nội bộ &amp; nghiệm thu.</p>
                    </div>

                    <h4 style="color: var(--primary); font-size: 1.05rem; margin-top: 1.5rem;">Cấu phần B: Quy trình quản lý &amp; Dịch vụ vận hành website đồng hành 12 tháng (Trị giá: 300,000,000 VND)</h4>
                    <p style="font-size: 0.8rem; margin-bottom: 0.8rem;">Bao gồm tư vấn quy trình truyền thông SOPs (120,000,000 VND) nhằm chuyên nghiệp hóa công tác phối hợp tác nghiệp, tập huấn nhân sự, xây dựng kịch bản ứng phó khủng hoảng; và gói dịch vụ biên tập, chăm sóc kỹ thuật website Portal/Admissions (180,000,000 VND - 15 Triệu/tháng) đồng hành trong 12 tháng.</p>
                </div>`;

const newSpecs = `                <div class="print-page-section"><div class="panel-card" id="p3-sec1">
                    <h3 style="text-transform: uppercase;">GÓI 1: CHUẨN HÓA NHẬN DIỆN THƯƠNG HIỆU &amp; BẢO HỘ PHÁP LÝ SHTT (500.000.000 VND)</h3>
                    <p>Giải pháp tập trung chuẩn hóa hệ thống hình ảnh nhận diện thương hiệu, thiết kế quà tặng đồng bộ, thiết kế lại giao diện hệ thống website Portal/Admissions và nộp hồ sơ đăng ký bảo hộ độc quyền tên/logo HUCE tại Cục Sở hữu Trí tuệ làm "lá chắn pháp lý".</p>
                    
                    <h4 style="color: var(--primary); font-size: 1.05rem; margin-top: 1.2rem;">A. Triết lý Thiết kế và Định hướng Sáng tạo</h4>
                    <ul>
                        <li><strong>Logo Refinement (Tinh chỉnh Logo di sản):</strong> Khóa lưới hình học và độ dày nét của biểu trưng cẩu tháp - quyển sách để logo không bị nhòe vỡ khi thu nhỏ favicon 16x16px trên web/app hoặc khi hiển thị phóng lớn màn hình sự kiện. Giữ nguyên màu Cobalt Blue di sản.</li>
                        <li><strong>Hệ thống màu sắc (Color Palette):</strong> Đồng bộ hóa mã màu HSL Cobalt Blue chủ đạo, Gold và White nhũ khánh tiết. Chấm dứt tình trạng in lệch màu tại các khoa và ấn phẩm tự phát.</li>
                        <li><strong>Hệ thống lưới đồ họa (Graphic Grid System):</strong> Module hóa các họa tiết hoa văn kết cấu thép giàn không gian làm pattern ứng dụng.</li>
                    </ul>

                    <h4 style="color: var(--primary); font-size: 1.05rem; margin-top: 1.2rem;">B. Quy trình triển khai chuẩn hóa (4 Giai đoạn)</h4>
                    <div style="padding-left: 1rem; border-left: 3px solid var(--primary); margin-bottom: 1.5rem;">
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 1 (02 tuần):</strong> Khảo sát hiện trạng, kiểm toán thương hiệu &amp; tinh chỉnh logo gốc.</p>
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 2 (03 tuần):</strong> Thiết kế nhận diện văn phòng, digital assets &amp; nộp đơn pháp lý bảo hộ nhãn hiệu.</p>
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 3 (03 tuần):</strong> Thiết kế UI/UX hệ thống website Portal/Admissions và khung quy chuẩn quà tặng.</p>
                        <p style="font-size: 0.78rem; margin-bottom: 0.3rem;">• <strong>Giai đoạn 4 (02 tuần):</strong> Biên soạn Playbook, Media Kit, in ấn xuất bản cẩm nang lưu hành nội bộ &amp; nghiệm thu.</p>
                    </div>
                </div></div>

                <div class="print-page-section"><div class="panel-card" id="p3-sec2">
                    <h3 style="text-transform: uppercase;">GÓI 2: TƯ VẤN QUY TRÌNH QUẢN LÝ &amp; VẬN HÀNH WEBSITE ĐỒNG HÀNH (300.000.000 VND)</h3>
                    <p>Để đảm bảo hiệu quả tối đa cho hoạt động truyền thông và sự nhất quán lâu dài của nhà trường, ConsMedia đề xuất hai cấu phần tư vấn và vận hành đồng hành:</p>
                    
                    <h4 style="color: var(--primary); font-size: 1.05rem; margin-top: 1.2rem;">2.1. Cấu phần II.1: Tư vấn quy trình quản lý truyền thông và Nền tảng hoạt động chuẩn hóa (120,000,000 VND)</h4>
                    <ul>
                        <li><strong>Mục tiêu:</strong> Thiết lập quy chế phối hợp và quy trình phê duyệt tin bài bài bản, loại bỏ sự tự phát và nâng cao năng lực phản ứng nhanh của Ban truyền thông nhà trường.</li>
                        <li><strong>Chi tiết giải pháp:</strong> Biên soạn bộ quy trình tác nghiệp truyền thông chuẩn (SOPs) đa phòng ban, thiết lập lịch biên tập đa kênh, xây dựng kịch bản xử lý khủng hoảng truyền thông 30 phút, tổ chức 02 buổi tập huấn nâng cao năng lực cho cán bộ Đoàn/Trường.</li>
                    </ul>

                    <h4 style="color: var(--primary); font-size: 1.05rem; margin-top: 1.2rem;">2.2. Cấu phần II.2: Dịch vụ chăm sóc, cập nhật nội dung và Điều hành hệ thống website HUCE (180,000,000 VND - 12 tháng)</h4>
                    <ul>
                        <li><strong>Mục tiêu:</strong> Đảm bảo hệ thống website của trường luôn cập nhật tin tức kịp thời, sinh động, an toàn và tối ưu hóa SEO thường nhật.</li>
                        <li><strong>Chi tiết giải pháp:</strong> Bảo trì kỹ thuật máy chủ Portal/Admissions, cập nhật bảo mật SSL định kỳ, sao lưu hàng tuần. Biên tập nội dung, đăng tải tin tức hoạt động chuẩn SEO. Thiết kế đồ họa banner trang chủ thường nhật (tối đa 15 banner/tháng).</li>
                    </ul>
                </div>`;

if (content.includes(oldSpecs)) {
    content = content.replace(oldSpecs, newSpecs);
    console.log('Split Page 3 specs section back.');
} else {
    console.log('ERROR: Could not find Page 3 specs section block.');
}

// --- 7. UPDATE PAGE 3 ANCHOR BAR ---
const oldAnchor = `<a href="javascript:void(0)" onclick="scrollToSection('p3-sec1')" class="vault-btn">1. Đặc Tả Gói Tổng Thể (I)</a>`;
const newAnchor = `<a href="javascript:void(0)" onclick="scrollToSection('p3-sec1')" class="vault-btn">1. Đặc Tả Gói 1</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec2')" class="vault-btn">2. Đặc Tả Gói 2</a>`;

if (content.includes(oldAnchor)) {
    content = content.replace(oldAnchor, newAnchor);
    console.log('Updated Page 3 anchor bar.');
} else {
    console.log('ERROR: Could not find Page 3 anchor bar block.');
}

// --- 8. RESTRUCTURE STATIC TABLE ---
const oldTableBody = `                            <tbody>
                                <tr>
                                    <td colspan="6" style="background: rgba(0, 42, 92, 0.05); font-weight: 800; color:var(--text-light); text-transform: uppercase;">I. GÓI TỔNG THỂ: CHUẨN HÓA HỆ THỐNG THƯƠNG HIỆU &amp; VẬN HÀNH TRUYỀN THÔNG ĐỒNG HÀNH</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Nghiên cứu di sản và Tinh chỉnh hình học Logo gốc (Logo Refinement)</strong></td>
                                    <td>Tinh chỉnh lưới hình học biểu tượng gốc (tay nâng sách + hoa cách điệu X + cẩu tháp Â) và font chữ hành chính đi kèm. Giữ nguyên màu Cobalt Blue di sản. Thiết kế 04 phiên bản ứng dụng chuẩn (.Ai, .Eps, .Svg).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">30,000,000</td>
                                </tr>
                                <tr>
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
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>Thiết kế lại Giao diện hệ thống Website trường (Web UI/UX Redesign)</strong></td>
                                    <td>Thiết kế UI/UX hiện đại (bàn giao Figma UI Kit) cho trang chủ Portal trường, trang tuyển sinh, và khung giao diện (template) dùng chung cho website 13+ Khoa và Viện nghiên cứu. Tối ưu Responsive di động.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">90,000,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>Thiết kế Bộ nhận diện khuôn viên trường (Campus Branding)</strong></td>
                                    <td>Thiết kế hệ thống biển chỉ dẫn lối đi nội khu, biển tên phòng ban giảng đường G3, T1, bảng tin điện tử, phướn dọc trục đường trường, lá cờ biểu trưng HUCE.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">65,000,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>Thiết kế Bộ nhận diện Sự kiện và Lễ kỷ niệm (Event Branding)</strong></td>
                                    <td>Backdrop sân khấu chính Lễ mít tinh và Gala, Thẻ đeo đại biểu và thẻ BTC VIP (bao gồm bao da), Thiệp mời (giấy mỹ thuật ép kim và thiệp điện tử QR code).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">55,000,000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><strong>Thiết kế Khung Quy chuẩn Quà tặng Thương hiệu (Brand Gift Design Framework)</strong></td>
                                    <td>Thiết lập tiêu chuẩn và định hướng mỹ thuật quà tặng theo phân cấp đối tượng: 1. Quà tặng Lãnh đạo cao cấp (đối ngoại VIP, lễ khánh tiết); 2. Quà tặng theo chiến dịch chuyên biệt; 3. Quà tặng Khách hàng &amp; Cán bộ, giảng viên; 4. Quà tặng Sinh viên &amp; Ứng viên tuyển dụng. Bàn giao file thiết kế khung quy chuẩn định hướng định dạng PDF.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">50,000,000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><strong>Dịch vụ tư vấn pháp lý và Nộp đơn Đăng ký bảo hộ độc quyền nhãn hiệu (SHTT)</strong></td>
                                    <td>Đại diện thực hiện toàn bộ thủ tục pháp lý, chuẩn bị hồ sơ nộp đơn bảo hộ nhãn hiệu chữ "HUCE" và logo tinh chỉnh tại Cục Sở hữu Trí tuệ cho 4 nhóm ngành kinh tế cốt lõi (41, 16, 25, 35).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">30,000,000</td>
                                </tr>
                                <tr>
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
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td><strong>Tư vấn quy trình quản lý truyền thông và Nền tảng hoạt động chuẩn hóa</strong></td>
                                    <td>Xây dựng quy trình tác nghiệp truyền thông chuẩn (SOPs), thiết lập khung lịch biên tập nội dung, xây dựng quy chế và kịch bản phòng ngừa khủng hoảng truyền thông mạng xã hội, tập huấn kỹ năng viết bài và ảnh số cho cán bộ trường.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">120,000,000</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td><strong>Dịch vụ chăm sóc, cập nhật nội dung và Điều hành hệ thống website HUCE</strong></td>
                                    <td>Bảo trì kỹ thuật máy chủ, tối ưu tốc độ, cập nhật bảo mật SSL, sao lưu hàng tuần. Biên tập tin bài, văn bản, ảnh đăng website trường chuẩn SEO. Thiết kế đồ họa banner trang chủ thường nhật (tối đa 15 banner/tháng).</td>
                                    <td>12</td>
                                    <td>Tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">180,000,000</td>
                                </tr>
                                <tr style="background: rgba(0, 42, 92, 0.08);">
                                    <td colspan="5" style="text-align: right; font-weight: 900; font-size: 1.05rem; color:var(--text-light);">TỔNG CỘNG KINH PHÍ GÓI TỔNG THỂ CỐ ĐỊNH TRỌN GÓI (I)</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.15rem; text-shadow:none;">800,000,000</td>
                                </tr>
                            </tbody>`;

const newTableBody = `                            <tbody>
                                <tr>
                                    <td colspan="6" style="background: rgba(0, 42, 92, 0.05); font-weight: 800; color:var(--text-light); text-transform: uppercase;">I. GÓI 1: CHUẨN HÓA NHẬN DIỆN THƯƠNG HIỆU &amp; BẢO HỘ PHÁP LÝ SHTT</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Tinh chỉnh số hóa logo, thiết kế bộ cẩm nang thương hiệu</strong></td>
                                    <td>Tinh chỉnh hình học biểu tượng gốc (tay nâng sách, hoa cách điệu X, cẩu tháp), thiết lập quy cách chuẩn hóa thiết kế nhận diện thương hiệu HUCE, bảng màu Cobalt Blue di sản, kiểu chữ tiêu biểu (typography). Bàn giao file PDF tương tác.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">75,000,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>Thiết kế Bộ ấn phẩm văn phòng (Office Stationery - 10 hạng mục)</strong></td>
                                    <td>Danh thiếp, Letterhead (bản in &amp; file Word), Phong bì (A4, A5, DL), Folder tài liệu, Giấy mời sự kiện tiêu chuẩn, Bút viết, Túi giấy và Bộ slide PowerPoint thương hiệu HUCE (30 layout).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">45,000,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>Thiết kế Bộ tài sản truyền thông số (Digital Assets)</strong></td>
                                    <td>Thiết kế hệ thống 05 Social Media Grids templates (Facebook/Zalo), 03 mẫu chữ ký email chuẩn HTML, và 05 hình nền Zoom/Teams phục vụ họp trực tuyến và hội thảo quốc tế.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">35,000,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>Thiết kế lại Giao diện hệ thống Website trường (Web UI/UX Redesign)</strong></td>
                                    <td>Thiết kế UI/UX hiện đại (bàn giao Figma UI Kit) cho trang chủ Portal trường, trang tuyển sinh, và khung giao diện (template) dùng chung cho website 13+ Khoa và Viện nghiên cứu. Tối ưu Responsive di động.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">90,000,000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>Quy chuẩn Hệ thống nhận diện bảng biển chỉ dẫn &amp; thông tin toàn trường</strong></td>
                                    <td>Thiết kế hệ thống biển chỉ dẫn lối đi nội khu, biển tên phòng ban giảng đường G3, T1, bảng tin thông báo công cộng hành lang khoa/viện, phướn dọc đường trường, lá cờ biểu trưng HUCE.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">65,000,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>Thiết kế Khung Quy chuẩn Quà tặng Thương hiệu (Brand Gift Design Framework)</strong></td>
                                    <td>Thiết lập tiêu chuẩn và định hướng mỹ thuật quà tặng theo phân cấp đối tượng: Lãnh đạo cao cấp khánh tiết đối ngoại VIP, quà tặng khách hàng &amp; cán bộ/giảng viên hội thảo, quà tặng sinh viên diện rộng và quà theo chiến dịch.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">50,000,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>Dịch vụ tư vấn pháp lý &amp; Nộp đơn Đăng ký bảo hộ độc quyền nhãn hiệu (SHTT)</strong></td>
                                    <td>Đại diện thực hiện toàn bộ thủ tục pháp lý, chuẩn bị hồ sơ nộp đơn bảo hộ nhãn hiệu chữ "HUCE" và logo tinh chỉnh tại Cục Sở hữu Trí tuệ cho 4 nhóm ngành kinh tế cốt lõi (41, 16, 25, 35).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">30,000,000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><strong>Xây dựng Nền tảng Thư viện số &amp; Cổng thông tin Thương hiệu HUCE (Brand Portal)</strong></td>
                                    <td>Lập trình và thiết lập cổng thông tin Brand Portal trực tuyến lưu trữ tài nguyên thương hiệu tập trung: file PDF Guidelines, Playbook, tài nguyên số Digital Media Kit; phân quyền tải cho cán bộ và cơ quan báo chí.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">85,000,000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><strong>Biên soạn tổng hợp PlayBook - Media Kit và dịch vụ xuất bản in ấn tài liệu lưu hành</strong></td>
                                    <td>Đóng gói bộ tài nguyên truyền thông số (Digital Media Kit). Thiết kế và in ấn offset chất lượng cao 15 cuốn Brand Playbook (bao gồm quy trình SOPs, kịch bản khủng hoảng, cẩm nang tác nghiệp) bìa cứng ép nhũ lưu hành nội bộ.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">25,000,000</td>
                                </tr>
                                <tr style="background: rgba(0, 42, 92, 0.03); font-weight: 700;">
                                    <td colspan="5" style="text-align: right; color:var(--text-light);">TỔNG CỘNG KINH PHÍ GÓI 1 (CỐ ĐỊNH TRỌN GÓI)</td>
                                    <td style="font-weight: 700; color: var(--primary);">500,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="6" style="background: rgba(0, 42, 92, 0.05); font-weight: 800; color:var(--text-light); text-transform: uppercase;">II. GÓI 2: TƯ VẤN QUY TRÌNH QUẢN LÝ &amp; VẬN HÀNH WEBSITE ĐỒNG HÀNH</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Tư vấn quy trình quản lý truyền thông và Nền tảng hoạt động chuẩn hóa</strong></td>
                                    <td>Xây dựng quy trình tác nghiệp truyền thông chuẩn (SOPs), thiết lập khung lịch biên tập nội dung, xây dựng quy chế và kịch bản phòng ngừa khủng hoảng truyền thông mạng xã hội, tập huấn kỹ năng viết bài và ảnh số cho cán bộ trường.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">120,000,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>Dịch vụ chăm sóc, cập nhật nội dung và Điều hành hệ thống website HUCE</strong></td>
                                    <td>Bảo trì kỹ thuật máy chủ website Portal, tối ưu tốc độ, cập nhật bảo mật SSL, sao lưu hàng tuần. Biên tập tin bài, văn bản, ảnh đăng website trường chuẩn SEO. Thiết kế đồ họa banner trang chủ thường nhật (tối đa 15 banner/tháng).</td>
                                    <td>12</td>
                                    <td>Tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">180,000,000</td>
                                </tr>
                                <tr style="background: rgba(0, 42, 92, 0.03); font-weight: 700;">
                                    <td colspan="5" style="text-align: right; color:var(--text-light);">TỔNG CỘNG KINH PHÍ GÓI 2 (12 THÁNG)</td>
                                    <td style="font-weight: 700; color: var(--primary);">300,000,000</td>
                                </tr>
                                <tr style="background: rgba(0, 42, 92, 0.08);">
                                    <td colspan="5" style="text-align: right; font-weight: 900; font-size: 1.05rem; color:var(--text-light);">TỔNG CỘNG KINH PHÍ CỐ ĐỊNH TRỌN GÓI DỰ ÁN (GÓI 1 + GÓI 2)</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.15rem; text-shadow:none;">800,000,000</td>
                                </tr>
                            </tbody>`;

if (content.includes(oldTableBody)) {
    content = content.replace(oldTableBody, newTableBody);
    console.log('Restructured static pricing table.');
} else {
    console.log('ERROR: Could not find static pricing table tbody block.');
}

// --- 9. RESTRUCTURE GÓI 1 DELIVERABLES GRIDS (11 CARDS TO 9 CARDS) ---
const oldDeliverablesGrid = `<div id="del-g1-view" class="del-content-view active">
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
                                    <li><strong>Template website Khoa:</strong> Khung giao diện dùng chung dễ dàng chỉnh sửa nội dung và tích hợp cho website của 13+ Khoa và Viện nghiên cứu trực thuộc trường.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 6: Campus Branding <span>KHUÔN VIÊN</span></h5>
                                <p>Thiết kế nhận diện thương hiệu trong khuôn viên trường:</p>
                                <ul>
                                    <li><strong>Hệ thống biển hiệu:</strong> Thiết kế quy chuẩn biển tên phòng ban giảng đường G3, T1, chỉ dẫn lối đi nội khu.</li>
                                    <li><strong>Bảng tin điện tử:</strong> Mẫu hiển thị bảng thông tin công cộng đặt tại hành lang giảng đường.</li>
                                    <li><strong>Phướn &amp; Cờ:</strong> Thiết kế phướn dọc treo các dịp lễ hội và cờ hiệu biểu trưng HUCE.</li>
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
                                <h5>Phân nhóm 8: Brand Gift Design (Khung Quy chuẩn &amp; Định hướng) <span>QUÀ TẶNG</span></h5>
                                <p>Thiết lập khung tiêu chuẩn và định hướng mỹ thuật quà tặng phân cấp đối tượng:</p>
                                <ul>
                                    <li><strong>Quà tặng Lãnh đạo cao cấp:</strong> Thiết kế mẫu quà tặng lễ khánh tiết, đối ngoại VIP (sổ da dập chìm nhũ vàng, kỷ niệm chương pha lê cẩu tháp chế tác tinh xảo).</li>
                                    <li><strong>Quà tặng Khách hàng &amp; Cán bộ:</strong> Bộ quà tặng hội thảo, sự kiện thường niên (bút ký laser, bình giữ nhiệt, ô cầm tay Cobalt Blue).</li>
                                    <li><strong>Quà tặng Sinh viên &amp; Tuyển dụng:</strong> Các ấn phẩm quảng bá diện rộng (áo thun Polo cotton thêu logo trường, cốc sứ, túi vải canvas thân thiện môi trường).</li>
                                    <li><strong>Quà tặng theo Chiến dịch:</strong> Khung hướng dẫn thiết kế các ấn phẩm quà tặng chuyên biệt theo từng mốc kỷ niệm.</li>
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
                    </div>`;

const newDeliverablesGrid = `<div id="del-g1-view" class="del-content-view active">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Phân nhóm 1: Tinh chỉnh số hóa logo &amp; Cẩm nang thương hiệu (Guidelines) <span>LOGO &amp; MANUAL</span></h5>
                                <p>Tinh chỉnh lưới hình học và cẩm nang chuẩn nhận diện:</p>
                                <ul>
                                    <li><strong>Logo Refinement:</strong> Khóa tỷ lệ hình học Geometric grid biểu trưng gốc HUCE (tay nâng sách, hoa cách điệu X, cẩu tháp). Bàn giao 04 phiên bản (.Ai, .Eps, .Svg).</li>
                                    <li><strong>Brand Guidelines:</strong> Thiết lập cẩm nang quy cách thiết kế, tone of voice, bảng màu chuẩn Cobalt Blue di sản, typography, và quy định do's/don'ts. Bàn giao File PDF tương tác.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 2: Thiết kế Bộ ấn phẩm văn phòng (Office Stationery) <span>VĂN PHÒNG</span></h5>
                                <p>Bộ ấn phẩm văn phòng gồm 10 hạng mục chi tiết:</p>
                                <ul>
                                    <li><strong>10 hạng mục:</strong> Danh thiếp BGH, Letterhead (in offset &amp; file Word), Phong bì (A4, A5, DL), Folder tài liệu dập logo, Giấy mời sự kiện tiêu chuẩn, Bút viết, Túi giấy.</li>
                                    <li><strong>PowerPoint Template:</strong> Slide thuyết trình với 30 layouts chuyên nghiệp theo lưới đồ họa mới.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 3: Thiết kế Bộ tài sản truyền thông số (Digital Assets) <span>TÀI SẢN SỐ</span></h5>
                                <p>Bộ tài nguyên đồ họa số hóa tối ưu truyền thông:</p>
                                <ul>
                                    <li><strong>Social Media Grids:</strong> 05 templates (Photoshop/Figma) thiết kế chia lưới đồng bộ cho bài đăng Facebook/Zalo.</li>
                                    <li><strong>Email Signatures:</strong> 03 mẫu chữ ký thư điện tử HTML chuẩn hóa thông tin cá nhân và thương hiệu cho cán bộ.</li>
                                    <li><strong>Zoom/Teams Backgrounds:</strong> 05 hình nền ảo đồng bộ nhận diện thương hiệu phục vụ hội thảo trực tuyến và giảng dạy trực tuyến đồng bộ.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 4: Thiết kế lại Giao diện hệ thống Website trường (Web UI/UX Redesign) <span>WEBSITE</span></h5>
                                <p>Thiết kế UI/UX hiện đại cho hệ thống trang web:</p>
                                <ul>
                                    <li><strong>Figma UI Kit:</strong> Thiết kế giao diện trang Portal chính của trường, trang Tuyển sinh (Admissions).</li>
                                    <li><strong>Template website đơn vị:</strong> Khung giao diện dùng chung cho website của 13+ Khoa và Viện nghiên cứu trực thuộc.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 5: Quy chuẩn Hệ thống nhận diện bảng biển chỉ dẫn &amp; thông tin toàn trường <span>BẢNG BIỂN</span></h5>
                                <p>Thiết kế quy chuẩn hệ thống thông tin bảng biển:</p>
                                <ul>
                                    <li><strong>Biển chỉ dẫn nội khu:</strong> Thiết kế biển chỉ dẫn lối đi toàn trường, biển tên phòng ban giảng đường G3, T1.</li>
                                    <li><strong>Bảng tin &amp; Cờ hiệu:</strong> Thiết kế cờ hiệu biểu trưng HUCE, phướn dọc và bảng tin thông báo đặt tại hành lang các khoa.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 6: Thiết kế Khung Quy chuẩn Quà tặng Thương hiệu (Brand Gift Design Framework) <span>QUÀ TẶNG</span></h5>
                                <p>Thiết lập khung tiêu chuẩn và định hướng mỹ thuật quà tặng theo phân cấp đối tượng:</p>
                                <ul>
                                    <li><strong>Quà tặng VIP khánh tiết:</strong> Quà tặng đối ngoại cao cấp (sổ da dập chìm ép kim, bút ký laser, cúp pha lê cẩu tháp chế tác tinh xảo).</li>
                                    <li><strong>Quà tặng hội thảo &amp; Cán bộ:</strong> Ô cầm tay Cobalt Blue di sản, bình giữ nhiệt, cốc sứ lưu niệm.</li>
                                    <li><strong>Quà diện rộng:</strong> Áo thun polo thêu logo trường, túi vải canvas thân thiện môi trường cho sinh viên.</li>
                                    <li><strong>Quà chiến dịch:</strong> Khung quy định thiết kế quà tặng theo chiến dịch kỷ niệm.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 7: Sở hữu Trí tuệ (SHTT) <span>PHÁP LÝ</span></h5>
                                <p>Hồ sơ và thủ tục pháp lý đăng ký nhãn hiệu:</p>
                                <ul>
                                    <li><strong>Đăng ký độc quyền:</strong> Đại diện thực hiện toàn bộ thủ tục pháp lý, soạn hồ sơ nộp đơn đăng ký bảo hộ độc quyền nhãn hiệu chữ "HUCE" và logo tinh chỉnh tại Cục SHTT.</li>
                                    <li><strong>Nhóm bảo hộ:</strong> Đăng ký cho 04 nhóm ngành kinh tế cốt lõi (41 - giáo dục, 16 - ấn phẩm, 25 - thời trang/đồng phục, 35 - truyền thông sự kiện).</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 8: Nền tảng Thư viện số &amp; Cổng thông tin Thương hiệu HUCE (Brand Portal) <span>BRAND PORTAL</span></h5>
                                <p>Thiết lập trang thư viện lưu trữ tài nguyên thương hiệu số:</p>
                                <ul>
                                    <li><strong>Lưu trữ tập trung:</strong> Chứa PDF Guidelines, Playbook, kịch bản truyền thông và toàn bộ tài nguyên số Digital Media Kit.</li>
                                    <li><strong>Phân quyền truy cập:</strong> Tài khoản nội bộ cho giảng viên/sinh viên tải file gốc (.Ai, .Png, .Pdf) phục vụ công việc học tập; giao diện công khai cho báo chí tải logo chuẩn.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 9: Biên soạn tổng hợp PlayBook - Media Kit và dịch vụ xuất bản in ấn tài liệu lưu hành <span>PLAYBOOK &amp; MEDIA KIT</span></h5>
                                <p>Biên soạn tài liệu tác nghiệp và bộ tài nguyên số:</p>
                                <ul>
                                    <li><strong>Brand Playbook:</strong> Sổ tay nghiệp vụ truyền thông (SOPs), kịch bản khủng hoảng, quy cách khánh tiết. In ấn xuất bản 15 cuốn cao cấp bìa cứng ép nhũ lưu hành nội bộ.</li>
                                    <li><strong>Digital Media Kit:</strong> Bộ tài nguyên đồ họa chuẩn hóa đóng gói sẵn (files logo vector, fonts, templates) sẵn sàng chia sẻ cho các đối tác ngoài.</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

if (content.includes(oldDeliverablesGrid)) {
    content = content.replace(oldDeliverablesGrid, newDeliverablesGrid);
    console.log('Restructured deliverables card grid for Gói 1.');
} else {
    console.log('ERROR: Could not find deliverables card grid.');
}

// --- 10. UPDATE DELIVERABLES HUB TAB TEXT ---
content = content.replace(
    `<div class="del-tab" id="del-tab-g21" onclick="switchDeliverableTab('del-g21')">Cấu phần B.1: Quy trình truyền thông</div>`,
    `<div class="del-tab" id="del-tab-g21" onclick="switchDeliverableTab('del-g21')">Gói 2.1: Quy trình truyền thông</div>`
);
content = content.replace(
    `<div class="del-tab" id="del-tab-g22" onclick="switchDeliverableTab('del-g22')">Cấu phần B.2: Vận hành website</div>`,
    `<div class="del-tab" id="del-tab-g22" onclick="switchDeliverableTab('del-g22')">Gói 2.2: Vận hành website</div>`
);
console.log('Updated deliverables hub tab texts.');

// --- 11. INSERT EVENT BRANDING INTO TABLE 2 (MENU DỊCH VỤ LẺ) & RENUMBER ---
const oldTable2Row = `                                <tr>
                                     <td>1.5</td>
                                     <td><strong>Thiết kế Slide thuyết trình sự kiện lẻ</strong></td>
                                     <td>Thiết kế Slide PowerPoint giới thiệu sự kiện, báo cáo khoa học theo layout độc quyền. Tối thiểu book từ 15 slide trở lên.</td>
                                     <td>Slide</td>
                                     <td style="font-weight: 700; color: var(--primary);">350,000</td>
                                 </tr>`;

const newTable2Rows = `                                <tr>
                                     <td>1.5</td>
                                     <td><strong>Thiết kế Hệ thống nhận diện Sự kiện &amp; Lễ kỷ niệm trọn gói (Event Branding Kit)</strong></td>
                                     <td>Thiết kế quy chuẩn nhận diện sự kiện, bao gồm: backdrop sân khấu chính Lễ mít tinh và Gala, photo booth, standee đón khách, thẻ đeo ban tổ chức &amp; đại biểu VIP (kèm bao da), thiệp mời (thiết kế in giấy ép kim &amp; e-invite QR code) và túi đựng quà tặng khánh tiết.</td>
                                     <td>Sự kiện</td>
                                     <td style="font-weight: 700; color: var(--primary);">55,000,000</td>
                                 </tr>
                                 <tr>
                                     <td>1.6</td>
                                     <td><strong>Thiết kế Slide thuyết trình sự kiện lẻ</strong></td>
                                     <td>Thiết kế Slide PowerPoint giới thiệu sự kiện, báo cáo khoa học theo layout độc quyền. Tối thiểu book từ 15 slide trở lên.</td>
                                     <td>Slide</td>
                                     <td style="font-weight: 700; color: var(--primary);">350,000</td>
                                 </tr>`;

if (content.includes(oldTable2Row)) {
    content = content.replace(oldTable2Row, newTable2Rows);
    console.log('Inserted Event Branding and renumbered Table 2 Row.');
} else {
    console.log('ERROR: Could not find Table 2 Row 1.5 to replace.');
}

// --- 12. WRITE TO FILES ---
fs.writeFileSync(filePath, content, 'utf8');
fs.writeFileSync(copyPath, content, 'utf8');

console.log('index.html and huce_h60_proposal.html updated successfully!');
