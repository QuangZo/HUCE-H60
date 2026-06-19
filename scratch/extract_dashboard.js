const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

const startMarker = '<!-- BẢN ĐỒ CHỈ SỐ SỨC KHỎE THƯƠNG HIỆU HUCE - DASHBOARD ĐỘNG SIÊU TO -->';
const startIdx = content.indexOf(startMarker);

const targetHeaderIdx = content.indexOf('id="p1-sec4"');
const endIdx = content.lastIndexOf('<div class="print-page-section">', targetHeaderIdx);

console.log("Start idx:", startIdx, "End idx:", endIdx);
if (startIdx !== -1 && endIdx !== -1) {
    const block = content.substring(startIdx, endIdx);
    console.log("Length:", block.length);
    console.log(block.substring(0, 300) + "...\n..." + block.substring(block.length - 200));
} else {
    console.log("Failed to find boundaries!");
}
