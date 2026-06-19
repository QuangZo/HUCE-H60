const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const p3Idx = content.indexOf('id="page3-content"');
if (p3Idx === -1) {
    console.log("Could not find page3-content");
    process.exit(1);
}

const sub = content.substring(p3Idx, p3Idx + 120000);
const lines = sub.split('\n');

console.log("=== Page 3 Headings and Subheadings ===");
lines.forEach((line, index) => {
    if (line.includes('<h3') || line.includes('<h4') || line.includes('<h5')) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
