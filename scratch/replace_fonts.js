const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(filename => {
    const filePath = path.join(__dirname, '..', filename);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace UTM Avo with Plus Jakarta Sans
    content = content.replace(/'UTM Avo'/g, "'Plus Jakarta Sans'");
    // Replace Outfit with Inter
    content = content.replace(/'Outfit'/g, "'Inter'");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced fonts in ${filename}`);
});
