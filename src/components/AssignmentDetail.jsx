import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
 
export default function AssignmentDetail({ project, onBack, onPreview }) {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-8 xl:px-12 xl:py-16">
      <button type="button" onClick={onBack} className="button-secondary"><ArrowLeft size={17} /> Quay lại danh sách</button>
      <article className="glass-panel mx-auto mt-8 max-w-[1220px] overflow-hidden rounded-xl">
        <header className="grid gap-8 border-b border-border-light p-7 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-3"><p className="editorial-label">Assignment {String(project.id).padStart(2, '0')}</p><p className="mt-2 text-sm text-muted-dark">{project.chapter}</p></div>
          <div className="lg:col-span-8"><h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-normal leading-[0.98] tracking-[-0.02em] text-primary">{project.title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-muted-dark">{project.shortDesc}</p></div>
        </header>
        <div className="grid gap-px bg-border-light lg:grid-cols-2"><section className="bg-white/35 p-7 lg:p-10"><p className="editorial-label">Mục tiêu nhiệm vụ</p><p className="mt-5 text-base leading-8">{project.target}</p></section><section className="bg-white/35 p-7 lg:p-10"><p className="editorial-label">Kỹ năng áp dụng</p><p className="mt-5 text-base italic leading-8">{project.skills?.join(', ')}</p></section></div>
        <section className="border-t border-border-light p-7 lg:p-12"><p className="editorial-label">Quá trình thực hiện</p><p className="mt-6 max-w-4xl text-base leading-8">{project.process}</p></section>
        <section className="border-t border-border-light p-7 lg:p-12">
          <p className="editorial-label">Sản phẩm & Minh chứng</p>
          <div className="mt-6">
            <div className="grid gap-5">
            {project.reports ? project.reports.map((rep, idx) => (
              <div key={idx} className="glass-panel flex flex-col justify-between gap-6 rounded-lg p-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary-mint/70 text-charcoal">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-normal text-charcoal">{rep.name}</h3>
                    <p className="text-xs text-muted-dark mt-1">Định dạng tài liệu học thuật PDF chứa nội dung chi tiết bài làm.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {(!rep.file || rep.file === 'Sẽ cập nhật sau') ? (
                    <span className="status-muted">Sẽ cập nhật sau</span>
                  ) : rep.file === 'Không yêu cầu' ? (
                    <span className="status-muted">Không yêu cầu</span>
                  ) : (
                    <a 
                      href={rep.file} 
                      onClick={(event) => onPreview(event, rep.file, 'pdf')}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition duration-200 hover:bg-secondary"
                    >
                      Xem báo cáo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            )) : (
              <div className="glass-panel flex flex-col justify-between gap-6 rounded-lg p-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary-mint/70 text-charcoal">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-normal text-charcoal">Báo cáo bài tập hoàn thiện</h3>
                    <p className="text-xs text-muted-dark mt-1">Định dạng tài liệu học thuật PDF/Word chứa nội dung chi tiết bài làm.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {(!project.report || project.report === 'Sẽ cập nhật sau') ? (
                    <span className="status-muted">Sẽ cập nhật sau</span>
                  ) : project.report === 'Không yêu cầu' ? (
                    <span className="status-muted">Không yêu cầu</span>
                  ) : (
                    <a 
                      href={project.report} 
                      onClick={(event) => onPreview(event, project.report, 'pdf')} 
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition duration-200 hover:bg-secondary"
                    >
                      Xem báo cáo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            )}
            {project.evidenceImg && (
              <div className="glass-panel flex flex-col justify-between gap-6 rounded-lg p-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary-mint/70 text-charcoal">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-normal text-charcoal">Ảnh minh chứng</h3>
                    <p className="mt-1 text-xs text-muted-dark">Ảnh/screenshot minh chứng được liên kết trong dữ liệu bài tập.</p>
                  </div>
                </div>
                <a href={project.evidenceImg} onClick={(event) => onPreview(event, project.evidenceImg, 'image')} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition duration-200 hover:bg-secondary">
                  Xem ảnh <ExternalLink size={14} />
                </a>
              </div>
            )}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
