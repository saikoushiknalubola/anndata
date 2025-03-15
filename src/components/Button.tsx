
import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'default' | 'ghost';
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
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'border border-muted-foreground bg-background hover:bg-accent hover:text-accent-foreground text-foreground',
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground text-foreground'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
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
