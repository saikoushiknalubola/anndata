
import React from 'react';
import { 
  ProgressBar, 
  ProgressBarProps, 
  FeatureCard, 
  FeatureCardProps 
} from '@/components/ui/enhanced-components';

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
interface ExtendedFeatureCardProps extends FeatureCardProps {
  badge?: string;
}

export const EnhancedFeatureCard: React.FC<ExtendedFeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  variant, 
  onClick,
  badge,
  className,
  ...rest 
}) => {
  return (
    <FeatureCard
      title={title}
      description={description}
      icon={icon}
      variant={variant}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {badge && (
        <div className="absolute top-2 right-2 bg-saffron/80 text-white text-xs px-2 py-0.5 rounded-full font-medium">
          {badge}
        </div>
      )}
    </FeatureCard>
  );
};
