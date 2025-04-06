
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'official' | 'bordered';
}

const Card = ({ children, className = '', onClick, variant = 'default' }: CardProps) => {
  const variantClasses = {
    default: 'card-container shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm',
    official: 'card-container bg-gradient-to-r from-white to-cream/30 border-l-4 border-l-saffron shadow-md hover:shadow-lg transition-shadow duration-300',
    bordered: 'card-container border border-[#138808]/20 bg-white/90 shadow-sm hover:shadow-md transition-shadow duration-300'
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
