
import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import { generateSpeech, playAudio } from '../utils/audioUtils';

const WelcomeAudio: React.FC = () => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasWelcomedUser, setHasWelcomedUser] = useState(false); // Set to false to enable welcome message

  useEffect(() => {
    // Check if we've already welcomed this user in this session
    const hasBeenWelcomed = localStorage.getItem('andata_welcomed');
    
    if (!hasBeenWelcomed && !hasWelcomedUser) {
      const welcomeMessage = t('welcomeAnnouncement');
      
      // Generate and play welcome audio
      const playWelcomeAudio = async () => {
        try {
          const url = await generateSpeech(welcomeMessage, language);
          setAudioUrl(url);
          
          if (!isMuted) {
            await playAudio(url);
          }
          
          setIsPlaying(true);
          setHasWelcomedUser(true);
          
          toast({
            title: t('welcomeToAndata'),
            description: welcomeMessage,
            duration: 5000,
            className: "welcome-toast bg-gradient-to-r from-saffron/90 to-terracotta/90 text-white border-white/20"
          });
          
          // Set flag in localStorage so we don't welcome again in this session
          localStorage.setItem('andata_welcomed', 'true');
        } catch (error) {
          console.error('Failed to generate welcome audio:', error);
        }
      };
      
      // Slight delay before playing welcome audio to ensure app has loaded
      const timer = setTimeout(() => {
        playWelcomeAudio();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [language, t, hasWelcomedUser, isMuted]);

  // Update audio when mute status changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    toast({
      title: isMuted ? t('voiceUnmuted') : t('voiceMuted'),
      description: isMuted ? t('voiceUnmutedDesc') : t('voiceMutedDesc'),
      duration: 2000,
      className: "audio-toast"
    });
  };

  return (
    <>
      {audioUrl && <audio ref={audioRef} src={audioUrl} className="hidden" />}
      {isPlaying && (
        <button 
          onClick={toggleMute}
          className="fixed left-4 bottom-4 bg-saffron/90 hover:bg-saffron text-white p-2 rounded-full shadow-md z-50 transition-transform hover:scale-110 active:scale-95"
          aria-label={isMuted ? t('unmute') : t('mute')}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </>
  );
};

export default WelcomeAudio;
