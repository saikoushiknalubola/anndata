
import { useLanguage } from '../contexts/LanguageContext';

const Logo = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="absolute -top-2 -right-2 bg-saffron text-white text-[6px] px-1 py-0.5 rounded-sm font-bold">
          {t('officialApp')}
        </div>
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
        <div className="text-xs text-earth/90 font-semibold mt-1 text-center bg-white/70 rounded-sm px-1">
          {t('officialApp')}
        </div>
      </div>
    </div>
  );
};

export default Logo;
