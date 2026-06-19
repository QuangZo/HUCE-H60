const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(filename => {
    const filePath = path.join(__dirname, '..', filename);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filename}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check for "85.000.000" in relation to items 3, 4
    const oldText = 'Hạng mục Office Stationery &amp; Digital Assets (Hạng mục 3, 4 - Gói 1 - Trị giá 85.000.000 VND)';
    const newText = 'Hạng mục Office Stationery &amp; Digital Assets (Hạng mục 3, 4 - Gói 1 - Trị giá 80.000.000 VND)';
    
    if (content.includes(oldText)) {
        content = content.replace(oldText, newText);
        console.log(`Replaced in ${filename}: 85M -> 80M for items 3, 4`);
    } else {
        console.log(`Pattern not found in ${filename}`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
});
