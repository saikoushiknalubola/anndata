
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
      <div className="relative rounded-full border-2 border-terracotta/70 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-cream/90 to-white">
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
        
        {/* Traditional Indian design elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-[3px] border-saffron/30 border-dashed"></div>
        <div className="absolute top-[3px] left-[3px] right-[3px] bottom-[3px] rounded-full border-[1px] border-leaf/20"></div>
      </div>
      
      {/* Decorative elements inspired by traditional Indian art */}
      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-leaf rounded-full shadow-sm flex items-center justify-center">
        <span className="animate-ripple absolute inset-0 rounded-full bg-leaf/40"></span>
      </span>
      <span className="absolute -top-1 -left-1 w-3 h-3 bg-saffron rounded-full shadow-sm hidden md:flex"></span>
      <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-terracotta rounded-full shadow-sm hidden md:flex"></span>
    </div>
  );
};

export default Logo;
