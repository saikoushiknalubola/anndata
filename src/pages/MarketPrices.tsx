
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronUp, ChevronDown, MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MarketPrices = () => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedState, setSelectedState] = useState('all');
  
  const cropPrices = [
    { name: 'Rice (Common)', price: 2100, unit: 'per quintal', location: 'Punjab', change: '+120' },
    { name: 'Wheat', price: 2200, unit: 'per quintal', location: 'Haryana', change: '+80' },
    { name: 'Maize', price: 1850, unit: 'per quintal', location: 'Bihar', change: '-40' },
    { name: 'Cotton', price: 6500, unit: 'per quintal', location: 'Gujarat', change: '+350' },
    { name: 'Soybean', price: 4200, unit: 'per quintal', location: 'Madhya Pradesh', change: '+125' },
    { name: 'Sugarcane', price: 350, unit: 'per quintal', location: 'Uttar Pradesh', change: '+15' },
    { name: 'Onion', price: 2800, unit: 'per quintal', location: 'Maharashtra', change: '-200' },
    { name: 'Potato', price: 1200, unit: 'per quintal', location: 'West Bengal', change: '+90' },
    { name: 'Tomato', price: 1650, unit: 'per quintal', location: 'Karnataka', change: '+310' },
  ];
  
  const states = ['Punjab', 'Haryana', 'Bihar', 'Gujarat', 'Madhya Pradesh', 'Uttar Pradesh', 'Maharashtra', 'West Bengal', 'Karnataka'];
  
  const filteredPrices = cropPrices
    .filter(crop => 
      crop.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedState === 'all' || crop.location === selectedState)
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  
  return (
    <Layout title="Market Prices">
      <div className="space-y-4">
        <Card variant="tricolor" className="mb-6">
          <p className="text-earth text-sm">
            Get the latest market prices of agricultural commodities across major markets in India.
            Updated daily to help farmers make informed decisions.
          </p>
        </Card>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-earth/40" />
            <Input
              placeholder="Search crops..."
              className="pl-9 bg-white/80"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-full sm:w-[180px] bg-white/80">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex justify-between items-center px-3 py-2 bg-gradient-to-r from-leaf/10 to-transparent rounded-md">
          <div className="text-sm font-medium text-earth">Showing {filteredPrices.length} results</div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleSortOrder}
            className="text-sm flex items-center"
          >
            Price {sortOrder === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
          </Button>
        </div>
        
        <div className="space-y-3 pb-4">
          {filteredPrices.length > 0 ? (
            filteredPrices.map((crop, index) => (
              <Card 
                key={index} 
                variant={index % 2 === 0 ? "farm" : "default"}
                className="flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-semibold text-earth">{crop.name}</h3>
                  <div className="flex items-center text-xs text-earth/70 mt-1">
                    <MapPin className="h-3 w-3 mr-1" /> {crop.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-leaf">₹{crop.price}</div>
                  <div className={`text-xs font-medium ${crop.change.startsWith('+') ? 'text-leaf' : 'text-saffron'}`}>
                    {crop.change} {crop.change.startsWith('+') ? '▲' : '▼'}
                  </div>
                  <div className="text-xs text-earth/60">{crop.unit}</div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-8 text-earth/60">
              No crop prices found matching your search
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MarketPrices;
