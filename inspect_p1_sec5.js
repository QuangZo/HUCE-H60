const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const lines = html.split('\n');

let start = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id="p1-sec5"')) {
        start = i;
        break;
    }
}

if (start !== -1) {
    console.log(`Found Section 5 start at line ${start + 1}`);
    for (let i = start; i < start + 60; i++) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
