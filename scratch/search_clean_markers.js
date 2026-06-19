const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index_clean.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log("=== Checking index_clean.html ===");
const lines = content.split('\n');
lines.forEach((line, index) => {
    if (line.includes('Bản Đồ Chỉ Số') || line.includes('dashboard') || line.includes('p1-sec')) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
