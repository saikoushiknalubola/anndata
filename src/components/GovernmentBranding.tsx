
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-white to-cream/30 border-b border-leaf/30 py-3 px-6 flex items-center justify-between overflow-hidden shadow-sm">
      <div className="flex items-center space-x-4 sm:space-x-6">
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-semibold text-earth">Andata</span>
          <span className="text-xs sm:text-sm text-soil/70 uppercase tracking-wider">Agriculture Portal</span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
