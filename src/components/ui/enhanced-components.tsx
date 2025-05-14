
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CardVariant } from '@/components/Card';

// Define a type for custom CSS properties
interface CustomCSSProperties extends React.CSSProperties {
  '--animation-delay'?: string;
  '--glow-color'?: string;
}

// Animation variants for consistent animations
const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { 
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { 
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { 
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

// Enhanced UI Provider to manage global UI state
export const EnhancedUIContext = React.createContext<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  animations: 'full' | 'reduced' | 'none';
  setAnimations: (value: 'full' | 'reduced' | 'none') => void;
}>({
  isDarkMode: false,
  toggleDarkMode: () => {},
  animations: 'full',
  setAnimations: () => {},
});

export const EnhancedUIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animations, setAnimations] = useState<'full' | 'reduced' | 'none'>('full');
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return (
    <EnhancedUIContext.Provider value={{ isDarkMode, toggleDarkMode, animations, setAnimations }}>
      {children}
      <EnhancedStyles />
    </EnhancedUIContext.Provider>
  );
};

export default EnhancedUIProvider;

// Enhanced Card Component
interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  glowEffect?: boolean;
  hoverEffect?: boolean;
  withAnimation?: string;
  onClick?: () => void;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  glowEffect = false,
  hoverEffect = false,
  withAnimation,
  onClick
}) => {
  const getMotionProps = () => {
    if (!withAnimation) return {};
    
    switch (withAnimation) {
      case 'fadeIn':
        return { 
          variants: fadeInVariants,
          initial: 'hidden',
          animate: 'visible',
          exit: 'exit'
        };
      case 'scaleIn':
        return { 
          variants: scaleInVariants,
          initial: 'hidden',
          animate: 'visible',
          exit: 'exit'
        };
      case 'slideIn':
        return { 
          variants: slideInVariants,
          initial: 'hidden',
          animate: 'visible',
          exit: 'exit'
        };
      default:
        return {};
    }
  };
  
  const getCardClasses = () => {
    let classes = 'rounded-xl overflow-hidden transition-all duration-300 ';
    
    // Base variant classes
    switch (variant) {
      case 'glass':
        classes += 'bg-white/70 backdrop-blur-md border border-white/30 ';
        break;
      case 'gradient':
        classes += 'bg-gradient-to-br from-white/90 to-cream/70 border border-white/30 ';
        break;
      case 'bordered':
        classes += 'bg-white border border-soil/20 ';
        break;
      case 'elevated':
        classes += 'bg-white shadow-lg ';
        break;
      case 'mesh':
        classes += 'mesh-gradient ';
        break;
      case 'tricolor':
        classes += 'bg-gradient-to-r from-[#FF9933]/10 via-white/80 to-[#138808]/10 border border-[#000080]/10 ';
        break;
      case 'farm':
        classes += 'bg-gradient-to-r from-soil-50 to-white border-l-4 border-l-leaf shadow-md ';
        break;
      case 'minimal':
        classes += 'bg-transparent border border-soil/10 ';
        break;
      case 'bordered-gradient':
        classes += 'relative p-[1px] bg-gradient-to-r from-saffron to-soil before:content-[""] before:absolute before:inset-[1px] before:bg-white before:rounded-[inherit] before:-z-10 ';
        break;
      case 'rich':
        classes += 'bg-gradient-to-r from-soil-50 to-saffron-50 border-l-4 border-l-saffron shadow-md ';
        break;
      case 'image-card':
        classes += 'bg-white/90 shadow-lg overflow-hidden ';
        break;
      case 'warli':
        classes += 'bg-gradient-to-r from-soil-100 to-white border-2 border-soil/20 bg-[url("/subtle-pattern.png")] bg-repeat bg-blend-overlay ';
        break;
      case 'highlighted':
        classes += 'bg-gradient-to-r from-saffron/10 to-white border-l-4 border-l-saffron shadow-md ';
        break;
      case 'clay':
        classes += 'bg-white border border-soil/10 shadow-inner ';
        break;
      case 'govt':
        classes += 'bg-gradient-to-r from-[#FF9933]/10 via-white/80 to-[#138808]/10 border border-[#000080]/10 ';
        break;
      default:
        classes += 'bg-white ';
    }
    
    // Add effect classes
    if (glowEffect) {
      classes += 'glow-effect ';
    }
    
    if (hoverEffect) {
      classes += 'hover-lift ';
    }
    
    return classes + className;
  };
  
  return (
    <motion.div 
      className={getCardClasses()} 
      onClick={onClick}
      {...getMotionProps()}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Enhanced Button Component
type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'leaf' 
  | 'soil' 
  | 'saffron' 
  | 'outline' 
  | 'glass' 
  | 'govt'
  | 'voice'
  | 'link'
  | 'accent'
  | 'ghost'
  | 'default';

interface MotionButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  withShine?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const MotionButton: React.FC<MotionButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  withShine = false,
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  const getButtonClasses = () => {
    let classes = 'relative flex items-center justify-center gap-2 rounded-full font-medium transition-all ';
    
    // Size classes
    switch (size) {
      case 'xs':
        classes += 'text-xs px-2 py-1 h-6 ';
        break;
      case 'sm':
        classes += 'text-xs px-3 py-1.5 ';
        break;
      case 'lg':
        classes += 'text-base px-6 py-3 ';
        break;
      default: // md
        classes += 'text-sm px-4 py-2 ';
    }
    
    // Variant classes
    switch (variant) {
      case 'primary':
        classes += 'bg-gradient-to-r from-[#34C759] to-[#34C759]/90 text-white shadow-md hover:shadow-lg active:shadow-sm hover:from-[#34C759]/90 hover:to-[#34C759] ';
        break;
      case 'secondary':
        classes += 'bg-gradient-to-r from-[#4285F4]/90 to-[#4285F4] text-white shadow-md hover:shadow-lg active:shadow-sm hover:from-[#4285F4] hover:to-[#4285F4]/90 ';
        break;
      case 'leaf':
        classes += 'bg-gradient-to-r from-leaf/90 to-leaf text-white shadow-md hover:shadow-lg active:shadow-sm hover:from-leaf hover:to-leaf/90 ';
        break;
      case 'soil':
        classes += 'bg-gradient-to-r from-soil/90 to-soil text-white shadow-md hover:shadow-lg active:shadow-sm hover:from-soil hover:to-soil/90 ';
        break;
      case 'saffron':
        classes += 'bg-gradient-to-r from-saffron/90 to-saffron text-white shadow-md hover:shadow-lg active:shadow-sm hover:from-saffron hover:to-saffron/90 ';
        break;
      case 'outline':
        classes += 'bg-transparent border-2 border-soil/70 text-soil hover:bg-soil/5 ';
        break;
      case 'glass':
        classes += 'bg-white/30 backdrop-blur-md border border-white/50 text-soil shadow-sm hover:bg-white/40 ';
        break;
      case 'govt':
        classes += 'bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-soil font-bold shadow-md hover:opacity-90 ';
        break;
      case 'voice':
        classes += 'bg-gradient-to-r from-saffron via-leaf to-saffron text-white shadow-lg hover:shadow-xl transition-all duration-200 ';
        break;
      case 'link':
        classes += 'bg-transparent text-primary underline hover:text-primary/80 p-0 shadow-none ';
        break;
      case 'accent':
        classes += 'bg-gradient-to-r from-accent/90 to-accent text-white shadow-md hover:shadow-lg active:shadow-sm hover:from-accent hover:to-accent/90 ';
        break;
      case 'ghost':
        classes += 'bg-transparent hover:bg-gray-100/50 text-soil hover:text-soil/80 ';
        break;
      case 'default':
        classes += 'bg-white shadow-sm hover:shadow-md text-soil hover:bg-gray-50 ';
        break;
      default:
        classes += 'bg-gradient-to-r from-[#34C759] to-[#34C759]/90 text-white shadow-md hover:shadow-lg ';
    }
    
    // Other classes
    if (fullWidth) {
      classes += 'w-full ';
    }
    
    if (disabled) {
      classes += 'opacity-50 pointer-events-none ';
    }
    
    if (withShine) {
      classes += 'btn-shine overflow-hidden ';
    }
    
    return classes + className;
  };
  
  return (
    <motion.button
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
};

// Enhanced Text Component with Gradient
interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'soil' | 'leaf' | 'saffron' | 'sky' | 'tricolor' | 'earth' | 'ocean' | 'sunrise' | 'sunset' | 'harvest' | 'vibrant';
  className?: string;
  withAnimation?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = 'primary',
  className = '',
  withAnimation = false,
}) => {
  const getGradientClasses = () => {
    let classes = 'bg-clip-text text-transparent bg-gradient-to-r ';
    
    switch (variant) {
      case 'primary':
        classes += 'from-[#34C759] to-[#138808] ';
        break;
      case 'secondary':
        classes += 'from-[#4285F4] to-[#0288D1] ';
        break;
      case 'soil':
        classes += 'from-[#FF5722] to-[#E64A19] ';
        break;
      case 'leaf':
        classes += 'from-[#4CAF50] to-[#2E7D32] ';
        break;
      case 'saffron':
        classes += 'from-[#FF9933] to-[#FF8F00] ';
        break;
      case 'sky':
        classes += 'from-[#03A9F4] to-[#01579B] ';
        break;
      case 'tricolor':
        classes += 'from-[#FF9933] via-white to-[#138808] ';
        break;
      case 'earth':
        classes += 'from-[#8B4513] to-[#5D4037] ';
        break;
      case 'ocean':
        classes += 'from-[#03A9F4] to-[#01579B] ';
        break;
      case 'sunrise':
        classes += 'from-[#ff9a9e] to-[#fad0c4] ';
        break;
      case 'sunset':
        classes += 'from-[#a18cd1] to-[#fbc2eb] ';
        break;
      case 'harvest':
        classes += 'from-[#F9A825] to-[#FF8F00] ';
        break;
      case 'vibrant':
        classes += 'from-[#FF9933] via-[#FF5722] to-[#F44336] ';
        break;
      default:
        classes += 'from-[#34C759] to-[#138808] ';
    }
    
    if (withAnimation) {
      classes += 'animate-shimmer bg-size-200 ';
    }
    
    return classes + className;
  };
  
  return (
    <span className={getGradientClasses()}>
      {children}
    </span>
  );
};

