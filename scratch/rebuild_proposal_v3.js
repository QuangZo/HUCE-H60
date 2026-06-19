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
    
    // -------------------------------------------------------------
    // Task 1: Navigation Menu - Remove redundant numbers in text
    // -------------------------------------------------------------
    const navOld = `<ul class="nav-list">
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
            
    const navNew = `<ul class="nav-list">
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
            
    if (html.includes(navOld)) {
        html = html.replace(navOld, navNew);
        console.log("- Nav menu text updated.");
    } else {
        // Try loose spacing search
        console.log("- Warning: Nav menu exact string not matched. Trying regex replace...");
        const navRegex = /<ul class="nav-list">[\s\S]*?<\/ul>/;
        html = html.replace(navRegex, navNew);
    }
    
    // -------------------------------------------------------------
    // Task 2: PDF Export list & Dropdown Options
    // -------------------------------------------------------------
    const printOld = `<ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0;">
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
            
    const printNew = `<ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0;">
                <li class="print-nav-item" onclick="openPrintPreview('page1')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    01. Đánh giá sơ bộ Sức khỏe thương hiệu HUCE
                </li>
                <li class="print-nav-item" onclick="openPrintPreview('page2')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    02. Đề xuất Hành động &amp; Lộ trình triển khai
                </li>
                <li class="print-nav-item" onclick="openPrintPreview('page3')">
                    <svg class="svg-icon" style="color: var(--primary);" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    03. Đề xuất Chào giá
                </li>
            </ul>`;
            
    if (html.includes(printOld)) {
        html = html.replace(printOld, printNew);
        console.log("- PDF export print list text updated.");
    } else {
        const printRegex = /<div class="section-title-small" style="margin-top: 1\.5rem;">🖨️ Xuất Bản PDF Khổ A4<\/div>\s*<ul style="list-style: none; padding: 0; margin: 0 0 1\.5rem 0;">[\s\S]*?<\/ul>/;
        html = html.replace(printRegex, `<div class="section-title-small" style="margin-top: 1.5rem;">🖨️ Xuất Bản PDF Khổ A4</div>\n` + printNew);
    }
    
    // Dropdown options
    html = html.replace(
        '<option value="page1">01. Báo cáo 01: Đánh giá Sức khỏe Thương hiệu &amp; Cảnh báo Bảo hộ Pháp lý HUCE</option>',
        '<option value="page1">01. Đánh giá sơ bộ Sức khỏe thương hiệu HUCE</option>'
    );
    html = html.replace(
        '<option value="page2">02. Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông</option>',
        '<option value="page2">02. Đề xuất Hành động &amp; Lộ trình triển khai</option>'
    );
    html = html.replace(
        '<option value="page3">03. Báo cáo 03: Đề xuất Giải pháp &amp; Bảng báo giá Chi tiết Hệ thống Thương hiệu</option>',
        '<option value="page3">03. Đề xuất Chào giá</option>'
    );
    console.log("- Print selector options updated.");

    // -------------------------------------------------------------
    // Task 3: Status Tag to Live Clock
    // -------------------------------------------------------------
    const statusOld = '<span class="status-tag">Đề Xuất Thương Hiệu HUCE</span>';
    const clockNew = `<div style="text-align: right; font-family: 'Plus Jakarta Sans', sans-serif;">
                        <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary);">Hà Nội | Ngày <span id="current-date">--/--/----</span></div>
                        <div style="font-size: 0.75rem; color: #16a34a; font-weight: 800; margin-top: 2px;" id="live-clock">--:--:--</div>
                    </div>`;
    
    if (html.includes(statusOld)) {
        html = html.replace(statusOld, clockNew);
        console.log("- Status tag replaced with Clock layout.");
    }
    
    // -------------------------------------------------------------
    // Task 4: Remove Overview (Page 0) bottom redundant cards
    // -------------------------------------------------------------
    // Find p0 content
    const p0Start = html.indexOf('<div id="page0-content" class="tab-view active">');
    const p1Start = html.indexOf('<!-- --------------------------------------------------------------- -->\n            <!-- PAGE 1:');
    
    if (p0Start !== -1 && p1Start !== -1) {
        const p0Text = html.substring(p0Start, p1Start);
        // Find the index of the INTEGRATED BRAND REPORTS VAULT panel card
        const vaultCardIdx = p0Text.indexOf('<div class="panel-card" style="margin-top: 1.5rem; border: 1px solid rgba(0, 42, 92, 0.15);');
        if (vaultCardIdx !== -1) {
            const cleanP0Text = p0Text.substring(0, vaultCardIdx).trim() + '\n            </div>\n            ';
            html = html.substring(0, p0Start) + cleanP0Text + html.substring(p1Start);
            console.log("- Redundant bottom panel cards on Page 0 removed successfully.");
        } else {
            console.log("- Warning: Page 0 vault card start marker not found.");
        }
    }
    
    // -------------------------------------------------------------
    // Task 5: Extract sections from Page 2 and Page 3
    // -------------------------------------------------------------
    const p2StartIdx = html.indexOf('<div id="page2-content" class="tab-view">');
    const p2EndIdx = html.indexOf('<div id="page3-content" class="tab-view">');
    
    if (p2StartIdx === -1 || p2EndIdx === -1) {
        console.log("- Error: Page 2 boundaries not found. Skipping Page 2 restructuring.");
        return;
    }
    
    const p2Text = html.substring(p2StartIdx, p2EndIdx);
    
    const offsets = {
        mou: p2Text.indexOf('<h3 id="p2-sec1">'),
        roadmap: p2Text.indexOf('<h3 id="p2-sec2">'),
        raci: p2Text.indexOf('<h3 id="p2-sec3">'),
        quytrinh: p2Text.indexOf('<h3 id="p2-sec4">'),
        khunghoang: p2Text.indexOf('<h3 id="p2-sec5">'),
        conclusion: p2Text.indexOf('<h3 id="p2-sec6">')
    };
    
    function getStartOfPanel(offset) {
        let printSecIdx = p2Text.lastIndexOf('<div class="print-page-section">', offset);
        let panelCardIdx = p2Text.lastIndexOf('<div class="panel-card">', offset);
        let panelCardWithAttrsIdx = p2Text.lastIndexOf('<div class="panel-card"', offset);
        
        let candidates = [printSecIdx, panelCardIdx, panelCardWithAttrsIdx].filter(x => x !== -1 && x <= offset);
        return Math.max(...candidates);
    }
    
    const mouStart = getStartOfPanel(offsets.mou);
    const roadmapStart = getStartOfPanel(offsets.roadmap);
    const raciStart = offsets.raci;
    const quytrinhStart = getStartOfPanel(offsets.quytrinh);
    const khunghoangStart = getStartOfPanel(offsets.khunghoang);
    const conclusionStart = getStartOfPanel(offsets.conclusion);
    
    const mouHTML = p2Text.substring(mouStart, roadmapStart).trim();
    const roadmapHTML = p2Text.substring(roadmapStart, raciStart).trim();
    const raciHTML = p2Text.substring(raciStart, quytrinhStart).trim();
    const quytrinhHTML = p2Text.substring(quytrinhStart, khunghoangStart).trim();
    const khunghoangHTML = p2Text.substring(khunghoangStart, conclusionStart).trim();
    const conclusionHTML = p2Text.substring(conclusionStart, p2Text.lastIndexOf('</div>')).trim();
    
    console.log("- Extracted all Page 2 blocks successfully.");
    
    // Extract ROI block from Page 3
    const p3StartIdx = html.indexOf('<div id="page3-content" class="tab-view">');
    const p3EndIdx = html.indexOf('<!-- =================================================================== -->\n    <!-- MODAL OVERLAY FOR ZOOMING EVIDENCE IMAGES');
    
    if (p3StartIdx === -1 || p3EndIdx === -1) {
        console.log("- Error: Page 3 boundaries not found. Skipping ROI extraction.");
        return;
    }
    
    const p3Text = html.substring(p3StartIdx, p3EndIdx);
    const roiStartIdxInP3 = p3Text.indexOf('<div class="panel-card" id="p3-sec8"');
    
    if (roiStartIdxInP3 === -1) {
        console.log("- Error: ROI section (p3-sec8) not found on Page 3.");
        return;
    }
    
    // ROI HTML starts from the ROI div to the end of page3-content (which ends before the main-workspace-content close)
    const roiHTML = p3Text.substring(roiStartIdxInP3, p3Text.lastIndexOf('</div>')).trim();
    console.log("- ROI Block extracted successfully. Length:", roiHTML.length);
    
    // -------------------------------------------------------------
    // Task 6: Recompose Page 2 Content
    // -------------------------------------------------------------
    // Extract the timeline-roadmap-dynamic from roadmapHTML
    const timelineStartMarker = '<div class="timeline-roadmap-dynamic">';
    const timelineEndMarker = '</div>';
    const tStart = roadmapHTML.indexOf(timelineStartMarker);
    const tEnd = roadmapHTML.lastIndexOf(timelineEndMarker);
    const timelineHTML = roadmapHTML.substring(tStart, tEnd + timelineEndMarker.length);
    
    // Rebuild MOU block: Change header to "3.1. Khung hợp tác chiến lược..."
    let mouBlockRebuilt = mouHTML.replace(
        '<h3 id="p2-sec1">1. KHUNG HỢP TÁC CHIẾN LƯỢC HUCE - CONSMEDIA (DỰA TRÊN MOU 2025)</h3>',
        '<h3>3.1. Khung hợp tác chiến lược HUCE - ConsMedia (MOU 2025)</h3>'
    );
    // Remove print-page-section wrapper if any
    mouBlockRebuilt = mouBlockRebuilt.replace('<div class="print-page-section">', '');
    
    // Rebuild Quy trinh block: Change header to "3.2. Quy trình phối hợp tác nghiệp &amp; phê duyệt"
    let quytrinhBlockRebuilt = quytrinhHTML.replace(
        '<h3 id="p2-sec4">4. QUY TRÌNH PHỐI HỢP TÁC NGHIỆP và DUYỆT NỘI DUNG</h3>',
        '<h3 id="p2-sec3">3.2. Quy trình phối hợp tác nghiệp và duyệt nội dung</h3>'
    );
    quytrinhBlockRebuilt = quytrinhBlockRebuilt.replace('<div class="print-page-section">', '');
    if (quytrinhBlockRebuilt.endsWith('</div>')) {
        quytrinhBlockRebuilt = quytrinhBlockRebuilt.substring(0, quytrinhBlockRebuilt.lastIndexOf('</div>')).trim();
    }
    
    // Rebuild RACI block: Change header to "3.3. Ma trận phân định trách nhiệm phối hợp (RACI) chi tiết"
    let raciBlockRebuilt = raciHTML.replace(
        '<h3 id="p2-sec3">3. Ma trận phân định trách nhiệm phối hợp (RACI) chi tiết</h3>',
        '<h3 style="margin-top: 0;">3.3. Ma trận phân định trách nhiệm phối hợp (RACI) chi tiết</h3>'
    );
    if (raciBlockRebuilt.endsWith('</div>')) {
        raciBlockRebuilt = raciBlockRebuilt.substring(0, raciBlockRebuilt.lastIndexOf('</div>')).trim();
    }
    if (raciBlockRebuilt.endsWith('</div>')) {
        raciBlockRebuilt = raciBlockRebuilt.substring(0, raciBlockRebuilt.lastIndexOf('</div>')).trim();
    }
    
    // Rebuild Khung Hoang block: Change header to "4. CƠ CHẾ PHÒNG NGỪA &amp; XỬ LÝ KHỦNG HOẢNG TRUYỀN THÔNG (QUY TẮC 30 PHÚT)"
    let khunghoangBlockRebuilt = khunghoangHTML.replace(
        '<h3 id="p2-sec5">5. CO CHẾ ỨNG PHÓ VÀ XỬ LÝ KHỦNG HOẢNG TRUYỀN THÔNG 30 PHÚT</h3>',
        '<h3 id="p2-sec4">4. CƠ CHẾ PHÒNG NGỪA &amp; XỬ LÝ KHỦNG HOẢNG TRUYỀN THÔNG (QUY TẮC 30 PHÚT)</h3>'
    );
    // Wait, check if there's any typo in CO CHẾ (we saw CO CHẾ in our regex matcher)
    khunghoangBlockRebuilt = khunghoangBlockRebuilt.replace(
        /<h3[^>]*id="p2-sec5"[^>]*>[\s\S]*?<\/h3>/i,
        '<h3 id="p2-sec4">4. CƠ CHẾ PHÒNG NGỪA &amp; XỬ LÝ KHỦNG HOẢNG TRUYỀN THÔNG (QUY TẮC 30 PHÚT)</h3>'
    );

    // Rebuild ROI block: Change header to "5. BẢN PHÂN TÍCH HIỆU QUẢ ĐẦU TƯ ván GIÁ TRỊ THU LẠI DỰ KIẾN (ROI &amp; SYSTEM EFFICIENCY)"
    let roiBlockRebuilt = roiHTML.replace(
        /<h3[^>]*>[\s\S]*?<\/h3>/i,
        '<h3 id="p2-sec5" style="color: var(--green-light); display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.3rem;"><svg class="svg-icon" viewBox="0 0 24 24"><path d="M5 19.29V5h2v14.29H5zm4-6V5h2v8.29H9zm4 6V5h2v14.29h-2zm4-10V5h2v8.29h-2z"/></svg></span> 5. BẢN PHÂN TÍCH HIỆU QUẢ ĐẦU TƯ và GIÁ TRỊ THU LẠI DỰ KIẾN (ROI &amp; SYSTEM EFFICIENCY)</h3>'
    );
    roiBlockRebuilt = roiBlockRebuilt.replace('id="p3-sec8"', 'id="p2-sec5-card"');
    
    // Rebuild Conclusion block: Change header to "6. KẾT LUẬN &amp; HÀNH ĐỘNG NGAY (IMMEDIATE ACTIONS)"
    let conclusionBlockRebuilt = conclusionHTML.replace(
        '<h3 id="p2-sec6">6. KẾT LUẬN ván DỰ XUẤT HÀNH DỰNG NGAY (IMMEDIATE ACTIONS)</h3>',
        '<h3 id="p2-sec6">6. KẾT LUẬN và ĐỀ XUẤT HÀNH ĐỘNG NGAY (IMMEDIATE ACTIONS)</h3>'
    );
    conclusionBlockRebuilt = conclusionBlockRebuilt.replace(
        /<h3[^>]*id="p2-sec6"[^>]*>[\s\S]*?<\/h3>/i,
        '<h3 id="p2-sec6">6. KẾT LUẬN và ĐỀ XUẤT HÀNH ĐỘNG NGAY (IMMEDIATE ACTIONS)</h3>'
    );

    const newPage2HTML = `<div id="page2-content" class="tab-view">
                <!-- Anchor Bar -->
                <div class="document-vault-bar" style="margin-bottom: 1.5rem;">
                    <span>🔗 CUỘN NHANH ĐẾN PHẦN:</span>
                    <a href="javascript:void(0)" onclick="scrollToSection('p2-sec1')" class="vault-btn">1. Ba Trụ Cột</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p2-sec2')" class="vault-btn">2. Lộ Trình 6 Giai Đoạn</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p2-sec3')" class="vault-btn">3. Quy Trình &amp; RACI</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p2-sec4')" class="vault-btn">4. Xử Lý Khủng Hoảng</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p2-sec5')" class="vault-btn">5. Phân Tích ROI</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p2-sec6')" class="vault-btn">6. Hành Động Ngay</a>
                </div>

                <!-- SECTION 1: BA TRỤ CỘT HÀNH ĐỘNG TRỌNG TÂM -->
                <div class="print-page-section"><div class="panel-card" id="p2-sec1">
                    <h3 style="text-transform: uppercase; color: var(--primary);">1. BA TRỤ CỘT HÀNH ĐỘNG TRỌNG TÂM THƯƠNG HIỆU HUCE</h3>
                    <p style="margin-bottom: 1.5rem;">Để giải quyết triệt để các vấn đề của HUCE, ConsMedia đề xuất lộ trình hành động tập trung vào 3 trụ cột cốt lõi dưới đây:</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin: 1.5rem 0;">
                        <!-- Pillar 1 -->
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.08); background: rgba(0, 42, 92, 0.02); padding: 1.5rem; border-radius: 12px; transition: var(--transition);">
                            <div style="color: var(--primary); font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem;">TRỤ CỘT 1</div>
                            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 0.6rem;">Chuẩn hóa Nhận diện &amp; Bảo hộ SHTT</h4>
                            <p style="font-size: 0.8rem; line-height: 1.5; color: var(--text-muted);">Xây dựng hệ thống hình ảnh đồng bộ chuyên nghiệp và thiết lập "lá chắn pháp lý" bảo vệ tài sản trí tuệ của nhà trường.</p>
                            <ul style="font-size: 0.75rem; color: #475569; padding-left: 1.1rem; margin-top: 0.8rem; line-height: 1.4;">
                                <li style="margin-bottom: 0.4rem;">Tinh chỉnh lưới hình học logo HUCE, định vị mã màu chuẩn Cobalt Blue.</li>
                                <li style="margin-bottom: 0.4rem;">Thiết kế bộ văn phòng, tài sản truyền thông số và hệ thống quà tặng thương hiệu.</li>
                                <li style="margin-bottom: 0.4rem;">Đại diện nộp đơn bảo hộ nhãn hiệu "HUCE" và logo mới tại Cục Sở hữu Trí tuệ.</li>
                            </ul>
                        </div>
                        
                        <!-- Pillar 2 -->
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.08); background: rgba(0, 42, 92, 0.02); padding: 1.5rem; border-radius: 12px; transition: var(--transition);">
                            <div style="color: var(--primary); font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem;">TRỤ CỘT 2</div>
                            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 0.6rem;">Quy trình quản lý &amp; Vận hành website</h4>
                            <p style="font-size: 0.8rem; line-height: 1.5; color: var(--text-muted);">Thiết lập quy trình làm việc chuẩn hóa, tăng tốc độ xuất bản thông tin và bảo trì website Portal an toàn.</p>
                            <ul style="font-size: 0.75rem; color: #475569; padding-left: 1.1rem; margin-top: 0.8rem; line-height: 1.4;">
                                <li style="margin-bottom: 0.4rem;">Biên soạn bộ quy trình tác nghiệp truyền thông chuẩn (SOPs).</li>
                                <li style="margin-bottom: 0.4rem;">Thiết lập khung lịch biên tập nội dung đa kênh tổng thể.</li>
                                <li style="margin-bottom: 0.4rem;">Đồng hành chăm sóc, bảo trì kỹ thuật và biên tập website trong 12 tháng.</li>
                            </ul>
                        </div>
                        
                        <!-- Pillar 3 -->
                        <div class="objective-card" style="border: 1px solid rgba(0, 42, 92, 0.08); background: rgba(0, 42, 92, 0.02); padding: 1.5rem; border-radius: 12px; transition: var(--transition);">
                            <div style="color: var(--primary); font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem;">TRỤ CỘT 3</div>
                            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 0.6rem;">Truyền thông sự kiện gia tăng</h4>
                            <p style="font-size: 0.8rem; line-height: 1.5; color: var(--text-muted);">Đáp ứng các nhu cầu truyền thông sự kiện on-demand linh hoạt theo ngày lễ khánh tiết của trường.</p>
                            <ul style="font-size: 0.75rem; color: #475569; padding-left: 1.1rem; margin-top: 0.8rem; line-height: 1.4;">
                                <li style="margin-bottom: 0.4rem;">Sản xuất tin bài PR, chụp hình sự kiện lấy nhanh.</li>
                                <li style="margin-bottom: 0.4rem;">Dịch vụ livestream chuyên nghiệp đa góc máy 4K.</li>
                                <li style="margin-bottom: 0.4rem;">Cung cấp nhân sự sự kiện: Tổng đạo diễn, MC khánh tiết, lễ tân.</li>
                            </ul>
                        </div>
                    </div>
                </div></div>

                <!-- SECTION 2: LỘ TRÌNH TRIỂN KHAI DỰ ÁN TỔNG THỂ (6 GIAI ĐOẠN) -->
                <div class="print-page-section"><div class="panel-card" id="p2-sec2">
                    <h3 style="text-transform: uppercase; color: var(--primary);">2. LỘ TRÌNH TRIỂN KHAI DỰ ÁN TỔNG THỂ (6 GIAI ĐOẠN)</h3>
                    <p>Dựa trên định hướng chuẩn hóa thương hiệu của Hiệu trưởng PGS.TS. Hoàng Tùng, lộ trình triển khai các hạng mục thương hiệu và truyền thông của HUCE được chia làm <strong>6 giai đoạn hành động</strong> cụ thể như sau:</p>
                    ${timelineHTML}
                </div></div>

                <!-- SECTION 3: QUY TRÌNH PHỐI HỢP TÁC NGHIỆP &amp; PHÊ DUYỆT -->
                <div class="print-page-section" id="p2-sec3">
                    <!-- 3.1. MOU -->
                    ${mouBlockRebuilt}
                    
                    <!-- 3.2. Quy trình -->
                    <div class="panel-card" style="margin-top: 1.5rem;">
                        ${quytrinhBlockRebuilt}
                    </div>
                    
                    <!-- 3.3. RACI -->
                    <div class="panel-card" style="margin-top: 1.5rem;">
                        ${raciBlockRebuilt}
                    </div>
                </div>

                <!-- SECTION 4: CƠ CHẾ PHÒNG NGỪA &amp; XỬ LÝ KHỦNG HOẢNG TRUYỀN THÔNG -->
                <div class="print-page-section">
                    ${khunghoangBlockRebuilt}
                </div>

                <!-- SECTION 5: PHÂN TÍCH ROI -->
                <div class="print-page-section">
                    ${roiBlockRebuilt}
                </div>

                <!-- SECTION 6: KẾT LUẬN &amp; HÀNH ĐỘNG NGAY -->
                <div class="print-page-section">
                    ${conclusionBlockRebuilt}
                </div>
            </div>`;

    // Replace the old Page 2 text with new reconstructed Page 2 text in HTML
    html = html.substring(0, p2StartIdx) + newPage2HTML + html.substring(p2EndIdx);
    console.log("- Page 2 content successfully restructured and recomposed.");

    // -------------------------------------------------------------
    // Task 7: Recompose Page 3 Content (Remove ROI and correct numbering)
    // -------------------------------------------------------------
    // Re-locate boundaries because offsets changed
    const p3StartIdxNew = html.indexOf('<div id="page3-content" class="tab-view">');
    const p3EndIdxNew = html.indexOf('<!-- =================================================================== -->\n    <!-- MODAL OVERLAY FOR ZOOMING EVIDENCE IMAGES');
    
    if (p3StartIdxNew === -1 || p3EndIdxNew === -1) {
        console.log("- Error: Relocating Page 3 boundaries failed.");
        return;
    }
    
    let p3TextNew = html.substring(p3StartIdxNew, p3EndIdxNew);
    const roiIdxInP3New = p3TextNew.indexOf('<div class="panel-card" id="p3-sec8"');
    
    if (roiIdxInP3New !== -1) {
        // Cut the ROI section out
        p3TextNew = p3TextNew.substring(0, roiIdxInP3New).trim() + '\n            </div>'; // Close page3-content div
        console.log("- ROI section removed from Page 3.");
    }
    
    // Renumber headings and update anchor bar in p3TextNew
    const p3AnchorOld = `<div class="document-vault-bar" style="margin-bottom: 1.5rem;">
                    <span>🔗 CUỘN NHANH ĐẾN PHẦN:</span>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec1')" class="vault-btn">1. Đặc Tả Gói 1</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec2')" class="vault-btn">2. Đặc Tả Gói 2</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec3')" class="vault-btn">3. Bảng Giá Trọn Gói</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec4')" class="vault-btn">4. Bộ Tính Dự Toán</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec5')" class="vault-btn">5. Deliverables Hub</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec6')" class="vault-btn">6. Menu Dịch Vụ Lẻ</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec7')" class="vault-btn">7. Chi Phí Duy Trì sau 2026</a>
                </div>`;
                
    const p3AnchorNew = `<div class="document-vault-bar" style="margin-bottom: 1.5rem;">
                    <span>🔗 CUỘN NHANH ĐẾN PHẦN:</span>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec1')" class="vault-btn">1. Đặc Tả Gói 1</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec2')" class="vault-btn">2. Đặc Tả Gói 2</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec3')" class="vault-btn">3. Bảng Giá Trọn Gói</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec5')" class="vault-btn">4. Deliverables Hub</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec6')" class="vault-btn">5. Menu Dịch Vụ Lẻ</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec7')" class="vault-btn">6. Chiến Lược Đồng Hành</a>
                </div>`;
                
    p3TextNew = p3TextNew.replace(p3AnchorOld, p3AnchorNew);
    
    // Renumberheadings inside the content
    p3TextNew = p3TextNew.replace(
        '<h3 id="p3-sec5">5. DANH MỤC TRA CỨU SẢN PHẨM BÀN GIAO CHI TIẾT (DELIVERABLES HUB)</h3>',
        '<h3 id="p3-sec5">4. DANH MỤC TRA CỨU SẢN PHẨM BÀN GIAO CHI TIẾT (DELIVERABLES HUB)</h3>'
    );
    p3TextNew = p3TextNew.replace(
        '<h3 id="p3-sec6">6. MENU BÁO GIÁ DỊCH VỤ LẺ TRUYỀN THÔNG (ON-DEMAND / BOOK-BY-EVENT)</h3>',
        '<h3 id="p3-sec6">5. MENU BÁO GIÁ DỊCH VỤ LẺ TRUYỀN THÔNG (ON-DEMAND / BOOK-BY-EVENT)</h3>'
    );
    p3TextNew = p3TextNew.replace(
        '<h3 id="p3-sec7">7. CHIẾN LƯỢC ĐỒNG HÀNH VÀ PHƯƠNG ÁN BẢO TRÌ WEBSITE THEO CÁC GIAI ĐOẠN</h3>',
        '<h3 id="p3-sec7">6. CHIẾN LƯỢC ĐỒNG HÀNH VÀ PHƯƠNG ÁN BẢO TRÌ WEBSITE THEO CÁC GIAI ĐOẠN</h3>'
    );
    
    html = html.substring(0, p3StartIdxNew) + p3TextNew + html.substring(p3EndIdxNew);
    console.log("- Page 3 content successfully restructured (ROI removed and numbering corrected).");

    // -------------------------------------------------------------
    // Task 8: Insert Live Clock JavaScript logic
    // -------------------------------------------------------------
    const jsOld = `        // Execute swipe gesture initializer immediately
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSwipeGestures);
        } else {
            initSwipeGestures();
        }`;
        
    const jsNew = `        // Execute swipe gesture initializer immediately
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initSwipeGestures();
                updateLiveClock();
            });
        } else {
            initSwipeGestures();
            updateLiveClock();
        }

        // Real-time clock update logic
        function updateLiveClock() {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            const dateEl = document.getElementById('current-date');
            if (dateEl) dateEl.innerText = \`\${day}/\${month}/\${year}\`;
            
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const clockEl = document.getElementById('live-clock');
            if (clockEl) clockEl.innerText = \`\${hours}:\${minutes}:\${seconds}\`;
        }
        setInterval(updateLiveClock, 1000);`;
        
    if (html.includes(jsOld)) {
        html = html.replace(jsOld, jsNew);
        console.log("- Live Clock script added successfully.");
    }
    
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`=== SUCCESSFULLY UPDATED ${file} ===`);
});
