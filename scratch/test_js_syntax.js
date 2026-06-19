const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;

console.log("=== Testing JavaScript Code in HTML ===");
while ((match = regex.exec(html)) !== null) {
    count++;
    const jsCode = match[1];
    try {
        new vm.Script(jsCode);
        console.log(`Script block ${count}: Syntax OK`);
    } catch (err) {
        console.error(`Script block ${count}: Syntax ERROR!`);
        console.error(err);
        
        // Log surrounding lines
        const lines = jsCode.split('\n');
        console.error("Error at line:", err.stack);
    }
}
