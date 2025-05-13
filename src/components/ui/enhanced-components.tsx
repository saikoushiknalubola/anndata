
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { theme, colors, gradients, shadows, animations } from '@/styles/theme';

// Define a type for custom CSS properties
interface CustomCSSProperties extends React.CSSProperties {
  '--glow-color'?: string;
  '--animation-delay'?: string;
  '--bg-opacity'?: string;
  '--border-glow'?: string;
}

// Enhanced Card Component with multiple variants and effects
export const EnhancedCard = ({
  children,
  className,
  variant = 'default',
  hoverEffect = true,
  glowEffect = false,
  withBadge = false,
  badgeText = '',
  animation = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'bordered' | 'elevated' | 'farmStyle' | 'minimal';
  hoverEffect?: boolean;
  glowEffect?: boolean;
  withBadge?: boolean;
  badgeText?: string;
  animation?: '' | 'fadeIn' | 'scaleIn' | 'slideUp' | 'pulse';
  onClick?: () => void;
}) => {
  // Generate variant specific classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30';
      case 'gradient':
        return 'bg-gradient-to-br from-white/80 via-white/60 to-white/80 border border-white/50';
      case 'bordered':
        return 'bg-white border-2 border-soil/20 hover:border-soil/30';
      case 'elevated':
        return 'bg-white shadow-lg';
      case 'farmStyle':
        return 'bg-gradient-to-r from-saffron/10 to-transparent border-l-4 border-l-saffron';
      case 'minimal':
        return 'bg-transparent';
      default:
        return 'bg-white';
    }
  };

  // Animation configuration
  const getAnimationProps = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 }
        };
      case 'scaleIn':
        return {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.4 }
        };
      case 'slideUp':
        return {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.5 }
        };
      case 'pulse':
        return {
          animate: { 
            scale: [1, 1.02, 1],
            transition: { 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }
          }
        };
      default:
        return {};
    }
  };

  const CardComponent = animation ? motion.div : 'div';
  
  const animationProps = animation ? getAnimationProps() : {};

  return (
    <CardComponent
      className={cn(
        'rounded-xl p-4 transition-all duration-300',
        getVariantClasses(),
        hoverEffect && 'hover:-translate-y-1 hover:shadow-md',
        glowEffect && 'hover:shadow-[0_0_15px_rgba(255,152,0,0.3)]',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      style={
        {
          '--glow-color': 'rgba(255, 152, 0, 0.3)',
        } as CustomCSSProperties
      }
      {...animationProps}
    >
      {withBadge && badgeText && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-saffron to-soil text-white text-xs font-medium px-2 py-0.5 rounded-full shadow-sm">
          {badgeText}
        </div>
      )}
      <div className="relative">{children}</div>
    </CardComponent>
  );
};

