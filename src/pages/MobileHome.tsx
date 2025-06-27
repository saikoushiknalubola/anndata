
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wheat, Droplets, Mountain, BarChart3, BookOpen, Bell, TrendingUp, Users, Leaf } from 'lucide-react';
import MobileHeader from '../components/MobileHeader';
import MobileBottomNav from '../components/MobileBottomNav';
import MobileCard from '../components/MobileCard';
import MobileButton from '../components/MobileButton';
import { useLanguage } from '../contexts/LanguageContext';

const MobileHome: React.FC = () => {
  const { t } = useLanguage();

  const quickActions = [
    { 
      title: 'Crop Advisor', 
      description: 'AI-powered crop recommendations',
      icon: <Wheat size={24} className="text-leaf-600" />,
      path: '/crop-advisor',
      color: 'from-leaf-500 to-leaf-600'
    },
    { 
      title: 'Soil Scanner', 
      description: 'Check your soil health',
      icon: <Mountain size={24} className="text-soil-600" />,
      path: '/soil-scanner',
      color: 'from-soil-500 to-soil-600'
    },
    { 
      title: 'Water Tips', 
      description: 'Smart irrigation guidance',
      icon: <Droplets size={24} className="text-sky-600" />,
      path: '/water-management',
      color: 'from-sky-500 to-sky-600'
    },
    { 
      title: 'Market Prices', 
      description: 'Real-time crop prices',
      icon: <BarChart3 size={24} className="text-saffron-600" />,
      path: '/market-prices',
      color: 'from-saffron-500 to-saffron-600'
    }
  ];

  const stats = [
    { label: 'Happy Farmers', value: '10,000+', icon: <Users size={20} /> },
    { label: 'Acres Cultivated', value: '50,000+', icon: <Wheat size={20} /> },
    { label: 'Yield Increase', value: '30%+', icon: <TrendingUp size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-leaf-25 via-white to-saffron-25 pb-20">
      <MobileHeader />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-20 px-4 pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <motion.div
            className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-leaf-100 to-leaf-200 rounded-full flex items-center justify-center shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Leaf size={32} className="text-leaf-600" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-soil-800 mb-2">
            Welcome to Andata
          </h1>
          <p className="text-soil-600 text-lg">
            Your Smart Farming Companion
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={action.path}>
                <MobileCard 
                  variant="glass" 
                  clickable 
                  className="h-32 flex flex-col items-center justify-center text-center hover:shadow-xl"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center mb-2 shadow-md`}>
                    {action.icon}
                  </div>
                  <h3 className="font-semibold text-soil-800 text-sm mb-1">
                    {action.title}
                  </h3>
                  <p className="text-xs text-soil-600 leading-tight">
                    {action.description}
                  </p>
                </MobileCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <MobileCard variant="gradient" className="mb-6">
          <h2 className="text-lg font-semibold text-soil-800 mb-4 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-leaf-600">{stat.icon}</span>
                </div>
                <div className="text-2xl font-bold text-soil-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-soil-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </MobileCard>

        {/* Quick Access */}
        <div className="flex gap-3">
          <Link to="/learn-farming" className="flex-1">
            <MobileButton variant="primary" fullWidth icon={<BookOpen size={18} />}>
              Learn Farming
            </MobileButton>
          </Link>
          <Link to="/alerts" className="flex-1">
            <MobileButton variant="outline" fullWidth icon={<Bell size={18} />}>
              Alerts
            </MobileButton>
          </Link>
        </div>
      </motion.section>

      <MobileBottomNav />
    </div>
  );
};

export default MobileHome;
