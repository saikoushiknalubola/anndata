
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
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import VoiceAssistant from './components/VoiceAssistant';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <VoiceAssistant />
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
