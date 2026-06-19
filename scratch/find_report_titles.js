const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');
const lines = content.split('\n');

console.log("Searching for report titles in index.html:");
lines.forEach((line, index) => {
    const text = line.toLowerCase();
    if (
        text.includes('báo cáo') ||
        text.includes('sức khỏe') ||
        text.includes('sở hữu trí tuệ') ||
        text.includes('đối tác truyền thông') ||
        text.includes('bảng báo giá') ||
        text.includes('báo giá chi tiết') ||
        text.includes('pháp lý')
    ) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
