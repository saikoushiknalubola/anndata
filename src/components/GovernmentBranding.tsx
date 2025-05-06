
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Wheat } from 'lucide-react';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-saffron/20 to-leaf/20 border-b border-terracotta/30 py-2 px-4 shadow-sm fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Wheat size={18} className="text-terracotta mr-2" />
          <span className="text-sm font-medium text-soil">Andata</span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
