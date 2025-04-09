
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative rounded-full border-2 border-leaf/70 shadow-lg hover:shadow-xl transition-all duration-300">
        <img 
          src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
          alt="Andata Logo" 
          className="w-full h-full object-contain rounded-full"
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
      </div>
    </div>
  );
};

export default Logo;
