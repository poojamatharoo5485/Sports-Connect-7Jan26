import React from 'react';
import { Settings, Edit2, PlusCircle, Bell, Mail, HelpCircle, LogOut, ChevronRight, MapPin } from 'lucide-react';

const ProfileScreen = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="w-6"></div>
        <h2 className="text-lg font-bold">Profile</h2>
        <button className="text-gray-600 dark:text-gray-300 hover:rotate-45 transition-transform">
          <Settings size={24} />
        </button>
      </header>

      <div className="flex flex-col items-center pt-6 px-4">
        {/* Profile Card */}
        <div className="relative w-full max-w-sm bg-gradient-to-br from-[#FDFBF7] to-[#F2E8DB] dark:from-[#1E2923] dark:to-[#121C16] rounded-t-3xl rounded-b-[3rem] shadow-sm border border-[#E6DCCF] dark:border-[#2A3830] overflow-hidden p-6 pb-8">
          <div className="flex justify-between items-start mb-2">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-primary">92</span>
              <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">OVR</span>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-accent/10 rounded px-1.5 py-0.5 mb-1">
                <span className="text-lg">🇺🇸</span>
              </div>
              <span className="text-[10px] font-bold text-accent tracking-wider uppercase">Pro</span>
            </div>
          </div>
          
          <div className="flex justify-center -mt-4 mb-4 relative z-10">
            <div className="relative h-32 w-32 rounded-full border-[4px] border-primary p-1 bg-white dark:bg-surface-dark shadow-xl">
              <div className="h-full w-full rounded-full bg-gray-200 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEXCpygF7qYRArwZC4Ft1_Yo9HUVR819muyhJBly5Z5Yg9SkVVZXiGYfsu4qe3d5ObTd6pIvIUK-RU9F8CNaImHUZjAwnQiCWVfxL7Mt8Gu-zar9CrayYdbfklD954sAc3Hwe8KI7siYTPA6GQkqJEv0JNyWq3U0oWq-qOO1Jsu5mC8rRyyZDiQGGdL8yTWslS7Gp7c11__DXCxtLJ-wYAGtjcBbUdZStrqY9kg9ONQ3V3dGFePnXSTNRUl01Hju31wuUVkj0_2Hw")' }}></div>
              <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-2 border-white dark:border-background-dark shadow-md hover:bg-primary-dark transition-colors">
                <Edit2 size={12} strokeWidth={3} />
              </button>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white">John Runner</h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="bg-accent/10 text-accent text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Organizer</span>
              <span className="text-gray-500 text-xs font-medium">@john_runner</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-y-3 gap-x-2 px-2 divide-x divide-gray-300 dark:divide-gray-700">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-gray-900 dark:text-white">15</span>
              <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Joined</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-gray-900 dark:text-white">05</span>
              <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Hosted</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-accent">98</span>
              <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Reliability</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Sport Profiles */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Sport Profiles</h3>
            <button className="flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wide hover:text-primary-dark">
              <PlusCircle size={14} /> Add Sport
            </button>
          </div>
          
          <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-2">
            {[
              { 
                sport: 'Soccer', 
                pos: 'Midfielder', 
                rtg: 88, 
                stats: [{l:'Games', v:42}, {l:'Goals', v:12}, {l:'MVP', v:3}], 
                bgClass: 'bg-accent',
                textClass: 'text-accent',
                darkTextClass: 'dark:text-accent-light'
              },
              { 
                sport: 'Tennis', 
                pos: 'Right-handed', 
                rtg: 76, 
                stats: [{l:'Matches', v:15}, {l:'Win %', v:60}, {l:'Aces', v:24}], 
                bgClass: 'bg-primary',
                textClass: 'text-primary',
                darkTextClass: 'dark:text-primary'
              }
            ].map((p, i) => (
              <div key={i} className="flex-none w-[85%] max-w-[300px] snap-center bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110 opacity-10 ${p.bgClass}`}></div>
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center shadow-sm">
                       <span className="text-xl">{p.sport === 'Soccer' ? '⚽' : '🎾'}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-none text-gray-900 dark:text-white">{p.sport}</h4>
                      <span className="text-xs text-gray-500">{p.pos}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-2xl font-bold ${p.textClass} ${p.darkTextClass}`}>{p.rtg}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Rtg</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {p.stats.map(s => (
                    <div key={s.l} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">{s.l}</div>
                      <div className="font-bold text-sm text-gray-900 dark:text-white">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Items */}
        <section className="space-y-4">
          <div>
            <h4 className="px-2 mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Preferences</h4>
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
               <div className="flex items-center justify-between p-4">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300"><Bell size={18} /></div>
                   <span className="font-medium text-sm text-gray-900 dark:text-white">Push Notifications</span>
                 </div>
                 <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                 </label>
               </div>
               <div className="flex items-center justify-between p-4">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300"><Mail size={18} /></div>
                   <span className="font-medium text-sm text-gray-900 dark:text-white">Email Updates</span>
                 </div>
                 <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                 </label>
               </div>
            </div>
          </div>

          <div>
            <h4 className="px-2 mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Support</h4>
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
               <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300"><HelpCircle size={18} /></div>
                   <span className="font-medium text-sm text-gray-900 dark:text-white">Help Center</span>
                 </div>
                 <ChevronRight size={18} className="text-gray-400" />
               </button>
               <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-500"><LogOut size={18} /></div>
                   <span className="font-medium text-sm text-red-500 group-hover:text-red-600">Log Out</span>
                 </div>
               </button>
            </div>
          </div>
        </section>
        
        <div className="text-center pt-2">
          <p className="text-xs text-gray-400">Version 2.4.0 • Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;