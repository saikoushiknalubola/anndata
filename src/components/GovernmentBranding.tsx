
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-white border-b border-soil/30 shadow-md fixed top-0 z-50">
      {/* Tricolor decorative bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
      
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left side with decorative element */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-1.5 bg-gradient-to-b from-[#FF9933] to-[#138808] rounded-sm"></div>
          <div>
            <h1 className="font-decorative text-lg md:text-xl text-soil leading-tight">
              {t('ruralDevelopment')}
            </h1>
            <p className="text-xs text-soil/70 hidden sm:block">{t('farmersPortal')}</p>
          </div>
        </div>
        
        {/* Right side with decorative element */}
        <div className="flex items-center">
          <span className="text-sm font-medium text-[#138808] hidden sm:block mr-2">{t('officialPortal')}</span>
          <div className="flex flex-col items-end">
            <div className="flex space-x-1">
              <span className="bg-[#FF9933] h-2 w-2 rounded-full"></span>
              <span className="bg-[#FFFFFF] border border-gray-300 h-2 w-2 rounded-full"></span>
              <span className="bg-[#138808] h-2 w-2 rounded-full"></span>
            </div>
            <div className="text-xs font-medium text-soil mt-0.5 border-t border-soil/20 pt-0.5">
              {t('governmentInitiative')}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative pattern inspired by traditional Indian designs */}
      <div className="h-1 w-full bg-[#FF9933]/20 flex items-center justify-center">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF9933]/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
