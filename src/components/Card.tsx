
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Custom CSS properties interface
interface CustomCSSProperties extends React.CSSProperties {
  '--animation-delay'?: string;
}

// Define all possible card variants
export type CardVariant = 
  | 'default' 
  | 'glass' 
  | 'gradient' 
  | 'bordered' 
  | 'elevated' 
  | 'mesh' 
  | 'tricolor' 
  | 'farm' 
  | 'minimal' 
  | 'bordered-gradient'
  | 'rich'
  | 'image-card'
  | 'warli'
  | 'highlighted'
  | 'clay'
  | 'govt';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  onClick?: () => void;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageUrl?: string; // added for compatibility
  imagePosition?: 'top' | 'left' | 'right' | 'bottom';
  animation?: 'fadeIn' | 'scaleIn' | 'slideIn' | 'none';
  withShimmer?: boolean;
  withShadow?: boolean;
  style?: CustomCSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  withImage = false,
  imageSrc = '',
  imageAlt = 'Card image',
  imageUrl = '', // added for compatibility
  imagePosition = 'top',
  animation = 'none',
  withShimmer = false,
  withShadow = true,
  style = {},
}) => {
  // For compatibility, use imageUrl if imageSrc is not provided
  const imgSrc = imageSrc || imageUrl;
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };
  
  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };
  
  // Get animation variant
  const getAnimationVariant = () => {
    switch (animation) {
      case 'fadeIn': return fadeIn;
      case 'scaleIn': return scaleIn;
      case 'slideIn': return slideIn;
      default: return {};
    }
  };
  
  // Get card variant styles
  const getCardVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'bg-white/60 backdrop-blur-md border border-white/30 shadow-sm';
      case 'gradient':
        return 'bg-gradient-to-br from-white/80 to-cream/60 border border-white/30 shadow-sm';
      case 'bordered':
        return 'bg-white border border-soil/20 shadow-sm';
      case 'elevated':
        return 'bg-white shadow-lg';
      case 'mesh':
        return 'bg-gradient-to-br from-cream/80 to-saffron/10 border border-saffron/20 shadow-sm';
      case 'tricolor':
        return 'bg-gradient-to-r from-[#FF9933]/10 via-white/80 to-[#138808]/10 border border-[#000080]/10 shadow-sm';
      case 'farm':
        return 'bg-gradient-to-r from-soil-50 to-white border-l-4 border-l-leaf shadow-md';
      case 'minimal':
        return 'bg-transparent border border-soil/10';
      case 'bordered-gradient':
        return 'bg-white p-[1px] border-0 rounded-[inherit] relative before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-saffron before:to-soil before:-z-10';
      case 'rich':
        return 'bg-gradient-to-r from-soil-50 to-saffron-50 border-l-4 border-l-saffron shadow-md';
      case 'image-card':
        return 'bg-white/90 shadow-lg overflow-hidden';
      case 'warli':
        return 'bg-gradient-to-r from-soil-100 to-white border-2 border-soil/20 bg-[url("/subtle-pattern.png")] bg-repeat bg-blend-overlay';
      case 'highlighted':
        return 'bg-gradient-to-r from-saffron/10 to-white border-l-4 border-l-saffron shadow-md';
      case 'clay':
        return 'bg-white border border-soil/10 shadow-inner';
      case 'govt':
        return 'bg-gradient-to-r from-[#FF9933]/10 via-white/80 to-[#138808]/10 border border-[#000080]/10';
      default:
        return 'bg-white';
    }
  };
  
  // Combine all classes
  const cardClasses = cn(
    'rounded-xl overflow-hidden transition-all duration-300',
    getCardVariantClasses(),
    withShadow && variant !== 'elevated' && 'shadow-sm hover:shadow-md',
    withShimmer && 'relative overflow-hidden',
    onClick && 'cursor-pointer hover:-translate-y-1',
    className
  );
  
  // Create layout based on image position
  const renderCardContent = () => {
    if (!withImage && !imgSrc) return children;
    
    const imageContent = imgSrc ? (
      <div className={cn(
        imagePosition === 'top' || imagePosition === 'bottom' ? 'w-full' : 'w-1/3',
        imagePosition === 'left' && 'order-first',
        imagePosition === 'right' && 'order-last',
        'overflow-hidden'
      )}>
        <img 
          src={imgSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ) : null;
    
    const contentSection = (
      <div className={cn(
        'flex-1',
        imagePosition === 'top' && 'mt-0',
        imagePosition === 'bottom' && 'mb-0',
        imgSrc && (imagePosition === 'left' || imagePosition === 'right') ? 'p-4' : ''
      )}>
        {children}
      </div>
    );
    
    // Different layouts based on image position
    switch (imagePosition) {
      case 'left':
      case 'right':
        return (
          <div className="flex">
            {imagePosition === 'left' && imageContent}
            {contentSection}
            {imagePosition === 'right' && imageContent}
          </div>
        );
      case 'bottom':
        return (
          <>
            {contentSection}
            {imageContent}
          </>
        );
      default: // top
        return (
          <>
            {imageContent}
            {contentSection}
          </>
        );
    }
  };
  
  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      initial={animation !== 'none' ? 'hidden' : undefined}
      animate={animation !== 'none' ? 'visible' : undefined}
      variants={getAnimationVariant()}
      style={style}
    >
      {withShimmer && (
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
      )}
      {renderCardContent()}
    </motion.div>
  );
};

export default Card;
