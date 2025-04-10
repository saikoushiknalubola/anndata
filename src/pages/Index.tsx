
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wheat, Leaf, Bell, Users, Recycle, FileText, Info, 
  HelpCircle, BarChart, RefreshCw, Users2, Phone, 
  BookOpen, Cloud, DollarSign, GraduationCap, Smartphone, 
  Headphones, Volume2, Mic, Sparkles, Globe, Languages
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
    { 
      title: 'Farm Subsidies', 
      icon: <DollarSign size={18} />, 
      path: "/farm-subsidies",
      color: "bg-gradient-to-br from-saffron to-saffron/80" 
    },
  ];

  const infoSections = [
    {
      title: t('aboutAndata'),
      icon: <Info size={20} className="text-saffron" />,
      content: t('aboutDesc')
    },
    {
      title: t('whyChooseUs'),
      icon: <HelpCircle size={20} className="text-leaf" />,
      content: t('whyDesc')
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
      content: t('increaseYieldDesc')
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
      content: t('resourcesDesc')
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
          variant="default"
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

        <Card className="bg-gradient-to-r from-[#FF9933]/10 via-white to-[#138808]/10 border border-[#FF9933]/30">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-earth mb-2">Powered by Bhashini</h3>
              <p className="text-sm text-earth/80">
                India's national language translation mission breaking barriers with AI voice technology in 22+ Indian languages
              </p>
              <div className="flex items-center mt-3 space-x-2">
                <div className="bg-leaf/10 p-1.5 rounded-full">
                  <Mic size={16} className="text-leaf" />
                </div>
                <div className="bg-saffron/10 p-1.5 rounded-full">
                  <Volume2 size={16} className="text-saffron" />
                </div>
                <div className="bg-earth/10 p-1.5 rounded-full">
                  <Headphones size={16} className="text-earth" />
                </div>
                <span className="text-xs font-medium text-earth/70">Voice-first technology</span>
              </div>
            </div>
            <div className="ml-2 bg-white/80 p-2 rounded-full shadow-sm">
              <img 
                src="/lovable-uploads/a8c02636-7834-4611-9693-85f5208ccbba.png" 
                alt="Bhashini Logo" 
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </Card>
        
        <Card className="bg-white/90 border border-blue-500/20 shadow-md">
          <h3 className="font-bold text-blue-600 mb-2 flex items-center">
            <Languages size={18} className="mr-2" /> 
            How Bhashini Empowers Andata
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <Globe size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <p className="text-earth/80">Enables farmers to use Andata in their native language, removing literacy barriers</p>
            </div>
            <div className="flex items-start">
              <Mic size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <p className="text-earth/80">Voice input & output in 22+ Indian languages makes farming advice accessible to all</p>
            </div>
            <div className="flex items-start">
              <Sparkles size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <p className="text-earth/80">AI-powered real-time translations increase reach to 500+ million rural Indians</p>
            </div>
          </div>
        </Card>

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

        <Card variant="rich" className="border-2 border-saffron/20 mt-6">
          <h2 className="text-xl font-semibold text-earth mb-3">Why Andata Matters</h2>
          <div className="space-y-3 text-sm text-earth/90">
            <div className="flex items-start">
              <div className="bg-saffron/10 p-1.5 rounded-full mr-2 mt-0.5">
                <Users2 size={16} className="text-saffron" />
              </div>
              <p>Empowers over 1 million farmers in Telangana's Warangal district with accessible technology</p>
            </div>
            <div className="flex items-start">
              <div className="bg-leaf/10 p-1.5 rounded-full mr-2 mt-0.5">
                <Smartphone size={16} className="text-leaf" />
              </div>
              <p>Voice-first technology overcomes literacy barriers (57% rural literacy) through local languages</p>
            </div>
            <div className="flex items-start">
              <div className="bg-earth/10 p-1.5 rounded-full mr-2 mt-0.5">
                <RefreshCw size={16} className="text-earth" />
              </div>
              <p>Reduces crop losses by 60% and increases income by ₹500-1000/month for small farmers</p>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/10 p-1.5 rounded-full mr-2 mt-0.5">
                <Globe size={16} className="text-blue-500" />
              </div>
              <p>Bridges the digital divide by providing expert farming knowledge in 22+ Indian languages</p>
            </div>
          </div>
        </Card>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-center py-2 px-4 rounded-lg bg-gradient-to-r from-saffron/90 to-leaf/90 text-white shadow-md">
            {t('farmingSmarter')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {infoSections.map((section, index) => (
              <Card 
                key={index} 
                className="bg-white/80 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="bg-gradient-to-r from-saffron/10 to-leaf/10 p-3 rounded-full mb-3">
                    {section.icon}
                  </div>
                  <h3 className="font-semibold text-earth mb-2">{section.title}</h3>
                  <p className="text-sm text-earth/80">{section.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-center py-2 px-4 rounded-lg bg-gradient-to-r from-leaf/90 to-earth/90 text-white shadow-md">
            {t('howWeImpact')}
          </h2>
          <p className="text-center text-sm text-earth/80 mb-4 px-4 py-2 bg-white/70 rounded-lg shadow-sm">
            {t('impactDesc')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {impactSections.map((section, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-white/90 via-cream/30 to-white/90 border border-earth/10 h-full hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`bg-gradient-to-br ${
                    index === 0 ? "from-saffron/20 to-saffron/5" : 
                    index === 1 ? "from-leaf/20 to-leaf/5" : 
                    "from-earth/20 to-earth/5"
                  } p-3 rounded-full mb-3`}>
                    {section.icon}
                  </div>
                  <h3 className={`font-semibold mb-2 ${
                    index === 0 ? "text-saffron" : 
                    index === 1 ? "text-leaf" : 
                    "text-earth"
                  }`}>{section.title}</h3>
                  <p className="text-sm text-earth/90">{section.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-center py-2 px-4 rounded-lg bg-gradient-to-r from-earth/90 to-saffron/90 text-white shadow-md">
            {t('governmentResources')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resourceSections.map((section, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br from-white/90 to-cream/30 border border-earth/10 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'animate-delay-100' : ''}`}
              >
                <div className="flex items-center">
                  <div className={`rounded-full p-3 mr-4 ${
                    index % 3 === 0 ? "bg-saffron/10" : 
                    index % 3 === 1 ? "bg-leaf/10" : 
                    "bg-earth/10"
                  }`}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${
                      index % 3 === 0 ? "text-saffron" : 
                      index % 3 === 1 ? "text-leaf" : 
                      "text-earth"
                    }`}>{section.title}</h3>
                    <p className="text-sm text-earth/80">{section.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-6 bg-gradient-to-r from-saffron/20 to-saffron/5 border border-saffron/30 hover:shadow-lg transition-all duration-300">
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
