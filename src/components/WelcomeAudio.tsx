
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
  const [hasWelcomedUser, setHasWelcomedUser] = useState(true);

  useEffect(() => {
    // Disabled welcome message functionality
  }, []);

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
          className="fixed left-4 bottom-4 bg-leaf-500/90 hover:bg-leaf-600 text-white p-3 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-sm border border-white/20"
          aria-label={isMuted ? t('unmute') : t('mute')}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </>
  );
};

export default WelcomeAudio;
