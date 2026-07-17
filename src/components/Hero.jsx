import { ArrowRight, FileCheck2 } from 'lucide-react';
import { motion } from 'framer-motion';
 
const headlineWords = ['English', 'Language', '&', 'Culture', 'Learning', 'Portfolio'];
 
export default function Hero({ student, setActiveTab }) {
  return (
    <section className="px-5 pb-20 pt-12 sm:px-8 md:pt-20 xl:px-12 xl:pb-28">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-7 xl:col-span-8">
            <p className="editorial-label inline-flex rounded-sm bg-primary-mint/80 px-5 py-2 text-primary">Academic Year {student.academicYear}</p>
            <h1 className="relative mt-8 max-w-5xl font-display text-[clamp(3.3rem,7.6vw,7.7rem)] font-normal leading-[0.93] tracking-[-0.025em] text-primary">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="mr-[0.18em] inline-block"
                  initial={{ opacity: 0, y: 38, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <div className="mt-10 space-y-3" aria-hidden="true">
              <div className="h-px w-full bg-border-light" />
              <div className="h-px w-2/3 bg-border-light opacity-70" />
              <div className="h-px w-1/3 bg-border-light opacity-40" />
            </div>
            <motion.div
              className="glass-panel relative mt-12 max-w-3xl overflow-hidden rounded-xl p-8 sm:p-10"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65 }}
            >
              {/* Top Accent Line */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-primary/50 via-beige/80 to-transparent" />

              {/* Tag/Label */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-beige animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-dark">Course Module</span>
              </div>

              {/* Course Title */}
              <h3 className="mt-4 font-display text-2xl font-normal leading-snug text-primary sm:text-3xl">
                Nhập môn Công nghệ số &amp; Ứng dụng Trí tuệ nhân tạo
              </h3>

              {/* Course Description */}
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-dark max-w-2xl">
                Hồ sơ học thuật chứng thực năng lực số, kỹ năng phân tích dữ liệu, prompt engineering và ứng dụng AI thực tế qua chuỗi sản phẩm thực hành.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.button 
                  whileHover={{ y: -2 }} 
                  whileTap={{ scale: 0.98 }} 
                  type="button" 
                  onClick={() => setActiveTab('projects')} 
                  className="button-light"
                >
                  Mục bài tập <ArrowRight size={16} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ y: -2 }} 
                  whileTap={{ scale: 0.98 }} 
                  type="button" 
                  onClick={() => setActiveTab('evidence')} 
                  className="button-dark-outline"
                >
                  Minh chứng <FileCheck2 size={16} />
                </motion.button>
              </div>
            </motion.div>
          </div>
 
          <motion.aside
            className="glass-panel relative h-fit overflow-hidden rounded-2xl p-7 lg:col-span-5 lg:self-start xl:col-span-4 border border-primary/10 bg-white/40 shadow-[0_8px_30px_rgba(62,39,35,0.03)] backdrop-blur-xl"
            initial={{ opacity: 0, x: 36, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            {/* Background Decorative Elements */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 -z-10 h-36 w-36 rounded-full bg-beige/15 blur-2xl" />
            <div className="pointer-events-none absolute -top-10 -left-10 -z-10 h-32 w-32 rounded-full bg-primary-mint/35 blur-2xl" />
            
            {/* Outline Quotes Decoration */}
            <span className="absolute right-8 top-5 font-display text-[6rem] leading-none text-primary/5 select-none pointer-events-none">”</span>

            {/* Profile Header */}
            <div>
              <p className="editorial-label text-[9px] text-secondary font-bold tracking-[0.2em]">STUDENT PROFILE</p>
              <h2 className="mt-2.5 font-sans text-2xl font-bold tracking-tight text-charcoal">{student.name}</h2>
            </div>

            {/* Portrait Image Wrapper */}
            <div className="relative mt-6 overflow-hidden rounded-xl border border-primary/5 bg-white/20 p-2 shadow-[0_4px_20px_rgba(62,39,35,0.02)]">
              <img
                src="/avatar-dinh-thai-son.jpg"
                alt={`${student.name} portfolio owner`}
                className="warm-image aspect-[4/5] w-full rounded-lg object-cover object-center transition duration-500 hover:scale-[1.02] shadow-sm"
              />
              {/* Overlapping Name Sticker */}
              <div className="absolute bottom-5 left-5 rounded-full border border-primary/10 bg-white/80 px-4 py-1.5 shadow-[0_2px_10px_rgba(62,39,35,0.05)] backdrop-blur-md transition hover:bg-white/95">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Bảo Anh</span>
              </div>
            </div>

            {/* Sub-info */}
            <div className="mt-5">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold tracking-[0.18em] text-secondary uppercase">
                  {student.id}
                </span>
                <span className="h-1 w-1 rounded-full bg-primary/20" />
                <span className="text-[9px] font-bold tracking-[0.18em] text-secondary uppercase">
                  {student.shortUniversity}
                </span>
              </div>
              
              <p className="mt-3.5 text-[14px] font-medium leading-relaxed text-charcoal italic border-l-2 border-beige/40 pl-3">
                "Học ngôn ngữ bằng tư duy số, sự tò mò văn hóa và cách sử dụng AI có trách nhiệm."
              </p>
            </div>

            {/* Badges / Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["English Language", "English Culture", "Digital Literacy", "AI-assisted Learning"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/10 bg-primary-mint/30 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-[0_1px_2px_rgba(39,19,16,0.01)] backdrop-blur-sm transition-all duration-300 hover:bg-white/85 hover:border-primary/20 hover:scale-[1.02]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
