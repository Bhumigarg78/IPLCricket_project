"use client";

import { Play, Calendar, Trophy, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Match } from "@/types";

interface HeroProps {
  match: Match;
}

export function Hero({ match }: HeroProps) {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e3adbb47c1?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Overlays for dark/light theme cinematic look */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 dark:from-[#020817] dark:via-[#020817]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        
        {/* Abstract shapes for design feel */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-white animate-pulse shadow-md">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Live Now
             </div>
             <div className="flex items-center gap-2 bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-white/80 border border-gray-200 dark:border-white/5 backdrop-blur-sm">
                <Trophy className="h-3 w-3" />
                IPL 2024 Final
             </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900 dark:text-white gap-4">
             {match.team1.name} <span className="text-amber-600 dark:text-accent italic">VS</span> {match.team2.name}
          </h1>

          <p className="text-lg text-gray-700 dark:text-white/60 max-w-lg leading-relaxed font-medium dark:font-light">
             Witness the ultimate showdown between {match.team1.name} and {match.team2.name} at the {match.venue}. Catch every boundary, every wicket, and every moment live only on StreamMax.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-4">
             <button className="flex items-center gap-3 bg-amber-500 hover:bg-amber-600 dark:bg-accent dark:hover:bg-yellow-500 text-white dark:text-primary px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)] dark:shadow-[0_0_20px_rgba(247,194,45,0.4)] group">
                <Play className="h-6 w-6 fill-current" />
                WATCH LIVE
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
             </button>
             
             <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm shadow-sm group">
                <Calendar className="h-5 w-5 text-amber-600 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300" />
                SCHEDULE
             </button>
          </div>

          <div className="flex items-center gap-12 mt-8 text-gray-500 dark:text-white/50 text-sm font-bold dark:font-medium">
             <div className="flex flex-col gap-1 border-l-2 border-amber-500 dark:border-accent pl-4">
                <span className="text-gray-900 dark:text-white text-xl font-black">{match.team1.score || "---"}</span>
                <span className="uppercase tracking-widest text-[10px]">{match.team1.name} INNINGS ({match.team1.overs} OV)</span>
             </div>
             <div className="flex flex-col gap-1 border-l-2 border-gray-300 dark:border-white/20 pl-4">
                <span className="text-gray-900 dark:text-white text-xl font-black">CRR 8.42</span>
                <span className="uppercase tracking-widest text-[10px]">CURRENT RUN RATE</span>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-end perspective-[1000px] mb-20"
        >
          {/* Visual card for match */}
          <div className="relative w-[500px] h-[300px] glass-card rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 border border-gray-200/50 dark:border-white/10">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-amber-500/10 dark:from-blue-900/40 dark:to-accent/10 pointer-events-none" />
             
             <div className="flex justify-between items-center h-full px-12 relative z-10 pb-10">
                <div className="flex flex-col items-center gap-4">
                   <div className="w-24 h-24 bg-white dark:bg-white/5 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 shadow-lg p-4 group">
                      <img src={match.team1.logo} alt={match.team1.name} className="w-full h-full object-contain filter drop-shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-xl" />
                   </div>
                   <span className="text-center font-black text-2xl text-gray-900 dark:text-white tracking-widest">{match.team1.name}</span>
                </div>

                <div className="flex flex-col items-center">
                   <span className="text-4xl font-black italic text-amber-500 dark:text-accent drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] dark:drop-shadow-[0_0_10px_rgba(247,194,45,0.5)]">VS</span>
                </div>

                <div className="flex flex-col items-center gap-4">
                   <div className="w-24 h-24 bg-white dark:bg-white/5 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 shadow-lg p-4 group">
                      <img src={match.team2.logo} alt={match.team2.name} className="w-full h-full object-contain filter drop-shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-xl" />
                   </div>
                   <span className="text-center font-black text-2xl text-gray-900 dark:text-white tracking-widest">{match.team2.name}</span>
                </div>
             </div>
             
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-100/50 dark:bg-white/5 border-t border-gray-200/50 dark:border-white/5 text-center text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-white/40">
                {match.venue}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
