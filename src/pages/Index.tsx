
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
import { 
  GlassCard, 
  GradientText, 
  IconBadge, 
  EnhancedSection,
  AnimatedBadge,
  DecorativeDivider
} from '@/components/ui/enhanced-ui';

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

  // Enhanced feature buttons with improved visual design
  const navButtons = [
    { 
      title: t('soilScanner'), 
      icon: <Mountain size={20} className="text-white" />, 
      path: "/soil-scanner",
      variant: "primary"
    },
    { 
      title: t('cropAdvisor'), 
      icon: <Leaf size={20} className="text-white" />, 
      path: "/crop-advisor",
      variant: "accent"
    },
    { 
      title: "Water Management", 
      icon: <Droplet size={20} className="text-white" />, 
      path: "/water-management",
      variant: "secondary"
    },
    { 
      title: "Crop Disease Identifier", 
      icon: <Camera size={20} className="text-white" />, 
      path: "/crop-disease",
      variant: "primary"
    },
    { 
      title: "Marketplace", 
      icon: <ShoppingCart size={20} className="text-white" />, 
      path: "/marketplace",
      variant: "default"
    },
    { 
      title: "Knowledge Base", 
      icon: <Database size={20} className="text-white" />, 
      path: "/knowledge-base",
      variant: "secondary"
    },
    { 
      title: "Pest Control", 
      icon: <Bug size={20} className="text-white" />, 
      path: "/pest-control",
      variant: "accent"
    },
    { 
      title: "Crop Planning", 
      icon: <Calendar size={20} className="text-white" />, 
      path: "/crop-planning",
      variant: "primary"
    },
    { 
      title: "Soil Health", 
      icon: <Mountain size={20} className="text-white" />, 
      path: "/soil-health",
      variant: "default"
    },
    { 
      title: t('alerts'), 
      icon: <Bell size={20} className="text-white" />, 
      path: "/alerts",
      variant: "primary"
    },
    { 
      title: t('farmerTips'), 
      icon: <Users size={20} className="text-white" />, 
      path: "/farmer-tips",
      variant: "accent"
    },
    { 
      title: t('wasteIdeas'), 
      icon: <Recycle size={20} className="text-white" />, 
      path: "/waste-ideas",
      variant: "secondary"
    },
    { 
      title: 'Farm Subsidies', 
      icon: <DollarSign size={20} className="text-white" />, 
      path: "/farm-subsidies",
      variant: "default"
    },
  ];

  // Summary cards data for dashboard
  const summaryCards = [
    {
      title: t('soilHealth'),
      value: '72%',
      icon: <Mountain size={18} className="text-[#8B4513]" />,
      color: 'from-[#8B4513]/10 to-[#A0522D]/10',
      borderColor: 'border-[#8B4513]',
      variant: 'glass'
    },
    {
      title: t('weather'),
      value: '28°C',
      subtitle: t('partlyCloudy'),
      icon: <Cloud size={18} className="text-[#03A9F4]" />,
      color: 'from-[#03A9F4]/10 to-[#03A9F4]/5',
      borderColor: 'border-[#03A9F4]',
      variant: 'glass'
    },
    {
      title: t('marketPrice'),
      value: 'Rice: ₹2100',
      icon: <BarChart size={18} className="text-[#FF5722]" />,
      color: 'from-[#FF5722]/10 to-[#FF5722]/5',
      borderColor: 'border-[#FF5722]',
      variant: 'glass'
    }
  ];

  return (
    <Layout variant="glass">
      <div className="space-y-5 sm:space-y-7">
        {/* Summary cards at top */}
        <div className="grid grid-cols-3 gap-2">
          {summaryCards.map((card, index) => (
            <GlassCard 
              key={index}
              className={`p-3 bg-gradient-to-br ${card.color} border-l-2 ${card.borderColor}`}
              glowColor={index === 0 ? 'rgba(139, 69, 19, 0.3)' : index === 1 ? 'rgba(3, 169, 244, 0.3)' : 'rgba(255, 87, 34, 0.3)'}
            >
              <div className="flex items-center justify-between mb-1">
                <IconBadge icon={card.icon.type} variant={index === 0 ? 'soil' : index === 1 ? 'secondary' : 'primary'} size="sm" />
              </div>
              <div className="mt-1">
                <p className="text-xs text-soil/70">{card.title}</p>
                <p className="text-sm font-bold text-soil">{card.value}</p>
                {card.subtitle && <p className="text-xs text-soil/60">{card.subtitle}</p>}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Main government-inspired card */}
        <Card 
          variant="gradient"
          className="text-center py-6 px-4 overflow-hidden relative"
          hoverEffect={false}
        >
          <div className="relative z-10">
            <h1 className="text-2xl font-decorative mb-3">
              <GradientText variant="sunset">{t('empowerFarm')}</GradientText>
            </h1>
            <p className="text-soil text-sm max-w-xs mx-auto">
              {t('modernSolutions')}
            </p>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF5722]/5 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-[#FFC107]/10 to-transparent rounded-full blur-xl"></div>
        </Card>

        {/* Voice-first interaction - Central to the app */}
        <VoiceAssistant homeMode={true} />

        {/* Bhashini integration card with enhanced UI */}
        <EnhancedSection variant="glass" withPattern={true} className="border border-[#03A9F4]/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-decorative text-[#138808] mb-2 flex items-center">
                <GradientText variant="primary">Powered by Bhashini</GradientText>
                <AnimatedBadge variant="info" className="ml-2">New</AnimatedBadge>
              </h3>
              <p className="text-sm text-soil/80">
                India's national language translation mission breaking barriers with AI voice technology in 22+ Indian languages
              </p>
              <div className="flex items-center mt-3 space-x-2">
                <IconBadge icon={Mic} variant="primary" size="sm" />
                <IconBadge icon={Volume2} variant="warning" size="sm" />
                <IconBadge icon={Headphones} variant="soil" size="sm" />
                <span className="text-xs font-medium text-soil/70">Voice-first technology</span>
              </div>
            </div>
            <div className="ml-2 bg-white/80 p-2 rounded-full shadow-sm">
              <img 
                src="/lovable-uploads/a8c02636-7834-4611-9693-85f5208ccbba.png" 
                alt="Bhashini Logo" 
                className="w-16 h-16 object-contain animate-float"
                loading="lazy"
              />
            </div>
          </div>
        </EnhancedSection>
        
        <Card variant="glass" className="border border-[#03A9F4]/20 shadow-soft">
          <h3 className="font-decorative mb-3 flex items-center">
            <GradientText variant="ocean">
              <Languages size={18} className="inline mr-2" /> 
              How Bhashini Empowers Farmers
            </GradientText>
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start bg-gradient-to-r from-white/50 to-transparent p-2 rounded-lg hover:from-[#03A9F4]/5 hover:to-transparent transition-colors duration-300">
              <IconBadge icon={Globe} variant="secondary" className="mt-0.5 mr-2" />
              <p className="text-soil/80">Enables farmers to use the app in their native language, removing literacy barriers</p>
            </div>
            <div className="flex items-start bg-gradient-to-r from-white/50 to-transparent p-2 rounded-lg hover:from-[#03A9F4]/5 hover:to-transparent transition-colors duration-300">
              <IconBadge icon={Mic} variant="secondary" className="mt-0.5 mr-2" />
              <p className="text-soil/80">Voice input & output in 22+ Indian languages makes farming advice accessible to all</p>
            </div>
            <div className="flex items-start bg-gradient-to-r from-white/50 to-transparent p-2 rounded-lg hover:from-[#03A9F4]/5 hover:to-transparent transition-colors duration-300">
              <IconBadge icon={Sparkles} variant="secondary" className="mt-0.5 mr-2" />
              <p className="text-soil/80">AI-powered real-time translations increase reach to 500+ million rural Indians</p>
            </div>
          </div>
        </Card>

        <SeasonalCalendar />

        <DecorativeDivider variant="gradient" className="my-6" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-slide-up">
          {navButtons.map((button, index) => (
            <Button 
              key={button.title}
              variant={button.variant as any}
              icon={button.icon}
              fullWidth
              className="py-3 px-2 flex-col h-[80px] items-center"
              onClick={() => navigate(button.path)}
              size="sm"
              withShine={true}
            >
              <span className="mt-1 text-xs font-medium text-center">{button.title}</span>
            </Button>
          ))}
        </div>

        <Card variant="bordered-gradient" className="mt-6 p-5">
          <h2 className="text-xl font-decorative mb-3">
            <GradientText variant="primary">Why The App Matters</GradientText>
          </h2>
          <div className="space-y-3 text-sm text-soil/90">
            <div className="flex items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#FF5722]/5 transition-all duration-300">
              <IconBadge icon={Users2} variant="primary" className="mr-3 mt-0.5" />
              <p>Empowers over 1 million farmers in Telangana's Warangal district with accessible technology</p>
            </div>
            <div className="flex items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#4CAF50]/5 transition-all duration-300">
              <IconBadge icon={Smartphone} variant="success" className="mr-3 mt-0.5" />
              <p>Voice-first technology overcomes literacy barriers (57% rural literacy) through local languages</p>
            </div>
            <div className="flex items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#8B4513]/5 transition-all duration-300">
              <IconBadge icon={RefreshCw} variant="soil" className="mr-3 mt-0.5" />
              <p>Reduces crop losses by 60% and increases income by ₹500-1000/month for small farmers</p>
            </div>
            <div className="flex items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#03A9F4]/5 transition-all duration-300">
              <IconBadge icon={Globe} variant="secondary" className="mr-3 mt-0.5" />
              <p>Bridges the digital divide by providing expert farming knowledge in 22+ Indian languages</p>
            </div>
          </div>
        </Card>

        {/* Enhanced How We Impact Farming Section */}
        <EnhancedSection variant="gradient" className="mt-6 space-y-4">
          <div className="text-center">
            <h2 className="inline-block text-xl font-decorative py-2 px-6 rounded-lg bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white shadow-md mb-3">
              {t('howWeImpact')}
            </h2>
            <p className="text-sm text-soil/90 max-w-xl mx-auto mb-4 bg-white/80 rounded-lg p-3 shadow-sm">
              {t('impactDesc')}
            </p>
          </div>
          
          <Card className="bg-gradient-to-r from-[#FF5722]/20 to-[#FF5722]/5 border border-[#FF5722]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <IconBadge icon={Phone} variant="primary" size="lg" className="mr-3" withGlow />
              <div className="text-left">
                <h3 className="font-decorative text-soil">
                  <GradientText variant="primary">{t('helplineText')}</GradientText>
                </h3>
                <p className="text-[#FF5722] font-bold">{t('helplineNumber')}</p>
              </div>
            </div>
          </Card>
        </EnhancedSection>

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
