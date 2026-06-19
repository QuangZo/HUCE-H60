const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

const p2StartIdx = content.indexOf('<div id="page2-content" class="tab-view">');
const p2EndIdx = content.indexOf('<div id="page3-content" class="tab-view">');
const p2Text = content.substring(p2StartIdx, p2EndIdx);

const offsets = {
    mou: p2Text.indexOf('<h3 id="p2-sec1">'),
    roadmap: p2Text.indexOf('<h3 id="p2-sec2">'),
    raci: p2Text.indexOf('<h3 id="p2-sec3">'),
    quytrinh: p2Text.indexOf('<h3 id="p2-sec4">'),
    khunghoang: p2Text.indexOf('<h3 id="p2-sec5">'),
    conclusion: p2Text.indexOf('<h3 id="p2-sec6">')
};

function getStartOfPanel(offset) {
    let printSecIdx = p2Text.lastIndexOf('<div class="print-page-section">', offset);
    let panelCardIdx = p2Text.lastIndexOf('<div class="panel-card">', offset);
    let panelCardWithAttrsIdx = p2Text.lastIndexOf('<div class="panel-card"', offset);
    
    let candidates = [printSecIdx, panelCardIdx, panelCardWithAttrsIdx].filter(x => x !== -1 && x <= offset);
    return Math.max(...candidates);
}

const mouStart = getStartOfPanel(offsets.mou);
const roadmapStart = getStartOfPanel(offsets.roadmap);
const raciStart = offsets.raci; // RACI is inside roadmap panel card, so start at h3
const quytrinhStart = getStartOfPanel(offsets.quytrinh);
const khunghoangStart = getStartOfPanel(offsets.khunghoang);
const conclusionStart = getStartOfPanel(offsets.conclusion);

console.log("=== Extracted Offsets ===");
console.log(`MOU: ${mouStart} to ${roadmapStart}`);
console.log(`Roadmap: ${roadmapStart} to ${raciStart}`);
console.log(`RACI: ${raciStart} to ${quytrinhStart}`);
console.log(`Quytrinh: ${quytrinhStart} to ${khunghoangStart}`);
console.log(`Khunghoang: ${khunghoangStart} to ${conclusionStart}`);
console.log(`Conclusion: ${conclusionStart} to end`);

const mouHTML = p2Text.substring(mouStart, roadmapStart).trim();
const roadmapHTML = p2Text.substring(roadmapStart, raciStart).trim();
const raciHTML = p2Text.substring(raciStart, quytrinhStart).trim();
const quytrinhHTML = p2Text.substring(quytrinhStart, khunghoangStart).trim();
const khunghoangHTML = p2Text.substring(khunghoangStart, conclusionStart).trim();
const conclusionHTML = p2Text.substring(conclusionStart, p2Text.lastIndexOf('</div>')).trim();

console.log("\n=== Extracted Sizes ===");
console.log("MOU:", mouHTML.length);
console.log("Roadmap:", roadmapHTML.length);
console.log("RACI:", raciHTML.length);
console.log("Quytrinh:", quytrinhHTML.length);
console.log("Khunghoang:", khunghoangHTML.length);
console.log("Conclusion:", conclusionHTML.length);

console.log("\n=== MOU preview ===");
console.log(mouHTML.substring(0, 200) + "...\n..." + mouHTML.substring(mouHTML.length - 200));

console.log("\n=== RACI preview ===");
console.log(raciHTML.substring(0, 200) + "...\n..." + raciHTML.substring(raciHTML.length - 200));
