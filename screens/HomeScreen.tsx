import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin, Calendar, Signal, Star, List, Map as MapIcon, ChevronDown, Navigation } from 'lucide-react';
import { MOCK_SESSIONS } from '../constants';
import { Session } from '../types';

const HomeScreen = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  return (
    <div className="pb-24 bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="px-4 py-3 space-y-3">
          {/* Search Bar */}
          <div className="flex w-full items-center gap-2">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                className="block w-full rounded-xl border-none bg-white dark:bg-surface-dark py-3 pl-10 pr-3 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 shadow-sm transition-shadow"
                placeholder="Search for tennis, soccer, yoga..."
              />
            </div>
            <button className="flex items-center justify-center h-11 w-11 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 transition-colors">
              <SlidersHorizontal size={20} />
            </button>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex h-8 shrink-0 items-center justify-center px-4 rounded-full bg-accent text-white text-xs font-semibold shadow-sm hover:bg-accent-light transition-colors">
              All
            </button>
            {['Today', 'Soccer', 'Tennis', 'Near Me'].map((filter) => (
              <button key={filter} className="flex h-8 shrink-0 items-center justify-center gap-1 px-3 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium whitespace-nowrap active:scale-95 transition-transform hover:bg-gray-50 dark:hover:bg-white/5">
                {filter}
                <ChevronDown size={14} />
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex h-10 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-[#25382c] p-1">
            <button 
              onClick={() => setViewMode('list')}
              className={`flex-1 flex items-center justify-center gap-2 rounded-[4px] h-full text-xs font-medium transition-all ${viewMode === 'list' ? 'bg-white dark:bg-surface-dark text-accent shadow-sm' : 'text-gray-500'}`}
            >
              <List size={16} /> List View
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`flex-1 flex items-center justify-center gap-2 rounded-[4px] h-full text-xs font-medium transition-all ${viewMode === 'map' ? 'bg-white dark:bg-surface-dark text-accent shadow-sm' : 'text-gray-500'}`}
            >
              <MapIcon size={16} /> Map View
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 ${viewMode === 'list' ? 'p-4 flex flex-col gap-4' : 'relative overflow-hidden'}`}>
        {viewMode === 'list' ? (
          MOCK_SESSIONS.map((session) => (
            <SessionCard key={session.id} session={session} onClick={() => navigate(`/details/${session.id}`)} />
          ))
        ) : (
          <MapView sessions={MOCK_SESSIONS} onPinClick={(id) => navigate(`/details/${id}`)} />
        )}
      </div>
    </div>
  );
};

const MapView = ({ sessions, onPinClick }: { sessions: Session[], onPinClick: (id: string) => void }) => {
  // Mock positioning for pins
  const getPosition = (index: number) => {
    const positions = [
      { top: '30%', left: '40%' },
      { top: '55%', left: '25%' },
      { top: '45%', left: '70%' },
    ];
    return positions[index % positions.length];
  };

  return (
    <div className="w-full h-[60vh] bg-gray-100 relative overflow-hidden">
       {/* Map Background Placeholder */}
       <div 
         className="absolute inset-0 bg-cover bg-center grayscale-[0.2]"
         style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8Lx_kI59cvL2HPmEeCu3WrjyR3QmtXYrBLQYAshMYAAXfOI9DAmLCUVZpYZsNpRooeQwNPCTW53xZDEgWR0Gj5gi8BN-CHpDQg3q4k-MwNAwvUW46Yd8WkBe2OhRdN5SRsjoqbaOp6gx8jKQ6GPsb6PGLjJN883GCjfZsvHhknCDRj9gPFWXX9mWRBosJqzdM3Oremk-oJB5GfRkKvvAmKh2S3Zh9J60D4iy0WbyNDO5rNs-HHs3eT_-P-iDiums4hZUHNl5ilQ")' }}
       ></div>
       
       {/* Pins */}
       {sessions.map((session, i) => (
         <div 
           key={session.id}
           onClick={() => onPinClick(session.id)}
           className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
           style={getPosition(i)}
         >
           <div className="relative flex flex-col items-center">
             <div className="bg-white dark:bg-surface-dark px-3 py-1.5 rounded-full shadow-lg border border-primary/20 flex items-center gap-1 group-hover:scale-110 transition-transform">
                <span className="text-xs font-bold text-gray-900 dark:text-white whitespace-nowrap">{session.sport}</span>
                <span className="text-xs font-bold text-accent">
                   {session.price === 0 ? 'Free' : `$${session.price}`}
                </span>
             </div>
             <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white dark:border-t-surface-dark mt-[-1px]"></div>
             
             {/* Hover Card (Simulated) */}
             <div className="absolute top-full mt-2 w-48 bg-white dark:bg-surface-dark p-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 hidden sm:block">
               <img src={session.image} className="w-full h-20 object-cover rounded-lg mb-2" alt="" />
               <p className="font-bold text-xs truncate text-gray-900 dark:text-white">{session.title}</p>
             </div>
           </div>
         </div>
       ))}

       <div className="absolute bottom-6 right-6 flex flex-col gap-2">
         <button className="bg-white dark:bg-surface-dark p-3 rounded-full shadow-lg text-gray-700 dark:text-gray-200">
           <Navigation size={20} />
         </button>
       </div>
    </div>
  );
};

const SessionCard = ({ session, onClick }: { session: Session; onClick: () => void }) => {
  const spotsLeft = session.maxPlayers - session.currentPlayers;
  const fillPercentage = (session.currentPlayers / session.maxPlayers) * 100;

  return (
    <div 
      onClick={onClick}
      className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent dark:border-gray-800 overflow-hidden active:scale-[0.99] transition-all duration-200 cursor-pointer"
    >
      {/* Image Header */}
      <div className="relative h-48 w-full shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url("${session.image}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute top-3 left-3 bg-white/95 dark:bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
          <span className="text-primary font-bold text-[10px] uppercase tracking-wider">{session.sport}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight pr-2">{session.title}</h3>
          <div className="flex items-center gap-1 text-primary bg-primary/10 px-1.5 py-0.5 rounded">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold">4.8</span>
          </div>
        </div>

        {/* Info Rows */}
        <div className="flex flex-col gap-1.5 mt-1">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="text-accent shrink-0" />
            <p className="text-sm font-medium truncate">{session.location.name} ({session.location.distance})</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Calendar size={16} className="text-accent shrink-0" />
            <p className="text-sm font-medium">{session.date} • {session.time}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Signal size={16} className="text-accent shrink-0" />
            <p className="text-sm font-medium">{session.skillLevel}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 mb-1">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wide">
              {session.currentPlayers}/{session.maxPlayers} Joined
            </span>
            <span className={`text-xs font-bold ${spotsLeft <= 2 ? 'text-red-500' : 'text-accent'}`}>
              {spotsLeft} spots left
            </span>
          </div>
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
              style={{ width: `${fillPercentage}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {session.price === 0 ? 'Free' : `$${session.price.toFixed(2)}`}
          </p>
          <button className="px-5 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-colors shadow-sm">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;