
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wheat, MapPin, Calendar, Thermometer, Droplets, Search } from 'lucide-react';
import MobileHeader from '../components/MobileHeader';
import MobileBottomNav from '../components/MobileBottomNav';
import MobileCard from '../components/MobileCard';
import MobileButton from '../components/MobileButton';
import { Input } from '@/components/ui/input';

const MobileCropAdvisor: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [location, setLocation] = useState('');

  const cropRecommendations = [
    {
      name: 'Rice',
      season: 'Kharif',
      yield: '4-5 tons/hectare',
      duration: '120-150 days',
      investment: '₹25,000/hectare',
      profit: '₹35,000/hectare',
      suitability: 95,
      icon: '🌾'
    },
    {
      name: 'Wheat',
      season: 'Rabi',
      yield: '3-4 tons/hectare',
      duration: '110-130 days',
      investment: '₹20,000/hectare',
      profit: '₹30,000/hectare',
      suitability: 88,
      icon: '🌾'
    },
    {
      name: 'Tomato',
      season: 'Year-round',
      yield: '25-30 tons/hectare',
      duration: '90-120 days',
      investment: '₹50,000/hectare',
      profit: '₹80,000/hectare',
      suitability: 82,
      icon: '🍅'
    }
  ];

  const weatherData = {
    temperature: '28°C',
    humidity: '65%',
    rainfall: '25mm',
    forecast: 'Sunny with light rain expected'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-leaf-25 via-white to-saffron-25 pb-20">
      <MobileHeader title="Crop Advisor" showBackButton />
      
      <div className="pt-20 px-4 space-y-4">
        {/* Location Input */}
        <MobileCard>
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-leaf-600" />
            <h2 className="font-semibold text-soil-800">Your Location</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-soil-400" />
            <Input
              placeholder="Enter your location..."
              className="pl-10"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </MobileCard>

        {/* Weather Info */}
        <MobileCard variant="gradient">
          <div className="flex items-center gap-3 mb-3">
            <Thermometer size={20} className="text-saffron-600" />
            <h2 className="font-semibold text-soil-800">Weather Conditions</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-soil-800">{weatherData.temperature}</div>
              <div className="text-xs text-soil-600">Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-soil-800">{weatherData.humidity}</div>
              <div className="text-xs text-soil-600">Humidity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-soil-800">{weatherData.rainfall}</div>
              <div className="text-xs text-soil-600">Rainfall</div>
            </div>
          </div>
          <p className="text-sm text-soil-600 text-center">{weatherData.forecast}</p>
        </MobileCard>

        {/* Crop Recommendations */}
        <MobileCard>
          <div className="flex items-center gap-3 mb-4">
            <Wheat size={20} className="text-leaf-600" />
            <h2 className="font-semibold text-soil-800">Recommended Crops</h2>
          </div>
          
          <div className="space-y-3">
            {cropRecommendations.map((crop, index) => (
              <motion.div
                key={crop.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <MobileCard 
                  variant="bordered" 
                  clickable
                  onClick={() => setSelectedCrop(crop.name)}
                  className={selectedCrop === crop.name ? 'border-leaf-400 bg-leaf-25' : ''}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{crop.icon}</div>
                      <div>
                        <h3 className="font-semibold text-soil-800">{crop.name}</h3>
                        <p className="text-sm text-soil-600">{crop.season} Season</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-leaf-600">{crop.suitability}%</div>
                      <div className="text-xs text-soil-600">Suitable</div>
                    </div>
                  </div>
                  
                  {selectedCrop === crop.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-leaf-200"
                    >
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-soil-600">Yield:</span>
                          <div className="font-semibold text-soil-800">{crop.yield}</div>
                        </div>
                        <div>
                          <span className="text-soil-600">Duration:</span>
                          <div className="font-semibold text-soil-800">{crop.duration}</div>
                        </div>
                        <div>
                          <span className="text-soil-600">Investment:</span>
                          <div className="font-semibold text-soil-800">{crop.investment}</div>
                        </div>
                        <div>
                          <span className="text-soil-600">Expected Profit:</span>
                          <div className="font-semibold text-leaf-600">{crop.profit}</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <MobileButton size="sm" className="flex-1">
                          View Details
                        </MobileButton>
                        <MobileButton variant="outline" size="sm" className="flex-1">
                          Add to Plan
                        </MobileButton>
                      </div>
                    </motion.div>
                  )}
                </MobileCard>
              </motion.div>
            ))}
          </div>
        </MobileCard>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <MobileButton variant="primary" fullWidth>
            Get Detailed Report
          </MobileButton>
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
};

export default MobileCropAdvisor;
