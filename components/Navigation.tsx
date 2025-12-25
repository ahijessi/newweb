
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Page } from '../types';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: Page.Home, label: 'Home', color: '#C15451' },
    { id: Page.Education, label: 'Education', color: '#CA9EA0' },
    { id: Page.Work, label: 'Work', color: '#CC8BA1' },
    { id: Page.Publications, label: 'Publications', color: '#665366' },
    { id: Page.Conferences, label: 'Conferences', color: '#DEC0C4' },
    { id: Page.Other, label: 'Other', color: '#FAECA7' },
  ];

  const isActive = (id: Page) => {
    if (id === Page.Home) return location.pathname === '/';
    return location.pathname === `/${id}`;
  };

  return (
    <nav className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
      {navItems.map((item) => {
        const active = isActive(item.id);
        // Determine if we should use white text for better contrast
        const isDarkBackground = ['#c15451', '#cc8ba1', '#665366'].includes(item.color.toLowerCase());
        
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.id === Page.Home ? '/' : `/${item.id}`)}
            style={{ 
              backgroundColor: active ? item.color : 'white',
              borderColor: active ? item.color : '#e2e8f0' 
            }}
            className={`group relative flex items-center justify-center py-4 px-1 rounded-2xl border transition-all duration-300 transform nav-font overflow-hidden ${
              active
                ? `shadow-lg scale-105 z-10 font-bold ${isDarkBackground ? 'text-white' : 'text-slate-900'}`
                : 'bg-white text-slate-500 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5'
            }`}
          >
            <span className="text-sm md:text-lg lg:text-xl tracking-tighter text-center leading-none">
              {item.label}
            </span>
            
            {active && (
              <div className={`absolute bottom-1 w-1 h-1 rounded-full opacity-30 ${isDarkBackground ? 'bg-white' : 'bg-slate-800'}`}></div>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
