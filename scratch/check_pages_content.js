const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

function showSection(id) {
    const startIdx = content.indexOf(`id="${id}"`);
    if (startIdx === -1) {
        console.log(`Not found: ${id}`);
        return;
    }
    const endIdx = content.indexOf('</div>', startIdx + 500); // just print some surrounding lines
    console.log(`=== ${id} ===`);
    console.log(content.substring(startIdx - 100, startIdx + 2000));
}

showSection('page2-content');
showSection('page3-content');
