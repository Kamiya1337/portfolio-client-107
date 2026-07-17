import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Hero from './Hero';

const modules = [
  { number: '01', title: 'Coursework', copy: 'Assignments and applied academic work.', tab: 'projects' },
  { number: '02', title: 'Evidence', copy: 'Reports, media, and linked learning artifacts.', tab: 'evidence' },
  { number: '03', title: 'Rubric', copy: 'Evaluation criteria and portfolio readiness.', tab: 'rubric' },
  { number: '04', title: 'Reflection', copy: 'Personal insight, challenges, and next steps.', tab: 'summary' },
];

export default function HomeTab({ setActiveTab }) {
  const { student } = portfolioData;
  return (
    <div>
      <Hero student={student} setActiveTab={setActiveTab} />
      <section className="px-5 pb-20 sm:px-8 xl:px-12 xl:pb-24">
        <motion.div className="glass-panel mx-auto grid max-w-[1220px] gap-8 rounded-xl px-7 py-10 md:grid-cols-12 md:gap-10 md:px-10 md:py-12" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
          <div className="md:col-span-4">
            <p className="editorial-label">ĐỊNH VỊ CÁ NHÂN</p>
            <h2 className="mt-4 font-display text-5xl font-normal tracking-[-0.02em] text-primary sm:text-6xl">Digital Innovator</h2>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-muted-dark">Analytical Precision × Creative Technology</p>
          </div>
          <div className="border-t border-border-light pt-7 md:col-span-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="max-w-3xl text-base leading-8 text-charcoal">Em luôn bị cuốn hút bởi những tiềm năng to lớn của công nghệ và không gian số. Bản thân em tự định hình hướng đi tại điểm giao thoa giữa tư duy phân tích thực tế và sự sáng tạo không giới hạn. Việc thấu hiểu cơ chế vận hành của các công cụ số để cải tiến và tạo ra các sản phẩm thực tiễn, mang lại giá trị thực tế cho người dùng là mục tiêu em luôn hướng tới. Tập portfolio này chính là cuốn biên niên ký ghi nhận hành trình em trải nghiệm, làm chủ các giải pháp công nghệ số cùng AI, từ đó chuyển hóa tri thức giảng đường thành kết quả cụ thể.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal">Không chỉ dừng lại ở một trang lưu trữ bài tập học phần, đây còn là minh chứng sống động cho quá trình em khám phá công nghệ mới, ứng dụng linh hoạt lý thuyết vào thực tiễn để mang tới trải nghiệm tối ưu cho người đánh giá.</p>
          </div>
        </motion.div>
      </section>
      <section className="px-5 py-20 sm:px-8 xl:px-12 xl:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7"><p className="editorial-label">Portfolio Navigation</p><h2 className="mt-4 font-display text-5xl font-normal tracking-[-0.02em] text-primary sm:text-6xl">Module Explorer</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-dark lg:col-span-5 lg:justify-self-end">Navigate the academic journey through coursework, supporting evidence, assessment criteria, and reflection.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((item, index) => (
              <motion.button type="button" key={item.number} onClick={() => setActiveTab(item.tab)} className={`glass-card group min-h-72 rounded-xl p-7 text-left ${index > 1 ? 'xl:translate-y-8' : ''}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.06, duration: 0.5 }} whileTap={{ scale: 0.98 }}>
                <span className="font-display text-7xl font-normal tracking-[-0.03em] text-primary/25">{item.number}</span>
                <div className="mt-16 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-normal">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-dark">{item.copy}</p></div><ArrowUpRight size={17} className="mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 pt-8 sm:px-8 xl:px-12 xl:pb-32 xl:pt-12">
        <div className="glass-panel mx-auto flex min-h-80 max-w-[1220px] items-center justify-center rounded-xl p-10 text-center">
          <div><p className="editorial-label">Academic Framework</p><p className="mt-6 max-w-4xl font-display text-3xl font-normal leading-tight tracking-[-0.02em] sm:text-5xl">Academic growth gains credibility when it is systematically documented, critically reviewed, and deeply reflected upon.</p></div>
        </div>
      </section>
    </div>
  );
}
