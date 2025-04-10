
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Wheat } from 'lucide-react';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-purple-500/30 via-white to-indigo-500/30 border-b border-purple-200 py-2 px-4 flex items-center justify-between overflow-hidden shadow-sm">
      <div className="flex items-center">
        <Wheat size={20} className="text-indigo-600 mr-2" />
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-semibold text-indigo-800">Andata</span>
          <span className="text-xs sm:text-sm text-indigo-600 uppercase tracking-wider">The Voice of Farmers</span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
