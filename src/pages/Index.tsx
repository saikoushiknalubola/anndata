
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Leaf, Bell, Users, Recycle, HelpCircle, BarChart,
  RefreshCw, Users2, Phone, BookOpen, Cloud, DollarSign,
  GraduationCap, Smartphone, Headphones, Volume2, Mic,
  Sparkles, Globe, Languages, Droplet, Bug, Calendar,
  Mountain, Camera, ShoppingCart, Database
} from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import SeasonalCalendar from '../components/SeasonalCalendar';
import Disclaimer from '../components/Disclaimer';
import VoiceAssistant from '../components/VoiceAssistant';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    toast({
      title: t('welcomeMessage'),
      description: t('aiPoweredAssistance'),
      duration: 3000,
    });
  }, [t]);

  // Enhanced feature buttons with government-inspired colors
  const navButtons = [
    { 
      title: t('soilScanner'), 
      icon: <Mountain size={20} className="text-white" />, 
      path: "/soil-scanner",
      color: "bg-gradient-to-br from-[#8B4513] to-[#A0522D]" 
    },
    { 
      title: t('cropAdvisor'), 
      icon: <Leaf size={20} className="text-white" />, 
      path: "/crop-advisor",
      color: "bg-gradient-to-br from-[#34C759] to-[#138808]" 
    },
    { 
      title: "Water Management", 
      icon: <Droplet size={20} className="text-white" />, 
      path: "/water-management",
      color: "bg-gradient-to-br from-[#4285F4] to-[#0F9D58]" 
    },
    { 
      title: "Crop Disease Identifier", 
      icon: <Camera size={20} className="text-white" />, 
      path: "/crop-disease",
      color: "bg-gradient-to-br from-[#FF5722] to-[#F4511E]" 
    },
    { 
      title: "Marketplace", 
      icon: <ShoppingCart size={20} className="text-white" />, 
      path: "/marketplace",
      color: "bg-gradient-to-br from-[#FF9933] to-[#FFB300]" 
    },
    { 
      title: "Knowledge Base", 
      icon: <Database size={20} className="text-white" />, 
      path: "/knowledge-base",
      color: "bg-gradient-to-br from-[#4285F4] to-[#5B8DEF]" 
    },
    { 
      title: "Pest Control", 
      icon: <Bug size={20} className="text-white" />, 
      path: "/pest-control",
      color: "bg-gradient-to-br from-[#34C759] to-[#2E7D32]" 
    },
    { 
      title: "Crop Planning", 
      icon: <Calendar size={20} className="text-white" />, 
      path: "/crop-planning",
      color: "bg-gradient-to-br from-[#673AB7] to-[#5E35B1]" 
    },
    { 
      title: "Soil Health", 
      icon: <Mountain size={20} className="text-white" />, 
      path: "/soil-health",
      color: "bg-gradient-to-br from-[#FF9933] to-[#F57C00]" 
    },
    { 
      title: t('alerts'), 
      icon: <Bell size={20} className="text-white" />, 
      path: "/alerts",
      color: "bg-gradient-to-br from-[#FF5722] to-[#D84315]" 
    },
    { 
      title: t('farmerTips'), 
      icon: <Users size={20} className="text-white" />, 
      path: "/farmer-tips",
      color: "bg-gradient-to-br from-[#34C759] to-[#2E7D32]" 
    },
    { 
      title: t('wasteIdeas'), 
      icon: <Recycle size={20} className="text-white" />, 
      path: "/waste-ideas",
      color: "bg-gradient-to-br from-[#8B4513] to-[#A0522D]" 
    },
    { 
      title: 'Farm Subsidies', 
      icon: <DollarSign size={20} className="text-white" />, 
      path: "/farm-subsidies",
      color: "bg-gradient-to-br from-[#FF9933] to-[#F57C00]" 
    },
  ];

  // Summary cards data for dashboard
  const summaryCards = [
    {
      title: t('soilHealth'),
      value: '72%',
      icon: <Mountain size={18} className="text-[#8B4513]" />,
      color: 'from-[#8B4513]/10 to-[#A0522D]/10',
      borderColor: 'border-[#8B4513]'
    },
    {
      title: t('weather'),
      value: '28°C',
      subtitle: t('partlyCloudy'),
      icon: <Cloud size={18} className="text-[#4285F4]" />,
      color: 'from-[#4285F4]/10 to-[#4285F4]/5',
      borderColor: 'border-[#4285F4]'
    },
    {
      title: t('marketPrice'),
      value: 'Rice: ₹2100',
      icon: <BarChart size={18} className="text-[#FF9933]" />,
      color: 'from-[#FF9933]/10 to-[#FF9933]/5',
      borderColor: 'border-[#FF9933]'
    }
  ];

  return (
    <Layout>
      <div className="space-y-4 sm:space-y-6">
        {/* Summary cards at top */}
        <div className="grid grid-cols-3 gap-2">
          {summaryCards.map((card, index) => (
            <Card 
              key={index}
              variant="default" 
              className={`p-3 bg-gradient-to-br ${card.color} border-l-2 ${card.borderColor}`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  {card.icon}
                </div>
              </div>
              <div className="mt-1">
                <p className="text-xs text-soil/70">{card.title}</p>
                <p className="text-sm font-bold text-soil">{card.value}</p>
                {card.subtitle && <p className="text-xs text-soil/60">{card.subtitle}</p>}
              </div>
            </Card>
          ))}
        </div>

        {/* Main government-inspired card */}
        <Card 
          variant="official"
          className="text-center py-5 px-4"
        >
          <div className="relative z-10">
            <h1 className="text-2xl font-decorative text-soil mb-3">
              {t('empowerFarm')}
            </h1>
            <p className="text-soil text-sm max-w-xs mx-auto">
              {t('modernSolutions')}
            </p>
          </div>
        </Card>

        {/* Voice-first interaction - Central to the app */}
        <VoiceAssistant homeMode={true} />

        {/* Bhashini integration card */}
        <Card variant="govt" className="border border-[#4285F4]/30">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-decorative text-[#138808] mb-2">Powered by Bhashini</h3>
              <p className="text-sm text-soil/80">
                India's national language translation mission breaking barriers with AI voice technology in 22+ Indian languages
              </p>
              <div className="flex items-center mt-3 space-x-2">
                <div className="bg-[#34C759]/10 p-1.5 rounded-full">
                  <Mic size={16} className="text-[#34C759]" />
                </div>
                <div className="bg-[#FF9933]/10 p-1.5 rounded-full">
                  <Volume2 size={16} className="text-[#FF9933]" />
                </div>
                <div className="bg-soil/10 p-1.5 rounded-full">
                  <Headphones size={16} className="text-soil" />
                </div>
                <span className="text-xs font-medium text-soil/70">Voice-first technology</span>
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
        
        <Card variant="bordered" className="bg-gradient-to-r from-white/90 to-[#F8F8F8]/90 border border-[#4285F4]/20 shadow-md">
          <h3 className="font-decorative text-[#4285F4] mb-2 flex items-center">
            <Languages size={18} className="mr-2" /> 
            How Bhashini Empowers Farmers
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <Globe size={16} className="text-[#4285F4] mt-1 mr-2 flex-shrink-0" />
              <p className="text-soil/80">Enables farmers to use the app in their native language, removing literacy barriers</p>
            </div>
            <div className="flex items-start">
              <Mic size={16} className="text-[#4285F4] mt-1 mr-2 flex-shrink-0" />
              <p className="text-soil/80">Voice input & output in 22+ Indian languages makes farming advice accessible to all</p>
            </div>
            <div className="flex items-start">
              <Sparkles size={16} className="text-[#4285F4] mt-1 mr-2 flex-shrink-0" />
              <p className="text-soil/80">AI-powered real-time translations increase reach to 500+ million rural Indians</p>
            </div>
          </div>
        </Card>

        <SeasonalCalendar />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-slide-up">
          {navButtons.map((button, index) => (
            <Button 
              key={button.title}
              variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "marigold"}
              icon={button.icon}
              fullWidth
              className="py-3 px-2 indian-btn flex-col h-[80px] items-center"
              onClick={() => navigate(button.path)}
              size="sm"
            >
              <span className="mt-1 text-xs font-medium text-center">{button.title}</span>
            </Button>
          ))}
        </div>

        <Card variant="rich" className="border-2 border-[#34C759]/20 mt-4">
          <h2 className="text-xl font-decorative text-soil mb-3">Why The App Matters</h2>
          <div className="space-y-3 text-sm text-soil/90">
            <div className="flex items-start">
              <div className="bg-[#FF9933]/10 p-1.5 rounded-full mr-2 mt-0.5">
                <Users2 size={16} className="text-[#FF9933]" />
              </div>
              <p>Empowers over 1 million farmers in Telangana's Warangal district with accessible technology</p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#34C759]/10 p-1.5 rounded-full mr-2 mt-0.5">
                <Smartphone size={16} className="text-[#34C759]" />
              </div>
              <p>Voice-first technology overcomes literacy barriers (57% rural literacy) through local languages</p>
            </div>
            <div className="flex items-start">
              <div className="bg-soil/10 p-1.5 rounded-full mr-2 mt-0.5">
                <RefreshCw size={16} className="text-soil" />
              </div>
              <p>Reduces crop losses by 60% and increases income by ₹500-1000/month for small farmers</p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#4285F4]/10 p-1.5 rounded-full mr-2 mt-0.5">
                <Globe size={16} className="text-[#4285F4]" />
              </div>
              <p>Bridges the digital divide by providing expert farming knowledge in 22+ Indian languages</p>
            </div>
          </div>
        </Card>

        {/* Enhanced How We Impact Farming Section */}
        <div className="mt-4 space-y-4">
          <div className="text-center">
            <h2 className="inline-block text-xl font-decorative py-2 px-6 rounded-lg bg-gradient-to-r from-[#FF9933] to-[#138808] text-white shadow-md mb-3">
              {t('howWeImpact')}
            </h2>
            <p className="text-sm text-soil/90 max-w-xl mx-auto mb-4 bg-white/80 rounded-lg p-3 shadow-sm">
              {t('impactDesc')}
            </p>
          </div>
          
          <Card className="mt-4 bg-gradient-to-r from-[#FF9933]/20 to-[#FF9933]/5 border border-[#FF9933]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="bg-[#FF9933] text-white p-2 rounded-full mr-3 shadow-sm">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-decorative text-soil">{t('helplineText')}</h3>
                <p className="text-[#FF9933] font-bold">{t('helplineNumber')}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Add the disclaimer component */}
        <Disclaimer />

        <div className="text-center mt-4 mb-2">
          <p className="text-xs text-soil/70">
            {t('version')}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
