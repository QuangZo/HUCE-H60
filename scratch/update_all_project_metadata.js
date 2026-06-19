const fs = require('fs');
const path = require('path');

const workspaceDir = path.join(__dirname, '..');
const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\a5bb0902-08f9-4c1c-a377-7c5160196c76';

// 1. Rebuild metadata block in HTML
const htmlFiles = ['index.html', 'huce_h60_proposal.html'];

const htmlTarget = `<div style="list-style: none; margin-left: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; border-top: 1px solid #e4e4e7; padding-top: 1rem; font-size: 0.78rem; color: var(--text-muted);">
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2s4 2 4 8c0 2.08.31 3.3 1 4.5V17H7v-2.5c.69-1.2 1-2.42 1-4.5 0-6 4-8 4-8zm0 17h3v2h-3v-2zm-6.27.56c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-.71-.71zm12.54 0-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-.71-.71z"/></svg> <strong>Tên Dự Án:</strong> Dự án Chuẩn hóa Nhận diện và Xây dựng Hệ thống Thương hiệu HUCE</div>
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/></svg> <strong>Bản Dự Thảo:</strong> Ngày 26 tháng 05 năm 2026</div>
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.44 4.01 4.89C7.79 16.3 9.7 18 12 18s4.21-1.7 4.99-4.11C19.28 13.44 21 11.44 21 10V7c0-1.1-.9-2-2-2zM5 10V7h2v3c0 .72-.1 1.41-.27 2.06C5.7 11.66 5 10.91 5 10zm14 0c0 .91-.7 1.66-1.73 2.06-.17-.65-.27-1.34-.27-2.06V7h2v3zm-7 10c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/></svg> <strong>Cột mốc Động lực:</strong> Đại lễ Kỷ niệm 60 năm thành lập</div>
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg> <strong>Phạm Vi:</strong> Nhận diện thương hiệu, bảo hộ SHTT, quy trình SOPs và vận hành website</div>
                    </div>`;

const htmlReplacement = `<div style="font-size: 0.82rem; font-weight: 800; color: var(--primary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #e4e4e7; padding-top: 1rem;">THÔNG TIN CHUNG DỰ ÁN</div>
                    <div style="list-style: none; margin-left: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 0.78rem; color: var(--text-muted);">
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2s4 2 4 8c0 2.08.31 3.3 1 4.5V17H7v-2.5c.69-1.2 1-2.42 1-4.5 0-6 4-8 4-8zm0 17h3v2h-3v-2zm-6.27.56c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-.71-.71zm12.54 0-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-.71-.71z"/></svg> <strong>Tên dự án:</strong> Chuẩn hóa Thương hiệu &amp; Tái cấu trúc Hệ thống Vận hành Truyền thông</div>
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> <strong>Khách hàng:</strong> Trường ĐHXD HN</div>
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg> <strong>Phạm vi nghiên cứu:</strong> Nhận diện thương hiệu, bảo hộ SHTT, quy trình SOPs và vận hành truyền thông</div>
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.89L11 13.7V7h1.5v5.8l3.7 2.2-.71 1.09z"/></svg> <strong>Thời gian:</strong> Từ 05.2026</div>
                        <div><svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> <strong>Mã HS:</strong> Huce.260516.v.1.2</div>
                    </div>`;

htmlFiles.forEach(file => {
    const fPath = path.join(workspaceDir, file);
    if (fs.existsSync(fPath)) {
        let content = fs.readFileSync(fPath, 'utf8');
        // Let's do a search replacement for target
        if (content.includes(htmlTarget)) {
            content = content.replace(htmlTarget, htmlReplacement);
            console.log(`- Updated metadata in ${file}`);
        } else {
            console.log(`- Warning: HTML Target not found in ${file}. Trying regex...`);
            // Regex match
            const regex = /<div style="list-style: none; margin-left: 0; display: grid; grid-template-columns:[\s\S]*?<\/div>\s*<\/div>/i;
            content = content.replace(regex, htmlReplacement);
            console.log(`- Updated metadata in ${file} via regex.`);
        }
        fs.writeFileSync(fPath, content, 'utf8');
    }
});

// 2. Update markdown files in workspace and brain
const mdFiles = [
    '01_danh_gia_suc_khoe_thuong_hieu.md',
    '02_de_xuat_hanh_dong_va_co_che.md',
    '03_bao_gia_va_specs_chi_tiet.md'
];

const mdOldProjectName = '**Dự án: Chuẩn hóa Nhận diện và Xây dựng Hệ thống Thương hiệu HUCE**';
const mdNewProjectName = '**Dự án: Chuẩn hóa Thương hiệu & Tái cấu trúc Hệ thống Vận hành Truyền thông**';

function updateMdFile(dir, file) {
    const fPath = path.join(dir, file);
    if (fs.existsSync(fPath)) {
        let content = fs.readFileSync(fPath, 'utf8');
        if (content.includes(mdOldProjectName)) {
            content = content.replace(mdOldProjectName, mdNewProjectName);
            fs.writeFileSync(fPath, content, 'utf8');
            console.log(`- Updated project name in ${fPath}`);
        } else {
            // Loose comparison (ignoring trailing whitespace)
            const looseOld = mdOldProjectName.trim();
            if (content.includes(looseOld)) {
                content = content.replace(looseOld, mdNewProjectName);
                fs.writeFileSync(fPath, content, 'utf8');
                console.log(`- Updated project name (loose match) in ${fPath}`);
            } else {
                console.log(`- Old project name not found in ${fPath}`);
            }
        }
    }
}

console.log("\n=== UPDATING WORKSPACE MD FILES ===");
mdFiles.forEach(file => updateMdFile(workspaceDir, file));

console.log("\n=== UPDATING BRAIN MD FILES ===");
mdFiles.forEach(file => updateMdFile(brainDir, file));
