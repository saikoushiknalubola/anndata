
import { useState, useEffect } from 'react';
import { Cloud, Thermometer, Droplets, VolumeUp, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

// Mock weather data (will be replaced with Supabase data)
const mockWeatherData = [
  { id: 1, location: "Ananthasagar", temp: 28, rainChance: 60 },
  { id: 2, location: "Hanamkonda", temp: 32, rainChance: 20 },
  { id: 3, location: "Parkal", temp: 30, rainChance: 50 },
  { id: 4, location: "Jammikunta", temp: 31, rainChance: 30 },
  { id: 5, location: "Huzurabad", temp: 29, rainChance: 40 },
  { id: 6, location: "Hasanparthy", temp: 30, rainChance: 25 }
];

// Simulate TTS for now
const simulateTextToSpeech = (text: string, language: string) => {
  // In a real app, this would use an actual TTS API
  console.log(`Speaking in ${language}: ${text}`);
  
  toast({
    title: "Reading weather aloud",
    description: `"${text}" in ${language}`,
    duration: 3000,
  });
  
  return new Promise<void>(resolve => {
    setTimeout(resolve, 2000);
  });
};

interface WeatherData {
  id: number;
  location: string;
  temp: number;
  rainChance: number;
}

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [speakingId, setSpeakingId] = useState<number | null>(null);
  const { language, t } = useLanguage();
  
  useEffect(() => {
    // Simulate fetching data from Supabase
    const fetchWeatherData = async () => {
      try {
        // In a real app, this would fetch from Supabase
        setWeatherData(mockWeatherData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        toast({
          title: "Error",
          description: "Failed to fetch weather data. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const handleReadAloud = async (data: WeatherData) => {
    if (speakingId === data.id) return;
    
    setSpeakingId(data.id);
    try {
      const weatherText = `${data.location}: ${data.temp}°C with ${data.rainChance}% chance of rain`;
      await simulateTextToSpeech(weatherText, language);
    } finally {
      setSpeakingId(null);
    }
  };

  const getWeatherIcon = (rainChance: number) => {
    if (rainChance > 50) {
      return <Cloud className="text-blue-500" size={32} />;
    } else if (rainChance > 30) {
      return <Cloud className="text-gray-500" size={32} />;
    } else {
      return <Thermometer className="text-saffron" size={32} />;
    }
  };

  return (
    <Layout title="Weather Dashboard" showBackButton>
      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-4">Warangal District Weather</h2>
          <p className="text-sm text-earth/80 mb-4">
            Check current weather conditions for farming areas in Warangal district. Plan your agricultural activities accordingly.
          </p>
          
          {loading ? (
            <div className="py-8 flex justify-center">
              <Loader2 className="animate-spin text-earth" size={30} />
            </div>
          ) : weatherData.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {weatherData.map((data) => (
                <Card 
                  key={data.id} 
                  className={`bg-gradient-to-br ${
                    data.rainChance > 50 
                      ? 'from-blue-50 to-white border-blue-200' 
                      : 'from-saffron/10 to-white border-saffron/20'
                  } border overflow-hidden`}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-earth font-semibold">{data.location}</h3>
                      <div className="flex items-center mt-2">
                        <Thermometer size={16} className="text-saffron mr-1" />
                        <span className="text-earth font-medium">{data.temp}°C</span>
                        <span className="mx-2">|</span>
                        <Droplets size={16} className="text-blue-500 mr-1" />
                        <span className="text-earth">{data.rainChance}% rain</span>
                      </div>
                      
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<VolumeUp size={14} />}
                        onClick={() => handleReadAloud(data)}
                        loading={speakingId === data.id}
                        disabled={speakingId !== null}
                        className="mt-3 py-1 px-2 text-xs"
                      >
                        {speakingId === data.id ? "Reading..." : "Read Aloud"}
                      </Button>
                    </div>
                    
                    <div className="ml-4">
                      {getWeatherIcon(data.rainChance)}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center py-6 text-earth/70">No weather data available at this time</p>
          )}
        </Card>

        <Card className="bg-gradient-to-r from-earth/5 to-white border border-earth/10">
          <h3 className="text-md font-semibold text-earth mb-2">Weather Advisory</h3>
          <p className="text-sm text-earth/80 mb-2">
            Today's farming recommendation based on weather conditions:
          </p>
          <p className="text-leaf font-medium p-3 bg-leaf/10 rounded-lg">
            {weatherData.some(d => d.rainChance > 50) 
              ? "Consider postponing outdoor activities like spraying pesticides. Good time for rice planting preparation."
              : "Favorable conditions for crop spraying and harvesting. Consider irrigation for dry crops."
            }
          </p>
        </Card>

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            Weather data is updated every 3 hours. Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default WeatherDashboard;
