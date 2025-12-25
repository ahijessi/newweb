
import React from 'react';
import { Mail, Github, FileText } from 'lucide-react';

/** 
 * 🎨 Profile Image URL - Verified for mywebsite
 */
const PROFILE_IMAGE_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/avatar_qx.jpg"; 

/**
 * ✨ Sticker URL (Chiikawa) - Verified for mywebsite
 */
const STICKER_URL = "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/chiikawa.png";

const Home: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
        
        {/* Left Column: Avatar & Social Links */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group mb-6">
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
            <div className="absolute -bottom-1 -right-1 md:bottom-2 md:right-2 z-30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img 
                src={STICKER_URL} 
                alt="Chiikawa Sticker" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-[220px]">
            <SocialLink href="mailto:yqx912@gmail.com" icon={<Mail size={16} />} label="yqx912@gmail.com" />
            <SocialLink href="https://github.com/ahijessi" icon={<Github size={16} />} label="GitHub" />
            <SocialLink href="https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/QianxiYu_CV.pdf" icon={<FileText size={16} />} label="View CV" />
          </div>
        </div>

        {/* Right Column: Text Info Area */}
        <div className="flex-1 text-center md:text-left pt-2 md:pt-4 w-full">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3 mb-1">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight name-font whitespace-nowrap">Qianxi Yu</h1>
            <span className="text-2xl md:text-4xl chinese-font text-slate-600 font-medium whitespace-nowrap">余千禧</span>
          </div>
          
          <p 
            className="text-lg nav-font font-medium tracking-wider mb-8" 
            style={{ color: '#851906' }}
          >
            /tɕʰjɛn1 ɕi3, ɕy2/
          </p>

          <div className="mt-8 space-y-4 text-slate-600 leading-relaxed max-w-2xl text-left mx-auto md:mx-0">
            <p className="text-base md:text-lg">
              Welcome to my zone! You can call me <strong>Qianxi</strong> or <strong>Jessi</strong>. I’m a linguistics master's graduate with a strong interest in working with children to observe how they develop their native language. 
            </p>
            <p className="text-base md:text-lg">
              I’m especially passionate about helping children with hearing loss identify language barriers and find strategies to overcome them. For data collection, I use behavioral and neuro tools like <strong>EEG</strong>, with software such as <strong>Psychopy</strong> and <strong>MATLAB</strong>, and for statistical analysis, I work with <strong>Python</strong> and <strong>R</strong>. 
            </p>
            <p className="text-base md:text-lg font-medium text-slate-800">
              I’m looking for PhD opportunities in relevant fields. Feel free to ask me anything!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 items-start">
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
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 font-medium text-sm"
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
      className="group px-6 py-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:!bg-white transition-all duration-500 flex flex-col items-center justify-center text-center h-full"
    >
      <div className="w-full mb-4">
        <h3 className="text-2xl font-bold transition-colors duration-300 text-white">
          <span className="group-hover:hidden">{title}</span>
          <span className="hidden group-hover:inline" style={{ color: bgColor }}>{title}</span>
        </h3>
      </div>
      
      <div className="flex flex-col justify-center">
        {contentParts.map((part, idx) => (
          <p 
            key={idx}
            className={`text-white/90 text-base leading-relaxed transition-colors duration-300 group-hover:text-slate-600 ${idx < contentParts.length - 1 ? 'mb-1.5' : ''}`}
          >
            {part}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
