
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'bordered' | 'highlighted' | 'farm';
}

const Card = ({ children, className = '', onClick, variant = 'default' }: CardProps) => {
  const variantClasses = {
    default: 'bg-white/95 shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm',
    bordered: 'border border-[#138808]/20 bg-white/95 shadow-sm hover:shadow-md transition-shadow duration-300',
    highlighted: 'border-2 border-leaf bg-white/95 shadow-lg hover:shadow-xl transition-shadow duration-300',
    farm: 'bg-gradient-to-r from-leaf/10 to-white/95 border-l-4 border-l-leaf shadow-md hover:shadow-lg transition-shadow duration-300'
  };
  
  return (
    <div 
      className={`p-4 rounded-lg ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer hover:scale-[1.01] transition-transform' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
