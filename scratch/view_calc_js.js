const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const idx = content.indexOf('function toggleBudgetCheckbox');
if (idx === -1) {
    console.log('Could not find function toggleBudgetCheckbox');
    process.exit(1);
}

const sub = content.substring(idx, idx + 1500);
console.log(sub);
