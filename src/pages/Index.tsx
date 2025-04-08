
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wheat, Leaf, Bell, Users, Recycle, FileText, Info, 
  HelpCircle, BarChart, RefreshCw, Users2, Phone, 
  BookOpen, Cloud, DollarSign, GraduationCap, Smartphone 
} from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    toast({
      title: "Welcome to Andata",
      description: "AI-powered farming assistance at your fingertips",
      duration: 3000,
    });
  }, []);

  const navButtons = [
    { 
      title: t('cropAdvisor'), 
      icon: <Wheat size={18} />, 
      path: "/crop-advisor",
      color: "bg-gradient-to-br from-saffron to-saffron/80" 
    },
    { 
      title: t('soilScanner'), 
      icon: <Leaf size={18} />, 
      path: "/soil-scanner",
      color: "bg-gradient-to-br from-earth to-earth/80" 
    },
    { 
      title: t('alerts'), 
      icon: <Bell size={18} />, 
      path: "/alerts",
      color: "bg-gradient-to-br from-saffron to-earth/90" 
    },
    { 
      title: t('farmerTips'), 
      icon: <Users size={18} />, 
      path: "/farmer-tips",
      color: "bg-gradient-to-br from-leaf to-leaf/80" 
    },
    { 
      title: t('wasteIdeas'), 
      icon: <Recycle size={18} />, 
      path: "/waste-ideas",
      color: "bg-gradient-to-br from-earth to-earth/80" 
    },
  ];

  const infoSections = [
    {
      title: t('aboutAndata'),
      icon: <Info size={20} className="text-saffron" />,
      content: t('aboutDesc'),
      imageUrl: '/lovable-uploads/076d86c2-8822-48f5-8d2a-a9bce74c1509.png'
    },
    {
      title: t('whyChooseUs'),
      icon: <HelpCircle size={20} className="text-leaf" />,
      content: t('whyDesc'),
      imageUrl: '/lovable-uploads/e17e17d5-c387-4c00-85cb-497be4a7a72c.png'
    },
    {
      title: t('howItWorks'),
      icon: <FileText size={20} className="text-earth" />,
      content: t('howDesc')
    }
  ];

  const impactSections = [
    {
      title: t('reduceWaste'),
      icon: <RefreshCw size={20} className="text-saffron" />,
      content: t('reduceWasteDesc')
    },
    {
      title: t('increaseYield'),
      icon: <BarChart size={20} className="text-leaf" />,
      content: t('increaseYieldDesc'),
      imageUrl: '/lovable-uploads/076d86c2-8822-48f5-8d2a-a9bce74c1509.png'
    },
    {
      title: t('communitySupport'),
      icon: <Users2 size={20} className="text-earth" />,
      content: t('communitySupportDesc')
    }
  ];
  
  const resourceSections = [
    {
      title: t('digitalInitiative'),
      icon: <Smartphone size={20} className="text-saffron" />,
      content: t('digitalDesc')
    },
    {
      title: t('governmentResources'),
      icon: <FileText size={20} className="text-leaf" />,
      content: t('resourcesDesc'),
      imageUrl: '/lovable-uploads/e17e17d5-c387-4c00-85cb-497be4a7a72c.png'
    },
    {
      title: t('weatherInsights'),
      icon: <Cloud size={20} className="text-earth" />,
      content: t('weatherDesc')
    },
    {
      title: t('marketPrices'),
      icon: <DollarSign size={20} className="text-saffron" />,
      content: t('pricesDesc')
    },
    {
      title: t('learningResources'),
      icon: <GraduationCap size={20} className="text-leaf" />,
      content: t('learningDesc')
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <Card 
          className="text-center py-6 px-4 bg-gradient-to-br from-cream to-white"
          imageUrl="/lovable-uploads/076d86c2-8822-48f5-8d2a-a9bce74c1509.png"
          variant="image-card"
        >
          <h1 className="text-2xl font-bold text-leaf mb-3 animate-pulse-gentle">
            {t('empowerFarm')}
          </h1>
          <p className="text-earth text-sm max-w-xs mx-auto">
            {t('modernSolutions')}
          </p>
          <div className="mt-2 text-xs text-saffron font-medium">
            {t('digitalIndia')}
          </div>
        </Card>

        {/* Government Logos Section */}
        <div className="flex items-center justify-center space-x-3 py-2 overflow-x-auto scrollbar-hide">
          <img 
            src="/lovable-uploads/0e1f044e-2162-4da1-b219-a810bd119ff2.png" 
            alt="Azadi Ka Amrit Mahotsav" 
            className="h-8 md:h-10 w-auto object-contain"
            loading="lazy"
          />
          <img 
            src="/lovable-uploads/96c8d011-6254-4a2d-8619-8e491a0622ec.png" 
            alt="Digital India" 
            className="h-7 md:h-9 w-auto object-contain"
            loading="lazy"
          />
          <img 
            src="/lovable-uploads/d9ca9bcc-256a-4565-b55a-751b3db158bd.png" 
            alt="G20 India" 
            className="h-7 md:h-9 w-auto object-contain"
            loading="lazy"
          />
          <img 
            src="/lovable-uploads/6f8147b2-570c-4b9c-9982-c979295d71a3.png" 
            alt="Make in India" 
            className="h-7 md:h-9 w-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 animate-slide-up">
          {navButtons.map((button, index) => (
            <Button 
              key={button.title}
              variant={index % 2 === 0 ? "primary" : index % 3 === 0 ? "accent" : "secondary"}
              icon={button.icon}
              fullWidth
              className={`py-3 justify-start px-5 ${index % 2 === 0 ? "animate-delay-100" : ""}`}
              onClick={() => navigate(button.path)}
            >
              <span className="font-semibold">{button.title}</span>
            </Button>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-earth text-center">{t('farmingSmarter')}</h2>
          
          {infoSections.map((section, index) => (
            <Card 
              key={index} 
              className="bg-white/80"
              imageUrl={section.imageUrl}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">{section.icon}</div>
                <div>
                  <h3 className="font-semibold text-earth">{section.title}</h3>
                  <p className="text-sm text-earth/80 mt-1">{section.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-earth text-center">{t('howWeImpact')}</h2>
          <p className="text-center text-sm text-earth/80 mb-4">{t('impactDesc')}</p>
          
          {impactSections.map((section, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-r from-white/80 to-cream/30"
              imageUrl={section.imageUrl}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">{section.icon}</div>
                <div>
                  <h3 className="font-semibold text-earth">{section.title}</h3>
                  <p className="text-sm text-earth/80 mt-1">{section.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* New Resources Section */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-earth text-center">{t('governmentResources')}</h2>
          
          {resourceSections.map((section, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-r from-white/80 to-cream/30 border border-earth/10"
              imageUrl={section.imageUrl}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            >
              <div className="flex items-start">
                <div className="bg-earth/10 p-2 rounded-full mr-3">{section.icon}</div>
                <div>
                  <h3 className="font-semibold text-earth">{section.title}</h3>
                  <p className="text-sm text-earth/80 mt-1">{section.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Helpline Section */}
        <Card className="mt-6 bg-saffron/10 border border-saffron/30">
          <div className="flex items-center">
            <div className="bg-saffron text-white p-2 rounded-full mr-3">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-earth">{t('helplineText')}</h3>
              <p className="text-saffron font-bold">{t('helplineNumber')}</p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6 mb-2">
          <p className="text-xs text-earth/70">
            {t('version')}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
