
import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'default' | 'ghost' | 'official';
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
    primary: 'bg-gradient-to-r from-saffron to-saffron/80 hover:from-saffron/90 hover:to-saffron text-white',
    secondary: 'bg-gradient-to-r from-earth to-earth/80 hover:from-earth/90 hover:to-earth text-white',
    accent: 'bg-gradient-to-r from-leaf to-leaf/80 hover:from-leaf/90 hover:to-leaf text-white',
    outline: 'border-2 border-muted-foreground bg-background hover:bg-accent/10 hover:text-accent-foreground text-foreground',
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-accent/10 hover:text-accent-foreground text-foreground',
    official: 'bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-soil border border-soil/20 hover:shadow-lg'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs rounded-md',
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-base rounded-xl',
    lg: 'px-6 py-3 text-lg rounded-2xl'
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
        ${className}
      `}
    >
      {loading ? (
        <Loader2 className="animate-spin mr-2" size={size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' ? 22 : 20} />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
