
const Logo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
        alt="Andata Logo" 
        className="w-auto h-auto max-h-full max-w-full object-contain"
        style={{ 
          minWidth: '50px', 
          minHeight: '50px',
          filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.1))'
        }}
      />
    </div>
  );
};

export default Logo;
