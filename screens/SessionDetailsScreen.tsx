import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, Calendar, MapPin, Navigation, Clock, CircleDollarSign, ArrowRight } from 'lucide-react';
import { MOCK_SESSIONS } from '../constants';

const SessionDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const session = MOCK_SESSIONS.find(s => s.id === id) || MOCK_SESSIONS[0];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen relative pb-24">
      {/* Header Nav Overlay */}
      <div className="absolute top-0 left-0 w-full z-20 p-4 pt-6 flex items-center justify-between pointer-events-none">
        <button 
          onClick={() => navigate(-1)}
          className="pointer-events-auto flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 transition active:scale-95"
        >
          <ArrowLeft size={24} />
        </button>
        <button className="pointer-events-auto flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 transition active:scale-95">
          <Bookmark size={24} />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[380px] shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${session.image}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10"></div>
        
        {/* Title Content */}
        <div className="absolute bottom-0 left-0 w-full p-5 pb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary mb-3 shadow-sm">
            <span className="text-xs font-bold text-white uppercase tracking-wide">{session.sport}</span>
          </div>
          <h1 className="text-white text-3xl font-bold leading-tight tracking-tight mb-2">{session.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 flex flex-col gap-8 -mt-6 relative z-10 bg-background-light dark:bg-background-dark rounded-t-3xl">
        {/* Quick Stats */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {[session.skillLevel, session.price === 0 ? 'Free' : `$${session.price}`, `${session.durationMinutes} Mins`].map((stat, i) => (
             <div key={i} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-surface-dark px-4 border border-gray-100 dark:border-white/5 shadow-sm">
               {i === 0 && <span className="w-2 h-2 rounded-full bg-accent"></span>}
               {i === 1 && <CircleDollarSign size={14} className="text-accent" />}
               {i === 2 && <Clock size={14} className="text-accent" />}
               <p className="text-gray-900 dark:text-gray-100 text-sm font-medium">{stat}</p>
             </div>
          ))}
        </div>

        {/* Host */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border-2 border-white dark:border-gray-800 shadow-sm"
              style={{ backgroundImage: `url("${session.host.avatarUrl}")` }}
            />
            <div className="flex flex-col">
              <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">Hosted by {session.host.name}</p>
              <p className="text-accent text-sm font-medium">Organizer</p>
            </div>
          </div>
          <button className="flex h-9 px-5 items-center justify-center rounded-lg bg-gray-100 dark:bg-surface-dark text-gray-900 dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
            Follow
          </button>
        </div>

        {/* Info Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark text-accent shrink-0 size-12 shadow-sm border border-gray-100 dark:border-gray-800">
              <Calendar size={24} />
            </div>
            <div className="flex flex-col justify-center py-1">
              <p className="text-gray-900 dark:text-white text-base font-bold">Saturday, Oct 14</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">10:00 AM - 11:30 AM</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark text-accent shrink-0 size-12 shadow-sm border border-gray-100 dark:border-gray-800">
              <MapPin size={24} />
            </div>
            <div className="flex flex-col justify-center py-1 flex-1">
              <p className="text-gray-900 dark:text-white text-base font-bold">{session.location.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">{session.location.address}</p>
            </div>
          </div>

          {/* Map Card */}
          <div className="w-full h-32 rounded-2xl overflow-hidden relative group cursor-pointer border border-gray-200 dark:border-gray-800">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8Lx_kI59cvL2HPmEeCu3WrjyR3QmtXYrBLQYAshMYAAXfOI9DAmLCUVZpYZsNpRooeQwNPCTW53xZDEgWR0Gj5gi8BN-CHpDQg3q4k-MwNAwvUW46Yd8WkBe2OhRdN5SRsjoqbaOp6gx8jKQ6GPsb6PGLjJN883GCjfZsvHhknCDRj9gPFWXX9mWRBosJqzdM3Oremk-oJB5GfRkKvvAmKh2S3Zh9J60D4iy0WbyNDO5rNs-HHs3eT_-P-iDiums4hZUHNl5ilQ")` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
              <div className="bg-white dark:bg-gray-900 p-2.5 rounded-full shadow-lg flex items-center justify-center">
                <Navigation size={20} className="text-accent fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">About the Session</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base font-light leading-relaxed">
            {session.description}
          </p>
          <button className="text-left text-sm font-bold text-accent mt-1">Read more</button>
        </div>

        {/* Attendees */}
        <div className="flex flex-col gap-3 pb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Who's going?</h3>
            <span className="text-sm font-medium text-accent">{session.maxPlayers - session.currentPlayers} spots left</span>
          </div>
          <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex -space-x-3 overflow-hidden p-1">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-surface-dark bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/seed/${i + 40}/100")` }}></div>
               ))}
               <div className="flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-white dark:ring-surface-dark bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-600 dark:text-gray-300">
                 +4
               </div>
            </div>
            <div className="flex-1 flex justify-between items-center group cursor-pointer">
              <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">See all attendees</p>
              <ArrowRight size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-5 py-4 pb-8 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 dark:text-gray-400">Total Price</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{session.price === 0 ? 'Free' : `$${session.price}`}</span>
          </div>
          <button className="flex-1 h-12 bg-primary hover:bg-primary-dark active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-lg">Join Session</span>
            <ArrowRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsScreen;