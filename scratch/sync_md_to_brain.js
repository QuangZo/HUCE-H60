const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const destDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\a5bb0902-08f9-4c1c-a377-7c5160196c76';

const filesToSync = [
    '01_danh_gia_suc_khoe_thuong_hieu.md',
    '02_de_xuat_hanh_dong_va_co_che.md',
    '03_bao_gia_va_specs_chi_tiet.md'
];

filesToSync.forEach(filename => {
    const srcPath = path.join(srcDir, filename);
    const destPath = path.join(destDir, filename);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${filename} to brain directory.`);
    } else {
        console.log(`Error: Source file ${filename} not found.`);
    }
});
