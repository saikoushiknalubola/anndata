
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Calendar, TrendingUp, BarChart2, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CropPlanning = () => {
  const { t } = useLanguage();
  
  const planningTools = [
    {
      title: "Seasonal Crop Calendar",
      description: "Plan your planting and harvesting schedule based on seasonal patterns and local climate conditions.",
      icon: <Calendar className="text-purple-600" />
    },
    {
      title: "Crop Rotation Strategies",
      description: "Improve soil health and reduce pest pressure by optimizing your crop rotation sequences.",
      icon: <Compass className="text-blue-600" />
    },
    {
      title: "Market Demand Forecasting",
      description: "Align your crop planning with projected market demands to maximize potential profits.",
      icon: <TrendingUp className="text-orange-600" />
    },
    {
      title: "Yield Estimation Tools",
      description: "Predict potential harvest volumes to better plan your resource allocation and marketing strategy.",
      icon: <BarChart2 className="text-green-600" />
    }
  ];

  return (
    <Layout title="Crop Planning" showBackButton>
      <div className="space-y-6">
        <Card variant="rich" className="bg-purple-50 border border-purple-200">
          <h2 className="text-xl font-bold text-purple-700 mb-3">Strategic Crop Planning</h2>
          <p className="text-purple-700/80">
            Effective crop planning is the foundation of successful farming. Develop strategies that maximize 
            yields, minimize risks, and optimize your farm's resources throughout the growing season.
          </p>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {planningTools.map((tool, index) => (
            <Card key={index} className="border border-purple-100 hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="font-bold text-purple-700 mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-to-r from-purple-500/10 to-purple-100/20 border border-purple-200">
          <h3 className="font-bold text-purple-700 mb-2">Climate-Smart Planning</h3>
          <p className="text-sm text-purple-700/80 mb-4">
            Adapt your crop planning to changing climate conditions and extreme weather patterns.
          </p>
          <div className="p-4 bg-white rounded-lg border border-purple-100">
            <p className="text-center text-sm text-gray-500">
              Climate-smart planning tools coming soon!
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default CropPlanning;
