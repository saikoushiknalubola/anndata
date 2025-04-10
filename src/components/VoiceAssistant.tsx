
import React, { useState, useRef, useEffect } from 'react';
import { Mic, Volume2, X, VolumeX, Flag, Info, Settings, Star, MessageSquare, HistoryIcon, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import Card from './Card';
import { useIsMobile } from '../hooks/use-mobile';

// This is a placeholder for integration with a proper TTS API
// In a production app, this would connect to Google TTS, ElevenLabs, etc.
const mockTextToSpeech = (text: string, language: string) => {
  console.log(`Speaking in ${language}: ${text}`);
  // In production, this would actually speak
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

// This is a placeholder for integration with a proper STT API
// In production, this would connect to a voice recognition service
const mockSpeechToText = (language: string): Promise<string> => {
  console.log(`Listening in ${language}...`);
  // In production, this would actually listen and return transcribed text
  return new Promise(resolve => {
    setTimeout(() => {
      const mockResponses: Record<string, string[]> = {
        en: ["Show me weather information", "How to grow rice?", "When to plant cotton?", "What are today's market prices?", "Show me organic farming tips"],
        hi: ["मौसम की जानकारी दिखाएं", "चावल कैसे उगाएं?", "कपास कब लगाएं?", "आज के बाजार भाव क्या हैं?", "जैविक खेती के टिप्स दिखाएं"],
        te: ["వాతావరణ సమాచారాన్ని చూపించండి", "వరి ఎలా పెంచాలి?", "పత్తిని ఎప్పుడు నాటాలి?", "నేటి మార్కెట్ ధరలు ఎంత?", "సేంద్రియ వ్యవసాయ చిట్కాలు చూపించండి"],
        ta: ["வானிலை தகவலைக் காட்டு", "நெல் எப்படி வளர்க்க வேண்டும்?", "பருத்தி எப்போது நடவு செய்ய வேண்டும்?", "இன்றைய சந்தை விலைகள்?", "இயற்கை விவசாய குறிப்புகளைக் காட்டு"],
        bn: ["আবহাওয়ার তথ্য দেখান", "ধান কীভাবে উৎপাদন করবেন?", "তুলা কখন লাগাতে হবে?", "আজকের বাজার দর কত?", "জৈব কৃষি টিপস দেখান"],
        kn: ["ಹವಾಮಾನ ಮಾಹಿತಿಯನ್ನು ತೋರಿಸಿ", "ಭತ್ತ ಹೇಗೆ ಬೆಳೆಯಬೇಕು?", "ಹತ್ತಿ ಯಾವಾಗ ನೆಡಬೇಕು?", "ಇಂದಿನ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಎಷ್ಟು?", "ಸಾವಯವ ಕೃಷಿ ಸಲಹೆಗಳನ್ನು ತೋರಿಸಿ"],
      };
      
      const languageCode = language.substring(0, 2);
      const responses = mockResponses[languageCode] || mockResponses.en;
      const randomIndex = Math.floor(Math.random() * responses.length);
      
      resolve(responses[randomIndex]);
    }, 3000);
  });
};

// Quick commands for the voice assistant
const quickCommands = [
  { label: 'Weather', command: 'Show me weather information', icon: '🌤️' },
  { label: 'Market', command: 'What are today\'s market prices?', icon: '📊' },
  { label: 'Crops', command: 'How to grow rice?', icon: '🌾' },
  { label: 'Tips', command: 'Show me farming tips', icon: '💡' },
];

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [muted, setMuted] = useState(false);
  const [history, setHistory] = useState<{type: 'user' | 'assistant', text: string}[]>([]);
  const [quickCommandVisible, setQuickCommandVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'settings'>('chat');
  const [voiceSpeed, setVoiceSpeed] = useState(1);
  const [voiceVolume, setVoiceVolume] = useState(0.8);
  const [isMinimized, setIsMinimized] = useState(false);
  const assistantRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();

  // Map to language codes supported by TTS (in a real implementation)
  const getLanguageForTTS = () => {
    const langMap: Record<string, string> = {
      en: 'en-US',
      hi: 'hi-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      bn: 'bn-IN',
      kn: 'kn-IN',
    };
    return langMap[language.substring(0, 2)] || 'en-US';
  };

  const toggleListening = async () => {
    if (isListening) {
      stopListening();
      return;
    }

    setIsListening(true);
    setTranscript('');
    
    try {
      // In a real app, this would use the Web Speech API or a similar service
      const result = await mockSpeechToText(getLanguageForTTS());
      setTranscript(result);
      setHistory(prev => [...prev, {type: 'user', text: result}]);
      
      // Process the command (simplified mock implementation)
      handleVoiceCommand(result);
    } catch (error) {
      console.error('Speech recognition error:', error);
      toast({
        title: t('voiceError'),
        description: t('tryAgain'),
        variant: 'destructive',
      });
    } finally {
      setIsListening(false);
    }
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const speak = async (text: string) => {
    if (muted) return;
    
    setIsSpeaking(true);
    try {
      await mockTextToSpeech(text, getLanguageForTTS());
      setHistory(prev => [...prev, {type: 'assistant', text}]);
    } catch (error) {
      console.error('Text-to-speech error:', error);
    } finally {
      setIsSpeaking(false);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
    toast({
      title: muted ? t('voiceUnmuted') : t('voiceMuted'),
      description: muted ? t('voiceUnmutedDesc') : t('voiceMutedDesc'),
    });
  };

  const executeQuickCommand = (command: string) => {
    setTranscript(command);
    setHistory(prev => [...prev, {type: 'user', text: command}]);
    handleVoiceCommand(command);
    setQuickCommandVisible(false);
  };

  const clearHistory = () => {
    setHistory([]);
    toast({
      title: t('historyClear'),
      description: t('historyClearDesc'),
    });
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    // Example command handling with expanded functionality
    if (lowerCommand.includes('weather') || lowerCommand.includes('मौसम') || 
        lowerCommand.includes('వాతావరణ') || lowerCommand.includes('வானிலை') || 
        lowerCommand.includes('আবহাওয়া') || lowerCommand.includes('ಹವಾಮಾನ')) {
      
      window.location.href = '/weather';
      speak(t('goingToWeather'));
    } 
    else if (lowerCommand.includes('market') || lowerCommand.includes('price') || 
             lowerCommand.includes('बाजार') || lowerCommand.includes('మార్కెట్') || 
             lowerCommand.includes('சந்தை') || lowerCommand.includes('बाजार') || 
             lowerCommand.includes('ಮಾರುಕಟ್ಟೆ')) {
      
      window.location.href = '/market-prices';
      speak(t('goingToMarket'));
    }
    else if (lowerCommand.includes('organic') || lowerCommand.includes('जैविक') || 
             lowerCommand.includes('సేంద్రియ') || lowerCommand.includes('இயற்கை') || 
             lowerCommand.includes('জৈব') || lowerCommand.includes('ಸಾವಯವ')) {
      
      window.location.href = '/organic-farming';
      speak(t('goingToOrganic'));
    }
    else if (lowerCommand.includes('grow') || lowerCommand.includes('उगाएं') || 
             lowerCommand.includes('పెంచాలి') || lowerCommand.includes('வளர்க்க') || 
             lowerCommand.includes('উৎপাদন') || lowerCommand.includes('ಬೆಳೆಯಬೇಕು')) {
      
      window.location.href = '/learn-farming';
      speak(t('goingToLearning'));
    }
    else if (lowerCommand.includes('tips') || lowerCommand.includes('advice') || 
             lowerCommand.includes('सलाह') || lowerCommand.includes('చిట్కాలు') || 
             lowerCommand.includes('குறிப்புகள்') || lowerCommand.includes('টিপস') || 
             lowerCommand.includes('ಸಲಹೆಗಳು')) {
      
      window.location.href = '/farmer-tips';
      speak(t('goingToTips'));
    }
    else if (lowerCommand.includes('subsid') || lowerCommand.includes('सब्सिडी') || 
             lowerCommand.includes('సబ్సిడీ') || lowerCommand.includes('மானியம்') || 
             lowerCommand.includes('ভর্তুকি') || lowerCommand.includes('ಸಬ್ಸಿಡಿ')) {
      
      window.location.href = '/farm-subsidies';
      speak(t('goingToSubsidies'));
    }
    else if (lowerCommand.includes('equipment') || lowerCommand.includes('उपकरण') || 
             lowerCommand.includes('పరికరాలు') || lowerCommand.includes('உபகரணம்') || 
             lowerCommand.includes('যন্ত্রপাতি') || lowerCommand.includes('ಉಪಕರಣಗಳು')) {
      
      window.location.href = '/equipment-catalog';
      speak(t('goingToEquipment'));
    }
    else if (lowerCommand.includes('developer') || lowerCommand.includes('कोडर') || 
             lowerCommand.includes('డెవలపర్') || lowerCommand.includes('டெவலப்பர்')) {
      
      window.location.href = '/developer';
      speak(t('goingToDeveloper'));
    }
    else {
      // Generic response for unrecognized commands
      speak(t('voiceUnderstood'));
    }
  };

  // Scroll to bottom of chat whenever history changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (assistantRef.current && !assistantRef.current.contains(event.target as Node)) {
        // Don't close, just minimize when clicking outside
        if (isOpen && !isMinimized) {
          setIsMinimized(true);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMinimized]);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)} 
        className="voice-assistant-btn bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 shadow-md"
        aria-label={t('voiceAssistant')}
      >
        <Mic size={22} className="text-white" />
      </button>
    );
  }

  // Minimized view
  if (isMinimized) {
    return (
      <div ref={assistantRef} className="fixed bottom-16 right-3 rounded-lg shadow-xl z-30 overflow-hidden">
        <div 
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 p-3 text-white flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
        >
          {isSpeaking ? (
            <Volume2 size={18} className="animate-pulse" />
          ) : (
            <Mic size={18} />
          )}
          <span className="text-sm font-medium">
            {isSpeaking ? t('speaking') : t('voiceAssistant')}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div ref={assistantRef} className="fixed bottom-16 right-3 w-[90vw] max-w-80 rounded-lg shadow-xl z-30 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 p-2 text-white flex justify-between items-center">
        <div className="flex items-center">
          <Star size={14} className="mr-1 text-yellow-300" />
          <span className="ml-1 font-medium text-sm">{t('voiceAssistant')}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={toggleMinimize} className="text-white hover:text-white/70 p-1">
            <span className="block h-0.5 w-4 bg-white"></span>
          </button>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/70 p-1">
            <X size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-3 bg-white border border-purple-200">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-3">
          <button 
            className={`px-3 py-2 text-xs font-medium flex items-center gap-1 ${
              activeTab === 'chat' 
                ? 'text-purple-600 border-b-2 border-purple-500' 
                : 'text-gray-500 hover:text-purple-500'
            }`}
            onClick={() => setActiveTab('chat')}
          >
            <MessageSquare size={14} />
            {t('chat')}
          </button>
          <button 
            className={`px-3 py-2 text-xs font-medium flex items-center gap-1 ${
              activeTab === 'settings' 
                ? 'text-purple-600 border-b-2 border-purple-500' 
                : 'text-gray-500 hover:text-purple-500'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={14} />
            {t('settings')}
          </button>
        </div>
        
        {activeTab === 'chat' ? (
          <>
            <div 
              ref={chatContainerRef}
              className="h-48 overflow-y-auto mb-3 p-2 bg-gray-50 rounded-md shadow-inner"
            >
              {history.length > 0 ? (
                <div className="space-y-2">
                  {history.map((item, idx) => (
                    <div key={idx} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-2 rounded-lg ${
                        item.type === 'user' 
                          ? 'bg-indigo-100 text-indigo-900 ml-auto' 
                          : 'bg-purple-100 text-purple-900'
                      }`}>
                        <p className="text-xs">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-xs space-y-2">
                  <Info size={20} className="text-purple-400 mb-1" />
                  <p>{t('startSpeaking')}</p>
                  <p className="text-xs text-purple-400">{t('tryVoiceCommands')}</p>
                </div>
              )}
            </div>
            
            {transcript && (
              <div className="mb-3 p-2 bg-indigo-50 rounded-md shadow-sm border border-indigo-100">
                <p className="text-xs text-indigo-700 font-medium">{transcript}</p>
              </div>
            )}
            
            {/* Quick commands */}
            {quickCommandVisible && (
              <div className="mb-3 p-2 bg-white rounded-md shadow-sm border border-gray-200">
                <p className="text-xs text-gray-500 mb-2 font-medium">{t('quickCommands')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickCommands.map((cmd, idx) => (
                    <button
                      key={idx}
                      onClick={() => executeQuickCommand(cmd.command)}
                      className="text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 p-2 rounded-md flex items-center space-x-1 transition-colors"
                    >
                      <span>{cmd.icon}</span>
                      <span>{cmd.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-col items-center">
              <div className="flex justify-center space-x-3 mb-3">
                <button
                  onClick={() => setQuickCommandVisible(!quickCommandVisible)}
                  className={`p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors`}
                >
                  <HistoryIcon size={16} />
                </button>
                <button
                  onClick={toggleListening}
                  disabled={isSpeaking}
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    isListening 
                      ? 'bg-red-500 animate-pulse' 
                      : 'bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 hover:shadow-lg'
                  } text-white transition-all duration-300 shadow-lg`}
                >
                  {isListening ? (
                    <Loader size={24} className="animate-spin" />
                  ) : (
                    <Mic size={24} />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className={`p-2 rounded-full ${
                    muted ? 'bg-gray-300' : 'bg-indigo-500'
                  } text-white hover:opacity-90 transition-opacity`}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
              
              <p className="text-xs text-gray-600 text-center max-w-[80%]">
                {isListening 
                  ? t('listeningNow') 
                  : isSpeaking 
                    ? t('speakingNow')
                    : t('tapToSpeak')}
              </p>
            </div>
          </>
        ) : (
          // Settings tab
          <div className="space-y-4 p-1">
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">{t('voiceVolume')}</label>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1"
                value={voiceVolume}
                onChange={(e) => setVoiceVolume(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">{t('voiceSpeed')}</label>
              <input 
                type="range" 
                min="0.5" 
                max="2" 
                step="0.1"
                value={voiceSpeed}
                onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>
            <div className="pt-2">
              <button
                onClick={clearHistory}
                className="w-full py-2 text-xs text-white bg-purple-500 rounded-md hover:bg-purple-600 transition-colors"
              >
                {t('clearHistory')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
