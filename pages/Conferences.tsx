
import React from 'react';
import { MapPin, Calendar, Mic2, Quote } from 'lucide-react';

const Conferences: React.FC = () => {
  const conferences = [
    {
      title: "Prosodic and visual cues facilitate irony comprehension by Mandarin-speaking children with normal hearing",
      event: "The 33rd International Congress of Psychology",
      location: "Czech Republic",
      date: "2024",
      role: "Presenter",
      type: "Oral Presentation"
    },
    {
      title: "Prosodic and visual cues facilitate irony comprehension by Mandarin-speaking children with cochlear implants",
      event: "The 3rd Academic Annual Conference of the Neurolinguistics Branch of the Society on Modernization of Chinese Language",
      location: "China",
      date: "2023",
      role: "Presenter",
      type: "Oral Presentation"
    },
    {
      title: "The role of high variability phonetic training on Chinese EFL learners’ perception of English vowels in noisy environment",
      event: "The 24th Conference of the Oriental COCOSDA International Speech Databases and Assessment Techniques",
      location: "Singapore",
      date: "2021",
      role: "Presenter",
      type: "Oral Presentation"
    }
  ];

  const themeColor = '#B2787C';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Conferences</h2>
        <div className="h-1 w-16 rounded-full" style={{ backgroundColor: themeColor }}></div>
      </div>

      <section className="space-y-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1.5 rounded-lg text-white" style={{ backgroundColor: themeColor }}>
            <Mic2 size={18} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 italic">Oral presentations</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {conferences.map((conf, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Color accent bar on the left */}
              <div className="w-full md:w-2 h-2 md:h-auto" style={{ backgroundColor: themeColor }}></div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: themeColor }}
                  >
                    {conf.role}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
                    <Calendar size={14} />
                    <span>{conf.date}</span>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote size={24} className="absolute -left-2 -top-2 opacity-5 pointer-events-none" style={{ color: themeColor }} />
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug group-hover:text-slate-800 transition-colors">
                    {conf.title}
                  </h4>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-50 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-base font-semibold text-slate-600 mb-1">
                      {conf.event}
                    </p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={14} />
                      <span>{conf.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element in background */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none">
                <Mic2 size={80} style={{ color: themeColor }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Conferences;
