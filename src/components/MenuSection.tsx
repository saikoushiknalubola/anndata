
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Home, Wheat, Leaf, Bell, Users, Recycle, BookOpen, Cloud, LifeBuoy, FileText, 
  DollarSign, ShoppingCart, Trophy, Sprout, Tractor, Droplet, Bug, Calendar, Mountain 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose,
  SheetHeader
} from './ui/sheet';
import { useIsMobile } from '../hooks/use-mobile';

const MenuSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const menuCategories = [
    {
      title: t('mainServices'),
      items: [
        { path: '/', label: t('home'), icon: Home },
        { path: '/crop-advisor', label: t('cropAdvisor'), icon: Wheat },
        { path: '/soil-scanner', label: t('soilScanner'), icon: Leaf },
        { path: '/water-management', label: 'Water Management', icon: Droplet },
        { path: '/pest-control', label: 'Pest Control', icon: Bug },
        { path: '/crop-planning', label: 'Crop Planning', icon: Calendar },
        { path: '/soil-health', label: 'Soil Health', icon: Mountain },
        { path: '/alerts', label: t('alerts'), icon: Bell },
        { path: '/farmer-tips', label: t('farmerTips'), icon: Users },
        { path: '/waste-ideas', label: t('wasteIdeas'), icon: Recycle },
        { path: '/farm-subsidies', label: 'Farm Subsidies', icon: DollarSign },
      ]
    },
    {
      title: t('resources'),
      items: [
        { path: '/learn-farming', label: t('learnFarming'), icon: BookOpen },
        { path: '/weather', label: t('weather'), icon: Cloud },
        { path: '/crop-info', label: 'Crop Info', icon: FileText },
        { path: '/success-stories', label: 'Success Stories', icon: Trophy },
        { path: '/organic-farming', label: 'Organic Farming', icon: Sprout },
        { path: '/equipment-catalog', label: 'Equipment Catalog', icon: Tractor },
      ]
    },
    {
      title: t('marketSupport'),
      items: [
        { path: '/market-prices', label: 'Market Prices', icon: ShoppingCart },
        { path: '/helpline', label: t('helpline'), icon: LifeBuoy },
        { path: '/developer', label: 'About Developer', icon: Users },
      ]
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-earth hover:bg-cream transition-colors shadow-sm border border-cream/50"
        >
          <Menu size={isMobile ? 22 : 26} />
          <span className="sr-only">{t('menu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0 border-l-2 border-l-[#FF9933]/40 overflow-hidden flex flex-col">
        <SheetHeader className="p-5 border-b relative bg-gradient-to-r from-[#FF9933]/30 via-white to-[#138808]/30 flex-shrink-0">
          <div className="absolute top-3 right-3">
            <SheetClose className="text-earth hover:text-saffron p-1.5 rounded-full bg-white/70 hover:bg-white/90 transition-colors">
              <X size={20} />
            </SheetClose>
          </div>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-2 bg-gradient-to-b from-white to-cream/20 scrollbar-custom">
          <nav className="flex flex-col">
            {menuCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-3">
                <h3 className="menu-category-title bg-gradient-to-r from-saffron to-earth text-white font-bold px-4 py-2 shadow-md">{category.title}</h3>
                <div className="flex flex-col space-y-1 p-2">
                  {category.items.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <SheetClose asChild key={item.path}>
                        <Link
                          to={item.path}
                          className={`menu-item ${isActive ? 'menu-item-active' : 'hover:bg-cream/70 text-earth/90 hover:text-saffron hover:translate-x-1'}`}
                        >
                          <div className={`menu-item-icon ${isActive ? 'menu-item-icon-active' : 'bg-earth/10'}`}>
                            <item.icon size={18} className={isActive ? 'text-saffron' : 'text-earth/70'} />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-cream bg-gradient-to-r from-[#FF9933]/10 via-white to-[#138808]/10 flex-shrink-0">
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSection;
