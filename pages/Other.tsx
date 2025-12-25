
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

  // Raw URLs for the cat photos
  const CAT_PHOTOS = [
    "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/yebao.jpg",
    "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/yebao2.jpg",
    "https://raw.githubusercontent.com/ahijessi/mywebsite/main/avatar/yebao3.jpg"
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16 max-w-4xl mx-auto">
      {/* I Love Section */}
      <section>
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-1 italic tracking-tight">I love</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {hobbies.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-slate-50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-3 flex flex-col items-center text-center">
                <h3 className="text-sm font-bold text-slate-800 leading-tight">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Cat Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <Heart className="text-red-500 fill-red-500 animate-pulse" size={24} />
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              I love My Cat more!
            </h3>
            <Heart className="text-red-500 fill-red-500 animate-pulse" size={24} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {CAT_PHOTOS.map((url, index) => (
              <div key={index} className="relative group">
                <div 
                  className={`aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-lg border-4 border-white transition-all duration-500 ${
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
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#FAECA7] rounded-full flex items-center justify-center shadow-md transform rotate-12 font-bold text-slate-800 border-2 border-white text-base z-10">
                    Yebao!
                  </div>
                )}
                {index === 2 && (
                   <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transform -rotate-12 z-10">
                     <Heart className="text-red-400 fill-red-400" size={20} />
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
