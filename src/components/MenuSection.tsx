
import React, { useState } from 'react';
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

interface MenuSectionProps {
  className?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const menuItems = [
    { path: '/', label: t('home'), color: 'bg-cream' },
    { path: '/crop-advisor', label: t('cropAdvisor'), color: 'bg-saffron/10' },
    { path: '/soil-scanner', label: t('soilScanner'), color: 'bg-leaf/10' },
    { path: '/alerts', label: t('alerts'), color: 'bg-cream' },
    { path: '/farmer-tips', label: t('farmerTips'), color: 'bg-saffron/10' },
    { path: '/waste-ideas', label: t('wasteIdeas'), color: 'bg-leaf/10' },
    { path: '/learn-farming', label: t('learnFarming'), color: 'bg-cream' },
    { path: '/weather', label: t('weather'), color: 'bg-saffron/10' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`}>
      {isMobile ? (
        <>
          <button 
            onClick={toggleMenu}
            className="flex items-center justify-center p-2 rounded-full bg-earth/10 text-earth hover:bg-earth/20 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-earth/10 z-50">
              <div className="py-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm text-earth hover:bg-earth/5 ${item.color}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 px-3 py-2 rounded-md bg-earth/10 text-earth hover:bg-earth/20 transition-colors">
            <span>{t('menu')}</span>
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-white">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.path} asChild>
                <Link
                  to={item.path}
                  className={`w-full px-2 py-1.5 rounded-md ${item.color}`}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default MenuSection;
