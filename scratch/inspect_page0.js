const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const startIdx = content.indexOf('id="page0-content"');
if (startIdx === -1) {
    console.log('Could not find page0-content');
    process.exit(1);
}

const sub = content.substring(startIdx, startIdx + 30000);
const lines = sub.split('\n');
for (let i = 0; i < 150; i++) {
    if (i < lines.length) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
