import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CreateSessionScreen from './screens/CreateSessionScreen';
import SessionDetailsScreen from './screens/SessionDetailsScreen';
import MySessionsScreen from './screens/MySessionsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';
import BottomNav from './components/BottomNav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  // Hide bottom nav on specific screens
  const hideNav = ['/', '/create', '/details']; 
  const shouldHideNav = hideNav.some(path => location.pathname === path || location.pathname.startsWith('/details/'));

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden relative">
      <div className="flex-1 overflow-y-auto no-scrollbar relative">
        {children}
      </div>
      {!shouldHideNav && <BottomNav />}
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/create" element={<CreateSessionScreen />} />
          <Route path="/details/:id" element={<SessionDetailsScreen />} />
          <Route path="/my-sessions" element={<MySessionsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}