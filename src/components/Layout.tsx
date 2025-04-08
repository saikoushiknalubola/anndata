
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Wheat, Leaf, Bell, Users, Recycle, Home, ChevronLeft, 
  BookOpen, Cloud, LifeBuoy, FileText, DollarSign, 
  ShoppingCart, Trophy, Sprout, Tractor
} from 'lucide-react';
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

  const navItems = [
    { path: '/', label: t('home'), icon: Home, category: 'main' },
    { path: '/crop-advisor', label: t('cropAdvisor'), icon: Wheat, category: 'main' },
    { path: '/soil-scanner', label: t('soilScanner'), icon: Leaf, category: 'main' },
    { path: '/alerts', label: t('alerts'), icon: Bell, category: 'main' },
    { path: '/farmer-tips', label: t('farmerTips'), icon: Users, category: 'main' },
    { path: '/waste-ideas', label: t('wasteIdeas'), icon: Recycle, category: 'resources' },
    { path: '/learn-farming', label: t('learnFarming'), icon: BookOpen, category: 'resources' },
    { path: '/weather', label: t('weather'), icon: Cloud, category: 'resources' },
    { path: '/helpline', label: t('helpline'), icon: LifeBuoy, category: 'help' },
    { path: '/crop-info', label: 'Crop Info', icon: FileText, category: 'resources' },
    { path: '/farm-subsidies', label: 'Subsidies', icon: DollarSign, category: 'resources' },
    { path: '/market-prices', label: 'Market', icon: ShoppingCart, category: 'market' },
    { path: '/success-stories', label: 'Success', icon: Trophy, category: 'resources' },
    { path: '/organic-farming', label: 'Organic', icon: Sprout, category: 'resources' },
    { path: '/equipment-catalog', label: 'Equipment', icon: Tractor, category: 'resources' },
  ];

  // Get visible nav items based on screen size for mobile navigation
  const visibleMobileNavItems = navItems.slice(0, 5); // Show only the main category on mobile

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
        <div className="logo-container w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-4 mt-6 pulse-gentle rounded-full bg-gradient-to-br from-[#FF9933]/10 via-white/60 to-[#138808]/10 p-3 shadow-md border border-cream/50">
          <Logo />
        </div>
        {title && (
          <div className="mt-2 mb-4 w-full flex items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-2xl font-decorative text-earth text-glow bg-white/70 px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-sm border border-cream/50">{title}</h1>
          </div>
        )}
      </header>
      
      {/* Mobile navigation only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 frosted-glass p-1 border-t border-cream/50 z-10 shadow-md bg-gradient-to-r from-white/95 to-cream/90">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {visibleMobileNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-1.5 ${
                  isActive 
                    ? 'text-leaf relative after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-leaf after:rounded-full transform scale-105' 
                    : 'text-earth/80 hover:text-leaf'
                } transition-all duration-300 min-w-[48px] ${isActive ? 'bg-white/60 rounded-lg shadow-sm' : ''}`}
              >
                <item.icon size={isActive ? 20 : 18} className="transition-all duration-300" />
                <span className="text-[9px] sm:text-xs mt-0.5 truncate w-full text-center font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      
      <main className={`pb-20 md:pb-8 px-3 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
