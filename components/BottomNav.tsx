import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, User, CalendarDays, Plus } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Discover' }, // Placeholder route
    { path: '/create', icon: Plus, label: 'Create', isFab: true },
    { path: '/my-sessions', icon: CalendarDays, label: 'My Games' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="sticky bottom-0 z-50 w-full bg-white/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe-bottom">
      <div className="flex justify-around items-end h-20 pb-2 px-2">
        {navItems.map((item) => {
          if (item.isFab) {
            return (
              <NavLink 
                key={item.path} 
                to={item.path}
                className="flex flex-col items-center justify-end mb-4 group"
              >
                <div className="h-14 w-14 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-transform active:scale-95">
                  <item.icon size={28} strokeWidth={2.5} />
                </div>
              </NavLink>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex flex-col items-center justify-center h-full w-full gap-1 transition-colors relative
                ${isActive ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}
              `}
            >
              {({ isActive }) => (
                <>
                  <item.icon 
                    size={24} 
                    strokeWidth={isActive ? 2.5 : 2} 
                    className={`transition-transform duration-200 ${isActive ? '-translate-y-1' : ''}`}
                    fill={isActive ? "currentColor" : "none"}
                  />
                  <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute top-2 right-1/4 w-1.5 h-1.5 rounded-full bg-primary shadow-sm" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;