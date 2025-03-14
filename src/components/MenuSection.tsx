
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';

interface MenuSectionProps {
  className?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const menuRef = useRef<HTMLDivElement>(null);
  
  const menuItems = [
    { path: '/', label: t('home'), color: 'bg-cream hover:bg-cream/80' },
    { path: '/crop-advisor', label: t('cropAdvisor'), color: 'bg-saffron/10 hover:bg-saffron/30' },
    { path: '/soil-scanner', label: t('soilScanner'), color: 'bg-leaf/10 hover:bg-leaf/30' },
    { path: '/alerts', label: t('alerts'), color: 'bg-cream hover:bg-cream/80' },
    { path: '/farmer-tips', label: t('farmerTips'), color: 'bg-saffron/10 hover:bg-saffron/30' },
    { path: '/waste-ideas', label: t('wasteIdeas'), color: 'bg-leaf/10 hover:bg-leaf/30' },
    { path: '/learn-farming', label: t('learnFarming'), color: 'bg-cream hover:bg-cream/80' },
    { path: '/weather', label: t('weather'), color: 'bg-saffron/10 hover:bg-saffron/30' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle drawer state change
  const handleDrawerOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  if (isMobile) {
    return (
      <div className={`relative ${className}`} ref={menuRef}>
        <Drawer open={isDrawerOpen} onOpenChange={handleDrawerOpenChange}>
          <DrawerTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center justify-center p-2 rounded-full bg-earth/10 text-earth hover:bg-earth/20 transition-colors"
              aria-label={t('menu')}
            >
              <Menu size={24} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="px-4 py-6 bg-white">
            <div className="max-h-[80vh] overflow-y-auto flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium text-earth rounded-lg transition-colors ${item.color}`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="flex items-center space-x-1 px-3 py-2 rounded-md bg-earth/10 text-earth hover:bg-earth/20 transition-colors"
          >
            <span>{t('menu')}</span>
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white p-1">
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.path} asChild className="p-0 focus:bg-transparent">
              <Link
                to={item.path}
                className={`w-full px-3 py-2 rounded-md text-earth transition-colors ${item.color}`}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuSection;
