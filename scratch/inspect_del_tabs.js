const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const tabs = ['del-g1-view', 'del-g21-view', 'del-g22-view'];
tabs.forEach(tab => {
    console.log(`\n=================== Tab ID: ${tab} ===================`);
    const idx = content.indexOf(`id="${tab}"`);
    if (idx === -1) {
        console.log(`Could not find ${tab}`);
        return;
    }
    const sub = content.substring(idx, idx + 20000);
    const lines = sub.split('\n');
    let cardCount = 0;
    lines.forEach((line, index) => {
        if (line.includes('class="del-card"') || line.includes('class="deliverable-card"') || line.includes('<h4>') || line.includes('<h5>')) {
            console.log(`Line ${index + 1}: ${line.trim()}`);
            cardCount++;
        }
    });
    console.log(`Total items found: ${cardCount}`);
});
