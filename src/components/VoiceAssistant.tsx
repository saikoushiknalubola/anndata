
import React, { useState, useRef, useEffect } from 'react';
import { Mic, Volume2, X, VolumeX, Flag, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import Card from './Card';

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
        en: ["Show me weather information", "How to grow rice?", "When to plant cotton?"],
        hi: ["मौसम की जानकारी दिखाएं", "चावल कैसे उगाएं?", "कपास कब लगाएं?"],
        te: ["వాతావరణ సమాచారాన్ని చూపించండి", "వరి ఎలా పెంచాలి?", "పత్తిని ఎప్పుడు నాటాలి?"],
        ta: ["வானிலை தகவலைக் காட்டு", "நெல் எப்படி வளர்க்க வேண்டும்?", "பருத்தி எப்போது நடவு செய்ய வேண்டும்?"],
        bn: ["আবহাওয়ার তথ্য দেখান", "ধান কীভাবে উৎপাদন করবেন?", "তুলা কখন লাগাতে হবে?"],
        kn: ["ಹವಾಮಾನ ಮಾಹಿತಿಯನ್ನು ತೋರಿಸಿ", "ಭತ್ತ ಹೇಗೆ ಬೆಳೆಯಬೇಕು?", "ಹತ್ತಿ ಯಾವಾಗ ನೆಡಬೇಕು?"],
      };
      
      const languageCode = language.substring(0, 2);
      const responses = mockResponses[languageCode] || mockResponses.en;
      const randomIndex = Math.floor(Math.random() * responses.length);
      
      resolve(responses[randomIndex]);
    }, 3000);
  });
};

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [muted, setMuted] = useState(false);
  const [history, setHistory] = useState<{type: 'user' | 'assistant', text: string}[]>([]);
  const assistantRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

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
  };

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    // Example command handling
    if (lowerCommand.includes('weather') || lowerCommand.includes('मौसम') || 
        lowerCommand.includes('వాతావరణ') || lowerCommand.includes('வானிலை') || 
        lowerCommand.includes('আবহাওয়া') || lowerCommand.includes('ಹವಾಮಾನ')) {
      
      window.location.href = '/weather';
      speak(t('goingToWeather'));
    } 
    else if (lowerCommand.includes('grow') || lowerCommand.includes('उगाएं') || 
             lowerCommand.includes('పెంచాలి') || lowerCommand.includes('வளர்க்க') || 
             lowerCommand.includes('উৎপাদন') || lowerCommand.includes('ಬೆಳೆಯಬೇಕು')) {
      
      window.location.href = '/learn-farming';
      speak(t('goingToLearning'));
    }
    else {
      // Generic response for unrecognized commands
      speak(t('voiceUnderstood'));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (assistantRef.current && !assistantRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)} 
        className="voice-assistant-btn bg-gradient-to-r from-saffron via-white to-leaf"
        aria-label={t('voiceAssistant')}
      >
        <Mic size={24} className="text-soil" />
      </button>
    );
  }

  return (
    <div ref={assistantRef} className="fixed bottom-20 right-4 w-80 sm:w-96 rounded-lg shadow-xl z-30 overflow-hidden">
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-3 text-soil flex justify-between items-center">
        <div className="flex items-center">
          <Flag size={16} className="mr-1" />
          <span className="ml-2 font-medium">{t('voiceAssistant')}</span>
          <Info size={14} className="ml-1 text-soil/60" />
        </div>
        <button onClick={() => setIsOpen(false)} className="text-soil hover:text-soil/70">
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4 bg-cream/30 border border-saffron/20">
        <div className="h-60 overflow-y-auto mb-4 p-2 bg-white/80 rounded-md shadow-inner">
          {history.length > 0 ? (
            <div className="space-y-3">
              {history.map((item, idx) => (
                <div key={idx} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-2 rounded-lg ${
                    item.type === 'user' 
                      ? 'bg-leaf/20 text-earth ml-auto' 
                      : 'bg-saffron/20 text-soil'
                  }`}>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-soil/50 text-sm">
              {t('startSpeaking')}
            </div>
          )}
        </div>
        
        {transcript && (
          <div className="mb-4 p-3 bg-white rounded-md shadow-sm">
            <p className="text-sm text-earth">{transcript}</p>
          </div>
        )}
        
        <div className="flex flex-col items-center">
          <button
            onClick={toggleListening}
            disabled={isSpeaking}
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
              isListening 
                ? 'bg-red-500 animate-pulse' 
                : 'bg-gradient-to-r from-[#FF9933] via-white to-[#138808] hover:shadow-lg'
            } text-soil transition-all duration-300 shadow-lg`}
          >
            <Mic size={28} />
          </button>
          
          <div className="flex justify-center space-x-3">
            <button
              onClick={toggleMute}
              className={`p-2 rounded-full ${
                muted ? 'bg-gray-300' : 'bg-saffron/80'
              } text-white`}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
          
          <p className="text-xs text-earth mt-3 text-center">
            {isListening 
              ? t('listeningNow') 
              : isSpeaking 
                ? t('speakingNow')
                : t('tapToSpeak')}
          </p>
          
          <div className="mt-4 w-full flex justify-center">
            <img 
              src="/lovable-uploads/e17e17d5-c387-4c00-85cb-497be4a7a72c.png" 
              alt="Digital India Logo" 
              className="h-5 mx-1 opacity-80"
            />
            <img 
              src="/lovable-uploads/076d86c2-8822-48f5-8d2a-a9bce74c1509.png" 
              alt="G20 Logo" 
              className="h-5 mx-1 opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