// Badge Component
interface IconBadgeProps {
  icon: React.ElementType;
  variant?: 'primary' | 'secondary' | 'soil' | 'leaf' | 'earth' | 'saffron' | 'sky' | 'harvest' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  withGlow?: boolean;
}

const IconBadge: React.FC<IconBadgeProps> = ({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className = '',
  withGlow = false,
}) => {
  const getBadgeClasses = () => {
    let classes = 'flex items-center justify-center rounded-full ';
    
    // Size classes
    switch (size) {
      case 'xs':
        classes += 'w-5 h-5 text-[10px] ';
        break;
      case 'sm':
        classes += 'w-6 h-6 text-xs ';
        break;
      case 'lg':
        classes += 'w-10 h-10 text-lg ';
        break;
      default: // md
        classes += 'w-8 h-8 text-sm ';
    }
    
    // Variant classes
    switch (variant) {
      case 'primary':
        classes += 'bg-gradient-to-br from-[#34C759]/20 to-[#34C759]/10 text-[#34C759] ';
        break;
      case 'secondary':
        classes += 'bg-gradient-to-br from-[#4285F4]/20 to-[#4285F4]/10 text-[#4285F4] ';
        break;
      case 'soil':
        classes += 'bg-gradient-to-br from-[#FF5722]/20 to-[#FF5722]/10 text-[#FF5722] ';
        break;
      case 'leaf':
        classes += 'bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/10 text-[#4CAF50] ';
        break;
      case 'earth':
        classes += 'bg-gradient-to-br from-[#795548]/20 to-[#795548]/10 text-[#795548] ';
        break;
      case 'saffron':
        classes += 'bg-gradient-to-br from-[#FF9933]/20 to-[#FF9933]/10 text-[#FF9933] ';
        break;
      case 'sky':
        classes += 'bg-gradient-to-br from-[#03A9F4]/20 to-[#03A9F4]/10 text-[#03A9F4] ';
        break;
      case 'harvest':
        classes += 'bg-gradient-to-br from-[#FFC107]/20 to-[#FFC107]/10 text-[#FFC107] ';
        break;
      case 'success':
        classes += 'bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/10 text-[#4CAF50] ';
        break;
      case 'warning':
        classes += 'bg-gradient-to-br from-[#FFC107]/20 to-[#FFC107]/10 text-[#FFC107] ';
        break;
      case 'error':
        classes += 'bg-gradient-to-br from-[#F44336]/20 to-[#F44336]/10 text-[#F44336] ';
        break;
      default:
        classes += 'bg-gradient-to-br from-[#34C759]/20 to-[#34C759]/10 text-[#34C759] ';
    }
    
    if (withGlow) {
      classes += 'glow-effect ';
    }
    
    return classes + className;
  };
  
  return (
    <div className={getBadgeClasses()}>
      <Icon className="w-4 h-4" />
    </div>
  );
};

