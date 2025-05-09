
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import MenuSection from './MenuSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const Layout = ({ children, title, showBackButton = false }: LayoutProps) => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-container relative max-w-6xl mx-auto bg-gradient-to-b from-cream/30 to-white/60 min-h-screen">
      <header className="page-header flex flex-col items-center justify-center mb-6 sm:mb-8 md:mb-10 relative pt-14 sm:pt-16 md:pt-16">
        <div className="w-full flex justify-between items-center absolute top-0 right-0 px-3 py-2 z-10">
          <div className="flex-1 flex items-center">
            {showBackButton ? (
              <Link to="/" className="text-terracotta hover:text-saffron transition-colors transform hover:scale-110 p-2">
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
          <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 to-[#138808]/10 rounded-full animate-pulse-gentle"></div>
          <Logo />
        </div>
        
        {title && (
          <div className="mt-3 mb-5 w-full flex items-center justify-center">
            <h1 className="font-decorative text-xl sm:text-2xl md:text-3xl text-soil bg-gradient-to-r from-[#FF9933]/10 to-[#138808]/10 px-8 py-3 rounded-full shadow-md border border-terracotta/20 text-center">
              {title}
            </h1>
          </div>
        )}
      </header>
      
      <main className={`pb-20 md:pb-10 px-4 sm:px-5 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
