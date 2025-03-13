
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Wheat, Soil, Bell, Users, Recycle, Home, ChevronLeft } from 'lucide-react';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const Layout = ({ children, title, showBackButton = false }: LayoutProps) => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/crop-advisor', label: 'Crop Advisor', icon: Wheat },
    { path: '/soil-scanner', label: 'Soil Scanner', icon: Soil },
    { path: '/alerts', label: 'Alerts', icon: Bell },
    { path: '/farmer-tips', label: 'Farmer Tips', icon: Users },
    { path: '/waste-ideas', label: 'Waste Ideas', icon: Recycle },
  ];

  return (
    <div className="page-container relative">
      <header className="page-header">
        <Logo />
        {title && (
          <div className="mt-2 flex items-center justify-center">
            {showBackButton && (
              <Link to="/" className="absolute left-4 text-earth hover:text-saffron transition-colors">
                <ChevronLeft size={24} />
              </Link>
            )}
            <h1 className="text-xl font-semibold text-earth">{title}</h1>
          </div>
        )}
      </header>
      
      <main className={`pb-16 ${mounted ? 'animate-grow-fade' : 'opacity-0'}`}>
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 frosted-glass p-2 border-t border-cream/50">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-1 ${
                  isActive ? 'text-saffron' : 'text-earth/70 hover:text-saffron'
                } transition-colors duration-200`}
              >
                <item.icon size={isActive ? 22 : 20} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
