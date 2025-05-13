
import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { theme } from '@/styles/theme';

// Define a type that allows custom CSS properties
interface CustomCSSProperties extends React.CSSProperties {
  '--glow-color'?: string;
  '--ripple-color'?: string;
}

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'default' | 'ghost' | 'official' | 'marigold' | 'clay' | 'jute' | 'festive' | 'glass' | 'gradient' | '3d' | 'soil' | 'leaf';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  ripple?: boolean;
  withShine?: boolean;
  withGlow?: boolean;
  withShadow?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  animation?: 'none' | 'bounce' | 'pulse' | 'scale';
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  icon,
  size = 'md',
  ripple = true,
  withShine = false,
  withGlow = false,
  withShadow = true,
  rounded = 'md',
  animation = 'none',
}: ButtonProps) => {
  const baseClasses = {
    // Primary and color variations
    primary: 'bg-gradient-to-r from-[#FF5722] to-[#FF7043] hover:from-[#FF7043] hover:to-[#FF5722] text-white',
    secondary: 'bg-gradient-to-r from-[#03A9F4] to-[#4FC3F7] hover:from-[#4FC3F7] hover:to-[#03A9F4] text-white',
    accent: 'bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#4CAF50] text-white',
    default: 'bg-gradient-to-r from-[#FFC107] to-[#FFD54F] hover:from-[#FFD54F] hover:to-[#FFC107] text-soil',
    soil: 'bg-gradient-to-r from-soil-600 to-soil-500 hover:from-soil-500 hover:to-soil-600 text-white',
    leaf: 'bg-gradient-to-r from-leaf-600 to-leaf-500 hover:from-leaf-500 hover:to-leaf-600 text-white',
    
    // Special styles
    outline: 'border-2 border-[#FF5722]/60 bg-white/80 hover:bg-cream/80 hover:border-[#FF5722] text-soil',
    ghost: 'hover:bg-cream text-soil hover:text-[#FF5722]',
    official: 'bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-soil border border-soil/20 hover:shadow-lg',
    marigold: 'bg-gradient-to-r from-[#FF9933] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FF9933] text-soil',
    clay: 'bg-gradient-to-br from-[#8D6E63] to-[#A1887F] hover:from-[#A1887F] hover:to-[#8D6E63] text-white',
    jute: 'bg-gradient-to-r from-[#8B6F47] to-[#9E7E53] hover:from-[#9E7E53] hover:to-[#8B6F47] text-white',
    festive: 'bg-gradient-to-r from-[#FF9933] via-[#FFE0B2] to-[#138808]/90 text-white border border-white/20 shadow-md hover:shadow-lg',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-md hover:bg-white/30',
    gradient: 'bg-gradient-to-r from-[#FF5722] via-[#FF9800] to-[#FFC107] text-white hover:from-[#FFC107] hover:via-[#FF9800] hover:to-[#FF5722]',
    '3d': 'bg-[#FF5722] text-white border-b-4 border-[#E64A19] hover:border-b-2 hover:mt-[2px] active:border-b-0 active:mt-1'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg'
  };

  const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  // Animation variant
  const getAnimationProps = () => {
    switch (animation) {
      case 'bounce':
        return {
          animate: { y: [0, -5, 0] },
          transition: { 
            repeat: Infinity, 
            duration: 1.2,
            ease: "easeInOut" 
          }
        };
      case 'pulse':
        return {
          animate: { 
            scale: [1, 1.02, 1],
          },
          transition: { 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }
        };
      case 'scale':
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 }
        };
      default:
        return {
          whileTap: { scale: 0.97 }
        };
    }
  };

  // Enhanced border decoration
  const getBorderDecoration = () => {
    if (variant === 'festive' || variant === 'official') {
      return `
        after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] 
        after:border-2 after:border-dashed after:border-white/30 after:pointer-events-none
      `;
    }
    if (variant === 'primary' || variant === 'secondary' || variant === 'accent') {
      return `
        after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] 
        after:border after:border-white/20 after:pointer-events-none
      `;
    }
    return '';
  };

  // Handle ripple effect
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && !disabled) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      
      const ripple = document.createElement('span');
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      ripple.classList.add('ripple');
      
      // Remove existing ripples
      const existingRipples = button.getElementsByClassName('ripple');
      while (existingRipples.length > 0) {
        existingRipples[0].remove();
      }
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
    onClick?.();
  };

  // Get glow color based on variant
  const getGlowColor = () => {
    switch (variant) {
      case 'secondary':
        return 'rgba(3, 169, 244, 0.5)';
      case 'accent':
        return 'rgba(76, 175, 80, 0.5)';
      case 'leaf':
        return 'rgba(76, 175, 80, 0.5)';
      case 'soil':
        return 'rgba(121, 85, 72, 0.5)';
      default:
        return 'rgba(255, 87, 34, 0.5)';
    }
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-70 cursor-not-allowed' : '',
        withShadow ? 'shadow-md hover:shadow-lg' : '',
        'transition-all duration-300 ease-in-out',
        'font-medium',
        'flex items-center justify-center gap-2',
        'relative overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0', 
        'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        withShine ? 'btn-shine' : '',
        withGlow ? 'hover-glow' : '',
        getBorderDecoration(),
        className
      )}
      style={{
        '--glow-color': getGlowColor(),
        '--ripple-color': variant === 'outline' || variant === 'ghost' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)'
      } as CustomCSSProperties}
      {...getAnimationProps()}
    >
      {loading ? (
        <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      ) : icon ? (
        <span className="mr-1">{icon}</span>
      ) : null}
      <span className="relative z-10">{children}</span>
      
      {/* Circle decoration for special buttons */}
      {(variant === 'festive' || variant === 'official') && (
        <>
          <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-white/80"></span>
          <span className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white/80"></span>
        </>
      )}
      
      <style jsx global>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background-color: var(--ripple-color, rgba(255, 255, 255, 0.3));
          pointer-events: none;
        }
        
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .btn-shine {
          position: relative;
          overflow: hidden;
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
            rgba(255, 255, 255, 0.3),
            transparent
          );
          left: -100%;
          transition: 0.5s;
        }
        
        .btn-shine:hover::before {
          left: 100%;
        }
        
        .hover-glow {
          transition: box-shadow 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 15px var(--glow-color);
        }
      `}</style>
    </motion.button>
  );
};

export default Button;
