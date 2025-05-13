
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
      {/* Main bottom navigation */}
      <div className="mobile-bottom-nav">
        {navItems.map((item) => (
          <div
            key={item.path}
            className={cn(
              "mobile-bottom-nav-item",
              location.pathname === item.path && "active"
            )}
            onClick={() => handleNavigation(item.path)}
          >
            <div className="mobile-bottom-nav-icon">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <motion.div 
        className="mobile-fab"
        onClick={toggleFabMenu}
        whileTap={{ scale: 0.95 }}
        animate={isFabOpen ? { rotate: 45 } : { rotate: 0 }}
      >
        {isFabOpen ? <X size={24} /> : <Plus size={24} />}
      </motion.div>

      {/* FAB Menu */}
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
                className="mobile-fab-menu-item"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleNavigation(item.path)}
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
