
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="relative rounded-full shadow-sm hover:shadow-md transition-all duration-300">
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
        
        {/* Simple decorative border */}
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-[2px] border-terracotta/30"></div>
      </div>
    </div>
  );
};

export default Logo;
