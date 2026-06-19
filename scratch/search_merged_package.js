const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /(Gói Tổng Thể|800,000,000|800\.000\.000|500,000,000|500\.000\.000|300,000,000|300\.000\.000)/gi;
const lines = content.split('\n');
lines.forEach((line, index) => {
    if (regex.test(line)) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
