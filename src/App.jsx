import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
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
    </div>
  );
}