// Motion Button with animations and effects
export const MotionButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  withShine = false,
  withRipple = true,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'leaf' | 'glass' | 'outline' | 'text' | 'saffron' | 'soil' | '3d';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  withShine?: boolean;
  withRipple?: boolean;
  onClick?: () => void;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-saffron to-soil text-white';
      case 'secondary':
        return 'bg-gradient-to-r from-sky-500 to-sky-700 text-white';
      case 'leaf':
        return 'bg-gradient-to-r from-leaf-500 to-leaf-700 text-white';
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30 text-soil';
      case 'outline':
        return 'bg-transparent border-2 border-soil text-soil hover:bg-soil/5';
      case 'text':
        return 'bg-transparent text-soil hover:bg-soil/5';
      case 'saffron':
        return 'bg-gradient-to-r from-saffron to-saffron/80 text-white';
      case 'soil':
        return 'bg-gradient-to-r from-soil to-soil/80 text-white';
      case '3d':
        return 'bg-saffron text-white border-b-4 border-b-saffron/70 hover:border-b-2 hover:translate-y-[2px] active:border-b-0 active:translate-y-1';
      default:
        return 'bg-saffron text-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-3 py-1 rounded-md';
      case 'lg':
        return 'text-lg px-6 py-3 rounded-xl';
      default:
        return 'text-base px-4 py-2 rounded-lg';
    }
  };

  // Handle ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!withRipple || disabled) return;
    
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 600ms linear';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 700);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      disabled={disabled || loading}
      onClick={(e) => {
        handleRipple(e);
        onClick?.();
      }}
      className={cn(
        'relative overflow-hidden font-medium shadow-md transition-all flex items-center justify-center',
        getVariantClasses(),
        getSizeClasses(),
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg',
        withShine && 'shine-effect',
        className
      )}
    >
      {withShine && (
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine" />
      )}
      
      {loading ? (
        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {iconPosition === 'right' && icon && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </motion.button>
  );
};

// Glass Container with configurable blur and opacity
export const GlassContainer = ({
  children,
  className,
  intensity = 'medium',
  withBorder = true,
  withShadow = true,
  hoverEffect = false,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  withBorder?: boolean;
  withShadow?: boolean;
  hoverEffect?: boolean;
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'light':
        return 'bg-white/10 backdrop-blur-sm';
      case 'heavy':
        return 'bg-white/30 backdrop-blur-xl';
      default:
        return 'bg-white/20 backdrop-blur-md';
    }
  };

  return (
    <div
      className={cn(
        'rounded-xl',
        getIntensityClasses(),
        withBorder && 'border border-white/30',
        withShadow && 'shadow-lg',
        hoverEffect && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

// Gradient Text with multiple color options
export const GradientText = ({
  children,
  className,
  variant = 'primary',
  withAnimation = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'earth' | 'leaf' | 'sky' | 'harvest' | 'soil' | 'saffron';
  withAnimation?: boolean;
}) => {
  const getGradientClasses = () => {
    switch (variant) {
      case 'earth':
        return 'from-earth-500 to-earth-700';
      case 'leaf':
        return 'from-leaf-500 to-leaf-700';
      case 'sky':
        return 'from-sky-500 to-sky-700';
      case 'harvest':
        return 'from-harvest-500 to-harvest-700';
      case 'soil':
        return 'from-soil-400 to-soil-600';
      case 'saffron':
        return 'from-saffron to-[#FF5722]';
      default:
        return 'from-saffron to-soil-500';
    }
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent inline-block',
        getGradientClasses(),
        withAnimation && 'animate-text-shimmer bg-[length:200%_auto]',
        className
      )}
    >
      {children}
    </span>
  );
};

// Badge component with multiple variants and animation
export const EnhancedBadge = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  withAnimation = false,
  withDot = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  withAnimation?: boolean;
  withDot?: boolean;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-sky-100 text-sky-700';
      case 'success':
        return 'bg-leaf-100 text-leaf-700';
      case 'warning':
        return 'bg-harvest-100 text-harvest-700';
      case 'danger':
        return 'bg-red-100 text-red-700';
      case 'info':
        return 'bg-blue-100 text-blue-700';
      case 'neutral':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-soil-100 text-soil-700';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-xs py-0.5 px-2';
      case 'lg':
        return 'text-sm py-1 px-3';
      default:
        return 'text-xs py-0.5 px-2.5';
    }
  };

  return (
    <span
      className={cn(
        'font-medium rounded-full inline-flex items-center',
        getVariantClasses(),
        getSizeClasses(),
        withAnimation && 'animate-pulse',
        className
      )}
    >
      {withDot && (
        <span className="w-2 h-2 rounded-full bg-current mr-1.5 inline-block"></span>
      )}
      {children}
    </span>
  );
};

