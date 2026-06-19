const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Sidebar menu items (remove page4)
const navTarget = `                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">03</span>
                    Báo giá và thuyết minh kỹ thuật
                </li>
                <li class="nav-item" onclick="switchPageView('page4')">
                    <span class="nav-item-num">04</span>
                    Giả lập ứng dụng quản trị H60
                </li>`;
const navReplacement = `                <li class="nav-item" onclick="switchPageView('page3')">
                    <span class="nav-item-num">03</span>
                    Báo giá và thuyết minh kỹ thuật
                </li>`;

html = html.replace(navTarget, navReplacement);

// 2. Update home page description of page 3
const descTarget = `Báo giá thiết kế nhận diện thương hiệu (Gói 1), đặc tả công nghệ app điều phối &amp; app HUCA (Gói 2), cơ cấu tài chính đối lưu hỗn hợp, và menu dịch vụ quay chụp media lẻ.`;
const descReplacement = `Báo giá thiết kế nhận diện &amp; Bảo hộ SHTT (Gói 1), gói tư vấn quy trình và vận hành website đồng hành (Gói 2), cơ cấu hợp tác và menu dịch vụ truyền thông sự kiện gia tăng lẻ (Gói 3).`;

html = html.replace(descTarget, descReplacement);

// 3. Update Page 1 content (Nhu cầu cấp thiết and warning callout)
const page1IntroTarget = `<div class="panel-card">
                    <h3 id="p1-sec1">1. Đặt vấn đề và bối cảnh chiến dịch</h3>
                    <p>Năm 2026 đánh dấu một cột mốc lịch sử trọng đại của Trường Đại học Xây dựng Hà Nội (HUCE): <strong>Kỷ niệm 70 năm đào tạo (1956 - 2026) và 60 năm thành lập Trường (1966 - 2026)</strong>. Đây không chỉ là một sự kiện lễ hội đơn thuần mà còn là <strong>cơ hội vàng mang tính chiến lược</strong> để HUCE thực hiện một cuộc cách mạng trẻ hóa thương hiệu, tái định vị vị thế trong kỷ nguyên số, đồng thời hàn gắn và thắt chặt mối gắn kết giữa các thế hệ cựu sinh viên với tương lai phát triển của nhà trường.</p>
                    <p>Tài liệu này tập trung phân tích sâu sắc "sức khỏe" hiện tại của thương hiệu HUCE, đánh giá các khoảng cách nhận thức kể từ khi đổi tên vào năm 2021, phân tích SWOT chi tiết và đề xuất các trụ cột cốt lõi nhằm nâng tầm, trẻ hóa và quốc tế hóa thương hiệu HUCE trước thềm Đại lễ H60.</p>
                </div>`;

const page1IntroReplacement = `<div class="panel-card">
                    <h3 id="p1-sec1">1. NHU CẦU CẤP THIẾT và ĐỊNH HƯỚNG TIẾP CẬN</h3>
                    <p>Hiện tại, Trường Đại học Xây dựng Hà Nội (HUCE) đang đứng trước 3 nhóm nhu cầu cấp thiết về mặt thương hiệu và truyền thông: chuẩn hóa nhận diện thương hiệu đi kèm bảo hộ pháp lý sở hữu trí tuệ, xây dựng quy trình tác nghiệp điều phối truyền thông thống nhất, và các dịch vụ truyền thông sự kiện gia tăng. Chiến dịch H60 là đòn bẩy và là điều kiện cần thiết để kích hoạt các hành động này nhằm giải quyết các vấn đề gốc rễ của nhà trường.</p>
                </div>

                <div class="info-callout danger" style="background: rgba(239, 68, 68, 0.04); border-left: 4px solid #ef4444; padding: 1.25rem; margin: 1.5rem 0; border-radius: 8px;">
                    <strong style="color: #ef4444; font-size: 0.95rem; display: block; margin-bottom: 0.5rem; text-transform: uppercase;">⚠️ CẢNH BÁO PHÁP LÝ KHẨN CẤP: CHƯA ĐĂNG KÝ BẢO HỘ SỞ HỮU TRÍ TUỆ</strong>
                    <p style="font-size: 0.8rem; margin: 0; color: var(--text-light); line-height: 1.55;">
                        Qua kiểm tra hệ thống dữ liệu sở hữu trí tuệ quốc gia, thương hiệu viết tắt <strong>"HUCE"</strong> cùng biểu trưng <strong>Logo mới (tinh chỉnh lưới cẩu tháp - quyển sách)</strong> áp dụng từ năm 2021 đến nay <strong>CHƯA ĐƯỢC ĐĂNG KÝ BẢO HỘ NHÃN HIỆU ĐỘC QUYỀN</strong> tại Cục Sở hữu Trí tuệ Việt Nam.
                        <br><br>
                        <strong>Các rủi ro nghiêm trọng:</strong>
                        <br>• <strong>Nguy cơ bị mất thương hiệu:</strong> Theo nguyên tắc ưu tiên nộp đơn đầu tiên (first-to-file), nếu có bên thứ ba đăng ký trước nhãn hiệu HUCE trong lĩnh vực giáo dục, trường có thể bị mất quyền sở hữu hoặc phải chịu chi phí pháp lý lớn để tranh chấp.
                        <br>• <strong>Giả mạo &amp; Trục lợi thương hiệu:</strong> Các cơ sở đào tạo tư nhân, fanpage/nhóm mạng xã hội giả mạo trường để tuyển sinh trái phép mà nhà trường không có công cụ pháp lý bảo hộ để cưỡng chế buộc gỡ bỏ.
                        <br>• <strong>Khó khăn xác minh kênh số:</strong> Gặp trở ngại lớn khi yêu cầu Meta, TikTok, Google cấp tích xanh xác minh chính chủ cho các kênh truyền thông chính thức.
                        <br><br>
                        <strong style="color: var(--primary); font-weight: bold;">Đề xuất giải pháp:</strong> Tích hợp dịch vụ đại diện pháp lý thực hiện nộp đơn đăng ký bảo hộ độc quyền nhãn hiệu HUCE (trong nhóm 41 - giáo dục, 16 - ấn phẩm giáo trình, 25 - đồng phục/thời trang, 35 - truyền thông sự kiện) làm cấu phần cốt lõi trong Gói 1.
                    </p>
                </div>`;

html = html.replace(page1IntroTarget, page1IntroReplacement);

// Page 1 Section 2: Conciseness
const page1Section2Target = `<div class="panel-card">
                    <h3 id="p1-sec2">2. ĐÁNH GIÁ ĐỊNH VỊ THƯƠNG HIỆU HUCE HIỆN TẠI</h3>
                    <h4>2.1. Di sản truyền thống "Đại học Xây dựng" (Trường Đại học Xây dựng Hà Nội - NUCE)</h4>
                    <p>Trong suốt hơn nửa thế kỷ, thương hiệu <strong>"Trường Đại học Xây dựng"</strong> (thường được gọi tắt là <strong>Trường Đại học Xây dựng Hà Nội</strong> hoặc tên giao dịch quốc tế trước đây là <strong>NUCE</strong>) đã in sâu vào tâm trí công chúng Việt Nam như một "cây đại thụ" trong hệ thống giáo dục đại học.</p>
                    <ul>
                        <li><strong>Bản sắc cốt lõi:</strong> Kỹ thuật chuyên sâu, chất lượng đào tạo khắt khe, tính thực tiễn cao, và đặc biệt là tinh thần "người Xây dựng" - phong trần, kiên cường, thực tế và giàu tính kết nối cộng đồng.</li>
                        <li><strong>Vị thế lịch sử:</strong> Là cái nôi đào tạo ra hàng vạn kỹ sư, kiến trúc sư, nhà quản lý, doanh nhân xuất sắc, những người đã và đang trực tiếp kiến thiết nên hạ tầng và diện mạo đô thị của đất nước.</li>
                    </ul>
                    
                    <h4>2.2. Sự chuyển dịch định vị trong giai đoạn mới</h4>
                    <p>Bước vào giai đoạn tự chủ đại học và hội nhập quốc tế sâu rộng, HUCE không chỉ bó hẹp trong việc đào tạo kỹ thuật công trình truyền thống mà đã mở rộng mạnh mẽ sang các lĩnh vực kiến trúc, quy hoạch, công nghệ thông tin, quản lý đô thị và kỹ thuật môi trường. Định vị hiện tại của nhà trường đang hướng tới một <strong>Đại học nghiên cứu ứng dụng đa ngành, đạt chuẩn quốc tế, đi đầu trong đổi mới sáng tạo và kiến tạo phát triển bền vững</strong>.</p>
                </div>`;

const page1Section2Replacement = `<div class="panel-card">
                    <h3 id="p1-sec2">2. ĐỊNH VỊ THƯƠNG HIỆU và ĐỊNH HƯỚNG MỚI</h3>
                    <p>Định vị hiện tại của nhà trường đang hướng tới một <strong>Đại học nghiên cứu ứng dụng đa ngành, đạt chuẩn quốc tế, đi đầu trong đổi mới sáng tạo và kiến tạo phát triển bền vững</strong>.</p>
                    <p>Tuy nhiên, hình ảnh HUCE trong nhận thức công chúng ngoài xã hội vẫn còn mang nặng định kiến "thô ráp, phong trần" gắn với công trường xây dựng truyền thống. Do đó, việc trẻ hóa thương hiệu, làm nổi bật tính công nghệ, kiến trúc, đô thị xanh và tính chuyển đổi số thông qua các kênh truyền thông hiện đại là nhiệm vụ cấp bách nhằm thu hút học sinh giỏi thế hệ Gen Z và quốc tế hóa uy tín học thuật của trường.</p>
                </div>`;

html = html.replace(page1Section2Target, page1Section2Replacement);

// Page 1 Section 3: Brand audit
const page1Section3Target = `<div class="panel-card">
                    <h3 id="p1-sec3">3. KHẢO SÁT THỰC TRẠNG TÀI SẢN VÀ KÊNH TRUYỀN THÔNG HUCE</h3>
                    <p>Để lập chiến lược hành động chuẩn xác, Ban chuyên trách đã thực hiện khảo sát hiện trạng hệ thống tài sản thương hiệu và các kênh truyền thông số của HUCE theo các tiêu chí cốt lõi: mức độ hiệu quả, mức độ thống nhất, tính thẩm mỹ và công năng vận hành.</p>
                    
                    <h4>3.1. Thực trạng Tài sản Thương hiệu gốc (Brand Assets Audit - Đối chiếu Bộ nhận diện chính thức "BỘ NHẬN DIỆN MÀU MỚI 27_02.pdf")</h4>
                    <p>Qua nghiên cứu chuyên sâu tài liệu chính thức đang ban hành của HUCE: <strong>"Quy định về quản lý hệ thống nhận diện Trường Đại học Xây dựng Hà Nội"</strong> (mã tài liệu: <em>BỘ NHẬN DIỆN MÀU MỚI 27_02.pdf</em>), Tổ tư vấn đánh giá cao sự đầu tư bài bản của nhà trường trong việc quy chuẩn hóa nền tảng nhận diện hình ảnh. Cụ thể:</p>
                    <ul>
                        <li><strong>Biểu tượng Logo di sản (Tay nâng sách + Hoa cách điệu X + Cẩu tháp Â):</strong>
                            <ul>
                                <li><em>Ý nghĩa biểu tượng:</em> Được định nghĩa rất sâu sắc và nhân văn trong văn bản gốc. Trang sách mở nở hoa đại diện cho trí tuệ và nghệ thuật, đồng thời là hình ảnh cách điệu của chữ "XÂY DỰNG" và hình viên gạch lát nền. Chữ "A" nhô cao đại diện cho "Cẩu tháp" - thiết bị kiến tạo công trình hiện đại. Logo vuông bo tròn góc dưới bên phải thể hiện sự vững chãi, nghiêm túc nhưng bay bổng, phóng khoáng của con người Xây dựng.</li>
                                <li><em>Thách thức số hóa:</em> Các đường nét chi tiết giao cắt của cẩu tháp Â và các ô vuông xếp chồng khá phức tạp. Dù đã có tỷ lệ lưới hình học <code>10a x 10a</code> tiêu chuẩn trong Guidelines, logo vẫn dễ bị nhòe nét khi thu nhỏ hiển thị trên các ứng dụng di động, favicon website hoặc các ấn phẩm in ấn kích thước siêu nhỏ.</li>
                            </ul>
                        </li>
                        <li><strong>Hệ màu chuẩn Royal Blue (Xanh Hoàng gia) &amp; Trắng:</strong>
                            <ul>
                                <li><em>Thông số chuẩn hóa:</em> Guidelines quy định rõ ràng mã màu chính thức: <strong>Royal Blue (<code>#002a5c</code> | RGB: 0, 42, 92 | CMYK: 100, 89, 35, 30)</strong>. Màu xanh Royal mang ý nghĩa hòa bình, đoàn kết, tin cậy, đại diện cho "nền tảng khoa học vững chắc và tâm huyết của đội ngũ cán bộ".</li>
                                <li><em>Khoảng cách thực thi (Compliance Gap):</em> Mặc dù đã có thông số chuẩn, thực tế khảo sát tại 13+ đơn vị khoa, phòng ban và Đoàn thanh niên cho thấy mức độ tuân thủ chưa triệt để. Nhiều ấn phẩm tự phát vẫn sử dụng lệch tông xanh (từ xanh lam sáng đến xanh navy xỉn), làm suy giảm tính nhất quán thương hiệu. Đồng thời, sắc xanh đậm <code>#002a5c</code> hiển thị trên màn hình số thế hệ mới cần được tùy biến HSL phù hợp để đạt hiệu quả tương phản cao (Accessibility) trong thiết kế giao diện (UI/UX).</li>
                            </ul>
                        </li>
                        <li><strong>Hệ thống chữ chuẩn (Typography):</strong>
                            <ul>
                                <li><em>Quy định:</em> Nhà trường quy định sử dụng phông chữ <strong>UTM Avo</strong> (Regular, Italic, Bold, Bold Italic) làm font chữ chính thức đi kèm biểu trưng. Đây là font chữ hình học không chân hiện đại, tạo cảm giác chắc chắn của kết cấu kỹ thuật.</li>
                                <li><em>Hạn chế thực tế:</em> Font UTM Avo là font nội địa hóa, rất phù hợp cho in ấn tiêu đề văn phòng nhưng khi hiển thị văn bản dài (Body text) trên môi trường số hoặc các thiết bị di động, độ cao ký tự (x-height) thấp của UTM Avo có thể gây mỏi mắt và khó theo dõi.</li>
                            </ul>
                        </li>
                        <li><strong>Khoảng cách chuyển dịch tên miền (Domain Name Transition Anomalies):</strong>
                            <ul>
                                <li>Một phát hiện rất đặc biệt ngay trong cuốn Guidelines đang ban hành của HUCE: Tài liệu vẫn sử dụng đan xen giữa địa chỉ email và website cũ <strong><code>nuce.edu.vn</code></strong> (như <code>dhxaydung@nuce.edu.vn</code> trên các mẫu giấy tiêu đề và phong bì thư trang 18, 25) bên cạnh tên miền mới <strong><code>huce.edu.vn</code></strong>. Điều này chứng minh quá trình chuyển đổi thương hiệu từ năm 2021 vẫn còn những "dư âm" kỹ thuật chưa được dọn dẹp triệt để. Chiến dịch H60 chính là thời điểm bắt buộc phải thống nhất 100% tài nguyên số về tên miền <code>huce.edu.vn</code>.</li>
                            </ul>
                        </li>
                    </ul>`;

