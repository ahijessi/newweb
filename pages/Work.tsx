
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
      <h2 className="text-5xl font-bold mb-12 text-slate-900">Work Experience</h2>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden mb-12">
        {/* Header Banner - Clean and Vibrant */}
        <div className="p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: themeColor }}>
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 blur-3xl -mr-32 -mt-32 rounded-full"></div>
          
          <div className="relative z-10 flex flex-col gap-4">
            {/* Top Row: Title and Date */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h3 
                className="text-3xl md:text-4xl font-bold tracking-tight"
                style={{ color: titleColor }}
              >
                Research Assistant
              </h3>
              <div className="shrink-0">
                <span className="inline-block px-4 py-1.5 bg-black/5 backdrop-blur-sm rounded-full text-2xl font-bold border border-black/5 text-slate-700">
                  2024 - 2025
                </span>
              </div>
            </div>

            {/* Middle Row: University and College */}
            <div>
              <h4 
                className="text-xl md:text-2xl font-bold leading-tight"
                style={{ color: subtitleColor }}
              >
                Zhejiang University, College of biomedical engineering & instrument science
              </h4>
            </div>
            
            {/* Bottom Row: PI Info */}
            <div className="mt-2 inline-block bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/40 text-2xl w-fit text-slate-800 shadow-sm">
              <span className="font-bold">PI:</span> Associate Prof. Nai Ding
            </div>
          </div>
        </div>

        {/* Projects Content */}
        <div className="p-8 md:p-12 space-y-10">
          <h4 className="text-2xl font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-4">Key Projects</h4>
          
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="border-l-2 border-slate-100 pl-8 relative">
                {/* Visual marker */}
                <div 
                  className="absolute -left-[5px] top-2 w-2 h-10 rounded-full"
                  style={{ backgroundColor: themeColor }}
                ></div>
                
                <h5 className="text-2xl font-bold text-slate-800 mb-4">
                  {project.title}
                </h5>
                <ul className="space-y-4">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xl text-slate-600 leading-relaxed">
                      <span 
                        className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0"
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
