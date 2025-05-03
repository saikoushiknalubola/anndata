
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
    <Card className="bg-cream/80 border-2 border-terracotta/20">
      <h3 className="font-decorative text-lg text-soil mb-4 flex items-center gap-2">
        <Wheat className="text-terracotta" size={22} />
        <span>Traditional Farming Calendar</span>
      </h3>
      
      <div className="space-y-3">
        {seasons.map((season, index) => (
          <div 
            key={index}
            className={`rounded-lg p-3 border ${season.color} relative overflow-hidden`}
          >
            <div className="flex items-start">
              <div className="p-2 bg-white/70 rounded-full mr-3">
                {season.icon}
              </div>
              <div>
                <h4 className="font-decorative text-base">{season.name}</h4>
                <p className="text-xs opacity-80 mb-2">{season.months}</p>
                <div className="flex flex-wrap gap-1">
                  {season.crops.map((crop, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-white/70 rounded-full">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SeasonalCalendar;
