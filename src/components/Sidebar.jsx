import { BookOpen, CheckSquare, FileCheck, Home, Menu, MessageSquare, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Overview', caption: 'Tổng quan' },
  { id: 'projects', icon: BookOpen, label: 'Assignments', caption: 'Bài tập' },
  { id: 'evidence', icon: FileCheck, label: 'Evidence', caption: 'Minh chứng' },
  { id: 'rubric', icon: CheckSquare, label: 'Rubric', caption: 'Tiêu chí' },
  { id: 'summary', icon: MessageSquare, label: 'Reflection', caption: 'Tổng kết' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header border-b border-primary/10 bg-surface/90 sticky top-0 z-[60] mx-3 mt-3 flex h-16 items-center justify-between rounded-xl px-5 text-charcoal shadow-[0_4px_20px_rgba(62,39,35,0.02)] backdrop-blur-2xl md:hidden">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-primary/10 bg-secondary-container/30 text-primary">
            <Sparkles size={14} />
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-base font-normal tracking-wide text-primary">{student.name}</p>
            <p className="mt-0.5 truncate text-[8px] font-bold uppercase tracking-[0.2em] text-muted-dark">English Language & Culture Portfolio</p>
          </div>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/10 bg-white/60 text-charcoal transition hover:bg-white/90 active:scale-95">
          {isMobileOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </header>
 
      <aside className={`portfolio-sidebar fixed inset-y-0 left-0 z-50 m-0 flex w-[300px] flex-col overflow-hidden rounded-none border-r border-primary/10 bg-surface-low/85 px-6 py-6 text-charcoal shadow-[0_8px_40px_rgba(62,39,35,0.03)] backdrop-blur-2xl transition-transform duration-300 md:m-4 md:w-[270px] md:translate-x-0 md:rounded-2xl md:border md:border-primary/10 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-container/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-12 left-4 h-48 w-48 rounded-full bg-primary-mint/30 blur-3xl" />

        {/* Sidebar Header */}
        <div className="relative pb-6 pt-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-[2.2rem] font-normal leading-none tracking-[-0.03em] text-primary">Portfolio</p>
            </div>
          </div>

          {/* Dossier Section */}
          <div className="mt-6 space-y-4 border-t border-primary/10 pt-6">
            <div>
              <span className="text-[8.5px] font-bold uppercase tracking-[0.25em] text-secondary">Student Dossier</span>
              <h2 className="mt-1 text-sm font-semibold tracking-wide text-charcoal uppercase">{student.name}</h2>
            </div>
            <div>
              <span className="text-[8.5px] font-bold uppercase tracking-[0.25em] text-secondary">Major Program</span>
              <p className="mt-1 text-[11.5px] font-medium leading-relaxed tracking-wide text-charcoal uppercase">{student.major}</p>
            </div>
          </div>
        </div>
 
        {/* Navigation List */}
        <nav className="relative flex-1 space-y-1.5 py-6" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => selectTab(item.id)}
                className={`group relative grid w-full grid-cols-[2rem_1fr_auto] items-center gap-3.5 rounded-xl px-3 py-3 text-left transition-all duration-300 ${
                  isActive ? 'text-primary' : 'text-muted-dark hover:text-primary hover:bg-white/60'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-bg"
                    className="absolute inset-0 rounded-xl bg-white border border-primary/10 shadow-[0_4px_14px_rgba(62,39,35,0.05)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-glow"
                    className="absolute left-0 top-1/4 h-1/2 w-[3px] rounded-r-md bg-secondary shadow-[0_0_8px_rgba(111,90,82,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className={`relative z-10 grid h-7.5 w-7.5 place-items-center rounded-lg border text-[9px] font-bold transition-all duration-300 ${
                  isActive
                    ? 'border-primary/20 bg-primary-mint/50 text-primary font-bold'
                    : 'border-primary/10 bg-white/40 text-primary'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <span className="relative z-10 min-w-0">
                  <span className={`block text-[11px] font-bold uppercase tracking-[0.2em] ${isActive ? 'text-primary' : 'text-muted-dark'}`}>{item.label}</span>
                  <span className={`mt-0.5 block text-[10px] font-medium tracking-[0.05em] transition duration-300 ${
                    isActive ? 'text-secondary font-medium' : 'text-muted-dark/70 group-hover:text-muted-dark'
                  }`}>{item.caption}</span>
                </span>
                
                <span className={`relative z-10 grid h-7 w-7 place-items-center transition-all duration-300 ${
                  isActive ? 'text-primary' : 'text-primary/60 group-hover:text-primary'
                }`}>
                  <Icon size={16} strokeWidth={1.5} />
                </span>
              </button>
            );
          })}
        </nav>
 
        {/* Footer/Portfolio Index */}
        <div className="relative mt-auto overflow-hidden rounded-xl border border-primary/10 bg-white/60 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.72)]">
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-secondary-container/10 blur-xl" />
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[8.5px] font-bold uppercase tracking-[0.25em] text-primary">Portfolio Index</p>
              <p className="mt-1.5 text-[11px] font-bold tracking-wide text-secondary">Editorial Academic Archive</p>
            </div>
            <p className="font-display text-2xl leading-none text-primary/20 tracking-tight">05</p>
          </div>
        </div>
      </aside>
 
      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
