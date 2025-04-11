
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Sprout, Thermometer, Droplets, Mountain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

const SoilHealth = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const soilStrategies = [
    {
      title: "Soil Testing & Analysis",
      description: "Regular soil testing provides crucial insights into nutrient levels, pH, and organic matter content.",
      icon: <Thermometer className="text-brown-600" size={isMobile ? 16 : 20} />
    },
    {
      title: "Cover Cropping Benefits",
      description: "Protect soil from erosion, add organic matter, and suppress weeds with strategic cover crops.",
      icon: <Sprout className="text-green-600" size={isMobile ? 16 : 20} />
    },
    {
      title: "Soil Moisture Management",
      description: "Optimize irrigation schedules and techniques to maintain ideal soil moisture levels for crop health.",
      icon: <Droplets className="text-blue-600" size={isMobile ? 16 : 20} />
    },
    {
      title: "Erosion Control Methods",
      description: "Implement contour farming, terracing, and windbreaks to protect your valuable topsoil.",
      icon: <Mountain className="text-amber-700" size={isMobile ? 16 : 20} />
    }
  ];

  return (
    <Layout title="Soil Health" showBackButton>
      <div className="space-y-6">
        <Card variant="rich" className="bg-amber-50 border border-amber-200">
          <h2 className="text-xl font-bold text-amber-700 mb-3">Nurture Your Soil Ecosystem</h2>
          <p className="text-amber-700/80">
            Healthy soil is the foundation of productive farming. Discover strategies to improve 
            soil structure, boost organic matter, and foster beneficial soil microorganisms.
          </p>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {soilStrategies.map((strategy, index) => (
            <Card key={index} className="border border-amber-100 hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  {strategy.icon}
                </div>
                <div>
                  <h3 className="font-bold text-amber-700 mb-2">{strategy.title}</h3>
                  <p className="text-sm text-gray-600">{strategy.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-to-r from-amber-500/10 to-amber-100/20 border border-amber-200">
          <h3 className="font-bold text-amber-700 mb-2">Soil Health Assessment</h3>
          <p className="text-sm text-amber-700/80 mb-4">
            Evaluate your soil's current health status and receive personalized recommendations.
          </p>
          <div className="p-4 bg-white rounded-lg border border-amber-100">
            <p className="text-center text-sm text-gray-500">
              Interactive soil health assessment tool coming soon!
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default SoilHealth;
