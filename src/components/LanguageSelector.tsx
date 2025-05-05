
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

    // Close on scroll to make it more app-like
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const currentLanguage = LANGUAGES.find(l => l.code === language)?.name || 'English';

  const filteredLanguages = searchQuery 
    ? LANGUAGES.filter(lang => 
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : LANGUAGES;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown}
        className="bg-gradient-to-r from-terracotta to-saffron hover:from-saffron hover:to-terracotta text-white flex items-center gap-1 px-2.5 py-1.5 rounded-full shadow-md border border-white/20 transition-all active:scale-95"
        aria-label="Select language"
      >
        <Globe size={isMobile ? 16 : 18} className="text-white" />
        {!isMobile && (
          <span className="truncate font-medium text-sm max-w-[80px]">
            {currentLanguage}
          </span>
        )}
        <ChevronDown 
          size={isMobile ? 12 : 14} 
          className={`transition-transform text-white ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div 
          className={`fixed ${isMobile ? 'left-0 right-0 mx-3 top-16' : 'absolute right-0 w-60 top-full mt-2'} 
            bg-white rounded-lg shadow-xl overflow-hidden z-50 border-2 border-saffron/30 language-dropdown-container animate-fade-in`}
          style={{maxWidth: isMobile ? 'calc(100vw - 24px)' : '320px'}}
        >
          <div className="px-3 py-2 bg-gradient-to-r from-saffron to-terracotta text-sm font-decorative text-white border-b border-white/20">
            <span className="flex items-center justify-center">
              {t('selectLanguage')}
            </span>
          </div>
          
          <div className="px-2 py-1 border-b border-clay">
            <div className="flex items-center bg-cream/80 rounded-md px-2">
              <Search size={14} className="text-jute" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isMobile ? "Search..." : "Search languages..."}
                className="w-full p-2 text-sm bg-transparent focus:outline-none text-soil"
              />
            </div>
          </div>
          
          <div className={`${isMobile ? 'max-h-[40vh]' : 'max-h-[220px]'} overflow-y-auto menu-scrollable`}>
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full text-left px-3 py-3 text-sm hover:bg-cream transition-colors border-b border-clay/30 last:border-0 active:bg-saffron/20 ${
                    language === lang.code 
                      ? 'bg-gradient-to-r from-saffron/20 to-transparent text-terracotta font-medium' 
                      : 'text-soil'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="flex-1">{lang.name}</span>
                    {language === lang.code && (
                      <span className="h-2 w-2 rounded-full bg-saffron"></span>
                    )}
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-terracotta/70 text-center">
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
