const fs = require('fs');
const path = require('path');

const files = [
    '01_danh_gia_suc_khoe_thuong_hieu.md',
    '02_de_xuat_hanh_dong_va_co_che.md',
    '03_bao_gia_va_specs_chi_tiet.md'
];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    console.log(`\n=== STRUCTURE OF ${file} ===`);
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    lines.forEach((line, index) => {
        if (line.startsWith('#') || line.startsWith('## ') || line.startsWith('### ')) {
            console.log(`${index + 1}: ${line.trim()}`);
        }
    });
});
