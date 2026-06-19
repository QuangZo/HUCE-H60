const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const dbStart = content.indexOf('<!-- BẢN ĐỒ CHỈ SỐ SỨC KHỎE THƯƠNG HIỆU HUCE - DASHBOARD ĐỘNG SIÊU TO -->');
const targetHeaderIdx = content.indexOf('id="p1-sec3"'); // section 2 is p1-sec2, section 3 is p1-sec3 (SWOT) now
const dbEnd = content.lastIndexOf('<div class="print-page-section">', targetHeaderIdx);

console.log("dbStart:", dbStart, "dbEnd:", dbEnd);
if (dbStart !== -1 && dbEnd !== -1) {
    const rawBlock = content.substring(dbStart, dbEnd);
    console.log("Raw block length:", rawBlock.length);
    console.log("Last 500 chars of raw block:");
    console.log(rawBlock.substring(rawBlock.length - 500));
}
