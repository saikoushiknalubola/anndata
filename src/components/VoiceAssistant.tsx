
import React, { useState, useRef, useEffect } from 'react';
import { Mic, Volume2, X, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

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
        className="voice-assistant-btn animate-pulse-gentle"
        aria-label={t('voiceAssistant')}
      >
        <Mic size={24} />
      </button>
    );
  }

  return (
    <div ref={assistantRef} className="fixed bottom-20 right-4 w-64 bg-white rounded-lg shadow-xl z-30 overflow-hidden">
      <div className="bg-gradient-to-r from-saffron to-earth p-3 text-white flex justify-between items-center">
        <div className="flex items-center">
          {isSpeaking ? <Volume2 size={20} /> : <Mic size={20} />}
          <span className="ml-2 font-medium">{t('voiceAssistant')}</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white hover:text-cream">
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4 bg-cream/30">
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
                : 'bg-gradient-to-r from-saffron to-earth hover:from-earth hover:to-saffron'
            } text-white transition-all duration-300 shadow-lg`}
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
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
