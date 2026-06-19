const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('Searching for calculator keywords...');
const lines = html.split('\n');
lines.forEach((line, i) => {
    // search for calc, total, price, checkbox, or input
    const lowerLine = line.toLowerCase();
    if (lowerLine.includes('calculator') || lowerLine.includes('checkbox') || lowerLine.includes('tổng cộng') || lowerLine.includes('tong cong') || lowerLine.includes('update') || lowerLine.includes('click') || lowerLine.includes('change')) {
        if (line.trim().length > 0 && line.trim().length < 200) {
            console.log(`Line ${i + 1}: ${line.trim()}`);
        }
    }
});
