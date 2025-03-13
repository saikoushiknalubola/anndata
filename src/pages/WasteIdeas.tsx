
import { useState, useEffect } from 'react';
import { Recycle, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getWasteIdeas, WasteIdea } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';

const WasteIdeas = () => {
  const [ideas, setIdeas] = useState<WasteIdea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const data = await getWasteIdeas();
        setIdeas(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching waste ideas:', error);
        toast({
          title: "Error",
          description: "Failed to fetch waste ideas. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <Layout title="Waste Ideas" showBackButton>
      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-4">Farm Waste Recycling</h2>
          <p className="text-sm text-earth/80 mb-4">
            Discover innovative ways to reuse agricultural waste. Turn farm byproducts into valuable resources.
          </p>
          
          {loading ? (
            <div className="py-8 flex justify-center">
              <Loader2 className="animate-spin text-earth" size={30} />
            </div>
          ) : ideas.length > 0 ? (
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {ideas.map((idea, index) => (
                <Card
                  key={idea.id}
                  className="bg-gradient-to-br from-earth/10 to-cream border-earth/20"
                >
                  <div className="flex">
                    <div className="bg-earth/90 text-white p-2 rounded-full mr-3">
                      <Recycle size={20} />
                    </div>
                    <div>
                      <p className="text-earth text-sm leading-relaxed">
                        {idea.idea}
                      </p>
                      <div className="flex justify-end mt-2">
                        <span className="text-xs text-earth/60">
                          Idea #{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center py-6 text-earth/70">No waste recycling ideas available at this time</p>
          )}
        </Card>

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            These sustainable practices help reduce environmental impact while potentially creating additional income streams for your farm.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default WasteIdeas;
