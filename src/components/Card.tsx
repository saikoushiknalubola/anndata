
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'bordered' | 'highlighted' | 'farm' | 'tricolor' | 'gradient' | 'image-card';
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
    default: 'bg-white/95 shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm',
    bordered: 'border border-[#138808]/20 bg-white/95 shadow-sm hover:shadow-md transition-shadow duration-300',
    highlighted: 'border-2 border-leaf bg-white/95 shadow-lg hover:shadow-xl transition-shadow duration-300',
    farm: 'bg-gradient-to-r from-leaf/10 to-white/95 border-l-4 border-l-leaf shadow-md hover:shadow-lg transition-shadow duration-300',
    tricolor: 'bg-white/95 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#FF9933] border-b-4 border-b-[#138808]',
    gradient: 'bg-gradient-to-br from-cream via-white to-leaf/10 shadow-md hover:shadow-lg transition-shadow duration-300',
    'image-card': 'bg-white/95 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'
  };
  
  return (
    <div 
      className={`p-3 sm:p-4 rounded-lg ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer hover:scale-[1.01] transition-transform' : ''}`}
      onClick={onClick}
    >
      {imageUrl && variant === 'image-card' && (
        <div className="relative w-full h-40 sm:h-48 -mx-3 -mt-3 mb-3 sm:-mx-4 sm:-mt-4 sm:mb-4 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={imageAlt || 'Card image'} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80';
              e.currentTarget.onerror = null;
            }}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
