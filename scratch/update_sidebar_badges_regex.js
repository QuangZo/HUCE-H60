const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    console.log(`Updating sidebar badges in ${file}...`);
    
    // Regex matches
    const r0 = /(<span class="nav-item-num">)00(<\/span>\s*Tổng Quan)/i;
    const r1 = /(<span class="nav-item-num">)01(<\/span>\s*Báo cáo 01)/i;
    const r2 = /(<span class="nav-item-num">)02(<\/span>\s*Báo cáo 02)/i;
    const r3 = /(<span class="nav-item-num">)03(<\/span>\s*Báo cáo 03)/i;
    
    let updated = false;
    if (r0.test(html)) { html = html.replace(r0, '$101$2'); updated = true; }
    if (r1.test(html)) { html = html.replace(r1, '$102$2'); updated = true; }
    if (r2.test(html)) { html = html.replace(r2, '$103$2'); updated = true; }
    if (r3.test(html)) { html = html.replace(r3, '$104$2'); updated = true; }
    
    if (updated) {
        console.log(`- Updated ${file} successfully.`);
        fs.writeFileSync(filePath, html, 'utf8');
    } else {
        console.log(`- No matches found in ${file}.`);
    }
});
