
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-slate-900">Education</h2>
      
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div 
          className="absolute left-[7px] md:left-[200px] top-0 bottom-0 w-px md:w-0.5 rounded-full" 
          style={{ backgroundColor: '#CE8397' }}
        ></div>

        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
              
              {/* Date Column (Left of Timeline) */}
              <div className="hidden md:block w-44 pt-1 text-right">
                <span className="text-lg font-bold text-slate-500 tracking-tight whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-[193px] top-2 z-10">
                <div 
                  className="w-4 h-4 rounded-full border-2 border-white shadow-md" 
                  style={{ backgroundColor: '#CE8397' }}
                ></div>
              </div>

              {/* Content Column (Right of Timeline) */}
              <div className="pl-8 md:pl-4 flex-1">
                {/* Mobile Period */}
                <div className="md:hidden text-sm font-bold text-[#CE8397] mb-2 tracking-widest whitespace-nowrap">
                  {item.period}
                </div>
                
                <h3 
                  className="text-xl font-bold mb-1" 
                  style={{ color: '#392b2e' }}
                >
                  {item.institution}
                </h3>
                
                <div 
                  className="text-lg font-semibold mb-3"
                  style={{ color: '#938C9D' }}
                >
                  {item.degree}
                </div>

                {item.thesis && (
                  <div className="bg-white/50 border-l-2 border-slate-200 pl-4 py-1.5 italic text-base text-slate-600 leading-relaxed shadow-sm rounded-r-lg">
                    <span className="not-italic font-bold text-slate-400 text-sm block mb-1 uppercase tracking-wider">Thesis:</span>
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
