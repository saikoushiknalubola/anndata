
import React, { useState } from 'react';
import { Upload, Camera, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

const CropDisease = () => {
  const { t } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    disease: string;
    confidence: number;
    treatment: string;
  } | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      
      // Reset previous results
      setResult(null);
    }
  };
  
  const handleCapture = () => {
    // This would trigger device camera in a real implementation
    toast({
      title: "Camera Feature",
      description: "The camera capture feature would open your device camera in a real implementation.",
      duration: 3000,
    });
  };
  
  const analyzeImage = () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock results - in a real app, this would come from an AI model
      const mockResults = [
        {
          disease: "Bacterial Leaf Blight",
          confidence: 92,
          treatment: "Apply copper-based bactericides. Ensure proper field drainage and use disease-free seeds."
        },
        {
          disease: "Powdery Mildew",
          confidence: 87,
          treatment: "Apply sulfur-based fungicide early morning. Increase air circulation around plants and avoid overhead watering."
        },
        {
          disease: "Anthracnose",
          confidence: 78,
          treatment: "Apply fungicides with mancozeb. Remove infected plant parts and avoid irrigation splashing."
        }
      ];
      
      setResult(mockResults[Math.floor(Math.random() * mockResults.length)]);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "Disease identification successful",
        duration: 2000,
      });
    }, 2000);
  };
  
  return (
    <Layout title="Crop Disease Identifier" showBackButton>
      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-soil mb-3">Identify Crop Disease</h2>
          <p className="text-sm text-soil/80 mb-4">
            Take a photo or upload an image of your affected crop. Our AI will identify the disease and suggest treatment.
          </p>
          
          <div className="flex flex-col space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={handleCapture}
                variant="accent"
                icon={<Camera size={20} />}
                fullWidth
              >
                Take Photo
              </Button>
              
              <label className="cursor-pointer">
                <Button 
                  variant="outline"
                  icon={<Upload size={20} />}
                  fullWidth
                >
                  Upload Image
                </Button>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
            </div>
            
            {preview && (
              <div className="mt-4 relative">
                <div className="relative rounded-lg overflow-hidden aspect-square max-w-xs mx-auto">
                  <img 
                    src={preview} 
                    alt="Crop preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 flex justify-center">
                  <Button 
                    onClick={analyzeImage}
                    loading={isAnalyzing}
                    disabled={isAnalyzing}
                    variant="primary"
                    size="md"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Identify Disease'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
        
        {result && (
          <Card className="bg-leaf/10 animate-fade-in">
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-white p-2 mt-1">
                <CheckCircle className="text-leaf h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-soil mb-1">
                  {result.disease}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="text-xs text-soil/70 mr-2">Confidence:</div>
                  <div className="w-24 h-2 bg-cream rounded-full">
                    <div 
                      className="h-2 bg-leaf rounded-full" 
                      style={{width: `${result.confidence}%`}}
                    ></div>
                  </div>
                  <div className="ml-2 text-xs font-semibold text-leaf">
                    {result.confidence}%
                  </div>
                </div>
                <div className="p-3 bg-white/80 rounded-lg border border-leaf/20">
                  <div className="flex items-center mb-1">
                    <AlertCircle className="text-terracotta h-4 w-4 mr-1" />
                    <h4 className="text-sm font-semibold text-terracotta">Recommended Treatment</h4>
                  </div>
                  <p className="text-sm text-soil/90">{result.treatment}</p>
                </div>
                <div className="mt-3 flex">
                  <Button 
                    variant="outline" 
                    className="text-xs" 
                    size="sm"
                  >
                    View Similar Cases
                  </Button>
                  <Button 
                    variant="link" 
                    className="text-xs ml-2" 
                    size="sm"
                  >
                    Ask Expert
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}
        
        <div className="text-center mt-4">
          <p className="text-xs text-soil/70">
            For severe infestations, please consult with your local agriculture extension officer.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CropDisease;
