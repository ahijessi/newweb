
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

/**
 * 🎵 User Specified Audio URL
 */
const AUDIO_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/Gymnopedie_No._1.mp3";

/**
 * 🖼️ Music Player Album Cover URL
 */
const ALBUM_COVER_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/frame.png";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Playback failed.", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      if (total) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    if (audioRef.current && audioRef.current.duration) {
      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-slate-900/50 backdrop-blur-md text-white p-4 md:p-6 rounded-[2rem] relative overflow-hidden shadow-xl transition-all duration-500 border border-white/10 max-w-4xl mx-auto w-full">
      <audio 
        ref={audioRef}
        src={AUDIO_URL}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-10 -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500 rounded-full blur-[80px] opacity-10 -ml-24 -mb-24"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="relative shrink-0">
          {/* ✨ Glassmorphism Disk Container */}
          <div className={`w-20 h-20 md:w-24 md:h-24 relative rounded-full flex items-center justify-center p-1 transition-all duration-500 ${isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
            <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)_inset,0_10px_30px_rgba(0,0,0,0.5)] z-0"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 z-20 pointer-events-none"></div>
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 relative z-10 border border-white/10">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.5)_41%,_transparent_42%)] opacity-40 z-10"></div>
               <img 
                 src={ALBUM_COVER_URL} 
                 alt="Album Art" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1514525253361-bee8718a300a?w=400&h=400&fit=crop";
                 }}
               />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 rounded-full border border-white/20 shadow-inner z-30">
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
          </div>
        </div>

        <div className="flex-1 w-full space-y-3">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5 text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                <span className="flex gap-0.5 h-2.5">
                  {[...Array(4)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`w-0.5 bg-blue-400 rounded-full transition-all duration-300 ${isPlaying ? 'animate-bounce' : 'h-0.5'}`}
                      style={{ animationDelay: `${i * 0.1}s`, height: isPlaying ? '100%' : '20%' }}
                    />
                  ))}
                </span>
                Atmosphere
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Gymnopédie No. 1</h2>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={togglePlay}
                className="w-10 h-10 md:w-12 md:h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-white/10"
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-0.5" fill="currentColor" />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <input 
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${progress}%, #1e293b ${progress}%)`
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default MusicPlayer;
