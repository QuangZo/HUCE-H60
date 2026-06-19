const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index_clean.html');
const content = fs.readFileSync(filePath, 'utf8');

// Find the style block
const styleToken = '.brand-health-dashboard {';
const styleStart = content.indexOf('<style>', content.indexOf(styleToken) - 1000);
const styleEnd = content.indexOf('</style>', styleStart) + 8;

// Find the HTML block
const htmlStart = content.indexOf('<div class="brand-health-dashboard" id="bh-dashboard-section">');
// The dashboard ends before the next print-page-section or before SWOT
const targetIdx = content.indexOf('id="p1-sec4"'); // SWOT section in clean copy was id="p1-sec5" actually, wait, line 3377 is id="p1-sec5". Let's check id="p1-sec5"
const swotIdx = content.indexOf('id="p1-sec5"');
const htmlEnd = content.lastIndexOf('<div class="print-page-section">', swotIdx);

console.log("Style block:", styleStart, "to", styleEnd);
console.log("HTML block:", htmlStart, "to", htmlEnd);
if (styleStart !== -1 && htmlStart !== -1) {
    const styleContent = content.substring(styleStart, styleEnd);
    const htmlContent = content.substring(htmlStart, htmlEnd);
    console.log("Style content length:", styleContent.length);
    console.log("HTML content length:", htmlContent.length);
    
    // Save to a temporary file for backup
    fs.writeFileSync(path.join(__dirname, 'extracted_dashboard_clean.html'), styleContent + '\n' + htmlContent);
} else {
    console.log("Failed to find style/HTML bounds!");
}
