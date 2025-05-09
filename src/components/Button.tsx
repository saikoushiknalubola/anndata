
import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'default' | 'ghost' | 'official' | 'marigold' | 'clay' | 'jute' | 'festive';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  ripple?: boolean;
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
  ripple = true
}: ButtonProps) => {
  const baseClasses = {
    primary: 'bg-gradient-to-r from-[#34C759] to-[#34C759]/80 hover:from-[#34C759]/80 hover:to-[#34C759] text-white',
    secondary: 'bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80 hover:from-[#4285F4]/80 hover:to-[#4285F4] text-white',
    accent: 'bg-gradient-to-r from-leaf to-monsoon hover:from-monsoon hover:to-leaf text-white',
    outline: 'border-2 border-[#FF9933]/60 bg-white/80 hover:bg-cream/80 hover:border-[#FF9933] text-soil',
    default: 'bg-gradient-to-r from-turmeric to-wheat hover:from-wheat hover:to-turmeric text-white',
    ghost: 'hover:bg-cream text-soil hover:text-terracotta',
    official: 'bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-soil border border-soil/20 hover:shadow-lg',
    marigold: 'bg-gradient-to-r from-[#FF9933] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FF9933] text-soil',
    clay: 'bg-gradient-to-r from-terracotta/90 to-jute/90 hover:from-jute/90 hover:to-terracotta/90 text-white',
    jute: 'bg-gradient-to-r from-jute to-earth/90 hover:from-earth/90 hover:to-jute text-white',
    festive: 'bg-gradient-to-r from-[#FF9933] via-millet to-[#138808]/90 text-white border border-white/20 shadow-md hover:shadow-lg'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs rounded-md',
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-3 text-base rounded-xl',
    lg: 'px-6 py-4 text-lg rounded-2xl'
  };

  // Indian-inspired border decoration for special variants
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
      className={`
        ${baseClasses[variant]} 
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-70 cursor-not-allowed' : ''}
        transition-all duration-300 ease-in-out
        shadow-md hover:shadow-lg
        font-medium
        flex items-center justify-center gap-2
        transform hover:scale-[1.02] active:scale-[0.98]
        relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 
        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 
        ${getBorderDecoration()}
        ${className}
      `}
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
