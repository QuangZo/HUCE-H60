const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const lines = html.split('\n');
console.log('Searching for panel-card definitions...');
lines.forEach((line, i) => {
    if (line.includes('.panel-card')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});
