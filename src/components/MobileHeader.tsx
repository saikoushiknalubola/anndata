
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Bell, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface MobileHeaderProps {
  title?: string;
  showBackButton?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  title,
  showBackButton = false,
  showNotifications = true,
  showProfile = true
}) => {
  const location = useLocation();

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-leaf-100 px-4 py-3"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBackButton ? (
            <Link 
              to="/" 
              className="p-2 hover:bg-leaf-50 rounded-full transition-colors"
            >
              <ArrowLeft size={20} className="text-soil-600" />
            </Link>
          ) : (
            <div className="w-8 h-8 flex items-center justify-center">
              <Logo />
            </div>
          )}
          
          {title && (
            <h1 className="text-lg font-semibold text-soil-800 truncate">
              {title}
            </h1>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showNotifications && (
            <Link 
              to="/notifications" 
              className="p-2 hover:bg-leaf-50 rounded-full transition-colors relative"
            >
              <Bell size={20} className="text-soil-600" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-saffron-500 rounded-full"></div>
            </Link>
          )}
          
          {showProfile && (
            <Link 
              to="/profile" 
              className="p-2 hover:bg-leaf-50 rounded-full transition-colors"
            >
              <User size={20} className="text-soil-600" />
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default MobileHeader;