// Enhanced Badge Component
interface EnhancedBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'soil' | 'leaf' | 'saffron' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  withAnimation?: boolean;
}

const EnhancedBadge: React.FC<EnhancedBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
  withAnimation = false,
}) => {
  const getBadgeClasses = () => {
    let classes = 'inline-flex items-center justify-center rounded-full font-medium ';
    
    // Size classes
    switch (size) {
      case 'xs':
        classes += 'text-[10px] px-1.5 py-0.25 ';
        break;
      case 'sm':
        classes += 'text-xs px-2 py-0.5 ';
        break;
      case 'lg':
        classes += 'text-sm px-3 py-1 ';
        break;
      default: // md
        classes += 'text-xs px-2.5 py-0.75 ';
    }
    
    // Variant classes
    switch (variant) {
      case 'primary':
        classes += 'bg-[#34C759]/10 text-[#34C759] border border-[#34C759]/20 ';
        break;
      case 'secondary':
        classes += 'bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/20 ';
        break;
      case 'soil':
        classes += 'bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20 ';
        break;
      case 'leaf':
        classes += 'bg-[#4CAF50]/10 text-[#4CAF50] border border-[#4CAF50]/20 ';
        break;
      case 'saffron':
        classes += 'bg-[#FF9933]/10 text-[#FF9933] border border-[#FF9933]/20 ';
        break;
      case 'info':
        classes += 'bg-[#03A9F4]/10 text-[#03A9F4] border border-[#03A9F4]/20 ';
        break;
      case 'success':
        classes += 'bg-[#4CAF50]/10 text-[#4CAF50] border border-[#4CAF50]/20 ';
        break;
      case 'warning':
        classes += 'bg-[#FFC107]/10 text-[#FFC107] border border-[#FFC107]/20 ';
        break;
      case 'error':
        classes += 'bg-[#F44336]/10 text-[#F44336] border border-[#F44336]/20 ';
        break;
      default:
        classes += 'bg-[#34C759]/10 text-[#34C759] border border-[#34C759]/20 ';
    }
    
    if (withAnimation) {
      classes += 'animate-pulse-gentle ';
    }
    
    return classes + className;
  };
  
  return (
    <span className={getBadgeClasses()}>
      {children}
    </span>
  );
};

