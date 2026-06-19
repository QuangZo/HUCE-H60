const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

// Use a simple regex to find all H3 and H4 elements within page2-content
const p2Start = content.indexOf('id="page2-content"');
const p2End = content.indexOf('id="page3-content"');
const p2Text = content.substring(p2Start, p2End);

console.log("=== Page 2 Content Headings ===");
let match;
const headingRegex = /<(h[34]|div class="panel-card"|h3 id=)[^>]*>(.*?)<\/\1>/gi;
const simpleRegex = /<(h[345])\b[^>]*>(.*?)<\/\1>/gi;

while ((match = simpleRegex.exec(p2Text)) !== null) {
    console.log(`${match[1]}: ${match[2].replace(/<[^>]*>/g, '').trim()}`);
}

const p3Start = p2End;
const p3End = content.indexOf('id="print-preview-overlay"');
const p3Text = content.substring(p3Start, p3End);

console.log("\n=== Page 3 Content Headings ===");
while ((match = simpleRegex.exec(p3Text)) !== null) {
    console.log(`${match[1]}: ${match[2].replace(/<[^>]*>/g, '').trim()}`);
}
