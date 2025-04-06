
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GovernmentBranding: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-white to-cream/30 border-b border-leaf/30 py-2 px-4 flex items-center justify-between overflow-x-auto shadow-sm">
      <div className="flex items-center space-x-4 sm:space-x-6">
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-semibold text-earth">Andata</span>
          <span className="text-[10px] sm:text-xs text-soil/70 uppercase tracking-wider">Agriculture Portal</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/0e1f044e-2162-4da1-b219-a810bd119ff2.png" 
          alt="Azadi Ka Amrit Mahotsav" 
          className="h-8 w-auto object-contain"
        />
        <img 
          src="/lovable-uploads/96c8d011-6254-4a2d-8619-8e491a0622ec.png" 
          alt="Digital India" 
          className="h-7 w-auto object-contain"
        />
        <img 
          src="/lovable-uploads/d9ca9bcc-256a-4565-b55a-751b3db158bd.png" 
          alt="G20 India" 
          className="h-7 w-auto object-contain hidden sm:block"
        />
        <img 
          src="/lovable-uploads/6f8147b2-570c-4b9c-9982-c979295d71a3.png" 
          alt="Make in India" 
          className="h-7 w-auto object-contain hidden md:block"
        />
      </div>
    </div>
  );
};

export default GovernmentBranding;
