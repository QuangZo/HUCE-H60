const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('Searching for A4 page occurrences...');
const lines = html.split('\n');
lines.forEach((line, i) => {
    if (line.includes('a4-page-print') || line.includes('page-break')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});
