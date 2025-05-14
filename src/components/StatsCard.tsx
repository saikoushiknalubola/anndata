
import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'soil' | 'leaf' | 'saffron' | 'default' | 'white';
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  variant = 'default',
  className,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'soil':
        return {
          background: 'bg-gradient-to-br from-soil-50 to-soil-100',
          title: 'text-soil/70',
          value: 'text-soil',
          desc: 'text-soil/60',
        };
      case 'leaf':
        return {
          background: 'bg-gradient-to-br from-leaf-50 to-leaf-100',
          title: 'text-leaf-600/70',
          value: 'text-leaf-700',
          desc: 'text-leaf-600/60',
        };
      case 'saffron':
        return {
          background: 'bg-gradient-to-br from-saffron-50 to-saffron-100',
          title: 'text-saffron-600/70',
          value: 'text-saffron-700',
          desc: 'text-saffron-600/60',
        };
      case 'white':
        return {
          background: 'bg-white',
          title: 'text-soil/70',
          value: 'text-soil',
          desc: 'text-soil/60',
        };
      default:
        return {
          background: 'bg-gradient-to-br from-cream to-white',
          title: 'text-soil/70',
          value: 'text-soil',
          desc: 'text-soil/60',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={cn(
      'rounded-xl p-4 border border-soil/10 shadow-sm transition-all duration-300 hover:shadow-md',
      styles.background,
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={cn('text-sm font-medium', styles.title)}>{title}</h3>
          <div className="mt-2 flex items-end">
            <span className={cn('text-2xl font-bold', styles.value)}>{value}</span>
            {trend && (
              <span className={cn(
                'ml-2 text-xs font-medium flex items-center',
                trend.isPositive ? 'text-leaf-600' : 'text-red-500'
              )}>
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
            )}
          </div>
        </div>
        {icon && (
          <div className="p-2 rounded-full bg-white/60 shadow-sm">
            {icon}
          </div>
        )}
      </div>
      {description && (
        <p className={cn('mt-2 text-xs', styles.desc)}>
          {description}
        </p>
      )}
    </div>
  );
};

export default StatsCard;
