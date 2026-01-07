import React from 'react';
import { Clock, MapPin, Ticket, User as UserIcon, Hourglass, Calendar } from 'lucide-react';

const MySessionsScreen = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-bold tracking-tight text-accent dark:text-white">My Sessions</h1>
          <button className="relative rounded-full overflow-hidden w-10 h-10 border-2 border-primary shadow-sm">
            <img 
              alt="User" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEXCpygF7qYRArwZC4Ft1_Yo9HUVR819muyhJBly5Z5Yg9SkVVZXiGYfsu4qe3d5ObTd6pIvIUK-RU9F8CNaImHUZjAwnQiCWVfxL7Mt8Gu-zar9CrayYdbfklD954sAc3Hwe8KI7siYTPA6GQkqJEv0JNyWq3U0oWq-qOO1Jsu5mC8rRyyZDiQGGdL8yTWslS7Gp7c11__DXCxtLJ-wYAGtjcBbUdZStrqY9kg9ONQ3V3dGFePnXSTNRUl01Hju31wuUVkj0_2Hw"
            />
          </button>
        </div>
        
        {/* Toggle */}
        <div className="px-4 py-2">
          <div className="flex p-1 bg-gray-200 dark:bg-surface-dark rounded-xl relative">
            <button className="flex-1 py-2 px-4 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-accent dark:text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
              <Ticket size={16} /> Joining
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg text-gray-500 dark:text-gray-400 font-medium text-sm transition-all flex items-center justify-center gap-2 hover:bg-white/50">
              <UserIcon size={16} /> Hosting
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="pl-4 py-2 overflow-x-auto no-scrollbar flex gap-2 w-full pr-4">
          <button className="shrink-0 px-4 py-1.5 rounded-full bg-accent text-white text-sm font-medium shadow-sm">Upcoming</button>
          {['Waitlisted', 'History', 'Cancelled'].map((t) => (
             <button key={t} className="shrink-0 px-4 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium">{t}</button>
          ))}
        </div>
      </header>

      <main className="px-4 py-4 space-y-4">
        {/* Confirmed Card */}
        <article className="group relative flex flex-col bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/40 text-accent dark:text-green-300 text-xs font-bold backdrop-blur-md border border-green-100 dark:border-green-800">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Confirmed
            </span>
          </div>
          <div className="flex flex-row p-4 gap-4">
            <div className="shrink-0 flex flex-col items-center justify-center w-14 h-16 bg-accent/10 dark:bg-surface-dark rounded-xl border border-green-100 dark:border-gray-700">
              <span className="text-xs font-bold text-accent dark:text-gray-400 uppercase">Wed</span>
              <span className="text-xl font-bold text-accent dark:text-white">24</span>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Intermediate Futsal</h3>
              <div className="flex items-center gap-1 mt-1 text-gray-500 dark:text-gray-400 text-sm">
                <Clock size={14} />
                <span>18:00</span>
                <span className="mx-1">•</span>
                <span className="truncate">Downtown Arena</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuDIKVpU8T63eSqErbTYWZyVRp2-F-ZAVn6fmZxd8nvAqcw7HLZWQNK88-iTMFLVAb-BEQQQlaFW3NcdWd_2YbhnzZf_BLCVlZJdqEV6tBIWbHYP-_WLiTel8mBzSOSCyFLMKbekMTQYVR0N8vKh9Zx9xDLvYQVnmDHVPvvVl0On-kz0zJBDs2zJtdDQDxv67dfH8Z01SPETTpO3GOwriMQkeKWGQ5sU-N3nM-BL90QZasv-uvtZqfbHwi7aZb1By8saCvKdaC_EI" alt="Futsal" />
            </div>
          </div>
          <div className="px-4 pb-4 pt-0 flex items-center justify-between gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              {[1, 2].map(i => <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-surface-dark bg-gray-300 bg-cover" style={{ backgroundImage: `url("https://picsum.photos/seed/${i+80}/50")`}} />)}
              <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white dark:ring-surface-dark bg-gray-100 dark:bg-gray-700 text-[8px] font-bold text-gray-500">+4</div>
            </div>
            <div className="flex gap-2">
              <button className="h-9 px-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 transition-colors">Cancel</button>
              <button className="h-9 px-3 rounded-lg bg-primary text-white text-sm font-bold flex items-center gap-1 shadow-sm hover:bg-primary-dark transition-colors">
                <Ticket size={16} /> Ticket
              </button>
            </div>
          </div>
        </article>

        {/* Waitlisted Card */}
        <article className="group relative flex flex-col bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden opacity-90">
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold backdrop-blur-md border border-amber-100 dark:border-amber-800">
              <Hourglass size={12} /> Waitlisted
            </span>
          </div>
          <div className="flex flex-row p-4 gap-4">
            <div className="shrink-0 flex flex-col items-center justify-center w-14 h-16 bg-gray-50 dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700">
              <span className="text-xs font-bold text-gray-400 uppercase">Fri</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">26</span>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Morning Padel</h3>
              <div className="flex items-center gap-1 mt-1 text-gray-500 dark:text-gray-400 text-sm">
                <Clock size={14} />
                <span>07:30</span>
                <span className="mx-1">•</span>
                <span className="truncate">Club de Campo</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden shrink-0">
               <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChsKOB1AxXS1LzKyxbWcxdmETP4ALLbelFpBM0YemL2-sIMQTWvmig6U8eJVgb6dfh0ra1je5ZWpUTu3WaH6KuwwAr9uaUnwAg6GeLnMyoysoyUxsvGBfR3y-kCqTc2qRl1sBnFyxW9CoFmuFFkO447ML3k4o1vWYgMoVQf3WtZwwkLCwT7kihL2OFfDxg3rcGanNmm77FNjizLUK2mtgU23J7i7wXDWv5IjIrUfm7HfSbw6SFe7ODpe7XqY221NeQdWwy14oRg90" alt="Padel" />
            </div>
          </div>
          <div className="px-4 pb-4 pt-0 flex items-center justify-between gap-3">
            <p className="text-xs text-gray-500 font-medium">Position #2 in queue</p>
            <button className="h-9 px-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 transition-colors">Leave List</button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default MySessionsScreen;