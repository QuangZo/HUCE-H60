const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

for (let i = 4194; i < 4335; i++) {
    if (i < lines.length) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
