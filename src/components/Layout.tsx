
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Sun, Cloud, Droplet } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import MenuSection from './MenuSection';
import MobileNavigation from './MobileNavigation';
import PageFooter from './PageFooter';
import { useLanguage } from '../contexts/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { GradientText } from './ui/enhanced-components';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  variant?: 'default' | 'gradient' | 'glass' | 'minimal' | 'official' | 'soil' | 'leaf' | 'water';
  withWeather?: boolean;
  hideFooter?: boolean;
}

const Layout = ({ 
  children, 
  title, 
  showBackButton = false,
  variant = 'default',
  withWeather = false,
  hideFooter = false,
}: LayoutProps) => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const getHeaderClasses = () => {
    switch(variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-[#FF5722]/10 via-[#FF9800]/5 to-[#FFC107]/10';
      case 'glass':
        return 'bg-white/30 backdrop-blur-sm';
      case 'minimal':
        return 'bg-transparent';
      case 'official':
        return 'bg-gradient-to-r from-[#FF9933]/20 via-white/10 to-[#138808]/20';
      case 'soil':
        return 'bg-gradient-to-r from-soil-500/10 to-soil-700/5';
      case 'leaf':
        return 'bg-gradient-to-r from-leaf-500/10 to-leaf-700/5';
      case 'water':
        return 'bg-gradient-to-r from-sky-500/10 to-sky-700/5';
      default:
        return 'bg-white/50 backdrop-blur-sm';
    }
  };

  const getTitleClasses = () => {
    switch(variant) {
      case 'gradient':
        return 'font-decorative text-xl sm:text-2xl md:text-3xl';
      case 'glass':
        return 'font-decorative text-xl sm:text-2xl md:text-3xl';
      case 'minimal':
        return 'font-decorative text-xl sm:text-2xl md:text-3xl';
      case 'official':
        return 'font-decorative text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text';
      case 'soil':
        return 'font-decorative text-xl sm:text-2xl md:text-3xl text-soil';
      case 'leaf':
        return 'font-decorative text-xl sm:text-2xl md:text-3xl text-leaf-700';
      case 'water':
        return 'font-decorative text-xl sm:text-2xl md:text-3xl text-sky-700';
      default:
        return 'font-decorative text-xl sm:text-2xl md:text-3xl text-soil';
    }
  };

  const getGradientVariant = () => {
    switch(variant) {
      case 'soil':
        return 'soil';
      case 'leaf':
        return 'leaf';
      case 'water':
        return 'sky';
      case 'gradient':
        return 'primary';
      case 'official':
        return 'saffron';
      default:
        return 'primary';
    }
  };
  
  // Weather data for demo
  const weatherInfo = {
    temp: '28°C',
    condition: 'Sunny',
    humidity: '65%',
    icon: <Sun className="text-saffron" size={18} />
  };

  return (
    <div className="page-container relative max-w-6xl mx-auto bg-gradient-to-b from-cream/30 to-white/60 min-h-screen notch-aware-container">
      <header className={cn(
        "page-header flex flex-col items-center justify-center mb-6 sm:mb-8 md:mb-10 relative pt-4 sm:pt-5 md:pt-6",
        scrolled && 'header-shadow'
      )}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-full flex justify-between items-center fixed top-0 right-0 left-0 px-3 py-2 z-10 rounded-b-xl max-w-6xl mx-auto",
            scrolled && getHeaderClasses(),
            scrolled && 'shadow-sm'
          )}
          style={{
            backdropFilter: scrolled ? 'blur(8px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none'
          }}
        >
          <div className="flex-1 flex items-center">
            {showBackButton ? (
              <Link to="/" className="text-[#FF5722] hover:text-[#FF9800] transition-colors transform hover:scale-110 p-2 flex items-center">
                <ChevronLeft size={24} />
                <span className="text-sm font-medium ml-1 hidden sm:inline">Back</span>
              </Link>
            ) : (
              <div className="flex-shrink-0">
                <LanguageSelector />
              </div>
            )}
          </div>
          
          {/* Weather info in header when scrolled */}
          {withWeather && scrolled && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center bg-white/50 px-2 py-1 rounded-full text-xs border border-soil/10"
            >
              <span className="mr-1">{weatherInfo.icon}</span>
              <span className="font-medium text-soil">{weatherInfo.temp}</span>
              <span className="mx-1 text-soil/60">|</span>
              <Droplet size={12} className="text-sky-500 mr-1" />
              <span className="text-soil/70">{weatherInfo.humidity}</span>
            </motion.div>
          )}

          <div className="flex items-center">
            <MenuSection />
          </div>
        </motion.div>
        
        {/* Enhanced logo container with visual effects */}
        <motion.div 
          className="logo-container relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mb-5 mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1 
          }}
        >
          <div className={cn(
            "absolute inset-0 rounded-full animate-pulse-gentle",
            variant === 'official' 
              ? 'bg-gradient-to-r from-[#FF9933]/10 via-white/5 to-[#138808]/10' 
              : 'bg-gradient-to-r from-[#FF5722]/10 via-[#FF9800]/5 to-[#FFC107]/10'
          )}></div>
          <Logo />
          
          {/* Add subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/30 filter blur-xl -z-10 scale-75 opacity-50"></div>
        </motion.div>
        
        {title && (
          <motion.div 
            className="mt-3 mb-5 w-full flex items-center justify-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className={cn(
              "bg-gradient-to-r from-[#FF5722]/10 to-[#FF9800]/10 px-8 py-3 rounded-full shadow-md border border-[#FF5722]/20 text-center",
              getTitleClasses()
            )}>
              {variant === 'official' ? (
                <span>{title}</span>
              ) : (
                <GradientText variant={getGradientVariant()}>{title}</GradientText>
              )}
            </div>
          </motion.div>
        )}
        
        {/* Weather widget if enabled */}
        {withWeather && !scrolled && (
          <motion.div 
            className="mb-4 flex items-center justify-center gap-6 bg-white/70 px-4 py-2 rounded-full shadow-sm border border-soil/10"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center">
              <Sun className="text-saffron mr-2" size={20} />
              <div>
                <p className="text-sm font-medium text-soil">28°C</p>
                <p className="text-xs text-soil/70">Sunny</p>
              </div>
            </div>
            <div className="h-8 w-px bg-soil/10"></div>
            <div className="flex items-center">
              <Droplet className="text-sky-500 mr-2" size={20} />
              <div>
                <p className="text-sm font-medium text-soil">65%</p>
                <p className="text-xs text-soil/70">Humidity</p>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "pb-16 md:pb-12 px-4 sm:px-5",
            mounted ? 'animate-grow-fade' : 'opacity-0'
          )}
        >
          {children}
          
          {!hideFooter && <PageFooter />}
        </motion.main>
      </AnimatePresence>

      {/* Mobile Navigation */}
      {isMobile && <MobileNavigation />}
      
      {/* Floating background elements for visual enhancement */}
      <div className="floating-bg-1 top-[20%] right-[-10%] opacity-70 hidden md:block"></div>
      <div className="floating-bg-2 bottom-[30%] left-[-5%] opacity-70 hidden md:block"></div>
    </div>
  );
};

export default Layout;