// Image component with lazy loading, hover effects, and loading states
export const EnhancedImage = ({
  src,
  alt,
  className,
  aspectRatio = '16/9',
  hoverEffect = false,
  rounded = 'lg',
  overlay = false,
  overlayColor = 'rgba(0, 0, 0, 0.3)',
}: {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string | number;
  hoverEffect?: boolean | 'zoom' | 'shine' | 'overlay';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  overlay?: boolean;
  overlayColor?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getRoundedClasses = () => {
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

  const getHoverClasses = () => {
    if (!hoverEffect) return '';
    if (hoverEffect === 'zoom') return 'group-hover:scale-110 transition-transform duration-700';
    if (hoverEffect === 'shine') return 'hover-shine';
    if (hoverEffect === 'overlay') return 'group-hover:opacity-80';
    return 'hover:opacity-90 transition-opacity';
  };

  return (
    <div 
      className={cn(
        'overflow-hidden relative',
        getRoundedClasses(),
        hoverEffect && 'group',
        className
      )}
      style={{ aspectRatio }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse">
          <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.5 12c0-1.1-.9-2-2-2H10l4.5-4.5c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-6 6c-.29.29-.29.77 0 1.06l6 6c.29.29.77.29 1.06 0s.29-.77 0-1.06L10 14h7.5c.28 0 .5.22.5.5v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </div>
      )}
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 17v2H3v-2h18zM6.5 14l4-8 4 8h-8z"
            />
          </svg>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            className={cn(
              'w-full h-full object-cover transition-all duration-500',
              !loaded ? 'opacity-0' : 'opacity-100',
              getHoverClasses()
            )}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            loading="lazy"
          />
          
          {overlay && (
            <div 
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
              style={{ backgroundColor: overlayColor }}
            />
          )}
        </>
      )}
    </div>
  );
};

// Feature Card with image, title, description and action
export const FeatureCard = ({
  title,
  description,
  icon,
  className,
  variant = 'default',
  onClick,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'glass' | 'gradient';
  onClick?: () => void;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'bordered':
        return 'bg-white border-2 border-soil/20';
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30';
      case 'gradient':
        return 'bg-gradient-to-br from-white/80 via-white/60 to-white/80';
      default:
        return 'bg-white';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-xl p-5 shadow-md',
        getVariantClasses(),
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <div className="mb-4 p-3 rounded-lg inline-flex bg-soil/5 text-soil/90">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-soil mb-2">{title}</h3>
      
      <p className="text-sm text-soil/70">{description}</p>
      
      {onClick && (
        <div className="mt-4 flex items-center text-sm font-medium text-saffron">
          Learn more <ArrowRight size={16} className="ml-1" />
        </div>
      )}
    </motion.div>
  );
};

// Section Divider with multiple styles
export const SectionDivider = ({
  className,
  variant = 'gradient',
}: {
  className?: string;
  variant?: 'gradient' | 'dots' | 'wavy' | 'dashed';
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dots':
        return 'border-dotted border-t-2 border-soil/30';
      case 'wavy':
        return 'bg-[url("data:image/svg+xml,%3Csvg width=\'100\' height=\'12\' viewBox=\'0 0 100 12\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 6C8.33333 6 8.33333 0 16.6667 0C25 0 25 6 33.3333 6C41.6667 6 41.6667 0 50 0C58.3333 0 58.3333 6 66.6667 6C75 6 75 0 83.3333 0C91.6667 0 91.6667 6 100 6V12H0V6Z\' fill=\'rgba(255, 87, 34, 0.2)\'/%3E%3C/svg%3E")] bg-repeat-x h-3';
      case 'dashed':
        return 'border-dashed border-t-2 border-soil/30';
      default:
        return 'bg-gradient-to-r from-transparent via-soil/30 to-transparent h-px';
    }
  };

  return (
    <div className={cn('w-full my-6', getVariantClasses(), className)} />
  );
};

// Icon Badge with different variants
export const IconBadge = ({
  icon: Icon,
  className,
  variant = 'primary',
  size = 'md',
  withGlow = false,
}: {
  icon: React.ElementType;
  className?: string;
  variant?: 'primary' | 'secondary' | 'leaf' | 'earth' | 'soil' | 'harvest' | 'sky' | 'saffron';
  size?: 'sm' | 'md' | 'lg';
  withGlow?: boolean;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-sky-100 text-sky-600';
      case 'leaf':
        return 'bg-green-100 text-green-600';
      case 'earth':
        return 'bg-amber-100 text-amber-600';
      case 'soil':
        return 'bg-soil-50 text-soil-500';
      case 'harvest':
        return 'bg-harvest-100 text-harvest-600';
      case 'sky':
        return 'bg-blue-100 text-blue-600';
      case 'saffron':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-soil-100 text-soil-600';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-1.5 rounded-md';
      case 'lg':
        return 'p-3 rounded-xl';
      default:
        return 'p-2 rounded-lg';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'lg':
        return 24;
      default:
        return 20;
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        getVariantClasses(),
        getSizeClasses(),
        withGlow && 'shadow-md',
        className
      )}
    >
      <Icon size={getIconSize()} />
    </div>
  );
};

