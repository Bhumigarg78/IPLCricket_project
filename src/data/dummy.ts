export interface Match {
  id: string;
  team1: {
    name: string;
    logo: string;
    score?: string;
    overs?: string;
  };
  team2: {
    name: string;
    logo: string;
    score?: string;
    overs?: string;
  };
  status: 'live' | 'upcoming' | 'finished';
  time?: string;
  venue?: string;
  indicator?: string; // e.g. "LIVE", "2nd Innings"
}

export interface VideoSnippet {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  tag: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  color: string;
}

export const TEAMS: Team[] = [
  { id: 'mi', name: 'Mumbai Indians', logo: 'https://scores.iplt20.com/ipl/teamlogos/MI.png', color: '#004BA0' },
  { id: 'csk', name: 'Chennai Super Kings', logo: 'https://scores.iplt20.com/ipl/teamlogos/CSK.png', color: '#FFFF00' },
  { id: 'rcb', name: 'Royal Challengers Bengaluru', logo: 'https://scores.iplt20.com/ipl/teamlogos/RCB.png', color: '#EC1C24' },
  { id: 'dc', name: 'Delhi Capitals', logo: 'https://scores.iplt20.com/ipl/teamlogos/DC.png', color: '#000080' },
  { id: 'kkr', name: 'Kolkata Knight Riders', logo: 'https://scores.iplt20.com/ipl/teamlogos/KKR.png', color: '#3A225D' },
  { id: 'pbks', name: 'Punjab Kings', logo: 'https://scores.iplt20.com/ipl/teamlogos/PBKS.png', color: '#ED1B24' },
  { id: 'rr', name: 'Rajasthan Royals', logo: 'https://scores.iplt20.com/ipl/teamlogos/RR.png', color: '#EA1A85' },
  { id: 'srh', name: 'Sunrisers Hyderabad', logo: 'https://scores.iplt20.com/ipl/teamlogos/SRH.png', color: '#F26522' },
  { id: 'gt', name: 'Gujarat Titans', logo: 'https://scores.iplt20.com/ipl/teamlogos/GT.png', color: '#1B2133' },
  { id: 'lsg', name: 'Lucknow Super Giants', logo: 'https://scores.iplt20.com/ipl/teamlogos/LSG.png', color: '#0057E7' },
];

export const LIVE_MATCHES: Match[] = [
  {
    id: 'l1',
    team1: { name: 'MI', logo: 'https://scores.iplt20.com/ipl/teamlogos/MI.png', score: '178/4', overs: '18.2' },
    team2: { name: 'CSK', logo: 'https://scores.iplt20.com/ipl/teamlogos/CSK.png', score: '182/2', overs: '20' },
    status: 'live',
    indicator: 'CSK WON BY 8 WICKETS',
    venue: 'Wankhede Stadium, Mumbai',
  },
  {
    id: 'l2',
    team1: { name: 'RCB', logo: 'https://scores.iplt20.com/ipl/teamlogos/RCB.png', score: '145/6', overs: '15.4' },
    team2: { name: 'KKR', logo: 'https://scores.iplt20.com/ipl/teamlogos/KKR.png' },
    status: 'live',
    indicator: 'LIVE',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
  },
];

export const UPCOMING_MATCHES: Match[] = [
  {
    id: 'u1',
    team1: { name: 'DC', logo: 'https://scores.iplt20.com/ipl/teamlogos/DC.png' },
    team2: { name: 'RR', logo: 'https://scores.iplt20.com/ipl/teamlogos/RR.png' },
    status: 'upcoming',
    time: 'Today, 7:30 PM',
    venue: 'Arun Jaitley Stadium, Delhi',
  },
  {
    id: 'u2',
    team1: { name: 'SRH', logo: 'https://scores.iplt20.com/ipl/teamlogos/SRH.png' },
    team2: { name: 'PBKS', logo: 'https://scores.iplt20.com/ipl/teamlogos/PBKS.png' },
    status: 'upcoming',
    time: 'Tomorrow, 3:30 PM',
    venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad',
  },
];

export const HIGHLIGHTS: VideoSnippet[] = [
  {
    id: 'h1',
    title: 'MI vs CSK: Final Over Drama | IPL 2024 Highlights',
    thumbnail: 'https://placehold.co/800x450/002b5c/f7c22d?text=Final+Over+Drama&font=Montserrat',
    duration: '12:45',
    views: '2.4M',
    tag: 'Highlights',
  },
  {
    id: 'h2',
    title: 'Virat Kohli\'s Masterclass 100 vs KKR',
    thumbnail: 'https://placehold.co/800x450/0f172a/ffffff?text=Kohli+Masterclass+100&font=Montserrat',
    duration: '08:20',
    views: '1.8M',
    tag: 'Trending',
  },
  {
    id: 'h3',
    title: 'Best Catches of the Week | IPL 2024',
    thumbnail: 'https://placehold.co/800x450/1e293b/ef4444?text=Best+Catches+2024&font=Montserrat',
    duration: '05:30',
    views: '900K',
    tag: 'Clips',
  },
];
