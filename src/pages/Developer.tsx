
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Globe, Code, Laptop, Rocket, Star, Award, BookOpen } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Developer = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout title="Developer" showBackButton>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <div className="animate-grow-fade relative mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Code size={isMobile ? 40 : 60} className="text-indigo-600" />
            </div>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-1">
            <span className="inline-block">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 ${mounted ? 'animate-pulse' : ''}`}>
                Saikoushik Nalubola
              </span>
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-indigo-800 mb-4">🚀 Developer | AI & Robotics Enthusiast | Open-Source Contributor</p>
          
          <div className="flex justify-center space-x-3 mb-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors">
              <Github size={isMobile ? 16 : 18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
              <Linkedin size={isMobile ? 16 : 18} />
            </a>
            <a href="https://portfolio.com/" target="_blank" rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors">
              <Globe size={isMobile ? 16 : 18} />
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 animate-fade-in">
          <h3 className="flex items-center text-lg font-semibold text-indigo-800 mb-3">
            <Laptop size={20} className="mr-2 text-indigo-600" />
            Skills & Expertise
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-indigo-700 mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'C++', 'Java', 'HTML/CSS'].map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-indigo-700 mb-2">AI/ML & Data Science</h4>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV'].map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-indigo-700 mb-2">Web Development</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'].map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h3 className="flex items-center text-lg font-semibold text-indigo-800 mb-3">
            <Rocket size={20} className="mr-2 text-indigo-600" />
            Key Projects
          </h3>
          
          <div className="space-y-4">
            <div className="p-3 border border-indigo-100 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
              <h4 className="text-sm font-bold text-indigo-800 mb-1">🔐 Garuda OS</h4>
              <p className="text-xs text-indigo-700 mb-2">A Privacy-First Android-Based Operating System</p>
              <ul className="text-xs text-indigo-600 list-disc list-inside">
                <li>Hardened security configurations, no Google dependencies</li>
                <li>Focused on data freedom and device-level encryption</li>
              </ul>
            </div>
            
            <div className="p-3 border border-blue-100 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <h4 className="text-sm font-bold text-indigo-800 mb-1">💧 Solar-Powered Autonomous Water Purification Drone</h4>
              <p className="text-xs text-indigo-700 mb-2">Because water doesn't clean itself — but AI can help</p>
              <ul className="text-xs text-indigo-600 list-disc list-inside">
                <li>Solar-powered drone with object-detection & water-quality sensors</li>
                <li>Autonomous navigation using AI pathfinding & obstacle avoidance</li>
              </ul>
            </div>
            
            <div className="p-3 border border-purple-100 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <h4 className="text-sm font-bold text-indigo-800 mb-1">🤖 AI Farming Assistant</h4>
              <p className="text-xs text-indigo-700 mb-2">Helping farmers with precision, not just predictions</p>
              <ul className="text-xs text-indigo-600 list-disc list-inside">
                <li>Built a voice-based chatbot to give crop suggestions & pest warnings</li>
                <li>Integrated soil-quality mapping & weather forecasting APIs</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <h3 className="flex items-center text-lg font-semibold text-indigo-800 mb-3">
            <Star size={20} className="mr-2 text-indigo-600" />
            Currently Exploring
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200">
              <h4 className="text-sm font-medium text-purple-800">Generative AI</h4>
              <p className="text-xs text-purple-700">Using LLMs for multilingual education & voice assistants</p>
            </div>
            
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200">
              <h4 className="text-sm font-medium text-blue-800">Drone Swarming</h4>
              <p className="text-xs text-blue-700">Algorithms for coordinated disaster management</p>
            </div>
            
            <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-200">
              <h4 className="text-sm font-medium text-indigo-800">Secure Mobile OS</h4>
              <p className="text-xs text-indigo-700">Making Garuda OS scalable for mass use</p>
            </div>
            
            <div className="p-3 rounded-lg bg-gradient-to-br from-pink-100 to-pink-50 border border-pink-200">
              <h4 className="text-sm font-medium text-pink-800">FOSS</h4>
              <p className="text-xs text-pink-700">Contributing to open-source projects in AI & privacy</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md p-4 sm:p-6 text-white text-center animate-fade-in" style={{animationDelay: "0.6s"}}>
          <BookOpen size={24} className="inline-block mb-2" />
          <p className="text-sm mb-2 font-medium">⚡ Fun Fact</p>
          <p className="text-xs sm:text-sm">
            I turned an old bike into an electric one with reverse gear. Why?<br />
            Because even innovation sometimes needs to back up before launching forward.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Developer;
