import React from 'react';
import { PageView, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface MenuProps {
  isOpen: boolean;
  currentView: PageView;
  language: Language;
  onNavigate: (view: PageView) => void;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, currentView, language, onNavigate, onClose }) => {
  const t = TRANSLATIONS[language].menu;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 left-0 bottom-0 w-1/2 bg-white dark:bg-gray-800 z-50 shadow-2xl flex flex-col pt-20 px-6 transform transition-transform duration-300 ease-in-out">
        <nav className="flex flex-col space-y-6">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-left text-xl transition-colors ${
              currentView === 'home' 
                ? 'font-bold text-black dark:text-white' 
                : 'font-light text-gray-500 dark:text-gray-400'
            }`}
          >
            {t.home}
          </button>
          
          <button 
            onClick={() => onNavigate('about')}
            className={`text-left text-xl transition-colors ${
              currentView === 'about' 
                ? 'font-bold text-black dark:text-white' 
                : 'font-light text-gray-500 dark:text-gray-400'
            }`}
          >
            {t.about}
          </button>
          
          <button 
            onClick={() => onNavigate('support')}
            className={`text-left text-xl transition-colors ${
              currentView === 'support' 
                ? 'font-bold text-black dark:text-white' 
                : 'font-light text-gray-500 dark:text-gray-400'
            }`}
          >
            {t.support}
          </button>
        </nav>
      </div>
    </>
  );
};