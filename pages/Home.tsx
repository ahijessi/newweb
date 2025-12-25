
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Github, FileText, Play, Pause, Music, Volume2 } from 'lucide-react';

/** 
 * 🎨 Profile Image URL - Verified for mywebsite
 */
const PROFILE_IMAGE_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/avatar_qx.jpg"; 

/**
 * ✨ Sticker URL (Chiikawa) - Verified for mywebsite
 */
const STICKER_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/chiikawa.png";

/**
 * 🎵 User Specified Audio URL - Verified for mywebsite
 */
const AUDIO_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/Gymnopedie_No._1.mp3";

/**
 * 🖼️ Music Player Album Cover URL - Verified for mywebsite
 */
const ALBUM_COVER_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/frame.png";

const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 relative">
        
        {/* Left Column: Avatar & Social Links */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group mb-8">
            {/* Main Avatar Circle */}
            <div className="w-full h-full rounded-full overflow-hidden z-10 relative bg-white shadow-xl border-4 border-white transition-all duration-500 group-hover:shadow-2xl">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Qianxi Yu" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Qianxi+Yu&background=C15451&color=fff&size=512";
                }}
              />
            </div>
            
            {/* ✨ Sticker positioned at the bottom-right */}
            <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 z-30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img 
                src={STICKER_URL} 
                alt="Chiikawa Sticker" 
                className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-[280px]">
            <SocialLink href="mailto:yqx912@gmail.com" icon={<Mail size={20} />} label="yqx912@gmail.com" />
            <SocialLink href="https://github.com/ahijessi" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/QianxiYu_CV.pdf" icon={<FileText size={20} />} label="View CV" />
          </div>
        </div>

        {/* Right Column: Text Info Area */}
        <div className="flex-1 text-center md:text-left pt-8 w-full">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight name-font whitespace-nowrap">Qianxi Yu</h1>
            <span className="text-4xl md:text-6xl chinese-font text-slate-600 font-medium whitespace-nowrap">余千禧</span>
          </div>
          
          <p 
            className="text-2xl nav-font font-medium tracking-wider mb-12" 
            style={{ color: '#851906' }}
          >
            /tɕʰjɛn1 ɕi3, ɕy2/
          </p>

          <div className="mt-16 space-y-6 text-slate-600 leading-relaxed max-w-2xl text-left mx-auto md:mx-0">
            <p className="text-xl">
              Welcome to my zone! You can call me <strong>Qianxi</strong> or <strong>Jessi</strong>. I’m a linguistics master's graduate with a strong interest in working with children to observe how they develop their native language. 
            </p>
            <p className="text-xl">
              I’m especially passionate about helping children with hearing loss identify language barriers and find strategies to overcome them. For data collection, I use behavioral and neuro tools like <strong>EEG</strong>, with software such as <strong>Psychopy</strong> and <strong>MATLAB</strong>, and for statistical analysis, I work with <strong>Python</strong> and <strong>R</strong>. 
            </p>
            <p className="text-xl font-medium text-slate-800">
              I’m looking for PhD opportunities in relevant fields. Feel free to ask me anything!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-start">
        <FeatureCard 
          title="Research Interests" 
          description={[
            "first language acquisition",
            "atypical language development",
            "speech perception & production",
            "psycholinguistics & neurolinguistics"
          ]}
          bgColor="#C74247"
        />
        <FeatureCard 
          title="Recent updates" 
          description={[
            "In December, I delivered an oral presentation at Beyond Speech Workshop 2025.",
            "(●´ω｀●)ゞ"
          ]}
          bgColor="#8D3C4F"
        />
      </section>

      {/* Music Player Section */}
      <MusicPlayer />
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-medium text-sm md:text-base"
  >
    <div className="shrink-0">{icon}</div>
    <span className="truncate">{label}</span>
  </a>
);

const FeatureCard: React.FC<{ 
  title: string; 
  description: string | string[]; 
  bgColor: string;
}> = ({ title, description, bgColor }) => {
  const contentParts = Array.isArray(description) ? description : [description];
  
  return (
    <div 
      style={{ backgroundColor: bgColor }}
      className="group px-10 py-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:!bg-white transition-all duration-500 flex flex-col items-center justify-center text-center h-full"
    >
      <div className="w-full mb-6">
        <h3 className="text-4xl font-bold transition-colors duration-300 text-white">
          <span className="group-hover:hidden">{title}</span>
          <span className="hidden group-hover:inline" style={{ color: bgColor }}>{title}</span>
        </h3>
      </div>
      
      <div className="flex flex-col justify-center">
        {contentParts.map((part, idx) => (
          <p 
            key={idx}
            className={`text-white/90 text-xl leading-relaxed transition-colors duration-300 group-hover:text-slate-600 ${idx < contentParts.length - 1 ? 'mb-2' : ''}`}
          >
            {part}
          </p>
        ))}
      </div>
    </div>
  );
};

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
          console.error("Playback failed. This usually happens if the resource isn't loaded yet or is blocked.", error);
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
    <section className="bg-slate-900/50 backdrop-blur-md text-white p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl transition-all duration-500 border border-white/10">
      <audio 
        ref={audioRef}
        src={AUDIO_URL}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-10 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-10 -ml-32 -mb-32"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="relative shrink-0">
          {/* ✨ Glassmorphism Disk Container */}
          <div className={`w-32 h-32 md:w-40 md:h-40 relative rounded-full flex items-center justify-center p-1.5 transition-all duration-500 ${isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full border border-white/20 shadow-inner z-30">
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
          </div>
        </div>

        <div className="flex-1 w-full space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1 text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">
                <span className="flex gap-0.5 h-3">
                  {[...Array(4)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`w-0.5 bg-blue-400 rounded-full transition-all duration-300 ${isPlaying ? 'animate-bounce' : 'h-1'}`}
                      style={{ animationDelay: `${i * 0.1}s`, height: isPlaying ? '100%' : '20%' }}
                    />
                  ))}
                </span>
                Atmosphere
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Gymnopédie No. 1</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={togglePlay}
                className="w-16 h-16 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-white/10"
              >
                {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} className="ml-1" fill="currentColor" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-500">
              <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <input 
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${progress}%, #1e293b ${progress}%)`
              }}
            />
          </div>

          <div className="flex items-center gap-4 text-slate-500 pt-2">
            <Volume2 size={16} />
            <div className="w-20 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-slate-600"></div>
            </div>
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
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default Home;
