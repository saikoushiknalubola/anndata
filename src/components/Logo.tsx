
import React from 'react';

const Logo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <img 
          src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
          alt="Andata Logo" 
          className="w-auto h-auto max-h-full max-w-full object-contain"
          style={{ 
            minWidth: '60px', 
            minHeight: '60px', 
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
