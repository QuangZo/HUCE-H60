const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const p2Idx = content.indexOf('id="page2-content"');
if (p2Idx !== -1) {
    console.log("=== Page 2 Transition ===");
    console.log(content.substring(p2Idx - 300, p2Idx + 500));
} else {
    console.log("page2-content ID not found!");
}

const p3Idx = content.indexOf('id="page3-content"');
if (p3Idx !== -1) {
    console.log("\n=== Page 3 Transition ===");
    console.log(content.substring(p3Idx - 300, p3Idx + 500));
} else {
    console.log("page3-content ID not found!");
}
