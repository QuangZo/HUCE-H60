const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('--- Searching for Font Families ---');
const fontMatches = html.match(/font-family:[^;]+/g);
if (fontMatches) {
    console.log(Array.from(new Set(fontMatches)));
}

console.log('\n--- Searching for print classes and media queries ---');
const printLines = [];
const lines = html.split('\n');
lines.forEach((line, i) => {
    if (line.includes('@media print') || line.includes('openPrintPreview') || line.includes('print-') || line.includes('font-family')) {
        if (line.trim().length > 0 && line.trim().length < 150) {
            printLines.push(`Line ${i + 1}: ${line.trim()}`);
        }
    }
});
console.log(printLines.slice(0, 50).join('\n'));
if (printLines.length > 50) {
    console.log(`... and ${printLines.length - 50} more lines`);
}
