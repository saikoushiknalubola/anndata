
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';
import { ChevronDown, Globe, Search } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
    setSearchQuery('');
  };

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = LANGUAGES.find(l => l.code === language)?.name || 'English';

  const filteredLanguages = searchQuery 
    ? LANGUAGES.filter(lang => 
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : LANGUAGES;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-xs md:text-sm text-earth hover:text-saffron transition-colors px-2 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-cream/50"
        aria-label="Select language"
      >
        <Globe size={14} />
        <span className="max-w-[80px] truncate">{currentLanguage}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 py-1 w-60 max-h-[240px] overflow-y-auto bg-white rounded-md shadow-lg z-50 frosted-glass">
          <div className="px-2 py-1 text-xs text-earth/70 border-b border-cream/50">
            {t('selectLanguage')}
          </div>
          
          <div className="px-2 py-1 border-b border-cream/50">
            <div className="flex items-center bg-cream/30 rounded-md px-2">
              <Search size={14} className="text-earth/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages..."
                className="w-full p-1 text-sm bg-transparent focus:outline-none"
              />
            </div>
          </div>
          
          <div className="max-h-[180px] overflow-y-auto">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full text-left px-3 py-1.5 text-sm hover:bg-cream/30 transition-colors ${
                    language === lang.code ? 'text-saffron font-medium' : 'text-earth'
                  }`}
                >
                  {lang.name}
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-earth/50 text-center">
                No languages found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
