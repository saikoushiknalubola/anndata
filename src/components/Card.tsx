
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define a type that allows custom CSS properties
interface CustomCSSProperties extends React.CSSProperties {
  '--glow-color'?: string;
  '--animation-delay'?: string;
}

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'bordered' | 'elevated' | 'mesh' | 'tricolor' | 'farm' | 'minimal' | 'bordered-gradient';
  onClick?: () => void;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: string;
  imagePosition?: 'top' | 'left' | 'right' | 'bottom';
  hoverEffect?: boolean;
  withGlow?: boolean;
  withAnimation?: boolean | 'fadeIn' | 'slideUp' | 'scaleIn';
  withBadge?: boolean;
  badgeText?: string;
}

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  onClick,
  withImage = false,
  imageSrc = '',
  imageAlt = 'Card image',
  imageHeight = '180px',
  imagePosition = 'top',
  hoverEffect = true,
  withGlow = false,
  withAnimation = false,
  withBadge = false,
  badgeText = '',
}: CardProps) => {
  // Determine if the card has an image
  const hasImage = withImage && imageSrc;

  // Get variant-specific styles
  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30';
      case 'gradient':
        return 'bg-gradient-to-br from-white/80 via-white/60 to-white/80 border border-white/50';
      case 'bordered':
        return 'bg-white border-2 border-soil/10 hover:border-soil/20';
      case 'elevated':
        return 'bg-white shadow-lg';
      case 'mesh':
        return 'bg-gradient-to-br from-soil-500 to-saffron shadow-lg text-white';
      case 'tricolor':
        return 'bg-gradient-to-r from-[#FF9933]/10 via-white/30 to-[#138808]/10 border-l-2 border-l-[#FF9933] border-r-2 border-r-[#138808]';
      case 'farm':
        return 'bg-gradient-to-r from-cream to-white border-l-4 border-l-saffron';
      case 'minimal':
        return 'bg-transparent border border-soil/10';
      case 'bordered-gradient':
        return 'bg-white p-[1px] border-0 rounded-[inherit] relative before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-saffron before:to-soil before:-z-10';
      default:
        return 'bg-white';
    }
  };

  // Glass variant has special background styles
  const getGlassVariantStyle = () => {
    if (variant === 'glass') {
      return { backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' };
    }
    return {};
  };

  // Get animation properties
  const getAnimationProps = () => {
    if (!withAnimation) return {};
    
    const animationType = typeof withAnimation === 'string' ? withAnimation : 'fadeIn';
    
    switch (animationType) {
      case 'slideUp':
        return {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.5, ease: 'easeOut' }
        };
      case 'scaleIn':
        return {
          initial: { scale: 0.95, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.4, ease: 'easeOut' }
        };
      case 'fadeIn':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, ease: 'easeOut' }
        };
    }
  };

  // Render decorative elements for special cards
  const renderDecorations = () => {
    if (variant === 'mesh' || variant === 'gradient') {
      return (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl -z-[1]"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-tl from-white/10 to-transparent blur-xl -z-[1]"></div>
        </>
      );
    }
    return null;
  };

  // Determine which component to use based on animation
  const CardComponent = withAnimation ? motion.div : 'div';
  
  // Get animation properties if needed
  const animationProps = withAnimation ? getAnimationProps() : {};

  return (
    <CardComponent
      onClick={onClick}
      className={cn(
        'relative rounded-xl p-4 transition-all duration-300 overflow-hidden shadow-sm',
        getVariantClasses(),
        hoverEffect && !onClick && 'hover:-translate-y-1 hover:shadow-md',
        hoverEffect && onClick && 'hover:-translate-y-1 hover:shadow-md cursor-pointer',
        withGlow && 'hover:shadow-[0_0_15px_rgba(255,152,0,0.3)]',
        variant === 'bordered-gradient' && 'before:content-[""]',
        variant === 'bordered-gradient' ? 'relative' : '',
        hasImage && imagePosition === 'top' ? 'pt-0' : '',
        hasImage && imagePosition === 'bottom' ? 'pb-0' : '',
        hasImage && imagePosition === 'left' ? 'pl-0 flex' : '',
        hasImage && imagePosition === 'right' ? 'pr-0 flex' : '',
        className
      )}
      style={{
        '--glow-color': 'rgba(255, 152, 0, 0.3)',
        ...getGlassVariantStyle()
      } as CustomCSSProperties}
      {...animationProps}
    >
      {renderDecorations()}
      {withBadge && badgeText && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-saffron to-soil text-white text-xs font-medium px-2 py-0.5 rounded-full shadow-sm z-10">
          {badgeText}
        </div>
      )}
      
      {hasImage && imagePosition === 'top' && (
        <div className="h-48 overflow-hidden relative rounded-t-xl mb-4">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400/e9e9e9/999?text=Image+Error';
            }}
          />
        </div>
      )}
      
      {hasImage && imagePosition === 'left' && (
        <div className="w-1/3 overflow-hidden relative rounded-l-xl mr-4 -ml-4 min-h-[150px]">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400/e9e9e9/999?text=Image+Error';
            }}
          />
        </div>
      )}
      
      <div className={cn(
        'relative z-[1]',
        hasImage && (imagePosition === 'left' || imagePosition === 'right') ? 'flex-1' : ''
      )}>
        {children}
      </div>
      
      {hasImage && imagePosition === 'right' && (
        <div className="w-1/3 overflow-hidden relative rounded-r-xl ml-4 -mr-4 min-h-[150px]">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400/e9e9e9/999?text=Image+Error';
            }}
          />
        </div>
      )}
      
      {hasImage && imagePosition === 'bottom' && (
        <div className="h-48 overflow-hidden relative rounded-b-xl mt-4">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400/e9e9e9/999?text=Image+Error';
            }}
          />
        </div>
      )}
      
      {variant === 'bordered-gradient' && (
        <div className="absolute inset-[1px] bg-white rounded-[calc(0.75rem-1px)] -z-[5]"></div>
      )}
    </CardComponent>
  );
};

export default Card;
