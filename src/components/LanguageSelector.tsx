
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';
import { ChevronDown, Globe, Search, Check, Languages } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (code: string) => {
    if (code !== language) {
      setLanguage(code);
    }
    setIsOpen(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

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

  const popularLanguages = ['en', 'hi', 'te', 'ta', 'bn', 'mr', 'gu', 'kn', 'ml'];
  const groupedLanguages = {
    popular: filteredLanguages.filter(lang => popularLanguages.includes(lang.code)),
    others: filteredLanguages.filter(lang => !popularLanguages.includes(lang.code))
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -8, 
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <motion.button 
        onClick={toggleDropdown}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg border border-white/20 transition-all duration-300 active:scale-95 backdrop-blur-sm"
        aria-label="Select language"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={isMobile ? 16 : 18} className="text-white" />
        {!isMobile && (
          <span className="truncate font-medium text-sm max-w-[80px]">
            {currentLanguage}
          </span>
        )}
        <ChevronDown 
          size={isMobile ? 12 : 14} 
          className={`transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`fixed ${isMobile ? 'left-0 right-0 mx-4 top-20' : 'absolute right-0 w-80 top-full mt-3'} 
              bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden z-50 border border-emerald-200/50`}
            style={{maxWidth: isMobile ? 'calc(100vw - 32px)' : '350px'}}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
              <div className="flex items-center justify-center gap-2">
                <Languages size={18} className="text-emerald-600" />
                <span className="font-semibold text-emerald-800 text-sm">
                  {t('selectLanguage') || 'Choose Your Language'}
                </span>
              </div>
              <p className="text-xs text-emerald-600 text-center mt-1">
                Select your preferred language for better experience
              </p>
            </div>
            
            <div className="px-3 py-2 border-b border-emerald-100/50">
              <div className="flex items-center bg-emerald-50/70 rounded-lg px-3 py-2">
                <Search size={14} className="text-emerald-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isMobile ? "Search..." : "Search languages..."}
                  className="w-full ml-2 text-sm bg-transparent focus:outline-none text-slate-700 placeholder-emerald-400"
                />
              </div>
            </div>
            
            <div className={`${isMobile ? 'max-h-[50vh]' : 'max-h-[400px]'} overflow-y-auto`}>
              {filteredLanguages.length > 0 ? (
                <>
                  {!searchQuery && (
                    <div className="px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50/50 border-b border-emerald-100/30">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Popular Languages
                      </div>
                    </div>
                  )}
                  
                  {(searchQuery ? filteredLanguages : groupedLanguages.popular).map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => handleSelect(lang.code)}
                      className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border-b border-emerald-50/50 last:border-0 ${
                        language === lang.code 
                          ? 'bg-gradient-to-r from-emerald-100/80 to-teal-100/80 text-emerald-800 font-semibold shadow-sm' 
                          : 'text-slate-700 hover:bg-emerald-50/60'
                      }`}
                      whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.08)' }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex-1 font-medium">{lang.name}</span>
                        {language === lang.code && (
                          <div className="flex items-center">
                            <Check size={16} className="text-emerald-600" />
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                  
                  {!searchQuery && groupedLanguages.others.length > 0 && (
                    <>
                      <div className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-50/50 border-b border-slate-100/30">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                          Other Languages
                        </div>
                      </div>
                      
                      {groupedLanguages.others.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => handleSelect(lang.code)}
                          className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border-b border-slate-50/50 last:border-0 ${
                            language === lang.code 
                              ? 'bg-gradient-to-r from-emerald-100/80 to-teal-100/80 text-emerald-800 font-semibold shadow-sm' 
                              : 'text-slate-700 hover:bg-slate-50/60'
                          }`}
                          whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex-1">{lang.name}</span>
                            {language === lang.code && (
                              <div className="flex items-center">
                                <Check size={16} className="text-emerald-600" />
                              </div>
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <div className="px-4 py-6 text-sm text-slate-500 text-center">
                  <Languages size={24} className="mx-auto mb-2 text-slate-300" />
                  No languages found for "{searchQuery}"
                </div>
              )}
            </div>
            
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-50/70 to-teal-50/70 text-xs text-emerald-700 text-center border-t border-emerald-100/50">
              <div className="flex items-center justify-center gap-1">
                <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                Language preference will be saved automatically
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
