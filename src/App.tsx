
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/Index';
import CropAdvisor from './pages/CropAdvisor';
import SoilScanner from './pages/SoilScanner';
import WaterManagement from './pages/WaterManagement';
import OrganicFarming from './pages/OrganicFarming';
import EquipmentCatalog from './pages/EquipmentCatalog';
import MarketPrices from './pages/MarketPrices';
import Helpline from './pages/Helpline';
import LearnFarming from './pages/LearnFarming';
import WeatherDashboard from './pages/WeatherDashboard';
import Developer from './pages/Developer';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import VoiceAssistant from './components/VoiceAssistant';
import WelcomeAudio from './components/WelcomeAudio';
import './App.css';
import './styles/enhanced.css';
import './styles/animations.css';
import './styles/mobile.css';
import { LanguageProvider } from './contexts/LanguageContext';
import EnhancedUIProvider from './components/ui/enhanced-components';
import FarmerTips from './pages/FarmerTips';
import CropInfo from './pages/CropInfo';
import CropDisease from './pages/CropDisease';
import Marketplace from './pages/Marketplace';
import KnowledgeBase from './pages/KnowledgeBase';
import PestControl from './pages/PestControl';
import CropPlanning from './pages/CropPlanning';
import SoilHealth from './pages/SoilHealth';
import Alerts from './pages/Alerts';
import WasteIdeas from './pages/WasteIdeas';
import FarmSubsidies from './pages/FarmSubsidies';
import SuccessStories from './pages/SuccessStories';

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/crop-advisor" element={<CropAdvisor />} />
        <Route path="/soil-scanner" element={<SoilScanner />} />
        <Route path="/water-management" element={<WaterManagement />} />
        <Route path="/organic-farming" element={<OrganicFarming />} />
        <Route path="/equipment-catalog" element={<EquipmentCatalog />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/learn-farming" element={<LearnFarming />} />
        <Route path="/weather-dashboard" element={<WeatherDashboard />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/farmer-tips" element={<FarmerTips />} />
        <Route path="/crop-info" element={<CropInfo />} />
        <Route path="/crop-disease" element={<CropDisease />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/pest-control" element={<PestControl />} />
        <Route path="/crop-planning" element={<CropPlanning />} />
        <Route path="/soil-health" element={<SoilHealth />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/waste-ideas" element={<WasteIdeas />} />
        <Route path="/farm-subsidies" element={<FarmSubsidies />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <EnhancedUIProvider>
        <Router>
          <div className="app-container bg-gradient-to-b from-white to-cream/20 min-h-screen">
            <WelcomeAudio />
            <div className="pt-0">
              <AnimatedRoutes />
            </div>
            <VoiceAssistant />
            <Toaster />
          </div>
        </Router>
      </EnhancedUIProvider>
    </LanguageProvider>
  );
}

export default App;
