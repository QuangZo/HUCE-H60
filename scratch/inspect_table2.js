const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const startIdx = content.indexOf('MENU BÁO GIÁ DỊCH VỤ LẺ TRUYỀN THÔNG');
if (startIdx === -1) {
    console.log('Could not find MENU BÁO GIÁ DỊCH VỤ LẺ TRUYỀN THÔNG');
    process.exit(1);
}

const sub = content.substring(startIdx - 100, startIdx + 8000);
const lines = sub.split('\n');
for (let i = 0; i < 150; i++) {
    if (i < lines.length) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
