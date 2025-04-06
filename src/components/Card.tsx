
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'official' | 'bordered' | 'highlighted' | 'tricolor';
}

const Card = ({ children, className = '', onClick, variant = 'default' }: CardProps) => {
  const variantClasses = {
    default: 'card-container shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm',
    official: 'card-container bg-gradient-to-r from-white to-cream/30 border-l-4 border-l-saffron shadow-md hover:shadow-lg transition-shadow duration-300',
    bordered: 'card-container border border-[#138808]/20 bg-white/90 shadow-sm hover:shadow-md transition-shadow duration-300',
    highlighted: 'card-container border-2 border-saffron bg-white/95 shadow-lg hover:shadow-xl transition-shadow duration-300',
    tricolor: 'card-container relative overflow-hidden border border-[#f1f1f1] bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300 before:content-[""] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-saffron after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#138808]'
  };
  
  return (
    <div 
      className={`${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer hover:scale-[1.01] transition-transform' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
