import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Wheat, Award, Flag } from 'lucide-react';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-white border-b border-[#138808]/20 py-3 px-4 flex items-center justify-between overflow-hidden shadow-sm fixed top-0 z-50">
      <div className="flex items-center">
        <div className="bg-[#FF9933]/10 p-1.5 rounded-full shadow-sm mr-2">
          <Wheat size={20} className="text-[#FF9933]" />
        </div>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-bold text-indigo-900 flex items-center">
            Andata
            <Award size={14} className="ml-1 text-[#138808]" />
          </span>
          <span className="text-xs sm:text-sm text-indigo-700 uppercase tracking-wider font-medium flex items-center">
            <Flag size={10} className="mr-1 text-[#FF9933]" />
            The Voice of Farmers
          </span>
        </div>
      </div>
      
      <div className="hidden sm:flex items-center">
        <div className="flex space-x-2">
          <div className="bg-[#FF9933]/10 px-2 py-1 rounded-full text-xs text-[#FF9933] font-medium">Digital India</div>
          <div className="bg-[#138808]/10 px-2 py-1 rounded-full text-xs text-[#138808] font-medium">Bharat</div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
