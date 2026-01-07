import { Session, SkillLevel, SportType, User } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'John Runner',
  handle: '@john_runner',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEXCpygF7qYRArwZC4Ft1_Yo9HUVR819muyhJBly5Z5Yg9SkVVZXiGYfsu4qe3d5ObTd6pIvIUK-RU9F8CNaImHUZjAwnQiCWVfxL7Mt8Gu-zar9CrayYdbfklD954sAc3Hwe8KI7siYTPA6GQkqJEv0JNyWq3U0oWq-qOO1Jsu5mC8rRyyZDiQGGdL8yTWslS7Gp7c11__DXCxtLJ-wYAGtjcBbUdZStrqY9kg9ONQ3V3dGFePnXSTNRUl01Hju31wuUVkj0_2Hw',
  ovr: 92,
  role: 'Organizer',
  stats: {
    joined: 15,
    hosted: 5,
    reliability: 98
  }
};

export const MOCK_SESSIONS: Session[] = [
  {
    id: 's1',
    title: 'Sunday Morning Hoops',
    sport: SportType.BASKETBALL,
    date: '2023-10-24',
    time: '9:00 AM',
    durationMinutes: 90,
    location: {
      name: 'Central Park Courts',
      address: 'Central Park North, New York, NY',
      distance: '0.5 mi',
      mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8Lx_kI59cvL2HPmEeCu3WrjyR3QmtXYrBLQYAshMYAAXfOI9DAmLCUVZpYZsNpRooeQwNPCTW53xZDEgWR0Gj5gi8BN-CHpDQg3q4k-MwNAwvUW46Yd8WkBe2OhRdN5SRsjoqbaOp6gx8jKQ6GPsb6PGLjJN883GCjfZsvHhknCDRj9gPFWXX9mWRBosJqzdM3Oremk-oJB5GfRkKvvAmKh2S3Zh9J60D4iy0WbyNDO5rNs-HHs3eT_-P-iDiums4hZUHNl5ilQ'
    },
    skillLevel: SkillLevel.INTERMEDIATE,
    price: 5.00,
    maxPlayers: 10,
    currentPlayers: 8,
    host: { ...CURRENT_USER, name: 'Alex J.' },
    attendees: [CURRENT_USER, CURRENT_USER, CURRENT_USER],
    description: 'Friendly 5v5 pickup game. We usually play first to 11, win by 2. Bring a white and a dark shirt so we can split teams easily.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcZ7OF-y_J9mRMCdV_Ftglb_USMGaMGzHuFun_kaoUhMRDbSR6cJPi3ENQ3rDs7q5rET36xxclBfLH5KbqAzpOx3xFEn-mFeZrxUcR4wbbQWH4GlHfj4N-aLfKaG_1cUe1NG-GbP4kUovTPf0Ucp21UGEHk1pFda3aF0SINUPrH0Rty1VSySEAfz2VItt3ZuaPoteXErx2ehMmygu9LjZn9P6Cz4v4kK8ymVLUukS8slCJQf4M-iDMCNldnfwAHLj436BDGC55FB0',
    status: 'Open'
  },
  {
    id: 's2',
    title: 'Evening Doubles Match',
    sport: SportType.TENNIS,
    date: '2023-10-24',
    time: '6:30 PM',
    durationMinutes: 120,
    location: {
      name: 'Riverside Club',
      address: 'Riverside Dr, Austin, TX',
      distance: '1.2 mi'
    },
    skillLevel: SkillLevel.ADVANCED,
    price: 15.00,
    maxPlayers: 4,
    currentPlayers: 3,
    host: { ...CURRENT_USER, name: 'Sarah M.', id: 'u2' },
    attendees: [CURRENT_USER],
    description: 'Looking for a strong fourth for doubles. Competitive but fun.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ojkgMnCmzfWx9Rh2pClBCy2S9AHvLT_FrQOsQg_hJp1vyy6UzrfwqLyEQXD7gIpL0UYiPrcEAn_vFbOJL_xMLBpp0ZyOCO7bKktAMf37XwCg78HOX7WZh7dmAN6IY2X0bS5isCYBtq3ykqpJG_dLAfhh8YumPYIExEGlaE42-PqsP6OFoBY90GB7Xp6Mbrf-p3923apWMqhl_YIt_R2qGg8oO7uU9hUm5e9IUcbB2_sMeT142E0-NUGv5ZrTrwzGUbeYHzO2J2o',
    status: 'Open'
  },
  {
    id: 's3',
    title: 'Friendly 5v5 Pickup',
    sport: SportType.SOCCER,
    date: '2023-10-25',
    time: '5:00 PM',
    durationMinutes: 60,
    location: {
      name: 'Downtown Sports Complex',
      address: '100 Main St',
      distance: '3.0 mi'
    },
    skillLevel: SkillLevel.BEGINNER,
    price: 0,
    maxPlayers: 10,
    currentPlayers: 4,
    host: { ...CURRENT_USER, name: 'Mike T.', id: 'u3' },
    attendees: [],
    description: 'Casual kickabout after work. Everyone welcome.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzZKxujtrjMZchGxcrUgAJhg-_plndhF2RA99bzU5neCSEcpcvHP24TcCEcGhsfPPkVZCJ4HFC0-WNnYmnwiaM9ob39uHq7XcF8QymKUQ7pNSw2EtPkC3p-V7PGRJfGGGfmwmDFR6XlFRpbht0Bmk8TNGNuI9HES7BN4b2ttAf1cmt-r03up8Ud5xAE3FLrzO2iz4--2IKskpjmf5iAELoP-0wgDmiJ73aUZhUuYYJLhAN9S4QJQ38HCBXWMCAi0LxVKxGmcwPBLI',
    status: 'Open'
  }
];
