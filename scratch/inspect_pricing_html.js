const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const p3Idx = html.indexOf('id="page3-content"');
if (p3Idx !== -1) {
    const sub = html.substring(p3Idx);
    const startToken = '<table class="audit-table">';
    const endToken = '</table>';
    const startIdx = sub.indexOf(startToken);
    const endIdx = sub.indexOf(endToken, startIdx);

    if (startIdx !== -1 && endIdx !== -1) {
        const tableHTML = sub.substring(startIdx, endIdx + endToken.length);
        console.log(tableHTML);
    } else {
        console.log('Error: Could not locate table in page3-content.');
    }
} else {
    console.log('Error: Could not locate page3-content.');
}