// Accordion with smooth animations
export const EnhancedAccordion = ({
  items,
  className,
  variant = 'default',
}: {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
  variant?: 'default' | 'bordered' | 'filled';
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'bordered':
        return 'divide-y divide-soil/10 border border-soil/10 rounded-xl overflow-hidden';
      case 'filled':
        return 'divide-y divide-soil/10 bg-soil/5 rounded-xl overflow-hidden';
      default:
        return 'divide-y divide-soil/10';
    }
  };

  return (
    <div className={cn(getVariantClasses(), className)}>
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex items-center justify-between py-3 px-4 text-left font-medium text-soil focus:outline-none"
          >
            <span>{item.title}</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-4 pb-4 pt-1 text-sm text-soil/70">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// Animated number counter
export const AnimatedCounter = ({
  value,
  prefix = '',
  suffix = '',
  className,
  duration = 2000,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (endValue - startValue) + startValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration, inView]);

  return (
    <div
      ref={(ref) => {
        if (ref) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
              }
            },
            { threshold: 0.1 }
          );
          observer.observe(ref);
        }
      }}
      className={className}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

// Page section with enhanced styling
export const PageSection = ({
  children,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  withDivider = false,
  variant = 'default',
  withGradientBackground = false,
  withPattern = false,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  withDivider?: boolean;
  variant?: 'default' | 'centered' | 'bordered' | 'glass';
  withGradientBackground?: boolean;
  withPattern?: boolean;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'centered':
        return 'text-center';
      case 'bordered':
        return 'border border-soil/10 rounded-xl p-6';
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6';
      default:
        return '';
    }
  };

  return (
    <section
      className={cn(
        'relative my-8',
        getVariantClasses(),
        withGradientBackground && 'bg-gradient-to-br from-soil/5 to-saffron/5',
        withPattern && 'pattern-background',
        className
      )}
    >
      {title && (
        <h2 className={cn('text-xl font-semibold text-soil mb-2', titleClassName)}>
          {title}
        </h2>
      )}
      
      {subtitle && (
        <p className={cn('text-sm text-soil/70 mb-5', subtitleClassName)}>
          {subtitle}
        </p>
      )}
      
      {withDivider && title && <SectionDivider className="my-4" />}
      
      <div>{children}</div>
    </section>
  );
};

// Progress indicator with animation
export const ProgressBar = ({
  value,
  max = 100,
  showLabel = true,
  size = 'md',
  variant = 'primary',
  className,
  labelPosition = 'right',
  animated = true,
}: {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'leaf' | 'soil' | 'harvest';
  className?: string;
  labelPosition?: 'right' | 'top';
  animated?: boolean;
}) => {
  const percentage = Math.round((value / max) * 100);

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-sky-500';
      case 'leaf':
        return 'bg-leaf-500';
      case 'soil':
        return 'bg-soil-500';
      case 'harvest':
        return 'bg-harvest-500';
      default:
        return 'bg-saffron';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-1.5';
      case 'lg':
        return 'h-4';
      default:
        return 'h-2.5';
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && labelPosition === 'top' && (
        <div className="flex justify-between mb-1 text-xs font-medium text-soil/70">
          <span>{value}</span>
          <span>{percentage}%</span>
        </div>
      )}
      
      <div className="relative">
        <div className={cn('w-full bg-soil/10 rounded-full overflow-hidden', getSizeClasses())}>
          <motion.div
            initial={animated ? { width: 0 } : { width: `${percentage}%` }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: animated ? 1 : 0, ease: 'easeOut' }}
            className={cn('h-full rounded-full', getVariantClasses())}
          />
        </div>
        
        {showLabel && labelPosition === 'right' && (
          <div className="ml-2 text-xs font-medium text-soil/70 absolute right-0 top-0 -translate-y-1/3">
            {percentage}%
          </div>
        )}
      </div>
    </div>
  );
};

