
import React, { useState, useEffect } from 'react';
import { FileText, ExternalLink, X, Download, Maximize2 } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  pdfUrl: string;
  tag?: string;
}

const Publications: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ rawUrl: string; originalUrl: string; title: string } | null>(null);

  /**
   * Helper to convert GitHub blob URLs to raw.githubusercontent.com URLs
   */
  const getRawUrl = (url: string) => {
    if (!url.includes('github.com') || url.includes('raw.githubusercontent.com')) return url; 
    return url
      .replace('github.com', 'raw.githubusercontent.com')
      .replace('/blob/', '/');
  };

  const firstAuthorPapers: Publication[] = [
    {
      title: "GIICS: A Dataset for Gaze-direction-based Intention Inference in complex visual scenes",
      authors: "Qianxi Yu, Chen Ling, Shitao Feng, Jiayi Hu, Yongtong Lu, Nai Ding",
      journal: "In Proceedings of 2025 IEEE 4th International Conference on Artificial Intelligence, Human-Computer Interaction and Robotics (AIHCIR)",
      year: "2025",
      pdfUrl: "https://github.com/ahijessi/mywebsite/blob/main/publications/AIHCIR_GIICS%20paper.pdf",
      tag: "EI Conference"
    },
    {
      title: "Prosodic and visual cues facilitate irony comprehension by Mandarin-speaking children with cochlear implants",
      authors: "Qianxi Yu, Honglan Li, Shanpeng Li, Ping Tang",
      journal: "Journal of Speech, Language and Hearing Research",
      year: "2024",
      pdfUrl: "https://github.com/ahijessi/mywebsite/blob/main/publications/JSLHR%20paper_1st%20author.pdf",
      tag: "Journal"
    },
    {
      title: "The acquisition of Mandarin tones by children with cochlear implants: effects of age at implantation and cochlear implant experience",
      authors: "Qianxi Yu, Yanan Shen, Liyan Wang, Ping Tang",
      journal: "Chinese Journal of Phonetics",
      year: "2023",
      pdfUrl: "https://github.com/ahijessi/mywebsite/blob/main/publications/Chinese%20journal%20paper_1st%20author.pdf",
      tag: "Journal"
    },
    {
      title: "The role of high variability phonetic training Chinese EFL learners’ perception of English vowels in noisy environment",
      authors: "Qianxi Yu, Ping Tang",
      journal: "In Proceedings of the 24th Conference of the Oriental COCOSDA International Speech Databases and Assessment Techniques",
      year: "2021",
      pdfUrl: "https://github.com/ahijessi/mywebsite/blob/main/publications/EI%20conference%20paper_1st%20author.pdf",
      tag: "EI Conference"
    }
  ];

  const coAuthorPapers: Publication[] = [
    {
      title: "The effect of visual-articulatory cues on the identification of Mandarin tones by children with cochlear implants",
      authors: "Shanpeng Li, Yinuo Wang, Qianxi Yu, Yan Feng, Ping Tang",
      journal: "Journal of Speech, Language and Hearing Research",
      year: "2024",
      pdfUrl: "https://github.com/ahijessi/mywebsite/blob/main/publications/JSLHR%20paper_3rd%20author.pdf",
      tag: "Journal"
    },
    {
      title: "Visual-articulatory cues facilitate children with CIs to better perceive Mandarin tones in sentences",
      authors: "Ping Tang, Yanan Shen, Shanpeng Li, Qianxi Yu, Yan Feng",
      journal: "Speech Communication",
      year: "2024",
      pdfUrl: "https://github.com/ahijessi/mywebsite/blob/main/publications/Speech%20Communication%20paper_4th%20author.pdf",
      tag: "Journal"
    }
  ];

  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPdf]);

  const renderAuthor = (authors: string) => {
    const parts = authors.split('Qianxi Yu');
    if (parts.length >= 2) {
      return (
        <span className="text-slate-600">
          {parts[0]}<span className="font-bold text-slate-900 underline decoration-[#665366]/40 decoration-2 underline-offset-4">Qianxi Yu</span>{parts.slice(1).join('Qianxi Yu')}
        </span>
      );
    }
    return <span className="text-slate-600">{authors}</span>;
  };

  const PublicationCard = ({ pub }: { pub: Publication }) => (
    <button 
      onClick={() => setSelectedPdf({ 
        rawUrl: getRawUrl(pub.pdfUrl), 
        originalUrl: pub.pdfUrl,
        title: pub.title 
      })}
      className="w-full text-left group block p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#665366]/30 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink size={24} className="text-[#665366]" />
      </div>
      
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest rounded-full border border-slate-100">
            {pub.tag}
          </span>
          <span className="text-sm font-bold text-slate-400">{pub.year}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#665366] transition-colors leading-tight pr-8">
          {pub.title}
        </h3>
        
        <div className="text-lg mb-4">
          {renderAuthor(pub.authors)}
        </div>
        
        <div className="mt-auto flex items-center gap-2 text-slate-500 italic text-lg">
          <FileText size={18} className="shrink-0" />
          <span>{pub.journal}</span>
        </div>
      </div>
    </button>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-5xl font-bold text-slate-900">Publications</h2>
      </div>
      
      <div className="space-y-20">
        <section>
          <div className="mb-10">
            <h3 className="text-3xl font-bold italic tracking-tight" style={{ color: '#90798d' }}>
              First-author papers
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {firstAuthorPapers.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-10">
            <h3 className="text-3xl font-bold italic tracking-tight" style={{ color: '#90798d' }}>
              Co-author papers
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {coAuthorPapers.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </section>
      </div>

      {/* PDF Preview Modal */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(12px)' }}
          onClick={() => setSelectedPdf(null)}
        >
          <div 
            className="bg-white w-full h-full max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 backdrop-blur-md">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-10 h-10 bg-[#665366]/10 rounded-xl flex items-center justify-center text-[#665366] shrink-0">
                  <FileText size={20} />
                </div>
                <h4 className="font-bold text-slate-800 truncate text-lg">{selectedPdf.title}</h4>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={selectedPdf.rawUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-slate-200 rounded-full text-slate-500 transition-colors flex items-center gap-2"
                  title="Open in new tab"
                >
                  <Maximize2 size={20} />
                </a>
                <a 
                  href={selectedPdf.rawUrl} 
                  download
                  className="p-3 hover:bg-[#665366]/10 hover:text-[#665366] rounded-full text-slate-500 transition-colors"
                  title="Download PDF"
                >
                  <Download size={20} />
                </a>
                <div className="w-px h-6 bg-slate-200 mx-1"></div>
                <button 
                  onClick={() => setSelectedPdf(null)}
                  className="p-3 hover:bg-red-50 hover:text-red-500 rounded-full text-slate-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* PDF Content Area */}
            <div className="flex-1 bg-slate-800 relative">
              <iframe 
                src={`${selectedPdf.rawUrl}#view=FitH`} 
                className="w-full h-full border-none bg-white"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;
