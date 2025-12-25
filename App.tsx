
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Work from './pages/Work';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';
import Other from './pages/Other';
import Navigation from './components/Navigation';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏：不再使用 fixed，随页面正常滚动 */}
      <header className="z-50 border-b border-slate-200/60 backdrop-blur-md bg-white/60 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
          <Navigation />
        </div>
      </header>
      
      {/* 移除 pt-44，改用正常的间距 mt-12 */}
      <main className="flex-grow max-w-5xl mx-auto px-4 mt-12 mb-20 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200/50 py-8 text-center text-slate-500 text-sm backdrop-blur-sm bg-white/10">
        <p>© {new Date().getFullYear()} <span className="name-font">Qianxi Yu</span> (<span className="chinese-font">余千禧</span>). All rights reserved.</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
