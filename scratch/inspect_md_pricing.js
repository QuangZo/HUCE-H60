const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '03_bao_gia_va_specs_chi_tiet.md');
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== FIRST 100 LINES OF 03_bao_gia_va_specs_chi_tiet.md ===');
console.log(content.split('\n').slice(0, 100).join('\n'));
