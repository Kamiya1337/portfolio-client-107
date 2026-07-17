import { Check, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function isComplete(value) {
  return Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');
}

export default function EvidenceTable({ onPreview }) {
  const { projects } = portfolioData;

  const flattenedReports = projects.reduce((acc, project) => {
    if (project.reports) {
      project.reports.forEach((rep) => {
        acc.push({
          id: `${project.id}-${rep.file}`,
          moduleTitle: project.title,
          chapter: project.chapter,
          name: rep.name,
          file: rep.file
        });
      });
    } else {
      acc.push({
        id: project.id,
        moduleTitle: project.title,
        chapter: project.chapter,
        name: "Báo cáo bài tập",
        file: project.report
      });
    }
    return acc;
  }, []);

  const completed = flattenedReports.filter((r) => isComplete(r.file)).length;

  const EvidenceLink = ({ value, label }) => {
    if (!value || value === 'Sẽ cập nhật sau') return <span className="ledger-status">Đang chờ</span>;
    if (value === 'Không yêu cầu') return <span className="ledger-status">Không yêu cầu</span>;
    return (
      <a 
        href={value} 
        target="_blank" 
        rel="noreferrer" 
        onClick={(event) => onPreview(event, value, 'pdf')} 
        className="ledger-link"
      >
        {label}<Maximize2 size={13} />
      </a>
    );
  };

  const StatusBadge = ({ value }) => {
    const complete = isComplete(value);
    return complete ? <span className="ledger-status ledger-status-complete"><Check size={12} /> Đã nộp</span> : <span className="ledger-status">Thiếu minh chứng</span>;
  };

  return (
    <div className="min-h-screen">
      <header className="page-intro">
        <p className="editorial-label">Submission Repository</p>
        <h1 className="page-title max-w-5xl">A curated archive of academic milestones.</h1>
        <p className="page-copy">Bảng tổng hợp giữ nguyên báo cáo và trạng thái thực tế của từng bài tập.</p>
      </header>
      <section className="px-5 pb-28 sm:px-8 xl:px-12">
        <div className="glass-panel mx-auto max-w-[1220px] overflow-hidden rounded-xl">
          <div className="divide-y divide-border-light md:hidden">
            {flattenedReports.map((rep) => (
              <article key={rep.id} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="editorial-label">{rep.chapter}</p>
                    <h2 className="mt-3 font-display text-lg font-normal leading-snug">{rep.name}</h2>
                    <p className="mt-1 text-xs text-muted-dark italic">{rep.moduleTitle}</p>
                  </div>
                  <StatusBadge value={rep.file} />
                </div>
                <div className="mt-4">
                  <EvidenceLink value={rep.file} label="Xem báo cáo" />
                </div>
              </article>
            ))}
          </div>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border-light bg-white/30 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-dark">
                  <th className="px-7 py-6">Bài thực hành / Học phần</th>
                  <th className="px-7 py-6">Tài liệu đính kèm</th>
                  <th className="px-7 py-6">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {flattenedReports.map((rep) => (
                  <tr key={rep.id} className="border-b border-border-light transition-colors hover:bg-white/60">
                    <td className="px-7 py-8">
                      <p className="font-display text-base font-normal text-charcoal">{rep.name}</p>
                      <p className="mt-2 text-xs uppercase tracking-wider text-muted-dark">{rep.chapter} — {rep.moduleTitle}</p>
                    </td>
                    <td className="px-7 py-8">
                      <EvidenceLink value={rep.file} label="Xem báo cáo" />
                    </td>
                    <td className="px-7 py-8">
                      <StatusBadge value={rep.file} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-border-light bg-surface/55 px-7 py-5">
            <p className="editorial-label">Hiển thị {flattenedReports.length} tài liệu học thuật</p>
            <p className="text-sm text-muted-dark">{completed}/{flattenedReports.length} hoàn thành</p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1220px] gap-5 md:grid-cols-3">
          <div className="glass-card rounded-xl p-8 md:col-span-2">
            <p className="editorial-label">Kiểm tra liêm chính</p>
            <h2 className="mt-5 font-display text-3xl font-normal">Tỉ lệ hoàn thiện thực tế</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-dark">Số liệu tính toán trực tiếp dựa trên sự tồn tại của tệp tin đính kèm trong thư viện số.</p>
            <p className="mt-10 font-display text-7xl font-normal">{Math.round((completed / flattenedReports.length) * 100)}%</p>
          </div>
          <div className="glass-card rounded-xl p-8">
            <p className="editorial-label">Quy mô lưu trữ</p>
            <p className="mt-10 font-display text-6xl font-normal">{flattenedReports.length}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-dark">tài liệu học tập</p>
          </div>
        </div>
      </section>
    </div>
  );
}
