
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Leaf, Mountain, BarChart, Menu, X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const MobileNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFabOpen, setIsFabOpen] = useState(false);

  const navItems = [
    { 
      path: '/', 
      label: 'Home',
      icon: <Home size={20} />,
      color: 'text-leaf-600'
    },
    { 
      path: '/crop-advisor', 
      label: 'Crops',
      icon: <Leaf size={20} />,
      color: 'text-leaf-600'
    },
    { 
      path: '/soil-scanner', 
      label: 'Soil',
      icon: <Mountain size={20} />,
      color: 'text-soil-600'
    },
    { 
      path: '/market-prices', 
      label: 'Market',
      icon: <BarChart size={20} />,
      color: 'text-amber-600'
    },
    { 
      path: '/more', 
      label: 'More',
      icon: <Menu size={20} />,
      color: 'text-soil-600'
    },
  ];

  const fabMenuItems = [
    {
      label: 'Crop Disease',
      path: '/crop-disease',
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      textColor: 'text-red-700'
    },
    {
      label: 'Water Tips',
      path: '/water-management',
      color: 'bg-gradient-to-r from-sky-500 to-sky-600',
      textColor: 'text-sky-700'
    },
    {
      label: 'Farming Tips',
      path: '/farmer-tips',
      color: 'bg-gradient-to-r from-leaf-500 to-leaf-600',
      textColor: 'text-leaf-700'
    }
  ];

  const toggleFabMenu = () => setIsFabOpen(!isFabOpen);

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isFabOpen) setIsFabOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-16 z-50 bg-white/95 backdrop-blur-md border-t border-leaf-100 shadow-2xl">
        <div className="flex justify-around items-center h-full px-2">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 cursor-pointer flex-1 relative",
                location.pathname === item.path 
                  ? "bg-gradient-to-t from-leaf-50 to-white shadow-sm" 
                  : "hover:bg-leaf-25"
              )}
              onClick={() => handleNavigation(item.path)}
              whileTap={{ scale: 0.95 }}
            >
              <div className={cn(
                "transition-colors duration-200",
                location.pathname === item.path ? "text-leaf-600" : "text-soil-500"
              )}>
                {item.icon}
              </div>
              <span className={cn(
                "text-[10px] font-medium mt-1 transition-colors duration-200",
                location.pathname === item.path ? "text-leaf-700" : "text-soil-600"
              )}>
                {item.label}
              </span>
              
              {location.pathname === item.path && (
                <motion.div 
                  className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-leaf-500 to-leaf-600 rounded-full" 
                  layoutId="navIndicator"
                />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-leaf-200 via-leaf-400 to-leaf-200"></div>
      </div>

      <motion.div 
        className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-2xl z-40 flex items-center justify-center cursor-pointer"
        onClick={toggleFabMenu}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        animate={isFabOpen ? { rotate: 45 } : { rotate: 0 }}
      >
        {isFabOpen ? <X size={24} className="text-white" /> : <Plus size={24} className="text-white" />}
        
        {!isFabOpen && (
          <motion.div 
            className="absolute inset-0 rounded-full bg-amber-400/30"
            animate={{ 
              scale: [1, 1.3, 1],
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

      <AnimatePresence>
        {isFabOpen && (
          <motion.div
            className="fixed bottom-36 right-4 flex flex-col gap-3 z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {fabMenuItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleNavigation(item.path)}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden">
                  <div className={`w-10 h-10 ${item.color} text-white flex items-center justify-center`}>
                    <Plus size={16} />
                  </div>
                  <span className={`px-4 py-2 text-sm font-medium ${item.textColor}`}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
