import { useState } from 'react';
import { Check, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function isComplete(value) {
  return Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');
}

export default function EvidenceTable() {
  const { projects } = portfolioData;
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const completed = projects.filter((project) => isComplete(project.report)).length;
 
  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const EvidenceLink = ({ value, label, type }) => {
    if (!value || value === 'Sẽ cập nhật sau') return <span className="ledger-status">Đang chờ</span>;
    if (value === 'Không yêu cầu') return <span className="ledger-status">Không yêu cầu</span>;
    return <a href={value} target="_blank" rel="noreferrer" onClick={(event) => openPreview(event, value, type)} className="ledger-link">{label}<Maximize2 size={13} /></a>;
  };
  const StatusBadge = ({ project }) => {
    const complete = isComplete(project.report);
    return complete ? <span className="ledger-status ledger-status-complete"><Check size={12} /> Đã nộp</span> : <span className="ledger-status">Thiếu minh chứng</span>;
  };
 
  return (
    <div className="min-h-screen">
      {previewData.isOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/55 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước minh chứng"><div className="glass-panel flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl"><div className="flex items-center justify-between border-b border-border-light px-5 py-4"><div><p className="editorial-label">Preview</p><h3 className="mt-1 font-display text-2xl font-normal">Báo cáo PDF</h3></div><div className="flex gap-2"><a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a><button type="button" aria-label="Đóng xem trước" onClick={() => setPreviewData({ isOpen: false, url: '', type: '' })} className="icon-button-dark"><X size={18} /></button></div></div><div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-surface/55 p-4"><iframe src={previewData.url} title="PDF Preview" className="h-full w-full rounded-lg border-0 bg-white" /></div></div></div>}
      <header className="page-intro"><p className="editorial-label">Submission Repository</p><h1 className="page-title max-w-5xl">A curated archive of academic milestones.</h1><p className="page-copy">Bảng tổng hợp giữ nguyên báo cáo và trạng thái thực tế của từng bài tập.</p></header>
      <section className="px-5 pb-28 sm:px-8 xl:px-12">
        <div className="glass-panel mx-auto max-w-[1220px] overflow-hidden rounded-xl">
          <div className="divide-y divide-border-light md:hidden">{projects.map((project) => <article key={project.id} className="p-6"><div className="flex items-start justify-between gap-4"><div><p className="editorial-label">Assignment {String(project.id).padStart(2, '0')}</p><h2 className="mt-3 font-display text-2xl font-normal">{project.title}</h2></div><StatusBadge project={project} /></div><div className="mt-6"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></div></article>)}</div>
          <div className="hidden overflow-x-auto md:block"><table className="w-full min-w-[640px] border-collapse text-left"><thead><tr className="border-b border-border-light bg-white/30 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-dark"><th className="px-7 py-6">Assignment</th><th className="px-7 py-6">Report File</th><th className="px-7 py-6">Status</th></tr></thead><tbody>{projects.map((project) => <tr key={project.id} className="border-b border-border-light transition-colors hover:bg-white/60"><td className="px-7 py-8"><p className="font-display text-xl font-normal">{project.title}</p><p className="mt-2 text-xs uppercase tracking-wider text-muted-dark">{project.chapter}</p></td><td className="px-7 py-8"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td><td className="px-7 py-8"><StatusBadge project={project} /></td></tr>)}</tbody></table></div>
          <div className="flex items-center justify-between border-t border-border-light bg-surface/55 px-7 py-5"><p className="editorial-label">Showing {projects.length} academic records</p><p className="text-sm text-muted-dark">{completed}/{projects.length} complete</p></div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1220px] gap-5 md:grid-cols-3"><div className="glass-card rounded-xl p-8 md:col-span-2"><p className="editorial-label">Integrity Check</p><h2 className="mt-5 font-display text-3xl font-normal">Submission Accuracy</h2><p className="mt-5 max-w-xl text-sm leading-7 text-muted-dark">Mỗi trạng thái được tính trực tiếp từ dữ liệu báo cáo hiện có.</p><p className="mt-10 font-display text-7xl font-normal">{Math.round((completed / projects.length) * 100)}%</p></div><div className="glass-card rounded-xl p-8"><p className="editorial-label">Archive Health</p><p className="mt-10 font-display text-6xl font-normal">{projects.length}</p><p className="mt-2 text-xs uppercase tracking-widest text-muted-dark">assignment records</p></div></div>
      </section>
    </div>
  );
}
