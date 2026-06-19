const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log("=== Searching for dashboard-related JS ===");
const lines = content.split('\n');
lines.forEach((line, index) => {
    if (line.includes('bh-') || line.includes('dashboard') || line.includes('health')) {
        if (line.includes('document.get') || line.includes('const ') || line.includes('let ') || line.includes('function ')) {
            console.log(`Line ${index + 1}: ${line.trim()}`);
        }
    }
});
