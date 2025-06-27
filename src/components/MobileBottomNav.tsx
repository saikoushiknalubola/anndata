
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Leaf, Mountain, BarChart3, BookOpen, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/crop-advisor', label: 'Crops', icon: Leaf },
    { path: '/soil-scanner', label: 'Soil', icon: Mountain },
    { path: '/market-prices', label: 'Market', icon: BarChart3 },
    { path: '/learn-farming', label: 'Learn', icon: BookOpen },
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-leaf-100 px-2 py-2"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 relative",
                isActive 
                  ? "text-leaf-600 bg-leaf-50" 
                  : "text-soil-500 hover:text-leaf-600 hover:bg-leaf-25"
              )}
            >
              <item.icon size={20} />
              <span className="text-xs font-medium mt-1">{item.label}</span>
              
              {isActive && (
                <motion.div 
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-leaf-500 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileBottomNav;
