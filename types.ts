export enum SportType {
  BASKETBALL = 'Basketball',
  TENNIS = 'Tennis',
  SOCCER = 'Soccer',
  VOLLEYBALL = 'Volleyball',
  RUNNING = 'Running',
  YOGA = 'Yoga',
  PADEL = 'Padel'
}

export enum SkillLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  ALL_LEVELS = 'All Levels'
}

export interface User {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  ovr: number; // Overall Rating
  role: 'Player' | 'Organizer';
  stats: {
    joined: number;
    hosted: number;
    reliability: number;
  };
}

export interface Session {
  id: string;
  title: string;
  sport: SportType;
  date: string; // ISO string
  time: string;
  durationMinutes: number;
  location: {
    name: string;
    address: string;
    distance: string; // e.g., "0.5 mi"
    mapImage?: string;
  };
  skillLevel: SkillLevel;
  price: number;
  maxPlayers: number;
  currentPlayers: number;
  host: User;
  attendees: User[];
  description: string;
  image: string;
  status: 'Open' | 'Full' | 'Waitlist' | 'Cancelled';
}

export interface SportStat {
  sport: SportType;
  position?: string;
  rating: number;
  games: number;
  goals?: number; // Generic stat 1
  mvp?: number;   // Generic stat 2
}