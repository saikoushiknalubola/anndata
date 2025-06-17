
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Sprout, Users, TrendingUp, Heart, Star, ArrowRight, Leaf, Globe, Sparkles } from 'lucide-react';
import CulturalShowcase from '../components/CulturalShowcase';
import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const stats = [
    { 
      label: t('happyFarmers') || 'Happy Farmers', 
      value: '10,000+',
      icon: <Users className="text-leaf-600" size={32} />,
      description: 'Farmers empowered across India'
    },
    { 
      label: t('acresCultivated') || 'Acres Cultivated', 
      value: '50,000+',
      icon: <Sprout className="text-amber-600" size={32} />,
      description: 'Land under smart cultivation'
    },
    { 
      label: t('increaseYield') || 'Increase in Yield', 
      value: '30%+',
      icon: <TrendingUp className="text-green-600" size={32} />,
      description: 'Average productivity boost'
    },
  ];

  const features = [
    {
      title: t('cropAdvisor') || 'Crop Advisor',
      description: t('cropAdvisorDescription') || 'AI-powered advice for optimal crop selection and planting strategies.',
      link: '/crop-advisor',
      icon: <Sprout className="text-leaf-600" size={24} />,
      gradient: 'from-leaf-500 to-green-600'
    },
    {
      title: t('soilScanner') || 'Soil Scanner',
      description: t('soilScannerDescription') || 'Analyze soil composition and health with our advanced scanning technology.',
      link: '/soil-scanner',
      icon: <Globe className="text-soil-600" size={24} />,
      gradient: 'from-soil-500 to-amber-600'
    },
    {
      title: t('waterManagement') || 'Water Management',
      description: t('waterManagementDescription') || 'Efficient irrigation techniques and water conservation strategies.',
      link: '/water-management',
      icon: <Heart className="text-sky-600" size={24} />,
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      title: t('marketPrices') || 'Market Prices',
      description: t('marketPricesDescription') || 'Real-time market prices for informed selling decisions.',
      link: '/market-prices',
      icon: <TrendingUp className="text-amber-600" size={24} />,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: t('learnFarming') || 'Learn Farming',
      description: t('learnFarmingDescription') || 'Access a wealth of knowledge and tutorials to enhance your farming skills.',
      link: '/learn-farming',
      icon: <Star className="text-purple-600" size={24} />,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: t('weatherDashboard') || 'Weather Dashboard',
      description: t('weatherDashboardDescription') || 'Stay ahead with accurate weather forecasts and farming-related alerts.',
      link: '/weather-dashboard',
      icon: <Leaf className="text-emerald-600" size={24} />,
      gradient: 'from-emerald-500 to-teal-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-leaf-50 via-white to-amber-50">
      {/* Hero Section with Logo */}
      <motion.section
        className="relative px-4 md:px-6 py-12 md:py-20 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-leaf-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-200/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Logo Section */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: 0.2 
            }}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-leaf-100 via-white to-amber-100 rounded-full shadow-2xl"></div>
                <div className="absolute inset-2 bg-white rounded-full shadow-inner"></div>
                <div className="absolute inset-4">
                  <Logo />
                </div>
              </div>
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-leaf-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>
          
          {/* Brand Name */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-leaf-700 via-green-600 to-amber-600 bg-clip-text text-transparent mb-2">
              Andata AgTech
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-soil-600">
              <Sparkles className="text-amber-500" size={20} />
              <span className="font-medium">The Voice of Farmers</span>
              <Sparkles className="text-amber-500" size={20} />
            </div>
          </motion.div>
          
          {/* Hero Description */}
          <motion.p 
            className="text-lg md:text-2xl text-soil-700 mb-10 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('empoweringFarmers') || 'Empowering farmers with AI-driven solutions for sustainable agriculture and better yields.'}
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              to="/crop-advisor" 
              className="group bg-gradient-to-r from-leaf-600 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-2 hover:scale-105"
            >
              <Sprout size={24} className="group-hover:scale-110 transition-transform" />
              {t('getStarted') || 'Get Started'}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/learn-farming" 
              className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-2 hover:scale-105"
            >
              <Star size={24} className="group-hover:scale-110 transition-transform" />
              {t('learnMore') || 'Learn More'}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Cultural Showcase Section */}
      <CulturalShowcase />

      {/* Stats Section */}
      <motion.section
        className="px-4 md:px-6 py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-leaf-700 to-green-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('ourImpact') || 'Our Impact on Agriculture'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-leaf-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="p-6 bg-gradient-to-br from-leaf-50 to-amber-50 rounded-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-leaf-600 to-amber-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-soil-800">{stat.label}</h3>
                  <p className="text-base text-soil-600 leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-br from-white via-leaf-25 to-amber-25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-leaf-700 to-green-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('keyFeatures') || 'Explore Our Smart Farming Solutions'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-white/50"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col space-y-6">
                  <div className={`p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-soil-800 group-hover:text-leaf-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-base text-soil-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link 
                    to={feature.link} 
                    className="inline-flex items-center gap-3 text-leaf-600 hover:text-leaf-700 font-bold mt-auto group-hover:gap-4 transition-all duration-300 text-lg"
                  >
                    {t('learnMore') || 'Learn More'} 
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="px-4 md:px-6 py-20 md:py-32 bg-gradient-to-r from-leaf-600 via-green-600 to-amber-600 text-white text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2 
            className="text-3xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('readyToTransform') || 'Ready to Transform Your Farm?'}
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 leading-relaxed text-white/95 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('joinOurCommunity') || 'Join our community of innovative farmers and revolutionize your agricultural practices today!'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/crop-advisor" 
              className="group bg-white text-leaf-700 px-10 py-5 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-4 hover:-translate-y-2 hover:scale-105"
            >
              <Sprout size={28} className="group-hover:scale-110 transition-transform" />
              {t('startYourJourney') || 'Start Your Journey'}
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
