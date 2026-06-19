const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('--- SEARCHING FOR SCRIPT BLOCK IN INDEX.HTML ---');
const scriptStartIdx = content.indexOf('<script>');
const scriptEndIdx = content.indexOf('</script>', scriptStartIdx);
if (scriptStartIdx !== -1 && scriptEndIdx !== -1) {
    const scriptContent = content.substring(scriptStartIdx, scriptEndIdx + 9);
    const lines = scriptContent.split('\n');
    lines.forEach((line, index) => {
        if (line.includes('pageTitle') || line.includes('pageSubtitle') || line.includes('switchPageView') || line.includes('page-title-top') || line.includes('page-subtitle-top')) {
            console.log(`Line ${index + 1}: ${line.trim()}`);
        }
    });
} else {
    console.log('No script block found');
}