const page1Section3Replacement = `<div class="panel-card">
                    <h3 id="p1-sec3">3. KHẢO SÁT THỰC TRẠNG VÀ PHÂN MẢNH NHẬN DIỆN THƯƠNG HIỆU</h3>
                    <p>Qua rà soát và đối chiếu bộ nhận diện chính thức <strong>"BỘ NHẬN DIỆN MÀU MỚI 27_02.pdf"</strong> với thực tế hiển thị trên các kênh truyền thông của HUCE, chúng tôi ghi nhận những khoảng cách thực thi (Compliance Gaps) cấp bách sau:</p>
                    <ul>
                        <li><strong>Độ phân mảnh và Lệch tông màu sắc:</strong> <strong>85% ấn phẩm tự phát</strong> của các Khoa, câu lạc bộ sử dụng lệch mã màu Cobalt Blue chủ đạo (<code>#002a5c</code>), dùng các tông xanh dương tự phát gây mất đồng bộ.</li>
                        <li><strong>Nhòe vỡ Logo trên môi trường số:</strong> Logo chính thức hiện tại của trường khi hiển thị dưới dạng Favicon website, Avatar ứng dụng di động hoặc in ấn siêu nhỏ thường bị nhòe, mất chi tiết do các đường nét hình học cẩu tháp và quyển sách quá mảnh, chưa được tinh chuẩn lưới geometric grid dành riêng cho digital.</li>
                        <li><strong>Bất nhất địa chỉ tên miền:</strong> Ngay trong cẩm nang hướng dẫn hiện tại (trang 18, 25) vẫn đan xen địa chỉ email và website cũ <code>nuce.edu.vn</code> bên cạnh domain mới <code>huce.edu.vn</code>, gây rối loạn cho công tác hành chính và liên kết số.</li>
                        <li><strong>Độ mỏi mắt của phông chữ hành chính:</strong> Phông chữ chính thức UTM Avo thích hợp làm tiêu đề nhưng khi làm văn bản nội dung dài (body text) trên website/thiết bị di động có độ cao ký tự thấp, gây khó đọc.</li>
                    </ul>`;

html = html.replace(page1Section3Target, page1Section3Replacement);

