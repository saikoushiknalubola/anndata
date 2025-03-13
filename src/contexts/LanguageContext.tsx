
import React, { createContext, useState, useContext, ReactNode } from 'react';

// List of supported Indian languages
export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
  { code: 'ml', name: 'മലയാളം (Malayalam)' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
  { code: 'or', name: 'ଓଡ଼ିଆ (Odia)' },
  { code: 'as', name: 'অসমীয়া (Assamese)' },
  { code: 'mai', name: 'मैथिली (Maithili)' },
  { code: 'sat', name: 'संथाली (Santhali)' },
  { code: 'ks', name: 'कॉशुर (Kashmiri)' },
  { code: 'sd', name: 'سنڌي (Sindhi)' },
  { code: 'kok', name: 'कोंकणी (Konkani)' },
  { code: 'doi', name: 'डोगरी (Dogri)' },
  { code: 'mni', name: 'মৈতৈলোন্ (Manipuri)' },
  { code: 'brx', name: 'बड़ो (Bodo)' },
  { code: 'ur', name: 'اردو (Urdu)' },
  { code: 'ne', name: 'नेपाली (Nepali)' },
];

// Translation data object
const translations: Record<string, Record<string, string>> = {
  en: {
    // Home page
    'empowerFarm': 'Empower Your Farm with AI',
    'modernSolutions': 'Modern solutions for traditional farming. Get personalized recommendations based on your location and needs.',
    'cropAdvisor': 'Crop Advisor',
    'soilScanner': 'Soil Scanner',
    'alerts': 'Alerts',
    'farmerTips': 'Farmer Tips',
    'wasteIdeas': 'Waste Ideas',
    'farmingSmarter': 'Farming Made Smarter',
    
    // About sections
    'aboutAndata': 'About Andata',
    'aboutDesc': 'Andata is an AI-powered farming assistant designed for small-scale Indian farmers. We combine traditional farming knowledge with modern technology to help farmers increase yield and sustainability.',
    'whyChooseUs': 'Why Choose Us',
    'whyDesc': 'Our platform provides personalized recommendations based on your location, soil conditions, and local weather patterns. We help you make informed decisions without the need for expensive equipment or expertise.',
    'howItWorks': 'How It Works',
    'howDesc': 'Simply select your location, upload soil photos, and receive instant AI-generated recommendations. Get alerts for weather changes, pest control, and connect with other farmers to share knowledge.',
    
    // Impact sections
    'howWeImpact': 'How We Impact Farming',
    'impactDesc': 'Andata transforms traditional farming practices by providing accessible technology to farmers across India, regardless of farm size or resources.',
    'reduceWaste': 'Reduce Waste',
    'reduceWasteDesc': 'Our waste management ideas help farmers turn agricultural waste into valuable resources, reducing environmental impact.',
    'increaseYield': 'Increase Yield',
    'increaseYieldDesc': 'AI-powered recommendations have helped farmers increase crop yields by up to 30% while using fewer resources.',
    'communitySupport': 'Community Support',
    'communitySupportDesc': 'Connect with other farmers in your region to share knowledge, resources, and successful farming practices.',
    
    // Footer
    'version': 'Version 1.0 | Developed for small-scale Indian farmers',
    'selectLanguage': 'Select Language'
  },
  hi: {
    // Hindi translations
    'empowerFarm': 'एआई के साथ अपने खेत को सशक्त बनाएं',
    'modernSolutions': 'पारंपरिक खेती के लिए आधुनिक समाधान। अपने स्थान और जरूरतों के आधार पर व्यक्तिगत सिफारिशें प्राप्त करें।',
    'cropAdvisor': 'फसल सलाहकार',
    'soilScanner': 'मिट्टी स्कैनर',
    'alerts': 'अलर्ट',
    'farmerTips': 'किसान टिप्स',
    'wasteIdeas': 'अपशिष्ट विचार',
    'farmingSmarter': 'स्मार्ट खेती',
    
    // About sections
    'aboutAndata': 'अनदाता के बारे में',
    'aboutDesc': 'अनदाता एक एआई-संचालित कृषि सहायक है जो छोटे भारतीय किसानों के लिए डिज़ाइन किया गया है। हम पारंपरिक कृषि ज्ञान को आधुनिक तकनीक के साथ जोड़कर किसानों को उपज और स्थिरता बढ़ाने में मदद करते हैं।',
    'whyChooseUs': 'हमें क्यों चुनें',
    'whyDesc': 'हमारा प्लेटफॉर्म आपके स्थान, मिट्टी की स्थिति और स्थानीय मौसम पैटर्न के आधार पर व्यक्तिगत सिफारिशें प्रदान करता है। हम आपको महंगे उपकरण या विशेषज्ञता की आवश्यकता के बिना सूचित निर्णय लेने में मदद करते हैं।',
    'howItWorks': 'यह कैसे काम करता है',
    'howDesc': 'बस अपना स्थान चुनें, मिट्टी की फोटो अपलोड करें, और तुरंत एआई-जनित सिफारिशें प्राप्त करें। मौसम परिवर्तन, कीट नियंत्रण के लिए अलर्ट प्राप्त करें, और ज्ञान साझा करने के लिए अन्य किसानों से जुड़ें।',
    
    // Impact sections
    'howWeImpact': 'हम खेती को कैसे प्रभावित करते हैं',
    'impactDesc': 'अनदाता पूरे भारत में किसानों को खेत के आकार या संसाधनों की परवाह किए बिना सुलभ प्रौद्योगिकी प्रदान करके पारंपरिक खेती प्रथाओं को बदल देता है।',
    'reduceWaste': 'अपशिष्ट कम करें',
    'reduceWasteDesc': 'हमारे अपशिष्ट प्रबंधन विचार किसानों को कृषि अपशिष्ट को मूल्यवान संसाधनों में बदलने में मदद करते हैं, जिससे पर्यावरणीय प्रभाव कम होता है।',
    'increaseYield': 'उपज बढ़ाएं',
    'increaseYieldDesc': 'एआई-संचालित सिफारिशों ने किसानों को कम संसाधनों का उपयोग करते हुए फसल उपज को 30% तक बढ़ाने में मदद की है।',
    'communitySupport': 'सामुदायिक समर्थन',
    'communitySupportDesc': 'ज्ञान, संसाधनों और सफल खेती प्रथाओं को साझा करने के लिए अपने क्षेत्र के अन्य किसानों से जुड़ें।',
    
    // Footer
    'version': 'संस्करण 1.0 | छोटे भारतीय किसानों के लिए विकसित',
    'selectLanguage': 'भाषा चुनें'
  },
  // Add more languages as needed (for simplicity, I'm just showing two in this example)
};

// For other languages, we'll dynamically add them in a real app
// This is a simplified example

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
