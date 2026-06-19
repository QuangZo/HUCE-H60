const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'huce_h60_proposal.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log("=== Checking huce_h60_proposal.html sidebar menu ===");
const navStart = content.indexOf('<ul class="nav-list">');
if (navStart !== -1) {
    const navSub = content.substring(navStart, navStart + 1000);
    console.log(navSub.split('</ul>')[0] + '</ul>');
}

console.log("=== Checking huce_h60_proposal.html print items ===");
const printStart = content.indexOf('🖨️ Xuất Bản PDF Khổ A4');
if (printStart !== -1) {
    const printSub = content.substring(printStart, printStart + 1000);
    console.log(printSub.split('</ul>')[0] + '</ul>');
}

console.log("=== Checking huce_h60_proposal.html print selector options ===");
const selectorStart = content.indexOf('id="print-report-selector"');
if (selectorStart !== -1) {
    const selectorSub = content.substring(selectorStart, selectorStart + 1000);
    console.log(selectorSub.split('</select>')[0] + '</select>');
}
