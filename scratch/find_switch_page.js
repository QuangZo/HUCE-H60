const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const idx = content.indexOf('function switchPageView');
if (idx === -1) {
    console.log('Could not find switchPageView');
    process.exit(1);
}

const sub = content.substring(idx, idx + 2000);
console.log(sub);
