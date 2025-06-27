import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Wheat, Users, TrendingUp, Droplets, Scale, GraduationCap, CloudRain, Microscope, ArrowRight, Leaf, Sparkles } from 'lucide-react';
import CulturalShowcase from '../components/CulturalShowcase';
import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stats = [
    { 
      label: t('happyFarmers') || 'Happy Farmers', 
      value: '10,000+',
      icon: <Users className="text-[#2D5016]" size={28} />,
      description: 'Farmers empowered across India'
    },
    { 
      label: t('acresCultivated') || 'Acres Cultivated', 
      value: '50,000+',
      icon: <Wheat className="text-[#F4A460]" size={28} />,
      description: 'Land under smart cultivation'
    },
    { 
      label: t('increaseYield') || 'Increase in Yield', 
      value: '30%+',
      icon: <TrendingUp className="text-[#2D5016]" size={28} />,
      description: 'Average productivity boost'
    },
  ];

  const features = [
    {
      title: t('cropAdvisor') || 'Crop Advisor',
      description: t('cropAdvisorDescription') || 'AI-powered recommendations for optimal crop selection, planting strategies, and yield optimization.',
      link: '/crop-advisor',
      icon: <Wheat className="text-white" size={24} />,
      gradient: 'from-[#2D5016] to-[#4A7C23]'
    },
    {
      title: t('soilScanner') || 'Soil Health Scanner',
      description: t('soilScannerDescription') || 'Advanced soil composition analysis and health monitoring with scientific precision.',
      link: '/soil-scanner',
      icon: <Microscope className="text-white" size={24} />,
      gradient: 'from-[#8B4513] to-[#A0522D]'
    },
    {
      title: t('waterManagement') || 'Smart Irrigation',
      description: t('waterManagementDescription') || 'Precision water management systems for optimal irrigation and conservation.',
      link: '/water-management',
      icon: <Droplets className="text-white" size={24} />,
      gradient: 'from-[#1976D2] to-[#1565C0]'
    },
    {
      title: t('marketPrices') || 'Market Intelligence',
      description: t('marketPricesDescription') || 'Real-time commodity prices and market trends for informed trading decisions.',
      link: '/market-prices',
      icon: <Scale className="text-white" size={24} />,
      gradient: 'from-[#F4A460] to-[#CD853F]'
    },
    {
      title: t('learnFarming') || 'Agricultural Education',
      description: t('learnFarmingDescription') || 'Comprehensive learning platform with expert guidance and modern farming techniques.',
      link: '/learn-farming',
      icon: <GraduationCap className="text-white" size={24} />,
      gradient: 'from-[#7B1FA2] to-[#6A1B9A]'
    },
    {
      title: t('weatherDashboard') || 'Weather Intelligence',
      description: t('weatherDashboardDescription') || 'Professional weather forecasting and agricultural alerts for your region.',
      link: '/weather-dashboard',
      icon: <CloudRain className="text-white" size={24} />,
      gradient: 'from-[#0277BD] to-[#01579B]'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-amber-50/20">
      {/* Hero Section with Enhanced Logo */}
      <motion.section
        className="relative px-4 md:px-8 py-16 md:py-24 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Professional Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-amber-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Logo Section */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.3 
            }}
          >
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-amber-50 rounded-full shadow-2xl border-4 border-white/50"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-inner border border-green-100/50"></div>
                <div className="absolute inset-6">
                  <Logo />
                </div>
              </div>
              {/* Professional glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016]/20 to-[#F4A460]/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </motion.div>
          
          {/* Professional Brand Section */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#2D5016] via-[#4A7C23] to-[#F4A460] bg-clip-text text-transparent mb-4">
              Andata AgTech
            </h1>
            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-[#8B4513] font-medium">
              <Sparkles className="text-[#F4A460]" size={24} />
              <span>The Voice of Modern Agriculture</span>
              <Sparkles className="text-[#F4A460]" size={24} />
            </div>
          </motion.div>
          
          {/* Professional Description */}
          <motion.p 
            className="text-xl md:text-3xl text-[#5D4037] mb-12 leading-relaxed max-w-5xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('empoweringFarmers') || 'Transforming agriculture through intelligent technology solutions for sustainable farming and enhanced productivity.'}
          </motion.p>
          
          {/* Professional Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link 
              to="/crop-advisor" 
              className="group bg-gradient-to-r from-[#2D5016] to-[#4A7C23] text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 hover:-translate-y-1 hover:scale-105"
            >
              <Wheat size={26} className="group-hover:scale-110 transition-transform" />
              {t('getStarted') || 'Get Started'}
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/learn-farming" 
              className="group bg-gradient-to-r from-[#F4A460] to-[#CD853F] text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 hover:-translate-y-1 hover:scale-105"
            >
              <GraduationCap size={26} className="group-hover:scale-110 transition-transform" />
              {t('learnMore') || 'Explore Solutions'}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Cultural Showcase Section */}
      <CulturalShowcase />

      {/* Professional Stats Section */}
      <motion.section
        className="px-4 md:px-8 py-20 md:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-[#2D5016] to-[#4A7C23] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('ourImpact') || 'Driving Agricultural Excellence'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-100 p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#2D5016] to-[#F4A460] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5D4037]">{stat.label}</h3>
                  <p className="text-lg text-[#8B4513] leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Professional Features Section */}
      <motion.section
        className="px-4 md:px-8 py-20 md:py-28 bg-gradient-to-br from-green-50/40 via-white to-amber-50/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-[#2D5016] to-[#4A7C23] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('keyFeatures') || 'Professional Agricultural Solutions'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/98 backdrop-blur-sm rounded-2xl border border-green-100/50 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex flex-col space-y-6">
                  <div className={`p-5 bg-gradient-to-r ${feature.gradient} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5D4037] group-hover:text-[#2D5016] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#8B4513] leading-relaxed">
                    {feature.description}
                  </p>
                  <Link 
                    to={feature.link} 
                    className="inline-flex items-center gap-3 text-[#2D5016] hover:text-[#4A7C23] font-bold mt-auto group-hover:gap-5 transition-all duration-300 text-xl"
                  >
                    {t('learnMore') || 'Explore Feature'} 
                    <ArrowRight size={22} className="transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Professional Call to Action */}
      <motion.section
        className="px-4 md:px-8 py-24 md:py-36 bg-gradient-to-r from-[#2D5016] via-[#4A7C23] to-[#2D5016] text-white text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F4A460]/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-7xl font-bold mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('readyToTransform') || 'Ready to Revolutionize Your Farm?'}
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-16 leading-relaxed text-white/95 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('joinOurCommunity') || 'Join thousands of progressive farmers transforming agriculture with cutting-edge technology solutions.'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/crop-advisor" 
              className="group bg-white text-[#2D5016] px-12 py-6 rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-5 hover:-translate-y-2 hover:scale-105"
            >
              <Wheat size={32} className="group-hover:scale-110 transition-transform" />
              {t('startYourJourney') || 'Start Your Agricultural Journey'}
              <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
