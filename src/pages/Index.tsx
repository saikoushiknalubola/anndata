import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf, Bell, Users, Recycle, HelpCircle, BarChart,
  RefreshCw, Users2, Phone, BookOpen, Cloud, DollarSign,
  GraduationCap, Smartphone, Headphones, Volume2, Mic,
  Sparkles, Globe, Languages, Droplet, Bug, Calendar,
  Mountain, Camera, ShoppingCart, Database, Sun
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
  EnhancedCard, 
  GradientText, 
  IconBadge, 
  MotionButton,
  EnhancedBadge,
  SectionDivider,
  GlassContainer,
  EnhancedImage,
  AnimatedCounter,
  ProgressBar,
  FeatureCard
} from '@/components/ui/enhanced-components';
import { EnhancedProgressBar, EnhancedFeatureCard } from '@/components/ui/enhanced-components-fixes';

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
      variant: "leaf"
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
      variant: "soil"
    },
    { 
      title: "Marketplace", 
      icon: <ShoppingCart size={20} className="text-white" />, 
      path: "/marketplace",
      variant: "saffron"
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
      variant: "leaf"
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
      variant: "soil"
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
  
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <Layout variant="glass" withWeather={true}>
      <div className="space-y-5 sm:space-y-7">
        {/* Summary cards at top */}
        <motion.div 
          className="grid grid-cols-3 gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {summaryCards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <EnhancedCard 
                variant="glass"
                className={`p-3 bg-gradient-to-br ${card.color} border-l-2 ${card.borderColor}`}
                glowEffect={true}
              >
                <div className="flex items-center justify-between mb-1">
                  <IconBadge icon={card.icon.type} variant={index === 0 ? 'earth' : index === 1 ? 'sky' : 'primary'} size="sm" />
                </div>
                <div className="mt-1">
                  <p className="text-xs text-soil/90 font-medium">{card.title}</p>
                  <p className="text-sm font-bold text-soil">{card.value}</p>
                  {card.subtitle && <p className="text-xs text-soil/80">{card.subtitle}</p>}
                </div>
              </EnhancedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main government-inspired card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <EnhancedCard 
            variant="gradient"
            className="text-center py-6 px-4 overflow-hidden relative"
            hoverEffect={true}
            glowEffect={true}
            withAnimation="fadeIn"
          >
            <div className="relative z-10">
              <h1 className="text-2xl font-decorative mb-3">
                <GradientText variant="primary" withAnimation>{t('empowerFarm')}</GradientText>
              </h1>
              <p className="text-soil text-sm max-w-xs mx-auto font-medium">
                {t('modernSolutions')}
              </p>
              
              {/* Key metrics with animated counters */}
              <div className="flex justify-around mt-4 mb-2">
                <div className="text-center">
                  <AnimatedCounter 
                    value={1000000} 
                    suffix="+" 
                    className="text-lg font-bold text-soil" 
                  />
                  <p className="text-xs text-soil/90">Farmers</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    value={22} 
                    suffix="+" 
                    className="text-lg font-bold text-soil" 
                  />
                  <p className="text-xs text-soil/90">Languages</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    value={60} 
                    suffix="%" 
                    className="text-lg font-bold text-soil" 
                  />
                  <p className="text-xs text-soil/90">Crop Loss Reduction</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF5722]/5 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-[#FFC107]/10 to-transparent rounded-full blur-xl"></div>
          </EnhancedCard>
        </motion.div>

        {/* Voice-first interaction - Central to the app */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        >
          <VoiceAssistant homeMode={true} />
        </motion.div>

        {/* Bhashini integration card with enhanced UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <GlassContainer intensity="medium" className="border border-[#03A9F4]/30 p-4 hover-lift">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-decorative text-[#138808] mb-2 flex items-center">
                  <GradientText variant="primary">Powered by Bhashini</GradientText>
                  <EnhancedBadge variant="info" className="ml-2" withAnimation>New</EnhancedBadge>
                </h3>
                <p className="text-sm text-soil/90 font-medium">
                  India's national language translation mission breaking barriers with AI voice technology in 22+ Indian languages
                </p>
                <div className="flex items-center mt-3 space-x-2">
                  <IconBadge icon={Mic} variant="primary" size="sm" />
                  <IconBadge icon={Volume2} variant="harvest" size="sm" />
                  <IconBadge icon={Headphones} variant="soil" size="sm" />
                  <span className="text-xs font-medium text-soil/90">Voice-first technology</span>
                </div>
              </div>
              <motion.div 
                className="ml-2 bg-white/80 p-2 rounded-full shadow-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <img 
                  src="/lovable-uploads/a8c02636-7834-4611-9693-85f5208ccbba.png" 
                  alt="Bhashini Logo" 
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </GlassContainer>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <EnhancedCard variant="glass" className="border border-[#03A9F4]/20 shadow-soft">
            <h3 className="font-decorative mb-3 flex items-center px-4 pt-4">
              <GradientText variant="sky">
                <Languages size={18} className="inline mr-2" /> 
                How Bhashini Empowers Farmers
              </GradientText>
            </h3>
            <div className="space-y-3 text-sm px-4 pb-4">
              <div className="flex items-start bg-gradient-to-r from-white/50 to-transparent p-2 rounded-lg hover:from-[#03A9F4]/5 hover:to-transparent transition-colors duration-300">
                <IconBadge icon={Globe} variant="sky" className="mt-0.5 mr-2" />
                <p className="text-soil/90 font-medium">Enables farmers to use the app in their native language, removing literacy barriers</p>
              </div>
              <div className="flex items-start bg-gradient-to-r from-white/50 to-transparent p-2 rounded-lg hover:from-[#03A9F4]/5 hover:to-transparent transition-colors duration-300">
                <IconBadge icon={Mic} variant="sky" className="mt-0.5 mr-2" />
                <p className="text-soil/90 font-medium">Voice input & output in 22+ Indian languages makes farming advice accessible to all</p>
              </div>
              <div className="flex items-start bg-gradient-to-r from-white/50 to-transparent p-2 rounded-lg hover:from-[#03A9F4]/5 hover:to-transparent transition-colors duration-300">
                <IconBadge icon={Sparkles} variant="sky" className="mt-0.5 mr-2" />
                <p className="text-soil/90 font-medium">AI-powered real-time translations increase reach to 500+ million rural Indians</p>
              </div>
            </div>
          </EnhancedCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <EnhancedCard className="overflow-hidden shadow-lg p-0">
            <EnhancedImage
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000"
              alt="Farming in India"
              aspectRatio="16/9"
              rounded="none"
              overlay={true}
              hoverEffect="zoom"
            />
            <div className="p-4">
              <h3 className="font-decorative text-xl mb-2">
                <GradientText variant="primary">Seasonal Farming Guide</GradientText>
              </h3>
              <p className="text-soil/90 text-sm mb-3 font-medium">
                Get tailored crop recommendations based on the current season, local weather patterns, and soil conditions.
              </p>
              <EnhancedProgressBar 
                value={75} 
                max={100} 
                variant="primary" 
                size="md" 
                animated={true}
                className="mb-3"
              />
              <div className="flex justify-between gap-2">
                <MotionButton 
                  variant="primary"
                  icon={<Calendar size={16} />}
                  size="sm"
                  onClick={() => navigate('/crop-planning')}
                  className="flex-1"
                >
                  Plan Your Season
                </MotionButton>
                <MotionButton 
                  variant="outline"
                  icon={<Leaf size={16} />}
                  size="sm"
                  onClick={() => navigate('/farmer-tips')}
                  className="flex-1"
                >
                  Get Tips
                </MotionButton>
              </div>
            </div>
          </EnhancedCard>
        </motion.div>

        <SeasonalCalendar />

        <SectionDivider variant="gradient" className="my-6" />

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navButtons.map((button, index) => (
            <motion.div key={button.title} variants={itemVariants}>
              <MotionButton 
                variant={button.variant as any}
                icon={button.icon}
                fullWidth
                className="py-3 px-2 flex-col h-[80px] items-center"
                onClick={() => navigate(button.path)}
                size="sm"
                withShine={true}
              >
                <span className="mt-1 text-xs font-medium text-center">{button.title}</span>
              </MotionButton>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced "Why The App Matters" Section with Mobile-First Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <EnhancedCard variant="bordered-gradient" className="p-4 sm:p-5">
            <h2 className="text-xl font-decorative mb-3 text-center sm:text-left">
              <GradientText variant="primary">Why The App Matters</GradientText>
            </h2>
            
            {/* Mobile optimized: Stacked layout on mobile, better spacing and touch targets */}
            <div className="space-y-3 text-sm text-soil/90 font-medium">
              <motion.div 
                className="flex flex-col sm:flex-row items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#FF5722]/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-full sm:w-auto mb-2 sm:mb-0">
                  <IconBadge 
                    icon={Users2} 
                    variant="primary" 
                    className="sm:mr-3 mt-0.5" 
                    size="md"
                    withGlow 
                  />
                </div>
                <p className="text-center sm:text-left">Empowers over <span className="font-bold text-[#FF5722]">1 million farmers</span> in Telangana's Warangal district with accessible technology</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#4CAF50]/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-full sm:w-auto mb-2 sm:mb-0">
                  <IconBadge 
                    icon={Smartphone} 
                    variant="leaf" 
                    className="sm:mr-3 mt-0.5" 
                    size="md"
                    withGlow 
                  />
                </div>
                <p className="text-center sm:text-left">Voice-first technology overcomes literacy barriers (<span className="font-bold text-leaf-600">57% rural literacy</span>) through local languages</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#8B4513]/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-full sm:w-auto mb-2 sm:mb-0">
                  <IconBadge 
                    icon={RefreshCw} 
                    variant="soil" 
                    className="sm:mr-3 mt-0.5" 
                    size="md"
                    withGlow 
                  />
                </div>
                <div className="w-full text-center sm:text-left">
                  <p>Reduces crop losses by <span className="font-bold text-soil">60%</span> and increases income by <span className="font-bold text-soil">₹500-1000/month</span> for small farmers</p>
                  <div className="mt-2 mx-auto sm:mx-0 max-w-xs">
                    <EnhancedProgressBar
                      value={60} 
                      max={100} 
                      variant="soil" 
                      size="sm" 
                      animated={true}
                      label="Crop Loss Reduction"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-start bg-white/70 p-3 rounded-lg shadow-ambient hover:bg-[#03A9F4]/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-full sm:w-auto mb-2 sm:mb-0">
                  <IconBadge 
                    icon={Globe} 
                    variant="sky" 
                    className="sm:mr-3 mt-0.5" 
                    size="md"
                    withGlow 
                  />
                </div>
                <div className="w-full text-center sm:text-left">
                  <p>Bridges the digital divide by providing expert farming knowledge in <span className="font-bold text-sky-600">22+ Indian languages</span></p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1 mt-2">
                    {['हिंदी', 'తెలుగు', 'தமிழ்', 'ಕನ್ನಡ', 'ଓଡ଼ିଆ'].map((lang, i) => (
                      <span key={i} className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">
                        {lang}
                      </span>
                    ))}
                    <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">+17</span>
                  </div>
                </div>
              </motion.div>
              
              {/* New: Engaging CTA Section */}
              <motion.div 
                className="mt-4 pt-2 border-t border-dashed border-soil/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2">
                  <p className="text-xs text-soil/80 text-center sm:text-left">
                    Experience how our app is transforming farming across rural India
                  </p>
                  <MotionButton
                    variant="primary"
                    size="sm"
                    icon={<BarChart size={16} />}
                    withShine
                    onClick={() => navigate('/success-stories')}
                    className="w-full sm:w-auto"
                  >
                    See Impact Data
                  </MotionButton>
                </div>
              </motion.div>
            </div>
          </EnhancedCard>
        </motion.div>

        {/* Enhanced How We Impact Farming Section with Mobile Optimizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <EnhancedCard variant="gradient" className="mt-6 space-y-4 p-4 sm:p-5">
            <div className="text-center">
              <h2 className="inline-block text-xl font-decorative py-2 px-4 sm:px-6 rounded-lg bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white shadow-md mb-3">
                {t('howWeImpact')}
              </h2>
              <p className="text-sm text-soil/90 max-w-xl mx-auto mb-4 bg-white/80 rounded-lg p-3 shadow-sm font-medium">
                {t('impactDesc')}
              </p>
            </div>
            
            <EnhancedCard className="bg-gradient-to-r from-[#FF5722]/20 to-[#FF5722]/5 border border-[#FF5722]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-center p-4 text-center sm:text-left">
                <IconBadge icon={Phone} variant="primary" size="lg" className="mb-3 sm:mb-0 sm:mr-3" withGlow />
                <div>
                  <h3 className="font-decorative text-soil">
                    <GradientText variant="primary">{t('helplineText')}</GradientText>
                  </h3>
                  <p className="text-[#FF5722] font-bold">{t('helplineNumber')}</p>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-auto">
                  <MotionButton
                    variant="outline"
                    size="sm"
                    icon={<Phone size={14} />}
                    onClick={() => navigate('/helpline')}
                  >
                    Call Now
                  </MotionButton>
                </div>
              </div>
            </EnhancedCard>
          </EnhancedCard>
        </motion.div>

        {/* Featured Stories Section with Mobile Optimizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="mt-8">
            <h2 className="text-xl font-decorative mb-4 text-center">
              <GradientText variant="primary">Success Stories</GradientText>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <EnhancedFeatureCard
                title="Increased Crop Yield by 40%"
                description="Raju from Karimnagar improved his rice production using our soil analysis and crop recommendation system."
                icon={<Leaf size={24} className="text-leaf-600" />}
                variant="glass"
                onClick={() => navigate('/success-stories')}
                badge="Featured"
              />
              
              <EnhancedFeatureCard
                title="Water Usage Reduced by 30%"
                description="Lakshmi from Warangal implemented our water management techniques for sustainable cotton farming."
                icon={<Droplet size={24} className="text-sky-600" />}
                variant="glass"
                onClick={() => navigate('/success-stories')}
                badge="New"
              />
            </div>
          </div>
        </motion.div>

        {/* Add the disclaimer component */}
        <Disclaimer />

        <motion.div 
          className="text-center mt-4 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-xs text-soil/80 font-medium">
            {t('version')}
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default HomePage;
