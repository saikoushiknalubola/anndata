
import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'default' | 'ghost' | 'official' | 'marigold' | 'clay' | 'jute' | 'festive' | 'glass' | 'gradient' | '3d';
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
}: ButtonProps) => {
  const baseClasses = {
    primary: 'bg-gradient-to-r from-[#FF5722] to-[#FF7043] hover:from-[#FF7043] hover:to-[#FF5722] text-white',
    secondary: 'bg-gradient-to-r from-[#03A9F4] to-[#4FC3F7] hover:from-[#4FC3F7] hover:to-[#03A9F4] text-white',
    accent: 'bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#4CAF50] text-white',
    outline: 'border-2 border-[#FF5722]/60 bg-white/80 hover:bg-cream/80 hover:border-[#FF5722] text-soil',
    default: 'bg-gradient-to-r from-[#FFC107] to-[#FFD54F] hover:from-[#FFD54F] hover:to-[#FFC107] text-soil',
    ghost: 'hover:bg-cream text-soil hover:text-[#FF5722]',
    official: 'bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-soil border border-soil/20 hover:shadow-lg',
    marigold: 'bg-gradient-to-r from-[#FF9933] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FF9933] text-soil',
    clay: 'bg-gradient-to-r from-terracotta/90 to-jute/90 hover:from-jute/90 hover:to-terracotta/90 text-white',
    jute: 'bg-gradient-to-r from-jute to-earth/90 hover:from-earth/90 hover:to-jute text-white',
    festive: 'bg-gradient-to-r from-[#FF9933] via-millet to-[#138808]/90 text-white border border-white/20 shadow-md hover:shadow-lg',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-md hover:bg-white/30',
    gradient: 'bg-gradient-to-r from-[#FF5722] via-[#FF9800] to-[#FFC107] text-white hover:from-[#FFC107] hover:via-[#FF9800] hover:to-[#FF5722]',
    '3d': 'bg-[#FF5722] text-white border-b-4 border-[#E64A19] hover:border-b-2 hover:mb-[2px] active:border-b-0 active:mb-1 btn-3d'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs rounded-md',
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-3 text-base rounded-xl',
    lg: 'px-6 py-4 text-lg rounded-2xl'
  };

  // Enhanced border decoration
  const getBorderDecoration = () => {
    if (variant === 'festive' || variant === 'official') {
      return `
        after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] 
        after:border-2 after:border-dashed after:border-white/30 after:pointer-events-none
      `;
    }
    if (variant === 'primary' || variant === 'secondary') {
      return `
        after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] 
        after:border after:border-white/20 after:pointer-events-none
      `;
    }
    return '';
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && !disabled) {
      const button = e.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
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

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-70 cursor-not-allowed' : '',
        'transition-all duration-300 ease-in-out',
        'shadow-md hover:shadow-lg',
        'font-medium',
        'flex items-center justify-center gap-2',
        'transform hover:scale-[1.02] active:scale-[0.98]',
        'relative overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0', 
        'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        withShine ? 'btn-shine' : '',
        withGlow ? 'hover-glow' : '',
        getBorderDecoration(),
        className
      )}
      style={{
        '--glow-color': variant === 'primary' ? 'rgba(255, 87, 34, 0.5)' : 
                        variant === 'secondary' ? 'rgba(3, 169, 244, 0.5)' : 
                        'rgba(255, 152, 0, 0.5)'
      } as React.CSSProperties}
    >
      {loading ? (
        <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      <span className="relative z-10">{children}</span>
      
      {/* Circle decoration for special buttons */}
      {(variant === 'festive' || variant === 'official') && (
        <>
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white/80"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-white/80"></span>
        </>
      )}
    </button>
  );
};

export default Button;
