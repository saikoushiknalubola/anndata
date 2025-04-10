
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-[#FF9933]/30 via-white to-[#138808]/30 border-b border-earth/30 py-2 px-4 flex items-center justify-between overflow-hidden shadow-sm">
      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-semibold text-earth">Andata</span>
          <span className="text-xs sm:text-sm text-soil/70 uppercase tracking-wider">The Voice of Farmers</span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
