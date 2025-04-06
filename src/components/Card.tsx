
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className = '', onClick }: CardProps) => {
  return (
    <div 
      className={`card-container ${className} ${onClick ? 'cursor-pointer hover:scale-[1.01] transition-transform' : ''} 
      shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
