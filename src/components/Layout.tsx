
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
    <div className="page-container relative max-w-6xl mx-auto">
      <header className="page-header flex flex-col items-center justify-center mb-4 sm:mb-6 md:mb-8 relative pt-14 sm:pt-16 md:pt-16">
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
        <div className="logo-container w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-3 mt-2 rounded-full bg-gradient-to-br from-saffron/30 via-white/80 to-leaf/30 p-1.5 shadow-lg border border-cream/70">
          <Logo />
        </div>
        {title && (
          <div className="mt-1 mb-3 w-full flex items-center justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-decorative text-soil bg-gradient-to-r from-saffron/20 via-cream to-leaf/20 px-6 py-2 rounded-full shadow-md border border-cream/70 text-center">{title}</h1>
          </div>
        )}
      </header>
      
      <main className={`pb-16 md:pb-8 px-3 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
