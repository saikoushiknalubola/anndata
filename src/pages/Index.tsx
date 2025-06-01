import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import CulturalShowcase from '../components/CulturalShowcase';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const stats = [
    { label: t('happyFarmers') || 'Happy Farmers', value: '10,000+' },
    { label: t('acresCultivated') || 'Acres Cultivated', value: '50,000+' },
    { label: t('increaseYield') || 'Increase in Yield', value: '30%+' },
  ];

  const features = [
    {
      title: t('cropAdvisor') || 'Crop Advisor',
      description: t('cropAdvisorDescription') || 'AI-powered advice for optimal crop selection and planting strategies.',
      link: '/crop-advisor',
    },
    {
      title: t('soilScanner') || 'Soil Scanner',
      description: t('soilScannerDescription') || 'Analyze soil composition and health with our advanced scanning technology.',
      link: '/soil-scanner',
    },
    {
      title: t('waterManagement') || 'Water Management',
      description: t('waterManagementDescription') || 'Efficient irrigation techniques and water conservation strategies.',
      link: '/water-management',
    },
    {
      title: t('marketPrices') || 'Market Prices',
      description: t('marketPricesDescription') || 'Real-time market prices for informed selling decisions.',
      link: '/market-prices',
    },
    {
      title: t('learnFarming') || 'Learn Farming',
      description: t('learnFarmingDescription') || 'Access a wealth of knowledge and tutorials to enhance your farming skills.',
      link: '/learn-farming',
    },
    {
      title: t('weatherDashboard') || 'Weather Dashboard',
      description: t('weatherDashboardDescription') || 'Stay ahead with accurate weather forecasts and farming-related alerts.',
      link: '/weather-dashboard',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <motion.section
          className="px-6 py-12 text-center bg-gradient-to-br from-leaf-50 via-white to-cream/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('welcomeToAndata') || 'Welcome to Andata AgTech'}
          </h1>
          <p className="text-lg text-soil-700 mb-8">
            {t('empoweringFarmers') || 'Empowering farmers with AI-driven solutions for sustainable agriculture.'}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/learn-farming" className="btn-primary">
              {t('learnMore') || 'Learn More'}
            </Link>
            <Link to="/crop-advisor" className="btn-secondary">
              {t('getStarted') || 'Get Started'}
            </Link>
          </div>
        </motion.section>

        {/* Cultural Showcase Section */}
        <CulturalShowcase />

        {/* Stats Section */}
        <motion.section
          className="px-6 py-16 bg-gradient-to-r from-leaf-50 to-sky-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-leaf-800 mb-8">
              {t('ourImpact') || 'Our Impact'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-leaf-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-soil-700 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section
          className="px-6 py-16 bg-cream/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-leaf-800 text-center mb-12">
              {t('keyFeatures') || 'Explore Our Key Features'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-card-gradient rounded-2xl shadow-lg p-6 hover-lift"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-leaf-700 mb-3">{feature.title}</h3>
                  <p className="text-soil-600">{feature.description}</p>
                  <Link to={feature.link} className="text-leaf-500 hover:text-leaf-700 font-medium mt-4 inline-block">
                    {t('learnMore') || 'Learn More'} &rarr;
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="px-6 py-16 bg-app-gradient text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-leaf-800 mb-8">
            {t('readyToTransform') || 'Ready to Transform Your Farm?'}
          </h2>
          <p className="text-lg text-soil-700 mb-8">
            {t('joinOurCommunity') || 'Join our community of innovative farmers and revolutionize your agricultural practices today!'}
          </p>
          <Link to="/crop-advisor" className="btn-accent">
            {t('startYourJourney') || 'Start Your Journey'}
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;
