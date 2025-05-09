
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Flag } from 'lucide-react';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] border-b border-soil/30 py-2 px-4 shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flag size={18} className="text-[#FF9933]" />
          <span className="font-medium text-soil hidden sm:inline-block">
            {t('digitalIndia')}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-soil/80 hidden sm:inline-block">Powered by</span>
          <div className="flex items-center">
            <span className="font-medium text-[#138808]">Bhashini</span>
            <Globe size={14} className="ml-1 text-[#4285F4]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
