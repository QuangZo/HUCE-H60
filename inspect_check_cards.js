const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
    const styleContent = styleMatch[1];
    const lines = styleContent.split('\n');
    console.log('=== CHECK-CARD STYLES ===');
    lines.forEach((l, i) => {
        if (l.includes('check-') || l.includes('estimator') || l.includes('calculator')) {
            console.log(`Line ${i+1}: ${l.trim()}`);
        }
    });
}
