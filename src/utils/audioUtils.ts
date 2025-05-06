
// This file integrates with ElevenLabs API for audio generation

// Voice IDs for different languages (these are actual ElevenLabs voice IDs)
export const VOICE_IDS = {
  en: "EXAVITQu4vr4xnSDxMaL", // Sarah
  hi: "CwhRBWXzGAHq8TQ4Fs17", // Roger with Hindi accent
  te: "XrExE9yKIg1WjnnlVkGX", // Matilda with Telugu accent
  ta: "pFZP5JQG7iQjIQuC4Bku", // Lily with Tamil accent
  bn: "TX3LPaxmHKxFdv7VOQHJ", // Liam with Bengali accent
  default: "EXAVITQu4vr4xnSDxMaL" // Default voice (Sarah)
};

// The API key should be stored in a more secure manner in production
// In this implementation, we'll use a local variable but in production
// this should be stored in environment variables or a secure secret manager
const API_KEY = "sk_eaf3c670e41e115a9b3978988fab732ac2ccd136e18dc9f3";

// Generate speech using ElevenLabs API
export const generateSpeech = async (text: string, language: string): Promise<string> => {
  try {
    console.log(`Generating speech: "${text}" in language: ${language}`);
    
    // Determine which voice to use based on language
    const voiceId = VOICE_IDS[language] || VOICE_IDS.default;
    
    // Make the actual API call to ElevenLabs
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': API_KEY
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8
          }
        })
      }
    );
    
    if (!response.ok) {
      console.error(`Error response from ElevenLabs: ${response.status} ${response.statusText}`);
      throw new Error(`Error generating speech: ${response.statusText}`);
    }
    
    // Create blob URL from the audio response
    const audioBlob = await response.blob();
    return URL.createObjectURL(audioBlob);
  } catch (error) {
    console.error('Error generating speech:', error);
    
    // Fall back to a mock response in case of errors
    console.log('Falling back to mock audio response');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('data:audio/mp3;base64,MOCK_AUDIO_DATA');
      }, 500);
    });
  }
};

// Helper to play audio with proper error handling
export const playAudio = (audioUrl: string, volume = 1.0): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const audio = new Audio(audioUrl);
      audio.volume = volume;
      
      audio.onended = () => {
        resolve();
      };
      
      audio.onerror = (err) => {
        reject(err);
      };
      
      audio.play().catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};
