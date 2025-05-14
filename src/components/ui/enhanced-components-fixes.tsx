
import React from 'react';
import { 
  ProgressBar,
  FeatureCard
} from '@/components/ui/enhanced-components';

// First, define the base prop interfaces since they don't exist in the original module
interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'secondary' | 'soil' | 'leaf' | 'saffron';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  animated?: boolean;
  showValue?: boolean;
  className?: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'soil' | 'saffron' | 'leaf';
  className?: string;
  onClick?: () => void;
}

// Extended ProgressBar component with label support
interface ExtendedProgressBarProps extends ProgressBarProps {
  label?: string;
}

export const EnhancedProgressBar: React.FC<ExtendedProgressBarProps> = ({ 
  label, 
  value, 
  max, 
  variant, 
  size, 
  animated,
  className,
  ...rest 
}) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-soil/80 font-medium">{label}</span>
          <span className="text-xs font-medium text-soil">{value}%</span>
        </div>
      )}
      <ProgressBar 
        value={value} 
        max={max} 
        variant={variant} 
        size={size} 
        animated={animated}
        className={className} 
        {...rest} 
      />
    </div>
  );
};

// Extended FeatureCard component with badge support
interface ExtendedFeatureCardProps extends Omit<FeatureCardProps, 'children'> {
  badge?: string;
  children?: React.ReactNode;
}

export const EnhancedFeatureCard: React.FC<ExtendedFeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  variant, 
  onClick,
  badge,
  className,
  children,
  ...rest 
}) => {
  return (
    <div className="relative">
      <FeatureCard
        title={title}
        description={description}
        icon={icon}
        variant={variant}
        onClick={onClick}
        className={className}
        {...rest}
      />
      {children}
      {badge && (
        <div className="absolute top-2 right-2 bg-saffron/80 text-white text-xs px-2 py-0.5 rounded-full font-medium">
          {badge}
        </div>
      )}
    </div>
  );
};
