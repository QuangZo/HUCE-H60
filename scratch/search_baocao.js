const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /báo\s+cáo/gi;
const lines = content.split('\n');
lines.forEach((line, index) => {
    if (regex.test(line)) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
