const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

const startIdx = content.indexOf('id="page1-content"');
const endIdx = content.indexOf('id="page2-content"');
const text = content.substring(startIdx, endIdx);

console.log("=== Page 1 Headings in HTML ===");
let match;
const regex = /<(h[345])\b[^>]*>(.*?)<\/\1>/gi;
while ((match = regex.exec(text)) !== null) {
    console.log(`${match[1]}: ${match[2].replace(/<[^>]*>/g, '').trim()}`);
}
