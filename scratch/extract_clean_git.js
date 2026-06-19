const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
    console.log("Extracting index.html from commit 1fc6754...");
    const content = execSync('git show 1fc6754:index.html', { maxBuffer: 10 * 1024 * 1024 });
    const destPath = path.join(__dirname, 'index_clean.html');
    fs.writeFileSync(destPath, content);
    console.log("Extraction successful! Saved to scratch/index_clean.html");
    
    // Quick size check
    const stats = fs.statSync(destPath);
    console.log("File size in bytes:", stats.size);
} catch (err) {
    console.error("Error executing git show:", err);
}
