import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Plus, Minus, Lock } from 'lucide-react';

const CreateSessionScreen = () => {
  const navigate = useNavigate();
  const [capacity, setCapacity] = useState(12);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto w-full">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors"
          >
            <X size={24} className="text-gray-700 dark:text-gray-200" />
          </button>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">New Session</h2>
          <button className="text-gray-500 font-medium text-sm hover:text-primary transition-colors">
            Reset
          </button>
        </div>
      </header>

      {/* Form Content */}
      <main className="flex-1 w-full p-4 pb-32 space-y-8">
        {/* Sport Selection */}
        <section>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">What are we playing?</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[
              { name: 'Soccer', icon: '⚽', active: true },
              { name: 'Basketball', icon: '🏀', active: false },
              { name: 'Tennis', icon: '🎾', active: false },
              { name: 'Volleyball', icon: '🏐', active: false },
            ].map((sport) => (
              <button 
                key={sport.name}
                className={`
                  flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-4 transition-all active:scale-95 border
                  ${sport.active 
                    ? 'bg-accent border-accent text-white shadow-md' 
                    : 'bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'}
                `}
              >
                <span className="text-lg">{sport.icon}</span>
                <span className="text-sm font-bold">{sport.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Date Time Location */}
        <section>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">When & Where?</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-500 uppercase ml-1 mb-1.5 block">Date</label>
                <input type="date" className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl px-3 py-3 text-gray-900 dark:text-white focus:ring-primary focus:border-primary" />
              </div>
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-500 uppercase ml-1 mb-1.5 block">Time</label>
                <input type="time" className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl px-3 py-3 text-gray-900 dark:text-white focus:ring-primary focus:border-primary" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1 mb-1.5 block">Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <MapPin size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Search park, gym, or address..." 
                  className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl pl-10 pr-3 py-3.5 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Session Details</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1 mb-1.5 block">Description</label>
              <textarea 
                rows={3} 
                placeholder="Any specific rules? What should people bring?" 
                className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-primary focus:border-primary resize-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1 mb-1.5 block">Skill Level</label>
              <div className="flex bg-gray-100 dark:bg-surface-dark p-1 rounded-xl border border-gray-200 dark:border-gray-700">
                {['Beginner', 'Intermediate', 'Advanced'].map((level, i) => (
                  <button 
                    key={level}
                    className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${i === 0 ? 'bg-white dark:bg-gray-700 text-accent dark:text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capacity & Cost */}
        <section>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Capacity & Cost</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gray-500 uppercase mb-2">Max Players</span>
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setCapacity(Math.max(2, capacity - 1))}
                  className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-xl font-bold text-gray-900 dark:text-white min-w-[2ch] text-center">{capacity}</span>
                <button 
                  onClick={() => setCapacity(capacity + 1)}
                  className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gray-500 uppercase mb-1">Price per person</span>
              <div className="flex items-center">
                <span className="text-gray-400 mr-1 text-lg font-medium">$</span>
                <input 
                  type="number" 
                  className="w-full bg-transparent border-none p-0 text-xl font-bold text-gray-900 dark:text-white focus:ring-0" 
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                <Lock size={18} className="text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <p className="font-medium text-sm text-gray-900 dark:text-white">Private Session</p>
                <p className="text-xs text-gray-500">Invite only</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </section>
      </main>

      {/* Footer Action */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-40 max-w-md mx-auto">
        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98]">
          Publish Session
        </button>
      </footer>
    </div>
  );
};

export default CreateSessionScreen;