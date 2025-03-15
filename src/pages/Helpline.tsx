
import React from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MessageSquare, Clock, Cloud } from 'lucide-react';

const Helpline = () => {
  const { t } = useLanguage();

  const helplineContacts = [
    {
      title: t('farmerHelpline'),
      number: '1800-180-1551',
      hours: '6:00 AM - 10:00 PM',
      icon: Phone,
    },
    {
      title: t('cropDiseasesSupport'),
      number: '1800-425-3738',
      hours: '9:00 AM - 6:00 PM',
      icon: MessageSquare,
    },
    {
      title: t('weatherAdvisory'),
      number: '1800-220-8290',
      hours: '24/7',
      icon: Cloud,
    },
    {
      title: t('agriculturalMarketing'),
      number: '1800-270-0323',
      hours: '8:00 AM - 8:00 PM',
      icon: Mail,
    }
  ];

  return (
    <Layout title={t('helpline')} showBackButton>
      <div className="px-4">
        <p className="text-earth text-sm mb-6 text-center">
          {t('helplineDesc')}
        </p>

        <div className="space-y-4">
          {helplineContacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-cream"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-cream/50 rounded-full text-earth">
                  <contact.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-earth">{contact.title}</h3>
                  <a 
                    href={`tel:${contact.number.replace(/-/g, '')}`}
                    className="text-saffron font-semibold block mt-1"
                  >
                    {contact.number}
                  </a>
                  <div className="flex items-center text-xs text-earth/70 mt-2">
                    <Clock size={12} className="mr-1" />
                    <span>{contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-cream/30 rounded-lg border border-cream">
          <h3 className="font-medium text-center text-earth mb-2">
            {t('emergencySupport')}
          </h3>
          <p className="text-sm text-center text-earth/80">
            {t('emergencySupportDesc')}
          </p>
          <div className="mt-3 text-center">
            <a 
              href="tel:112"
              className="inline-block bg-saffron text-white px-6 py-2 rounded-full font-medium"
            >
              112
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Helpline;
