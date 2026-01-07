import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-full min-h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative flex-grow h-[55%] w-full">
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWQlA_RcNWO1xtCfLobGMYdGbv2l-1ueNhUUY8RWCqBVy7JEieUNmmK9Vw6GH2Y6WSca08ppMoR3S9FusHSjLupX7_0iOBSwRX6EYDAZ4nyF86-lUSDXXeqbTGowZDR8m9z93ISsRGwYOtAXXQzSPUocM-nWZrH4J37dvHpR37Ry3U6612Ot8S5SemsIIP298_dnHL3lviQKoxcUPmnE_peFp4uygSd-ZHgQ2Zc4jAzqvz9LSU6yA6SbOiBHlLmS6yr8CvSAbsqQw")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
        
        {/* Top Branding */}
        <div className="absolute top-0 left-0 w-full pt-12 px-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-2 bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
            <Sparkles size={16} className="text-primary fill-current" />
            <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide">SPORTS CONNECT</span>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="relative -mt-10 flex flex-col bg-background-light dark:bg-background-dark rounded-t-[32px] px-6 pt-12 pb-8 z-20 h-[45%] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        {/* Floating Avatars Badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="bg-white dark:bg-[#1b3022] p-1.5 pr-4 rounded-full shadow-lg flex items-center gap-3 animate-fade-in-up">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1b3022] bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/seed/${i + 120}/100")` }}></div>
              ))}
            </div>
            <span className="text-xs font-bold text-accent dark:text-[#81c784]">2k+ players active</span>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center text-center mt-2">
          <h1 className="text-[#2E332E] dark:text-white tracking-tight text-[32px] leading-tight font-extrabold mb-4">
            Find Your Game. <br/>
            <span className="text-primary">Connect Global.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed max-w-[300px] mb-8">
            Discover local sports sessions or organize your own matches in seconds. Join the community.
          </p>
          
          <div className="w-full space-y-3 mt-auto">
            <button 
              onClick={() => navigate('/home')}
              className="w-full flex cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white text-base font-bold tracking-wide shadow-[0_4px_14px_rgba(216,125,74,0.4)]"
            >
              Get Started
            </button>
            <button className="w-full flex cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-800 dark:text-white text-base font-semibold">
              I already have an account
            </button>
          </div>
          
          <p className="text-[10px] text-gray-400 mt-6">
            By continuing, you agree to our <a href="#" className="underline hover:text-primary">Terms</a> & <a href="#" className="underline hover:text-primary">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;