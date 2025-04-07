
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
    <div className="page-container relative max-w-6xl mx-auto">
      <header className="page-header flex flex-col items-center justify-center mb-8 sm:mb-10 relative pt-16 sm:pt-20 md:pt-24">
        <div className="w-full flex justify-between items-center absolute top-0 px-4 py-3 z-10">
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
        <div className="logo-container w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center mb-5 mt-8 pulse-gentle rounded-full bg-gradient-to-br from-[#FF9933]/10 via-white/60 to-[#138808]/10 p-3 shadow-md border border-cream/50">
          <Logo />
        </div>
        {title && (
          <div className="mt-3 mb-6 w-full flex items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-decorative text-earth text-glow bg-white/70 px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-sm border border-cream/50">{title}</h1>
          </div>
        )}
      </header>
      
      <main className={`pb-20 md:pb-8 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
      
      {/* Desktop navigation */}
      <div className="hidden md:block fixed top-0 left-0 w-full bg-white/95 shadow-md z-20 border-b border-cream">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2 p-2">
                <div className="w-10 h-10">
                  <Logo />
                </div>
                <span className="font-bold text-earth text-lg">Andata</span>
              </Link>
              {navItems.slice(0, 7).map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md ${
                      isActive 
                        ? 'text-leaf bg-leaf/10 font-medium' 
                        : 'text-earth/80 hover:text-leaf hover:bg-leaf/5'
                    } transition-all duration-300`}
                  >
                    <item.icon size={16} className="mr-1.5" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
            <MenuSection />
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 frosted-glass p-2 border-t border-cream/50 z-10 shadow-md bg-gradient-to-r from-white/95 to-cream/90">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {visibleNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-2 ${
                  isActive 
                    ? 'text-leaf relative after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-leaf after:rounded-full transform scale-110' 
                    : 'text-earth/80 hover:text-leaf'
                } transition-all duration-300 min-w-[50px] ${isActive ? 'bg-white/60 rounded-lg shadow-sm' : ''}`}
              >
                <item.icon size={isActive ? 24 : 22} className="transition-all duration-300" />
                <span className="text-[10px] sm:text-xs mt-1 truncate w-full text-center font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
