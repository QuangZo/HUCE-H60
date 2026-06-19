const fs = require('fs');
const path = require('path');

const files = [
    '01_danh_gia_suc_khoe_thuong_hieu.md',
    '02_de_xuat_hanh_dong_va_co_che.md'
];

files.forEach(filename => {
    const filePath = path.join(__dirname, '..', filename);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filename}`);
        return;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\n--- Inspecting ${filename} ---`);
    const lines = content.split('\n');
    lines.forEach((line, i) => {
        const lower = line.toLowerCase();
        if (lower.includes('gói 1') || lower.includes('gói 2') || lower.includes('quà tặng') || lower.includes('stationery') || lower.includes('digital assets') || lower.includes('85.') || lower.includes('20.')) {
            console.log(`Line ${i + 1}: ${line.trim()}`);
        }
    });
});
