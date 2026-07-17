import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import AssignmentCard from './AssignmentCard';
import AssignmentDetail from './AssignmentDetail';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const { projects } = portfolioData;

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  if (selectedProject) return <AssignmentDetail project={selectedProject} onBack={() => setSelectedProject(null)} previewData={previewData} onPreview={openPreview} onClosePreview={closePreview} />;

  return (
    <div>
      <header className="page-intro">
        <p className="editorial-label">Curated Portfolio Archive</p>
        <h1 className="page-title max-w-5xl">Applied learning, documented with care.</h1>
        <p className="page-copy">Sáu bài tập học phần được trình bày như một hồ sơ học thuật, giữ nguyên báo cáo, minh chứng và liên kết tài nguyên thực tế.</p>
      </header>
      <section className="mx-auto grid max-w-[1220px] grid-cols-1 gap-6 px-5 pb-28 sm:px-8 lg:grid-cols-2 xl:grid-cols-3 xl:px-12">
        {projects.map((project) => <AssignmentCard key={project.id} project={project} onSelect={setSelectedProject} />)}
      </section>
      <section className="px-5 py-20 sm:px-8 xl:px-12">
        <div className="glass-panel mx-auto grid max-w-[1220px] gap-10 rounded-xl p-8 lg:grid-cols-2 lg:items-center lg:p-10"><div><p className="editorial-label">Academic Standards</p><h2 className="mt-4 font-display text-4xl font-normal tracking-[-0.02em]">Evidence before decoration.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-dark">Mỗi hồ sơ ưu tiên tính chính xác của nội dung, khả năng truy xuất tài nguyên và sự minh bạch trong quá trình thực hiện.</p></div><div className="rounded-lg bg-surface/70 p-10 shadow-glass"><p className="editorial-label">Archive Scope</p><p className="mt-5 font-display text-7xl font-normal">{String(projects.length).padStart(2, '0')}</p><p className="mt-2 text-sm text-muted-dark">documented assignments</p></div></div>
      </section>
    </div>
  );
}
