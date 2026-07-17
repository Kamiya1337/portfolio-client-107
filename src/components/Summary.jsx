import { portfolioData } from '../data/portfolioData';

const sections = [
  {
    number: '01',
    label: 'Kiến thức',
    title: 'Kiến thức & Kỹ năng đã đạt được',
    copy: `"Thời gian đầu, em từng xem việc lập portfolio chỉ đơn thuần là tập hợp các tệp bài tập và tải lên website để hoàn thành yêu cầu. Tuy nhiên, khi thực sự thiết lập cấu trúc trang, em hiểu rằng nếu chỉ hiển thị các tệp đơn lẻ, sản phẩm sẽ thiếu đi sự liên kết, đồng thời người đánh giá cũng khó cảm nhận được tiến trình phát triển năng lực qua từng học phần.

Trải nghiệm từ môn học đã giúp em cải thiện đáng kể tư duy tổ chức dữ liệu, từ việc phân loại tài liệu khoa học đến cách chuẩn hóa tên tệp để dễ dàng truy xuất. Bên cạnh đó, kỹ năng chọn lọc tài nguyên mạng và khai thác GenAI của em cũng được nâng tầm. Thay vì đặt câu hỏi rời rạc và ngẫu hứng như trước, em đã học cách thiết kế các câu lệnh (prompt) chuẩn hóa với đầy đủ bối cảnh, vai trò và định dạng mong muốn, giúp kết quả phản hồi chính xác và hữu ích hơn.

Việc xây dựng portfolio dưới dạng một trang web hoàn chỉnh cũng mang lại cho em kỹ năng xuất bản số cơ bản. Em được tự tay thiết lập bố cục giao diện, sắp xếp liên kết minh chứng và tối ưu hóa trải nghiệm điều hướng để người xem dễ tiếp cận nhất."`,
  },
  {
    number: '02',
    label: 'Thách thức',
    title: 'Khó khăn gặp phải',
    copy: 'Thử thách lớn nhất đối với em không nằm ở việc biên soạn nội dung các báo cáo riêng lẻ, mà là quá trình tích hợp toàn bộ dữ liệu đó vào một hệ thống website nhất quán. Việc tinh chỉnh giao diện, phối hợp màu sắc, đồng bộ liên kết minh chứng, bảng tự đánh giá rubric và xử lý định dạng in ấn/xuất PDF tiêu tốn khá nhiều thời gian và công sức. Trong quá trình thiết kế, em có tham khảo ý kiến của AI để tối ưu hóa code giao diện cũng như kiểm tra lỗi diễn đạt của văn bản. Tuy vậy, em hoàn toàn không lạm dụng hay sao chép nguyên bản từ AI. Bản thân em phải trực tiếp chạy thử nghiệm, sửa các dòng lệnh lỗi và chuyển đổi các nội dung mẫu chung chung thành những số liệu, thông tin thực tế từ quá trình học tập của mình.',
  },
  {
    number: '03',
    label: 'Next Steps',
    title: 'Kế hoạch hoàn thiện',
    copy: 'Trong giai đoạn tiếp theo, em dự định rà soát kỹ lưỡng toàn bộ liên kết tài liệu PDF trên website để loại trừ lỗi đường truyền hay sai lệch tệp tin. Đối với các bài tập mà minh chứng nằm trực tiếp trong tài liệu báo cáo chính, em sẽ ghi chú rõ ràng thay vì cố gắng thêm thắt liên kết hoặc tự tạo ra các sản phẩm không có thực. Cuối cùng, em sẽ chạy thử nghiệm tính năng xuất tệp PDF của toàn bộ website nhằm đảm bảo hồ sơ khi nộp lên hệ thống đào tạo giữ nguyên định dạng, không bị lỗi font chữ hay đứt gãy bố cục.',
  },
];

export default function Summary() {
  const { student } = portfolioData;
  return (
    <div className="min-h-screen">
      <header className="px-5 pb-16 pt-20 text-center sm:px-8 xl:px-12 xl:pt-28"><p className="editorial-label">05 Reflection</p><h1 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-normal leading-[0.98] tracking-[-0.02em] text-primary">Tổng kết &amp; Suy ngẫm</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-dark">Nhìn lại hành trình học tập, những khó khăn đã trải qua và cam kết hoàn thiện Portfolio một cách trung thực.</p></header>
      <main className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <div className="space-y-10">{sections.map((section) => <section key={section.number} className="glass-card grid gap-6 rounded-xl p-7 md:grid-cols-[96px_1fr] md:p-10"><span className="font-display text-5xl font-normal text-primary/35">{section.number}</span><div><p className="editorial-label">{section.label}</p><h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.02em] text-primary">{section.title}</h2><p className="mt-7 whitespace-pre-line text-base leading-8 text-charcoal">{section.copy}</p></div></section>)}</div>
        <section className="glass-panel mt-16 rounded-xl p-8 sm:p-12"><p className="editorial-label">Academic Integrity</p><h2 className="mt-4 font-display text-4xl font-normal tracking-[-0.02em] text-primary">Cam kết Liêm chính Học thuật</h2><p className="mt-7 whitespace-pre-line text-base italic leading-8 text-muted-dark">{`Em, Nguyễn Bảo Anh, xin cam kết toàn bộ nội dung báo cáo và tư liệu thực hành được lưu trữ tại portfolio này đều phản ánh chính xác kết quả học tập thực tế của bản thân. Trong suốt quá trình thực hiện, em có sử dụng trí tuệ nhân tạo như một công cụ tham vấn để tối ưu hóa bố cục, gỡ lỗi kỹ thuật và biên tập câu từ.

Đối với em, công cụ AI chỉ đóng vai trò hỗ trợ gia tăng hiệu suất làm việc chứ không thể thay thế cho tư duy độc lập và nỗ lực tự học. Em hoàn toàn không làm giả minh chứng học thuật, không khai khống các sản phẩm chưa thực hiện và không xuyên tạc tiến trình làm bài của mình.

Em xin chân thành cảm ơn thầy cô đã dành thời gian quý báu để xem xét và đánh giá portfolio này.`}</p><div className="mt-10 border-t border-border-light pt-6"><p className="editorial-label">Student</p><p className="mt-2 font-display text-2xl font-normal">{student.name}</p></div></section>
      </main>
    </div>
  );
}
