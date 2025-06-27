
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MobileButton: React.FC<MobileButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  onClick,
  className
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-95 min-h-[44px]";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-leaf-500 to-leaf-600 text-white shadow-lg hover:shadow-xl hover:from-leaf-600 hover:to-leaf-700",
    secondary: "bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg hover:shadow-xl hover:from-saffron-600 hover:to-saffron-700",
    outline: "border-2 border-leaf-500 text-leaf-600 hover:bg-leaf-50",
    ghost: "text-leaf-600 hover:bg-leaf-50"
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
    xl: "px-8 py-5 text-xl"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const fullWidthClasses = fullWidth ? "w-full" : "";

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        fullWidthClasses,
        className
      )}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
};

export default MobileButton;
