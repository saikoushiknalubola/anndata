
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
  size = 'md'
}: ButtonProps) => {
  const baseClasses = {
    primary: 'bg-gradient-to-r from-saffron to-terracotta hover:from-terracotta hover:to-saffron text-white',
    secondary: 'bg-gradient-to-r from-earth to-jute hover:from-jute hover:to-earth text-white',
    accent: 'bg-gradient-to-r from-leaf to-monsoon hover:from-monsoon hover:to-leaf text-white',
    outline: 'border-2 border-terracotta/60 bg-white/80 hover:bg-cream/80 hover:border-saffron text-soil',
    default: 'bg-gradient-to-r from-turmeric to-wheat hover:from-wheat hover:to-turmeric text-white',
    ghost: 'hover:bg-cream text-soil hover:text-terracotta',
    official: 'bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-soil border border-soil/20 hover:shadow-lg',
    marigold: 'bg-gradient-to-r from-marigold to-turmeric hover:from-turmeric hover:to-marigold text-soil',
    clay: 'bg-gradient-to-r from-terracotta/90 to-jute/90 hover:from-jute/90 hover:to-terracotta/90 text-white',
    jute: 'bg-gradient-to-r from-jute to-earth/90 hover:from-earth/90 hover:to-jute text-white',
    festive: 'bg-gradient-to-r from-saffron via-millet to-leaf/90 text-white border border-white/20 shadow-md hover:shadow-lg'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs rounded-md',
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-3 text-base rounded-xl',
    lg: 'px-6 py-4 text-lg rounded-2xl'
  };

  // Indian-inspired border decoration for special variants
  const getBorderDecoration = () => {
    if (variant === 'festive' || variant === 'marigold') {
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

  return (
    <button
      type={type}
      onClick={onClick}
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
      {(variant === 'festive' || variant === 'primary') && (
        <>
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white/80"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-white/80"></span>
        </>
      )}
    </button>
  );
};

export default Button;
