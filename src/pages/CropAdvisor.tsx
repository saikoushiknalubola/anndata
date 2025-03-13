
import { useState, useEffect } from 'react';
import { Plant, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getLocations, Location } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';

const CropAdvisor = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocations();
        setLocations(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching locations:', error);
        toast({
          title: "Error",
          description: "Failed to fetch locations. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleLocationChange = (value: string) => {
    const locationId = parseInt(value);
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      setSelectedLocation(location);
      toast({
        title: "Analysis Complete",
        description: `AI recommendation for ${location.name} processed`,
        duration: 2000,
      });
    }
  };

  return (
    <Layout title="Crop Advisor" showBackButton>
      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-4">Select Your Location</h2>
          <p className="text-sm text-earth/80 mb-4">
            Our AI will analyze soil conditions, weather patterns, and historical data to recommend the best crops for your region.
          </p>
          
          <Select onValueChange={handleLocationChange} disabled={loading}>
            <SelectTrigger className="w-full border-earth/30 bg-white/70">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(location => (
                <SelectItem key={location.id} value={location.id.toString()}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Card>

        {selectedLocation && (
          <Card className="bg-gradient-to-br from-leaf/10 to-cream animate-grow-fade">
            <div className="flex items-start">
              <div className="bg-leaf text-white p-2 rounded-full mr-3">
                <Plant size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-leaf">
                  Grow {selectedLocation.crop_suggestion}
                </h3>
                <p className="text-earth mt-1">
                  {selectedLocation.reason}
                </p>
                <div className="mt-4 flex items-center text-sm text-earth/70">
                  <span className="font-medium">Location:</span>
                  <ArrowRight size={12} className="mx-1" />
                  <span>{selectedLocation.name}</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            Recommendations are based on soil conditions, weather patterns, and historical crop success rates in your region.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CropAdvisor;
