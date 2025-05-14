
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarLink {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarCategory {
  title: string;
  links: SidebarLink[];
}

interface PageSidebarProps {
  categories: SidebarCategory[];
  currentPath: string;
  variant?: 'soil' | 'leaf' | 'saffron' | 'default';
}

const PageSidebar: React.FC<PageSidebarProps> = ({
  categories,
  currentPath,
  variant = 'soil',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'leaf':
        return {
          header: 'bg-leaf-700/90 text-white',
          activeLink: 'bg-leaf-50 border-leaf-600 text-leaf-700',
          hoverLink: 'hover:bg-leaf-50/50 hover:text-leaf-700',
        };
      case 'saffron':
        return {
          header: 'bg-saffron/90 text-white',
          activeLink: 'bg-saffron-50 border-saffron text-saffron-700',
          hoverLink: 'hover:bg-saffron-50/50 hover:text-saffron-700',
        };
      default:
        return {
          header: 'bg-soil/90 text-white',
          activeLink: 'bg-soil-50 border-soil text-soil-700',
          hoverLink: 'hover:bg-soil-50/50 hover:text-soil-700',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className="card-material w-full">
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <div className={cn('px-4 py-2 rounded-t-lg font-medium text-sm', styles.header)}>
            {category.title}
          </div>
          <div className="p-2">
            {category.links.map((link, linkIndex) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={linkIndex}
                  to={link.href}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm rounded-md mb-1 transition-all border-l-2 border-transparent',
                    isActive 
                      ? styles.activeLink
                      : `text-soil/80 ${styles.hoverLink}`
                  )}
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageSidebar;
