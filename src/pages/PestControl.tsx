
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Bug, Shield, Leaf, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PestControl = () => {
  const { t } = useLanguage();
  
  const pestStrategies = [
    {
      title: "Integrated Pest Management (IPM)",
      description: "Combine biological, cultural, and chemical tools to minimize economic, health, and environmental risks.",
      icon: <Shield className="text-green-600" />
    },
    {
      title: "Biological Control Methods",
      description: "Use natural predators, parasites, and pathogens to control pest populations with minimal environmental impact.",
      icon: <Bug className="text-amber-600" />
    },
    {
      title: "Organic Pest Solutions",
      description: "Natural remedies like neem oil, garlic spray, and diatomaceous earth are effective against many common pests.",
      icon: <Leaf className="text-green-600" />
    },
    {
      title: "Early Warning Systems",
      description: "Identify pest problems before they become severe with regular monitoring and field scouting techniques.",
      icon: <AlertCircle className="text-red-500" />
    }
  ];

  return (
    <Layout title="Pest Control" showBackButton>
      <div className="space-y-6">
        <Card variant="rich" className="bg-green-50 border border-green-200">
          <h2 className="text-xl font-bold text-green-700 mb-3">Protect Your Crops From Pests</h2>
          <p className="text-green-700/80">
            Effective pest management is essential for maximizing crop yields. Discover sustainable 
            approaches to pest control that protect both your harvest and the environment.
          </p>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pestStrategies.map((strategy, index) => (
            <Card key={index} className="border border-green-100 hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  {strategy.icon}
                </div>
                <div>
                  <h3 className="font-bold text-green-700 mb-2">{strategy.title}</h3>
                  <p className="text-sm text-gray-600">{strategy.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-to-r from-green-500/10 to-green-100/20 border border-green-200">
          <h3 className="font-bold text-green-700 mb-2">Common Crop Pests</h3>
          <p className="text-sm text-green-700/80 mb-4">
            Identify and learn how to manage the most common pests affecting your crops in this region.
          </p>
          <div className="p-4 bg-white rounded-lg border border-green-100">
            <p className="text-center text-sm text-gray-500">
              Interactive pest identification guide coming soon!
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default PestControl;