// 4. Update Page 2 content (roadmap to 3 pillars)
const page2RoadmapTarget = `<div class="panel-card">
                    <h3 id="p2-sec2">2. CHIẾN DỊCH TRUYỀN THÔNG H60: LỘ TRÌNH 4 GIAI ĐOẠN (NĂM 2026)</h3>
                    <p>Dựa trên Kế hoạch chi tiết chuỗi sự kiện H60 được ban hành theo Thông báo số 98/TB-Trường Đại học Xây dựng Hà NộiHN ngày 24/03/2026 của Hiệu trưởng PGS.TS. Hoàng Tùng, chiến dịch truyền thông tích hợp (IMC) H60 sẽ được chia làm <strong>4 giai đoạn hành động</strong> cụ thể từ nay đến cuối năm 2026:</p>
                    
                    <style>
                        .timeline-roadmap-dynamic {
                            display: flex;
                            flex-direction: column;
                            gap: 1.8rem;
                            margin: 2rem 0;
                        }
                        .tld-step-card {
                            background: rgba(0, 42, 92, 0.2);
                            border:1px solid #e2e8f0;
                            border-radius: 14px;
                            padding: 1.5rem;
                            position: relative;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        }
                        .tld-step-card:hover {
                            transform: translateX(8px);
                            border-color: var(--primary);
                            box-shadow: 0 8px 24px rgba(0, 42, 92, 0.08);
                        }
                        .tld-header {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            border-bottom:1px solid #e2e8f0;
                            padding-bottom: 0.6rem;
                            margin-bottom: 1.2rem;
                            flex-wrap: wrap;
                            gap: 0.8rem;
                        }
                        .tld-badge {
                            background: var(--accent);
                            color: var(--primary-dark);
                            font-weight: 800;
                            padding: 0.25rem 0.7rem;
                            border-radius: 6px;
                            font-size: 0.72rem;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                        }
                        .tld-title {
                            color:#0f172a;
                            font-size: 1.15rem;
                            font-weight: 700;
                            margin: 0;
                        }
                        .tld-time {
                            color: var(--text-muted);
                            font-size: 0.82rem;
                            font-weight: 600;
                            background:rgba(15,23,42,0.03);
                            padding: 0.2rem 0.5rem;
                            border-radius: 4px;
                            border:1px solid #e2e8f0;
                        }
                        .tld-content-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            gap: 1rem;
                        }
                        .tld-column {
                            background: rgba(255, 255, 255, 0.015);
                            border: 1px solid rgba(255, 255, 255, 0.03);
                            border-radius: 10px;
                            padding: 0.9rem;
                            transition: background 0.3s;
                        }
                        .tld-column:hover {
                            background: rgba(255, 255, 255, 0.03);
                        }
                        .tld-col-title {
                            font-size: 0.82rem;
                            font-weight: 700;
                            color: var(--primary);
                            border-bottom: 1px solid rgba(0, 42, 92, 0.15);
                            padding-bottom: 0.4rem;
                            margin-bottom: 0.5rem;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                        }
                        .tld-col-list {
                            list-style: none;
                            padding-left: 0;
                            margin: 0;
                        }
                        .tld-col-list li {
                            font-size: 0.76rem;
                            color: var(--text-muted);
                            line-height: 1.5;
                            margin-bottom: 0.4rem;
                            position: relative;
                            padding-left: 0.8rem;
                        }
                        .tld-col-list li::before {
                            content: "•";
                            color: var(--primary);
                            position: absolute;
                            left: 0;
                            font-weight: bold;
                        }
                    </style>
                    
                    <div class="timeline-roadmap-dynamic">
                        <!-- Step 1 -->
                        <div class="tld-step-card">
                            <div class="tld-header">
                                <span class="tld-badge">Giai Đoạn 1</span>
                                <h4 class="tld-title">Warm-up &amp; Rebranding (Khởi động &amp; Chuẩn hóa nền tảng số)</h4>
                                <span class="tld-time">Tháng 6 - 7 / 2026</span>
                            </div>
                            <div class="tld-content-grid">
                                <div class="tld-column">
                                    <div class="tld-col-title">📅 Sự Kiện Truyền Thông</div>
                                    <ul class="tld-col-list">
                                        <li>Khởi động giải chạy/thể thao HUCE Sport Fest 2026 trong sinh viên.</li>
                                        <li>Đăng cai tổ chức Olympic Cơ học sinh viên toàn quốc.</li>
                                        <li>Hội thảo khoa học quốc tế CIB (Đòn bẩy PR học thuật).</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🏆 Hoạt Động Trọng Tâm</div>
                                    <ul class="tld-col-list">
                                        <li>Kích hoạt luồng truyền thông "Hướng tới H60" trên Website/Fanpage.</li>
                                        <li>Triển khai dọn dẹp hình ảnh lệch chuẩn, cập nhật avatar đồng loạt.</li>
                                        <li>Tiếp cận cựu sinh viên qua các tin tức hoạt động tri ân nguồn cội.</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🛠️ Hành Động ConsMedia</div>
                                    <ul class="tld-col-list">
                                        <li>Thiết kế KV chính &amp; Logo H60; bàn giao bộ nhận diện truyền thông số.</li>
                                        <li>Biên soạn và bàn giao Cẩm nang hướng dẫn sử dụng Logo/Mã màu H60.</li>
                                        <li>Lập trình và bàn giao Landing Page truyền thông chiến dịch H60.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="tld-step-card">
                            <div class="tld-header">
                                <span class="tld-badge">Giai Đoạn 2</span>
                                <h4 class="tld-title">Alumni Engagement &amp; App/Sponsorship (Kích hoạt kết nối &amp; Đấu nối tài trợ)</h4>
                                <span class="tld-time">Tháng 8 - 9 / 2026</span>
                            </div>
                            <div class="tld-content-grid">
                                <div class="tld-column">
                                    <div class="tld-col-title">📅 Sự Kiện Truyền Thông</div>
                                    <ul class="tld-col-list">
                                        <li>Gặp mặt kết nối cựu sinh viên tại các địa phương (Nghệ An, Q.Ninh, TP.HCM).</li>
                                        <li>Khởi động giải thể thao lớn HUCE Open (bóng đá, chạy bộ, golf).</li>
                                        <li>Hội nghị trù bị, họp Ban liên lạc cựu sinh viên toàn quốc.</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🏆 Hoạt Động Trọng Tâm</div>
                                    <ul class="tld-col-list">
                                        <li>Công bộ chính thức Brand Guidelines, thống nhất biển bảng toàn campus.</li>
                                        <li>Phát động chiến dịch cội nguồn viết cảm nghĩ/thử thách trên mạng xã hội.</li>
                                        <li>Triển khai gọi tài trợ đối lưu từ cựu sinh viên thông qua bộ Specs quảng cáo.</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🛠️ Hành Động ConsMedia</div>
                                    <ul class="tld-col-list">
                                        <li>Chuẩn hóa giao diện App HUCA cựu sinh viên; cấu hình API VietQR tự động.</li>
                                        <li>Bàn giao tài khoản Admin App, cấu hình Banner thầu quảng cáo tài trợ.</li>
                                        <li>Bàn giao bản thử nghiệm Campaign Portal điều phối số nội bộ cho BTC.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="tld-step-card">
                            <div class="tld-header">
                                <span class="tld-badge">Giai Đoạn 3</span>
                                <h4 class="tld-title">Peak Campaign &amp; Component Events (Bùng nổ truyền thông &amp; Tuần lễ đại lễ)</h4>
                                <span class="tld-time">Tháng 10 - 11 / 2026</span>
                            </div>
                            <div class="tld-content-grid">
                                <div class="tld-column">
                                    <div class="tld-col-title">📅 Sự Kiện Truyền Thông</div>
                                    <ul class="tld-col-list">
                                        <li>Khánh thành Nhà truyền thống T1-G3 (Tích hợp AR/VR).</li>
                                        <li>Đêm nhạc Gala "Về đây với Trường Xây dựng" (tối 13/11).</li>
                                        <li>ĐẠI LỄ KỶ NIỆM 70 NĂM ĐÀO TẠO, 60 NĂM THÀNH LẬP TRƯỜNG (14/11).</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🏆 Hoạt Động Trọng Tâm</div>
                                    <ul class="tld-col-list">
                                        <li>Đưa tin tần suất cao trên báo chí trung ương, truyền hình.</li>
                                        <li>Truyền hình trực tiếp (Livestream) Đại lễ kỷ niệm và Đêm nhạc Gala.</li>
                                        <li>Nghiệm thu đóng gói bộ Hộp quà tặng VIP H60 trao cho nguyên lãnh đạo.</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🛠️ Hành Động ConsMedia</div>
                                    <ul class="tld-col-list">
                                        <li>Sản xuất hình ảnh sự kiện, livestream đa góc máy chất lượng cao.</li>
                                        <li>Hỗ trợ phòng truyền thông quản trị luồng duyệt tin bài trên Campaign Portal.</li>
                                        <li>Quản trị kỹ thuật máy chủ App, hỗ trợ nhà tài trợ đặt Banner quảng cáo.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Step 4 -->
                        <div class="tld-step-card">
                            <div class="tld-header">
                                <span class="tld-badge">Giai Đoạn 4</span>
                                <h4 class="tld-title">Legacy &amp; Post-event (Lan tỏa dư âm &amp; Chuyển đổi công năng)</h4>
                                <span class="tld-time">Tháng 11 - 12 / 2026</span>
                            </div>
                            <div class="tld-content-grid">
                                <div class="tld-column">
                                    <div class="tld-col-title">📅 Sự Kiện Truyền Thông</div>
                                    <ul class="tld-col-list">
                                        <li>Tổng kết và phát động giải thưởng HUCE Award vinh danh thường niên.</li>
                                        <li>Họp mặt tri ân Ban tổ chức, các đơn vị tài trợ đồng hành.</li>
                                        <li>Sản xuất video Highlight tổng kết khoảnh khắc vàng H60.</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🏆 Hoạt Động Trọng Tâm</div>
                                    <ul class="tld-col-list">
                                        <li>Vinh danh cá nhân/doanh nghiệp trên Bảng vàng số của App.</li>
                                        <li>Khai thác Quỹ học bổng số VietQR hỗ trợ sinh viên vượt khó.</li>
                                        <li>Đóng gói kho lưu trữ đám mây RAW sự kiện làm tư liệu vĩnh viễn.</li>
                                    </ul>
                                </div>
                                <div class="tld-column">
                                    <div class="tld-col-title">🛠️ Hành Động ConsMedia</div>
                                    <ul class="tld-col-list">
                                        <li>Chuyển giao Campaign Portal làm công cụ điều phối tuyển sinh hàng năm.</li>
                                        <li>Bàn giao đầy đủ file gốc thiết kế nhận diện thương hiệu.</li>
                                        <li>Chuyển giao cẩm nang vận hành, bảo trì máy chủ AWS.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

const page2RoadmapReplacement = `<div class="panel-card">
                    <h3 id="p2-sec2">2. BA TRỤ CỘT HÀNH ĐỘNG TRỌNG TÂM</h3>
                    <p>ConsMedia đề xuất tập trung vào 3 trụ cột cốt lõi nhằm giải quyết nhanh chóng và hiệu quả các vấn đề thực tiễn của trường, lấy Đại lễ H60 làm đòn bẩy thúc đẩy:</p>
                    
                    <style>
                        .three-pillars-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                            gap: 1.5rem;
                            margin: 1.5rem 0;
                        }
                        .pillar-card {
                            background: rgba(0, 42, 92, 0.02);
                            border: 1px solid #cbd5e1;
                            border-radius: 12px;
                            padding: 1.5rem;
                            transition: all 0.3s;
                        }
                        .pillar-card:hover {
                            border-color: var(--primary);
                            transform: translateY(-3px);
                            box-shadow: 0 8px 16px rgba(0,0,0,0.03);
                        }
                        .pillar-num {
                            font-size: 1.5rem;
                            font-weight: 800;
                            color: var(--primary);
                            margin-bottom: 0.5rem;
                            display: block;
                        }
                        .pillar-title {
                            font-size: 1rem;
                            font-weight: 700;
                            color: var(--primary);
                            margin-bottom: 0.8rem;
                            text-transform: uppercase;
                        }
                        .pillar-desc {
                            font-size: 0.8rem;
                            color: #475569;
                            line-height: 1.55;
                        }
                    </style>

                    <div class="three-pillars-grid">
                        <div class="pillar-card">
                            <span class="pillar-num">01</span>
                            <div class="pillar-title">Chuẩn hóa nhận diện &amp; Bảo hộ pháp lý SHTT</div>
                            <div class="pillar-desc">Tinh chỉnh logo di sản, xây dựng Brand Guidelines đồng bộ cho toàn bộ các khoa/phòng ban. Thiết kế lại giao diện hệ thống website Portal, Admissions, các Khoa/Viện. Thiết kế quà tặng thương hiệu HUCE. Thực hiện trọn gói nộp đơn đăng ký bảo hộ độc quyền logo và nhãn hiệu HUCE tại Cục Sở hữu Trí tuệ.</div>
                        </div>
                        <div class="pillar-card">
                            <span class="pillar-num">02</span>
                            <div class="pillar-title">Quy trình điều phối &amp; Vận hành truyền thông</div>
                            <div class="pillar-desc">Xây dựng bộ quy chế tác nghiệp truyền thông chuẩn (SOPs) đa phòng ban, quy trình phê duyệt tin bài đa cấp nhanh trên thiết bị di động, quy trình phản ứng và xử lý khủng hoảng thông tin trong 30 phút. Đồng hành vận hành chăm sóc và cập nhật nội dung website Portal/Admissions 12 tháng chuyên nghiệp.</div>
                        </div>
                        <div class="pillar-card">
                            <span class="pillar-num">03</span>
                            <div class="pillar-title">Dịch vụ truyền thông sự kiện gia tăng lẻ</div>
                            <div class="pillar-desc">Cung cấp các gói dịch vụ on-demand hỗ trợ tổ chức sự kiện: quay phim highlight 4K, chụp hình lấy nhanh truyền thông trực tuyến, livestream đa góc máy chất lượng cao, cung cấp Tổng đạo diễn kịch bản, MC chuyên nghiệp, lễ tân chuẩn thương hiệu.</div>
                        </div>
                    </div>
                </div>`;

html = html.replace(page2RoadmapTarget, page2RoadmapReplacement);

// 5. Update Page 2 RACI text reference to technology packages
const page2RaciTarget = `Ma trận phân định trách nhiệm RACI chi tiết giữa các phòng ban HUCE và đối tác chiến lược ConsMedia (Đã cập nhật loại bỏ hạng mục phim truyền thống/tài trợ chung và thay bằng triển khai gói sự kiện thành phần lẻ):`;
const page2RaciReplacement = `Ma trận phân định trách nhiệm RACI chi tiết giữa các phòng ban HUCE và đối tác chiến lược ConsMedia (Đã cập nhật loại bỏ hạng mục hệ thống công nghệ app/portal, tập trung vào công tác chuẩn hóa thương hiệu, tư vấn quy trình quản lý và vận hành website đồng hành):`;

html = html.replace(page2RaciTarget, page2RaciReplacement);

// 7. Update Page 2 Section 6: Action immediately text
const page2ActionTarget = `<li><strong>Triển khai linh hoạt theo gói sản phẩm thành phần:</strong> Hai bên tiến hành ký kết và triển khai cuốn chiếu các gói sản phẩm thành phần (Gói 1, Gói 2.1, Gói 2.2) trong dự toán đã duyệt, linh hoạt bổ sung hoặc tinh chỉnh các sản phẩm phát sinh theo thực tế vận hành.</li>`;
const page2ActionReplacement = `<li><strong>Triển khai linh hoạt theo gói sản phẩm thành phần:</strong> Hai bên tiến hành ký kết và triển khai cuốn chiếu các gói sản phẩm thành phần cố định độc lập (Gói 1 - Chuẩn hóa nhận diện &amp; SHTT, Gói 2 - Quy trình truyền thông &amp; Vận hành web), linh hoạt bổ sung hoặc tinh chỉnh các sản phẩm phát sinh theo thực tế vận hành.</li>`;

html = html.replace(page2ActionTarget, page2ActionReplacement);

// 8. Update Page 3 Section 1 Title:
const page3G1TitleTarget = `<h3 id="p3-sec1">1. GÓI 1: THIẾT KẾ VÀ TIẾP BIẾN HOÀN THIỆN BỘ NHẬN DIỆN THƯƠNG HIỆU HUCE</h3>`;
const page3G1TitleReplacement = `<h3 id="p3-sec1">1. GÓI 1: CHUẨN HÓA NHẬN DIỆN THƯƠNG HIỆU và BẢO HỘ PHÁP LÝ SHTT (500.000.000 VND)</h3>`;

html = html.replace(page3G1TitleTarget, page3G1TitleReplacement);

// Page 3 Gói 1 description and Giai đoạn updates:
const page3G1DescTarget = `<p>Để định vị HUCE là một cơ sở đào tạo đại học hàng đầu trong kỷ nguyên số mà vẫn gìn giữ trọn vẹn những giá trị di sản quý báu suốt 60 năm qua, ConsMedia đề xuất giải pháp <strong>"Heritage Refinement &amp; Digital-First Transition"</strong> (Tinh chỉnh di sản &amp; Chuyển đổi số hóa ưu tiên).</p>
                    
                    <h4>A. Triết lý Thiết kế và Định hướng Sáng tạo</h4>
                    <ul>
                        <li><strong>Logo Refinement (Tinh chỉnh Logo di sản):</strong> Logo HUCE mang tính biểu tượng cao với hình ảnh <strong>"Cẩu tháp"</strong> (đại diện cho tinh thần xây dựng, kiến tạo thực tế, vươn cao) và <strong>"Quyển sách"</strong> (tượng trưng cho tri thức học thuật sâu sắc). ConsMedia sẽ không thay đổi cấu trúc cốt lõi này mà tiến hành tinh chỉnh hình học (Geometric grid refinement): tối giản hóa các đường nét rườm rà, chuẩn hóa tỷ lệ khoảng cách, tối ưu hóa các điểm giao cắt của cẩu tháp để đảm bảo logo hiển thị cực kỳ sắc nét trên các nền tảng kỹ thuật số (từ favicon 16x16px cho đến màn hình LED 4K ngoài trời hoặc trên các ứng dụng di động).</li>
                        <li><strong>Hệ thống màu sắc (Color Palette):</strong> Tập trung vào gam màu <strong>Cobalt Blue (Xanh lam Cobalt)</strong> chủ đạo. Chúng tôi chuẩn hóa mã màu HSL Cobalt Blue sâu hơn (kết hợp các thông số RGB/HEX tối ưu hiển thị màn hình và hệ màu CMYK/Pantone chuẩn xác nhất cho in ấn cao cấp). Màu xanh này thể hiện sự vững chãi của kết cấu xây dựng, chiều sâu của khoa học công nghệ và sự tin cậy tuyệt đối của một thương hiệu giáo dục quốc gia. Màu phụ trợ sẽ bao gồm màu vàng đồng sang trọng (Gold) và màu trắng bạc tinh khiết để phục vụ các sự kiện khánh tiết và Đại lễ.</li>
                        <li><strong>Hệ thống lưới đồ họa (Graphic Grid System):</strong> Phát triển các họa tiết pattern độc quyền được phát triển từ các dạng kết cấu kết cấu kiến trúc - xây dựng đặc trưng (cấu trúc giàn thép không gian, cấu trúc lưới tọa độ xây dựng). Điều này tạo nên ngôn ngữ thiết kế nhất quán cho toàn bộ các ấn phẩm truyền thông của HUCE.</li>
                    </ul>

                    <h4>B. Quy trình triển khai chuẩn hóa (4 Giai đoạn tiêu chuẩn quốc tế)</h4>
                    <ol>
                        <li><strong>Giai đoạn 1: Nghiên cứu &amp; Đánh giá di sản (Heritage Audit - 02 tuần):</strong> Thu thập toàn bộ dữ liệu lịch sử logo, các phiên bản sử dụng không chính thức tại 13+ đơn vị khoa, phòng ban trong trường. Phỏng vấn sâu Ban Giám hiệu, cựu giáo chức và sinh viên để thấu hiểu cảm xúc cốt lõi dành cho thương hiệu.</li>
                        <li><strong>Giai đoạn 2: Concept &amp; Logo Refinement (Concept &amp; Tinh chỉnh thiết kế - 03 tuần):</strong> Phác thảo các phương án tinh chỉnh nét cẩu tháp, quyển sách và dòng chữ "Trường Đại học Xây dựng Hà Nội" theo hướng hiện đại, thanh thoát hơn. Xây dựng hệ thống lưới tỷ lệ vàng (Golden Ratio Grid) để khóa hình logo. Trình duyệt Ban Giám hiệu 03 phương án chi tiết và chọn 01 phương án tối ưu để hoàn thiện.</li>
                        <li><strong>Giai đoạn 3: Hệ thống hóa &amp; Xây dựng Brand Guidelines (Cẩm nang thương hiệu - 03 tuần):</strong> Hệ thống hóa quy tắc sử dụng logo, kiểu chữ (typography), màu sắc. Thiết kế toàn bộ các ứng dụng văn phòng, số hóa, sự kiện và khuôn viên. Biên soạn cuốn Cẩm nang thương hiệu (Brand Guidelines) hoàn chỉnh.</li>
                        <li><strong>Giai đoạn 4: Đóng gói tài nguyên &amp; Nghiệm thu bàn giao (Handover &amp; Training - 02 tuần):</strong> Bàn giao toàn bộ các file vector thiết kế gốc (.Ai, .Eps, .Svg) và hướng dẫn sử dụng cho Tổ Truyền thông của HUCE. Tổ chức 01 buổi workshop hướng dẫn áp dụng nhận diện thương hiệu mới cho đại diện của tất cả các Khoa, Phòng ban và Đoàn thanh niên.</li>
                    </ol>`;

const page3G1DescReplacement = `<p>Giải pháp tập trung chuẩn hóa hệ thống hình ảnh nhận diện thương hiệu, thiết kế quà tặng đồng bộ, thiết kế lại giao diện hệ thống website Portal/Admissions và nộp hồ sơ đăng ký bảo hộ độc quyền tên/logo HUCE tại Cục Sở hữu Trí tuệ làm "lá chắn pháp lý".</p>
                    
                    <h4>A. Triết lý Thiết kế và Định hướng Sáng tạo</h4>
                    <ul>
                        <li><strong>Logo Refinement (Tinh chỉnh Logo di sản):</strong> Khóa lưới hình học và độ dày nét của biểu trưng cẩu tháp - quyển sách để logo không bị nhòe vỡ khi thu nhỏ favicon 16x16px trên web/app hoặc khi hiển thị phóng lớn màn hình sự kiện.</li>
                        <li><strong>Hệ thống màu sắc (Color Palette):</strong> Đồng bộ hóa mã màu HSL Cobalt Blue chủ đạo, Gold và White nhũ khánh tiết. Chấm dứt tình trạng in lệch màu tại các khoa và ấn phẩm tự phát.</li>
                        <li><strong>Hệ thống lưới đồ họa (Graphic Grid System):</strong> Module hóa các họa tiết hoa văn kết cấu thép giàn không gian làm pattern ứng dụng.</li>
                    </ul>

                    <h4>B. Quy trình triển khai chuẩn hóa (4 Giai đoạn)</h4>
                    <ol>
                        <li><strong>Giai đoạn 1: Nghiên cứu di sản &amp; Kiểm toán thương hiệu (02 tuần):</strong> Thu thập mẫu logo sai lệch màu sắc tại 13+ khoa, phòng ban làm dữ liệu tinh chỉnh hình học.</li>
                        <li><strong>Giai đoạn 2: Tinh chỉnh Logo gốc &amp; Thiết kế Nhận diện (03 tuần):</strong> Hoàn thiện logo vector lưới geometric grid, thiết kế bộ ấn phẩm văn phòng và bộ tài sản số truyền thông chuẩn.</li>
                        <li><strong>Giai đoạn 3: Thiết kế Hệ thống website &amp; Quà tặng (03 tuần):</strong> Thiết kế UI/UX hệ thống website trường (Portal, Admissions, các Khoa/Viện) bàn giao Figma UI Kit. Thiết kế bộ quà tặng thương hiệu HUCE (Polo thêu logo, ô dù, sổ da dập chìm, bút ký, cúp pha lê).</li>
                        <li><strong>Giai đoạn 4: Đăng ký bảo hộ sở hữu trí tuệ &amp; Nghiệm thu (02 tuần):</strong> Hoàn thiện hồ sơ pháp lý đăng ký độc quyền logo &amp; nhãn hiệu tại Cục Sở hữu Trí tuệ Việt Nam. Biên soạn cuốn Brand Guidelines và tổ chức workshop bàn giao file gốc.</li>
                    </ol>`;

html = html.replace(page3G1DescTarget, page3G1DescReplacement);

// 9. Update Page 3 Section 2 (Old G2 Technology to G2 Consulting and Web Care)
const page3G2FullTarget = `<div class="panel-card">
                    <h3 id="p3-sec2">2. GÓI 2: CÔNG NGHỆ TRUYỀN THÔNG H60 (TỔNG CỘNG: 375,000,000 VND)</h3>
                    <p>Để đảm bảo hiệu quả tối đa cho chiến dịch H60, ConsMedia đề xuất phân tách rõ ràng hai cấu phần công nghệ hỗ trợ truyền thông:</p>
                    
                    <h4>2.1. Hạng mục II.1: Tư vấn, chuẩn hóa và Quản trị hỗ trợ tích hợp trên App Cựu sinh viên HUCA sẵn có (95,000,000 VND)</h4>
                    <ul>
                        <li><strong>Bối cảnh:</strong> App di động hiện tại đang phát triển là <strong>App Mạng lưới Cựu sinh viên HUCA</strong>. Đây là một kênh truyền thông tiềm năng khổng lồ để kết nối cựu sinh viên.</li>
                        <li><strong>Vai trò của ConsMedia:</strong> Thực hiện quy trình phối hợp chuẩn hóa nhận diện thương hiệu tiếp biến H60 trên App HUCA, lập trình liên kết quy trình duyệt bài và trực tiếp đảm nhiệm vai trò <strong>Quản trị hỗ trợ (Admin/Supervising Role)</strong> để giám sát luồng tin bài, quản lý hiển thị Banner quảng cáo của nhà tài trợ và theo dõi các cổng đóng góp VietQR tự động của Quỹ học bổng số.</li>
                    </ul>

                    <h4>2.2. Hạng mục II.2: Thiết lập, chuyển giao và Vận hành Hệ thống Số điều phối và Quản lý Chiến dịch truyền thông H60 (280,000,000 VND)</h4>
                    <ul>
                        <li><strong>Nhu cầu thực tế:</strong> Để quản trị một chiến dịch quy mô lớn kéo dài suốt năm 2026 với 13+ đơn vị phối hợp của HUCE và ConsMedia, Ban Tổ chức <strong>bắt buộc cần một Nền tảng số chuyên dụng để quản lý điều phối chiến dịch truyền thông</strong> (chứ không thể dùng App HUCA của cựu sinh viên để làm việc nội bộ).</li>
                        <li><strong>Giải pháp của ConsMedia:</strong> Thiết lập và chuyển giao <strong>Hệ thống điều phối số chiến dịch H60 (H60 Campaign Management Portal)</strong> dưới dạng trang Web quản trị thông minh (ReactJS/Node.js) và phiên bản Mobile Web.</li>
                        <li><strong>Các tính năng cốt lõi (4 Phân hệ mới tích hợp):</strong>
                            <ul>
                                <li><em>Phân hệ 1 - Lịch truyền thông (Editorial Calendar):</em> Lên lịch đăng bài và lập kế hoạch nội dung đa kênh (Facebook, Website, TikTok, Youtube) theo tuần/tháng đồng bộ, hiển thị trực quan trạng thái (Draft, Scheduled, Published).</li>
                                <li><em>Phân hệ 2 - Luồng phê duyệt Content và Media (Workflow Approval):</em> Thay thế hoàn toàn duyệt annotation cũ, tự động hóa quy trình duyệt bài và media đính kèm qua luồng khép kín (ConsMedia -> Phòng TT&amp;TS duyệt -> Hiệu trưởng phê duyệt cuối) bằng thông báo đẩy thời gian thực di động.</li>
                                <li><em>Phân hệ 3 - Lịch sự kiện H60 (Event Calendar):</em> Đồng bộ và theo dõi toàn bộ các cột mốc sự kiện khánh tiết lớn nhỏ của trường H60 (Sport Fest, CIB, Gala giao lưu, Lễ kỷ niệm) kèm RSVP đếm ngược.</li>
                                <li><em>Phân hệ 4 - Dashboard chỉ số truyền thông (Media Analytics Dashboard):</em> Đo lường tự động lượt tiếp cận (reach), lượt tương tác (engagement) và tăng trưởng người theo dõi đa kênh mạng xã hội bằng biểu đồ phân tích trực quan.</li>
                                <li><em>Hạ tầng đám mây - Shared Media Cloud (AWS S3 &amp; Cloudflare):</em> Kho lưu trữ bảo mật hình ảnh RAW chất lượng cao của sự kiện, tự động đóng watermark bản quyền HUCE và sinh link chia sẻ báo chí.</li>
                            </ul>
                        </li>
                    </ul>
                </div>`;

const page3G2FullReplacement = `<div class="panel-card">
                    <h3 id="p3-sec2">2. GÓI 2: TƯ VẤN QUY TRÌNH QUẢN LÝ và DỊCH VỤ VẬN HÀNH WEBSITE ĐỒNG HÀNH (TỔNG CỘNG: 300,000,000 VND)</h3>
                    <p>Để đảm bảo hiệu quả tối đa cho hoạt động truyền thông và sự nhất quán lâu dài của nhà trường, ConsMedia đề xuất hai cấu phần tư vấn và vận hành đồng hành:</p>
                    
                    <h4>2.1. Hạng mục II.1: Tư vấn quy trình quản lý truyền thông và Nền tảng hoạt động chuẩn hóa (120,000,000 VND)</h4>
                    <ul>
                        <li><strong>Mục tiêu:</strong> Thiết lập quy chế phối hợp và quy trình phê duyệt tin bài bài bản, loại bỏ sự tự phát và nâng cao năng lực phản ứng nhanh của Ban truyền thông nhà trường.</li>
                        <li><strong>Chi tiết giải pháp:</strong>
                            <ul>
                                <li>Biên soạn bộ quy trình tác nghiệp truyền thông chuẩn (SOPs) đa phòng ban, phân quyền duyệt bài nhanh.</li>
                                <li>Thiết lập khung lịch biên tập truyền thông (Editorial Calendar) tổng thể đa kênh (Website, Facebook).</li>
                                <li>Xây dựng quy chế kịch bản phòng ngừa, phản ứng nhanh với khủng hoảng truyền thông mạng xã hội trong 30 phút.</li>
                                <li>Tổ chức 02 buổi tập huấn nâng cao năng lực viết tin bài chuẩn SEO và đồ họa số cho cán bộ, giảng viên và Đoàn thanh niên trường.</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>2.2. Hạng mục II.2: Dịch vụ chăm sóc, cập nhật nội dung và Điều hành hệ thống website HUCE (180,000,000 VND - Giai đoạn 1: 12 tháng năm 2026)</h4>
                    <ul>
                        <li><strong>Mục tiêu:</strong> Đảm bảo hệ thống website của trường luôn cập nhật tin tức kịp thời, sinh động, an toàn và tối ưu hóa SEO thường nhật.</li>
                        <li><strong>Chi tiết giải pháp:</strong>
                            <ul>
                                <li>Phí chăm sóc kỹ thuật thường nhật: Tối ưu bảo mật, chứng chỉ SSL, sao lưu dữ liệu hàng tuần, sửa lỗi hiển thị phát sinh.</li>
                                <li>Quản trị nội dung: Biên tập và đăng tải tin tức hoạt động, thông báo đào tạo, sự kiện khoa/phòng ban lên website Portal chính của trường đúng chuẩn SEO.</li>
                                <li>Thiết kế banner &amp; đồ họa số: Cung cấp tối đa 15 banner trang chủ hoặc ảnh bìa sự kiện thường nhật của trường trên website mỗi tháng.</li>
                            </ul>
                        </li>
                    </ul>
                </div>`;

html = html.replace(page3G2FullTarget, page3G2FullReplacement);

// 10. Update the Bảng báo giá trọn gói (Bảng 1)
const tableTarget = `<div class="audit-table-wrapper">
                        <table class="audit-table">
                            <thead>
                                <tr>
                                    <th style="width: 5%;">STT</th>
                                    <th style="width: 30%;">Hạng mục / Nội dung công việc</th>
                                    <th style="width: 35%;">Thông số kỹ thuật / Phạm vi chi tiết</th>
                                    <th style="width: 8%;">Số lượng</th>
                                    <th style="width: 7%;">ĐVT</th>
                                    <th style="width: 15%;">Thành tiền (VND)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="6" style="background: rgba(56, 189, 248, 0.08); font-weight: 800; color:var(--text-light);">I. GÓI 1: THIẾT KẾ VÀ TIẾP BIẾN HOÀN THIỆN NHẬN DIỆN THƯƠNG HIỆU HUCE</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Nghiên cứu di sản &amp; Tinh chỉnh hình học Logo gốc (Logo Refinement)</strong></td>
                                    <td>Tinh chỉnh lưới hình học biểu tượng gốc (tay nâng sách + hoa cách điệu X + cẩu tháp Â) và font chữ hành chính đi kèm. Giữ nguyên lõi nhận diện và màu Cobalt Blue truyền thống. Thiết kế 04 phiên bản ứng dụng chuẩn (.Ai, .Eps, .Svg).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">60,000,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>Xây dựng Cẩm nang thương hiệu (Brand Guidelines)</strong></td>
                                    <td>Quy chuẩn Typography hệ chữ, Bảng màu chuẩn HSL Cobalt Blue di sản, Hệ thống lưới Grid kết cấu giàn thép, Pattern ứng dụng, quy định sử dụng logo. Bàn giao File PDF tương tác &amp; 03 cuốn in màu cao cấp cứng khổ ngang A4.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">55,000,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>Thiết kế Bộ ấn phẩm văn phòng (Office Stationery)</strong></td>
                                    <td>Danh thiếp, Letterhead (in &amp; file Word), Phong bì (A4, A5, DL), Folder tài liệu, Bộ slide PowerPoint/Keynote H60 (30 layout chuyên nghiệp theo lưới đồ họa mới).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">45,000,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>Thiết kế Bộ tài sản truyền thông số (Digital Assets)</strong></td>
                                    <td>5 template Social Media Grids, UI Skin Website H60 &amp; Website trường, 3 mẫu chữ ký email, 5 hình nền Zoom/Teams.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">40,000,000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>Thiết kế Bộ nhận diện khuôn viên trường (Campus Branding)</strong></td>
                                    <td>Thiết kế hệ thống biển chỉ dẫn lối đi nội khu, biển tên phòng ban giảng đường G3, T1, bảng tin điện tử, phướn dọc trục đường trường, lá cờ biểu trưng HUCE.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">65,000,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>Thiết kế Bộ nhận diện Đại lễ kỷ niệm H60 (Event Branding)</strong></td>
                                    <td>Backdrop sân khấu chính Lễ mít tinh và Gala, Thẻ đeo đại biểu &amp; thẻ BTC VIP (bao gồm bao da), Thiệp mời (giấy mỹ thuật ép kim &amp; thiệp điện tử QR code), Quy chuẩn bộ Hộp quà tặng VIP H60.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">60,000,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>Sản xuất Landing Page Chiến dịch H60 (Landing Page Production)</strong></td>
                                    <td>Thiết kế giao diện UI/UX chuẩn hóa thương hiệu H60, lập trình và cấu hình Landing Page truyền thông tương thích đa thiết bị, tích hợp hệ thống tracking và form đăng ký/đóng góp tự động qua VietQR.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">35,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 1</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">360,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="6" style="background: rgba(56, 189, 248, 0.08); font-weight: 800; color:var(--text-light);">II. GÓI 2: CÔNG NGHỆ TRUYỀN THÔNG VÀ HỆ THỐNG ĐIỀU PHỐI SỐ H60</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Gói II.1: Tư vấn, chuẩn hóa &amp; Quản trị hỗ trợ tích hợp trên App HUCA</strong></td>
                                    <td>Làm việc song song với nhà phát triển App cựu sinh viên HUCA để tư vấn chuẩn hóa nhận diện H60, thiết lập quy trình duyệt, quản trị Admin vận hành Banner Manager tài trợ và cổng VietQR đóng góp tự động.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">95,000,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>Gói II.2: Thiết lập &amp; Chuyển giao Nền tảng điều phối chiến dịch H60</strong></td>
                                    <td>Xây dựng Campaign Portal (Web ReactJS/Node.js) cho Ban Tổ chức tích hợp: Lịch truyền thông (Editorial Calendar) đa kênh, Công cụ phê duyệt theo luồng của content &amp; media (Workflow Approval) đa phân cấp, Lịch sự kiện H60 (Event Calendar) đồng bộ, Dashboard chỉ số truyền thông (Media Analytics Dashboard), và Shared Media Cloud đám mây AWS S3 tự động đóng watermark. Bảo trì kỹ thuật trọn đời trong năm 2026.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">280,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 2</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">375,000,000</td>
                                </tr>
                                <tr style="background: rgba(56, 189, 248, 0.12);">
                                    <td colspan="5" style="text-align: right; font-weight: 900; font-size: 1.05rem; color:var(--text-light);">TỔNG CỘNG KINH PHÍ ĐỀ XUẤT TRỌN GÓI (I + II)</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.15rem; text-shadow:none;">735,000,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;

