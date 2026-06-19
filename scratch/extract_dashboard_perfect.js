const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index_clean.html');
const content = fs.readFileSync(filePath, 'utf8');

const htmlStart = content.indexOf('<div class="brand-health-dashboard" id="bh-dashboard-section">');
if (htmlStart === -1) {
    console.log("Could not find start of dashboard!");
    process.exit(1);
}

// Find matching closing div by counting open/close tags
let openCount = 0;
let pos = htmlStart;
let matchedEnd = -1;

while (pos < content.length) {
    const nextOpen = content.indexOf('<div', pos);
    const nextClose = content.indexOf('</div', pos);
    
    if (nextClose === -1) break; // no more close tags
    
    if (nextOpen !== -1 && nextOpen < nextClose) {
        // Found an open tag before a close tag
        openCount++;
        pos = nextOpen + 4;
    } else {
        // Found a close tag
        openCount--;
        if (openCount === 0) {
            matchedEnd = nextClose + 6; // include '</div>'
            break;
        }
        pos = nextClose + 5;
    }
}

console.log("Matched end index:", matchedEnd);
if (matchedEnd !== -1) {
    const perfectBlock = content.substring(htmlStart, matchedEnd);
    console.log("Perfect block length:", perfectBlock.length);
    console.log("Perfect block ends with:", perfectBlock.substring(perfectBlock.length - 100));
    
    // Save to temp file
    fs.writeFileSync(path.join(__dirname, 'extracted_dashboard_perfect.html'), perfectBlock);
} else {
    console.log("Failed to find matching close tag!");
}
