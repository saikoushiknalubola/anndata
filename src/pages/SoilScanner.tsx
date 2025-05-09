
import { useState } from 'react';
import { Upload, Loader2, CheckCircle2, Camera, X, AlertCircle, Leaf, Info } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { getRandomSoilTip, SoilTip } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { generateSpeech, playAudio } from '../utils/audioUtils';

const SoilScanner = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [soilTip, setSoilTip] = useState<SoilTip | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { t, language } = useLanguage();

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
        title: t('noImage'),
        description: t('uploadSoilImage'),
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
          title: t('analysisComplete'),
          description: t('aiAnalyzedSoil'),
          duration: 2000,
        });
      } catch (error) {
        console.error('Error getting soil tip:', error);
        toast({
          title: t('analysisFailed'),
          description: t('tryAgainLater'),
          variant: "destructive",
        });
        setAnalyzing(false);
      }
    }, 2000);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setAnalyzed(false);
    setSoilTip(null);
  };

  const speakAnalysis = async () => {
    if (!soilTip) return;
    
    setIsSpeaking(true);
    try {
      const text = soilTip.tip;
      const audioUrl = await generateSpeech(text, language);
      await playAudio(audioUrl);
    } catch (error) {
      console.error('Error speaking soil analysis:', error);
      toast({
        title: t('speakError'),
        description: t('tryAgainLater'),
        variant: "destructive",
      });
    } finally {
      setIsSpeaking(false);
    }
  };

  // Calculate a mock soil health score for UI
  const getSoilHealthScore = () => {
    return Math.floor(Math.random() * 30) + 70; // Random score between 70-100
  };

  return (
    <Layout title={t('soilScanner')} showBackButton>
      <div className="space-y-5">
        <Card variant="farm">
          <h2 className="text-lg font-semibold text-[#34C759] mb-3 flex items-center">
            <Camera className="mr-2" size={20} />
            {t('uploadSoilPhotoTitle')}
          </h2>
          <p className="text-sm text-soil/80 mb-4">
            {t('soilScannerDesc')}
          </p>
          
          <div className="mb-5">
            <div className="relative">
              <label 
                htmlFor="soil-image" 
                className={`w-full h-40 border-2 ${selectedImage ? 'border-solid border-[#34C759]/70' : 'border-dashed border-[#34C759]/40'}
                           rounded-lg flex flex-col items-center justify-center cursor-pointer 
                           hover:bg-[#34C759]/5 transition-colors relative overflow-hidden`}
              >
                {selectedImage ? (
                  <div className="w-full h-full relative">
                    <img 
                      src={selectedImage} 
                      alt="Soil sample" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium flex items-center">
                        <Camera className="mr-1" size={16} />
                        {t('changeImage')}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-3 bg-[#34C759]/10 rounded-full mb-3">
                      <Upload className="w-8 h-8 text-[#34C759]" />
                    </div>
                    <p className="text-sm text-soil font-medium">{t('clickToUpload')}</p>
                    <p className="text-xs text-soil/70 mt-1">{t('supportedFormats')}</p>
                  </>
                )}
              </label>
              {selectedImage && (
                <button 
                  onClick={clearImage}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Remove image"
                >
                  <X size={16} className="text-soil" />
                </button>
              )}
            </div>
            <input 
              type="file" 
              id="soil-image" 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageSelect}
            />
          </div>
          
          <Button 
            variant="primary" 
            fullWidth 
            onClick={analyzeSoil}
            disabled={!selectedImage || analyzing}
            loading={analyzing}
          >
            {analyzing ? t('analyzing') : t('analyzeSoil')}
          </Button>
        </Card>

        {soilTip && analyzed && (
          <Card className="bg-gradient-to-br from-[#34C759]/10 to-white animate-grow-fade border border-[#34C759]/30">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-md font-semibold text-[#34C759] flex items-center">
                  <CheckCircle2 size={18} className="mr-2" />
                  {t('aiSoilAnalysisResult')}
                </h3>
                <Button 
                  variant="outline" 
                  size="xs"
                  icon={<Volume2 size={14} className={isSpeaking ? "animate-pulse" : ""} />}
                  onClick={speakAnalysis}
                  disabled={isSpeaking}
                >
                  {isSpeaking ? t('speaking') : t('listen')}
                </Button>
              </div>

              {/* Visual soil health meter */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-soil">{t('soilHealthScore')}</span>
                  <span className="text-sm font-bold text-[#34C759]">{getSoilHealthScore()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-[#34C759] to-[#138808] h-3 rounded-full transition-all duration-1000" 
                    style={{ width: `${getSoilHealthScore()}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="p-4 border border-[#34C759]/20 bg-[#34C759]/5 rounded-lg">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <Leaf size={20} className="text-[#34C759]" />
                  </div>
                  <div>
                    <p className="text-soil text-sm">
                      {soilTip.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start border-t border-[#34C759]/20 pt-3">
              <Info size={16} className="text-[#4285F4] mt-1 mr-2 flex-shrink-0" />
              <p className="text-xs text-soil/70">
                {t('recommendedAction')}: {Math.random() > 0.5 ? t('addOrganicMatter') : t('adjustSoilPH')}
              </p>
            </div>
          </Card>
        )}

        <div className="bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-lg p-3">
          <div className="flex items-start">
            <AlertCircle size={16} className="text-[#4285F4] mt-1 mr-2 flex-shrink-0" />
            <p className="text-xs text-soil/70">
              {t('soilScannerDisclaimer')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SoilScanner;
