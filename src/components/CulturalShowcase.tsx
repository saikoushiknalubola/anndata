
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Smartphone, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CulturalShowcase: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate in your native language with advanced AI assistance"
    },
    {
      icon: Users,
      title: "Community Wisdom",
      description: "Connect with farmers across India sharing traditional knowledge"
    },
    {
      icon: Smartphone,
      title: "Modern Technology",
      description: "Latest farming insights delivered through intuitive mobile experience"
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description: "Preserving and enhancing traditional farming practices with AI"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-200 to-red-200 transform rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Bridging Tradition with Technology
              </motion.h2>
              
              <motion.p 
                className="text-lg text-slate-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Experience farming wisdom that spans generations, now enhanced with AI-powered insights. 
                Our platform respects traditional knowledge while embracing modern innovation.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">Join 10,000+ farmers already using our platform</span>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                From Punjab's wheat fields to Kerala's spice gardens, farmers across India trust our AI-powered 
                guidance for better yields and sustainable practices.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-200 to-red-200 p-1">
              <div className="rounded-3xl overflow-hidden bg-white">
                <img
                  src="/lovable-uploads/9aa386f1-cd35-4869-b4ec-5f0ff72ab2b2.png"
                  alt="Farmers using modern technology while maintaining traditional values"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating language indicators */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-orange-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">हिंदी</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-red-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">English</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-pink-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">తెలుగు</span>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CulturalShowcase;