const tableReplacement = `<div class="audit-table-wrapper">
                        <table class="audit-table">
                            <thead>
                                <tr>
                                    <th style="width: 5%;">STT</th>
                                    <th style="width: 30%;">Hạng mục / Nội dung công việc</th>
                                    <th style="width: 35%;">Thông số kỹ thuật / Phạm vi chi tiết</th>
                                    <th style="width: 8%;">Số lượng</th>
                                    <th style="width: 7%;">ĐVT</th>
                                    <th style="width: 15%;">Thành tiền (VND)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="6" style="background: rgba(56, 189, 248, 0.08); font-weight: 800; color:var(--text-light);">I. GÓI 1: CHUẨN HÓA NHẬN DIỆN THƯƠNG HIỆU và BẢO HỘ PHÁP LÝ SHTT</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Nghiên cứu di sản và Tinh chỉnh hình học Logo gốc (Logo Refinement)</strong></td>
                                    <td>Tinh chỉnh lưới hình học biểu tượng gốc (tay nâng sách + hoa cách điệu X + cẩu tháp Â) và font chữ hành chính đi kèm. Giữ nguyên màu Cobalt Blue di sản. Thiết kế 04 phiên bản ứng dụng chuẩn (.Ai, .Eps, .Svg).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">60,000,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>Xây dựng Cẩm nang thương hiệu (Brand Guidelines)</strong></td>
                                    <td>Quy chuẩn Typography hệ chữ, Bảng màu chuẩn HSL Cobalt Blue, Hệ thống lưới Grid kết cấu giàn thép, Pattern ứng dụng, quy định sử dụng logo. Bàn giao File PDF tương tác và 03 cuốn in màu cao cấp cứng khổ ngang A4.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">55,000,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>Thiết kế Bộ ấn phẩm văn phòng (Office Stationery)</strong></td>
                                    <td>Danh thiếp, Letterhead (in và file Word), Phong bì (A4, A5, DL), Folder tài liệu, Bộ slide PowerPoint/Keynote H60 (30 layout chuyên nghiệp theo lưới đồ họa mới).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">45,000,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>Thiết kế Bộ tài sản truyền thông số (Digital Assets)</strong></td>
                                    <td>5 template Social Media Grids, 3 mẫu chữ ký email, 5 hình nền Zoom/Teams.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">20,000,000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>Thiết kế lại Giao diện hệ thống Website trường (Web UI/UX Redesign)</strong></td>
                                    <td>Thiết kế UI/UX hiện đại (bàn giao Figma UI Kit) cho trang chủ Portal trường, trang tuyển sinh, và khung giao diện (template) dùng chung cho website 13+ Khoa và Viện nghiên cứu. Tối ưu Responsive di động.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">90,000,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>Thiết kế Bộ nhận diện khuôn viên trường (Campus Branding)</strong></td>
                                    <td>Thiết kế hệ thống biển chỉ dẫn lối đi nội khu, biển tên phòng ban giảng đường G3, T1, bảng tin điện tử, phướn dọc trục đường trường, lá cờ biểu trưng HUCE.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">65,000,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>Thiết kế Bộ nhận diện Đại lễ kỷ niệm H60 (Event Branding H60)</strong></td>
                                    <td>Backdrop sân khấu chính Lễ mít tinh và Gala, Thẻ đeo đại biểu và thẻ BTC VIP (bao gồm bao da), Thiệp mời (giấy mỹ thuật ép kim và thiệp điện tử QR code).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">55,000,000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><strong>Gói Thiết kế Quà tặng Thương hiệu HUCE (Brand Gift Design)</strong></td>
                                    <td>Quy chuẩn thiết kế và kiểu dáng công nghiệp hệ thống quà tặng VIP (sổ da dập chìm, bút ký laser, cúp pha lê), quà tặng đối tác (ô cầm tay Cobalt, bình giữ nhiệt, cốc sứ), quà sinh viên (áo polo thêu logo, mũ) và bao bì túi hộp.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">50,000,000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><strong>Dịch vụ tư vấn pháp lý và Nộp đơn Đăng ký bảo hộ độc quyền nhãn hiệu (SHTT)</strong></td>
                                    <td>Đại diện thực hiện toàn bộ thủ tục pháp lý, chuẩn bị hồ sơ nộp đơn bảo hộ nhãn hiệu chữ "HUCE" và logo tinh chỉnh tại Cục Sở hữu Trí tuệ cho 4 nhóm ngành kinh tế cốt lõi (41, 16, 25, 35).</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">30,000,000</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td><strong>Sản xuất Landing Page Chiến dịch H60 (Landing Page Production)</strong></td>
                                    <td>Thiết kế giao diện UI/UX chuẩn hóa thương hiệu H60, lập trình và cấu hình Landing Page truyền thông tương thích đa thiết bị, tích hợp hệ thống tracking và form đăng ký/đóng góp tự động qua VietQR.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">30,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 1</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">500,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="6" style="background: rgba(56, 189, 248, 0.08); font-weight: 800; color:var(--text-light);">II. GÓI 2: TƯ VẤN QUY TRÌNH QUẢN LÝ và DỊCH VỤ VẬN HÀNH WEBSITE ĐỒNG HÀNH</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Tư vấn quy trình quản lý truyền thông và Nền tảng hoạt động chuẩn hóa</strong></td>
                                    <td>Xây dựng quy trình tác nghiệp truyền thông chuẩn (SOPs), thiết lập khung lịch biên tập nội dung, xây dựng quy chế và kịch bản phòng ngừa khủng hoảng truyền thông mạng xã hội, tập huấn kỹ năng viết bài và ảnh số cho cán bộ trường.</td>
                                    <td>1</td>
                                    <td>Gói</td>
                                    <td style="font-weight: 700; color: var(--primary);">120,000,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>Dịch vụ chăm sóc, cập nhật nội dung và Điều hành hệ thống website HUCE</strong></td>
                                    <td>Bảo trì kỹ thuật máy chủ, tối ưu tốc độ, cập nhật bảo mật SSL, sao lưu hàng tuần. Biên tập tin bài, văn bản, ảnh đăng website trường chuẩn SEO. Thiết kế đồ họa banner trang chủ thường nhật (tối đa 15 banner/tháng).</td>
                                    <td>12</td>
                                    <td>Tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">180,000,000</td>
                                </tr>
                                <tr>
                                    <td colspan="5" style="text-align: right; font-weight: 800;">TỔNG PHÍ GÓI 2</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.05rem;">300,000,000</td>
                                </tr>
                                <tr style="background: rgba(56, 189, 248, 0.12);">
                                    <td colspan="5" style="text-align: right; font-weight: 900; font-size: 1.05rem; color:var(--text-light);">TỔNG CỘNG KINH PHÍ ĐỀ XUẤT TRỌN GÓI (I + II)</td>
                                    <td style="font-weight: 900; color: var(--primary); font-size: 1.15rem; text-shadow:none;">800,000,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;

html = html.replace(tableTarget, tableReplacement);

// 11. Update references of budget guidelines
const refG2Target = `<li><strong>Cơ sở tham chiếu Gói 2 (Hệ thống Số điều phối &amp; App HUCA - 375 Triệu VND):</strong> Chi phí phát triển và tùy biến một hệ thống Enterprise Workflow &amp; Digital Asset Management (quản lý luồng công việc và kho dữ liệu đám mây doanh nghiệp) tích hợp bộ duyệt ảnh/video nháp đa phân cấp thường dao động từ <strong>250.000.000 VND đến 400.000.000 VND</strong> tại các công ty CNTT Hà Nội. Chi phí thiết lập Campaign Portal (280 Triệu VND) được tối ưu hóa nhờ sử dụng các module lõi tự động hóa workflow sẵn có của ConsMedia. Chi phí quản trị hỗ trợ trên App HUCA (95 Triệu VND) tính theo chi phí nhân sự kỹ sư tích hợp hệ thống và biên tập viên quản trị nội dung vận hành liên tục suốt chiến dịch.</li>`;
const refG2Replacement = `<li><strong>Cơ sở tham chiếu Gói 2 (Quy trình truyền thông &amp; Vận hành web - 300 Triệu VND):</strong> Chi phí tư vấn xây dựng quy chế, kịch bản khủng hoảng và tập huấn nâng cao năng lực cho cán bộ (120 Triệu VND) được định mức dựa trên kinh phí đào tạo và chuyên gia tư vấn chiến lược thương hiệu. Chi phí chăm sóc, cập nhật nội dung website Portal/Admissions hàng tháng (15 Triệu VND/tháng, tổng cộng 180 Triệu VND) được tối ưu hóa dựa trên chi phí thuê nhân sự biên tập viên và thiết kế banner chuyên nghiệp thường trực tại ConsMedia, bảo đảm hoạt động website liên tục và tối ưu hóa SEO chuẩn mực.</li>`;

const refG1Target = `<li><strong>Cơ sở tham chiếu Gói 1 (Thiết kế Nhận diện thương hiệu - 360 Triệu VND):</strong> Mức giá tiêu chuẩn của các Agency thương hiệu hàng đầu tại Hà Nội (như Richard Moore Associates, Bratus, Sao Kim, Vũ Digital) cho gói tái định vị và chuẩn hóa nhận diện thương hiệu cấp Tổng công ty hoặc Trường Đại học quy mô lớn thường dao động từ <strong>250.000.000 VND đến 500.000.000 VND</strong>. Báo giá của chúng tôi định vị ở phân khúc trung - cao cấp, cam kết thực hiện bởi Giám đốc Sáng tạo (Creative Director) trên 10 năm kinh nghiệm, bao gồm cả khảo sát thực tế (Heritage Audit), thiết kế Guidelines chi tiết và quy chuẩn hóa toàn bộ hệ thống biển bảng khuôn viên (Campus) thực tế tại số 55 Giải Phóng.</li>`;
const refG1Replacement = `<li><strong>Cơ sở tham chiếu Gói 1 (Chuẩn hóa thương hiệu &amp; Bảo hộ SHTT - 500 Triệu VND):</strong> Mức giá tiêu chuẩn cho gói tái định vị và chuẩn hóa thương hiệu trường đại học quy mô lớn thường dao động từ 250 - 500 Triệu VND. Với gói 500 Triệu VND, ConsMedia cam kết cung cấp trọn gói bao gồm khảo sát di sản, cẩm nang Guidelines, bộ ấn phẩm văn phòng và tài sản số, thiết kế lại giao diện hệ thống website (trang Portal, Admissions, các Khoa/Viện), thiết kế hệ thống quà tặng thương hiệu đồng bộ, và thực hiện trọn gói nộp đơn đại diện bảo hộ nhãn hiệu chữ/logo HUCE tại Cục Sở hữu Trí tuệ Việt Nam.</li>`;

html = html.replace(refG2Target, refG2Replacement);
html = html.replace(refG1Target, refG1Replacement);

// 12. Update Financial co-branding description for technology reference
const financeTarget = `<li><strong>Thanh Toán Phân Đoạn:</strong> Thực hiện ký kết, nghiệm thu và thanh toán cuốn chiếu theo từng gói sản phẩm thành phần (Gói 1, Gói II.1, Gói II.2), linh hoạt bổ sung hoặc tinh chỉnh sản phẩm phát sinh theo thực tế.</li>`;
const financeReplacement = `<li><strong>Thanh Toán Phân Đoạn:</strong> Thực hiện ký kết, nghiệm thu và thanh toán cuốn chiếu theo từng gói sản phẩm cố định độc lập (Gói 1 và Gói 2), linh hoạt bổ sung hoặc tinh chỉnh sản phẩm phát sinh theo thực tế.</li>`;

const financeCardTarget = `<div class="ff-desc">Thực hiện ký kết, nghiệm thu và thanh toán cuốn chiếu theo từng gói sản phẩm thành phần (Gói 1, Gói II.1, Gói II.2), linh hoạt bổ sung hoặc tinh chỉnh sản phẩm phát sinh theo thực tế.</div>`;
const financeCardReplacement = `<div class="ff-desc">Thực hiện ký kết, nghiệm thu và thanh toán cuốn chiếu theo từng gói sản phẩm cố định độc lập (Gói 1 và Gói 2), linh hoạt bổ sung hoặc tinh chỉnh sản phẩm phát sinh theo thực tế.</div>`;

html = html.replace(financeTarget, financeReplacement);
html = html.replace(financeCardTarget, financeCardReplacement);

// 13. Update Financial co-branding offset description for App HUCA and Campaign Portal
const coSponsorTarget = `<div class="sob-title">🔗 Cơ Chế Đối Lưu và Tài Trợ Dự Án (Project-based Offset)</div>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; font-size: 0.78rem; line-height: 1.5; color:#475569;">
                            <div>
                                <strong style="color:#0f172a;">🛡️ Vai trò của ConsMedia:</strong> Đồng hành hỗ trợ thiết kế quy chuẩn hiển thị quyền lợi quảng cáo (Ad Placement Specs) của nhà tài trợ trên Website H60 và App HUCA. Hoàn toàn không chủ trì gọi tài trợ tổng thể (do trường trực tiếp vận động cựu sinh viên).
                            </div>
                            <div>
                                <strong style="color:#0f172a;">💰 Cơ chế Đối lưu Ba bên:</strong> Một phần giá trị quảng cáo của nhà tài trợ có thể được doanh nghiệp tài trợ thanh toán trực tiếp cho ConsMedia để bù đắp chi phí vận hành. Hoặc cho phép doanh nghiệp book và thanh toán trọn gói các sự kiện thành phần lẻ (Book-by-event) qua ConsMedia, giảm thiểu tối đa ngân sách công của nhà trường.
                            </div>
                            <div>
                                <strong style="color:#0f172a;">🤝 Đồng hành Thương hiệu:</strong> Nhà trường vinh danh ConsMedia là "Đối tác Đồng hành Giải pháp Công nghệ &amp; Truyền thông H60" trong các tài liệu tổng kết và sảnh khánh tiết sự kiện.
                            </div>
                        </div>`;

const coSponsorReplacement = `<div class="sob-title">🔗 Cơ Chế Đối Lưu và Tài Trợ Sự Kiện Gia Tăng (Project-based Offset)</div>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; font-size: 0.78rem; line-height: 1.5; color:#475569;">
                            <div>
                                <strong style="color:#0f172a;">🛡️ Sự kiện thành phần H60:</strong> Đối với các sự kiện trong chuỗi H60 (Sport Fest, Olympic Cơ học, Gala âm nhạc), nhà trường có thể đi vận động các doanh nghiệp/cựu sinh viên tài trợ.
                            </div>
                            <div>
                                <strong style="color:#0f172a;">💰 Doanh nghiệp tài trợ trực tiếp:</strong> Doanh nghiệp tài trợ có thể trực tiếp book và chi trả kinh phí dịch vụ cho các gói lẻ thuộc Gói 3 (Menu dịch vụ lẻ quay chụp, livestream, MC, sân khấu...) với ConsMedia để tài trợ cho sự kiện của trường, giúp giảm gánh nặng ngân sách công cho HUCE.
                            </div>
                            <div>
                                <strong style="color:#0f172a;">🤝 Vinh danh đối tác đồng hành:</strong> Nhà trường vinh danh nhà tài trợ doanh nghiệp và ghi nhận ConsMedia là "Đơn vị cung cấp giải pháp truyền thông và thương hiệu" của sự kiện.
                            </div>
                        </div>`;

html = html.replace(coSponsorTarget, coSponsorReplacement);

// 14. Update Interactive Calculator Checkboxes
const calculatorCheckboxesTarget = `<div class="checklist-group-title">Gói Dự Án Trọn Gói (I + II)</div>
                                <div class="checklist-scroll" style="margin-bottom: 1.2rem;">
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 360000000)">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator"></div>
                                            <div class="check-label">Gói 1: Nhận diện gốc HUCE <span>Đặc tả Phân nhóm 1-7</span></div>
                                        </div>
                                        <div class="check-val">360M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 95000000)">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator"></div>
                                            <div class="check-label">Gói II.1: Vận hành App HUCA <span>Quản trị tích hợp App sẵn có</span></div>
                                        </div>
                                        <div class="check-val">95M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 280000000)">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator"></div>
                                            <div class="check-label">Gói II.2: Campaign Portal <span>Hệ số điều phối Kanban</span></div>
                                        </div>
                                        <div class="check-val">280M</div>
                                    </div>
                                </div>`;

const calculatorCheckboxesReplacement = `<div class="checklist-group-title">Gói Dự Án Trọn Gói (I + II)</div>
                                <div class="checklist-scroll" style="margin-bottom: 1.2rem;">
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 500000000)">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator"></div>
                                            <div class="check-label">Gói 1: Nhận diện &amp; SHTT <span>Tinh chỉnh logo, Website UI, Thiết kế quà tặng, Bảo hộ nhãn hiệu</span></div>
                                        </div>
                                        <div class="check-val">500M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 120000000)">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator"></div>
                                            <div class="check-label">Gói 2.1: Tư vấn quản lý truyền thông <span>Quy trình tác nghiệp SOPs, kịch bản khủng hoảng, tập huấn nhân sự</span></div>
                                        </div>
                                        <div class="check-val">120M</div>
                                    </div>
                                    <div class="check-card checked" onclick="toggleBudgetCheckbox(this, 180000000)">
                                        <div class="check-box-wrapper">
                                            <div class="check-indicator"></div>
                                            <div class="check-label">Gói 2.2: Vận hành website đồng hành <span>Chăm sóc kỹ thuật, cập nhật tin bài chuẩn SEO 12 tháng</span></div>
                                        </div>
                                        <div class="check-val">180M</div>
                                    </div>
                                </div>`;

html = html.replace(calculatorCheckboxesTarget, calculatorCheckboxesReplacement);

// 15. Update default Grand Total in calculator card:
html = html.replace(`<h2 id="grand-total">735,000,000</h2>`, `<h2 id="grand-total">800,000,000</h2>`);

// 16. Update Deliverables Tab headers:
const tabHeaderTarget = `<div class="deliverables-tabs">
                        <div class="del-tab active" id="del-tab-g1" onclick="switchDeliverableTab('del-g1')">Gói 1: Nhận Diện Thương Hiệu</div>
                        <div class="del-tab" id="del-tab-g21" onclick="switchDeliverableTab('del-g21')">Gói II.1: App HUCA</div>
                        <div class="del-tab" id="del-tab-g22" onclick="switchDeliverableTab('del-g22')">Gói II.2: Campaign Portal</div>
                    </div>`;

const tabHeaderReplacement = `<div class="deliverables-tabs">
                        <div class="del-tab active" id="del-tab-g1" onclick="switchDeliverableTab('del-g1')">Gói 1: Nhận diện &amp; SHTT</div>
                        <div class="del-tab" id="del-tab-g21" onclick="switchDeliverableTab('del-g21')">Gói 2.1: Quy trình truyền thông</div>
                        <div class="del-tab" id="del-tab-g22" onclick="switchDeliverableTab('del-g22')">Gói 2.2: Vận hành website</div>
                    </div>`;

html = html.replace(tabHeaderTarget, tabHeaderReplacement);

// 17. Update Deliverables Tab G1 Content (Phân nhóm cards)
const delG1GridTarget = `<div id="del-g1-view" class="del-content-view active">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Phân nhóm 1: Logo Refinement <span>REFINE</span></h5>
                                <p>Tinh chỉnh hình học tối ưu hóa hiển thị cẩu tháp - quyển sách:</p>
                                <ul>
                                    <li><strong>01 Logo gốc hoàn chỉnh:</strong> Đã khóa lưới tỷ lệ hình học Geometric grid, nét vẽ sạch, hiển thị sắc nét.</li>
                                    <li><strong>04 Phiên bản ứng dụng:</strong> Màu gốc Cobalt Blue &amp; Gold, bản âm bản, bản dương bản, và bản siêu tối giản favicon/avatar app.</li>
                                    <li><strong>Vùng an toàn (Clear space):</strong> Hướng dẫn chi tiết kích thước tối thiểu và các lỗi sai cần tránh khi sử dụng logo.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 2: Brand Guidelines <span>MANUAL</span></h5>
                                <p>Cẩm nang quy chuẩn hệ thống nhận diện:</p>
                                <ul>
                                    <li><strong>Typography:</strong> Quy định Font chữ Outfit (số hóa) và UTM Avo (in ấn văn phòng) kèm cỡ chữ, độ dãn cách.</li>
                                    <li><strong>Color Palette:</strong> Bảng màu chuẩn Royal Blue (Cobalt Blue di sản), màu Vàng nhạt (nhấn), và sắc Slate/Grey phụ trợ.</li>
                                    <li><strong>Grid &amp; Patterns:</strong> Thiết kế hệ lưới giàn thép kết cấu đồ họa module hóa dùng làm pattern.</li>
                                    <li><strong>Đóng gói:</strong> 03 cuốn guidelines in cứng khổ ngang A4 in offset cao cấp và File PDF tương tác.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 3: Office Stationery <span>VĂN PHÒNG</span></h5>
                                <p>Bộ ấn phẩm văn phòng ứng dụng di sản:</p>
                                <ul>
                                    <li><strong>Danh thiếp &amp; Phong bì:</strong> Mẫu danh thiếp sang trọng BGH, 03 cỡ phong bì thư A4, A5, DL in dập chìm logo.</li>
                                    <li><strong>Tiêu đề thư (Letterhead):</strong> File in offset thực tế và File Word (.docx) số hóa tiêu chuẩn.</li>
                                    <li><strong>Folder &amp; Slide Template:</strong> Folder đựng tài liệu dập logo; Slide thuyết trình PowerPoint 16:9 với 30 layouts chuyên dụng cho Hội nghị KHCN CIB.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 4: Digital Assets <span>MẠNG XÃ HỘI</span></h5>
                                <p>Tài sản số hóa tối ưu tương tác Gen Z:</p>
                                <ul>
                                    <li><strong>Social Media Grids:</strong> 05 mẫu khung template bài đăng Facebook/LinkedIn (Tuyển sinh, HUCE Award, Vinh danh, Sự kiện).</li>
                                    <li><strong>Website UI Skin:</strong> Giao diện UI/UX trang chủ Web trường và Cổng thông tin Đại lễ H60 theo phông Outfit hiện đại.</li>
                                    <li><strong>Chữ ký Email &amp; Background:</strong> 03 mẫu chữ ký email cho BGH/Giảng viên; 05 Virtual Background Zoom/Teams.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 5: Campus Branding <span>KHUÔN VIÊN</span></h5>
                                <p>Hệ thống biển bảng chỉ dẫn tại khuôn viên Giải Phóng:</p>
                                <ul>
                                    <li><strong>Hệ thống biển chỉ dẫn:</strong> Bản vẽ kỹ thuật biển tên các Phòng, Khoa, biển chỉ dẫn lối đi tại giảng đường G3, T1.</li>
                                    <li><strong>Băng rôn &amp; Phướn dọc:</strong> Phướn dọc treo các trục đường trường, băng rôn sảnh chính và thiết kế lá cờ.</li>
                                    <li><strong>Digital Signage Grid:</strong> Giao diện hiển thị trên các màn hình LCD bảng tin điện tử tại sảnh chính trường.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 6: H60 Event Branding <span>KHÁNH TIẾT</span></h5>
                                <p>Nhận diện sự kiện khánh tiết Đại lễ H60:</p>
                                <ul>
                                    <li><strong>Backdrop sân khấu chính:</strong> Backdrop mít tinh chính thức ngày 14/11 và sân khấu Gala tối 13/11.</li>
                                    <li><strong>Event Badges:</strong> Thẻ đeo ban tổ chức (dây Cobalt in lụa) và thẻ đại biểu VIP da cao cấp.</li>
                                    <li><strong>Thiệp mời Đại Lễ:</strong> Thiệp mỹ thuật giấy định lượng cao ép kim gấp nổi và e-invite tích hợp mã QR cá nhân hóa.</li>
                                    <li><strong>Premium Gift Box:</strong> Quy chuẩn bộ hộp VIP (Hộp lót nhung dập logo, sổ da dập chìm, bút kim loại laser, kỷ niệm chương pha lê cẩu tháp mạ vàng).</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

