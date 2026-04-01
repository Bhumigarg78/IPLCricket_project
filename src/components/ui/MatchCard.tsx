"use client";

import { Match } from "@/types";
import { motion } from "framer-motion";
import { Clock, MapPin, PlayCircle } from "lucide-react";

interface MatchCardProps {
  match: Match;
  isLive?: boolean;
}

export function MatchCard({ match, isLive }: MatchCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-6 relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none rounded-2xl" />
      
      {/* Indicator */}
      <div className="flex items-center justify-between relative z-10">
        {isLive ? (
          <div className="flex items-center gap-2 bg-red-100 dark:bg-red-600/20 px-3 py-1 rounded-full border border-red-200 dark:border-red-600/30 shadow-sm">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></span>
            <span className="text-[10px] font-black text-red-600 dark:text-red-500 uppercase tracking-widest leading-none">LIVE</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
            <Clock className="h-3 w-3 text-gray-500 dark:text-white/40" />
            <span className="text-[10px] font-bold text-gray-600 dark:text-white/60 uppercase tracking-widest leading-none">{match.time}</span>
          </div>
        )}
        <span className="text-[10px] font-medium text-gray-500 dark:text-white/40 uppercase tracking-tighter truncate max-w-[150px] flex items-center gap-1">
           <MapPin className="h-3 w-3" />
           {match.venue?.split(',')[0]}
        </span>
      </div>

      {/* Teams and Scores */}
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center justify-between p-2 rounded-xl transition-colors group-hover:bg-gray-50 dark:group-hover:bg-white/5">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-full p-2 border border-gray-100 dark:border-white/5 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                <img src={match.team1.logo} alt="" className="w-full h-full object-contain" />
             </div>
             <span className="font-black text-xl text-gray-900 dark:text-white tracking-widest">{match.team1.name}</span>
          </div>
          <span className="text-xl font-black text-gray-900 dark:text-white/90">{match.team1.score || "- / -"}</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl transition-colors group-hover:bg-gray-50 dark:group-hover:bg-white/5">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-full p-2 border border-gray-100 dark:border-white/5 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                <img src={match.team2.logo} alt="" className="w-full h-full object-contain" />
             </div>
             <span className="font-black text-xl text-gray-900 dark:text-white tracking-widest">{match.team2.name}</span>
          </div>
          <span className="text-xl font-black text-gray-900 dark:text-white/90">{match.team2.score || "- / -"}</span>
        </div>
      </div>

      {/* Status Footer */}
      <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between relative z-10">
        <p className="text-[11px] font-bold text-amber-600 dark:text-accent uppercase tracking-wider line-clamp-1">
          {match.indicator || "Match Not Started"}
        </p>
        {isLive && (
          <button className="text-amber-600 dark:text-accent hover:text-amber-700 dark:hover:text-white transition-colors">
            <PlayCircle className="h-6 w-6" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
