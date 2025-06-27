
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Wheat, Users, TrendingUp, Droplets, Scale, GraduationCap, CloudRain, Microscope, ArrowRight, Leaf, Sparkles } from 'lucide-react';
import CulturalShowcase from '../components/CulturalShowcase';
import Logo from '../components/Logo';
import { useIsMobile } from '../hooks/use-mobile';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const stats = [
    { 
      label: t('happyFarmers') || 'Happy Farmers', 
      value: '10,000+',
      icon: <Users className="text-[#2D5016]" size={isMobile ? 20 : 28} />,
      description: 'Farmers empowered across India'
    },
    { 
      label: t('acresCultivated') || 'Acres Cultivated', 
      value: '50,000+',
      icon: <Wheat className="text-[#F4A460]" size={isMobile ? 20 : 28} />,
      description: 'Land under smart cultivation'
    },
    { 
      label: t('increaseYield') || 'Increase in Yield', 
      value: '30%+',
      icon: <TrendingUp className="text-[#2D5016]" size={isMobile ? 20 : 28} />,
      description: 'Average productivity boost'
    },
  ];

  const features = [
    {
      title: t('cropAdvisor') || 'Crop Advisor',
      description: t('cropAdvisorDescription') || 'AI-powered recommendations for optimal crop selection, planting strategies, and yield optimization.',
      link: '/crop-advisor',
      icon: <Wheat className="text-white" size={isMobile ? 20 : 24} />,
      gradient: 'from-[#2D5016] to-[#4A7C23]'
    },
    {
      title: t('soilScanner') || 'Soil Health Scanner',
      description: t('soilScannerDescription') || 'Advanced soil composition analysis and health monitoring with scientific precision.',
      link: '/soil-scanner',
      icon: <Microscope className="text-white" size={isMobile ? 20 : 24} />,
      gradient: 'from-[#8B4513] to-[#A0522D]'
    },
    {
      title: t('waterManagement') || 'Smart Irrigation',
      description: t('waterManagementDescription') || 'Precision water management systems for optimal irrigation and conservation.',
      link: '/water-management',
      icon: <Droplets className="text-white" size={isMobile ? 20 : 24} />,
      gradient: 'from-[#1976D2] to-[#1565C0]'
    },
    {
      title: t('marketPrices') || 'Market Intelligence',
      description: t('marketPricesDescription') || 'Real-time commodity prices and market trends for informed trading decisions.',
      link: '/market-prices',
      icon: <Scale className="text-white" size={isMobile ? 20 : 24} />,
      gradient: 'from-[#F4A460] to-[#CD853F]'
    },
    {
      title: t('learnFarming') || 'Agricultural Education',
      description: t('learnFarmingDescription') || 'Comprehensive learning platform with expert guidance and modern farming techniques.',
      link: '/learn-farming',
      icon: <GraduationCap className="text-white" size={isMobile ? 20 : 24} />,
      gradient: 'from-[#7B1FA2] to-[#6A1B9A]'
    },
    {
      title: t('weatherDashboard') || 'Weather Intelligence',
      description: t('weatherDashboardDescription') || 'Professional weather forecasting and agricultural alerts for your region.',
      link: '/weather-dashboard',
      icon: <CloudRain className="text-white" size={isMobile ? 20 : 24} />,
      gradient: 'from-[#0277BD] to-[#01579B]'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-amber-50/20">
      {/* Mobile-First Hero Section */}
      <motion.section
        className="relative px-3 sm:px-4 md:px-8 py-12 sm:py-16 md:py-24 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Optimized Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-tl from-amber-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Mobile-Optimized Logo Section */}
          <motion.div 
            className="flex justify-center mb-8 sm:mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.2 
            }}
          >
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-amber-50 rounded-full shadow-xl border-2 sm:border-4 border-white/50"></div>
                <div className="absolute inset-2 sm:inset-4 bg-white rounded-full shadow-inner border border-green-100/50"></div>
                <div className="absolute inset-3 sm:inset-6">
                  <Logo />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016]/20 to-[#F4A460]/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>
          
          {/* Mobile-First Brand Section */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#2D5016] via-[#4A7C23] to-[#F4A460] bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
              Andata AgTech
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-xl md:text-2xl text-[#8B4513] font-medium">
              <Sparkles className="text-[#F4A460]" size={isMobile ? 16 : 24} />
              <span className="text-center">The Voice of Modern Agriculture</span>
              <Sparkles className="text-[#F4A460]" size={isMobile ? 16 : 24} />
            </div>
          </motion.div>
          
          {/* Mobile-Optimized Description */}
          <motion.p 
            className="text-base sm:text-lg md:text-3xl text-[#5D4037] mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-medium px-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('empoweringFarmers') || 'Transforming agriculture through intelligent technology solutions for sustainable farming and enhanced productivity.'}
          </motion.p>
          
          {/* Mobile-First Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              to="/crop-advisor" 
              className="group bg-gradient-to-r from-[#2D5016] to-[#4A7C23] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4 hover:-translate-y-1 active:scale-95 min-h-[56px]"
            >
              <Wheat size={isMobile ? 20 : 26} className="group-hover:scale-110 transition-transform" />
              {t('getStarted') || 'Get Started'}
              <ArrowRight size={isMobile ? 18 : 22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/learn-farming" 
              className="group bg-gradient-to-r from-[#F4A460] to-[#CD853F] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4 hover:-translate-y-1 active:scale-95 min-h-[56px]"
            >
              <GraduationCap size={isMobile ? 20 : 26} className="group-hover:scale-110 transition-transform" />
              {t('learnMore') || 'Explore Solutions'}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Cultural Showcase Section */}
      <CulturalShowcase />

      {/* Mobile-Optimized Stats Section */}
      <motion.section
        className="px-3 sm:px-4 md:px-8 py-12 sm:py-20 md:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-[#2D5016] to-[#4A7C23] bg-clip-text text-transparent px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('ourImpact') || 'Driving Agricultural Excellence'}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-100 p-6 sm:p-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group active:scale-95"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#2D5016] to-[#F4A460] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#5D4037]">{stat.label}</h3>
                  <p className="text-sm sm:text-lg text-[#8B4513] leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mobile-First Features Section */}
      <motion.section
        className="px-3 sm:px-4 md:px-8 py-12 sm:py-20 md:py-28 bg-gradient-to-br from-green-50/40 via-white to-amber-50/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-[#2D5016] to-[#4A7C23] bg-clip-text text-transparent px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('keyFeatures') || 'Professional Agricultural Solutions'}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/98 backdrop-blur-sm rounded-2xl border border-green-100/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-3 active:scale-95"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  <div className={`p-3 sm:p-5 bg-gradient-to-r ${feature.gradient} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5D4037] group-hover:text-[#2D5016] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-[#8B4513] leading-relaxed">
                    {feature.description}
                  </p>
                  <Link 
                    to={feature.link} 
                    className="inline-flex items-center gap-2 sm:gap-3 text-[#2D5016] hover:text-[#4A7C23] font-bold mt-auto group-hover:gap-4 transition-all duration-300 text-base sm:text-xl min-h-[44px]"
                  >
                    {t('learnMore') || 'Explore Feature'} 
                    <ArrowRight size={isMobile ? 18 : 22} className="transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mobile-First Call to Action */}
      <motion.section
        className="px-3 sm:px-4 md:px-8 py-16 sm:py-24 md:py-36 bg-gradient-to-r from-[#2D5016] via-[#4A7C23] to-[#2D5016] text-white text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-[#F4A460]/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            className="text-2xl sm:text-4xl md:text-7xl font-bold mb-6 sm:mb-10 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('readyToTransform') || 'Ready to Revolutionize Your Farm?'}
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-2xl md:text-3xl mb-10 sm:mb-16 leading-relaxed text-white/95 max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('joinOurCommunity') || 'Join thousands of progressive farmers transforming agriculture with cutting-edge technology solutions.'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/crop-advisor" 
              className="group bg-white text-[#2D5016] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 sm:gap-5 hover:-translate-y-2 active:scale-95 min-h-[64px]"
            >
              <Wheat size={isMobile ? 24 : 32} className="group-hover:scale-110 transition-transform" />
              <span className="text-center">{t('startYourJourney') || 'Start Your Agricultural Journey'}</span>
              <ArrowRight size={isMobile ? 20 : 28} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
