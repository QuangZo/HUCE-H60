const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const lines = html.split('\n');
console.log('Searching for SWOT in HTML...');
lines.forEach((line, i) => {
    if (line.includes('SWOT') || line.includes('p1-sec4') || line.includes('p1-sec5')) {
        if (line.length < 150) {
            console.log(`Line ${i + 1}: ${line.trim()}`);
        }
    }
});
