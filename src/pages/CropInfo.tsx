
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '../contexts/LanguageContext';
import { Leaf, Droplet, Sun, CloudRain, Wheat } from 'lucide-react';

const CropInfo = () => {
  const { t } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  
  const crops = [
    { id: 1, name: 'Rice', icon: <Wheat size={20} />, season: 'Kharif', water: 'High', sunlight: 'Full', soil: 'Clay loam' },
    { id: 2, name: 'Wheat', icon: <Wheat size={20} />, season: 'Rabi', water: 'Medium', sunlight: 'Full', soil: 'Loam' },
    { id: 3, name: 'Maize', icon: <Wheat size={20} />, season: 'Kharif/Rabi', water: 'Medium', sunlight: 'Full', soil: 'Sandy loam' },
    { id: 4, name: 'Cotton', icon: <Leaf size={20} />, season: 'Kharif', water: 'Medium', sunlight: 'Full', soil: 'Black soil' },
    { id: 5, name: 'Sugarcane', icon: <Leaf size={20} />, season: 'Spring', water: 'High', sunlight: 'Full', soil: 'Loam' }
  ];

  return (
    <Layout title="Crop Information" showBackButton>
      <div className="space-y-6 px-4">
        <Card variant="farm">
          <h2 className="text-lg font-semibold text-earth mb-3">Crop Database</h2>
          <p className="text-sm text-earth/80 mb-4">
            Browse through our crop information database to learn about growing conditions, water requirements, and suitable seasons.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {crops.map(crop => (
              <Card 
                key={crop.id}
                variant="bordered"
                className="p-3 hover:border-leaf"
                onClick={() => setSelectedCrop(crop.name)}
              >
                <div className="flex items-center">
                  <div className="bg-leaf/10 p-2 rounded-full mr-3">
                    {crop.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-earth">{crop.name}</h3>
                    <span className="text-xs text-earth/70">{crop.season} season</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {selectedCrop && (
          <Card className="animate-fade-in" variant="highlighted">
            <h3 className="text-xl font-semibold text-earth mb-3">{selectedCrop}</h3>
            
            <Tabs defaultValue="info">
              <TabsList className="bg-leaf/10 w-full justify-start mb-4">
                <TabsTrigger value="info">Information</TabsTrigger>
                <TabsTrigger value="growing">Growing Guide</TabsTrigger>
                <TabsTrigger value="diseases">Common Issues</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="mt-2">
                <div className="space-y-3">
                  {crops.find(c => c.name === selectedCrop) && (
                    <>
                      <div className="flex items-center">
                        <CloudRain className="text-leaf mr-2" size={18} />
                        <span className="text-sm">Season: {crops.find(c => c.name === selectedCrop)?.season}</span>
                      </div>
                      <div className="flex items-center">
                        <Droplet className="text-leaf mr-2" size={18} />
                        <span className="text-sm">Water Need: {crops.find(c => c.name === selectedCrop)?.water}</span>
                      </div>
                      <div className="flex items-center">
                        <Sun className="text-leaf mr-2" size={18} />
                        <span className="text-sm">Sunlight: {crops.find(c => c.name === selectedCrop)?.sunlight}</span>
                      </div>
                      <div className="flex items-center">
                        <Leaf className="text-leaf mr-2" size={18} />
                        <span className="text-sm">Soil Type: {crops.find(c => c.name === selectedCrop)?.soil}</span>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="growing" className="mt-2">
                <p className="text-sm text-earth/80">
                  Step-by-step guide for growing {selectedCrop}:
                </p>
                <ol className="mt-3 space-y-2 text-sm pl-5 list-decimal">
                  <li>Prepare the soil by tilling and adding compost</li>
                  <li>Plant seeds at appropriate depth and spacing</li>
                  <li>Water regularly, especially during establishment</li>
                  <li>Apply fertilizer as per recommended schedule</li>
                  <li>Monitor for pests and diseases</li>
                </ol>
              </TabsContent>
              
              <TabsContent value="diseases" className="mt-2">
                <p className="text-sm text-earth/80">
                  Common diseases and pests for {selectedCrop}:
                </p>
                <ul className="mt-3 space-y-2 text-sm pl-5 list-disc">
                  <li>Leaf spot - Fungal disease causing brown spots</li>
                  <li>Aphids - Sap-sucking insects that damage leaves</li>
                  <li>Root rot - Soil-borne pathogens affecting roots</li>
                  <li>Blight - Rapid browning and wilting of foliage</li>
                </ul>
              </TabsContent>
            </Tabs>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default CropInfo;
