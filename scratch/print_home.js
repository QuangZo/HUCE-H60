const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

for (let i = 2419; i < 2550; i++) {
    if (i < lines.length) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
