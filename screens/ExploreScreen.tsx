import React from 'react';
import { Search, MapPin, Users, Trophy, ArrowRight, Star } from 'lucide-react';

const ExploreScreen = () => {
  const categories = [
    { name: 'Soccer', count: '120+ games', color: 'from-green-500 to-emerald-700', icon: '⚽' },
    { name: 'Tennis', count: '45+ games', color: 'from-orange-400 to-red-500', icon: '🎾' },
    { name: 'Basketball', count: '80+ games', color: 'from-blue-500 to-indigo-600', icon: '🏀' },
    { name: 'Yoga', count: '30+ sessions', color: 'from-rose-400 to-pink-600', icon: '🧘‍♀️' },
    { name: 'Running', count: '15 groups', color: 'from-yellow-400 to-orange-500', icon: '🏃' },
    { name: 'Padel', count: '25+ games', color: 'from-cyan-400 to-blue-500', icon: '🏸' },
  ];

  const clubs = [
    { name: 'Austin Tennis Club', members: 1240, loc: 'Riverside', image: 'https://picsum.photos/seed/tennis/200' },
    { name: 'Downtown Runners', members: 850, loc: 'City Center', image: 'https://picsum.photos/seed/run/200' },
    { name: 'Sunday League FC', members: 420, loc: 'North Park', image: 'https://picsum.photos/seed/soccer/200' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-4 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Discover</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            className="block w-full rounded-xl border-none bg-white dark:bg-surface-dark py-3 pl-10 pr-3 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-primary shadow-sm"
            placeholder="Find clubs, leagues, or venues..."
          />
        </div>
      </div>

      <div className="p-4 space-y-8">
        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Browse by Sport</h2>
            <span className="text-primary text-sm font-semibold">View all</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <div key={cat.name} className={`relative overflow-hidden rounded-xl h-24 p-3 flex flex-col justify-between bg-gradient-to-br ${cat.color} shadow-md group cursor-pointer`}>
                <div className="absolute right-0 top-0 opacity-20 text-5xl transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <span className="text-white font-bold text-lg relative z-10">{cat.name}</span>
                <span className="text-white/90 text-xs font-medium relative z-10 bg-black/10 w-fit px-1.5 py-0.5 rounded backdrop-blur-sm">{cat.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Clubs */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Popular Communities</h2>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-2 -mx-4 px-4">
            {clubs.map((club, i) => (
              <div key={i} className="shrink-0 w-64 bg-white dark:bg-surface-dark rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <img src={club.image} alt={club.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white leading-tight">{club.name}</h3>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      <MapPin size={12} className="mr-1" /> {club.loc}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-3">
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-gray-300">
                    <Users size={14} className="text-accent" />
                    {club.members} members
                  </div>
                  <button className="text-primary text-xs font-bold uppercase tracking-wide hover:underline">Join</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Venues */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Top Venues Nearby</h2>
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="flex bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 h-24">
                <div className="w-24 h-full bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/seed/venue${i}/200")` }}></div>
                <div className="flex-1 p-3 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">City Sports Complex</h3>
                    <div className="flex items-center gap-0.5 bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-yellow-700 dark:text-yellow-400 text-[10px] font-bold">
                      <Star size={10} fill="currentColor" /> 4.9
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-2">12 Courts • Indoor & Outdoor • Pro Shop</p>
                  <div className="flex items-center gap-1 text-xs text-accent font-medium">
                     <Trophy size={12} /> Popular for Tournaments
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreScreen;