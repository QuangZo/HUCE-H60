const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const sections = ['page1-content', 'page2-content', 'page3-content'];
sections.forEach(sec => {
    console.log(`\n=== Header of ${sec} ===`);
    const idx = content.indexOf(`id="${sec}"`);
    if (idx !== -1) {
        const sub = content.substring(idx, idx + 4000);
        console.log(sub.split('\n').slice(0, 15).join('\n'));
    } else {
        console.log(`Could not find ${sec}`);
    }
});
