import { FolderTree, Search, MessageSquare, Users, PenTool, ShieldCheck, Cpu } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Nguyễn Bảo Anh",
    id: "K70",
    major: "Ngôn Ngữ và Văn hóa Anh",
    university: "Trường Đại học Ngoại Ngữ - Đại học Quốc gia Hà Nội",
    shortUniversity: "ULIS - VNU",
    academicYear: "2025–26",
    bio: "Sinh viên ngành Ngôn Ngữ và Văn hóa Anh tại Trường Đại học Ngoại Ngữ - Đại học Quốc gia Hà Nội.",
    skills: ["React & Web Dev", "AI Tools (ChatGPT, Gemini)", "Digital Literacy", "Research", "Team Collaboration"]
  },
  overview: [
    { id: 1, title: "Quản lý dữ liệu", desc: "Máy tính, tệp và thư mục", icon: FolderTree },
    { id: 2, title: "Khai thác thông tin", desc: "Tìm kiếm & đánh giá dữ liệu", icon: Search },
    { id: 3, title: "Tư duy AI", desc: "Prompt engineering hiệu quả", icon: MessageSquare },
    { id: 4, title: "Hợp tác trực tuyến", desc: "Làm việc nhóm trong môi trường số", icon: Users },
    { id: 5, title: "Sáng tạo nội dung", desc: "Tạo sản phẩm số với AI", icon: PenTool },
    { id: 6, title: "Liêm chính học thuật", desc: "An toàn số & AI có trách nhiệm", icon: ShieldCheck },
    { id: 7, title: "AI trong Kỹ thuật", desc: "Ứng dụng AI vào Khoa học & CN", icon: Cpu },
  ],
  projects: [
    {
      id: 1,
      title: "Bài 1: Máy tính và các thiết bị ngoại vi",
      chapter: "Chương 1 & 2",
      shortDesc: "Thực hành thao tác hệ điều hành và tổ chức cây thư mục lưu trữ khoa học.",
      skills: ["Hệ điều hành", "Quản lý tệp", "Tổ chức thư mục"],
      target: "Làm quen với thao tác cơ bản trên máy tính, tệp tin và so sánh các đặc điểm của hệ điều hành phổ biến.",
      process: "Tìm hiểu cấu trúc ổ đĩa, thực hiện các thao tác tạo lập, phân loại và lưu trữ tệp tin. So sánh sự khác nhau giữa Windows, macOS và Linux.",
      report: "/docs/module-1/bt-1.pdf",
      reports: [
        {
          name: "Bài tập 1: Thao tác cơ bản với tệp tin và thư mục (Bài tập bắt buộc - Tính điểm cuối kì)",
          file: "/docs/module-1/bt-1.pdf"
        },
        {
          name: "Bài tập 2: Tìm hiểu và so sánh các hệ điều hành (Bài tập bổ trợ)",
          file: "/docs/module-1/bt-2.pdf"
        }
      ],
      status: "Đang hoàn thiện"
    },
    {
      id: 2,
      title: "Bài 2: Khai thác dữ liệu và thông tin",
      chapter: "Chương 2",
      shortDesc: "Quản lý thông tin số cá nhân, sử dụng toán tử nâng cao và đánh giá nguồn tin học thuật.",
      skills: ["Quản lý dữ liệu", "Tìm kiếm thông tin", "Đánh giá CRAAP", "Phân tích AI"],
      target: "Nắm vững kỹ năng lưu trữ đám mây, sử dụng cú pháp tìm kiếm nâng cao, thẩm định độ tin cậy của thông tin mạng và tổng hợp bằng AI.",
      process: "Thiết lập cấu trúc thư mục lưu trữ khoa học trên Google Drive/OneDrive. Áp dụng các toán tử tìm kiếm chuyên nghiệp, đánh giá nguồn tài liệu bằng quy chuẩn CRAAP và dùng AI phân tích tóm tắt bài báo khoa học.",
      report: "/docs/module-2/bt-2.pdf",
      reports: [
        {
          name: "Bài tập 1: Tổ chức và quản lý dữ liệu cá nhân (Bài tập bổ trợ)",
          file: "/docs/module-2/bt-1.pdf"
        },
        {
          name: "Bài tập 2: Tìm kiếm và đánh giá thông tin học thuật (Bài tập bắt buộc - Tính điểm cuối kì)",
          file: "/docs/module-2/bt-2.pdf"
        },
        {
          name: "Bài tập 3: Sử dụng công cụ tìm kiếm nâng cao (Bài tập bổ trợ)",
          file: "/docs/module-2/bt-3.pdf"
        },
        {
          name: "Bài tập 4: Phân tích và tổng hợp thông tin với sự hỗ trợ của AI (Bài tập bổ trợ)",
          file: "/docs/module-2/bt-4.pdf"
        }
      ],
      status: "Đang hoàn thiện"
    },
    {
      id: 3,
      title: "Bài 3: Tổng quan về trí tuệ nhân tạo",
      chapter: "Chương 3",
      shortDesc: "Kỹ năng Prompt Engineering tối ưu cho các hoạt động học tập và nghiên cứu.",
      skills: ["Prompt Engineering", "Mô hình ngôn ngữ lớn", "Tối ưu hóa học tập"],
      target: "Làm chủ phương pháp xây dựng câu lệnh (prompt) có cấu trúc để khai thác tốt nhất các mô hình ngôn ngữ lớn.",
      process: "Thiết kế các mẫu prompt theo cấu trúc vai trò, ngữ cảnh, nhiệm vụ để hỗ trợ giải quyết bài tập dịch thuật, viết luận và tóm tắt kiến thức.",
      report: "/docs/module-3/bt2.pdf",
      reports: [
        {
          name: "Bài tập 2: Viết Prompt hiệu quả cho các tác vụ học tập (Bài tập bắt buộc - Tính điểm cuối kì)",
          file: "/docs/module-3/bt2.pdf"
        }
      ],
      status: "Đang hoàn thiện"
    },
    {
      id: 4,
      title: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      chapter: "Chương 4",
      shortDesc: "Sử dụng các công cụ cộng tác đám mây để tối ưu hóa tiến độ làm việc nhóm.",
      skills: ["Hợp tác số", "Quản lý nhóm", "Google Workspace", "Notion/Trello"],
      target: "Tổ chức không gian làm việc số chia sẻ, lập kế hoạch và theo dõi công việc nhóm trực quan.",
      process: "Xây dựng bảng Kanban theo dõi công việc, cộng tác soạn thảo tài liệu đồng thời trên đám mây và lưu trữ tài nguyên nhóm tập trung.",
      report: "/docs/module-4/bt3.pdf",
      reports: [
        {
          name: "Bài tập 3: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm (Bài tập bắt buộc - Tính điểm cuối kì)",
          file: "/docs/module-4/bt3.pdf"
        }
      ],
      status: "Đang hoàn thiện"
    },
    {
      id: 5,
      title: "Bài 5: Sáng tạo nội dung số",
      chapter: "Chương 5",
      shortDesc: "Quy trình thiết kế sản phẩm đa phương tiện kết hợp công cụ AI tạo sinh hình ảnh và âm thanh.",
      skills: ["Sáng tạo nội dung", "AI sinh ảnh", "Multimedia Design"],
      target: "Lập kế hoạch nội dung truyền thông và ứng dụng AI tạo tác phẩm số dưới sự kiểm duyệt chất lượng của tác giả.",
      process: "Viết kịch bản nội dung, sử dụng AI hỗ trợ phác thảo hình ảnh nghệ thuật và biên tập hoàn thiện ấn phẩm đa phương tiện.",
      report: "/docs/module-5/bt2.pdf",
      reports: [
        {
          name: "Bài tập 1: Lập kế hoạch và sáng tạo nội dung số đa phương tiện (Bài tập bổ trợ)",
          file: "/docs/module-5/bt1.pdf"
        },
        {
          name: "Bài tập 2: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung (Bài tập bắt buộc - Tính điểm cuối kì)",
          file: "/docs/module-5/bt2.pdf"
        }
      ],
      status: "Đang hoàn thiện"
    },
    {
      id: 6,
      title: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      chapter: "Chương 6",
      shortDesc: "Đạo đức học thuật và nguyên tắc sử dụng AI có trách nhiệm trong môi trường đại học.",
      skills: ["An toàn thông tin", "Liêm chính học thuật", "Sử dụng AI có trách nhiệm"],
      target: "Xây dựng bản nguyên tắc và cam kết đạo đức cá nhân khi tích hợp AI vào học tập.",
      process: "Nghiên cứu các rủi ro bảo mật số cá nhân và quy định đạo đức sử dụng AI chống đạo văn trong học tập.",
      report: "/docs/module-6/bt4.pdf",
      reports: [
        {
          name: "Bài tập 4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu (Bài tập bắt buộc - Tính điểm cuối kì)",
          file: "/docs/module-6/bt4.pdf"
        }
      ],
      status: "Đang hoàn thiện"
    }
  ],
  rubric: [
    { criteria: "Thiết kế và cấu trúc Portfolio", excellent: "Chuyên nghiệp, sáng tạo, điều hướng tốt, UI/UX hiện đại.", status: "Hoàn thiện 90%", action: "Bổ sung ảnh minh họa thực tế" },
    { criteria: "Bài 1: Máy tính và các thiết bị ngoại vi", excellent: "Cấu trúc tối ưu, quy tắc đặt tên rõ ràng, minh họa sắc nét.", status: "Hoàn thiện 100%", action: "Đã đồng bộ đầy đủ" },
    { criteria: "Bài 2: Khai thác dữ liệu và thông tin", excellent: "Nộp đầy đủ các bài thực hành học phần theo quy định.", status: "Hoàn thiện 100%", action: "Đã đồng bộ đầy đủ" },
    { criteria: "Bài 3: Tổng quan về trí tuệ nhân tạo", excellent: "So sánh rõ ràng trước/sau, phân tích lỗi và cải tiến sâu sắc.", status: "Hoàn thiện 100%", action: "Đã đồng bộ đầy đủ" },
    { criteria: "Bài 4: Giao tiếp và hợp tác trong môi trường số", excellent: "Minh chứng rõ việc chia task, họp nhóm và quản lý tiến độ.", status: "Hoàn thiện 100%", action: "Đã đồng bộ đầy đủ" },
    { criteria: "Bài 5: Sáng tạo nội dung số", excellent: "Sản phẩm đẹp, sáng tạo, trích dẫn rõ phần nào dùng AI.", status: "Hoàn thiện 100%", action: "Đã đồng bộ đầy đủ" },
    { criteria: "Bài 6: An toàn và liêm chính học thuật trong môi trường số", excellent: "Bộ nguyên tắc cá nhân chặt chẽ, tư duy phản biện cao.", status: "Hoàn thiện 100%", action: "Đã đồng bộ đầy đủ" },
  ]
};
