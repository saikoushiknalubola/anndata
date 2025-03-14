
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from './ui/sheet';
import { useIsMobile } from '../hooks/use-mobile';

const MenuSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const menuItems = [
    { path: '/', label: t('home') },
    { path: '/crop-advisor', label: t('cropAdvisor') },
    { path: '/soil-scanner', label: t('soilScanner') },
    { path: '/alerts', label: t('alerts') },
    { path: '/farmer-tips', label: t('farmerTips') },
    { path: '/waste-ideas', label: t('wasteIdeas') },
    { path: '/learn-farming', label: t('learnFarming') },
    { path: '/weather', label: t('weather') },
    { path: '/helpline', label: t('helpline') },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="p-1 rounded-full bg-earth/10 text-earth hover:bg-earth/20 transition-colors"
        >
          <Menu size={isMobile ? 20 : 24} />
          <span className="sr-only">{t('menu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-earth">{t('menu')}</h2>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X size={24} />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <SheetClose asChild key={item.path}>
                  <Link
                    to={item.path}
                    className="p-3 hover:bg-cream rounded-md transition-colors text-earth hover:text-saffron font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSection;
