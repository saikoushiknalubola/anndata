
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wheat, Leaf, Bell, Users, Recycle, FileText, Info, 
  HelpCircle, BarChart, RefreshCw, Users2, Phone, 
  BookOpen, Cloud, DollarSign, GraduationCap, Smartphone, 
  Headphones, Volume2, Mic, Sparkles, Globe, Languages,
  Droplet, Bug, Calendar, Mountain, Camera, ShoppingCart, Database
} from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import SeasonalCalendar from '../components/SeasonalCalendar';
import Disclaimer from '../components/Disclaimer';
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
      icon: <Wheat size={20} className="text-white" />, 
      path: "/crop-advisor",
      color: "bg-gradient-to-br from-saffron to-terracotta" 
    },
    { 
      title: t('soilScanner'), 
      icon: <Leaf size={20} className="text-white" />, 
      path: "/soil-scanner",
      color: "bg-gradient-to-br from-earth to-jute" 
    },
    { 
      title: "Water Management", 
      icon: <Droplet size={20} className="text-white" />, 
      path: "/water-management",
      color: "bg-gradient-to-br from-blue-500 to-blue-600" 
    },
    { 
      title: "Crop Disease Identifier", 
      icon: <Camera size={20} className="text-white" />, 
      path: "/crop-disease",
      color: "bg-gradient-to-br from-red-500 to-red-600" 
    },
    { 
      title: "Marketplace", 
      icon: <ShoppingCart size={20} className="text-white" />, 
      path: "/marketplace",
      color: "bg-gradient-to-br from-yellow-500 to-amber-600" 
    },
    { 
      title: "Knowledge Base", 
      icon: <Database size={20} className="text-white" />, 
      path: "/knowledge-base",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600" 
    },
    { 
      title: "Pest Control", 
      icon: <Bug size={20} className="text-white" />, 
      path: "/pest-control",
      color: "bg-gradient-to-br from-green-500 to-green-600" 
    },
    { 
      title: "Crop Planning", 
      icon: <Calendar size={20} className="text-white" />, 
      path: "/crop-planning",
      color: "bg-gradient-to-br from-purple-500 to-purple-600" 
    },
    { 
      title: "Soil Health", 
      icon: <Mountain size={20} className="text-white" />, 
      path: "/soil-health",
      color: "bg-gradient-to-br from-amber-500 to-amber-600" 
    },
    { 
      title: t('alerts'), 
      icon: <Bell size={20} className="text-white" />, 
      path: "/alerts",
      color: "bg-gradient-to-br from-saffron to-earth" 
    },
    { 
      title: t('farmerTips'), 
      icon: <Users size={20} className="text-white" />, 
      path: "/farmer-tips",
      color: "bg-gradient-to-br from-leaf to-monsoon" 
    },
    { 
      title: t('wasteIdeas'), 
      icon: <Recycle size={20} className="text-white" />, 
      path: "/waste-ideas",
      color: "bg-gradient-to-br from-earth to-jute" 
    },
    { 
      title: 'Farm Subsidies', 
      icon: <DollarSign size={20} className="text-white" />, 
      path: "/farm-subsidies",
      color: "bg-gradient-to-br from-saffron to-terracotta" 
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <Card 
          variant="village"
          className="text-center py-6 px-4"
        >
          <div className="relative z-10">
            <h1 className="text-2xl font-decorative text-soil mb-3 animate-pulse-gentle">
              {t('empowerFarm')}
            </h1>
            <p className="text-earth text-sm max-w-xs mx-auto">
              {t('modernSolutions')}
            </p>
            <div className="mt-2 text-xs text-terracotta font-medium">
              {t('digitalIndia')}
            </div>
          </div>
        </Card>

        <Card variant="clay" className="border border-terracotta/30">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-decorative text-terracotta mb-2">Powered by Bhashini</h3>
              <p className="text-sm text-soil/80">
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
        
        <Card variant="bordered" className="bg-white/90 border border-blue-500/20 shadow-md">
          <h3 className="font-decorative text-blue-600 mb-2 flex items-center">
            <Languages size={18} className="mr-2" /> 
            How Bhashini Empowers Andata
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <Globe size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <p className="text-soil/80">Enables farmers to use Andata in their native language, removing literacy barriers</p>
            </div>
            <div className="flex items-start">
              <Mic size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <p className="text-soil/80">Voice input & output in 22+ Indian languages makes farming advice accessible to all</p>
            </div>
            <div className="flex items-start">
              <Sparkles size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <p className="text-soil/80">AI-powered real-time translations increase reach to 500+ million rural Indians</p>
            </div>
          </div>
        </Card>

        <SeasonalCalendar />

        <div className="grid grid-cols-1 gap-3 animate-slide-up">
          {navButtons.map((button, index) => (
            <Button 
              key={button.title}
              variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "accent"}
              icon={button.icon}
              fullWidth
              className={`py-3 justify-start px-5 indian-btn ${index % 2 === 0 ? "animate-delay-100" : ""}`}
              onClick={() => navigate(button.path)}
              size="md"
            >
              <span className="font-decorative">{button.title}</span>
            </Button>
          ))}
        </div>

        <Card variant="rich" className="border-2 border-terracotta/20 mt-6">
          <h2 className="text-xl font-decorative text-soil mb-3">Why Andata Matters</h2>
          <div className="space-y-3 text-sm text-soil/90">
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

        {/* Enhanced How We Impact Farming Section */}
        <div className="mt-8 space-y-4">
          <div className="text-center">
            <h2 className="inline-block text-xl font-decorative py-2 px-6 rounded-lg bg-gradient-to-r from-saffron to-terracotta text-white shadow-md mb-3">
              {t('howWeImpact')}
            </h2>
            <p className="text-sm text-soil/90 max-w-xl mx-auto mb-4 bg-white/80 rounded-lg p-3 shadow-sm">
              {t('impactDesc')}
            </p>
          </div>
          
          <Card className="mt-6 bg-gradient-to-r from-terracotta/20 to-terracotta/5 border border-terracotta/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="bg-terracotta text-white p-2 rounded-full mr-3 shadow-sm">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-decorative text-soil">{t('helplineText')}</h3>
                <p className="text-terracotta font-bold">{t('helplineNumber')}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Add the disclaimer component */}
        <Disclaimer />

        <div className="text-center mt-6 mb-2">
          <p className="text-xs text-soil/70">
            {t('version')}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
