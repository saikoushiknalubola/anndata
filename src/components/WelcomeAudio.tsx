
import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

const WelcomeAudio: React.FC = () => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasWelcomedUser, setHasWelcomedUser] = useState(false);

  // This would be replaced with actual API call to ElevenLabs in a full implementation
  const generateWelcomeAudio = async (welcomeMessage: string, lang: string) => {
    // Mock function - in a real implementation, this would call ElevenLabs API
    console.log(`Generating welcome audio for message: "${welcomeMessage}" in language: ${lang}`);
    
    // For now, we'll simulate the API response with a setTimeout
    return new Promise<string>((resolve) => {
      // In a real implementation, this would be the URL returned from the TTS API
      setTimeout(() => {
        // This would be replaced with actual audio URL from ElevenLabs
        resolve('https://example.com/welcome-audio.mp3');
      }, 1000);
    });
  };

  useEffect(() => {
    // Check if we've already welcomed this user in this session
    const hasBeenWelcomed = localStorage.getItem('andata_welcomed');
    
    if (!hasBeenWelcomed && !hasWelcomedUser) {
      const welcomeMessage = t('welcomeAnnouncement');
      
      // Generate and play welcome audio
      const playWelcomeAudio = async () => {
        try {
          const url = await generateWelcomeAudio(welcomeMessage, language);
          setAudioUrl(url);
          setIsPlaying(true);
          setHasWelcomedUser(true);
          
          // In a real implementation, this would play the actual audio
          toast({
            title: t('welcomeToAndata'),
            description: welcomeMessage,
            duration: 5000,
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
  }, [language, t, hasWelcomedUser]);

  useEffect(() => {
    // This would handle the audio playing in a real implementation
    if (audioRef.current && audioUrl && isPlaying && !isMuted) {
      audioRef.current.src = audioUrl;
      audioRef.current.play().catch(e => console.error('Audio playback failed:', e));
    }
  }, [audioUrl, isPlaying, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <audio ref={audioRef} className="hidden" />
      {isPlaying && (
        <button 
          onClick={toggleMute}
          className="fixed left-4 bottom-4 bg-saffron/90 hover:bg-saffron text-white p-2 rounded-full shadow-md z-50"
          aria-label={isMuted ? t('unmute') : t('mute')}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </>
  );
};

export default WelcomeAudio;
