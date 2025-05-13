
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'bordered' | 'highlighted' | 'farm' | 'tricolor' | 'gradient' | 'image-card' | 'rich' | 'clay' | 'village' | 'jute' | 'kolam' | 'warli' | 'bandhani' | 'official' | 'govt' | 'glass' | 'neomorphic' | 'floating' | 'mesh' | '3d' | 'bordered-gradient';
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'top' | 'left' | 'right' | 'bottom';
  hoverEffect?: boolean;
  withGlow?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'default',
  imageUrl,
  imageAlt,
  imagePosition = 'top',
  hoverEffect = true,
  withGlow = false
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white/98 shadow-md backdrop-blur-sm',
    bordered: 'border border-[#FF5722]/20 bg-white/98 shadow-sm',
    highlighted: 'border-2 border-[#FF5722] bg-white/98 shadow-lg',
    farm: 'bg-gradient-to-r from-[#4CAF50]/5 to-white/98 border-l-4 border-l-[#4CAF50] shadow-md',
    tricolor: 'bg-white/98 shadow-md border-t-4 border-t-[#FF9933] border-b-4 border-b-[#138808]',
    gradient: 'bg-gradient-to-br from-[#D7CCC8] via-white to-[#4CAF50]/5 shadow-md',
    'image-card': 'bg-white/98 shadow-md overflow-hidden',
    rich: 'bg-gradient-to-br from-white via-cream/30 to-white shadow-lg border border-[#FF5722]/20',
    clay: 'bg-gradient-to-br from-[#E64A19]/10 to-[#D7CCC8]/30 shadow-md border border-[#E64A19]/30',
    village: 'bg-gradient-to-br from-[#8D6E63]/10 to-white shadow-md border-2 border-[#8D6E63]/20',
    jute: 'bg-gradient-to-r from-[#FFE082]/20 to-cream/50 shadow-md border border-[#8D6E63]/30',
    kolam: 'bg-white/95 shadow-md border border-[#FF5722]/30 relative overflow-hidden',
    warli: 'bg-cream/80 shadow-md border border-earth/30 relative overflow-hidden',
    bandhani: 'bg-gradient-to-br from-white via-cream/50 to-white shadow-md border border-[#FF5722]/30 relative overflow-hidden',
    official: 'bg-white shadow-md border-l-4 border-l-[#FF9933] border-r-4 border-r-[#138808] relative overflow-hidden',
    govt: 'bg-gradient-to-br from-white/90 to-[#F8F8F8]/90 shadow-md border border-[#03A9F4]/20 relative overflow-hidden',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg',
    neomorphic: 'bg-[#f0f0f3] shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none',
    floating: 'bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300',
    mesh: 'mesh-gradient shadow-lg text-white',
    '3d': 'bg-white shadow-md transform-gpu hover:rotate-1 hover:scale-[1.02] transition-all duration-300',
    'bordered-gradient': 'card-border-gradient'
  };
  
  const hasImage = !!imageUrl;
  
  if (variant === 'image-card' && hasImage) {
    return (
      <div 
        className={cn(
          'rounded-xl overflow-hidden', 
          variantClasses[variant], 
          className, 
          onClick ? 'cursor-pointer' : '', 
          hoverEffect ? 'hover:shadow-lg transition-all duration-300 hover:-translate-y-1' : '',
          withGlow ? 'glow-effect' : ''
        )}
        onClick={onClick}
        style={{
          '--glow-color': 'rgba(255, 87, 34, 0.3)'
        } as React.CSSProperties}
      >
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
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
  
  // Special decorative elements for enhanced variants
  const renderDecorations = () => {
    if (variant === 'kolam') {
      return (
        <>
          <div className="absolute top-0 left-0 w-12 h-12 opacity-10" 
               style={{backgroundImage: "url('/lovable-uploads/kolam-pattern.png')", backgroundSize: "cover"}}></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 opacity-10" 
               style={{backgroundImage: "url('/lovable-uploads/kolam-pattern.png')", backgroundSize: "cover"}}></div>
        </>
      );
    }
    if (variant === 'warli') {
      return (
        <div className="absolute top-0 right-0 w-16 h-16 opacity-10" 
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
        <div className="absolute top-2 right-2 w-10 h-10 opacity-10" 
             style={{backgroundImage: "url('/lovable-uploads/india-emblem.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
      );
    }
    if (variant === 'glass' || variant === 'gradient') {
      return (
        <>
          <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-xl"></div>
        </>
      );
    }
    return null;
  };
  
  // Handle glass variant background position based on className index
  const getGlassVariantStyle = () => {
    if (variant === 'glass') {
      // Create a unique effect based on a hash of the className
      const hash = className.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const topPos = hash % 100;
      const leftPos = (hash * 1.5) % 100;
      
      return {
        backgroundImage: `radial-gradient(circle at ${leftPos}% ${topPos}%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)`
      };
    }
    return {};
  };
  
  return (
    <div 
      className={cn(
        'p-4 sm:p-5 rounded-xl overflow-hidden relative',
        variantClasses[variant],
        flexClasses,
        onClick ? 'cursor-pointer' : '',
        hoverEffect && variant !== 'floating' && variant !== '3d' ? 'hover:shadow-lg transition-all duration-300 hover:-translate-y-1' : '',
        withGlow ? 'glow-effect' : '',
        className
      )}
      onClick={onClick}
      style={{
        '--glow-color': 'rgba(255, 87, 34, 0.3)',
        ...getGlassVariantStyle()
      } as React.CSSProperties}
    >
      {renderDecorations()}
      {hasImage && imagePosition !== 'top' && (
        <div className={cn('w-full sm:w-1/3 rounded-lg overflow-hidden', imageOrder)}>
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
      
      {/* Enhanced decorations for special cards */}
      {variant === 'floating' && (
        <div className="absolute -z-10 inset-0 rounded-xl bg-white blur-md transform scale-[0.98] opacity-70"></div>
      )}
      {variant === 'bordered-gradient' && (
        <div className="absolute inset-0 -z-10 rounded-xl p-[2px] bg-gradient-to-r from-[#FF5722] via-[#FF9800] to-[#FFC107]"></div>
      )}
    </div>
  );
};

export default Card;
