
import { useState, useEffect } from 'react';
import { BookOpen, Volume, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

// Mock data for learning resources (will be replaced with Supabase data)
const mockLearningResources = [
  {
    id: 1,
    title: "Crop Rotation Basics",
    content: "Rotate crops every season to prevent soil depletion and reduce pest buildup. Different crops use different nutrients and attract different pests, so rotation helps maintain soil health and breaks pest cycles.",
    imageUrl: "https://images.unsplash.com/photo-1543699565-003b8adda5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JvcCUyMHJvdGF0aW9ufGVufDB8fDB8fHww"
  },
  {
    id: 2,
    title: "Organic Fertilizers Guide",
    content: "Organic fertilizers like compost, manure, and green manure improve soil structure and fertility naturally. They release nutrients slowly, reduce runoff, and promote beneficial soil organisms.",
    imageUrl: "https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcG9zdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    title: "Water Conservation Tips",
    content: "Conserve water by using drip irrigation, collecting rainwater, mulching, and watering during early morning or evening to reduce evaporation. Plant drought-resistant varieties when possible.",
    imageUrl: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBjb25zZXJ2YXRpb258ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    title: "Pest Control Methods",
    content: "Implement integrated pest management (IPM) by using natural predators, crop rotation, resistant varieties, and organic pesticides like neem oil. Monitor crops regularly to catch infestations early.",
    imageUrl: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVzdCUyMGNvbnRyb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    title: "Soil Health 101",
    content: "Healthy soil contains a balance of minerals, organic matter, air, water, and microorganisms. Test soil regularly, maintain organic matter levels, avoid compaction, and use cover crops to protect soil during off-seasons.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29pbHxlbnwwfHwwfHx8MA%3D%3D"
  }
];

// Simulate TTS for now
const simulateTextToSpeech = (text: string, language: string) => {
  // In a real app, this would use an actual TTS API
  console.log(`Speaking in ${language}: ${text}`);
  
  toast({
    title: "Reading aloud",
    description: `"${text.substring(0, 50)}..." in ${language}`,
    duration: 3000,
  });
  
  return new Promise<void>(resolve => {
    setTimeout(resolve, 2000);
  });
};

interface LearningResource {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const LearnFarming = () => {
  const [resources, setResources] = useState<LearningResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [speakingId, setSpeakingId] = useState<number | null>(null);
  const { language, t } = useLanguage();
  
  useEffect(() => {
    // Simulate fetching data from Supabase
    const fetchResources = async () => {
      try {
        // In a real app, this would fetch from Supabase
        setResources(mockLearningResources);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching learning resources:', error);
        toast({
          title: "Error",
          description: "Failed to fetch learning resources. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const handleReadAloud = async (resource: LearningResource) => {
    if (speakingId === resource.id) return;
    
    setSpeakingId(resource.id);
    try {
      await simulateTextToSpeech(resource.content, language);
    } finally {
      setSpeakingId(null);
    }
  };

  return (
    <Layout title="Learn Farming" showBackButton>
      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-4">Educational Resources</h2>
          <p className="text-sm text-earth/80 mb-4">
            Expand your farming knowledge with these educational resources. Tap on any card to read more, or use the read aloud feature to listen to the content.
          </p>
          
          {loading ? (
            <div className="py-8 flex justify-center">
              <Loader2 className="animate-spin text-earth" size={30} />
            </div>
          ) : resources.length > 0 ? (
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-1">
              {resources.map((resource) => (
                <Card 
                  key={resource.id} 
                  className="bg-gradient-to-br from-leaf/10 to-white border border-leaf/20 overflow-hidden"
                >
                  <div className="relative h-40 mb-3 rounded-t-lg overflow-hidden">
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <h3 className="text-white font-semibold p-3">{resource.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <p className="text-earth text-sm leading-relaxed mb-4">
                      {resource.content}
                    </p>
                    
                    <Button
                      variant="accent"
                      icon={<Volume size={18} />}
                      onClick={() => handleReadAloud(resource)}
                      loading={speakingId === resource.id}
                      disabled={speakingId !== null}
                      className="mt-2"
                    >
                      {speakingId === resource.id ? "Reading..." : "Read Aloud"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center py-6 text-earth/70">No learning resources available at this time</p>
          )}
        </Card>

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            These educational resources are designed to help you implement best practices in your farming. Check back regularly for new content.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LearnFarming;
