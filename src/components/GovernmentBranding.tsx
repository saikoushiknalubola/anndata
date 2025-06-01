
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Leaf } from 'lucide-react';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-white border-b border-soil/30 shadow-md fixed top-0 z-50">
      {/* Simplified decorative bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-[#4CAF50] to-[#138808]"></div>
      
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left side with app branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-saffron/20 to-soil/20 rounded-full flex items-center justify-center border border-saffron/30">
            <Leaf className="w-5 h-5 text-saffron" />
          </div>
          <div>
            <h1 className="font-decorative text-lg md:text-xl text-soil leading-tight">
              Andata
            </h1>
            <p className="text-xs text-soil/70 hidden sm:block">Smart Farming Platform</p>
          </div>
        </div>
        
        {/* Right side with status */}
        <div className="flex items-center">
          <span className="text-sm font-medium text-[#138808] hidden sm:block mr-2">Live Platform</span>
          <div className="flex flex-col items-end">
            <div className="flex space-x-1">
              <span className="bg-[#4CAF50] h-2 w-2 rounded-full animate-pulse"></span>
              <span className="bg-[#FFC107] h-2 w-2 rounded-full"></span>
              <span className="bg-[#FF9933] h-2 w-2 rounded-full"></span>
            </div>
            <div className="text-xs font-medium text-soil mt-0.5 border-t border-soil/20 pt-0.5">
              Farming Tech
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative pattern */}
      <div className="h-1 w-full bg-[#4CAF50]/20 flex items-center justify-center">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#4CAF50]/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default GovernmentBranding;
