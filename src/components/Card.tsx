
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'bordered' | 'highlighted' | 'farm' | 'tricolor' | 'gradient' | 'image-card' | 'rich';
  imageUrl?: string;
  imageAlt?: string;
}

const Card = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'default',
  imageUrl,
  imageAlt
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white/98 shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm',
    bordered: 'border border-[#138808]/20 bg-white/98 shadow-sm hover:shadow-md transition-shadow duration-300',
    highlighted: 'border-2 border-leaf bg-white/98 shadow-lg hover:shadow-xl transition-shadow duration-300',
    farm: 'bg-gradient-to-r from-leaf/5 to-white/98 border-l-4 border-l-leaf shadow-md hover:shadow-lg transition-shadow duration-300',
    tricolor: 'bg-white/98 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#FF9933] border-b-4 border-b-[#138808]',
    gradient: 'bg-gradient-to-br from-cream via-white to-leaf/5 shadow-md hover:shadow-lg transition-shadow duration-300',
    'image-card': 'bg-white/98 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden',
    rich: 'bg-gradient-to-br from-white via-cream/30 to-white shadow-lg hover:shadow-xl transition-all duration-300 border border-saffron/20'
  };
  
  return (
    <div 
      className={`p-5 sm:p-6 rounded-xl ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}`}
      onClick={onClick}
    >
      {variant === 'image-card' && imageUrl && (
        <div className="h-48 -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-xl">
          <img 
            src={imageUrl} 
            alt={imageAlt || 'Card image'} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
