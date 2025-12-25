
import React from 'react';
import { Heart } from 'lucide-react';

const Other: React.FC = () => {
  const hobbies = [
    { 
      name: "Cooking", 
      image: "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/cooking.jpg"
    },
    { 
      name: "Coffee", 
      image: "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/coffee.jpg"
    },
    { 
      name: "Needle felting", 
      image: "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/needle-felting.jpg"
    },
    { 
      name: "Music", 
      image: "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/music.jpg"
    },
    { 
      name: "Game", 
      image: "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/Game.png"
    },
  ];

  // Raw URLs for the cat photos - Reverted to mywebsite
  const CAT_PHOTOS = [
    "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/yebao.jpg",
    "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/yebao2.jpg",
    "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/yebao3.jpg"
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-24 max-w-5xl">
      {/* I Love Section */}
      <section>
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-2 italic tracking-tight">I love</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hobbies.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-slate-50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Cat Section */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 mb-12">
            <Heart className="text-red-500 fill-red-500 animate-pulse" size={32} />
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
              I love My Cat more!
            </h3>
            <Heart className="text-red-500 fill-red-500 animate-pulse" size={32} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {CAT_PHOTOS.map((url, index) => (
              <div key={index} className="relative group">
                <div 
                  className={`aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl border-8 border-white transition-all duration-500 ${
                    index % 2 === 0 ? 'transform -rotate-1 group-hover:rotate-0' : 'transform rotate-1 group-hover:rotate-0'
                  }`}
                >
                  <img 
                    src={url} 
                    alt={`Yebao the Cat ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {index === 0 && (
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FAECA7] rounded-full flex items-center justify-center shadow-lg transform rotate-12 font-bold text-slate-800 border-4 border-white text-lg z-10">
                    Yebao!
                  </div>
                )}
                {index === 2 && (
                   <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform -rotate-12 z-10">
                     <Heart className="text-red-400 fill-red-400" size={24} />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Other;
