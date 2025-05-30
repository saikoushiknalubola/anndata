
import React from 'react';
import { cn } from '@/lib/utils';

// Define card variants for type safety
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
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  onClick?: () => void;
  withGlow?: boolean;
  hoverEffect?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
  imageOverlay?: boolean;
}

const Card = ({ 
  children, 
  className = "", 
  variant = "default", 
  onClick,
  withGlow = false,
  hoverEffect = false,
  imageUrl,
  imageAlt = "Featured image",
  imagePosition = "top",
  imageOverlay = false
}: CardProps) => {
  const getCardClasses = () => {
    let baseClasses = "rounded-xl overflow-hidden transition-all duration-300";
    
    if (withGlow) {
      baseClasses += " glow-effect";
    }
    
    if (hoverEffect) {
      baseClasses += " hover-lift";
    }
    
    switch (variant) {
      case "glass":
        return cn(baseClasses, "bg-white/70 backdrop-blur-md border border-white/30", className);
      case "gradient":
        return cn(baseClasses, "bg-gradient-to-br from-white/90 to-cream/70 border border-white/30", className);
      case "bordered":
        return cn(baseClasses, "bg-white border border-soil/20", className);
      case "elevated":
        return cn(baseClasses, "bg-white shadow-lg", className);
      case "mesh":
        return cn(baseClasses, "mesh-gradient", className);
      case "tricolor":
        return cn(baseClasses, "bg-gradient-to-r from-[#FF9933]/10 via-white/80 to-[#138808]/10 border border-[#000080]/10", className);
      case "farm":
        return cn(baseClasses, "bg-gradient-to-r from-soil-50 to-white border-l-4 border-l-leaf shadow-md", className);
      case "minimal":
        return cn(baseClasses, "bg-transparent border border-soil/10", className);
      case "bordered-gradient":
        return cn(baseClasses, "relative p-[1px] bg-gradient-to-r from-saffron to-soil before:content-[''] before:absolute before:inset-[1px] before:bg-white before:rounded-[inherit] before:-z-10", className);
      case "rich":
        return cn(baseClasses, "bg-gradient-to-r from-soil-50 to-saffron-50 border-l-4 border-l-saffron shadow-md", className);
      case "image-card":
        return cn(baseClasses, "bg-white/90 shadow-lg overflow-hidden", className);
      case "warli":
        return cn(baseClasses, "bg-gradient-to-r from-soil-100 to-white border-2 border-soil/20 bg-[url('/subtle-pattern.png')] bg-repeat bg-blend-overlay", className);
      case "highlighted":
        return cn(baseClasses, "bg-gradient-to-r from-saffron/10 to-white border-l-4 border-l-saffron shadow-md", className);
      case "clay":
        return cn(baseClasses, "bg-white border border-soil/10 shadow-inner", className);
      case "govt":
        return cn(baseClasses, "bg-gradient-to-r from-[#FF9933]/10 via-white/80 to-[#138808]/10 border border-[#000080]/10", className);
      default:
        return cn(baseClasses, "bg-white shadow-sm p-4", className);
    }
  };

  // Handle different image positions
  const renderImageForPosition = (position: 'top' | 'bottom' | 'left' | 'right') => {
    if (!imageUrl) return null;
    
    return (
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className={`object-cover ${position === 'left' || position === 'right' ? 'h-full' : 'w-full h-48'}`}
        />
        {imageOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        )}
      </div>
    );
  };

  // Render different layouts based on image position
  if (imageUrl && (imagePosition === 'left' || imagePosition === 'right')) {
    return (
      <div className={getCardClasses()} onClick={onClick}>
        <div className={`flex flex-col sm:flex-row ${imagePosition === 'right' ? 'sm:flex-row-reverse' : ''}`}>
          <div className="sm:w-1/3">
            {renderImageForPosition(imagePosition)}
          </div>
          <div className="p-4 sm:w-2/3">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={getCardClasses()} onClick={onClick}>
      {imageUrl && imagePosition === "top" && renderImageForPosition('top')}
      <div className={imageUrl && (imagePosition === "top" || imagePosition === "bottom") ? "p-4" : ""}>
        {children}
      </div>
      {imageUrl && imagePosition === "bottom" && renderImageForPosition('bottom')}
    </div>
  );
};

export default Card;
export type { CardProps };
