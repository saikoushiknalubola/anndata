
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Leaf, Mountain, BarChart, Menu, X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const MobileNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFabOpen, setIsFabOpen] = useState(false);

  // Main navigation items
  const navItems = [
    { 
      path: '/', 
      label: 'Home',
      icon: <Home size={20} />
    },
    { 
      path: '/crop-advisor', 
      label: 'Crops',
      icon: <Leaf size={20} />
    },
    { 
      path: '/soil-scanner', 
      label: 'Soil',
      icon: <Mountain size={20} />
    },
    { 
      path: '/market-prices', 
      label: 'Market',
      icon: <BarChart size={20} />
    },
    { 
      path: '/more', 
      label: 'More',
      icon: <Menu size={20} />
    },
  ];

  // Quick action FAB menu items
  const fabMenuItems = [
    {
      label: 'Crop Disease',
      path: '/crop-disease',
      color: 'bg-red-500'
    },
    {
      label: 'Water Tips',
      path: '/water-management',
      color: 'bg-blue-500'
    },
    {
      label: 'Farming Tips',
      path: '/farmer-tips',
      color: 'bg-leaf-500'
    }
  ];

  // Toggle FAB menu
  const toggleFabMenu = () => {
    setIsFabOpen(!isFabOpen);
  };

  // Handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
    if (isFabOpen) setIsFabOpen(false);
  };

  return (
    <>
      {/* Main bottom navigation with enhanced styles for better touch targets */}
      <div className="mobile-bottom-nav">
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            className={cn(
              "mobile-bottom-nav-item touch-target",
              location.pathname === item.path && "active"
            )}
            onClick={() => handleNavigation(item.path)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="mobile-bottom-nav-icon">{item.icon}</div>
            <span className="text-xs">{item.label}</span>
            
            {/* Active indicator dot */}
            {location.pathname === item.path && (
              <motion.div 
                className="w-1 h-1 bg-[#FF9800] rounded-full absolute bottom-1" 
                layoutId="navIndicator"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Floating Action Button with better animation */}
      <motion.div 
        className="mobile-fab"
        onClick={toggleFabMenu}
        whileTap={{ scale: 0.92 }}
        initial={{ boxShadow: "0 3px 8px rgba(255, 152, 0, 0.3)" }}
        whileHover={{ 
          boxShadow: "0 5px 15px rgba(255, 152, 0, 0.5)",
          scale: 1.05 
        }}
        animate={isFabOpen ? { rotate: 45 } : { rotate: 0 }}
      >
        {isFabOpen ? <X size={24} /> : <Plus size={24} />}
        
        {/* Add subtle pulse animation to draw attention */}
        {!isFabOpen && (
          <motion.div 
            className="absolute inset-0 rounded-full bg-[#FF9800]/20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.2, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        )}
      </motion.div>

      {/* Enhanced FAB Menu with better animations */}
      <AnimatePresence>
        {isFabOpen && (
          <motion.div
            className="mobile-fab-menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {fabMenuItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="mobile-fab-menu-item touch-target"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleNavigation(item.path)}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`mobile-fab-menu-icon ${item.color} text-white`}>
                  <Plus size={16} />
                </div>
                <span className="mobile-fab-menu-label">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
