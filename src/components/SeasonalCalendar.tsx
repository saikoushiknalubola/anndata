
import React from 'react';
import Card from './Card';
import { Wheat, Cloud, Sun, Droplets } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Season {
  name: string;
  months: string;
  crops: string[];
  icon: React.ReactNode;
  color: string;
}

const SeasonalCalendar = () => {
  const { t } = useLanguage();
  
  const seasons: Season[] = [
    {
      name: "Rabi (Winter)",
      months: "October - March",
      crops: ["Wheat", "Barley", "Peas", "Mustard", "Gram"],
      icon: <Cloud size={20} className="text-blue-500" />,
      color: "bg-blue-100 border-blue-300 text-blue-700"
    },
    {
      name: "Kharif (Monsoon)",
      months: "June - October",
      crops: ["Rice", "Maize", "Jowar", "Bajra", "Cotton", "Soybean"],
      icon: <Droplets size={20} className="text-teal-500" />,
      color: "bg-teal-100 border-teal-300 text-teal-700"
    },
    {
      name: "Zaid (Summer)",
      months: "March - June",
      crops: ["Watermelon", "Muskmelon", "Cucumber", "Vegetables"],
      icon: <Sun size={20} className="text-amber-500" />,
      color: "bg-amber-100 border-amber-300 text-amber-700"
    }
  ];

  return (
    <Card className="bg-cream/80 border border-terracotta/20 shadow-sm hover:shadow-md transition-all duration-300" variant="warli">
      <h3 className="font-decorative text-lg text-soil mb-4 flex items-center gap-2 pb-2 border-b border-terracotta/20">
        <div className="p-1.5 bg-terracotta/10 rounded-full">
          <Wheat className="text-terracotta" size={22} />
        </div>
        <span>Traditional Farming Calendar</span>
      </h3>
      
      <div className="space-y-3 pb-1">
        {seasons.map((season, index) => (
          <div 
            key={index}
            className={`rounded-lg p-3 border ${season.color} relative overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-md`}
          >
            <div className="flex items-start">
              <div className="p-2 bg-white/70 rounded-full mr-3 shadow-sm border border-white/50">
                {season.icon}
              </div>
              <div>
                <h4 className="font-decorative text-base flex items-center">
                  {season.name}
                </h4>
                <p className="text-xs opacity-80 mb-2 font-medium">{season.months}</p>
                <div className="flex flex-wrap gap-1">
                  {season.crops.map((crop, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-white/70 rounded-full border border-white/50 shadow-sm">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Visual decorative element inspired by traditional patterns */}
      <div className="w-full flex justify-center mt-3">
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-transparent via-terracotta/40 to-transparent"></div>
      </div>
    </Card>
  );
};

export default SeasonalCalendar;
