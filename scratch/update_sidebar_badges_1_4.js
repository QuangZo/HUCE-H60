const fs = require('fs');
const path = require('path');

const files = ['index.html', 'huce_h60_proposal.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    console.log(`Updating sidebar badges in ${file}...`);
    
    const oldMenu = `<span class="nav-item-num">00</span>
                    Tổng Quan
                </li>
                <li class="nav-item" onclick="switchPageView('page1')">
                    <span class="nav-item-num">01</span>
                    Báo cáo 01: Đánh giá sơ bộ Sức khỏe thương hiệu HUCE
                </li>
                <li class="nav-item" onclick="switchPageView('page2')">
                    <span class="nav-item-num">02</span>
                    Báo cáo 02: Đề xuất Hành động &amp; Lộ trình triển khai
                </li>
                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">03</span>
                    Báo cáo 03: Đề xuất Chào giá`;

    const newMenu = `<span class="nav-item-num">01</span>
                    Tổng Quan
                </li>
                <li class="nav-item" onclick="switchPageView('page1')">
                    <span class="nav-item-num">02</span>
                    Báo cáo 01: Đánh giá sơ bộ Sức khỏe thương hiệu HUCE
                </li>
                <li class="nav-item" onclick="switchPageView('page2')">
                    <span class="nav-item-num">03</span>
                    Báo cáo 02: Đề xuất Hành động &amp; Lộ trình triển khai
                </li>
                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">04</span>
                    Báo cáo 03: Đề xuất Chào giá`;

    if (html.includes(oldMenu)) {
        html = html.replace(oldMenu, newMenu);
        console.log(`- Updated ${file} successfully.`);
        fs.writeFileSync(filePath, html, 'utf8');
    } else {
        console.log(`- Target menu not found in ${file}.`);
    }
});
