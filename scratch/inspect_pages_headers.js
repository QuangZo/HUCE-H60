const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const pages = ['page1-content', 'page2-content', 'page3-content'];
pages.forEach(p => {
    console.log(`\n=================== ${p} ===================`);
    const startIdx = content.indexOf(`id="${p}"`);
    if (startIdx === -1) {
        console.log(`Could not find ${p}`);
        return;
    }
    const sub = content.substring(startIdx, startIdx + 8000);
    // Find any h1, h2, h3 in the first 8000 characters
    const lines = sub.split('\n');
    for (let i = 0; i < 40; i++) {
        if (i < lines.length) {
            console.log(`${i + 1}: ${lines[i]}`);
        }
    }
});
