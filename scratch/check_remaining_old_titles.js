const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];
const oldTitles = [
    'Đánh giá Sức khỏe Thương hiệu & Cảnh báo Bảo hộ Pháp lý HUCE',
    'Đề xuất Hành động theo Cơ chế Đối tác Truyền thông',
    'Đề xuất Giải pháp & Bảng báo giá Chi tiết Hệ thống Thương hiệu'
];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\nChecking ${file} for old titles:`);
    oldTitles.forEach(title => {
        let count = 0;
        let idx = content.indexOf(title);
        while (idx !== -1) {
            count++;
            // Find line number
            const lineNum = content.substring(0, idx).split('\n').length;
            console.log(`- Found "${title}" on line ${lineNum}`);
            idx = content.indexOf(title, idx + 1);
        }
        if (count === 0) {
            console.log(`- No matches for "${title}"`);
        }
    });
});
