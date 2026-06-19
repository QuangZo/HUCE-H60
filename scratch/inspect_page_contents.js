const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const regexes = [
    /<div[^>]*id="page1-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/,
    /<div[^>]*id="page2-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/,
    /<div[^>]*id="page3-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/
];

// Let's search lines where they start
const lines = html.split('\n');
lines.forEach((line, i) => {
    if (line.includes('id="page1-content"') || line.includes('id="page2-content"') || line.includes('id="page3-content"')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});
