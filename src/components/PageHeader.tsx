
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Breadcrumb {
  title: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  variant?: 'soil' | 'leaf' | 'saffron' | 'default';
  icon?: React.ReactNode;
  action?: React.ReactNode;
  showBackButton?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  breadcrumbs,
  variant = 'soil',
  icon,
  action,
  showBackButton = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'leaf':
        return {
          title: 'text-leaf-700',
          desc: 'text-leaf-600/80',
          breadcrumb: 'text-leaf-600 hover:text-leaf-800',
          bg: 'bg-gradient-to-r from-leaf-50/80 to-leaf-100/50',
        };
      case 'saffron':
        return {
          title: 'text-saffron-700',
          desc: 'text-saffron-600/80',
          breadcrumb: 'text-saffron-600 hover:text-saffron-800',
          bg: 'bg-gradient-to-r from-saffron-50/80 to-saffron-100/50',
        };
      default:
        return {
          title: 'text-soil',
          desc: 'text-soil/80',
          breadcrumb: 'text-soil/70 hover:text-soil',
          bg: 'bg-gradient-to-r from-soil-50/80 to-soil-100/50',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={cn(
      'rounded-xl px-4 py-6 mb-6', 
      styles.bg
    )}>
      {(breadcrumbs || showBackButton) && (
        <div className="flex items-center mb-2 text-sm">
          {showBackButton && (
            <Link 
              to="/" 
              className="inline-flex items-center mr-2 text-soil/70 hover:text-soil transition-colors"
            >
              <ChevronLeft size={16} className="mr-1" />
              <span>Back</span>
            </Link>
          )}
          
          {breadcrumbs && (
            <div className="flex items-center">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2 text-soil/40">/</span>}
                  <Link 
                    to={crumb.href} 
                    className={cn(
                      'transition-colors',
                      styles.breadcrumb,
                      index === breadcrumbs.length - 1 && 'font-medium'
                    )}
                  >
                    {crumb.title}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon && (
            <div className="mr-3 p-2 bg-white rounded-full shadow-sm">
              {icon}
            </div>
          )}
          <div>
            <h1 className={cn("text-2xl font-bold", styles.title)}>{title}</h1>
            {description && (
              <p className={cn("mt-1", styles.desc)}>
                {description}
              </p>
            )}
          </div>
        </div>
        
        {action && (
          <div>
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
