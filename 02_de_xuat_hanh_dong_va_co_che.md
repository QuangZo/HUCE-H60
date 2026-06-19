# PHẦN 2: QUY TRÌNH TÁC NGHIỆP & MA TRẬN PHÂN ĐỊNH TRÁCH NHIỆM RACI
**Dự án: Chuẩn hóa Thương hiệu & Tái cấu trúc Hệ thống Vận hành Truyền thông**

---

## 1. QUY TRÌNH PHỐI HỢP TÁC NGHIỆP & PHÊ DUYỆT

Để đảm bảo tính chuẩn xác của thông tin hành chính, quy trình phối hợp duyệt nội dung giữa ConsMedia và HUCE được thiết lập như sau:

```mermaid
sequenceDiagram
    participant B as ConsMedia (Bên B)
    participant P as Phòng Truyền thông & Tuyển sinh (Đầu mối HUCE)
    participant VP as Văn phòng Trường (Tham mưu)
    participant T as PGS.TS. Hoàng Tùng (Hiệu trưởng/Phê duyệt)
    
    B->>P: Đề xuất nội dung/Ý tưởng thiết kế/Kịch bản chi tiết
    P->>P: Kiểm tra chuyên môn & tính học đường
    alt Nội dung thường nhật (Tin bài CLB, thể thao, tin vặt)
        P->>B: Phê duyệt trực tiếp & Cho phép xuất bản ngay (<2 giờ)
    else Nội dung chiến lược (Kỷ yếu, phim truyền thống, thông báo chính thức)
        P->>VP: Trình Văn phòng Trường xem xét nội dung
        VP->>T: Tham mưu trình Hiệu trưởng phê duyệt cuối
        T->>P: Chỉ đạo phê duyệt bằng văn bản/tin nhắn
        P->>B: Chuyển kết quả phê duyệt để xuất bản
    end
```

---

