
import { useState, useEffect } from 'react';
import { Users, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getFarmerTips, FarmerTip } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';
import { GradientText, IconBadge, GlassContainer, DecorativeDivider } from '@/components/ui/enhanced-ui';

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
    <Layout title="Farmer Tips" showBackButton variant="gradient">
      <div className="space-y-6">
        <Card variant="glass" className="shadow-soft">
          <h2 className="text-lg font-semibold mb-4">
            <GradientText variant="earth">Knowledge Sharing</GradientText>
          </h2>
          <p className="text-sm text-earth/80 mb-4 bg-white/50 p-3 rounded-lg">
            Learn from experienced farmers in your community. These tips have been collected from successful farmers across the region.
          </p>
          
          <DecorativeDivider variant="gradient" className="my-4" />
          
          {loading ? (
            <div className="py-8 flex justify-center">
              <div className="bg-[#4CAF50]/10 p-4 rounded-full relative">
                <Loader2 className="animate-spin text-[#4CAF50]" size={30} />
                <div className="absolute inset-0 rounded-full border-2 border-[#4CAF50]/20 border-t-[#4CAF50] animate-spin"></div>
              </div>
            </div>
          ) : tips.length > 0 ? (
            <GlassContainer className="max-h-80 overflow-y-auto pr-1 p-3 custom-scrollbar">
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <Card 
                    key={tip.id}
                    variant={index % 3 === 0 ? "gradient" : index % 3 === 1 ? "glass" : "bordered-gradient"}
                    className="hover-lift transform transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <IconBadge icon={Users} variant="primary" className="mr-3 mt-0.5" />
                      <div>
                        <p className="text-earth text-sm leading-relaxed">{tip.tip}</p>
                        
                        <div className="flex justify-end mt-2">
                          <span className="text-xs text-earth/60 bg-white/50 px-2 py-0.5 rounded-full">
                            Tip #{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </GlassContainer>
          ) : (
            <div className="text-center py-6 bg-white/50 rounded-lg">
              <p className="text-earth/70">No farmer tips available at this time</p>
            </div>
          )}
        </Card>

        <div className="text-center mt-4 p-4 bg-gradient-to-r from-[#4CAF50]/10 to-[#8BC34A]/10 rounded-xl shadow-soft">
          <p className="text-sm text-earth/80">
            These tips are shared by farmers with years of experience. They are meant as suggestions, not absolute rules. Apply them wisely according to your specific conditions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FarmerTips;
