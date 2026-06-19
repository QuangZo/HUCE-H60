const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index_clean.html');
const content = fs.readFileSync(filePath, 'utf8');

const startMarker = '<!-- BẢN ĐỒ CHỈ SỐ SỨC KHỎE THƯƠNG HIỆU HUCE - DASHBOARD ĐỘNG SIÊU TO -->';
const startIdx = content.indexOf(startMarker);

// Find the next section in clean copy (which was section 4 or SWOT in the old copy)
const targetHeaderIdx = content.indexOf('id="p1-sec4"');
const endIdx = content.lastIndexOf('<div class="print-page-section">', targetHeaderIdx);

console.log("Clean Start idx:", startIdx, "Clean End idx:", endIdx);
if (startIdx !== -1 && endIdx !== -1) {
    const block = content.substring(startIdx, endIdx);
    console.log("Length:", block.length);
    console.log("First 300 chars:");
    console.log(block.substring(0, 300));
    console.log("\nLast 500 chars:");
    console.log(block.substring(block.length - 500));
} else {
    console.log("Failed to find boundaries in clean copy!");
}
