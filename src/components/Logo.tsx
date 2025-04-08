
import React from 'react';

const Logo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative overflow-hidden rounded-full border-2 border-leaf/30 shadow-md">
        <img 
          src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
          alt="Andata Logo" 
          className="w-auto h-auto max-h-full max-w-full object-contain rounded-full"
          style={{ 
            minWidth: '120px', 
            minHeight: '120px',
            maxWidth: '150px',
            maxHeight: '150px'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
