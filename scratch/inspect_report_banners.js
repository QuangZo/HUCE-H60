const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const reportIds = ['page1-content', 'page2-content', 'page3-content'];
reportIds.forEach(id => {
    console.log(`\n=================== ID: ${id} ===================`);
    const startIdx = content.indexOf(`id="${id}"`);
    if (startIdx === -1) {
        console.log(`Could not find ${id}`);
        return;
    }
    const endIdx = content.indexOf('class="tab-view"', startIdx + 20);
    const sub = endIdx !== -1 ? content.substring(startIdx, endIdx) : content.substring(startIdx, startIdx + 3000);
    
    // Look for lines containing headers or title classes
    const lines = sub.split('\n');
    lines.forEach((line, index) => {
        if (line.includes('<h1') || line.includes('<h2') || line.includes('<h3') || line.includes('report-') || line.includes('banner') || line.includes('report-title')) {
            console.log(`Line ${index + 1}: ${line.trim()}`);
        }
    });
});
