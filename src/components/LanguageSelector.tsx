
import React, { useState } from 'react';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const currentLanguage = LANGUAGES.find(l => l.code === language)?.name || 'English';

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-xs md:text-sm text-earth hover:text-saffron transition-colors px-2 py-1 rounded-full bg-white/50 backdrop-blur-sm"
      >
        <Globe size={14} />
        <span>{currentLanguage}</span>
        <ChevronDown size={14} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 py-1 w-48 max-h-[240px] overflow-y-auto bg-white rounded-md shadow-lg z-20 frosted-glass">
          <div className="px-2 py-1 text-xs text-earth/70 border-b border-cream/50">
            {t('selectLanguage')}
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-cream/30 transition-colors ${
                language === lang.code ? 'text-saffron font-medium' : 'text-earth'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
