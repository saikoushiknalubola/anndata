
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Leaf } from 'lucide-react';

const PageFooter = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: t('quickLinks'),
      links: [
        { name: t('home'), url: '/' },
        { name: t('cropAdvisor'), url: '/crop-advisor' },
        { name: t('soilScanner'), url: '/soil-scanner' },
        { name: t('alerts'), url: '/alerts' },
      ]
    },
    {
      title: t('resources'),
      links: [
        { name: t('learnFarming'), url: '/learn-farming' },
        { name: t('weather'), url: '/weather-dashboard' },
        { name: 'Market Prices', url: '/market-prices' },
        { name: 'Knowledge Base', url: '/knowledge-base' },
      ]
    },
    {
      title: t('support'),
      links: [
        { name: t('helpline'), url: '/helpline' },
        { name: 'FAQ', url: '/knowledge-base' },
        { name: 'Farm Subsidies', url: '/farm-subsidies' },
        { name: 'Contact Us', url: '/helpline' },
      ]
    }
  ];

  return (
    <footer className="mt-12 border-t border-soil/10 pt-8 pb-4 bg-gradient-to-b from-transparent to-cream/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron/20 to-soil/20 rounded-full flex items-center justify-center border border-saffron/30">
                <Leaf className="w-6 h-6 text-saffron" />
              </div>
              <span className="ml-3 text-xl font-decorative text-soil">Andata</span>
            </div>
            <p className="text-sm text-soil/70 mb-4">
              Empowering farmers with technology and knowledge for sustainable agriculture.
            </p>
            <p className="text-xs text-soil/60 mt-auto">
              © {currentYear} Andata | {t('allRightsReserved')}
            </p>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-medium text-soil mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url} 
                      className="text-sm text-soil/70 hover:text-saffron transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-4 border-t border-soil/10 text-center">
          <p className="text-xs text-soil/60">
            Smart Farming Platform for Modern Agriculture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
