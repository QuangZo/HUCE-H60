const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const ids = ['page1-content', 'page2-content', 'page3-content'];
ids.forEach(id => {
    console.log(`\n--- START OF ${id} ---`);
    const idx = content.indexOf(`id="${id}"`);
    if (idx !== -1) {
        const sub = content.substring(idx, idx + 2000);
        console.log(sub);
    }
});
