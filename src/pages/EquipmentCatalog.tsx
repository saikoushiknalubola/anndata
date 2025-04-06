
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Search, Filter, Tractor, ArrowRightCircle, PhoneCall, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EquipmentCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const equipment = [
    {
      id: 1,
      name: 'Advanced Tractor',
      category: 'tractor',
      price: '₹6,50,000 - ₹9,75,000',
      image: 'https://source.unsplash.com/random/300x200/?tractor',
      manufacturer: 'Mahindra & Mahindra',
      subsidyEligible: true,
      features: ['40-50 HP', 'Fuel Efficient', '4WD Option', 'Power Steering'],
      description: 'Modern tractor suitable for various farming operations with excellent fuel efficiency and durability.'
    },
    {
      id: 2,
      name: 'Rotavator',
      category: 'tillage',
      price: '₹85,000 - ₹1,20,000',
      image: 'https://source.unsplash.com/random/300x200/?rotavator',
      manufacturer: 'Sonalika',
      subsidyEligible: true,
      features: ['48-60 Blades', 'Heavy Duty', 'Adjustable Depth'],
      description: 'Efficient soil preparation equipment that helps in seedbed preparation and weed control.'
    },
    {
      id: 3,
      name: 'Seed Drill',
      category: 'sowing',
      price: '₹65,000 - ₹95,000',
      image: 'https://source.unsplash.com/random/300x200/?seed,drill',
      manufacturer: 'VST Tillers',
      subsidyEligible: true,
      features: ['9-11 Rows', 'Precise Seed Placement', 'Fertilizer Attachment'],
      description: 'Modern seed drill for accurate seed placement at proper depth and spacing.'
    },
    {
      id: 4,
      name: 'Combine Harvester',
      category: 'harvesting',
      price: '₹15,00,000 - ₹22,00,000',
      image: 'https://source.unsplash.com/random/300x200/?harvester',
      manufacturer: 'John Deere',
      subsidyEligible: false,
      features: ['100 HP Engine', 'Self-Propelled', 'Grain Tank', 'AC Cabin'],
      description: 'High-capacity combine harvester for efficient harvesting of various crops.'
    },
    {
      id: 5,
      name: 'Battery Sprayer',
      category: 'protection',
      price: '₹3,500 - ₹7,500',
      image: 'https://source.unsplash.com/random/300x200/?sprayer',
      manufacturer: 'Aspee',
      subsidyEligible: true,
      features: ['16L Capacity', 'Rechargeable Battery', 'Adjustable Nozzle'],
      description: 'Efficient battery-operated sprayer for applying pesticides and fertilizers.'
    }
  ];
  
  const filteredEquipment = equipment.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Layout title="Equipment Catalog">
      <div className="space-y-4">
        <Card variant="tricolor" className="mb-6">
          <p className="text-earth text-sm">
            Browse modern agricultural equipment to increase your farm productivity.
            Many items are eligible for government subsidies under various schemes.
          </p>
        </Card>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth/50 h-4 w-4" />
          <Input
            placeholder="Search equipment, manufacturer, or category..."
            className="pl-10 bg-white/90"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full grid grid-cols-5 bg-white/70">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tractor">Tractors</TabsTrigger>
            <TabsTrigger value="tillage">Tillage</TabsTrigger>
            <TabsTrigger value="sowing">Sowing</TabsTrigger>
            <TabsTrigger value="harvesting">Harvesting</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="space-y-4">
              {filteredEquipment.length > 0 ? (
                filteredEquipment.map((item) => (
                  <EquipmentCard key={item.id} equipment={item} />
                ))
              ) : (
                <div className="text-center py-8 text-earth/60">
                  No equipment found matching your search
                </div>
              )}
            </div>
          </TabsContent>
          
          {['tractor', 'tillage', 'sowing', 'harvesting', 'protection'].map((category) => (
            <TabsContent key={category} value={category} className="mt-4">
              <div className="space-y-4">
                {filteredEquipment.filter(item => item.category === category).length > 0 ? (
                  filteredEquipment
                    .filter(item => item.category === category)
                    .map((item) => (
                      <EquipmentCard key={item.id} equipment={item} />
                    ))
                ) : (
                  <div className="text-center py-8 text-earth/60">
                    No equipment found in this category
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

interface EquipmentCardProps {
  equipment: {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    manufacturer: string;
    subsidyEligible: boolean;
    features: string[];
    description: string;
  };
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment }) => {
  return (
    <Card variant="gradient" className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto">
          <img 
            src={equipment.image} 
            alt={equipment.name} 
            className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
          />
        </div>
        
        <div className="md:w-2/3 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-earth text-lg">{equipment.name}</h3>
              <p className="text-xs text-earth/70">{equipment.manufacturer}</p>
            </div>
            {equipment.subsidyEligible && (
              <Badge className="bg-leaf/20 text-leaf border border-leaf/30">
                <Tag className="h-3 w-3 mr-1" /> Subsidy Available
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-earth/80 mt-2">{equipment.description}</p>
          
          <div className="mt-3">
            <h4 className="text-sm font-medium text-earth">Key Features:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {equipment.features.map((feature, idx) => (
                <Badge key={idx} variant="outline" className="bg-white/60">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div className="font-semibold text-earth">
              {equipment.price}
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="text-earth border-earth hover:bg-earth/10">
                <PhoneCall className="h-4 w-4 mr-1" /> Contact Dealer
              </Button>
              <Button size="sm" className="bg-leaf text-white hover:bg-leaf/90">
                <ArrowRightCircle className="h-4 w-4 mr-1" /> Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EquipmentCatalog;
