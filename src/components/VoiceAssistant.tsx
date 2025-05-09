
import React, { useState, useRef, useEffect } from 'react';
import { Mic, Volume2, X, VolumeX, Flag, Info, Settings, Star, MessageSquare, HistoryIcon, Loader, User, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import Card from './Card';
import Button from './Button';
import { useIsMobile } from '../hooks/use-mobile';
import { generateSpeech, playAudio } from '../utils/audioUtils';

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

// Quick commands for the voice assistant with icons
const quickCommands = [
  { label: 'Weather', command: 'Show me weather information', icon: '🌤️' },
  { label: 'Market', command: 'What are today\'s market prices?', icon: '📊' },
  { label: 'Crops', command: 'How to grow rice?', icon: '🌾' },
  { label: 'Tips', command: 'Show me farming tips', icon: '💡' },
  { label: 'Water', command: 'How to save water?', icon: '💧' },
  { label: 'Pests', command: 'How to control pests?', icon: '🐞' },
];

const VoiceAssistant: React.FC<{homeMode?: boolean}> = ({ homeMode = false }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isOpen, setIsOpen] = useState(homeMode);
  const [transcript, setTranscript] = useState('');
  const [muted, setMuted] = useState(false);
  const [history, setHistory] = useState<{type: 'user' | 'assistant', text: string}[]>([]);
  const [quickCommandVisible, setQuickCommandVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'settings'>('chat');
  const [voiceSpeed, setVoiceSpeed] = useState(1);
  const [voiceVolume, setVoiceVolume] = useState(0.8);
  const [isMinimized, setIsMinimized] = useState(!homeMode);
  const [speechRecognition, setSpeechRecognition] = useState<any>(null);
  const assistantRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();

  // New animation states
  const [isAnimating, setIsAnimating] = useState(false);
  const [rippleActive, setRippleActive] = useState(false);

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
    setRippleActive(true);
    
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
      setRippleActive(false);
    }
  };

  const stopListening = () => {
    setIsListening(false);
    setRippleActive(false);
    if (speechRecognition) {
      speechRecognition.stop();
    }
  };

  const speak = async (text: string) => {
    if (muted) return;
    
    setIsSpeaking(true);
    setIsAnimating(true);
    try {
      // Use the ElevenLabs TTS API through our util function
      const audioUrl = await generateSpeech(text, getLanguageForTTS());
      await playAudio(audioUrl, voiceVolume);
      setHistory(prev => [...prev, {type: 'assistant', text}]);
    } catch (error) {
      console.error('Text-to-speech error:', error);
    } finally {
      setIsSpeaking(false);
      setIsAnimating(false);
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
             lowerCommand.includes('சந்தை') || lowerCommand.includes('বাজার') || 
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
    else if (lowerCommand.includes('soil') || lowerCommand.includes('मिट्टी') ||
             lowerCommand.includes('నేల') || lowerCommand.includes('மண்') ||
             lowerCommand.includes('মাটি') || lowerCommand.includes('ಮಣ್ಣು')) {
      
      window.location.href = '/soil-scanner';
      speak(t('goingToSoil'));
    }
    else if (lowerCommand.includes('water') || lowerCommand.includes('पानी') ||
             lowerCommand.includes('నీరు') || lowerCommand.includes('நீர்') ||
             lowerCommand.includes('জল') || lowerCommand.includes('ನೀರು')) {
      
      window.location.href = '/water-management';
      speak(t('goingToWater'));
    }
    else if (lowerCommand.includes('pest') || lowerCommand.includes('कीट') ||
             lowerCommand.includes('పురుగు') || lowerCommand.includes('பூச்சி') ||
             lowerCommand.includes('কীটপতঙ্গ') || lowerCommand.includes('ಕೀಟ')) {
      
      window.location.href = '/pest-control';
      speak(t('goingToPests'));
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
      if (assistantRef.current && !assistantRef.current.contains(event.target as Node) && !homeMode) {
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
  }, [isOpen, isMinimized, homeMode]);

  // Home mode large Mic Button rendering
  if (homeMode) {
    return (
      <div className="flex flex-col items-center justify-center mt-4 mb-8">
        <div className="text-center mb-4">
          <p className="text-sm sm:text-base text-soil/80">{t('tapToSpeak')}</p>
        </div>
        
        <div 
          className={`relative ${isListening ? 'scale-110' : ''} transition-all duration-300`}
          onClick={toggleListening}
        >
          <button 
            disabled={isSpeaking}
            className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center 
            ${isListening 
              ? 'bg-red-500 animate-pulse' 
              : 'bg-gradient-to-r from-[#34C759] to-[#138808]'} 
            text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative z-10`}
          >
            {isListening ? (
              <Loader size={36} className="animate-spin text-white" />
            ) : isSpeaking ? (
              <Volume2 size={36} className={`${isAnimating ? 'animate-pulse' : ''}`} />
            ) : (
              <Mic size={36} />
            )}
          </button>
          
          {/* Voice ripple animation */}
          {rippleActive && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#34C759]/30 animate-[ripple_2s_ease-out_infinite]"></span>
              <span className="absolute inset-0 rounded-full bg-[#34C759]/20 animate-[ripple_2s_ease-out_0.5s_infinite]"></span>
              <span className="absolute inset-0 rounded-full bg-[#34C759]/10 animate-[ripple_2s_ease-out_1s_infinite]"></span>
            </>
          )}
        </div>
        
        <div className="mt-4">
          {transcript && (
            <Card variant="govt" className="animate-fade-in max-w-md mx-auto">
              <p className="text-center text-soil">{transcript}</p>
            </Card>
          )}
        </div>
        
        {/* Quick command chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-5 max-w-md mx-auto">
          {quickCommands.map((cmd, idx) => (
            <button
              key={idx}
              onClick={() => executeQuickCommand(cmd.command)}
              className="text-xs bg-gradient-to-r from-[#FF9933]/10 to-[#4285F4]/10 hover:from-[#FF9933]/20 hover:to-[#4285F4]/20 
                       text-soil p-2 rounded-full flex items-center space-x-1 transition-colors border border-[#FF9933]/30"
            >
              <span>{cmd.icon}</span>
              <span className="ml-1">{cmd.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Standard floating voice assistant
  return (
    <>
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)} 
          className="fixed right-4 bottom-20 md:bottom-8 text-white p-4 rounded-full shadow-lg z-20 
                   bg-gradient-to-r from-[#34C759] to-[#138808] hover:shadow-xl transition-all duration-300"
          aria-label={t('voiceAssistant')}
        >
          <Mic size={24} className="text-white" />
          <span className="sr-only">{t('voiceAssistant')}</span>
          <span className="absolute inset-0 rounded-full bg-[#34C759]/30 animate-[ripple_3s_ease-out_infinite]"></span>
        </button>
      ) : isMinimized ? (
        <div ref={assistantRef} className="fixed bottom-16 md:bottom-8 right-4 rounded-lg shadow-xl z-30 overflow-hidden">
          <div 
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-r from-[#34C759] to-[#138808] p-3 text-white flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
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
      ) : (
        <div ref={assistantRef} className="fixed bottom-16 md:bottom-8 right-4 w-[90vw] max-w-80 rounded-lg shadow-xl z-30 overflow-hidden">
          <div className="bg-gradient-to-r from-[#34C759] to-[#138808] p-3 text-white flex justify-between items-center">
            <div className="flex items-center">
              <Flag size={14} className="mr-1" />
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
          
          <div className="p-3 bg-white border border-[#4285F4]/10">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-3">
              <button 
                className={`px-3 py-2 text-xs font-medium flex items-center gap-1 ${
                  activeTab === 'chat' 
                    ? 'text-[#34C759] border-b-2 border-[#34C759]' 
                    : 'text-gray-500 hover:text-[#34C759]'
                }`}
                onClick={() => setActiveTab('chat')}
              >
                <MessageSquare size={14} />
                {t('chat')}
              </button>
              <button 
                className={`px-3 py-2 text-xs font-medium flex items-center gap-1 ${
                  activeTab === 'settings' 
                    ? 'text-[#34C759] border-b-2 border-[#34C759]' 
                    : 'text-gray-500 hover:text-[#34C759]'
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
                  className="h-48 overflow-y-auto mb-3 p-2 bg-gray-50 rounded-md shadow-inner scrollbar-custom"
                >
                  {history.length > 0 ? (
                    <div className="space-y-2">
                      {history.map((item, idx) => (
                        <div key={idx} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] p-2 rounded-lg flex items-start gap-2 ${
                            item.type === 'user' 
                              ? 'bg-[#4285F4]/10 text-soil ml-auto' 
                              : 'bg-[#34C759]/10 text-soil'
                          }`}>
                            {item.type === 'assistant' && (
                              <div className="rounded-full bg-[#34C759]/20 p-1 mt-0.5">
                                <Bot size={12} className="text-[#34C759]" />
                              </div>
                            )}
                            <p className="text-xs flex-1">{item.text}</p>
                            {item.type === 'user' && (
                              <div className="rounded-full bg-[#4285F4]/20 p-1 mt-0.5">
                                <User size={12} className="text-[#4285F4]" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-500 text-xs space-y-2">
                      <Info size={20} className="text-[#34C759] mb-1" />
                      <p>{t('startSpeaking')}</p>
                      <p className="text-xs text-[#34C759]">{t('tryVoiceCommands')}</p>
                    </div>
                  )}
                </div>
                
                {transcript && (
                  <div className="mb-3 p-2 bg-[#34C759]/5 rounded-md shadow-sm border border-[#34C759]/10">
                    <p className="text-xs text-soil font-medium">{transcript}</p>
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
                          className="text-xs bg-[#34C759]/10 hover:bg-[#34C759]/20 text-soil p-2 
                                   rounded-md flex items-center space-x-1 transition-colors"
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
                      className={`w-14 h-14 rounded-full flex items-center justify-center relative ${
                        isListening 
                          ? 'bg-red-500 animate-pulse' 
                          : 'bg-gradient-to-r from-[#34C759] to-[#138808] hover:shadow-lg'
                      } text-white transition-all duration-300 shadow-lg`}
                    >
                      {isListening ? (
                        <Loader size={24} className="animate-spin" />
                      ) : (
                        <Mic size={24} />
                      )}
                      
                      {/* Voice ripple animation */}
                      {rippleActive && (
                        <>
                          <span className="absolute inset-0 rounded-full bg-[#34C759]/30 animate-[ripple_2s_ease-out_infinite]"></span>
                          <span className="absolute inset-0 rounded-full bg-[#34C759]/20 animate-[ripple_2s_ease-out_0.5s_infinite]"></span>
                          <span className="absolute inset-0 rounded-full bg-[#34C759]/10 animate-[ripple_2s_ease-out_1s_infinite]"></span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className={`p-2 rounded-full ${
                        muted ? 'bg-gray-300' : 'bg-[#34C759]'
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
                    className="voice-assistant-settings-slider w-full h-2 bg-[#34C759]/20 rounded-lg appearance-none cursor-pointer"
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
                    className="voice-assistant-settings-slider w-full h-2 bg-[#34C759]/20 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    fullWidth
                    size="sm"
                    onClick={clearHistory}
                  >
                    {t('clearHistory')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;