const delG1GridReplacement = `<div id="del-g1-view" class="del-content-view active">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Phân nhóm 1: Logo Refinement <span>REFINE</span></h5>
                                <p>Tinh chỉnh hình học tối ưu hóa hiển thị logo:</p>
                                <ul>
                                    <li><strong>01 Logo gốc hoàn chỉnh:</strong> Đã khóa lưới tỷ lệ hình học Geometric grid, nét vẽ sạch, hiển thị sắc nét.</li>
                                    <li><strong>04 Phiên bản ứng dụng:</strong> Màu gốc Cobalt Blue &amp; Gold, bản âm bản, bản dương bản, và bản siêu tối giản favicon/avatar app.</li>
                                    <li><strong>Vùng an toàn (Clear space):</strong> Quy chuẩn kích thước hiển thị tối thiểu và khoảng trống an toàn xung quanh logo.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 2: Brand Guidelines <span>MANUAL</span></h5>
                                <p>Cẩm nang quy chuẩn hệ thống nhận diện:</p>
                                <ul>
                                    <li><strong>Typography:</strong> Quy định Font chữ Outfit (kỹ thuật số) và UTM Avo (in ấn văn phòng) kèm kích thước, độ giãn cách.</li>
                                    <li><strong>Color Palette:</strong> Bảng mã màu chuẩn Royal Blue (Cobalt Blue di sản), màu Vàng nhũ khánh tiết, và các sắc Slate/Grey phụ trợ.</li>
                                    <li><strong>Grid &amp; Patterns:</strong> Thiết kế hệ lưới giàn thép kết cấu đồ họa module hóa dùng làm họa tiết trang trí đồng bộ.</li>
                                    <li><strong>Đóng gói:</strong> 03 cuốn guidelines in cứng khổ ngang A4 in offset cao cấp và File PDF tương tác.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 3: Office Stationery <span>VĂN PHÒNG</span></h5>
                                <p>Bộ ấn phẩm văn phòng ứng dụng di sản:</p>
                                <ul>
                                    <li><strong>Danh thiếp &amp; Phong bì:</strong> Mẫu danh thiếp cho Ban Giám hiệu, 03 cỡ phong bì thư A4, A5, DL in dập logo chuẩn.</li>
                                    <li><strong>Tiêu đề thư (Letterhead):</strong> Bản thiết kế in ấn offset và File Word (.docx) số hóa tiêu chuẩn.</li>
                                    <li><strong>Folder &amp; Slide Template:</strong> Folder tài liệu dập logo; Slide PowerPoint 16:9 với 30 layouts chuyên dụng cho hội nghị học thuật, đào tạo.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 4: Digital Assets <span>TÀI SẢN SỐ</span></h5>
                                <p>Tài sản số hóa đồng bộ hình ảnh mạng xã hội:</p>
                                <ul>
                                    <li><strong>Social Media Grids:</strong> 05 mẫu khung template bài đăng Facebook/LinkedIn (Tin tức, Tuyển sinh, Vinh danh, Sự kiện).</li>
                                    <li><strong>Chữ ký Email:</strong> 03 mẫu chữ ký email chuyên nghiệp cho BGH, cán bộ phòng ban và giảng viên trường.</li>
                                    <li><strong>Virtual Backgrounds:</strong> 05 hình nền họp trực tuyến trên Zoom/Teams phục vụ họp khánh tiết H60 và các buổi thảo luận.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 5: Web UI/UX Redesign <span>WEBSITE</span></h5>
                                <p>Thiết kế lại toàn bộ giao diện hệ thống Website trường:</p>
                                <ul>
                                    <li><strong>Figma UI Kit toàn diện:</strong> Bàn giao hệ thống thiết kế Figma hoàn chỉnh (components, buttons, styles, icons).</li>
                                    <li><strong>Giao diện Portal &amp; Tuyển sinh:</strong> Thiết kế UI/UX mới trang chủ Portal chính của trường và trang Admissions tuyển sinh.</li>
                                    <li><strong>Khung mẫu khoa/phòng ban:</strong> Giao diện template dùng chung cho website 13+ Khoa và Viện nghiên cứu, bảo đảm tính thống nhất hình ảnh.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 6: Campus Branding <span>KHUÔN VIÊN</span></h5>
                                <p>Hệ thống biển bảng chỉ dẫn tại khuôn viên Giải Phóng:</p>
                                <ul>
                                    <li><strong>Hệ thống biển chỉ dẫn:</strong> Bản vẽ kỹ thuật biển tên các Phòng, Khoa, biển chỉ dẫn lối đi tại giảng đường G3, T1.</li>
                                    <li><strong>Băng rôn &amp; Phướn dọc:</strong> Phướn dọc treo dọc trục đường trường, băng rôn sảnh chính và lá cờ biểu trưng HUCE.</li>
                                    <li><strong>Digital Signage:</strong> Thiết kế giao diện hiển thị trên các màn hình LCD bảng tin điện tử tại sảnh chính các tòa nhà.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 7: Event Branding H60 <span>KHÁNH TIẾT</span></h5>
                                <p>Nhận diện sự kiện khánh tiết Đại lễ kỷ niệm:</p>
                                <ul>
                                    <li><strong>Backdrop sân khấu chính:</strong> Backdrop mít tinh chính thức ngày 14/11 và Gala nghệ thuật tối 13/11.</li>
                                    <li><strong>Event Badges:</strong> Thẻ đeo ban tổ chức (dây Cobalt in lụa) và thẻ đại biểu VIP ép kim cao cấp.</li>
                                    <li><strong>Thiệp mời Đại Lễ:</strong> Thiệp mỹ thuật giấy định lượng cao ép kim gấp nổi và e-invite tích hợp mã QR cá nhân hóa.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 8: Brand Gift Design <span>QUÀ TẶNG</span></h5>
                                <p>Hệ thống quà tặng thương hiệu HUCE đồng bộ:</p>
                                <ul>
                                    <li><strong>Quà tặng VIP:</strong> Sổ da dập chìm, bút ký kim loại laser, kỷ niệm chương pha lê đúc nổi hình cẩu tháp - quyển sách.</li>
                                    <li><strong>Quà tặng đối tác &amp; SV:</strong> Ô cầm tay Cobalt, bình giữ nhiệt, cốc sứ cao cấp, áo thun Polo thêu logo trường, mũ lưỡi trai.</li>
                                    <li><strong>Quy chuẩn bao bì:</strong> Thiết kế túi giấy xi măng/kraft bảo vệ môi trường, thiết kế hộp quà VIP lót nhung.</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 9: Đăng ký Bảo hộ SHTT <span>PHÁP LÝ SHTT</span></h5>
                                <p>Tư vấn pháp lý bảo hộ độc quyền nhãn hiệu HUCE:</p>
                                <ul>
                                    <li><strong>Hồ sơ đăng ký nhãn hiệu:</strong> Soạn thảo hồ sơ pháp lý, đại diện nộp đơn bảo hộ nhãn hiệu chữ "HUCE" và logo tinh chỉnh.</li>
                                    <li><strong>04 nhóm đăng ký cốt lõi:</strong> Thực hiện nộp đơn đăng ký bảo hộ độc quyền nhãn hiệu tại Cục Sở hữu Trí tuệ cho các Nhóm 41, 16, 25, 35.</li>
                                    <li><strong>Theo dõi đơn:</strong> Giám sát tiến trình thẩm định hình thức, công bố đơn trên công báo và trả lời công văn (nếu có).</li>
                                </ul>
                            </div>
                            <div class="del-card">
                                <h5>Phân nhóm 10: Landing Page H60 <span>LANDING PAGE</span></h5>
                                <p>Landing Page truyền thông chiến dịch kỷ niệm:</p>
                                <ul>
                                    <li><strong>Lập trình Frontend/Backend:</strong> Lập trình tối ưu hóa tốc độ tải trang, tương thích di động hoàn toàn.</li>
                                    <li><strong>Tích hợp hệ thống:</strong> Tích hợp mã tracking đo lường lưu lượng truy cập và form thu thập thông tin đăng ký tham dự.</li>
                                    <li><strong>VietQR tự động:</strong> Cổng thanh toán/đóng góp tự động tạo mã QR có số tiền và nội dung chuyển khoản được cấu hình sẵn.</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

html = html.replace(delG1GridTarget, delG1GridReplacement);

// 18. Update Deliverables Tab G21 Content (Consulting deliverables)
const delG21Target = `<div id="del-g21-view" class="del-content-view">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Tư vấn chuẩn hóa nhận diện trên App cựu sinh viên sẵn có <span>UI/UX</span></h5>
                                <p>Tư vấn tiếp biến và khóa cứng bộ Guidelines H60 (Cobalt Blue HSL) lên giao diện App di động cựu sinh viên HUCA sẵn có, đảm bộ đồng bộ hình ảnh 100%.</p>
                            </div>
                            <div class="del-card">
                                <h5>Quy trình duyệt tin bài đa cấp di động <span>APPROVAL</span></h5>
                                <p>Lập trình liên kết và cài đặt tài khoản phân quyền duyệt tác nghiệp di động (ConsMedia -> Phòng Truyền thông -> BGH) giúp chốt bài đăng nhanh chóng.</p>
                            </div>
                            <div class="del-card">
                                <h5>VietQR Quỹ học bổng số thời gian thực <span>API</span></h5>
                                <p>Tích hợp cổng VietQR tự động đồng bộ trạng thái đóng góp tri ân của cựu sinh viên lên màn hình hiển thị danh sách vinh danh của App.</p>
                            </div>
                            <div class="del-card">
                                <h5>Vận hành Banner Manager QC thầu đối lưu <span>CONSOLE</span></h5>
                                <p>Phân quyền và bàn giao Admin console để quản trị vị trí hiển thị quảng cáo Banner thầu tài trợ đối lưu của các doanh nghiệp cựu sinh viên trên App.</p>
                            </div>
                        </div>
                    </div>`;

const delG21Replacement = `<div id="del-g21-view" class="del-content-view">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Quy trình tác nghiệp truyền thông chuẩn (SOPs) <span>QUY TRÌNH</span></h5>
                                <p>Biên soạn bộ quy trình tiếp nhận thông tin, viết tin bài PR, thiết kế banner và cơ chế phối hợp đa bộ phận trong nhà trường. Khắc phục triệt để sự tự phát và chồng chéo công việc.</p>
                            </div>
                            <div class="del-card">
                                <h5>Lịch biên tập truyền thông tổng thể <span>LỊCH TRÌNH</span></h5>
                                <p>Thiết lập khung kế hoạch biên tập nội dung (Editorial Calendar) theo tuần/tháng/quý trên fanpage và website Portal trường. Định hướng các tuyến bài viết tuyển sinh và sự kiện cội nguồn.</p>
                            </div>
                            <div class="del-card">
                                <h5>Quy chế kịch bản xử lý khủng hoảng mạng <span>ỨNG PHÓ</span></h5>
                                <p>Thiết lập sơ đồ kiểm soát rủi ro, phân định vai trò phát ngôn và kịch bản phản ứng nhanh trong vòng 30 phút khi xảy ra tin tức tiêu cực hoặc sự cố dư luận trực tuyến.</p>
                            </div>
                            <div class="del-card">
                                <h5>Tập huấn nâng cao năng lực Ban truyền thông <span>TẬP HUẤN</span></h5>
                                <p>Tổ chức 02 buổi workshop tập huấn chuyên môn cho cán bộ, giảng viên và Đoàn thanh niên trường về kỹ năng quản trị fanpage, viết tin bài chuẩn SEO, chụp ảnh và đồ họa số cơ bản.</p>
                            </div>
                        </div>
                    </div>`;

// Wait, let's look at delG21Target spelling. In original HTML it was "đảm bảo đồng bộ hình ảnh 100%." with "đảm bảo" not "đảm bộ". Let's check original line 3904. Yes, "đảm bảo đồng bộ hình ảnh 100%."
const delG21TargetReal = `<div id="del-g21-view" class="del-content-view">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Tư vấn chuẩn hóa nhận diện trên App cựu sinh viên sẵn có <span>UI/UX</span></h5>
                                <p>Tư vấn tiếp biến và khóa cứng bộ Guidelines H60 (Cobalt Blue HSL) lên giao diện App di động cựu sinh viên HUCA sẵn có, đảm bảo đồng bộ hình ảnh 100%.</p>
                            </div>
                            <div class="del-card">
                                <h5>Quy trình duyệt tin bài đa cấp di động <span>APPROVAL</span></h5>
                                <p>Lập trình liên kết và cài đặt tài khoản phân quyền duyệt tác nghiệp di động (ConsMedia -> Phòng Truyền thông -> BGH) giúp chốt bài đăng nhanh chóng.</p>
                            </div>
                            <div class="del-card">
                                <h5>VietQR Quỹ học bổng số thời gian thực <span>API</span></h5>
                                <p>Tích hợp cổng VietQR tự động đồng bộ trạng thái đóng góp tri ân của cựu sinh viên lên màn hình hiển thị danh sách vinh danh của App.</p>
                            </div>
                            <div class="del-card">
                                <h5>Vận hành Banner Manager QC thầu đối lưu <span>CONSOLE</span></h5>
                                <p>Phân quyền và bàn giao Admin console để quản trị vị trí hiển thị quảng cáo Banner thầu tài trợ đối lưu của các doanh nghiệp cựu sinh viên trên App.</p>
                            </div>
                        </div>
                    </div>`;

html = html.replace(delG21TargetReal, delG21Replacement);

const delG22Target = `<div id="del-g22-view" class="del-content-view">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Lịch truyền thông đa kênh <span>EDITORIAL CALENDAR</span></h5>
                                <p>Giao diện lịch biểu chuyên dụng lập kế hoạch bài đăng, theo dõi lịch biên tập nội dung trên Facebook, TikTok, Website trường theo tuần/tháng.</p>
                            </div>
                            <div class="del-card">
                                <h5>Luồng phê duyệt Content và Media di động <span>WORKFLOW APPROVAL</span></h5>
                                <p>Công cụ duyệt tin bài và media đính kèm đa cấp di động thời gian thực (thay thế annotation cũ). Phê duyệt nhanh, ghi vết lịch sử biên tập.</p>
                            </div>
                            <div class="del-card">
                                <h5>Lịch sự kiện H60 và RSVP <span>EVENT CALENDAR</span></h5>
                                <p>Lịch sự kiện tích hợp toàn bộ các cột mốc sự kiện khánh tiết H60 (Sport Fest, Hội thảo CIB, Lễ kỷ niệm) kèm đếm ngược ngày và cập nhật lượng RSVP.</p>
                            </div>
                            <div class="del-card">
                                <h5>Dashboard chỉ số truyền thông số <span>ANALYTICS DASHBOARD</span></h5>
                                <p>Hệ quản trị Dashboard tự động thống kê lượt tiếp cận (reach), lượt tương tác (engagement) đa nền tảng mạng xã hội và vinh danh đóng góp Quỹ cựu sinh viên.</p>
                            </div>
                            <div class="del-card">
                                <h5>Shared Media Cloud đám mây RAW <span>AWS S3 và CDN</span></h5>
                                <p>Kho đám mây lưu trữ hình ảnh RAW chất lượng cao của sự kiện, tự động đóng watermark bản quyền HUCE và sinh link chia sẻ báo chí tốc độ cao.</p>
                            </div>
                        </div>
                    </div>`;

const delG22Replacement = `<div id="del-g22-view" class="del-content-view">
                        <div class="del-grid">
                            <div class="del-card">
                                <h5>Bảo trì kỹ thuật và Bảo mật <span>BẢO TRÌ KỸ THUẬT</span></h5>
                                <p>Bảo trì kỹ thuật máy chủ website trường, tối ưu hóa tốc độ tải trang, gia hạn và cập nhật chứng chỉ bảo mật SSL định kỳ, thực hiện sao lưu dữ liệu tự động hàng tuần phòng ngừa sự cố mất mát dữ liệu.</p>
                            </div>
                            <div class="del-card">
                                <h5>Biên tập nội dung chuẩn SEO <span>BIÊN TẬP NỘI DUNG</span></h5>
                                <p>Tiếp nhận thông tin hoạt động, biên tập bài viết tin tức, chỉnh sửa hình ảnh, đăng tải các thông báo tuyển sinh, các sự kiện khánh tiết H60 lên website chính thức của trường bảo đảm chuẩn thẩm mỹ hành chính và tối ưu từ khóa SEO tìm kiếm.</p>
                            </div>
                            <div class="del-card">
                                <h5>Thiết kế Banner và Đồ họa Web <span>THIẾT KẾ ĐỒ HỌA</span></h5>
                                <p>Thiết kế banner trang chủ, slide ảnh nổi bật và các đồ họa minh họa bài đăng thường nhật của nhà trường trên hệ thống website (phục vụ tối đa 15 banner thiết kế mới mỗi tháng).</p>
                            </div>
                        </div>
                    </div>`;

const section7Target = `<div class="panel-card" id="p3-sec7">
                    <h3>7. CHIẾN LƯỢC VẬN HÀNH BỀN VỮNG và DỰ TOÁN DUY TRÌ CÔNG NGHỆ SAU NĂM 2026</h3>
                    <p>Để khoản đầu tư công nghệ trong chiến dịch H60 mang lại giá trị bền vững lâu dài, chúng tôi đề xuất phương án chuyển đổi công năng và dự toán chi phí vận hành nền tảng cho giai đoạn sau năm 2026 (từ năm 2027 trở đi):</p>
                    
                    <style>
                        .repurpose-grid-container {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                            gap: 1.5rem;
                            margin: 1.5rem 0;
                        }
                        .repurpose-card {
                            background: rgba(0, 42, 92, 0.2);
                            border:1px solid #e2e8f0;
                            border-radius: 14px;
                            padding: 1.5rem;
                            transition: all 0.3s;
                        }
                        .repurpose-card:hover {
                            transform: translateY(-5px);
                            border-color: var(--primary);
                            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                        }
                        .rep-header {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            font-size: 1.05rem;
                            font-weight: 700;
                            color: var(--primary);
                            border-bottom:1px solid #e2e8f0;
                            padding-bottom: 0.6rem;
                            margin-bottom: 1rem;
                        }
                        .rep-icon {
                            font-size: 1.3rem;
                        }
                        .rep-item {
                            display: flex;
                            gap: 0.5rem;
                            font-size: 0.8rem;
                            color:#475569;
                            margin-bottom: 0.8rem;
                            line-height: 1.45;
                        }
                        .rep-item i {
                            color: var(--primary);
                            font-weight: bold;
                        }
                    </style>

                    <h4>7.1. Kế hoạch chuyển đổi công năng sử dụng lâu dài (Repurposing Plan)</h4>
                    <div class="repurpose-grid-container">
                        <!-- APP HUCA -->
                        <div class="repurpose-card">
                            <div class="rep-header">
                                <span class="rep-icon">📱</span>
                                <span>Cổng Kết Nối Cựu Sinh Viên HUCA (Gói II.1)</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Kênh liên lạc chính thức:</strong> Duy trì làm cổng tương tác số của Hội Cựu sinh viên nhà trường.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Quỹ học bổng số tự động:</strong> Giữ nguyên VietQR đóng góp tự động, ghi danh vinh danh thời gian thực.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Module tuyển dụng &amp; việc làm:</strong> Cho phép cựu sinh viên đăng tin tuyển kỹ sư/doanh nghiệp thầu phụ.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Quản trị Banner quảng cáo:</strong> Hỗ trợ nhà trường khai thác đặt banner, tạo nguồn thu duy trì hệ thống.</span>
                            </div>
                        </div>

                        <!-- CAMPAIGN PORTAL -->
                        <div class="repurpose-card">
                            <div class="rep-header">
                                <span class="rep-icon">🌐</span>
                                <span>Nền Tảng Điều Phối Số Tuyển Sinh &amp; Tác Nghiệp (Gói II.2)</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Cổng số hóa Phòng TT&amp;TS:</strong> Trở thành công cụ số hóa điều phối tác nghiệp của Phòng Truyền thông &amp; Tuyển sinh.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Kanban điều phối tuyển sinh:</strong> Vận dụng Kanban để giao việc và kiểm soát tiến độ tuyển sinh hàng năm.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Hệ phê duyệt tác nghiệp số:</strong> Giữ nguyên luồng phê duyệt di động khép kín để duyệt banner, tin tức lẻ.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Thư viện Media Cloud vĩnh viễn:</strong> Lưu trữ RAW hình ảnh chất lượng cao để trường khai thác kỷ yếu, báo chí.</span>
                            </div>
                        </div>
                    </div>

                    <h4>7.2. Bảng dự toán chi phí duy trì và vận hành tạm tính sau năm 2026 (Áp dụng từ năm 2027)</h4>
                    <p>Sau khi bàn giao toàn bộ mã nguồn và hệ thống đã chạy ổn định, chi phí vận hành sẽ giảm mạnh do không còn tải lượng người dùng đỉnh điểm của năm đại lễ. Chúng tôi đề xuất 3 phương án tài chính linh hoạt để nhà trường lựa chọn:</p>
                    
                    <div class="audit-table-wrapper">
                        <table class="audit-table">
                            <thead>
                                <tr>
                                    <th style="width: 8%;">STT</th>
                                    <th style="width: 20%;">Phương án vận hành</th>
                                    <th style="width: 32%;">Mô tả chi tiết phạm vi công việc</th>
                                    <th style="width: 10%;">Tần suất</th>
                                    <th style="width: 15%;">Đơn giá tạm tính (VND)</th>
                                    <th style="width: 15%;">Đánh giá ưu/nhược điểm &amp; Đề xuất</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td><strong>Phương án 1: Duy trì kỹ thuật tối thiểu</strong><br><em>(HUCE tự quản trị)</em></td>
                                    <td>Bảo trì kỹ thuật máy chủ AWS, duy trì bảo mật SSL. Phí băng thông và CDN Cloudflare cho thư viện ảnh. Hỗ trợ kỹ thuật 8/5 khắc phục sự cố nghiêm trọng (server down). HUCE tự chịu trách nhiệm vận hành nội dung, admin.</td>
                                    <td>Hàng tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">4,000,000</td>
                                    <td><em>Ưu điểm:</em> Tiết kiệm ngân sách tối đa.
                                    <br><em>Nhược điểm:</em> Phòng TT&amp;TS trường phải tự phân bổ nhân sự biên tập viên và admin kỹ thuật để cập nhật Banner quảng cáo, duyệt tin bài trên hệ thống.</td>
                                </tr>
                                <tr style="background: rgba(56, 189, 248, 0.05);">
                                    <td>02</td>
                                    <td><strong>Phương án 2: Đồng vận hành chuyên nghiệp</strong><br><em>(ConsMedia đồng hành)</em></td>
                                    <td>Bao gồm toàn bộ hạ tầng kỹ thuật của Phương án 1. ConsMedia hỗ trợ kỹ thuật 24/7. Cung cấp 01 nhân sự kỹ thuật &amp; 01 biên tập viên part-time của ConsMedia trực tiếp phối hợp admin, xử lý kỹ thuật Banner, hỗ trợ cựu sinh viên khi gặp lỗi App, sao lưu dữ liệu tự động hàng tuần.</td>
                                    <td>Hàng tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">9,000,000</td>
                                    <td><strong>Khuyến nghị sử dụng:</strong> Đảm bảo hệ thống hoạt động mượt mà, chuyên nghiệp, không gây áp lực công việc cho nhân sự của HUCE.</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td><strong>Phương án 3: Đối lưu thương mại</strong><br><em>(Ngân sách HUCE 0 đồng)</em></td>
                                    <td>ConsMedia chủ trì vận hành kỹ thuật và nội dung (tương đương Phương án 2). <strong>HUCE không thanh toán tiền mặt.</strong>
                                    <br><em>Cơ chế:</em> HUCE cho phép ConsMedia độc quyền khai thác quảng cáo/tài trợ vị trí Banner trên App HUCA đối với các nhãn hàng đối tác. Doanh thu quảng cáo sẽ tự động bù đắp chi phí vận hành hệ thống.</td>
                                    <td>Hàng năm</td>
                                    <td style="font-weight: 700; color: var(--primary);">0</td>
                                    <td><em>Ưu điểm:</em> Trường không tốn ngân sách công.
                                    <br><em>Điều kiện:</em> Đòi hỏi quy chế hợp tác mở để ConsMedia chủ động làm việc thương mại với các doanh nghiệp đối tác ngoài trường.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;

