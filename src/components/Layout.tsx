
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Wheat, Leaf, Bell, Users, Recycle, Home, ChevronLeft, BookOpen, Cloud, LifeBuoy } from 'lucide-react';
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
    { path: '/alerts', label: t('alerts'), icon: Bell },
    { path: '/farmer-tips', label: t('farmerTips'), icon: Users },
    { path: '/waste-ideas', label: t('wasteIdeas'), icon: Recycle },
    { path: '/learn-farming', label: t('learnFarming'), icon: BookOpen },
    { path: '/weather', label: t('weather'), icon: Cloud },
    { path: '/helpline', label: t('helpline'), icon: LifeBuoy },
  ];

  return (
    <div className="page-container relative">
      <header className="page-header flex flex-col items-center justify-center mb-4 relative">
        <div className="w-full flex justify-between items-center absolute top-0 px-4 py-2">
          <div className="flex-1">
            {showBackButton && (
              <Link to="/" className="text-earth hover:text-saffron transition-colors">
                <ChevronLeft size={24} />
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <MenuSection />
            <LanguageSelector />
          </div>
        </div>
        <div className="logo-container w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-1 mt-10">
          <Logo />
        </div>
        {title && (
          <div className="mt-2 w-full flex items-center justify-center">
            <h1 className="text-xl font-semibold text-earth">{title}</h1>
          </div>
        )}
      </header>
      
      <main className={`pb-20 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 frosted-glass p-2 border-t border-cream/50 z-10">
        <div className="max-w-md mx-auto flex items-center justify-around overflow-x-auto">
          {navItems.slice(0, isMobile ? 5 : navItems.length).map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-1 ${
                  isActive ? 'text-saffron' : 'text-earth/70 hover:text-saffron'
                } transition-colors duration-200 min-w-[56px]`}
              >
                <item.icon size={isActive ? 22 : 20} />
                <span className="text-[10px] md:text-xs mt-1 whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
