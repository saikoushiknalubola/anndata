
import React, { forwardRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'glass' | 'link' | 'voice';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    type = 'button',
    icon,
    disabled = false,
    loading = false,
    fullWidth = false,
    className,
    onClick,
    ...props
  }, ref) => {
    // Size classes
    const sizeClasses = {
      sm: 'text-xs px-3 py-1.5 h-8',
      md: 'text-sm px-4 py-2 h-10',
      lg: 'text-base px-6 py-3 h-12'
    };
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-gradient-to-r from-[#34C759] to-[#34C759]/90 text-white hover:from-[#34C759]/90 hover:to-[#34C759]',
      secondary: 'bg-gradient-to-r from-[#4285F4]/90 to-[#4285F4] text-white hover:from-[#4285F4] hover:to-[#4285F4]/90',
      accent: 'bg-gradient-to-r from-[#FF9933]/90 to-[#FF9933] text-white hover:from-[#FF9933] hover:to-[#FF9933]/90',
      outline: 'bg-transparent border-2 border-soil/70 text-soil hover:bg-soil/5',
      glass: 'bg-white/30 backdrop-blur-md border border-white/50 text-soil shadow-sm hover:bg-white/40',
      link: 'bg-transparent text-soil underline hover:text-soil/80 p-0 h-auto shadow-none',
      voice: 'bg-gradient-to-r from-saffron via-white to-leaf text-soil font-bold shadow-md hover:shadow-lg'
    };
    
    // Default class sets based on variant and size
    const btnClasses = cn(
      'relative inline-flex items-center justify-center gap-2 rounded-full font-medium shadow-md transition-all duration-300',
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? 'w-full' : '',
      (disabled || loading) ? 'opacity-60 pointer-events-none' : 'hover:shadow-lg',
      className
    );
    
    // Create ripple effect function
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading || variant === 'link') return;
      
      const button = event.currentTarget;
      const ripple = document.createElement('span');
      
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple');
      
      // Remove existing ripples
      const existingRipple = button.getElementsByClassName('ripple')[0];
      if (existingRipple) {
        existingRipple.remove();
      }
      
      button.appendChild(ripple);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        if (ripple && ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        className={btnClasses}
        disabled={disabled || loading}
        onClick={(e) => {
          createRipple(e);
          onClick && onClick();
        }}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : icon ? (
          <span className="flex items-center justify-center">{icon}</span>
        ) : null}
        
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
