const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const reportIds = ['page1-content', 'page2-content', 'page3-content'];
reportIds.forEach(id => {
    console.log(`\n--- Inspecting ${id} ---`);
    const startIdx = html.indexOf(`id="${id}"`);
    if (startIdx === -1) {
        console.log(`Could not find ${id}`);
        return;
    }
    
    // Find matching closing div or scan the next 500 lines for headings/sections
    const sub = html.substring(startIdx, startIdx + 50000);
    const lines = sub.split('\n');
    let hCount = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('class="tab-view"') && i > 0) {
            // Reached next tab view
            break;
        }
        if (line.includes('<h3') || line.includes('<h2') || line.includes('class="page-break"') || line.includes('section')) {
            console.log(`Line ${i + 1}: ${line.trim()}`);
            hCount++;
            if (hCount > 25) {
                console.log('... truncated ...');
                break;
            }
        }
    }
});
