
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Wheat, Leaf, Bell, Users, Recycle, BookOpen, Cloud, LifeBuoy, FileText, DollarSign, ShoppingCart, Trophy, Sprout, Tractor } from 'lucide-react';
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
        { path: '/alerts', label: t('alerts'), icon: Bell },
        { path: '/farmer-tips', label: t('farmerTips'), icon: Users },
        { path: '/farm-subsidies', label: 'Farm Subsidies', icon: DollarSign },
      ]
    },
    {
      title: t('resources'),
      items: [
        { path: '/waste-ideas', label: t('wasteIdeas'), icon: Recycle },
        { path: '/learn-farming', label: t('learnFarming'), icon: BookOpen },
        { path: '/weather', label: t('weather'), icon: Cloud },
        { path: '/crop-info', label: 'Crop Info', icon: FileText },
        { path: '/success-stories', label: 'Success Stories', icon: Trophy },
        { path: '/organic-farming', label: 'Organic Farming', icon: Sprout },
      ]
    },
    {
      title: t('marketSupport'),
      items: [
        { path: '/market-prices', label: 'Market Prices', icon: ShoppingCart },
        { path: '/farm-subsidies', label: 'Farm Subsidies', icon: DollarSign },
        { path: '/equipment-catalog', label: 'Equipment Catalog', icon: Tractor },
        { path: '/helpline', label: t('helpline'), icon: LifeBuoy },
      ]
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="p-1.5 rounded-full bg-gradient-to-r from-saffron/10 to-leaf/10 text-earth hover:bg-earth/20 transition-colors shadow-sm"
        >
          <Menu size={isMobile ? 22 : 26} />
          <span className="sr-only">{t('menu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0 border-l-2 border-l-[#FF9933]/30">
        <SheetHeader className="p-5 border-b relative bg-gradient-to-r from-[#FF9933]/20 via-white to-[#138808]/20">
          <SheetTitle className="text-xl font-bold text-earth">{t('menu')}</SheetTitle>
          <SheetDescription className="text-sm text-earth/70">
            Explore Andata Services
          </SheetDescription>
          <SheetClose className="absolute top-3 right-3 text-earth hover:text-saffron p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors">
            <X size={20} />
          </SheetClose>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-2 bg-gradient-to-b from-white to-cream/20">
          <nav className="flex flex-col">
            {menuCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-3">
                <h3 className="px-5 py-2 text-sm font-bold text-saffron uppercase tracking-wider bg-cream/50">{category.title}</h3>
                <div className="flex flex-col space-y-1 p-2">
                  {category.items.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <SheetClose asChild key={item.path}>
                        <Link
                          to={item.path}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                            isActive 
                              ? 'bg-gradient-to-r from-saffron/20 to-leaf/20 text-earth font-medium shadow-sm' 
                              : 'hover:bg-cream/50 text-earth/90 hover:text-saffron hover:translate-x-1'
                          }`}
                        >
                          <div className={`p-1.5 rounded-full ${isActive ? 'bg-white/80' : 'bg-transparent'}`}>
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
        <div className="p-4 border-t border-cream bg-gradient-to-r from-[#FF9933]/5 via-white to-[#138808]/5 text-center">
          <p className="text-xs text-earth/70">Andata - The Voice of Farmers</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSection;
