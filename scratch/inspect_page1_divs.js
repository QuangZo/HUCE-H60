const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const startIdx = html.indexOf('id="page1-content"');
const endIdx = html.indexOf('id="page2-content"');
const sub = html.substring(startIdx, endIdx);

const lines = sub.split('\n');
console.log('Total lines in page1-content:', lines.length);
console.log('--- Printing first 100 lines ---');
console.log(lines.slice(0, 100).join('\n'));
