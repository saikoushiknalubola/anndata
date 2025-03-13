
import { useState, useEffect } from 'react';
import { Users, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getFarmerTips, FarmerTip } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';

const FarmerTips = () => {
  const [tips, setTips] = useState<FarmerTip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const data = await getFarmerTips();
        setTips(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching farmer tips:', error);
        toast({
          title: "Error",
          description: "Failed to fetch farmer tips. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  return (
    <Layout title="Farmer Tips" showBackButton>
      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-4">Knowledge Sharing</h2>
          <p className="text-sm text-earth/80 mb-4">
            Learn from experienced farmers in your community. These tips have been collected from successful farmers across the region.
          </p>
          
          {loading ? (
            <div className="py-8 flex justify-center">
              <Loader2 className="animate-spin text-earth" size={30} />
            </div>
          ) : tips.length > 0 ? (
            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {tips.map((tip, index) => (
                <div 
                  key={tip.id}
                  className="p-4 rounded-lg border border-leaf/30 bg-gradient-to-br from-white to-leaf/5"
                >
                  <div className="flex items-start">
                    <Users size={18} className="text-leaf mr-2 mt-0.5" />
                    <p className="text-earth text-sm leading-relaxed">{tip.tip}</p>
                  </div>
                  
                  <div className="flex justify-end mt-2">
                    <span className="text-xs text-earth/60">
                      Tip #{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-6 text-earth/70">No farmer tips available at this time</p>
          )}
        </Card>

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            These tips are shared by farmers with years of experience. They are meant as suggestions, not absolute rules. Apply them wisely according to your specific conditions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FarmerTips;
