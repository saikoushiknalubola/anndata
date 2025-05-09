
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'bordered' | 'highlighted' | 'farm' | 'tricolor' | 'gradient' | 'image-card' | 'rich' | 'clay' | 'village' | 'jute' | 'kolam' | 'warli' | 'bandhani' | 'official' | 'govt';
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'top' | 'left' | 'right' | 'bottom';
  hoverEffect?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'default',
  imageUrl,
  imageAlt,
  imagePosition = 'top',
  hoverEffect = true
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white/98 shadow-md backdrop-blur-sm',
    bordered: 'border border-terracotta/20 bg-white/98 shadow-sm',
    highlighted: 'border-2 border-terracotta bg-white/98 shadow-lg',
    farm: 'bg-gradient-to-r from-[#34C759]/5 to-white/98 border-l-4 border-l-[#34C759] shadow-md',
    tricolor: 'bg-white/98 shadow-md border-t-4 border-t-[#FF9933] border-b-4 border-b-[#138808]',
    gradient: 'bg-gradient-to-br from-clay via-white to-[#34C759]/5 shadow-md',
    'image-card': 'bg-white/98 shadow-md overflow-hidden',
    rich: 'bg-gradient-to-br from-white via-cream/30 to-white shadow-lg border border-[#FF9933]/20',
    clay: 'bg-gradient-to-br from-terracotta/10 to-clay/30 shadow-md border border-terracotta/30',
    village: 'bg-gradient-to-br from-jute/10 to-white shadow-md border-2 border-jute/20',
    jute: 'bg-gradient-to-r from-wheat/20 to-cream/50 shadow-md border border-jute/30',
    kolam: 'bg-white/95 shadow-md border border-saffron/30 relative overflow-hidden',
    warli: 'bg-cream/80 shadow-md border border-earth/30 relative overflow-hidden',
    bandhani: 'bg-gradient-to-br from-white via-cream/50 to-white shadow-md border border-saffron/30 relative overflow-hidden',
    official: 'bg-white shadow-md border-l-4 border-l-[#FF9933] border-r-4 border-r-[#138808] relative overflow-hidden',
    govt: 'bg-gradient-to-br from-white/90 to-[#F8F8F8]/90 shadow-md border border-[#4285F4]/20 relative overflow-hidden'
  };
  
  const hasImage = !!imageUrl;
  
  if (variant === 'image-card' && hasImage) {
    return (
      <div 
        className={`rounded-xl ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer' : ''} ${hoverEffect ? 'hover:shadow-lg transition-all duration-300 hover:-translate-y-1' : ''}`}
        onClick={onClick}
      >
        <div className="h-48 overflow-hidden rounded-t-xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <img 
            src={imageUrl} 
            alt={imageAlt || 'Card image'} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        </div>
        <div className="p-5 sm:p-6">
          {children}
        </div>
      </div>
    );
  }
  
  const flexClasses = hasImage && (imagePosition === 'left' || imagePosition === 'right') 
    ? 'flex flex-col sm:flex-row gap-4 items-center' 
    : '';
  
  const imageOrder = imagePosition === 'right' ? 'sm:order-last' : '';
  
  // Special decorative elements for Indian-inspired variants
  const renderDecorations = () => {
    if (variant === 'kolam') {
      return (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 opacity-10" 
               style={{backgroundImage: "url('/lovable-uploads/kolam-pattern.png')", backgroundSize: "cover"}}></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 opacity-10" 
               style={{backgroundImage: "url('/lovable-uploads/kolam-pattern.png')", backgroundSize: "cover"}}></div>
        </>
      );
    }
    if (variant === 'warli') {
      return (
        <div className="absolute top-0 right-0 w-12 h-12 opacity-10" 
             style={{backgroundImage: "url('/lovable-uploads/warli-art.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
      );
    }
    if (variant === 'bandhani') {
      return (
        <div className="absolute inset-0 opacity-5" 
             style={{backgroundImage: "url('/lovable-uploads/bandhani-pattern.png')", backgroundSize: "100px", backgroundRepeat: "repeat"}}></div>
      );
    }
    if (variant === 'official' || variant === 'govt') {
      return (
        <div className="absolute top-2 right-2 w-8 h-8 opacity-10" 
             style={{backgroundImage: "url('/lovable-uploads/india-emblem.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
      );
    }
    return null;
  };
  
  return (
    <div 
      className={`p-4 sm:p-5 rounded-xl ${variantClasses[variant]} ${className} ${flexClasses} ${onClick ? 'cursor-pointer' : ''} ${hoverEffect ? 'hover:shadow-lg transition-all duration-300 hover:-translate-y-1' : ''}`}
      onClick={onClick}
    >
      {renderDecorations()}
      {hasImage && imagePosition !== 'top' && (
        <div className={`w-full sm:w-1/3 rounded-lg overflow-hidden ${imageOrder}`}>
          <img 
            src={imageUrl} 
            alt={imageAlt || 'Card image'} 
            className="w-full h-40 sm:h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        </div>
      )}
      <div className={hasImage && imagePosition !== 'top' ? 'w-full sm:w-2/3 relative z-10' : 'w-full relative z-10'}>
        {children}
      </div>
    </div>
  );
};

export default Card;
