
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Droplet, AreaChart, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WaterManagement = () => {
  const { t } = useLanguage();
  
  const waterTips = [
    {
      title: "Drip Irrigation Systems",
      description: "Save water by delivering it directly to plant roots, reducing evaporation by up to 60%.",
      icon: <Droplet className="text-blue-500" />
    },
    {
      title: "Rainwater Harvesting",
      description: "Collect and store rainwater to use during dry periods, reducing dependence on groundwater.",
      icon: <AreaChart className="text-blue-500" />
    },
    {
      title: "Water Conservation Strategies",
      description: "Mulching, drought-resistant crops, and proper crop rotation can significantly reduce water needs.",
      icon: <CheckCircle className="text-green-500" />
    },
    {
      title: "Water Quality Testing",
      description: "Regular testing ensures irrigation water is free from contaminants that could harm crops.",
      icon: <AlertTriangle className="text-yellow-500" />
    }
  ];

  return (
    <Layout title="Water Management" showBackButton>
      <div className="space-y-6">
        <Card variant="rich" className="bg-blue-50 border border-blue-200">
          <h2 className="text-xl font-bold text-blue-700 mb-3">Optimize Your Farm's Water Usage</h2>
          <p className="text-blue-700/80">
            Efficient water management is crucial for sustainable farming. Explore techniques to conserve water,
            improve irrigation efficiency, and ensure crop health while minimizing water waste.
          </p>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {waterTips.map((tip, index) => (
            <Card key={index} className="border border-blue-100 hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-bold text-blue-700 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-to-r from-blue-500/10 to-blue-100/20 border border-blue-200">
          <h3 className="font-bold text-blue-700 mb-2">Water Conservation Calculator</h3>
          <p className="text-sm text-blue-700/80 mb-4">
            Estimate how much water and money you could save by implementing modern irrigation techniques.
          </p>
          <div className="p-4 bg-white rounded-lg border border-blue-100">
            <p className="text-center text-sm text-gray-500">
              Water management calculator coming soon!
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default WaterManagement;
