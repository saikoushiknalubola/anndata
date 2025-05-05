
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'bordered' | 'highlighted' | 'farm' | 'tricolor' | 'gradient' | 'image-card' | 'rich' | 'clay' | 'village' | 'jute' | 'kolam' | 'warli' | 'bandhani';
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'top' | 'left' | 'right' | 'bottom';
}

const Card = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'default',
  imageUrl,
  imageAlt,
  imagePosition = 'top'
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white/98 shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm',
    bordered: 'border border-terracotta/20 bg-white/98 shadow-sm hover:shadow-md transition-shadow duration-300',
    highlighted: 'border-2 border-terracotta bg-white/98 shadow-lg hover:shadow-xl transition-shadow duration-300',
    farm: 'bg-gradient-to-r from-leaf/5 to-white/98 border-l-4 border-l-leaf shadow-md hover:shadow-lg transition-shadow duration-300',
    tricolor: 'bg-white/98 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#FF9933] border-b-4 border-b-[#138808]',
    gradient: 'bg-gradient-to-br from-clay via-white to-leaf/5 shadow-md hover:shadow-lg transition-shadow duration-300',
    'image-card': 'bg-white/98 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden',
    rich: 'bg-gradient-to-br from-white via-cream/30 to-white shadow-lg hover:shadow-xl transition-all duration-300 border border-terracotta/20',
    clay: 'bg-gradient-to-br from-terracotta/10 to-clay/30 shadow-md border border-terracotta/30 hover:shadow-lg transition-all',
    village: 'bg-gradient-to-br from-jute/10 to-white shadow-md border-2 border-jute/20 hover:shadow-lg transition-all',
    jute: 'bg-gradient-to-r from-wheat/20 to-cream/50 shadow-md border border-jute/30 hover:shadow-lg transition-all',
    kolam: 'bg-white/95 shadow-md border border-saffron/30 hover:shadow-lg transition-all relative overflow-hidden',
    warli: 'bg-cream/80 shadow-md border border-earth/30 hover:shadow-lg transition-all relative overflow-hidden',
    bandhani: 'bg-gradient-to-br from-white via-cream/50 to-white shadow-md border border-saffron/30 hover:shadow-lg transition-all relative overflow-hidden'
  };
  
  const hasImage = !!imageUrl;
  
  if (variant === 'image-card' && hasImage) {
    return (
      <div 
        className={`rounded-xl ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}`}
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
    return null;
  };
  
  return (
    <div 
      className={`p-4 sm:p-5 rounded-xl ${variantClasses[variant]} ${className} ${flexClasses} ${onClick ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}`}
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