// Section Divider
interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'dotted' | 'wavy';
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'default',
  className = '',
}) => {
  const getDividerClasses = () => {
    let classes = 'w-full my-4 ';
    
    switch (variant) {
      case 'gradient':
        classes += 'h-px bg-gradient-to-r from-transparent via-soil/30 to-transparent ';
        break;
      case 'dotted':
        classes += 'h-px border-t-2 border-dotted border-soil/20 ';
        break;
      case 'wavy':
        classes += 'h-3 wavy-divider ';
        break;
      default:
        classes += 'h-px bg-soil/10 ';
    }
    
    return classes + className;
  };
  
  return <div className={getDividerClasses()} />;
};

// Glass Container
interface GlassContainerProps {
  children: React.ReactNode;
  intensity?: 'light' | 'medium' | 'heavy';
  className?: string;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  intensity = 'medium',
  className = '',
}) => {
  const getGlassClasses = () => {
    let classes = 'rounded-xl overflow-hidden ';
    
    switch (intensity) {
      case 'light':
        classes += 'bg-white/20 backdrop-blur-sm ';
        break;
      case 'heavy':
        classes += 'bg-white/50 backdrop-blur-xl ';
        break;
      default: // medium
        classes += 'bg-white/30 backdrop-blur-md ';
    }
    
    return classes + className;
  };
  
  return (
    <div className={getGlassClasses()}>
      {children}
    </div>
  );
};