const section7Replacement = `<div class="panel-card" id="p3-sec7">
                    <h3>7. CHIẾN LƯỢC ĐỒNG HÀNH VÀ PHƯƠNG ÁN BẢO TRÌ WEBSITE THEO CÁC GIAI ĐOẠN</h3>
                    <p>Để đảm bảo hệ thống thông tin của HUCE luôn hoạt động ổn định, an toàn và cập nhật kịp thời, dịch vụ chăm sóc website (Gói 2.2) được thiết kế ký kết theo từng giai đoạn 12 tháng. Sau Giai đoạn 1 (năm 2026), chúng tôi đề xuất 3 phương án duy trì vận hành linh hoạt cho các năm tiếp theo để nhà trường lựa chọn:</p>
                    
                    <style>
                        .repurpose-grid-container {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                            gap: 1.5rem;
                            margin: 1.5rem 0;
                        }
                        .repurpose-card {
                            background: rgba(0, 42, 92, 0.03);
                            border:1px solid #cbd5e1;
                            border-radius: 14px;
                            padding: 1.5rem;
                            transition: all 0.3s;
                        }
                        .repurpose-card:hover {
                            transform: translateY(-5px);
                            border-color: var(--primary);
                            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                        }
                        .rep-header {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            font-size: 1.05rem;
                            font-weight: 700;
                            color: var(--primary);
                            border-bottom:1px solid #cbd5e1;
                            padding-bottom: 0.6rem;
                            margin-bottom: 1rem;
                        }
                        .rep-icon {
                            font-size: 1.3rem;
                        }
                        .rep-item {
                            display: flex;
                            gap: 0.5rem;
                            font-size: 0.8rem;
                            color:#475569;
                            margin-bottom: 0.8rem;
                            line-height: 1.45;
                        }
                        .rep-item i {
                            color: var(--primary);
                            font-weight: bold;
                        }
                    </style>

                    <h4>7.1. Kế hoạch bàn giao và chuyển giao năng lực tự vận hành</h4>
                    <div class="repurpose-grid-container">
                        <!-- BAN GIAO FIGMA -->
                        <div class="repurpose-card">
                            <div class="rep-header">
                                <span class="rep-icon">🎨</span>
                                <span>Bàn giao Tài nguyên Thiết kế &amp; Website</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Figma UI Kit:</strong> Chuyển giao toàn bộ file thiết kế giao diện website gốc cho bộ phận CNTT của trường quản lý.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Mã nguồn website:</strong> Đóng gói và bàn giao mã nguồn sạch cùng tài liệu hướng dẫn kỹ thuật cấu hình máy chủ.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Tài liệu quy chuẩn:</strong> Bàn giao bộ cẩm nang quy chuẩn sử dụng logo, font chữ và bảng màu trực quan.</span>
                            </div>
                        </div>

                        <!-- TAP HUAN -->
                        <div class="repurpose-card">
                            <div class="rep-header">
                                <span class="rep-icon">🏫</span>
                                <span>Chuyển giao Năng lực Tác nghiệp (SOPs)</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Quy trình SOPs:</strong> Chuyển giao bộ quy trình tác nghiệp truyền thông đã chuẩn hóa cho Ban Truyền thông trường.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Tập huấn cán bộ:</strong> Tổ chức các buổi bàn giao chuyên môn chi tiết, hướng dẫn nhân sự trường tự biên tập và đăng tải nội dung.</span>
                            </div>
                            <div class="rep-item">
                                <i>✔</i>
                                <span><strong>Kịch bản ứng phó:</strong> Hướng dẫn nhà trường tự vận hành cơ chế kiểm soát thông tin và xử lý sự cố trực tuyến độc lập.</span>
                            </div>
                        </div>
                    </div>

                    <h4>7.2. Các phương án duy trì vận hành website từ năm 2027 trở đi</h4>
                    <p>Sau Giai đoạn 1 (12 tháng đồng hành trọn gói), nhà trường có thể lựa chọn một trong ba phương án hợp tác bảo trì sau để phù hợp với ngân sách và nhân lực thực tế:</p>
                    
                    <div class="audit-table-wrapper">
                        <table class="audit-table">
                            <thead>
                                <tr>
                                    <th style="width: 8%;">STT</th>
                                    <th style="width: 20%;">Phương án vận hành</th>
                                    <th style="width: 32%;">Mô tả chi tiết phạm vi công việc</th>
                                    <th style="width: 10%;">Tần suất</th>
                                    <th style="width: 15%;">Đơn giá tạm tính (VND)</th>
                                    <th style="width: 15%;">Đánh giá ưu/nhược điểm và Đề xuất</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td><strong>Phương án 1: Bảo trì kỹ thuật tối thiểu</strong><br><em>(HUCE tự quản trị nội dung)</em></td>
                                    <td>Bảo trì hạ tầng máy chủ, duy trì bảo mật SSL và sao lưu dữ liệu tự động hàng tuần. Hỗ trợ kỹ thuật 8/5 khắc phục sự cố khẩn cấp (sập trang). Nhà trường tự chịu trách nhiệm biên tập nội dung, cập nhật tin bài và thiết kế đồ họa banner phát sinh.</td>
                                    <td>Hàng tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">5,000,000 / tháng</td>
                                    <td><em>Ưu điểm:</em> Tiết kiệm chi phí tối đa.<br><em>Hạn chế:</em> Ban Truyền thông của trường phải tự phân bổ nhân sự biên tập viên và thiết kế đồ họa để vận hành thường nhật.</td>
                                </tr>
                                <tr style="background: rgba(0, 42, 92, 0.02);">
                                    <td>02</td>
                                    <td><strong>Phương án 2: Đồng hành vận hành chuyên nghiệp</strong><br><em>(ConsMedia tiếp tục chăm sóc)</em></td>
                                    <td>Bao gồm hạ tầng kỹ thuật của Phương án 1 kết hợp dịch vụ hỗ trợ 24/7. ConsMedia cung cấp nhân sự biên tập cập nhật tin tức tuyển sinh, sự kiện (tối đa 4 bài/tháng) và thiết kế banner minh họa thường nhật (tối đa 8 banner/tháng) theo yêu cầu từ trường.</td>
                                    <td>Hàng tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">12,000,000 / tháng</td>
                                    <td><strong>Khuyến nghị lựa chọn:</strong> Giúp website trường luôn tươi mới, chuyên nghiệp mà không gây quá tải cho nhân sự của phòng ban chức năng.</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td><strong>Phương án 3: Hợp tác đối lưu tài trợ</strong><br><em>(Ngân sách HUCE 0 đồng)</em></td>
                                    <td>ConsMedia thực hiện đồng vận hành nội dung và kỹ thuật chuyên nghiệp (tương ứng Phương án 2). <strong>HUCE không thanh toán bằng tiền mặt.</strong><br><em>Cơ chế:</em> HUCE cho phép ConsMedia đặt banner quảng cáo thương mại của các doanh nghiệp đối tác/cựu sinh viên tại các vị trí quy chuẩn trên website trường để bù đắp chi phí vận hành.</td>
                                    <td>Hàng tháng</td>
                                    <td style="font-weight: 700; color: var(--primary);">0</td>
                                    <td><em>Ưu điểm:</em> Không tốn ngân sách nhà trường.<br><em>Điều kiện:</em> Cần cơ chế mở để ConsMedia chủ động làm việc và thống nhất vị trí hiển thị quảng cáo phù hợp với tôn chỉ sư phạm.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;

const maintenanceTableTarget = "Bảng dự toán chi phí duy trì và vận hành tạm tính sau năm 2026";
const maintenanceTableReplacement = "Bảng dự toán chi phí duy trì và vận hành tạm tính sau năm 2026";

// 19. Update Deliverables Tab G22 Content (Website Care deliverables)
html = html.replace(delG22Target, delG22Replacement);

// 20. Update Section 7 title and text:
html = html.replace(section7Target, section7Replacement);

// 21. Update maintenance pricing table after 2026:
html = html.replace(maintenanceTableTarget, maintenanceTableReplacement);

// 22. Remove Page 4 content div container
const page4ContentTargetStart = `<div id="page4-content" class="tab-view">`;
const page4ContentTargetEnd = `</div> <!-- Close #page4-content -->`;
const startIndex = html.indexOf(page4ContentTargetStart);
const endIndex = html.indexOf(page4ContentTargetEnd) + page4ContentTargetEnd.length;
if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + html.substring(endIndex);
}

// 23. Remove page 4 header check in JS switchPageView
const page4HeaderJSTarget = ` else if (pageId === 'page4') {
                pageTitle.innerText = "04. Giả lập ứng dụng quản trị điều phối H60";
                pageSubtitle.innerText = "Trải nghiệm mô phỏng tác nghiệp trên mockup di động";
            }`;
html = html.replace(page4HeaderJSTarget, '');

// 24. Update JS currentTotal = 800000000;
html = html.replace('let currentTotal = 735000000;', 'let currentTotal = 800000000;');

fs.writeFileSync(filePath, html, 'utf8');
console.log("Successfully updated index.html!");
