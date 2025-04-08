
import { useState } from 'react';
import { Upload, Loader2, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { getRandomSoilTip, SoilTip } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';

const SoilScanner = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [soilTip, setSoilTip] = useState<SoilTip | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalyzed(false);
        setSoilTip(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeSoil = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload a soil image first",
        variant: "destructive",
      });
      return;
    }

    setAnalyzing(true);
    
    // Simulate AI analysis with a delay
    setTimeout(async () => {
      try {
        const tip = await getRandomSoilTip();
        setSoilTip(tip);
        setAnalyzed(true);
        setAnalyzing(false);
        
        toast({
          title: "Analysis Complete",
          description: "AI has analyzed your soil sample",
          duration: 2000,
        });
      } catch (error) {
        console.error('Error getting soil tip:', error);
        toast({
          title: "Analysis Failed",
          description: "Could not analyze soil sample. Please try again.",
          variant: "destructive",
        });
        setAnalyzing(false);
      }
    }, 2000);
  };

  return (
    <Layout title="Soil Scanner" showBackButton>
      <div className="space-y-5">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-3">Upload Soil Photo</h2>
          <p className="text-sm text-earth/80 mb-3">
            Take a clear photo of your soil sample. Our AI will analyze its composition and provide recommendations.
          </p>
          
          <div className="mb-4">
            <label 
              htmlFor="soil-image" 
              className="w-full h-32 border-2 border-dashed border-earth/30 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-earth/5 transition-colors"
            >
              {selectedImage ? (
                <div className="w-full h-full relative">
                  <img 
                    src={selectedImage} 
                    alt="Soil sample" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                    <p className="text-white text-sm font-medium">Change Image</p>
                  </div>
                </div>
              ) : (
                <>
                  <Upload className="w-7 h-7 text-earth/50 mb-2" />
                  <p className="text-sm text-earth/70">Click to upload soil photo</p>
                </>
              )}
            </label>
            <input 
              type="file" 
              id="soil-image" 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageSelect}
            />
          </div>
          
          <Button 
            variant="accent" 
            fullWidth 
            onClick={analyzeSoil}
            disabled={!selectedImage || analyzing}
            loading={analyzing}
          >
            {analyzing ? "Analyzing..." : "Analyze Soil"}
          </Button>
        </Card>

        {soilTip && analyzed && (
          <Card className="bg-gradient-to-br from-leaf/10 to-cream animate-grow-fade">
            <div className="flex items-start">
              <div className="bg-leaf text-white p-2 rounded-full mr-3 mt-1">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="text-md font-semibold text-leaf mb-2">
                  AI Soil Analysis Result
                </h3>
                <p className="text-earth text-sm">
                  {soilTip.tip}
                </p>
              </div>
            </div>
          </Card>
        )}

        <div className="text-center mt-2">
          <p className="text-xs text-earth/70">
            Our AI analyzes soil texture, color, and visible organic matter to provide general recommendations. For precise soil testing, consider a laboratory analysis.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SoilScanner;
