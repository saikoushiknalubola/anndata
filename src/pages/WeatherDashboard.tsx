
import { useState, useEffect } from 'react';
import { Cloud, Thermometer, Droplets, Volume, Loader2, Umbrella, Wind, Sun } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { generateSpeech, playAudio } from '../utils/audioUtils';

// Mock weather data (will be replaced with Supabase data)
const mockWeatherData = [
  { id: 1, location: "Ananthasagar", temp: 28, rainChance: 60, humidity: 85, windSpeed: 12 },
  { id: 2, location: "Hanamkonda", temp: 32, rainChance: 20, humidity: 65, windSpeed: 8 },
  { id: 3, location: "Parkal", temp: 30, rainChance: 50, humidity: 80, windSpeed: 10 },
  { id: 4, location: "Jammikunta", temp: 31, rainChance: 30, humidity: 70, windSpeed: 15 },
  { id: 5, location: "Huzurabad", temp: 29, rainChance: 40, humidity: 75, windSpeed: 9 },
  { id: 6, location: "Hasanparthy", temp: 30, rainChance: 25, humidity: 68, windSpeed: 7 }
];

interface WeatherData {
  id: number;
  location: string;
  temp: number;
  rainChance: number;
  humidity: number;
  windSpeed: number;
}

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [speakingId, setSpeakingId] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();
  
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
      const weatherText = `${data.location}: ${data.temp}°C with ${data.rainChance}% chance of rain, humidity ${data.humidity}%, wind speed ${data.windSpeed} km/h`;
      
      // Use the ElevenLabs TTS API through our util function
      const audioUrl = await generateSpeech(weatherText, language);
      await playAudio(audioUrl);
    } catch (error) {
      console.error('Error reading weather aloud:', error);
      toast({
        title: "Error",
        description: "Failed to read weather data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSpeakingId(null);
    }
  };

  const getWeatherIcon = (rainChance: number) => {
    if (rainChance > 50) {
      return <Umbrella className="text-blue-500" size={isMobile ? 24 : 32} />;
    } else if (rainChance > 30) {
      return <Cloud className="text-gray-500" size={isMobile ? 24 : 32} />;
    } else {
      return <Sun className="text-yellow-500" size={isMobile ? 24 : 32} />;
    }
  };

  const getFilteredData = () => {
    if (!selectedLocation) return weatherData;
    return weatherData.filter(data => data.location === selectedLocation);
  };

  return (
    <Layout title="Weather Dashboard" showBackButton>
      <div className="space-y-4 md:space-y-5">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-2 md:mb-3">Warangal District Weather</h2>
          <p className="text-sm text-earth/80 mb-3">
            Check current weather conditions for farming areas in Warangal district. Plan your agricultural activities accordingly.
          </p>
          
          <div className="mb-3">
            <label htmlFor="location-filter" className="block text-sm font-medium text-earth mb-1">
              Filter by Location
            </label>
            <select
              id="location-filter"
              className="w-full p-2 rounded-md border border-earth/20 bg-white/80"
              value={selectedLocation || ''}
              onChange={(e) => setSelectedLocation(e.target.value || null)}
            >
              <option value="">All Locations</option>
              {weatherData.map(data => (
                <option key={data.id} value={data.location}>{data.location}</option>
              ))}
            </select>
          </div>
          
          {loading ? (
            <div className="py-6 flex justify-center">
              <Loader2 className="animate-spin text-earth" size={28} />
            </div>
          ) : getFilteredData().length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {getFilteredData().map((data) => (
                <Card 
                  key={data.id} 
                  className={`bg-gradient-to-br ${
                    data.rainChance > 50 
                      ? 'from-blue-50 to-white border-blue-200' 
                      : data.rainChance > 30
                        ? 'from-gray-50 to-white border-gray-200'
                        : 'from-yellow-50 to-white border-yellow-200'
                  } border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-earth font-semibold">{data.location}</h3>
                      <div className="ml-2">
                        {getWeatherIcon(data.rainChance)}
                      </div>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <Thermometer size={16} className="text-saffron mr-1" />
                        <span className="text-earth font-medium text-sm">{data.temp}°C</span>
                      </div>
                      <div className="flex items-center">
                        <Droplets size={16} className="text-blue-500 mr-1" />
                        <span className="text-earth text-sm">{data.rainChance}% rain</span>
                      </div>
                      <div className="flex items-center">
                        <Wind size={16} className="text-gray-500 mr-1" />
                        <span className="text-earth text-sm">{data.windSpeed} km/h</span>
                      </div>
                      <div className="flex items-center">
                        <Cloud size={16} className="text-earth/70 mr-1" />
                        <span className="text-earth text-sm">{data.humidity}% humid</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex justify-end">
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<Volume size={14} />}
                        onClick={() => handleReadAloud(data)}
                        loading={speakingId === data.id}
                        disabled={speakingId !== null}
                        className="py-1 px-2 text-xs"
                      >
                        {speakingId === data.id ? "Reading..." : "Read Aloud"}
                      </Button>
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
          <p className="text-leaf font-medium p-3 bg-leaf/10 rounded-lg text-sm">
            {getFilteredData().some(d => d.rainChance > 50) 
              ? "Consider postponing outdoor activities like spraying pesticides. Good time for rice planting preparation."
              : "Favorable conditions for crop spraying and harvesting. Consider irrigation for dry crops."
            }
          </p>
        </Card>

        <Card className="bg-gradient-to-r from-cream to-white border border-earth/10">
          <h3 className="text-md font-semibold text-earth mb-2">5-Day Forecast</h3>
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2 py-2 min-w-max">
              {[1, 2, 3, 4, 5].map((day) => (
                <div key={day} className="flex flex-col items-center p-2 bg-white/60 rounded-lg border border-earth/10 min-w-[70px]">
                  <span className="text-xs font-medium text-earth/80">{new Date(Date.now() + day * 86400000).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                  <div className="my-2">
                    {day % 3 === 0 ? <Umbrella size={18} className="text-blue-500" /> : 
                     day % 2 === 0 ? <Cloud size={18} className="text-gray-500" /> : 
                     <Sun size={18} className="text-yellow-500" />}
                  </div>
                  <span className="text-sm font-medium text-earth">{Math.floor(25 + Math.random() * 7)}°C</span>
                  <span className="text-xs text-earth/70">{Math.floor(20 + Math.random() * 60)}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="text-center mt-3">
          <p className="text-xs text-earth/70">
            Weather data is updated every 3 hours. Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default WeatherDashboard;
