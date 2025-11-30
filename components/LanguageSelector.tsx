import React, { useState } from 'react';
import { Language } from '../types';

interface Props {
  current: Language;
  onChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<Props> = ({ current, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const langs: {code: Language, label: string}[] = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文' },
    { code: 'de', label: 'Deutsch' },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 uppercase hover:text-rinklBlue dark:hover:text-blue-400"
      >
        {current}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-20 border border-gray-100 dark:border-gray-700">
            {langs.map((l) => (
                <button
                key={l.code}
                onClick={() => {
                    onChange(l.code);
                    setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                    current === l.code 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-rinklBlue dark:text-blue-400 font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                >
                {l.label}
                </button>
            ))}
            </div>
        </>
      )}
    </div>
  );
};
