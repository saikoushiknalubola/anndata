
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
      <header className="page-header flex flex-col items-center justify-center mb-6 sm:mb-8 relative pt-14 sm:pt-16 md:pt-20">
        <div className="w-full flex justify-between items-center absolute top-0 px-3 py-2 z-10">
          <div className="flex-1 flex items-center">
            {showBackButton ? (
              <Link to="/" className="text-earth hover:text-leaf transition-colors transform hover:scale-110">
                <ChevronLeft size={24} />
              </Link>
            ) : (
              <LanguageSelector />
            )}
          </div>
          <div className="flex items-center">
            <MenuSection />
          </div>
        </div>
        <div className="logo-container w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-4 mt-6 pulse-gentle rounded-full bg-gradient-to-br from-[#FF9933]/20 via-white/70 to-[#138808]/20 p-3 shadow-lg border border-cream/50">
          <Logo />
        </div>
        {title && (
          <div className="mt-2 mb-4 w-full flex items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-2xl font-decorative font-bold text-earth bg-gradient-to-r from-saffron/20 via-white/90 to-leaf/20 px-8 py-3 rounded-full shadow-md border border-cream/70">{title}</h1>
          </div>
        )}
      </header>
      
      <main className={`pb-20 md:pb-8 px-3 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
