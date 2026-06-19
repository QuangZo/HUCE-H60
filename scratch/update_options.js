const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace Option 1
    content = content.replace(
        '<option value="page1">01. Phân Tích Sức Khỏe Thương Hiệu</option>',
        '<option value="page1">01. Báo cáo 01: Đánh giá Sức khỏe Thương hiệu &amp; Cảnh báo Bảo hộ Pháp lý HUCE</option>'
    );
    
    // Replace Option 2
    content = content.replace(
        '<option value="page2">02. Lộ Trình Triển Khai &amp; Cơ Chế</option>',
        '<option value="page2">02. Báo cáo 02: Đề xuất Hành động theo Cơ chế Đối tác Truyền thông</option>'
    );
    
    // Replace Option 3
    content = content.replace(
        '<option value="page3">03. Báo Giá Chi Tiết &amp; Đặc Tả</option>',
        '<option value="page3">03. Báo cáo 03: Đề xuất Giải pháp &amp; Bảng báo giá Chi tiết Hệ thống Thương hiệu</option>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated ${file}`);
});
