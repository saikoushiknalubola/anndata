
import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, Filter, Map } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MarketItem {
  id: number;
  type: 'buy' | 'sell';
  product: string;
  quantity: string;
  price: number;
  location: string;
  seller: string;
  contact: string;
  date: string;
  image?: string;
}

const Marketplace = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  
  // Mock data
  const marketItems: MarketItem[] = [
    {
      id: 1,
      type: 'sell',
      product: 'Organic Rice',
      quantity: '500 kg',
      price: 35,
      location: 'Hanamkonda',
      seller: 'Ramesh Kumar',
      contact: '9876543210',
      date: '2025-05-02',
      image: '/lovable-uploads/e17e17d5-c387-4c00-85cb-497be4a7a72c.png'
    },
    {
      id: 2,
      type: 'sell',
      product: 'Cotton',
      quantity: '200 kg',
      price: 65,
      location: 'Parkal',
      seller: 'Suresh Reddy',
      contact: '8765432109',
      date: '2025-05-03'
    },
    {
      id: 3,
      type: 'buy',
      product: 'Wheat Seeds',
      quantity: '50 kg',
      price: 120,
      location: 'Jammikunta',
      seller: 'Agro Supplies Ltd',
      contact: '7654321098',
      date: '2025-05-01'
    },
    {
      id: 4,
      type: 'buy',
      product: 'Organic Fertilizer',
      quantity: '100 kg',
      price: 25,
      location: 'Ananthasagar',
      seller: 'Green Earth Co.',
      contact: '6543210987',
      date: '2025-05-04',
      image: '/lovable-uploads/076d86c2-8822-48f5-8d2a-a9bce74c1509.png'
    }
  ];
  
  const filteredItems = marketItems.filter(item => 
    item.type === activeTab && 
    (searchTerm === '' || item.product.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const handleContact = (item: MarketItem) => {
    // In a real app, this would open a contact dialog or messaging system
    alert(`Contacting ${item.seller} at ${item.contact} about ${item.product}`);
  };
  
  return (
    <Layout title="Marketplace" showBackButton>
      <div className="space-y-5">
        <Tabs defaultValue="buy" className="w-full" onValueChange={(value) => setActiveTab(value as 'buy' | 'sell')}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="buy" className="text-sm">
              <ShoppingCart size={14} className="mr-1" /> Buy Products
            </TabsTrigger>
            <TabsTrigger value="sell" className="text-sm">
              <TrendingUp size={14} className="mr-1" /> Sell Crops
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 border-earth/30 bg-white"
              />
              <div className="absolute left-2.5 top-2.5 text-soil/50">
                <Filter size={16} />
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={<Map size={16} />}
              className="whitespace-nowrap"
            >
              Near Me
            </Button>
          </div>
          
          <TabsContent value="buy" className="mt-0">
            <div className="space-y-4">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <Card 
                    key={item.id} 
                    variant={item.image ? 'image-card' : 'bordered'}
                    className="hover:shadow-md transition-all"
                    imageUrl={item.image}
                    imagePosition="left"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-soil">{item.product}</h3>
                        <div className="text-sm text-soil/80 mb-1">{item.quantity}</div>
                        <div className="text-lg font-bold text-terracotta">₹{item.price}<span className="text-xs text-soil/60">/kg</span></div>
                        
                        <div className="mt-3 flex items-center text-xs text-soil/70">
                          <span className="mr-2">{item.seller}</span>
                          <span className="px-1.5 py-0.5 bg-cream rounded-full">{item.location}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="primary"
                        size="sm"
                        onClick={() => handleContact(item)}
                      >
                        Contact
                      </Button>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-soil/50">No products found matching your search</div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="sell" className="mt-0">
            <div className="space-y-4">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <Card 
                    key={item.id}
                    variant={item.image ? 'image-card' : 'bordered'}
                    className="hover:shadow-md transition-all"
                    imageUrl={item.image}
                    imagePosition="left"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-soil">{item.product}</h3>
                        <div className="text-sm text-soil/80 mb-1">{item.quantity}</div>
                        <div className="text-lg font-bold text-leaf">₹{item.price}<span className="text-xs text-soil/60">/kg</span></div>
                        
                        <div className="mt-3 flex items-center text-xs text-soil/70">
                          <span className="mr-2">{item.seller}</span>
                          <span className="px-1.5 py-0.5 bg-cream rounded-full">{item.location}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="accent"
                        size="sm"
                        onClick={() => handleContact(item)}
                      >
                        Contact
                      </Button>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-soil/50">No buyers found matching your search</div>
                </div>
              )}
              
              <div className="mt-6 flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  icon={<TrendingUp size={18} />}
                >
                  Post New Listing
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Marketplace;
