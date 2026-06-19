const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const lines = html.split('\n');

lines.forEach((line, index) => {
    if (line.includes('total-lcd-box') || line.includes('directives-box')) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
