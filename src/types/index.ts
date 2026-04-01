export interface Team {
  id: string;
  name: string;
  logo: string;
  color: string;
}

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
  indicator?: string;
}

export interface VideoSnippet {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  tag: string;
}
