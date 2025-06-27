
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'bordered' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  onClick?: () => void;
}

const MobileCard: React.FC<MobileCardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  clickable = false,
  onClick
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white shadow-md border border-leaf-100/50",
    gradient: "bg-gradient-to-br from-white via-leaf-25 to-leaf-50 shadow-lg",
    bordered: "bg-white border-2 border-leaf-200 shadow-sm",
    glass: "bg-white/80 backdrop-blur-md border border-white/20 shadow-lg"
  };

  const paddingClasses = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6"
  };

  const clickableClasses = clickable 
    ? "active:scale-98 hover:shadow-lg cursor-pointer" 
    : "";

  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        clickableClasses,
        className
      )}
      onClick={onClick}
      whileTap={clickable ? { scale: 0.98 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default MobileCard;
