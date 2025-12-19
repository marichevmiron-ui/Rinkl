import React, { useState, useEffect, useMemo } from 'react';
import { PageView, Language } from './types';
import { TRANSLATIONS } from './constants';
import { Menu } from './components/Menu';
import { LanguageSelector } from './components/LanguageSelector';
import { Support } from './pages/Support';

// --- SUB-COMPONENTS (Defined outside to prevent re-mounts on App re-render) ---

const Snow = () => {
  const flakes = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    animationDuration: Math.random() * 5 + 5 + 's',
    // Negative delay makes snow start mid-air immediately
    animationDelay: (Math.random() * -10) + 's',
    fontSize: Math.random() * 10 + 10 + 'px',
    opacity: Math.random() * 0.4 + 0.2
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-[-20px] text-blue-200 dark:text-white/20 select-none"
          style={{
            left: flake.left,
            fontSize: flake.fontSize,
            opacity: flake.opacity,
            animation: `snowfall ${flake.animationDuration} linear infinite`,
            animationDelay: flake.animationDelay,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

const HomePage = ({ t, onNavigate }: { t: any, onNavigate: (v: PageView) => void }) => (
  <div className="flex flex-col justify-center min-h-[70vh] max-w-5xl mx-auto px-6 py-12">
    <div className="flex flex-col space-y-12 md:space-y-16">
      <div onClick={() => onNavigate('details_rinkl')} className="group cursor-pointer">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-8 transition-colors duration-500 group-hover:border-skyBlue">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-skyBlue transition-colors duration-300 max-w-3xl leading-tight">
            {t.home.sq1_title}
          </h2>
          <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-skyBlue">
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      <div onClick={() => onNavigate('details_telegram')} className="group cursor-pointer">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-8 transition-colors duration-500 group-hover:border-skyBlue">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-skyBlue transition-colors duration-300 max-w-3xl leading-tight">
            {t.home.sq2_title}
          </h2>
          <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-skyBlue">
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
);

const DetailsRinklPage = ({ t, onNavigate }: { t: any, onNavigate: (v: PageView) => void }) => (
  <>
    <div className="p-4 md:p-8 max-w-3xl mx-auto pb-24">
      <button onClick={() => onNavigate('home')} className="mb-6 p-2 -ml-2 text-gray-500 hover:text-skyBlue dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <h1 className="text-3xl font-extrabold mb-2">{t.details_rinkl.title}</h1>
      <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest">{t.details_rinkl.release}</p>
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-20">
        {t.details_rinkl.content.map((p: string, i: number) => (
          <p key={i} className={p.length < 50 ? "font-bold text-xl mt-6 mb-2" : ""}>{p}</p>
        ))}
      </div>
    </div>
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex justify-center z-50">
      <a href="https://www.ai.rinkl.ru" target="_blank" rel="noopener noreferrer" className="bg-skyBlue text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg w-full max-w-md text-center">
        {t.details_rinkl.button}
      </a>
    </div>
  </>
);

const DetailsTelegramPage = ({ t, onNavigate }: { t: any, onNavigate: (v: PageView) => void }) => (
  <>
    <div className="p-4 md:p-8 max-w-3xl mx-auto pb-24">
      <button onClick={() => onNavigate('home')} className="mb-6 p-2 -ml-2 text-gray-500 hover:text-skyBlue dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <h1 className="text-3xl font-extrabold mb-6">{t.details_telegram.title}</h1>
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-20">
        {t.details_telegram.content.map((p: string, i: number) => (
          <p key={i} className={p.length < 50 ? "font-bold text-xl mt-6 mb-2" : ""}>{p}</p>
        ))}
      </div>
    </div>
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex justify-center z-50">
      <a href="https://t.me/rinkl_IT" target="_blank" rel="noopener noreferrer" className="bg-skyBlue text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg w-full max-w-md text-center">
        {t.details_telegram.button}
      </a>
    </div>
  </>
);

const AboutPage = ({ t }: { t: any }) => (
  <div className="p-4 md:p-8 max-w-3xl mx-auto pb-32">
    <h1 className="text-3xl font-extrabold mb-8">{t.about.title}</h1>
    <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
      {t.about.content.map((p: string, i: number) => (
        <p key={i} className={p.startsWith(' •') ? "pl-4 font-medium" : ""}>{p}</p>
      ))}
    </div>
    <div className="relative w-full h-48 mt-24 mb-12 select-none">
      {/* Timeline (Left to Right) */}
      <div className="absolute top-1/2 left-0 right-2 h-0.5 bg-skyBlue transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-0 w-3 h-3 bg-skyBlue rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[12px] border-l-skyBlue transform -translate-y-1/2"></div>
      
      <div className="absolute top-1/2 left-0 transform -translate-y-full pb-6 -translate-x-2">
        <p className="text-xs md:text-sm whitespace-pre-line text-gray-900 dark:text-white font-bold leading-tight text-left">{t.about.timeline.t1}</p>
      </div>
      <div className="absolute top-1/2 left-[25%] transform pt-6 -translate-x-1/2">
        <p className="text-xs md:text-sm whitespace-pre-line text-gray-900 dark:text-white font-bold leading-tight text-center">{t.about.timeline.t2}</p>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-full pb-6 translate-x-2">
        <p className="text-xs md:text-sm whitespace-pre-line text-gray-900 dark:text-white font-bold leading-tight text-right">{t.about.timeline.t3}</p>
      </div>
    </div>
  </div>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ru');
  const [view, setView] = useState<PageView>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = (dark: boolean) => document.documentElement.classList.toggle('dark', dark);
    applyTheme(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => applyTheme(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleNavigate = (v: PageView) => {
    setView(v);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa] dark:bg-gray-900 text-[#333] dark:text-gray-100">
      <Snow />
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 h-16 flex items-center justify-between">
        <button onClick={() => setIsMenuOpen(true)} className="p-2 -ml-2 text-gray-700 dark:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Updated Logo: R/////NKL with twice thicker slashes in #3F76EE */}
        <div onClick={() => handleNavigate('home')} className="absolute left-1/2 transform -translate-x-1/2 flex items-center cursor-pointer select-none group">
          <span className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            R<span style={{ color: '#3F76EE', textShadow: '1.2px 0 0 #3F76EE, 0.6px 0 0 #3F76EE' }}>/////</span>NKL
          </span>
        </div>

        <LanguageSelector current={language} onChange={setLanguage} />
      </header>

      <Menu isOpen={isMenuOpen} currentView={view} language={language} onNavigate={handleNavigate} onClose={() => setIsMenuOpen(false)} />

      <main className="flex-1 overflow-x-hidden relative z-10">
        <div key={view} className="animate-fade-in">
          {view === 'home' && <HomePage t={t} onNavigate={handleNavigate} />}
          {view === 'support' && <Support language={language} />}
          {view === 'details_rinkl' && <DetailsRinklPage t={t} onNavigate={handleNavigate} />}
          {view === 'details_telegram' && <DetailsTelegramPage t={t} onNavigate={handleNavigate} />}
          {view === 'about' && <AboutPage t={t} />}
        </div>
      </main>
    </div>
  );
};

export default App;