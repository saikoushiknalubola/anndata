
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-white/80 border-b border-saffron/20 py-2 px-4 flex items-center justify-center overflow-x-auto">
      <div className="flex items-center space-x-4 sm:space-x-6">
        <img 
          src="/lovable-uploads/e17e17d5-c387-4c00-85cb-497be4a7a72c.png" 
          alt="Digital India Logo" 
          className="h-6 sm:h-8"
        />
        <img 
          src="/lovable-uploads/076d86c2-8822-48f5-8d2a-a9bce74c1509.png" 
          alt="G20 Logo" 
          className="h-6 sm:h-8"
        />
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs text-soil/70">{t('govtOfIndia')}</span>
          <span className="text-xs sm:text-sm font-medium text-soil">{t('agricultureDept')}</span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
