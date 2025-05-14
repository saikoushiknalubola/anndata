
import React from 'react';
import { cn } from '@/lib/utils';

interface PageSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  variant?: 'soil' | 'leaf' | 'saffron' | 'default' | 'transparent' | 'white';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  titleClassName?: string;
  headerAction?: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({
  title,
  description,
  children,
  variant = 'default',
  spacing = 'md',
  className,
  titleClassName,
  headerAction,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'soil':
        return 'bg-soil-50/60 border border-soil/10';
      case 'leaf':
        return 'bg-leaf-50/60 border border-leaf/10';
      case 'saffron':
        return 'bg-saffron-50/60 border border-saffron/10';
      case 'white':
        return 'bg-white border border-gray-100';
      case 'transparent':
        return 'bg-transparent';
      default:
        return 'bg-cream/30 border border-soil/10';
    }
  };

  const getSpacingStyles = () => {
    switch (spacing) {
      case 'none':
        return 'p-0';
      case 'sm':
        return 'p-3';
      case 'lg':
        return 'p-6';
      default:
        return 'p-4';
    }
  };

  return (
    <section
      className={cn(
        'rounded-xl mb-6',
        getVariantStyles(),
        getSpacingStyles(),
        className
      )}
    >
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <div className="flex items-center justify-between">
              <h2 className={cn('text-xl font-bold text-soil', titleClassName)}>
                {title}
              </h2>
              {headerAction}
            </div>
          )}
          {description && (
            <p className="mt-1 text-soil/70 text-sm">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default PageSection;