// Enhanced Image
interface EnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  rounded?: string;
  overlay?: boolean;
  overlayColor?: string;
  hoverEffect?: 'zoom' | 'blur' | 'fade' | 'none';
}

const EnhancedImage: React.FC<EnhancedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  rounded = 'lg',
  overlay = false,
  overlayColor = 'rgba(0, 0, 0, 0.3)',
  hoverEffect = 'none',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case '1/1': 
        return 'aspect-square';
      case '16/9': 
        return 'aspect-video';
      case '4/3': 
        return 'aspect-4/3';
      case '3/2': 
        return 'aspect-3/2';
      default: 
        return '';
    }
  };
  
  const getRoundedClass = () => {
    switch (rounded) {
      case 'none': 
        return '';
      case 'sm': 
        return 'rounded-sm';
      case 'md': 
        return 'rounded-md';
      case 'lg': 
        return 'rounded-lg';
      case 'xl': 
        return 'rounded-xl';
      case 'full': 
        return 'rounded-full';
      default: 
        return 'rounded-lg';
    }
  };
  
  const getHoverEffectClass = () => {
    switch (hoverEffect) {
      case 'zoom': 
        return 'hover:scale-110';
      case 'blur': 
        return 'hover:blur-sm';
      case 'fade': 
        return 'hover:opacity-70';
      default: 
        return '';
    }
  };
  
  return (
    <div className={`relative overflow-hidden ${getAspectRatioClass()} ${getRoundedClass()} ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-soil/10 animate-pulse">
          <div className="w-8 h-8 border-4 border-soil/20 border-t-soil/40 rounded-full animate-spin"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-soil/10">
          <div className="text-soil/40 text-sm">Image failed to load</div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${getHoverEffectClass()} ${!isLoaded && 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setError(true);
          setIsLoaded(true);
        }}
      />
      
      {overlay && isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          style={{ background: overlayColor }}
        ></div>
      )}
    </div>
  );
};

// Feature Card
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'soil' | 'saffron' | 'leaf';
  className?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const getCardClasses = () => {
    let classes = 'p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ';
    
    switch (variant) {
      case 'glass':
        classes += 'bg-white/50 backdrop-blur-sm border border-white/30 ';
        break;
      case 'gradient':
        classes += 'bg-gradient-to-br from-white/90 to-cream/70 border border-white/30 ';
        break;
      case 'soil':
        classes += 'bg-soil/10 border border-soil/20 ';
        break;
      case 'saffron':
        classes += 'bg-saffron/10 border border-saffron/20 ';
        break;
      case 'leaf':
        classes += 'bg-leaf/10 border border-leaf/20 ';
        break;
      default:
        classes += 'bg-white border border-soil/10 ';
    }
    
    return classes + className;
  };
  
  return (
    <motion.div 
      className={getCardClasses()}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 p-2 rounded-full bg-white shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-soil mb-1">{title}</h3>
          <p className="text-sm text-soil/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Animated Counter
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = React.useRef(count);
  
  useEffect(() => {
    const start = 0;
    const end = value;
    const totalFrames = Math.min(end, duration * 60);
    const step = Math.floor(end / totalFrames);
    
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame * step, end);
      setCount(progress);
      countRef.current = progress;
      
      if (progress >= end) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);
    
    return () => clearInterval(counter);
  }, [value, duration]);
  
  const formatValue = (val: number): string => {
    if (val >= 1000000) {
      return (val / 1000000).toFixed(1) + 'M';
    } else if (val >= 1000) {
      return (val / 1000).toFixed(1) + 'K';
    } else {
      return val.toString();
    }
  };
  
  return (
    <span className={className}>
      {prefix}{formatValue(count)}{suffix}
    </span>
  );
};

// Progress Bar
interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'secondary' | 'soil' | 'leaf' | 'saffron';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  animated?: boolean;
  showValue?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  animated = false,
  showValue = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
  
  const getTrackClasses = () => {
    let classes = 'w-full rounded-full bg-soil/10 overflow-hidden ';
    
    switch (size) {
      case 'xs':
        classes += 'h-0.5 ';
        break;
      case 'sm':
        classes += 'h-1 ';
        break;
      case 'lg':
        classes += 'h-4 ';
        break;
      default: // md
        classes += 'h-2 ';
    }
    
    return classes + className;
  };
  
  const getProgressClasses = () => {
    let classes = 'h-full rounded-full ';
    
    switch (variant) {
      case 'primary':
        classes += 'bg-gradient-to-r from-[#34C759] to-[#138808] ';
        break;
      case 'secondary':
        classes += 'bg-gradient-to-r from-[#4285F4] to-[#0288D1] ';
        break;
      case 'soil':
        classes += 'bg-gradient-to-r from-[#FF5722] to-[#E64A19] ';
        break;
      case 'leaf':
        classes += 'bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] ';
        break;
      case 'saffron':
        classes += 'bg-gradient-to-r from-[#FF9933] to-[#FF8F00] ';
        break;
      default:
        classes += 'bg-gradient-to-r from-[#34C759] to-[#138808] ';
    }
    
    if (animated) {
      classes += 'relative overflow-hidden ';
    }
    
    return classes;
  };
  
  return (
    <div className="relative">
      <div className={getTrackClasses()}>
        <div 
          className={getProgressClasses()}
          style={{ width: `${percentage}%` }}
        >
          {animated && (
            <div className="absolute inset-0 animate-shimmer bg-white/10 bg-[length:200%_100%]"></div>
          )}
        </div>
      </div>
      
      {showValue && (
        <div className="absolute top-0 right-0 -mt-6 text-xs font-medium text-soil">
          {value}/{max}
        </div>
      )}
    </div>
  );
};

// Add @keyframes for animations to the style
const EnhancedStyles: React.FC = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 0.7;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @keyframes pulse-gentle {
      0%, 100% { 
        transform: scale(1); 
      }
      50% { 
        transform: scale(1.05);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }
    
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
    
    @keyframes glow {
      0% {
        box-shadow: 0 0 5px var(--glow-color, rgba(255, 87, 34, 0.4));
      }
      100% {
        box-shadow: 0 0 20px var(--glow-color, rgba(255, 87, 34, 0.7));
      }
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    .glow-effect {
      --glow-color: rgba(255, 153, 51, 0.5);
      animation: glow 1.5s ease-in-out infinite alternate;
    }
    
    .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .btn-shine::before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      left: -100%;
      transition: 0.5s;
    }
    
    .btn-shine:hover::before {
      left: 100%;
    }
    
    .animate-shimmer {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      );
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
    
    .bg-size-200 {
      background-size: 200% 100%;
    }
    
    .wavy-divider::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='12' viewBox='0 0 100 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6C8.33333 6 8.33333 0 16.6667 0C25 0 25 6 33.3333 6C41.6667 6 41.6667 0 50 0C58.3333 0 58.3333 6 66.6667 6C75 6 75 0 83.3333 0C91.6667 0 91.6667 6 100 6V12H0V6Z' fill='rgba(255, 87, 34, 0.3)'/%3E%3C/svg%3E");
      background-size: 100px 12px;
      background-repeat: repeat-x;
    }
    
    .mesh-gradient {
      background-color: #FF9A8B;
      background-image: 
        radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
    }
  `}} />
);

// Export components (ONLY ONCE)
export {
  EnhancedCard,
  MotionButton,
  GradientText,
  IconBadge,
  EnhancedBadge,
  SectionDivider,
  GlassContainer,
  EnhancedImage,
  FeatureCard,
  AnimatedCounter,
  ProgressBar,
  EnhancedStyles
};

