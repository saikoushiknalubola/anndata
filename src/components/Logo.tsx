
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
      <div className="relative rounded-full border-2 border-terracotta/70 shadow-lg hover:shadow-xl transition-all duration-300">
        <img 
          src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
          alt="Andata Logo" 
          className="w-full h-full object-contain rounded-full hover:scale-105 transition-transform duration-500"
          style={{ 
            width: '100%',
            height: 'auto',
            aspectRatio: '1/1',
            maxWidth: '100%'
          }}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.log("Logo failed to load");
            target.onerror = null;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 via-transparent to-leaf/20 rounded-full"></div>
        <div className="absolute -inset-[1px] border-2 border-terracotta/20 rounded-full animate-pulse-gentle"></div>
      </div>
      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-leaf rounded-full shadow-sm flex items-center justify-center">
        <span className="animate-ripple absolute inset-0 rounded-full bg-leaf/40"></span>
      </span>
    </div>
  );
};

export default Logo;
