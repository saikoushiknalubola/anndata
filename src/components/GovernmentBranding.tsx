
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-white border-b border-gray-200/20 py-2 px-4 shadow-sm fixed top-0 z-50">
      <div className="flex items-center justify-between">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
