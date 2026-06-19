const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('--- Font Import Tags ---');
const lines = html.split('\n');
lines.forEach((line, i) => {
    if (line.includes('fonts.googleapis.com') || line.includes('font-family') || line.includes('@import')) {
        if (line.length < 150) {
            console.log(`Line ${i + 1}: ${line.trim()}`);
        }
    }
});

console.log('\n--- Searching for where font-family is applied ---');
lines.forEach((line, i) => {
    if (line.includes('font-family:')) {
        console.log(`Line ${i + 1}: ${line.trim()}`);
    }
});
