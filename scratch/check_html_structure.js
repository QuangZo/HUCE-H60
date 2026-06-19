const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('--- Checking occurrences of Brand Guidelines and Digital Assets ---');
const lines = html.split('\n');
lines.forEach((line, i) => {
    if (line.includes('Biên soạn Cẩm nang') || line.includes('Biên soạn toàn diện') || line.includes('Digital Assets') || line.includes('PlayBook - Media Kit') || line.includes('500,000,000') || line.includes('800,000,000')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});

console.log('\n--- Checking Checkboxes and Calculator Logic ---');
lines.forEach((line, i) => {
    if (line.includes('type="checkbox"') || line.includes('data-price') || line.includes('id="calc') || line.includes('updateTotal')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});
