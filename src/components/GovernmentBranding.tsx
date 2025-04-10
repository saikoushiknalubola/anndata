
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Wheat } from 'lucide-react';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-purple-600/30 via-white to-indigo-600/30 border-b border-purple-300 py-3 px-4 flex items-center justify-between overflow-hidden shadow-md">
      <div className="flex items-center">
        <Wheat size={22} className="text-indigo-700 mr-2" />
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-bold text-indigo-900">Andata</span>
          <span className="text-xs sm:text-sm text-indigo-700 uppercase tracking-wider font-medium">The Voice of Farmers</span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
