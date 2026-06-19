const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    console.log(`Fixing sidebar title in ${file}...`);
    
    // Match badge 01 followed by whitespace/newlines and the old title text
    const regex = /(<span class="nav-item-num">01<\/span>\s*)Tổng quan &amp; Khái quát Chào giá/i;
    
    if (regex.test(html)) {
        html = html.replace(regex, '$1Tổng Quan');
        console.log(`- Updated ${file} successfully.`);
        fs.writeFileSync(filePath, html, 'utf8');
    } else {
        console.log(`- Target not found or already updated in ${file}.`);
    }
});
