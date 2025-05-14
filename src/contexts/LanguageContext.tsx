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
    'learnFarming': 'Learn Farming',
    'weather': 'Weather',
    'helpline': 'Helpline',
    'resources': 'Resources',
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
    'helplineNumber': '1800-180-1551',
    
    // New sections
    'yourFarmingPartner': 'Your Farming Partner',
    'educationalResources': 'Educational Resources',
    'weatherDashboard': 'Weather Dashboard',
    'warangalWeather': 'Warangal District Weather',
    'readAloud': 'Read Aloud',
    'addUrea': 'Add urea',
    'soilFertility': 'Soil Fertility',
    'uploadSoilPhoto': 'Upload Soil Photo',
    'cropRotation': 'Crop Rotation Basics',
    'organicFertilizers': 'Organic Fertilizers Guide',
    'waterConservation': 'Water Conservation Tips',
    'pestControl': 'Pest Control Methods',
    'soilHealth': 'Soil Health 101',

    // Voice Assistant
    'voiceAssistant': 'Voice Assistant',
    'tapToSpeak': 'Tap microphone to speak',
    'listeningNow': 'Listening...',
    'speakingNow': 'Speaking...',
    'voiceError': 'Voice Recognition Error',
    'tryAgain': 'Please try again',
    'voiceUnderstood': 'I understood your request. How can I help you further?',
    'goingToWeather': 'Showing you the weather information',
    'goingToLearning': 'Taking you to farming lessons',
    
    // New Welcome Audio Translations
    'welcomeToAndata': 'Welcome to Andata',
    'welcomeAnnouncement': 'Welcome to Andata, your intelligent farming companion. How can we help you today?',
    'mute': 'Mute Audio',
    'unmute': 'Unmute Audio',
    'startSpeaking': 'Start speaking to interact with your voice assistant',
    'tryVoiceCommands': 'Try asking for weather, crop advice, or market prices',
    'quickCommands': 'Quick Commands',
    'voiceVolume': 'Voice Volume',
    'voiceSpeed': 'Voice Speed',
    'clearHistory': 'Clear History',
    'historyClear': 'History Cleared',
    'historyClearDesc': 'Your conversation history has been cleared',
    'settings': 'Settings',
    'chat': 'Chat',
    'speaking': 'Speaking...',
    'voiceMuted': 'Voice Muted',
    'voiceMutedDesc': 'Assistant voice is now muted',
    'voiceUnmuted': 'Voice Unmuted',
    'voiceUnmutedDesc': 'Assistant voice is now unmuted',
    'goingToMarket': 'Showing you the market prices',
    'goingToOrganic': 'Taking you to organic farming page',
    'goingToTips': 'Showing you farming tips',
    'goingToSubsidies': 'Taking you to farm subsidies information',
    'goingToEquipment': 'Showing you farming equipment catalog',
    'goingToDeveloper': 'Taking you to developer page',
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
    'learnFarming': 'खेती सीखें',
    'weather': 'मौसम',
    'helpline': 'हेल्पलाइन',
    'resources': 'संसाधन',
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
    'helplineNumber': '1800-180-1551',
    
    // New sections
    'yourFarmingPartner': 'आपका कृषि साथी',
    'educationalResources': 'शैक्षिक संसाधन',
    'weatherDashboard': 'मौसम डैशबोर्ड',
    'warangalWeather': 'वारंगल जिले का मौसम',
    'readAloud': 'पढ़कर सुनाएं',
    'addUrea': 'यूरिया डालें',
    'soilFertility': 'मिट्टी की उर्वरता',
    'uploadSoilPhoto': 'मिट्टी की फोटो अपलोड करें',
    'cropRotation': 'फसल चक्र की मूल बातें',
    'organicFertilizers': 'जैविक उर्वरक गाइड',
    'waterConservation': 'पानी संरक्षण युक्तियाँ',
    'pestControl': 'कीट नियंत्रण विधियाँ',
    'soilHealth': 'मिट्टी स्वास्थ्य 101',
    
    // Voice Assistant Hindi
    'voiceAssistant': 'आवाज़ सहायक',
    'tapToSpeak': 'बोलने के लिए माइक्रोफोन पर टैप करें',
    'listeningNow': 'सुन रहा हूँ...',
    'speakingNow': 'बोल रहा हूँ...',
    'voiceError': 'आवाज़ पहचान में त्रुटि',
    'tryAgain': 'कृपया पुनः प्रयास करें',
    'voiceUnderstood': 'मैंने आपका अनुरोध समझा। मैं आपकी और कैसे मदद कर सकता हूँ?',
    'goingToWeather': 'आपको मौसम की जानकारी दिखा रहा हूँ',
    'goingToLearning': 'आपको खेती के पाठों पर ले जा रहा हूँ',
    
    // New Welcome Audio Translations
    'welcomeToAndata': 'अनदाता में आपका स्वागत है',
    'welcomeAnnouncement': 'अनदाता में आपका स्वागत है, आपका बुद्धिमान कृषि साथी। आज हम आपकी कैसे मदद कर सकते हैं?',
    'mute': 'ऑडियो म्यूट करें',
    'unmute': 'ऑडियो अनम्यूट करें',
    'startSpeaking': 'अपने वॉइस असिस्टेंट से बातचीत करने के लिए बोलना शुरू करें',
    'tryVoiceCommands': 'मौसम, फसल सलाह या बाजार मूल्य पूछने का प्रयास करें',
    'quickCommands': 'त्वरित आदेश',
    'voiceVolume': 'आवाज़ की मात्रा',
    'voiceSpeed': 'आवाज़ की गति',
    'clearHistory': 'इतिहास मिटाएं',
    'historyClear': 'इतिहास मिटा दिया गया',
    'historyClearDesc': 'आपका वार्तालाप इतिहास मिटा दिया गया है',
    'settings': 'सेटिंग्स',
    'chat': 'चैट',
    'speaking': 'बोल रहा है...',
    'voiceMuted': 'आवाज़ म्यूट की गई',
    'voiceMutedDesc': 'सहायक आवाज अब म्यूट है',
    'voiceUnmuted': 'आवाज़ अनम्यूट की गई',
    'voiceUnmutedDesc': 'सहायक आवाज अब अनम्यूट है',
    'goingToMarket': 'आपको बाजार भाव दिखा रहा हूँ',
    'goingToOrganic': 'आपको जैविक खेती पृष्ठ पर ले जा रहा हूँ',
    'goingToTips': 'आपको खेती के टिप्स दिखा रहा हूँ',
    'goingToSubsidies': 'आपको कृषि सब्सिडी की जानकारी पर ले जा रहा हूँ',
    'goingToEquipment': 'आपको कृषि उपकरण कैटलॉग दिखा रहा हूँ',
    'goingToDeveloper': 'आपको डेवलपर पृष्ठ पर ले जा रहा हूँ',
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
    'learnFarming': 'কৃষি শিখুন',
    'weather': 'আবহাওয়া',
    'helpline': 'হেল্পলাইন',
    'resources': 'সম্পদ',
    'farmingSmarter': 'স্মার্ট চাষাবাদ',
    'home': 'হোম',
    // Add basic translations for new terms
    'yourFarmingPartner': 'আপনার কৃষি সহযোগী',
    'educationalResources': 'শিক্ষামূলক সম্পদ',
    'weatherDashboard': 'আবহাওয়া ড্যাশবোর্ড',
    'readAloud': 'পড়ে শোনান',
    
    // Voice Assistant Bengali
    'voiceAssistant': 'ভয়েস সহকারী',
    'tapToSpeak': 'কথা বলতে মাইক্রোফোনে আলতো চাপুন',
    'listeningNow': 'শুনছি...',
    'speakingNow': 'বলছি...',
    'voiceError': 'ভয়েস স্বীকৃতি ত্রুটি',
    'tryAgain': 'অনুগ্রহ করে আবার চেষ্টা করুন',
    'voiceUnderstood': 'আমি আপনার অনুরোধ বুঝেছি। আমি আপনাকে আরও কীভাবে সাহায্য করতে পারি?',
    'goingToWeather': 'আপনাকে আবহাওয়ার তথ্য দেখাচ্ছি',
    'goingToLearning': 'আপনাকে কৃষি পাঠে নিয়ে যাচ্ছি',
    
    // New Welcome Audio Translations
    'welcomeToAndata': 'অনদাতা আপনাকে স্বাগত',
    'welcomeAnnouncement': 'অনদাতা আপনাকে স্বাগতম, আপনার বুদ্ধিমান কৃষি সঙ্গী। আজ আমরা আপনাকে কীভাবে সাহায্য করতে পারি?',
    'mute': 'অডিও নিঃশব্দ করুন',
    'unmute': 'অডিও সশব্দ করুন',
    'voiceMuted': 'ভয়েস নিঃশব্দ করা হয়েছে',
    'voiceMutedDesc': 'সহকারী ভয়েস এখন নিঃশব্দ করা হয়েছে',
    'voiceUnmuted': 'ভয়েস নিঃশব্দ করা হয়নি',
    'voiceUnmutedDesc': 'সহকারী ভয়েস এখন নিঃশব্দ করা হয়নি',
  },
  te: {
    // Telugu translations with voice assistant additions
    'empowerFarm': 'AI తో మీ వ్యవసాయాన్ని బలోపేతం చేయండి',
    'home': 'హోమ్',
    'cropAdvisor': 'పంట సలహాదారు',
    'soilScanner': 'నేల స్కానర్',
    'alerts': 'హెచ్చరికలు',
    'farmerTips': 'రైతు చిట్కాలు',
    'wasteIdeas': 'వ్యర్థ ఆలోచనలు',
    'learnFarming': 'వ్యవసాయం నేర్చుకోండి',
    'weather': 'వాతావరణం',
    'helpline': 'సహాయ వాణి',
    'resources': 'వనరులు',
    'selectLanguage': 'భాష ఎంచుకోండి',
    'yourFarmingPartner': 'మీ వ్యవసాయ భాగస్వామి',
    'readAloud': 'బిగ్గరగా చదవండి',
    
    // Voice Assistant Telugu
    'voiceAssistant': 'వాయిస్ అసిస్టెంట్',
    'tapToSpeak': 'మాట్లాడటానికి మైక్రోఫోన్‌ను నొక్కండి',
    'listeningNow': 'వింటున్నాను...',
    'speakingNow': 'మాట్లాడుతున్నాను...',
    'voiceError': 'వాయిస్ గుర్తింపు లోపం',
    'tryAgain': 'దయచేసి మళ్లీ ప్రయత్నించండి',
    'voiceUnderstood': 'మీ అభ్యర్థనను నేను అర్థం చేసుకున్నాను. నేను మీకు ఇంకా ఎలా సహాయపడగలను?',
    'goingToWeather': 'మీకు వాతావరణ సమాచారాన్ని చూపిస్తున్నాను',
    'goingToLearning': 'మిమ్మల్ని వ్యవసాయ పాఠాలకు తీసుకువెళ్తున్నాను',
    
    // New Welcome Audio Translations
    'welcomeToAndata': 'అందాతకు స్వాగతం',
    'welcomeAnnouncement': 'మీ తెలివైన వ్యవసాయ సహచరుడు అందాతకు స్వాగతం. ఈరోజు మేము మీకు ఎలా సహాయం చేయగలము?',
    'mute': 'శబ్దాన్ని మ్యూట్ చేయండి',
    'unmute': 'శబ్దాన్ని అన్మ్యూట్ చేయండి',
    'startSpeaking': 'మీ వాయిస్ అసిస్టెంట్‌తో ఇంటరాక్ట్ చేయడానికి మాట్లాడటం ప్రారంభించండి',
    'tryVoiceCommands': 'వాతావరణం, పంట సలహా లేదా మార్కెట్ ధరలను అడిగి చూడండి',
    'quickCommands': 'త్వరిత ఆదేశాలు',
    'voiceVolume': 'వాయిస్ వాల్యూమ్',
    'voiceSpeed': 'వాయిస్ వేగం',
    'clearHistory': 'చరిత్రను తొలగించండి',
    'historyClear': 'చరిత్ర క్లియర్ చేయబడింది',
    'historyClearDesc': 'మీ సంభాషణ చరిత్ర క్లియర్ చేయబడింది',
    'settings': 'సెట్టింగులు',
    'chat': 'చాట్',
    'speaking': 'మాట్లాడుతున్నాను...',
    'voiceMuted': 'వాయిస్ మ్యూట్ చేయబడింది',
    'voiceMutedDesc': 'సహాయకుడి వాయిస్ ఇప్పుడు మ్యూట్ చేయబడింది',
    'voiceUnmuted': 'వాయిస్ అన్మ్యూట్ చేయబడింది',
    'voiceUnmutedDesc': 'సహాయకుడి వాయిస్ ఇప్పుడు అన్మ్యూట్ చేయబడింది',
  },
  ta: {
    // Tamil translations with voice assistant additions
    'empowerFarm': 'AI உடன் உங்கள் விவசாயத்தை வலுப்படுத்துங்கள்',
    'home': 'முகப்பு',
    'cropAdvisor': 'பயிர் ஆலோசகர்',
    'soilScanner': 'மண் ஸ்கேனர்',
    'alerts': 'எச்சரிக்கைகள்',
    'farmerTips': 'விவசாயி குறிப்புகள்',
    'wasteIdeas': 'கழிவு யோசனைகள்',
    'learnFarming': 'விவசாயம் கற்றல்',
    'weather': 'வானிலை',
    'helpline': 'உதவி எண்',
    'resources': 'ஆதாரங்கள்',
    'selectLanguage': 'மொழியைத் தேர்ந்தெடுக்கவும்',
    'yourFarmingPartner': 'உங்கள் விவசாய கூட்டாளி',
    'readAloud': 'சத்தமாக படிக்கவும்',
    
    // Voice Assistant Tamil
    'voiceAssistant': 'குரல் உதவியாளர்',
    'tapToSpeak': 'பேச மைக்ரோஃபோனைத் தட்டவும்',
    'listeningNow': 'கேட்கிறேன்...',
    'speakingNow': 'பேசுகிறேன்...',
    'voiceError': 'குரல் அங்கீகார பிழை',
    'tryAgain': 'தயவுசெய்து மீண்டும் முயற்சிக்கவும்',
    'voiceUnderstood': 'உங்கள் கோரிக்கையை நான் புரிந்துகொண்டேன். நான் உங்களுக்கு மேலும் எவ்வாறு உதவ முடியும்?',
    'goingToWeather': 'உங்களுக்கு வானிலை தகவலைக் காட்டுகிறேன்',
    'goingToLearning': 'உங்களை விவசாய பாடங்களுக்கு அழைத்துச் செல்கிறேன்',
    
    // New Welcome Audio Translations
    'welcomeToAndata': 'அந்தாதாவிற்கு வரவேற்கிறோம்',
    'welcomeAnnouncement': 'உங்கள் அறிவார்ந்த விவசாய துணையான அந்தாதாவிற்கு வரவேற்கிறோம். இன்று உங்களுக்கு எவ்வாறு உதவ முடியும்?',
    'mute': 'ஒலி அடக்கு',
    'unmute': 'ஒலி இயக்கு',
    'voiceMuted': 'குரல் முடக்கப்பட்டது',
    'voiceMutedDesc': 'உதவியாளர் குரல் இப்போது முடக்கப்பட்டுள்ளது',
    'voiceUnmuted': 'குரல் இயக்கப்பட்டது',
    'voiceUnmutedDesc': 'உதவியாளர் குரல் இப்போது இயக்கப்பட்டுள்ளது',
  },
  kn: {
    // Kannada translations with voice assistant additions
    'empowerFarm': 'AI ನೊಂದಿಗೆ ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಸಬಲಗೊಳಿಸಿ',
    'home': 'ಮುಖಪುಟ',
    'cropAdvisor': 'ಬೆಳೆ ಸಲಹೆಗಾರ',
    'soilScanner': 'ಮಣ್ಣು ಸ್ಕ್ಯಾನರ್',
    'alerts': 'ಎಚ್ಚರಿಕೆಗಳು',
    'farmerTips': 'ರೈತರ ಸಲಹೆಗಳು',
    'wasteIdeas': 'ತ್ಯಾಜ್ಯ ಆಲೋಚನೆಗಳು',
    'learnFarming': 'ಕೃಷಿ ಕಲಿಯಿರಿ',
    'weather': 'ಹವಾಮಾನ',
    'helpline': 'ಸಹಾಯವಾಣಿ',
    'resources': 'ಸಂಪನ್ಮೂಲಗಳು',
    
    // Voice Assistant Kannada
    'voiceAssistant': 'ಧ್ವನಿ ಸಹಾಯಕ',
    'tapToSpeak': 'ಮಾತನಾಡಲು ಮೈಕ್ರೋಫೋನ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ',
    'listeningNow': 'ಕೇಳುತ್ತಿದ್ದೇನೆ...',
    'speakingNow': 'ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ...',
    'voiceError': 'ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ದೋಷ',
    'tryAgain': 'ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
    'voiceUnderstood': 'ನಾನು ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡೆ. ನಾನು ನಿಮಗೆ ಇನ್ನೂ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    'goingToWeather': 'ನಿಮಗೆ ಹವಾಮಾನ ಮಾಹಿತಿಯನ್ನು ತೋರಿಸುತ್ತಿದ್ದೇನೆ',
    'goingToLearning': 'ನಿಮ್ಮನ್ನು ಕೃಷಿ ಪಾಠಗಳಿಗೆ ಕರೆದುಕೊಂಡು ಹೋಗುತ್ತಿದ್ದೇನೆ'
  },
  // Minimal translations for remaining languages to make them functional
  mr: {
    'empowerFarm': 'AI सह आपल्या शेतीला सक्षम करा',
    'home': 'मुख्यपृष्ठ',
    'cropAdvisor': 'पीक सल्लागार',
    'soilScanner': 'माती स्कॅनर',
    'alerts': 'सूचना',
    'farmerTips': 'शेतकरी टिप्स',
    'wasteIdeas': 'कचरा कल्पना',
    'learnFarming': 'शेती शिका',
    'weather': 'हवामान',
    'helpline': 'मदत क्रमांक',
    'resources': 'संसाधने',
    'selectLanguage': 'भाषा निवडा',
    'yourFarmingPartner': 'तुमचा कृषी भागीदार',
    'readAloud': 'मोठ्याने वाचा'
  },
  gu: {
    'empowerFarm': 'AI સાથે તમારા ખેતરને સશક્ત બનાવો',
    'home': 'ઘર',
    'cropAdvisor': 'પાક સલાહકાર',
    'soilScanner': 'માટી સ્કેનર',
    'alerts': 'ચેતવણીઓ',
    'farmerTips': 'ખેડૂત ટીપ્સ',
    'wasteIdeas': 'કચરો વિચારો',
    'learnFarming': 'ખેતી શીખો',
    'weather': 'હવામાન',
    'helpline': 'મદદરૂપ નંબર',
    'resources': 'સંસાધનો',
    'selectLanguage': 'ભાષા પસંદ કરો',
    'yourFarmingPartner': 'તમારા ખેતી ભાગીદાર',
    'readAloud': 'મોટેથી વાંચો'
  },
  ml: {
    'empowerFarm': 'AI ഉപയോഗിച്ച് നിങ്ങളുടെ കൃഷിയിടം ശക്തിപ്പെടുത്തുക',
    'home': 'ഹോം',
    'cropAdvisor': 'വിള ഉപദേഷ്ടാവ്',
    'soilScanner': 'മണ്ണ് സ്കാനർ',
    'alerts': 'അറിയിപ്പുകൾ',
    'farmerTips': 'കർഷക ടിപ്പുകൾ',
    'wasteIdeas': 'മാലിന്യ ആശയങ്ങൾ',
    'learnFarming': 'കൃഷി പഠിക്കുക',
    'weather': 'കാലാവസ്ഥ',
    'helpline': 'ഹെൽപ്പ്ലൈൻ',
    'resources': 'വിഭവങ്ങൾ',
    'selectLanguage': 'ഭാഷ തിരഞ്ഞെടുക്കുക',
    'yourFarmingPartner': 'നിങ്ങളുടെ കൃഷി പങ്കാളി',
    'readAloud': 'ഉറക്കെ വായിക്കുക'
  },
  pa: {
    'empowerFarm': 'AI ਨਾਲ ਆਪਣੇ ਖੇਤ ਨੂੰ ਸ਼ਕਤੀਮਾਨ ਬਣਾਓ',
    'home': 'ਘਰ',
    'cropAdvisor': 'ਫ਼ਸਲ ਸਲਾਹਕਾਰ',
    'soilScanner': 'ਮਿੱਟੀ ਸਕੈਨਰ',
    'alerts': 'ਚੇਤਾਵਨੀਆਂ',
    'farmerTips': 'ਕਿਸਾਨ ਸੁਝਾਅ',
    'wasteIdeas': 'ਕੂੜਾ ਵਿਚਾਰ',
    'learnFarming': 'ਖੇਤੀ ਸਿੱਖੋ',
    'weather': 'ਮੌਸਮ',
    'helpline': 'ਮਦਦ ਲਾਈਨ',
    'resources': 'ਸਰੋਤ',
    'selectLanguage': 'ਭਾਸ਼ਾ ਚੁਣੋ',
    'yourFarmingPartner': 'ਤੁਹਾਡਾ ਖੇਤੀਬਾੜੀ ਭਾਈਵਾਲ',
    'readAloud': 'ਉੱਚੀ ਆਵਾਜ਼ ਵਿੱਚ ਪੜ੍ਹੋ'
  },
  or: {
    'empowerFarm': 'AI ସହିତ ଆପଣଙ୍କ କୃଷିକୁ ସଶକ୍ତ କରନ୍ତୁ',
    'home': 'ଘର',
    'cropAdvisor': 'ଫସଲ ପରାମର୍ଶଦାତା',
    'soilScanner': 'ମୃତ୍ତିକା ସ୍କାନର୍',
    'alerts': 'ସତର୍କତା',
    'farmerTips': 'ଚାଷୀ ଟିପ୍ସ',
    'wasteIdeas': 'ବର୍ଜ୍ୟବସ୍ତୁ ଚିନ୍ତାଧାରା',
    'learnFarming': 'କୃଷି ଶିଖନ୍ତୁ',
    'weather': 'ପାଣିପାଗ',
    'helpline': 'ସହାୟତା ଲାଇନ୍',
    'resources': 'ସମ୍ବଳ',
    'selectLanguage': 'ଭାଷା ଚୟନ କରନ୍ତୁ',
    'yourFarmingPartner': 'ଆପଣଙ୍କ କୃଷି ଭାଗୀଦାର',
    'readAloud': 'ଉଚ୍ଚ ସ୍ୱରରେ ପଢନ୍ତୁ'
  },
  as: {
    'empowerFarm': 'কৃত্রিম বুদ্ধিমত্তাৰে আপোনাৰ খেতিপথাৰ শক্তিশালী কৰক',
    'home': 'গৃহ',
    'cropAdvisor': 'শস্য উপদেষ্টা',
    'soilScanner': 'মাটি স্কেনাৰ',
    'alerts': 'সতৰ্কবাণী',
    'farmerTips': 'কৃষকৰ টিপছ',
    'wasteIdeas': 'আবৰ্জনা ধাৰণা',
    'learnFarming': 'কৃষি শিকক',
    'weather': 'বতৰ',
    'helpline': 'সাহায্য লাইন',
    'resources': 'সম্পদ',
    'selectLanguage': 'ভাষা নিৰ্বাচন কৰক',
    'yourFarmingPartner': 'আপোনাৰ কৃষি অংশীদাৰ',
    'readAloud': 'ডাঙৰকৈ পঢ়ক'
  },
  mai: {
    'empowerFarm': 'एआई के साथ अपने खेत को सशक्त बनाएं',
    'home': 'घर',
    'cropAdvisor': 'फसल सलाहकार',
    'soilScanner': 'माटि स्कैनर',
    'alerts': 'अलर्ट',
    'farmerTips': 'किसान टिप्स',
    'wasteIdeas': 'कचरा विचार',
    'learnFarming': 'खेती सीखू',
    'weather': 'मौसम',
    'helpline': 'हेल्पलाइन',
    'resources': 'संसाधन',
    'selectLanguage': 'भाषा चुनु',
    'yourFarmingPartner': 'अहाँक कृषि भागीदार',
    'readAloud': 'जोर सँ पढ़ू'
  },
  sat: {
    'empowerFarm': 'ᱮᱭᱟᱭ ᱥᱟᱶᱛᱮ ᱟᱢᱟᱜ ᱪᱟᱥ ᱠᱟᱹᱢᱤ ᱠᱮᱫ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ',
    'home': 'ᱚᱲᱟᱜ',
    'cropAdvisor': 'ᱪᱟᱥ ᱩᱫᱮᱥᱟᱹᱠ',
    'soilScanner': 'ᱦᱟᱥᱟ ᱥᱠᱮᱱᱟᱨ',
    'alerts': 'ᱮᱞᱟᱨᱴ',
    'farmerTips': 'ᱪᱟᱥ ᱠᱟᱹᱢᱤ ᱠᱩᱢᱩᱴ',
    'wasteIdeas': 'ᱵᱮᱜᱟᱨ ᱠᱩᱢᱩᱴ',
    'learnFarming': 'ᱪᱟᱥ ᱥᱮᱪᱮᱫ',
    'weather': 'ᱦᱚᱭ ᱦᱤᱥᱤᱫ',
    'helpline': 'ᱜᱚᱲᱚ ᱞᱟᱭᱤᱱ',
    'resources': 'ᱥᱟᱯᱲᱟᱣ',
    'selectLanguage': 'ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ',
    'yourFarmingPartner': 'ᱟᱢᱟᱜ ᱪᱟᱥ ᱜᱚᱲᱚᱢ',
    'readAloud': 'ᱡᱚᱨ ᱛᱮ ᱯᱟᱲᱦᱟᱣ ᱢᱮ'
  },
  ks: {
    'empowerFarm': 'اے آی سٟتؠ پننہٕ کھیٖتھ با اختیار بناو',
    'home': 'گھر',
    'cropAdvisor': 'فصلہٕ صلاح کار',
    'soilScanner': 'مٹی سکینر',
    'alerts': 'الرٹ',
    'farmerTips': 'کسان ٹپس',
    'wasteIdeas': 'فضول خیالات',
    'learnFarming': 'کاشتکاری سیکھو',
    'weather': 'موسم',
    'helpline': 'مدد گار لائن',
    'resources': 'وسائل',
    'selectLanguage': 'زبانہٕ چُنو',
    'yourFarmingPartner': 'تُہندِ کاشتکاری پارٹنر',
    'readAloud': 'زور سٟتؠ پرھو'
  },
  sd: {
    'empowerFarm': 'اي آءِ سان پنھنجي زمين کي بااختيار بڻايو',
    'home': 'گھر',
    'cropAdvisor': 'فصل جو صلاحڪار',
    'soilScanner': 'مٽي اسڪينر',
    'alerts': 'الرٽ',
    'farmerTips': 'هاريءَ جون صلاحون',
    'wasteIdeas': 'ڪچري جا خيال',
    'learnFarming': 'فارم ڪرڻ سکو',
    'weather': 'موسم',
    'helpline': 'مدد لاء لائن',
    'resources': 'وسائل',
    'selectLanguage': 'ٻولي چونڊيو',
    'yourFarmingPartner': 'توهان جو فارمنگ پارٽنر',
    'readAloud': 'زور سان پڙهو'
  },
  kok: {
    'empowerFarm': 'एआय वापरून तुमच्या शेताक सक्षम करात',
    'home': 'घर',
    'cropAdvisor': 'पिकाचो सल्लागार',
    'soilScanner': 'माती स्कॅनर',
    'alerts': 'सर्तकता',
    'farmerTips': 'शेतकारयांच्यो टिप्स',
    'wasteIdeas': 'कचऱ्याच्यो कल्पना',
    'learnFarming': 'शेती शिकून घ्या',
    'weather': 'हवामान',
    'helpline': 'मदत लाइन',
    'resources': 'साधनां',
    'selectLanguage': 'भास निवडात',
    'yourFarmingPartner': 'तुमचो शेती भागीदार',
    'readAloud': 'जोरान वाचयत'
  },
  doi: {
    'empowerFarm': 'एआई दे नाल अपने खेत गी ताकतवर बनाओ',
    'home': 'घर',
    'cropAdvisor': 'फसल सलाहकार',
    'soilScanner': 'मिट्टी स्कैनर',
    'alerts': 'अलर्ट',
    'farmerTips': 'किसान टिप्स',
    'wasteIdeas': 'बेकार विचार',
    'learnFarming': 'खेती सिखो',
    'weather': 'मौसम',
    'helpline': 'मदद लाइन',
    'resources': 'संसाधन',
    'selectLanguage': 'भाषा चुनो',
    'yourFarmingPartner': 'तुहाड़ा खेती भागीदार',
    'readAloud': 'उच्ची आवाज च पढ़ो'
  },
  mni: {
    'empowerFarm': 'এ.আই.গী খুৎথাংদা নখোয়গী লৌমীশিংবু মপাঙ্গল কলহন্নবা',
    'home': 'য়ুম',
    'cropAdvisor': 'লোইনশিংগী মতাংদা শিংনবা পীরিবা',
    'soilScanner': 'লৈবাক শকশিনবা',
    'alerts': 'এলার্ট',
    'weather': 'ৱেদর',
    'helpline': 'হেল্পলাইন',
    'resources': 'রিসোর্স',
  },
  brx: {
    'home': 'नोगोर',
    'cropAdvisor': 'अन्थाय सुबुंगिरि',
    'soilScanner': 'हा मोनिटर',
    'weather': 'मोसौ',
  },
  ur: {
    'home': 'ہوم',
    'cropAdvisor': 'فصل کا مشیر',
    'soilScanner': 'مٹی سکینر',
    'weather': 'موسم',
  },
  ne: {
    'home': 'होम',
    'cropAdvisor': 'बाली सल्लाहकार',
    'soilScanner': 'माटो स्क्यानर',
    'weather': 'मौसम',
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>(() => {
    // Try to get the language from localStorage first
    const savedLanguage = localStorage.getItem('language');
    // Check if it's a valid supported language
    if (savedLanguage && LANGUAGES.some(lang => lang.code === savedLanguage)) {
      return savedLanguage;
    }
    // Default to English
    return 'en';
  });

  // Save language preference to localStorage when it changes
  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[language]) {
      return translations.en[key] || key;
    }
    
    return translations[language][key] || translations.en[key] || key;
  };

  const value = { language, setLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
