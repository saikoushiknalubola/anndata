
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from './contexts/LanguageContext';
import { useIsMobile } from './hooks/use-mobile';

// Desktop components
import HomePage from './pages/Index';
import LearnFarming from './pages/LearnFarming';
import OrganicFarming from './pages/OrganicFarming';

// Mobile components
import MobileHome from './pages/MobileHome';
import MobileCropAdvisor from './pages/MobileCropAdvisor';
import MobileLearning from './pages/MobileLearning';

// Shared components
import Layout from './components/Layout';

const App: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Mobile Routes */}
            {isMobile ? (
              <>
                <Route path="/" element={<MobileHome />} />
                <Route path="/crop-advisor" element={<MobileCropAdvisor />} />
                <Route path="/learn-farming" element={<MobileLearning />} />
                <Route path="/soil-scanner" element={<Layout title="Soil Scanner" showBackButton><div className="p-4 text-center">Soil Scanner - Coming Soon</div></Layout>} />
                <Route path="/market-prices" element={<Layout title="Market Prices" showBackButton><div className="p-4 text-center">Market Prices - Coming Soon</div></Layout>} />
                <Route path="/water-management" element={<Layout title="Water Management" showBackButton><div className="p-4 text-center">Water Management - Coming Soon</div></Layout>} />
                <Route path="/organic-farming" element={<OrganicFarming />} />
              </>
            ) : (
              <>
                {/* Desktop Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/learn-farming" element={<LearnFarming />} />
                <Route path="/organic-farming" element={<OrganicFarming />} />
                <Route path="/crop-advisor" element={<Layout title="Crop Advisor" showBackButton><div className="p-4 text-center">Crop Advisor - Desktop Version</div></Layout>} />
                <Route path="/soil-scanner" element={<Layout title="Soil Scanner" showBackButton><div className="p-4 text-center">Soil Scanner - Desktop Version</div></Layout>} />
                <Route path="/market-prices" element={<Layout title="Market Prices" showBackButton><div className="p-4 text-center">Market Prices - Desktop Version</div></Layout>} />
                <Route path="/water-management" element={<Layout title="Water Management" showBackButton><div className="p-4 text-center">Water Management - Desktop Version</div></Layout>} />
              </>
            )}
          </Routes>
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
