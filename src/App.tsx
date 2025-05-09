import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Index';
import CropAdvisor from './pages/CropAdvisor';
import SoilScanner from './pages/SoilScanner';
import Alerts from './pages/Alerts';
import FarmerTips from './pages/FarmerTips';
import WasteIdeas from './pages/WasteIdeas';
import LearnFarming from './pages/LearnFarming';
import WeatherDashboard from './pages/WeatherDashboard';
import Helpline from './pages/Helpline';
import CropInfo from './pages/CropInfo';
import FarmSubsidies from './pages/FarmSubsidies';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import VoiceAssistant from './components/VoiceAssistant';
import GovernmentBranding from './components/GovernmentBranding';
import WelcomeAudio from './components/WelcomeAudio';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import MarketPrices from './pages/MarketPrices';
import SuccessStories from './pages/SuccessStories';
import OrganicFarming from './pages/OrganicFarming';
import EquipmentCatalog from './pages/EquipmentCatalog';
import Developer from './pages/Developer';
import WaterManagement from './pages/WaterManagement';
import PestControl from './pages/PestControl';
import CropPlanning from './pages/CropPlanning';
import SoilHealth from './pages/SoilHealth';
import CropDisease from './pages/CropDisease';
import Marketplace from './pages/Marketplace';
import KnowledgeBase from './pages/KnowledgeBase';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app-container bg-gradient-to-b from-white to-cream/20 min-h-screen">
          <GovernmentBranding />
          <WelcomeAudio />
          <div className="pt-14 sm:pt-16 md:pt-16"> {/* Increased padding to accommodate the header */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/crop-advisor" element={<CropAdvisor />} />
              <Route path="/soil-scanner" element={<SoilScanner />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/farmer-tips" element={<FarmerTips />} />
              <Route path="/waste-ideas" element={<WasteIdeas />} />
              <Route path="/learn-farming" element={<LearnFarming />} />
              <Route path="/weather" element={<WeatherDashboard />} />
              <Route path="/helpline" element={<Helpline />} />
              <Route path="/crop-info" element={<CropInfo />} />
              <Route path="/farm-subsidies" element={<FarmSubsidies />} />
              <Route path="/market-prices" element={<MarketPrices />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/organic-farming" element={<OrganicFarming />} />
              <Route path="/equipment-catalog" element={<EquipmentCatalog />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/water-management" element={<WaterManagement />} />
              <Route path="/pest-control" element={<PestControl />} />
              <Route path="/crop-planning" element={<CropPlanning />} />
              <Route path="/soil-health" element={<SoilHealth />} />
              <Route path="/crop-disease" element={<CropDisease />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/knowledge-base" element={<KnowledgeBase />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {/* VoiceAssistant is no longer needed here as it's included in the HomePage */}
          {/* We still keep it for other pages */}
          <Routes>
            <Route path="/" element={null} />
            <Route path="*" element={<VoiceAssistant />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
