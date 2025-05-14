
import React from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MessageSquare, Clock, Cloud } from 'lucide-react';
import Card from '../components/Card';
import { GradientText, IconBadge, EnhancedSection } from '@/components/ui/enhanced-ui';

const Helpline = () => {
  const { t } = useLanguage();

  const helplineContacts = [
    {
      title: t('farmerHelpline'),
      number: '1800-180-1551',
      hours: '6:00 AM - 10:00 PM',
      icon: Phone,
      variant: 'primary',
    },
    {
      title: t('cropDiseasesSupport'),
      number: '1800-425-3738',
      hours: '9:00 AM - 6:00 PM',
      icon: MessageSquare,
      variant: 'accent',
    },
    {
      title: t('weatherAdvisory'),
      number: '1800-220-8290',
      hours: '24/7',
      icon: Cloud,
      variant: 'secondary',
    },
    {
      title: t('agriculturalMarketing'),
      number: '1800-270-0323',
      hours: '8:00 AM - 8:00 PM',
      icon: Mail,
      variant: 'warning',
    }
  ];

  return (
    <Layout title={t('helpline')} showBackButton variant="glass">
      <div className="px-4">
        <EnhancedSection variant="glass" className="mb-6">
          <p className="text-soil text-sm mb-0 text-center">
            {t('helplineDesc')}
          </p>
        </EnhancedSection>

        <div className="space-y-4">
          {helplineContacts.map((contact, index) => (
            <Card 
              key={index}
              variant={index % 2 === 0 ? "glass" : "gradient"}
              className="hover-lift"
              withGlow
            >
              <div className="flex items-start gap-3">
                <IconBadge 
                  icon={contact.icon} 
                  variant={(contact.variant === 'primary' || contact.variant === 'secondary' || 
                           contact.variant === 'soil' || contact.variant === 'leaf' || 
                           contact.variant === 'saffron' || contact.variant === 'sky' || 
                           contact.variant === 'earth' || contact.variant === 'harvest') 
                           ? contact.variant : 'primary'} 
                  size="lg"
                  withGlow
                />
                <div className="flex-1">
                  <h3 className="font-medium mb-1">
                    <GradientText variant={
                      contact.variant === 'primary' ? 'primary' : 
                      contact.variant === 'accent' ? 'earth' : 
                      contact.variant === 'secondary' ? 'ocean' : 'sunset'
                    }>
                      {contact.title}
                    </GradientText>
                  </h3>
                  <a 
                    href={`tel:${contact.number.replace(/-/g, '')}`}
                    className="text-[#FF5722] font-semibold block mt-1"
                  >
                    {contact.number}
                  </a>
                  <div className="flex items-center text-xs text-soil/70 mt-2 bg-white/40 p-1.5 rounded-lg inline-flex">
                    <Clock size={12} className="mr-1" />
                    <span>{contact.hours}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card 
          variant="mesh" 
          className="mt-8 p-5 shadow-lg"
        >
          <h3 className="font-medium text-center mb-2 text-white">
            {t('emergencySupport')}
          </h3>
          <p className="text-sm text-center text-white/90 mb-3">
            {t('emergencySupportDesc')}
          </p>
          <div className="mt-3 text-center">
            <a 
              href="tel:112"
              className="inline-block bg-white text-[#FF5722] px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              112
            </a>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Helpline;
