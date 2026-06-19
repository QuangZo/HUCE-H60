const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const idx = content.indexOf('id="del-g1-view"');
if (idx === -1) {
    console.log('Could not find id="del-g1-view"');
    process.exit(1);
}

const sub = content.substring(idx, idx + 4000);
const lines = sub.split('\n');
for (let i = 0; i < 65; i++) {
    if (i < lines.length) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
