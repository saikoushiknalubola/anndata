
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import MenuSection from './MenuSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { GradientText } from './ui/enhanced-ui';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  variant?: 'default' | 'gradient' | 'glass' | 'minimal' | 'official';
}

const Layout = ({ 
  children, 
  title, 
  showBackButton = false,
  variant = 'default'
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
      default:
        return 'font-decorative text-xl sm:text-2xl md:text-3xl text-soil';
    }
  };

  return (
    <div className="page-container relative max-w-6xl mx-auto bg-gradient-to-b from-cream/30 to-white/60 min-h-screen">
      <header className={cn(
        "page-header flex flex-col items-center justify-center mb-6 sm:mb-8 md:mb-10 relative pt-4 sm:pt-5 md:pt-6",
        scrolled && 'header-shadow'
      )}>
        <div className={cn(
          "w-full flex justify-between items-center absolute top-0 right-0 px-3 py-2 z-10 rounded-b-xl",
          scrolled && getHeaderClasses()
        )}>
          <div className="flex-1 flex items-center">
            {showBackButton ? (
              <Link to="/" className="text-[#FF5722] hover:text-[#FF9800] transition-colors transform hover:scale-110 p-2">
                <ChevronLeft size={24} />
              </Link>
            ) : (
              <div className="flex-shrink-0">
                <LanguageSelector />
              </div>
            )}
          </div>
          <div className="flex items-center">
            <MenuSection />
          </div>
        </div>
        
        {/* Enhanced logo container with visual effects */}
        <div className="logo-container relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mb-5 mt-4">
          <div className={cn(
            "absolute inset-0 rounded-full animate-pulse-gentle",
            variant === 'official' 
              ? 'bg-gradient-to-r from-[#FF9933]/10 via-white/5 to-[#138808]/10' 
              : 'bg-gradient-to-r from-[#FF5722]/10 via-[#FF9800]/5 to-[#FFC107]/10'
          )}></div>
          <Logo />
          
          {/* Add subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/30 filter blur-xl -z-10 scale-75 opacity-50"></div>
        </div>
        
        {title && (
          <div className="mt-3 mb-5 w-full flex items-center justify-center">
            <h1 className={cn(
              "bg-gradient-to-r from-[#FF5722]/10 to-[#FF9800]/10 px-8 py-3 rounded-full shadow-md border border-[#FF5722]/20 text-center",
              getTitleClasses()
            )}>
              {variant === 'official' ? (
                <span>{title}</span>
              ) : (
                <GradientText variant="primary">{title}</GradientText>
              )}
            </h1>
          </div>
        )}
      </header>
      
      <main className={cn(
        "pb-20 md:pb-10 px-4 sm:px-5",
        mounted ? 'animate-grow-fade' : 'opacity-0'
      )}>
        {children}
      </main>
    </div>
  );
};

// Helper function for class merging
const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Layout;
