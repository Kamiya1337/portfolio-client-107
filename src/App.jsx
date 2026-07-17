import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';

const tabTitles = {
  home: 'Overview / Tổng quan',
  projects: 'Assignments / Bài tập & Dự án',
  evidence: 'Evidence / Minh chứng',
  rubric: 'Rubric / Tiêu chí',
  summary: 'Reflection / Tổng kết',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const openPreview = (event, url, type = 'pdf') => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => {
    setPreviewData({ isOpen: false, url: '', type: '' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab onPreview={openPreview} />;
      case 'evidence': return <EvidenceTable onPreview={openPreview} />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-app aether-bg relative min-h-screen text-charcoal md:flex">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="portfolio-main relative z-10 min-w-0 flex-1 md:ml-sidebar">
        <header className="portfolio-topbar glass-panel sticky top-0 z-30 mx-4 mt-4 hidden h-[4.75rem] items-center justify-between rounded-xl px-7 md:flex xl:mx-8 xl:px-10">
          <h1 className="font-display text-2xl font-normal tracking-[-0.02em] text-primary sm:text-3xl">{tabTitles[activeTab]}</h1>
          <span className="editorial-label rounded-sm bg-primary-mint/70 px-4 py-2 text-primary">Academic Year 2025–26</span>
        </header>
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderContent()}
        </motion.main>
      </div>

      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/55 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước">
          <div className="glass-panel flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-4">
              <div>
                <p className="editorial-label">Preview</p>
                <h3 className="mt-1 font-display text-2xl font-normal">Báo cáo PDF</h3>
              </div>
              <div className="flex gap-2">
                <a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a>
                <button type="button" aria-label="Đóng xem trước" onClick={closePreview} className="icon-button-dark">
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-surface/55 p-4">
              <iframe src={previewData.url} title="PDF Preview" className="h-full w-full rounded-lg border-0 bg-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
