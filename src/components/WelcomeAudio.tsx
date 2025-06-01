
import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateSpeech, playAudio } from '../utils/audioUtils';

const WelcomeAudio: React.FC = () => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasWelcomedUser, setHasWelcomedUser] = useState(true); // Set to true to disable welcome message

  useEffect(() => {
    // Disabled welcome message functionality - no automatic popup
    // Users can still access voice features through the voice assistant
  }, []);

  // Update audio when mute status changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
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
