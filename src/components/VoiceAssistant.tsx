
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX, Settings, X, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface VoiceAssistantProps {
  homeMode?: boolean;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ homeMode = false }) => {
  const { language, t } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(80);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voiceGender, setVoiceGender] = useState<'male' | 'female'>('female');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<any>(null);

  const startListening = async () => {
    try {
      setIsListening(true);
      
      if ('webkitSpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
        
        recognitionRef.current.onresult = async (event: any) => {
          const transcript = event.results[0][0].transcript;
          await handleVoiceResponse(transcript);
        };
        
        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };
        
        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
        
        recognitionRef.current.start();
      }
    } catch (error) {
      console.error('Speech recognition error:', error);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleVoiceResponse = async (userInput: string) => {
    try {
      const responses = {
        en: {
          greeting: "Hello! I'm your farming assistant. How can I help you today?",
          weather: "Today's weather is sunny with 28°C temperature and 65% humidity. Perfect for farming activities!",
          crops: "Based on your location, I recommend growing rice, wheat, or cotton this season.",
          soil: "Your soil health appears to be good. Consider adding organic compost for better nutrients.",
          default: "I'm here to help with your farming questions. You can ask about weather, crops, soil, or market prices."
        },
        hi: {
          greeting: "नमस्ते! मैं आपका खेती सहायक हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?",
          weather: "आज का मौसम धूप वाला है, तापमान 28°C और आर्द्रता 65% है। खेती के काम के लिए बहुत अच्छा!",
          crops: "आपके स्थान के अनुसार, मैं इस मौसम में धान, गेहूं, या कपास उगाने की सलाह देता हूं।",
          soil: "आपकी मिट्टी का स्वास्थ्य अच्छा लग रहा है। बेहतर पोषक तत्वों के लिए जैविक खाद डालने पर विचार करें।",
          default: "मैं आपके खेती के सवालों में मदद के लिए यहां हूं। आप मौसम, फसल, मिट्टी, या बाजार भाव के बारे में पूछ सकते हैं।"
        }
      };

      let responseText = responses[language as keyof typeof responses].default;
      
      const input = userInput.toLowerCase();
      if (input.includes('weather') || input.includes('मौसम')) {
        responseText = responses[language as keyof typeof responses].weather;
      } else if (input.includes('crop') || input.includes('फसल')) {
        responseText = responses[language as keyof typeof responses].crops;
      } else if (input.includes('soil') || input.includes('मिट्टी')) {
        responseText = responses[language as keyof typeof responses].soil;
      } else if (input.includes('hello') || input.includes('hi') || input.includes('नमस्ते')) {
        responseText = responses[language as keyof typeof responses].greeting;
      }

      await speakResponse(responseText);
    } catch (error) {
      console.error('Error handling voice response:', error);
    }
  };

  const speakResponse = async (text: string) => {
    if (isMuted) return;
    
    try {
      setIsPlaying(true);
      
      // Use Web Speech API for text-to-speech
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume / 100;
        
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        
        speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Error playing speech:', error);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleSettings = () => setShowSettings(!showSettings);

  if (homeMode) {
    return (
      <div className="text-center">
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-leaf-500 to-leaf-600 rounded-full shadow-2xl cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isListening ? stopListening : startListening}
          animate={isListening ? { 
            boxShadow: ["0 0 0 0 rgba(76, 175, 80, 0.7)", "0 0 0 20px rgba(76, 175, 80, 0)"],
          } : {}}
          transition={isListening ? { 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeOut"
          } : {}}
        >
          {isListening ? (
            <MicOff size={32} className="text-white" />
          ) : (
            <Mic size={32} className="text-white" />
          )}
          
          {isListening && (
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-white/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>
        
        <motion.p 
          className="mt-4 text-sm font-medium text-soil-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-leaf-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {isListening ? t('listening') || 'Listening...' : t('tapToSpeak') || 'Tap to speak with AI assistant'}
        </motion.p>
        
        <audio ref={audioRef} className="hidden" />
      </div>
    );
  }

  return (
    <>
      <motion.button
        className={cn(
          "fixed right-4 bottom-20 md:bottom-6 w-14 h-14 rounded-full shadow-2xl z-40 flex items-center justify-center transition-all duration-300",
          isListening 
            ? "bg-gradient-to-br from-red-500 to-red-600" 
            : "bg-gradient-to-br from-leaf-500 to-leaf-600"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={isListening ? stopListening : startListening}
        animate={isListening ? {
          boxShadow: ["0 0 0 0 rgba(76, 175, 80, 0.7)", "0 0 0 15px rgba(76, 175, 80, 0)"],
        } : {}}
        transition={isListening ? { 
          duration: 1.5, 
          repeat: Infinity 
        } : {}}
      >
        {isListening ? (
          <MicOff size={24} className="text-white" />
        ) : (
          <Mic size={24} className="text-white" />
        )}
      </motion.button>

      {(isPlaying || showSettings) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed right-4 bottom-36 md:bottom-22 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-leaf-200 z-40 min-w-[280px]"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-soil-800 flex items-center">
              <Headphones size={18} className="mr-2 text-leaf-600" />
              Voice Assistant
            </h3>
            <button
              onClick={toggleSettings}
              className="p-1 hover:bg-leaf-50 rounded-full transition-colors"
            >
              <X size={16} className="text-soil-600" />
            </button>
          </div>

          {isPlaying && (
            <div className="flex items-center mb-3 p-3 bg-leaf-50 rounded-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-leaf-500 border-t-transparent rounded-full mr-2"
              />
              <span className="text-sm text-soil-700 font-medium">Speaking...</span>
            </div>
          )}

          {showSettings && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-soil-700">Volume</span>
                <div className="flex items-center space-x-2">
                  <button onClick={toggleMute} className="p-1 hover:bg-leaf-50 rounded-full">
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-20 voice-assistant-settings-slider"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-soil-700">Voice</span>
                <select
                  value={voiceGender}
                  onChange={(e) => setVoiceGender(e.target.value as 'male' | 'female')}
                  className="text-xs bg-leaf-50 border border-leaf-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-leaf-500"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-soil-700">Speed</span>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-20 voice-assistant-settings-slider"
                />
              </div>
            </div>
          )}
        </motion.div>
      )}

      <audio ref={audioRef} className="hidden" />
    </>
  );
};

export default VoiceAssistant;
