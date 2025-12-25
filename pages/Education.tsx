
import React from 'react';

const Education: React.FC = () => {
  const educationItems = [
    {
      period: '2021 - 2024',
      institution: 'Nanjing University of Science and Technology, China',
      degree: 'Research Master of Arts in Linguistics',
      thesis: 'Mandarin ironic speech comprehension by normal-hearing children and children with cochlear implants'
    },
    {
      period: '2017 - 2021',
      institution: 'Nanjing University of Science and Technology, China',
      degree: 'Bachelor of Arts in English',
      thesis: 'The role of phonetic training on English vowel perception in noisy environments'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
      <h2 className="text-5xl font-bold mb-16 text-slate-900">Education</h2>
      
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div 
          className="absolute left-[7px] md:left-[224px] top-0 bottom-0 w-1 rounded-full" 
          style={{ backgroundColor: '#CE8397' }}
        ></div>

        <div className="space-y-20">
          {educationItems.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-14">
              
              {/* Date Column (Left of Timeline) */}
              <div className="hidden md:block w-52 pt-1 text-right">
                <span className="text-2xl font-bold text-slate-500 tracking-tight whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-[216px] top-2.5 z-10">
                <div 
                  className="w-5 h-5 rounded-full border-4 border-white shadow-md" 
                  style={{ backgroundColor: '#CE8397' }}
                ></div>
              </div>

              {/* Content Column (Right of Timeline) */}
              <div className="pl-10 md:pl-6 flex-1">
                {/* Mobile Period (visible only on small screens) */}
                <div className="md:hidden text-base font-bold text-[#CE8397] mb-3 tracking-widest whitespace-nowrap">
                  {item.period}
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-2" 
                  style={{ color: '#392b2e' }}
                >
                  {item.institution}
                </h3>
                
                <div 
                  className="text-2xl font-semibold mb-5"
                  style={{ color: '#938C9D' }}
                >
                  {item.degree}
                </div>

                {item.thesis && (
                  <div className="bg-white/50 border-l-4 border-slate-200 pl-6 py-2 italic text-xl text-slate-600 leading-relaxed shadow-sm rounded-r-lg">
                    <span className="not-italic font-bold text-slate-400 text-lg block mb-2 uppercase tracking-wider">Thesis:</span>
                    {item.thesis}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
