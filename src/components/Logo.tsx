
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative hover:scale-105 transition-transform duration-500">
        <img 
          src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
          alt="Andata Logo" 
          className="w-full h-full object-contain rounded-full shadow-md"
          style={{ 
            width: isMobile ? '48px' : '64px',
            height: isMobile ? '48px' : '64px',
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
        
        {/* Subtle radial gradient overlay for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Logo;
