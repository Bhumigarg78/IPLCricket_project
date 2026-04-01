"use client";

import { TEAMS } from "@/data/dummy";
import { motion } from "framer-motion";

export function TeamShowcase() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {TEAMS.map((team, index) => (
        <motion.div
          key={team.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ 
            scale: 1.05, 
          }}
          className="flex flex-col items-center gap-4 p-6 glass-card rounded-2xl group transition-all duration-300 border border-transparent dark:border-white/5 cursor-pointer bg-white/40 dark:bg-transparent hover:bg-white/80 dark:hover:bg-white/5 hover:border-gray-200 dark:hover:border-white/20 hover:shadow-xl"
        >
          <div className="w-16 h-16 relative flex items-center justify-center p-2 rounded-full bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all">
             <img src={team.logo} alt={team.name} className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </div>
          <span className="text-[10px] font-black uppercase text-center tracking-widest text-gray-500 dark:text-white/40 group-hover:text-amber-600 dark:group-hover:text-white transition-colors">
             {team.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
