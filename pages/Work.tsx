
import React from 'react';

const Work: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Children’s sensitivity to linguistic constituents",
      details: [
        "Designed a child-friendly word deletion task and the corresponding behavioral experiment questionnaire.",
        "Collected behavioral data from 80 children aged 6-7 years."
      ]
    },
    {
      id: 2,
      title: "Gaze-based intention inference dataset construction",
      details: [
        "Developed a VQA dataset with complex scenes and diverse gaze relationships.",
        "Tested the dataset on visual large language models.",
        "Wrote a research paper for publication based on findings."
      ]
    },
    {
      id: 3,
      title: "Neural encoding of rhythm perception",
      details: [
        "Collected EEG and MEG data from 40 adults."
      ]
    },
    {
      id: 4,
      title: "Spontaneous synchronization of rhythms between speakers",
      details: [
        "Organized 20 participant pairs and tested their synchronization during spontaneous speech production."
      ]
    }
  ];

  const themeColor = '#E9BBCC';
  const titleColor = '#BA6779';
  const subtitleColor = '#B2787C';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-slate-900">Work Experience</h2>

      <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-lg overflow-hidden mb-10">
        {/* Header Banner */}
        <div className="p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: themeColor }}>
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-20 blur-3xl -mr-24 -mt-24 rounded-full"></div>
          
          <div className="relative z-10 flex flex-col gap-3">
            {/* Top Row: Title and Date */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <h3 
                className="text-2xl md:text-3xl font-bold tracking-tight"
                style={{ color: titleColor }}
              >
                Research Assistant
              </h3>
              <div className="shrink-0">
                <span className="inline-block px-3 py-1 bg-black/5 backdrop-blur-sm rounded-full text-lg font-bold border border-black/5 text-slate-700">
                  2024 - 2025
                </span>
              </div>
            </div>

            {/* Middle Row: University and College */}
            <div>
              <h4 
                className="text-lg md:text-xl font-bold leading-tight"
                style={{ color: subtitleColor }}
              >
                Zhejiang University, College of biomedical engineering & instrument science
              </h4>
            </div>
            
            {/* Bottom Row: PI Info */}
            <div className="mt-1 inline-block bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/40 text-lg w-fit text-slate-800 shadow-sm">
              <span className="font-bold">PI:</span> Associate Prof. Nai Ding
            </div>
          </div>
        </div>

        {/* Projects Content */}
        <div className="p-6 md:p-8 space-y-8">
          <h4 className="text-xl font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-3">Key Projects</h4>
          
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="border-l-2 border-slate-100 pl-6 relative">
                {/* Visual marker */}
                <div 
                  className="absolute -left-[5px] top-1.5 w-2 h-6 rounded-full"
                  style={{ backgroundColor: themeColor }}
                ></div>
                
                <h5 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h5>
                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
                      <span 
                        className="mt-2 w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: themeColor }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
