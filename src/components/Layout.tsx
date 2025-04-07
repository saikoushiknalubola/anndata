
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
    { path: '/', label: t('home'), icon: Home },
    { path: '/crop-advisor', label: t('cropAdvisor'), icon: Wheat },
    { path: '/soil-scanner', label: t('soilScanner'), icon: Leaf },
    { path: '/crop-info', label: 'Crop Info', icon: FileText },
    { path: '/farm-subsidies', label: 'Subsidies', icon: DollarSign },
    { path: '/market-prices', label: 'Market', icon: ShoppingCart },
    { path: '/success-stories', label: 'Success', icon: Trophy },
    { path: '/organic-farming', label: 'Organic', icon: Sprout },
    { path: '/equipment-catalog', label: 'Equipment', icon: Tractor },
    { path: '/alerts', label: t('alerts'), icon: Bell },
    { path: '/farmer-tips', label: t('farmerTips'), icon: Users },
    { path: '/waste-ideas', label: t('wasteIdeas'), icon: Recycle },
    { path: '/learn-farming', label: t('learnFarming'), icon: BookOpen },
    { path: '/weather', label: t('weather'), icon: Cloud },
    { path: '/helpline', label: t('helpline'), icon: LifeBuoy },
  ];

  // Get visible nav items based on screen size
  const visibleNavItems = isMobile 
    ? navItems.slice(0, 5) // Show fewer items on mobile
    : navItems.slice(0, 9); // Show more items on desktop

  return (
    <div className="page-container relative">
      <header className="page-header flex flex-col items-center justify-center mb-4 sm:mb-6 relative pt-12 sm:pt-14 bg-gradient-to-b from-white/80 to-transparent">
        <div className="w-full flex justify-between items-center absolute top-0 px-4 py-2 z-10">
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
        <div className="logo-container w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mb-3 mt-4 pulse-gentle rounded-full bg-gradient-to-br from-[#FF9933]/10 via-white/60 to-[#138808]/10 p-2 shadow-md border border-cream/50">
          <Logo />
        </div>
        {title && (
          <div className="mt-2 mb-2 w-full flex items-center justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-decorative text-earth text-glow bg-white/60 px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-sm border border-cream/50">{title}</h1>
          </div>
        )}
      </header>
      
      <main className={`pb-20 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 frosted-glass p-2 border-t border-cream/50 z-10 shadow-md bg-gradient-to-r from-white/95 to-cream/90">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {visibleNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-1 sm:p-2 ${
                  isActive 
                    ? 'text-leaf relative after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-leaf after:rounded-full transform scale-110' 
                    : 'text-earth/70 hover:text-leaf'
                } transition-all duration-300 min-w-[42px] sm:min-w-[48px] md:min-w-[60px] ${isActive ? 'bg-white/50 rounded-lg shadow-sm' : ''}`}
              >
                <item.icon size={isActive ? 22 : 20} className="transition-all duration-300" />
                <span className="text-[9px] sm:text-[10px] md:text-xs mt-0.5 truncate w-full text-center font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
