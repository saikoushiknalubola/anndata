
import React from 'react';

const Logo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative overflow-hidden rounded-full border-2 border-leaf/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <img 
          src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
          alt="Andata Logo" 
          className="w-full h-full object-contain rounded-full"
          style={{ 
            width: '100%',
            height: '100%',
            minWidth: '100px', 
            minHeight: '100px',
            maxWidth: '150px', 
            maxHeight: '150px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 via-transparent to-leaf/10 rounded-full"></div>
      </div>
    </div>
  );
};

export default Logo;
