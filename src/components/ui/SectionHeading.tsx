"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewAll?: string;
}

export function SectionHeading({ title, subtitle, viewAll }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex flex-col gap-2">
         <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="w-12 h-1 bg-amber-500 dark:bg-accent rounded-full mb-1"
         />
         <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white italic uppercase tracking-tighter drop-shadow-sm">
            {title}
         </h2>
         {subtitle && (
           <p className="text-xs font-bold text-gray-500 dark:text-white/30 uppercase tracking-widest">{subtitle}</p>
         )}
      </div>
      
      {viewAll && (
        <button className="flex items-center gap-1 text-amber-600 dark:text-accent hover:text-amber-800 dark:hover:text-white transition-colors duration-300 font-black uppercase tracking-widest text-[10px] group">
           VIEW ALL {viewAll}
           <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
}
