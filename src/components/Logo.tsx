
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { useLocation } from 'react-router-dom';

const Logo = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    // Add a slight delay before animation to ensure smoother page transitions
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Logo animation variants
  const logoVariants = {
    initial: { scale: 0.8, rotate: -5, opacity: 0 },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.05,
      rotate: isHomePage ? 5 : 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: { 
        duration: 0.1
      }
    }
  };
  
  // Shine animation for the logo
  const shineVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { 
      x: 100, 
      opacity: [0, 1, 0],
      transition: { 
        repeat: Infinity,
        repeatDelay: 5,
        duration: 1.5
      }
    }
  };
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div 
        className="relative hover:scale-105 transition-transform duration-500"
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        whileHover="hover"
        whileTap="tap"
        variants={logoVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.img 
          src="/lovable-uploads/992d0dd2-6727-405a-98df-8665671e81a3.png" 
          alt="Andata Logo" 
          className="w-full h-full object-contain rounded-full shadow-md border-2 border-saffron-500"
          style={{ 
            width: isMobile ? '68px' : '84px',  // Increased from 48px/64px
            height: isMobile ? '68px' : '84px', // Increased from 48px/64px
            maxWidth: '100%'
          }}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.log("Logo failed to load");
            target.onerror = null;
            target.src = '/placeholder.svg';
          }}
        />
        
        {/* Subtle radial gradient overlay for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        
        {/* Animated shine effect on hover */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 rounded-full overflow-hidden"
            variants={shineVariants}
            initial="initial"
            animate="animate"
          >
            <div className="absolute top-0 -left-[100%] bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-20"></div>
          </motion.div>
        )}
        
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-saffron-500/30 filter blur-md -z-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default Logo;