// Step indicator for multi-step processes
export const StepIndicator = ({
  steps,
  currentStep,
  className,
  orientation = 'horizontal',
  variant = 'default',
}: {
  steps: string[];
  currentStep: number;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'numbered' | 'detailed';
}) => {
  return (
    <div
      className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-col space-y-4' : 'space-x-4',
        className
      )}
    >
      {steps.map((step, index) => {
        const isActive = index < currentStep;
        const isCurrent = index === currentStep - 1;
        
        return (
          <div
            key={index}
            className={cn(
              'flex',
              orientation === 'vertical' ? 'flex-col space-y-2' : 'items-center'
            )}
          >
            <div className="flex items-center">
              <div
                className={cn(
                  'flex items-center justify-center rounded-full transition-colors',
                  variant === 'numbered' ? 'w-8 h-8' : 'w-6 h-6',
                  isActive
                    ? 'bg-saffron text-white'
                    : 'bg-gray-200 text-gray-400',
                  isCurrent && 'ring-2 ring-saffron/30 ring-offset-2'
                )}
              >
                {variant === 'numbered' ? (
                  <span className="text-xs font-medium">{index + 1}</span>
                ) : (
                  isActive && <Check size={14} />
                )}
              </div>
              
              {index < steps.length - 1 && orientation === 'horizontal' && (
                <div
                  className={cn(
                    'w-12 h-0.5 ml-2',
                    index < currentStep - 1 ? 'bg-saffron' : 'bg-gray-200'
                  )}
                />
              )}
            </div>
            
            {variant === 'detailed' && (
              <div
                className={cn(
                  'text-xs',
                  isCurrent ? 'font-medium text-soil' : 'text-soil/60'
                )}
              >
                {step}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Enhanced Stat Display
export const StatDisplay = ({
  value,
  label,
  icon,
  change,
  className,
  variant = 'default',
}: {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  change?: { value: string | number; direction: 'up' | 'down' };
  className?: string;
  variant?: 'default' | 'card' | 'compact' | 'glass';
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'card':
        return 'bg-white rounded-xl p-4 shadow-md';
      case 'compact':
        return 'bg-soil/5 rounded-lg p-3';
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-md';
      default:
        return '';
    }
  };

  return (
    <div className={cn('flex', getVariantClasses(), className)}>
      {icon && (
        <div className="mr-3 flex items-center justify-center rounded-lg bg-soil/10 p-2 text-soil/80">
          {icon}
        </div>
      )}
      
      <div>
        <p className="text-xs text-soil/60 mb-1">{label}</p>
        <div className="flex items-baseline">
          <p className="text-xl font-semibold text-soil">{value}</p>
          
          {change && (
            <span
              className={cn(
                'ml-2 text-xs font-medium',
                change.direction === 'up' ? 'text-leaf-600' : 'text-soil-600'
              )}
            >
              {change.direction === 'up' ? '↑' : '↓'} {change.value}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Add @keyframes for animations to the style
export const EnhancedStyles = () => (
  <style jsx global>{`
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
    
    @keyframes shine {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(100%);
      }
    }
    
    .shine-effect {
      position: relative;
      overflow: hidden;
    }
    
    .shine-effect::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: 0.5s;
    }
    
    .shine-effect:hover::after {
      left: 100%;
    }
    
    .animate-text-shimmer {
      background-size: 200% auto;
      animation: textShimmer 2s linear infinite;
    }
    
    @keyframes textShimmer {
      0% {
        background-position: 0% center;
      }
      100% {
        background-position: 200% center;
      }
    }
    
    .hover-shine {
      position: relative;
      overflow: hidden;
    }
    
    .hover-shine::before {
      content: '';
      position: absolute;
      top: 0;
      left: -75%;
      z-index: 2;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
      transform: skewX(-25deg);
      transition: 0.75s;
    }
    
    .hover-shine:hover::before {
      left: 125%;
    }
    
    .pattern-background {
      background-image: url('/subtle-pattern.png');
      background-repeat: repeat;
      background-size: 200px;
      background-blend-mode: overlay;
    }
  `}</style>
);

// Export all components with Styles
export default function EnhancedUIProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <EnhancedStyles />
      {children}
    </>
  );
}
