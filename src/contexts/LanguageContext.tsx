
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

// Translation data object for all supported languages
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
    'home': 'Home',
    
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
    
    // New guidance sections
    'digitalInitiative': 'Digital India Initiative',
    'digitalDesc': 'Part of the Digital India initiative to empower farmers with technology and improve agricultural productivity across the nation.',
    'governmentResources': 'Government Resources',
    'resourcesDesc': 'Access information about government schemes, subsidies, and programs designed to support farmers.',
    'weatherInsights': 'Weather Insights',
    'weatherDesc': 'Get localized weather forecasts and alerts to plan your farming activities effectively.',
    'marketPrices': 'Market Prices',
    'pricesDesc': 'Stay updated with current market prices for various crops to make informed selling decisions.',
    'learningResources': 'Learning Resources',
    'learningDesc': 'Access educational content about modern farming techniques, pest management, and sustainable practices.',
    
    // Footer
    'version': 'Version 1.0 | Developed for small-scale Indian farmers',
    'selectLanguage': 'Select Language',
    'digitalIndia': 'A Digital India Initiative',
    'helplineText': 'Farmer Helpline',
    'helplineNumber': '1800-180-1551'
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
    'home': 'होम',
    
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
    
    // New guidance sections
    'digitalInitiative': 'डिजिटल इंडिया पहल',
    'digitalDesc': 'किसानों को प्रौद्योगिकी से सशक्त बनाने और पूरे देश में कृषि उत्पादकता को बेहतर बनाने के लिए डिजिटल इंडिया पहल का हिस्सा।',
    'governmentResources': 'सरकारी संसाधन',
    'resourcesDesc': 'किसानों का समर्थन करने के लिए डिज़ाइन की गई सरकारी योजनाओं, सब्सिडी और कार्यक्रमों के बारे में जानकारी प्राप्त करें।',
    'weatherInsights': 'मौसम अंतर्दृष्टि',
    'weatherDesc': 'अपनी खेती गतिविधियों की प्रभावी योजना बनाने के लिए स्थानीय मौसम पूर्वानुमान और अलर्ट प्राप्त करें।',
    'marketPrices': 'बाजार मूल्य',
    'pricesDesc': 'सूचित बिक्री निर्णय लेने के लिए विभिन्न फसलों के लिए वर्तमान बाजार मूल्यों से अपडेट रहें।',
    'learningResources': 'शिक्षण संसाधन',
    'learningDesc': 'आधुनिक खेती तकनीकों, कीट प्रबंधन और टिकाऊ प्रथाओं के बारे में शैक्षिक सामग्री तक पहुंचें।',
    
    // Footer
    'version': 'संस्करण 1.0 | छोटे भारतीय किसानों के लिए विकसित',
    'selectLanguage': 'भाषा चुनें',
    'digitalIndia': 'एक डिजिटल इंडिया पहल',
    'helplineText': 'किसान हेल्पलाइन',
    'helplineNumber': '1800-180-1551'
  },
  bn: {
    // Bengali translations
    'empowerFarm': 'AI দিয়ে আপনার খামারকে শক্তিশালী করুন',
    'modernSolutions': 'ঐতিহ্যগত চাষের জন্য আধুনিক সমাধান। আপনার অবস্থান এবং প্রয়োজনের উপর ভিত্তি করে ব্যক্তিগতকৃত সুপারিশ পান।',
    'cropAdvisor': 'ফসল উপদেষ্টা',
    'soilScanner': 'মাটি স্ক্যানার',
    'alerts': 'সতর্কতা',
    'farmerTips': 'কৃষক টিপস',
    'wasteIdeas': 'বর্জ্য ধারণা',
    'farmingSmarter': 'স্মার্ট চাষাবাদ',
    'home': 'হোম',
    
    // About sections
    'aboutAndata': 'অনদাতা সম্পর্কে',
    'aboutDesc': 'অনদাতা একটি AI-চালিত কৃষি সহকারী যা ছোট ভারতীয় কৃষকদের জন্য ডিজাইন করা হয়েছে। আমরা ঐতিহ্যগত কৃষি জ্ঞানকে আধুনিক প্রযুক্তির সাথে সংযুক্ত করে কৃষকদের ফলন এবং স্থায়িত্ব বাড়াতে সাহায্য করি।',
    'whyChooseUs': 'আমাদের কেন বেছে নেবেন',
    'whyDesc': 'আমাদের প্ল্যাটফর্ম আপনার অবস্থান, মাটির অবস্থা, এবং স্থানীয় আবহাওয়া প্যাটার্নের উপর ভিত্তি করে ব্যক্তিগতকৃত সুপারিশ প্রদান করে। আমরা আপনাকে ব্যয়বহুল সরঞ্জাম বা বিশেষজ্ঞতার প্রয়োজন ছাড়াই অবগত সিদ্ধান্ত নিতে সাহায্য করি।',
    'howItWorks': 'এটি কীভাবে কাজ করে',
    'howDesc': 'আপনার অবস্থান নির্বাচন করুন, মাটির ছবি আপলোড করুন, এবং তাৎক্ষণিক AI-জেনারেটেড সুপারিশ পান। আবহাওয়া পরিবর্তন, কীট নিয়ন্ত্রণের জন্য সতর্কতা পান, এবং জ্ঞান ভাগ করতে অন্য কৃষকদের সাথে সংযোগ করুন।',
    
    // Impact sections
    'howWeImpact': 'আমরা কীভাবে কৃষিকে প্রভাবিত করি',
    'impactDesc': 'অনদাতা খামারের আকার বা সম্পদের নির্বিশেষে ভারত জুড়ে কৃষকদের সহজলভ্য প্রযুক্তি সরবরাহ করে ঐতিহ্যগত কৃষি পদ্ধতি পরিবর্তন করে।',
    'reduceWaste': 'বর্জ্য কমান',
    'reduceWasteDesc': 'আমাদের বর্জ্য ব্যবস্থাপনা ধারণাগুলি কৃষকদের কৃষি বর্জ্যকে মূল্যবান সম্পদে পরিণত করতে সাহায্য করে, যা পরিবেশগত প্রভাব কমায়।',
    'increaseYield': 'ফলন বাড়ান',
    'increaseYieldDesc': 'AI-চালিত সুপারিশগুলি কৃষকদের কম সম্পদ ব্যবহার করে ফসলের ফলন 30% পর্যন্ত বাড়াতে সাহায্য করেছে।',
    'communitySupport': 'কমিউনিটি সমর্থন',
    'communitySupportDesc': 'জ্ঞান, সম্পদ, এবং সফল কৃষি অভ্যাস ভাগ করতে আপনার অঞ্চলের অন্য কৃষকদের সাথে সংযোগ করুন।',
    
    // New guidance sections
    'digitalInitiative': 'ডিজিটাল ইন্ডিয়া উদ্যোগ',
    'digitalDesc': 'কৃষকদের প্রযুক্তি দিয়ে ক্ষমতায়নের জন্য এবং সারা দেশে কৃষি উৎপাদনশীলতা উন্নত করার জন্য ডিজিটাল ইন্ডিয়া উদ্যোগের অংশ।',
    'governmentResources': 'সরকারী সম্পদ',
    'resourcesDesc': 'কৃষকদের সমর্থন করার জন্য ডিজাইন করা সরকারী প্রকল্প, ভর্তুকি, এবং প্রোগ্রাম সম্পর্কে তথ্য অ্যাক্সেস করুন।',
    'weatherInsights': 'আবহাওয়া অন্তর্দৃষ্টি',
    'weatherDesc': 'আপনার কৃষি কার্যক্রম কার্যকরভাবে পরিকল্পনা করতে স্থানীয়কৃত আবহাওয়া পূর্বাভাস এবং সতর্কতা পান।',
    'marketPrices': 'বাজার মূল্য',
    'pricesDesc': 'বিভিন্ন ফসলের জন্য বর্তমান বাজার মূল্য সম্পর্কে আপডেট থাকুন যাতে অবগত বিক্রয় সিদ্ধান্ত নিতে পারেন।',
    'learningResources': 'শিক্ষামূলক সম্পদ',
    'learningDesc': 'আধুনিক কৃষি কৌশল, কীটপতঙ্গ ব্যবস্থাপনা, এবং টেকসই অভ্যাস সম্পর্কে শিক্ষামূলক সামগ্রী অ্যাক্সেস করুন।',
    
    // Footer
    'version': 'সংস্করণ 1.0 | ছোট ভারতীয় কৃষকদের জন্য বিকশিত',
    'selectLanguage': 'ভাষা নির্বাচন করুন',
    'digitalIndia': 'একটি ডিজিটাল ইন্ডিয়া উদ্যোগ',
    'helplineText': 'কৃষক হেল্পলাইন',
    'helplineNumber': '1800-180-1551'
  },
  // Add basic translations for other languages - for demonstration, showing just a few key terms
  te: { 
    'empowerFarm': 'AI తో మీ వ్యవసాయాన్ని బలోపేతం చేయండి',
    'home': 'హోమ్',
    'cropAdvisor': 'పంట సలహాదారు',
    'soilScanner': 'నేల స్కానర్',
    'alerts': 'హెచ్చరికలు',
    'farmerTips': 'రైతు చిట్కాలు',
    'wasteIdeas': 'వ్యర్థ ఆలోచనలు',
    'selectLanguage': 'భాష ఎంచుకోండి',
    'version': 'వెర్షన్ 1.0 | చిన్న భారతీయ రైతుల కోసం అభివృద్ధి చేయబడింది',
    'digitalIndia': 'డిజిటల్ ఇండియా ఇనిషియేటివ్'
  },
  ta: {
    'empowerFarm': 'AI உடன் உங்கள் விவசாயத்தை வலுப்படுத்துங்கள்',
    'home': 'முகப்பு',
    'cropAdvisor': 'பயிர் ஆலோசகர்',
    'soilScanner': 'மண் ஸ்கேனர்',
    'alerts': 'எச்சரிக்கைகள்',
    'farmerTips': 'விவசாயி குறிப்புகள்',
    'wasteIdeas': 'கழிவு யோசனைகள்',
    'selectLanguage': 'மொழியைத் தேர்ந்தெடுக்கவும்',
    'version': 'பதிப்பு 1.0 | சிறு இந்திய விவசாயிகளுக்காக உருவாக்கப்பட்டது',
    'digitalIndia': 'டிஜிட்டல் இந்தியா முயற்சி'
  },
  // Continue with minimal translations for all other languages
  // ... adding basic translations for all other languages
};

// For other languages, we'll use English as fallback when specific translations aren't available

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
    // First try to get translation in selected language
    if (translations[language]?.[key]) {
      return translations[language][key];
    }
    // Fall back to English if translation doesn't exist in selected language
    return translations['en'][key] || key;
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
