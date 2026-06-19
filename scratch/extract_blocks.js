const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

const p2StartIdx = content.indexOf('<div id="page2-content" class="tab-view">');
const p2EndIdx = content.indexOf('<div id="page3-content" class="tab-view">');
const p2Text = content.substring(p2StartIdx, p2EndIdx);

const headings = [
    { name: 'MOU', pattern: /<h3[^>]*id="p2-sec1"[^>]*>/i },
    { name: 'Roadmap', pattern: /<h3[^>]*id="p2-sec2"[^>]*>/i },
    { name: 'RACI', pattern: /<h3[^>]*id="p2-sec3"[^>]*>/i },
    { name: 'QuyTrinh', pattern: /<h3[^>]*id="p2-sec4"[^>]*>/i },
    { name: 'KhungHoang', pattern: /<h3[^>]*id="p2-sec5"[^>]*>/i },
    { name: 'Conclusion', pattern: /<h3[^>]*id="p2-sec6"[^>]*>/i }
];

const parsedSecs = [];

headings.forEach((h, i) => {
    const match = h.pattern.exec(p2Text);
    if (match) {
        const offset = match.index;
        // Search backward for the nearest panel card or print page section
        let startIdx = p2Text.lastIndexOf('<div class="print-page-section">', offset);
        let wrapper = 'print-page-section';
        if (startIdx === -1 || (offset - startIdx > 150)) {
            startIdx = p2Text.lastIndexOf('<div class="panel-card">', offset);
            wrapper = 'panel-card';
        }
        if (startIdx === -1 || (offset - startIdx > 150)) {
            startIdx = p2Text.lastIndexOf('<div class="panel-card"', offset);
            wrapper = 'panel-card-with-attrs';
        }
        
        parsedSecs.push({
            name: h.name,
            headOffset: offset,
            headText: match[0],
            startIdx: startIdx,
            wrapper: wrapper
        });
    }
});

// Calculate end indexes
parsedSecs.forEach((sec, i) => {
    let endIdx;
    if (i < parsedSecs.length - 1) {
        endIdx = parsedSecs[i+1].startIdx;
    } else {
        // Last section goes to the end of the text, minus closing </div> tags
        endIdx = p2Text.lastIndexOf('</div>'); // wait, the very end is </div> for page2-content
        // let's search backward from end of text
        endIdx = p2Text.lastIndexOf('</div>');
    }
    sec.endIdx = endIdx;
    sec.htmlContent = p2Text.substring(sec.startIdx, sec.endIdx).trim();
    console.log(`Section ${sec.name}: startIdx=${sec.startIdx}, endIdx=${sec.endIdx}, wrapper=${sec.wrapper}, length=${sec.htmlContent.length}`);
});
