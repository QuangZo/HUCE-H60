const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(filename => {
    const filePath = path.join(__dirname, '..', filename);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filename}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    // --- 1. UPDATE PRINT PREVIEW CSS TO LANDSCAPE & BORDERLESS ---
    const oldCSSStart = '/* PRINT PREVIEW OVERLAY */';
    const oldCSSEnd = '</style>\n</head>';
    const startCSSIdx = content.indexOf(oldCSSStart);
    const endCSSIdx = content.indexOf(oldCSSEnd);

    if (startCSSIdx !== -1 && endCSSIdx !== -1) {
        const newCSS = `/* PRINT PREVIEW OVERLAY */
        #print-preview-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #0f172a;
            z-index: 10000;
            overflow-y: auto;
            color: #0f172a;
        }
        .print-control-panel {
            background: #002a5c;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 10002;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        #print-preview-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
            background: #1e293b;
            min-height: calc(100vh - 54px);
            gap: 20px;
        }
        .a4-page-print {
            width: 297mm;
            height: 210mm;
            background: #ffffff;
            padding: 10mm 15mm;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
            position: relative;
            page-break-after: always;
            page-break-inside: avoid;
            overflow: hidden;
        }
        
        .print-nav-item {
            padding: 0.6rem 0.8rem;
            margin: 2px 0;
            border-radius: 8px;
            font-size: 0.78rem;
            color: var(--text-light);
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .print-nav-item:hover {
            background: #f1f5f9;
            color: var(--primary);
        }

        /* Screen Preview Overrides to strip borders and boxed styling */
        #print-preview-container .panel-card,
        #print-preview-container .brand-health-dashboard,
        #print-preview-container .bh-metrics-section,
        #print-preview-container .info-callout {
            border: none !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0.3rem 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
        }
        #print-preview-container .panel-card::after {
            display: none !important;
        }
        #print-preview-container .panel-card h3 {
            margin-top: 0 !important;
            padding-bottom: 2px !important;
            margin-bottom: 4px !important;
            font-size: 0.95rem !important;
        }
        #print-preview-container .collapsible-content {
            max-height: none !important;
            display: block !important;
            padding: 0.3rem 0 !important;
            opacity: 1 !important;
            overflow: visible !important;
            border: none !important;
            background: transparent !important;
        }
        #print-preview-container button, 
        #print-preview-container .vault-btn,
        #print-preview-container .collapsible-btn,
        #print-preview-container .btn-main {
            display: none !important;
        }
        #print-preview-container .document-vault-bar {
            display: none !important;
        }

        /* Print media styles */
        @media print {
            @page {
                size: A4 landscape;
                margin: 0;
            }
            body * {
                display: none !important;
            }
            #print-preview-overlay, #print-preview-overlay * {
                display: block !important;
            }
            #print-preview-overlay {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                height: auto !important;
                background: #ffffff !important;
                overflow: visible !important;
                color: #000000 !important;
            }
            .print-control-panel {
                display: none !important;
            }
            #print-preview-container {
                padding: 0 !important;
                background: #ffffff !important;
                min-height: auto !important;
                display: block !important;
            }
            .a4-page-print {
                width: 297mm !important;
                height: 210mm !important;
                padding: 10mm 15mm !important;
                box-shadow: none !important;
                border-radius: 0 !important;
                margin-bottom: 0 !important;
                page-break-after: always !important;
                page-break-inside: avoid !important;
                box-sizing: border-box !important;
                background: #ffffff !important;
                color: #000000 !important;
            }
            .page-break {
                page-break-before: always !important;
            }
            
            .a4-page-print .panel-card,
            .a4-page-print .brand-health-dashboard,
            .a4-page-print .bh-metrics-section,
            .a4-page-print .info-callout {
                border: none !important;
                background: transparent !important;
                padding: 0 !important;
                margin: 0.3rem 0 !important;
                box-shadow: none !important;
                border-radius: 0 !important;
            }
            .a4-page-print .panel-card::after {
                display: none !important;
            }
            .a4-page-print .panel-card h3 {
                margin-top: 0 !important;
                padding-bottom: 2px !important;
                margin-bottom: 4px !important;
                font-size: 0.95rem !important;
            }
            .a4-page-print .collapsible-content {
                max-height: none !important;
                display: block !important;
                padding: 0.3rem 0 !important;
                opacity: 1 !important;
                overflow: visible !important;
                border: none !important;
                background: transparent !important;
            }
            .a4-page-print button, 
            .a4-page-print .vault-btn,
            .a4-page-print .collapsible-btn,
            .a4-page-print .btn-main {
                display: none !important;
            }
        }
        `;
        content = content.substring(0, startCSSIdx) + newCSS + content.substring(endCSSIdx);
        console.log(`Updated Print CSS in ${filename}`);
    } else {
        console.log(`Warning: Could not find old print CSS block in ${filename}`);
    }

    // --- 2. UPDATE JAVASCRIPT PRINT PREVIEW TO DYNAMIC CHUNKING ---
    const oldJSStart = '/* PRINT PREVIEW LOGIC */';
    const oldJSEnd = '// Scroll Workspace directly to a specific anchor tag ID';
    const startJSIdx = content.indexOf(oldJSStart);
    const endJSIdx = content.indexOf(oldJSStart); // wait, let's use indexOf or string replace

    // Let's do a direct replacement of openPrintPreview and loadPrintReport functions
    const oldJSBlock = `        /* PRINT PREVIEW LOGIC */
        function openPrintPreview(reportId) {
            const overlay = document.getElementById('print-preview-overlay');
            const previewBody = document.getElementById('print-preview-body');
            const selector = document.getElementById('print-report-selector');
            
            // Set active report in dropdown selector
            selector.value = reportId;
            
            // Get source report content
            const sourceContent = document.getElementById(reportId + '-content');
            if (sourceContent) {
                // Copy HTML content
                let contentHTML = sourceContent.innerHTML;
                
                // Set content to preview area
                previewBody.innerHTML = contentHTML;
                
                // Show print preview overlay
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable background scroll
            }
        }
        
        function loadPrintReport(reportId) {
            const previewBody = document.getElementById('print-preview-body');
            const sourceContent = document.getElementById(reportId + '-content');
            if (sourceContent) {
                previewBody.innerHTML = sourceContent.innerHTML;
            }
        }
        
        function closePrintPreview() {
            const overlay = document.getElementById('print-preview-overlay');
            overlay.style.display = 'none';
            document.body.style.overflow = ''; // Restore background scroll
        }
        
        function triggerBrowserPrint() {
            window.print();
        }`;

    const newJSBlock = `        /* PRINT PREVIEW LOGIC */
        function openPrintPreview(reportId) {
            const overlay = document.getElementById('print-preview-overlay');
            const container = document.getElementById('print-preview-container');
            const selector = document.getElementById('print-report-selector');
            
            selector.value = reportId;
            renderPrintPages(reportId);
            
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Disable background scroll
        }
        
        function loadPrintReport(reportId) {
            renderPrintPages(reportId);
        }

        function renderPrintPages(reportId) {
            const container = document.getElementById('print-preview-container');
            const sourceContent = document.getElementById(reportId + '-content');
            if (!sourceContent) return;
            
            const sections = sourceContent.querySelectorAll('.print-page-section');
            let pagesHTML = '';
            
            if (sections.length > 0) {
                sections.forEach((section, index) => {
                    pagesHTML += \`
                    <div class="a4-page-print">
                        <!-- Page Header -->
                        <div class="print-report-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #002a5c; padding-bottom: 6px; margin-bottom: 8px; box-sizing: border-box; width: 100%;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <img src="brand-assets/huce_logo.png" style="height: 28px; width: auto; object-fit: contain;" alt="HUCE Logo">
                                <div style="text-align: left;">
                                    <div style="font-size: 0.65rem; font-weight: 800; color: #002a5c; letter-spacing: 0.3px; font-family: 'Plus Jakarta Sans', sans-serif;">TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</div>
                                    <div style="font-size: 0.5rem; color: #64748b; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;">Hệ Thống Nhận Diện &amp; Vận Hành Truyền Thông</div>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-size: 0.65rem; font-weight: 800; color: #002a5c; font-family: 'Plus Jakarta Sans', sans-serif;">HỒ SƠ ĐỀ XUẤT PHƯƠNG ÁN</div>
                                <div style="font-size: 0.5rem; color: #64748b; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;">Khổ Ngang A4 • ConsMedia</div>
                            </div>
                        </div>
                        
                        <!-- Page Body -->
                        <div class="print-report-body" style="flex-grow: 1; font-size: 0.7rem; line-height: 1.45; color: #0f172a; overflow: hidden; box-sizing: border-box; width: 100%;">
                            \${section.innerHTML}
                        </div>
                        
                        <!-- Page Footer -->
                        <div class="print-report-footer" style="margin-top: 6px; border-top: 1px solid #cbd5e1; padding-top: 4px; display: flex; justify-content: space-between; align-items: center; font-size: 0.55rem; color: #64748b; box-sizing: border-box; width: 100%;">
                            <span>Hồ sơ Đề xuất Phương án Tư vấn HUCE - Bảo mật nội bộ</span>
                            <span style="font-weight: 700; color: #002a5c;">Trang \${index + 1} / \${sections.length}</span>
                            <span>ConsMedia © 2026</span>
                        </div>
                    </div>
                    \`;
                });
            } else {
                pagesHTML = \`
                <div class="a4-page-print">
                    <div class="print-report-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #002a5c; padding-bottom: 6px; margin-bottom: 8px; box-sizing: border-box; width: 100%;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <img src="brand-assets/huce_logo.png" style="height: 28px; width: auto; object-fit: contain;" alt="HUCE Logo">
                            <div style="text-align: left;">
                                <div style="font-size: 0.65rem; font-weight: 800; color: #002a5c; letter-spacing: 0.3px; font-family: 'Plus Jakarta Sans', sans-serif;">TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</div>
                                <div style="font-size: 0.5rem; color: #64748b; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;">Hệ Thống Nhận Diện &amp; Vận Hành Truyền Thông</div>
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.65rem; font-weight: 800; color: #002a5c; font-family: 'Plus Jakarta Sans', sans-serif;">HỒ SƠ ĐỀ XUẤT PHƯƠNG ÁN</div>
                            <div style="font-size: 0.5rem; color: #64748b; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;">Khổ Ngang A4 • ConsMedia</div>
                        </div>
                    </div>
                    <div class="print-report-body" style="flex-grow: 1; font-size: 0.7rem; line-height: 1.45; color: #0f172a; overflow: hidden; box-sizing: border-box; width: 100%;">
                        \${sourceContent.innerHTML}
                    </div>
                    <div class="print-report-footer" style="margin-top: 6px; border-top: 1px solid #cbd5e1; padding-top: 4px; display: flex; justify-content: space-between; align-items: center; font-size: 0.55rem; color: #64748b; box-sizing: border-box; width: 100%;">
                        <span>Hồ sơ Đề xuất Phương án Tư vấn HUCE - Bảo mật nội bộ</span>
                        <span style="font-weight: 700; color: #002a5c;">Trang 1 / 1</span>
                        <span>ConsMedia © 2026</span>
                    </div>
                </div>
                \`;
            }
            container.innerHTML = pagesHTML;
        }
        
        function closePrintPreview() {
            const overlay = document.getElementById('print-preview-overlay');
            overlay.style.display = 'none';
            document.body.style.overflow = ''; // Restore background scroll
        }
        
        function triggerBrowserPrint() {
            window.print();
        }`;

    if (content.includes(oldJSBlock)) {
        content = content.replace(oldJSBlock, newJSBlock);
        console.log(`Updated print preview JS function in ${filename}`);
    } else {
        // Fallback replacement if whitespace differs
        console.log(`Warning: Did not find exact JS print preview block in ${filename}, attempting fuzzy search`);
        const searchRegex = /function openPrintPreview\([\s\S]*?function triggerBrowserPrint\(\) \{\s*window\.print\(\);\s*\}/;
        if (searchRegex.test(content)) {
            content = content.replace(searchRegex, newJSBlock);
            console.log(`Fuzzy replaced JS print preview block in ${filename}`);
        } else {
            console.log(`ERROR: Could not replace JS print preview in ${filename}`);
        }
    }

    // --- 3. REWRITE PRINT PREVIEW OVERLAY HTML CONTAINER ---
    // Remove the hardcoded template page in container, because container will be populated dynamically by JS
    const oldContainerHTML = `<div id="print-preview-container">
            <div class="a4-page-print">
                <!-- Cover / Header Page for Print -->
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #002a5c; padding-bottom: 12px; margin-bottom: 20px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <img src="brand-assets/huce_logo.png" style="height: 48px; object-fit: contain;" alt="HUCE Logo">
                            <div style="text-align: left;">
                                <div style="font-size: 0.8rem; font-weight: 800; color: #002a5c; letter-spacing: 0.5px;">TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</div>
                                <div style="font-size: 0.65rem; color: #64748b; font-weight: 600;">Hệ Thống Nhận Diện &amp; Vận Hành Truyền Thông</div>
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.8rem; font-weight: 800; color: #002a5c;">TÀI LIỆU ĐỀ XUẤT</div>
                            <div style="font-size: 0.65rem; color: #64748b; font-weight: 600;">Đối tác Tư vấn: ConsMedia</div>
                        </div>
                    </div>
                    <div id="print-preview-body">
                        <!-- Report content will be copied here -->
                    </div>
                </div>
                <div class="print-report-footer" style="margin-top: 40px; border-top: 1px solid #cbd5e1; padding-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 0.68rem; color: #64748b;">
                    <span>Hồ sơ Đề xuất Phương án Tư vấn HUCE - Bảo mật nội bộ</span>
                    <span>ConsMedia © 2026</span>
                </div>
            </div>
        </div>`;

    const newContainerHTML = `<div id="print-preview-container">
            <!-- Rendered dynamically by JS into multiple pages -->
        </div>`;

    if (content.includes(oldContainerHTML)) {
        content = content.replace(oldContainerHTML, newContainerHTML);
        console.log(`Replaced container container overlay HTML in ${filename}`);
    } else {
        // Try fuzzy replacement
        const startDiv = content.indexOf('<div id="print-preview-container"');
        const endDiv = content.indexOf('</div>\n    </div>\n\n</body>'); // end of overlay
        if (startDiv !== -1 && endDiv !== -1) {
            const blockToReplace = content.substring(startDiv, endDiv);
            content = content.replace(blockToReplace, `<div id="print-preview-container">\n            <!-- Rendered dynamically by JS into multiple pages -->`);
            console.log(`Fuzzy replaced container overlay HTML in ${filename}`);
        }
    }

    // --- 4. MERGE GÓI 1 & GÓI 2 IN CALCULATOR CHECKBOXES ---
    // Update the checkboxes in the calculator (tổng kinh phí 800M)
    const oldCalculatorHTML = `<div class="check-card checked" onclick="toggleBudgetCheckbox(this, 500000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói 1: Nhận diện &amp; SHTT <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Tinh chỉnh logo, Website UI, Thiết kế quà tặng, Bảo hộ nhãn hiệu</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">500M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 120000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói 2.1: Tư vấn quản lý truyền thông <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Quy trình tác nghiệp SOPs, kịch bản khủng hoảng, tập huấn nhân sự</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">120M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 180000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói 2.2: Chăm sóc website đồng hành <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Chăm sóc kỹ thuật, cập nhật tin bài chuẩn SEO 12 tháng</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">180M</div>
                                    </div>`;

    const newCalculatorHTML = `<div class="check-card checked" onclick="toggleBudgetCheckbox(this, 800000000)" style="background:#eff6ff; border-color:var(--primary);">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator" style="background:var(--accent); border-color:var(--accent); display:flex; align-items:center; justify-content:center; border-radius:4px; width:16px; height:16px; flex-shrink:0;">
                                            </div>
                                            <div class="check-label" style="font-size:0.78rem; font-weight:700; color:var(--text-light); margin-left:8px;">Gói Tổng Thể: Chuẩn hóa &amp; Vận hành truyền thông đồng hành <span style="font-size:0.7rem; font-weight:400; color:var(--text-muted); display:block;">Trọn gói thiết kế thương hiệu, nộp đơn bảo hộ SHTT, Landing Page, xây quy trình SOPs và vận hành website 12 tháng</span></div>
                                        </div>
                                        <div class="check-val" style="font-weight:700; font-size:0.8rem; color:var(--primary);">800M</div>
                                    </div>`;

    if (content.includes(oldCalculatorHTML)) {
        content = content.replace(oldCalculatorHTML, newCalculatorHTML);
        console.log(`Replaced interactive calculator checklist in ${filename}`);
    } else {
        console.log(`Warning: Could not find exact calculator checklist in ${filename}`);
    }

    // Update currentTotal JS variable default
    content = content.replace('let currentTotal = 800000000;', 'let currentTotal = 800000000;');

    // --- 5. UPDATE GÓI 1 & 2 HEADERS IN STATIC TABLE ---
    const oldTableHeader1 = `<td colspan="6" style="background: rgba(0, 42, 92, 0.05); font-weight: 800; color:var(--text-light);">I. GÓI 1: CHUẨN HÓA NHẬN DIỆN THƯƠNG HIỆU và BẢO HỘ PHÁP LÝ SHTT</td>`;
    const newTableHeader1 = `<td colspan="6" style="background: rgba(0, 42, 92, 0.05); font-weight: 800; color:var(--text-light); text-transform: uppercase;">I. GÓI TỔNG THỂ: CHUẨN HÓA HỆ THỐNG THƯƠNG HIỆU &amp; VẬN HÀNH TRUYỀN THÔNG ĐỒNG HÀNH</td>`;
    
    if (content.includes(oldTableHeader1)) {
        content = content.replace(oldTableHeader1, newTableHeader1);
    }

    const oldTableSplit = `<tr>
                                    <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 1</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">500,000,000</td>
                                 </tr>
                                 <tr>
                                     <td colspan="6" style="background: rgba(0, 42, 92, 0.05); font-weight: 800; color:var(--text-light);">II. GÓI 2: TƯ VẤN QUY TRÌNH QUẢN LÝ và DỊCH VỤ VẬN HÀNH WEBSITE ĐỒNG HÀNH</td>
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
                                     <td>Bảo trì kỹ thuật máy chủ, tối ưu tốc độ, cập nhật bảo mật SSL, sao lưu hàng tuần. Biên tập tin bài, văn bản, ảnh đăng website trường chuẩn SEO. Thiết kế đồ họa banner trang chủ thường nhật (tối đa 15 banner/tháng).</td>
                                     <td>12</td>
                                     <td>Tháng</td>
                                     <td style="font-weight: 700; color: var(--primary);">180,000,000</td>
                                 </tr>
                                 <tr>
                                     <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 2</td>
                                     <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">300,000,000</td>
                                 </tr>`;

    // Let's do a direct search and replace for lines 4273 to 4299 in static table
    const oldRowsToReplace = `                                <tr>
                                    <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 1</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">500,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="6" style="background: rgba(0, 42, 92, 0.05); font-weight: 800; color:var(--text-light);">II. GÓI 2: TƯ VẤN QUY TRÌNH QUẢN LÝ và DỊCH VỤ VẬN HÀNH WEBSITE ĐỒNG HÀNH</td>
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
                                    <td>Bảo trì kỹ thuật máy chủ, tối ưu tốc độ, cập nhật bảo mật SSL, sao lưu hàng tuần. Biên tập tin bài, văn bản, ảnh đăng website trường chuẩn SEO. Thiết kế đồ họa banner trang chủ thường nhật (tối đa 15 banner/tháng).</td>
                                    <td>12</td>
                                    <td>Tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">180,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 2</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">300,000,000</td>
                                </tr>`;

    const newRowsToReplace = `                                <tr>
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
                                </tr>`;

    if (content.includes(oldRowsToReplace)) {
        content = content.replace(oldRowsToReplace, newRowsToReplace);
        console.log(`Merged table rows in ${filename}`);
    } else {
        console.log(`Warning: Spacing mismatch in table rows merge for ${filename}`);
    }

    // Update overall total text
    content = content.replace('TỔNG CỘNG KINH PHÍ ĐỀ XUẤT TRỌN GÓI (I + II)', 'TỔNG CỘNG KINH PHÍ GÓI TỔNG THỂ CỐ ĐỊNH TRỌN GÓI (I)');

    // --- 6. UPDATE GIFT DESIGN (ITEM 8) ---
    // Static Table Row 8
    const oldRow8 = `                                <tr>
                                    <td>8</td>
                                    <td><strong>Gói Thiết kế Quà tặng Thương hiệu HUCE (Brand Gift Design)</strong></td>
                                    <td>Quy chuẩn thiết kế và kiểu dáng công nghiệp hệ thống quà tặng VIP (sổ da dập chìm, bút ký laser, cúp pha lê), quà tặng đối tác (ô cầm tay Cobalt, bình giữ nhiệt, cốc sứ), quà sinh viên (áo polo thêu logo, mũ) và bao bì túi hộp.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">50,000,000</td>
                                </tr>`;

    const newRow8 = `                                <tr>
                                    <td>8</td>
                                    <td><strong>Thiết kế Khung Quy chuẩn Quà tặng Thương hiệu (Brand Gift Design Framework)</strong></td>
                                    <td>Thiết lập tiêu chuẩn và định hướng mỹ thuật quà tặng theo phân cấp đối tượng: 1. Quà tặng Lãnh đạo cao cấp (đối ngoại VIP, lễ khánh tiết); 2. Quà tặng theo chiến dịch chuyên biệt; 3. Quà tặng Khách hàng &amp; Cán bộ, giảng viên; 4. Quà tặng Sinh viên &amp; Ứng viên tuyển dụng. Bàn giao file thiết kế khung quy chuẩn định hướng định dạng PDF.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">50,000,000</td>
                                </tr>`;

    if (content.includes(oldRow8)) {
        content = content.replace(oldRow8, newRow8);
        console.log(`Updated Item 8 in static table in ${filename}`);
    } else {
        console.log(`Warning: Could not find Item 8 table row in ${filename}`);
    }

    // Deliverables Hub Phân nhóm 8 Card HTML
    const oldDelCard8 = `                            <div class="del-card">
                                <h5>Phân nhóm 8: Brand Gift Design <span>QUÀ TẶNG</span></h5>
                                <p>Quy chuẩn kiểu dáng hệ quà tặng thương hiệu:</p>
                                <ul>
                                    <li><strong>Quà tặng VIP:</strong> Sổ da dập chìm, bút ký khắc laser, kỷ niệm chương pha lê cẩu tháp.</li>
                                    <li><strong>Quà tặng đối ngoại &amp; Sinh viên:</strong> Ô cầm tay Cobalt, bình giữ nhiệt, cốc sứ, áo polo thêu logo trường.</li>
                                    <li><strong>Bao bì &amp; Túi hộp:</strong> Thiết kế túi giấy, hộp đựng quà tặng VIP đồng bộ nhận diện.</li>
                                </ul>
                            </div>`;

    const newDelCard8 = `                            <div class="del-card">
                                <h5>Phân nhóm 8: Brand Gift Design (Khung Quy chuẩn &amp; Định hướng) <span>QUÀ TẶNG</span></h5>
                                <p>Thiết lập khung tiêu chuẩn và định hướng mỹ thuật quà tặng phân cấp đối tượng:</p>
                                <ul>
                                    <li><strong>Quà tặng Lãnh đạo cao cấp:</strong> Thiết kế mẫu quà tặng lễ khánh tiết, đối ngoại VIP (sổ da dập chìm nhũ vàng, kỷ niệm chương pha lê cẩu tháp chế tác tinh xảo).</li>
                                    <li><strong>Quà tặng Khách hàng &amp; Cán bộ:</strong> Bộ quà tặng hội thảo, sự kiện thường niên (bút ký laser, bình giữ nhiệt, ô cầm tay Cobalt Blue).</li>
                                    <li><strong>Quà tặng Sinh viên &amp; Tuyển dụng:</strong> Các ấn phẩm quảng bá diện rộng (áo thun Polo cotton thêu logo trường, cốc sứ, túi vải canvas thân thiện môi trường).</li>
                                    <li><strong>Quà tặng theo Chiến dịch:</strong> Khung hướng dẫn thiết kế các ấn phẩm quà tặng chuyên biệt theo từng mốc kỷ niệm.</li>
                                </ul>
                            </div>`;

    if (content.includes(oldDelCard8)) {
        content = content.replace(oldDelCard8, newDelCard8);
        console.log(`Updated Phân nhóm 8 in Deliverables Hub in ${filename}`);
    } else {
        console.log(`Warning: Could not find Phân nhóm 8 in Deliverables Hub in ${filename}`);
    }

    // --- 7. MERGE GÓI 1 & 2 SPECS SECTIONS IN PAGE 3 CONTENT TEXT ---
    const oldPage3SpecSection = `                <div class="panel-card">
                    <h3 id="p3-sec1">1. GÓI 1: CHUẨN HÓA NHẬN DIỆN THƯƠNG HIỆU và BẢO HỘ PHÁP LÝ SHTT (500.000.000 VND)</h3>
                    <p>Giải pháp tập trung chuẩn hóa hệ thống hình ảnh nhận diện thương hiệu, thiết kế quà tặng đồng bộ, thiết kế lại giao diện hệ thống website Portal/Admissions và nộp hồ sơ đăng ký bảo hộ độc quyền tên/logo HUCE tại Cục Sở hữu Trí tuệ làm "lá chắn pháp lý".</p>
                    
                    <h4>A. Triết lý Thiết kế và Định hướng Sáng tạo</h4>
                    <ul>
                        <li><strong>Logo Refinement (Tinh chỉnh Logo di sản):</strong> Khóa lưới hình học và độ dày nét của biểu trưng cẩu tháp - quyển sách để logo không bị nhòe vỡ khi thu nhỏ favicon 16x16px trên web/app hoặc khi hiển thị phóng lớn màn hình sự kiện.</li>
                        <li><strong>Hệ thống màu sắc (Color Palette):</strong> Đồng bộ hóa mã màu HSL Cobalt Blue chủ đạo, Gold và White nhũ khánh tiết. Chấm dứt tình trạng in lệch màu tại các khoa và ấn phẩm tự phát.</li>
                        <li><strong>Hệ thống lưới đồ họa (Graphic Grid System):</strong> Module hóa các họa tiết hoa văn kết cấu thép giàn không gian làm pattern ứng dụng.</li>
                    </ul>

                    <h4>B. Quy trình triển khai chuẩn hóa (4 Giai đoạn)</h4>
                    <ol>
                        <li><strong>Giai đoạn 1: Nghiên cứu di sản &amp; Kiểm toán thương hiệu (02 tuần):</strong> Thu thập mẫu logo sai lệch màu sắc tại 13+ khoa, phòng ban làm dữ liệu tinh chỉnh hình học.</li>
                        <li><strong>Giai đoạn 2: Tinh chỉnh Logo gốc &amp; Thiết kế Nhận diện (03 tuần):</strong> Hoàn thiện logo vector lưới geometric grid, thiết kế bộ ấn phẩm văn phòng và bộ tài sản số truyền thông chuẩn.</li>
                        <li><strong>Giai đoạn 3: Thiết kế Hệ thống website &amp; Quà tặng (03 tuần):</strong> Thiết kế UI/UX hệ thống website trường (Portal, Admissions, các Khoa/Viện) bàn giao Figma UI Kit. Thiết kế bộ quà tặng thương hiệu HUCE (Polo thêu logo, ô dù, sổ da dập chìm, bút ký, cúp pha lê).</li>
                        <li><strong>Giai đoạn 4: Biên soạn Playbook, Đăng ký bảo hộ sở hữu trí tuệ &amp; Nghiệm thu (02 tuần):</strong> Biên soạn toàn diện cuốn Brand Guidelines &amp; Playbook, thực hiện in ấn sản xuất 15 cuốn cao cấp lưu hành nội bộ, hoàn thiện hồ sơ pháp lý đăng ký độc quyền tại Cục Sở hữu Trí tuệ và tổ chức workshop bàn giao.</li>
                    </ol>
                </div>

                <div class="panel-card">
                    <h3 id="p3-sec2">2. GÓI 2: TƯ VẤN QUY TRÌNH QUẢN LÝ và DỊCH VỤ VẬN HÀNH WEBSITE ĐỒNG HÀNH (TỔNG CỘNG: 300,000,000 VND)</h3>
                    <p>Để đảm bảo hiệu quả tối đa cho hoạt động truyền thông và sự nhất quán lâu dài của nhà trường, ConsMedia đề xuất hai cấu phần tư vấn và vận hành đồng hành:</p>
                    
                    <h4>2.1. Hạng mục II.1: Tư vấn quy trình quản lý truyền thông và Nền tảng hoạt động chuẩn hóa (120,000,000 VND)</h4>
                    <ul>
                        <li><strong>Mục tiêu:</strong> Thiết lập quy chế phối hợp và quy trình phê duyệt tin bài bài bản, loại bỏ sự tự phát và nâng cao năng lực phản ứng nhanh của Ban truyền thông nhà trường.</li>
                        <li><strong>Chi tiết giải pháp:</strong>
                            <ul>
                                <li>Biên soạn bộ quy trình tác nghiệp truyền thông chuẩn (SOPs) đa phòng ban, phân quyền duyệt bài nhanh.</li>
                                <li>Thiết lập khung lịch biên tập truyền thông (Editorial Calendar) tổng thể đa kênh (Website, Facebook).</li>
                                <li>Xây dựng quy chế kịch bản phòng ngừa, phản ứng nhanh với khủng hoảng truyền thông mạng xã hội trong 30 phút.</li>
                                <li>Tổ chức 02 buổi tập huấn nâng cao năng lực viết tin bài chuẩn SEO và đồ họa số cho cán bộ, giảng viên và Đoàn thanh niên trường.</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>2.2. Hạng mục II.2: Dịch vụ chăm sóc, cập nhật nội dung và Điều hành hệ thống website HUCE (180,000,000 VND - Giai đoạn 1: 12 tháng năm 2026)</h4>
                    <ul>
                        <li><strong>Mục tiêu:</strong> Đảm bảo hệ thống website của trường luôn cập nhật tin tức kịp thời, sinh động, an toàn và tối ưu hóa SEO thường nhật.</li>
                        <li><strong>Chi tiết giải pháp:</strong>
                            <ul>
                                <li>Phí chăm sóc kỹ thuật thường nhật: Tối ưu bảo mật, chứng chỉ SSL, sao lưu dữ liệu hàng tuần, sửa lỗi hiển thị phát sinh.</li>
                                <li>Quản trị nội dung: Biên tập và đăng tải tin tức hoạt động, thông báo đào tạo, sự kiện khoa/phòng ban lên website Portal chính của trường đúng chuẩn SEO.</li>
                                <li>Thiết kế banner &amp; đồ họa số: Cung cấp tối đa 15 banner trang chủ hoặc ảnh bìa sự kiện thường nhật của trường trên website mỗi tháng.</li>
                            </ul>
                        </li>
                    </ul>
                </div>`;

    const newPage3SpecSection = `                <div class="panel-card" id="p3-sec1">
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

    if (content.includes(oldPage3SpecSection)) {
        content = content.replace(oldPage3SpecSection, newPage3SpecSection);
        console.log(`Merged Page 3 spec sections in ${filename}`);
    } else {
        console.log(`Warning: Spacing mismatch in Page 3 spec sections for ${filename}`);
    }

    // Anchor bar update
    const oldAnchorBar = `<a href="javascript:void(0)" onclick="scrollToSection('p3-sec1')" class="vault-btn">1. Đặc Tả Gói 1</a>
                    <a href="javascript:void(0)" onclick="scrollToSection('p3-sec2')" class="vault-btn">2. Đặc Tả Gói 2</a>`;
    const newAnchorBar = `<a href="javascript:void(0)" onclick="scrollToSection('p3-sec1')" class="vault-btn">1. Đặc Tả Gói Tổng Thể (I)</a>`;
    content = content.replace(oldAnchorBar, newAnchorBar);

    // Deliverables Hub Tab Labels
    content = content.replace("Gói 1: Nhận diện &amp; SHTT", "Cấu phần A: Nhận diện &amp; SHTT");
    content = content.replace("Gói 2.1: Quy trình truyền thông", "Cấu phần B.1: Quy trình truyền thông");
    content = content.replace("Gói 2.2: Vận hành website", "Cấu phần B.2: Vận hành website");

    // --- 8. WRAP REPORT SECTIONS IN HTML WITH print-page-section ---
    // Page 1 Wrappers
    content = content.replace('<div class="panel-card" id="p1-sec0">', '<div class="print-page-section"><div class="panel-card" id="p1-sec0">');
    content = content.replace('<div class="info-callout danger"', '</div><div class="print-page-section"><div class="info-callout danger"');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p1-sec2">2. ĐỊNH VỊ THƯƠNG HIỆU', '</div></div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p1-sec2">2. ĐỊNH VỊ THƯƠNG HIỆU');
    content = content.replace('<div class="brand-health-dashboard" id="bh-dashboard-section">', '</div><div class="print-page-section"><div class="brand-health-dashboard" id="bh-dashboard-section">');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p1-sec4">4. PHÂN TÍCH BỐI CẢNH', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p1-sec4">4. PHÂN TÍCH BỐI CẢNH');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p1-sec6">6. ĐỀ XUẤT CÁC TRỤ CỘT', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p1-sec6">6. ĐỀ XUẤT CÁC TRỤ CỘT');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p1-sec7">7. KẾT LUẬN', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p1-sec7">7. KẾT LUẬN');
    
    // We close the last section of page 1 before page 2 starts
    content = content.replace('<!-- --------------------------------------------------------------- -->\n            <!-- PAGE 2: 02. ACTION IMC PLAN & RACI REPORT (INTEGRATED) -->', '</div>\n            <!-- --------------------------------------------------------------- -->\n            <!-- PAGE 2: 02. ACTION IMC PLAN & RACI REPORT (INTEGRATED) -->');

    // Page 2 Wrappers
    content = content.replace('<div class="panel-card" id="p2-sec1-card">', '<div class="print-page-section"><div class="panel-card" id="p2-sec1-card">'); // wait, let's verify how it starts
    // Let's inspect page 2 start line
    content = content.replace('<div class="panel-card">\n                    <h3 id="p2-sec1">1. KHUNG HỢP TÁC CHIẾN LƯỢC', '<div class="print-page-section"><div class="panel-card">\n                    <h3 id="p2-sec1">1. KHUNG HỢP TÁC CHIẾN LƯỢC');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p2-sec3">3. Ma trận phân định trách nhiệm', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p2-sec3">3. Ma trận phân định trách nhiệm');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p2-sec4">4. QUY TRÌNH PHỐI HỢP', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p2-sec4">4. QUY TRÌNH PHỐI HỢP');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p2-sec5">5. CƠ CHẾ ỨNG PHÓ', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p2-sec5">5. CƠ CHẾ ỨNG PHÓ');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p2-sec6">6. KẾT LUẬN', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p2-sec6">6. KẾT LUẬN');
    
    // Close last section of page 2 before page 3 starts
    content = content.replace('<!-- --------------------------------------------------------------- -->\n            <!-- PAGE 3: 03. PRICING & DELIVERABLES SPECIFICATION -->', '</div>\n            <!-- --------------------------------------------------------------- -->\n            <!-- PAGE 3: 03. PRICING & DELIVERABLES SPECIFICATION -->');

    // Page 3 Wrappers
    content = content.replace('<div class="panel-card" id="p3-sec1">', '<div class="print-page-section"><div class="panel-card" id="p3-sec1">');
    content = content.replace('<div class="panel-card">\n                    <h3 id="p3-sec3">3. BẢNG BÁO GIÁ TRỌN GÓI', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p3-sec3">3. BẢNG BÁO GIÁ TRỌN GÓI');
    
    // We should skip the calculator in print preview, or hide it.
    // Let's place a print-page-section wrapper around Deliverables Hub
    content = content.replace('<div class="panel-card" style="margin-top: 3rem;">\n                    <h3>5. DANH MỤC TRA CỨU SẢN PHẨM BÀN GIAO CHI TIẾT', '</div><div class="print-page-section"><div class="panel-card" style="margin-top: 3rem;">\n                    <h3>5. DANH MỤC TRA CỨU SẢN PHẨM BÀN GIAO CHI TIẾT');
    
    // Wrap Menu Dịch Vụ Lẻ
    content = content.replace('<div class="panel-card">\n                    <h3 id="p3-sec6">6. MENU BÁO GIÁ DỊCH VỤ LẺ', '</div><div class="print-page-section"><div class="panel-card">\n                    <h3 id="p3-sec6">6. MENU BÁO GIÁ DỊCH VỤ LẺ');
    
    // Close last section of page 3 before end of tab view
    content = content.replace('<!-- End Page 3 Content -->', '</div>\n            <!-- End Page 3 Content -->');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully completed HTML updates in ${filename}`);
});
