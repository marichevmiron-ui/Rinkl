import React, { useState, useEffect } from 'react';
import { database, storage } from './services/firebase';
import { PageView, Language } from './types';
import { TRANSLATIONS } from './constants';
import { Menu } from './components/Menu';
import { LanguageSelector } from './components/LanguageSelector';
import { Support } from './pages/Support';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ru');
  const [view, setView] = useState<PageView>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Theme Handling (System Dark Mode)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    // Initial check
    if (mediaQuery.matches) {
      document.documentElement.classList.add('dark');
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleNavigate = (v: PageView) => {
    setView(v);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    handleNavigate('home');
  };

  const t = TRANSLATIONS[language];

  // --- Sub-components ---
  
  const HomePage = () => (
    <div className="flex flex-col justify-center min-h-[70vh] max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Item 1 */}
        <div 
          onClick={() => handleNavigate('details_rinkl')}
          className="group cursor-pointer"
        >
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-8 transition-colors duration-500 group-hover:border-rinklBlue">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-rinklBlue transition-colors duration-300 max-w-3xl leading-tight">
              {t.home.sq1_title}
            </h2>
            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-rinklBlue">
              <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>

        {/* Item 2 */}
        <div 
          onClick={() => handleNavigate('details_telegram')}
          className="group cursor-pointer"
        >
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-8 transition-colors duration-500 group-hover:border-rinklBlue">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-rinklBlue transition-colors duration-300 max-w-3xl leading-tight">
              {t.home.sq2_title}
            </h2>
             <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-rinklBlue">
              <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>

      </div>
    </div>
  );

  const DetailsRinklPage = () => (
    <div className="p-4 md:p-8 max-w-3xl mx-auto animate-fade-in pb-20">
      <h1 className="text-3xl font-extrabold mb-2">{t.details_rinkl.title}</h1>
      <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest">{t.details_rinkl.release}</p>
      
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        {t.details_rinkl.content.map((paragraph, idx) => (
          <p key={idx} className={paragraph.length < 50 ? "font-bold text-xl mt-6 mb-2" : ""}>
             {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const DetailsTelegramPage = () => (
    <div className="p-4 md:p-8 max-w-3xl mx-auto animate-fade-in pb-20">
      <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold">{t.details_telegram.title}</h1>
          <a 
            href="https://t.me/rinkl_IT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block bg-rinklBlue text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg"
          >
            {t.details_telegram.button}
          </a>
      </div>
      
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-10">
        {t.details_telegram.content.map((paragraph, idx) => (
           <p key={idx} className={paragraph.length < 50 ? "font-bold text-xl mt-6 mb-2" : ""}>
             {paragraph}
           </p>
        ))}
      </div>

      <div className="sticky bottom-8 flex justify-center md:hidden">
          <a 
            href="https://t.me/rinkl_IT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-rinklBlue text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl"
          >
            {t.details_telegram.button}
          </a>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="p-4 md:p-8 max-w-3xl mx-auto animate-fade-in pb-32">
        <h1 className="text-3xl font-extrabold mb-8">{t.about.title}</h1>
        
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            {t.about.content.map((paragraph, idx) => (
                <p key={idx} className={paragraph.startsWith(' •') ? "pl-4 font-medium" : ""}>
                    {paragraph}
                </p>
            ))}
        </div>

        {/* Timeline (Mirrored: Starts Right, Ends Left) */}
        <div className="relative w-full h-48 mt-24 mb-12 select-none">
            {/* Horizontal Line: Arrow gap on Left */}
            <div className="absolute top-1/2 left-2 right-0 h-0.5 bg-rinklBlue transform -translate-y-1/2"></div>
            
            {/* Start Dot (Founding): On Right */}
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-rinklBlue rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
            
            {/* End Arrow (Future): On Left, pointing Left */}
            <div className="absolute top-1/2 left-0 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[12px] border-r-rinklBlue transform -translate-y-1/2"></div>

            {/* Label 1: Founding (At Start/Right) - Above */}
            <div className="absolute top-1/2 right-0 transform -translate-y-full pb-6 translate-x-2">
                <p className="text-xs md:text-sm whitespace-pre-line text-gray-900 dark:text-white font-bold leading-tight text-right">
                    {t.about.timeline.t1}
                </p>
            </div>

            {/* Label 2: Release (At 25% from Right) - Below */}
            <div className="absolute top-1/2 right-[25%] transform pt-6 translate-x-1/2">
                <p className="text-xs md:text-sm whitespace-pre-line text-gray-900 dark:text-white font-bold leading-tight text-center">
                    {t.about.timeline.t2}
                </p>
            </div>

            {/* Label 3: Future (At End/Left) - Above */}
            <div className="absolute top-1/2 left-0 transform -translate-y-full pb-6 -translate-x-2">
                <p className="text-xs md:text-sm whitespace-pre-line text-gray-900 dark:text-white font-bold leading-tight text-left">
                    {t.about.timeline.t3}
                </p>
            </div>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa] dark:bg-gray-900 text-[#333] dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 h-16 flex items-center justify-between">
        {/* Burger */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 -ml-2 text-gray-700 dark:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <div 
          onClick={handleLogoClick}
          className="absolute left-1/2 transform -translate-x-1/2 font-bold text-2xl text-rinklBlue tracking-tight cursor-pointer hover:opacity-80 transition-opacity select-none"
        >
          Rinkl
        </div>

        {/* Language */}
        <LanguageSelector current={language} onChange={setLanguage} />
      </header>

      {/* Menu Overlay */}
      <Menu 
        isOpen={isMenuOpen} 
        currentView={view} 
        language={language}
        onNavigate={handleNavigate} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* Content */}
      <main className="flex-1 overflow-x-hidden">
        {view === 'home' && <HomePage />}
        {view === 'support' && <Support language={language} />}
        {view === 'details_rinkl' && <DetailsRinklPage />}
        {view === 'details_telegram' && <DetailsTelegramPage />}
        {view === 'about' && <AboutPage />}
      </main>
    </div>
  );
};

export default App;