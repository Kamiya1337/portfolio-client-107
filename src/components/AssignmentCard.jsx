import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
 
const isAvailable = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');
 
export default function AssignmentCard({ project, onSelect }) {
  const [imageVisible, setImageVisible] = useState(Boolean(project.evidenceImg));
  return (
    <motion.article className="glass-card group flex h-full flex-col overflow-hidden rounded-xl" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} whileHover={{ y: -6 }}>
      {imageVisible && (
        <div className="relative h-44 overflow-hidden bg-surface-container">
          <img src={project.evidenceImg} alt={`Minh chứng ${project.title}`} onError={() => setImageVisible(false)} className="warm-image h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute left-4 top-4">
            <span className="dark-label-box">Assignment {String(project.id).padStart(2, '0')}</span>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        {!imageVisible && <span className="dark-label-box">Assignment {String(project.id).padStart(2, '0')}</span>}
        <span className="text-xs text-muted-dark">{project.chapter}</span>
      </div>
      <h2 className="mt-7 font-display text-2xl font-normal leading-8 tracking-[-0.02em]">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-dark">{project.shortDesc}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span key={skill} className="rounded-full border border-white/60 bg-white/35 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-muted-dark">{skill}</span>)}</div>
      <div className="mt-auto pt-7">
        {isAvailable(project.report) ? <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link"><FileText size={13} /> Report</a> : <span className="card-resource-link opacity-50">Report pending</span>}
      </div>
      <button type="button" onClick={() => onSelect(project)} className="mt-3 flex min-h-12 items-center justify-between rounded-sm bg-primary px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-secondary active:scale-[0.98]">View Case Study <ArrowRight size={16} /></button>
      </div>
    </motion.article>
  );
}
