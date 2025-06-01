
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const getHeaderClasses = () => {
    switch(variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-leaf-50 via-white/80 to-leaf-50';
      case 'glass':
        return 'bg-white/80 backdrop-blur-md border-b border-leaf-100';
      case 'minimal':
        return 'bg-transparent';
      case 'soil':
        return 'bg-gradient-to-r from-soil-50 to-cream/50';
      case 'leaf':
        return 'bg-gradient-to-r from-leaf-50 to-white/80';
      case 'water':
        return 'bg-gradient-to-r from-sky-50 to-white/80';
      default:
        return 'bg-white/95 backdrop-blur-md border-b border-leaf-100/50';
    }
  };

  const getTitleClasses = () => {
    const baseClasses = 'font-decorative text-xl sm:text-2xl md:text-3xl font-bold';
    switch(variant) {
      case 'soil':
        return `${baseClasses} text-soil-700`;
      case 'leaf':
        return `${baseClasses} text-leaf-700`;
      case 'water':
        return `${baseClasses} text-sky-700`;
      default:
        return `${baseClasses} text-soil-800`;
    }
  };

  const getGradientVariant = () => {
    switch(variant) {
      case 'soil': return 'soil';
      case 'leaf': return 'leaf';
      case 'water': return 'sky';
      case 'gradient': return 'primary';
      default: return 'primary';
    }
  };
  
  const weatherInfo = {
    temp: '28°C',
    condition: 'Sunny',
    humidity: '65%',
    icon: <Sun className="text-amber-500" size={18} />
  };

  return (
    <div className="page-container relative max-w-6xl mx-auto bg-gradient-to-br from-leaf-25 via-white to-cream/30 min-h-screen">
      <header className={cn(
        "page-header flex flex-col items-center justify-center mb-6 sm:mb-8 md:mb-10 relative pt-4 sm:pt-5 md:pt-6",
        scrolled && 'shadow-lg'
      )}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-full flex justify-between items-center fixed top-0 right-0 left-0 px-4 py-3 z-30 rounded-b-2xl max-w-6xl mx-auto transition-all duration-300",
            scrolled && getHeaderClasses(),
            scrolled && 'shadow-xl'
          )}
        >
          <div className="flex-1 flex items-center">
            {showBackButton ? (
              <Link to="/" className="text-leaf-600 hover:text-leaf-700 transition-colors transform hover:scale-110 p-2 flex items-center bg-white/80 rounded-full shadow-sm">
                <ChevronLeft size={20} />
                <span className="text-sm font-medium ml-1 hidden sm:inline">Back</span>
              </Link>
            ) : (
              <div className="flex-shrink-0">
                <LanguageSelector />
              </div>
            )}
          </div>
          
          {withWeather && scrolled && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center bg-white/90 px-3 py-2 rounded-full text-xs border border-leaf-200 shadow-sm"
            >
              <span className="mr-1">{weatherInfo.icon}</span>
              <span className="font-semibold text-soil-700">{weatherInfo.temp}</span>
              <span className="mx-2 text-soil-400">•</span>
              <Droplet size={12} className="text-sky-500 mr-1" />
              <span className="text-soil-600">{weatherInfo.humidity}</span>
            </motion.div>
          )}

          <div className="flex items-center">
            <MenuSection />
          </div>
        </motion.div>
        
        <motion.div 
          className="logo-container relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mb-4 mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.1 
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-leaf-100 via-white/50 to-leaf-50 animate-pulse-gentle shadow-xl"></div>
          <Logo />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-leaf-200/20 to-transparent blur-2xl -z-10 scale-110"></div>
        </motion.div>
        
        {title && (
          <motion.div 
            className="mt-2 mb-5 w-full flex items-center justify-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className={cn(
              "bg-gradient-to-r from-white/90 to-leaf-50/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-leaf-200/50 text-center",
              getTitleClasses()
            )}>
              <GradientText variant={getGradientVariant()}>{title}</GradientText>
            </div>
          </motion.div>
        )}
        
        {withWeather && !scrolled && (
          <motion.div 
            className="mb-4 flex items-center justify-center gap-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-leaf-100"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center">
              <Sun className="text-amber-500 mr-3" size={24} />
              <div>
                <p className="text-base font-bold text-soil-800">28°C</p>
                <p className="text-sm text-soil-600">Sunny</p>
              </div>
            </div>
            <div className="h-10 w-px bg-leaf-200"></div>
            <div className="flex items-center">
              <Droplet className="text-sky-500 mr-3" size={24} />
              <div>
                <p className="text-base font-bold text-soil-800">65%</p>
                <p className="text-sm text-soil-600">Humidity</p>
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
            "pb-20 md:pb-16 px-4 sm:px-6",
            mounted ? 'animate-grow-fade' : 'opacity-0'
          )}
        >
          {children}
          
          {!hideFooter && <PageFooter />}
        </motion.main>
      </AnimatePresence>

      {isMobile && <MobileNavigation />}
      
      <div className="fixed top-1/4 right-0 w-32 h-32 bg-gradient-to-bl from-leaf-100/30 to-transparent rounded-full blur-3xl -z-10 animate-pulse-gentle"></div>
      <div className="fixed bottom-1/3 left-0 w-24 h-24 bg-gradient-to-tr from-amber-100/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse-gentle"></div>
    </div>
  );
};

export default Layout;
