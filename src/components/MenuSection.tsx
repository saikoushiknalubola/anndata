
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
  SheetDescription
} from './ui/sheet';
import { useIsMobile } from '../hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from './ui/navigation-menu';

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
    { path: '/crop-info', label: 'Crop Info' },
    { path: '/farm-subsidies', label: 'Farm Subsidies' },
    { path: '/market-prices', label: 'Market Prices' },
    { path: '/success-stories', label: 'Success Stories' },
    { path: '/organic-farming', label: 'Organic Farming' },
    { path: '/equipment-catalog', label: 'Equipment Catalog' },
  ];

  // Desktop navigation menu categories
  const menuCategories = {
    'Tools': ['/crop-advisor', '/soil-scanner', '/weather'],
    'Resources': ['/crop-info', '/farm-subsidies', '/market-prices'],
    'Community': ['/farmer-tips', '/success-stories', '/helpline'],
    'Sustainability': ['/waste-ideas', '/organic-farming'],
    'Equipment': ['/equipment-catalog'],
    'Alerts': ['/alerts'],
    'Learn': ['/learn-farming']
  };

  // Display the desktop navigation menu
  const renderDesktopNav = () => {
    if (isMobile) return null;
    
    return (
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {Object.entries(menuCategories).map(([category, paths]) => (
            <NavigationMenuItem key={category}>
              <NavigationMenuTrigger className="bg-transparent hover:bg-cream text-earth">
                {category}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {menuItems.filter(item => paths.includes(item.path)).map((item) => (
                    <li key={item.path}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  };

  return (
    <>
      {renderDesktopNav()}
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className="p-1.5 rounded-full bg-earth/5 text-earth hover:bg-earth/20 transition-colors"
          >
            <Menu size={isMobile ? 22 : 26} />
            <span className="sr-only">{t('menu')}</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
          <SheetHeader className="p-5 border-b relative bg-gradient-to-r from-[#FF9933]/5 via-white to-[#138808]/5">
            <SheetTitle className="text-xl font-semibold text-earth">{t('menu')}</SheetTitle>
            <SheetDescription className="text-sm text-earth/70">
              Explore Andata Services
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-auto p-4 bg-gradient-to-b from-white to-cream/10">
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
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MenuSection;
