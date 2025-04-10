
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';
import { ChevronDown, Globe, Search } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
        className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1 px-3 py-1.5 rounded-full shadow-md border border-white/20 transition-all"
        aria-label="Select language"
      >
        <Globe size={isMobile ? 16 : 18} className="text-white" />
        <span className={`truncate font-medium ${isMobile ? 'w-6' : 'max-w-[80px]'}`}>
          {isMobile ? '' : currentLanguage}
        </span>
        <ChevronDown size={14} className={`transition-transform text-white ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <div className="language-selector-title">
            {t('selectLanguage')}
          </div>
          
          <div className="px-2 py-1 border-b border-purple-100">
            <div className="flex items-center bg-purple-50 rounded-md px-2">
              <Search size={14} className="text-indigo-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages..."
                className="w-full p-1.5 text-sm bg-transparent focus:outline-none text-indigo-800"
              />
            </div>
          </div>
          
          <div className="max-h-[180px] overflow-y-auto menu-scrollable">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`language-selector-item ${
                    language === lang.code ? 'language-selector-item-active' : 'text-indigo-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-indigo-400 text-center">
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
