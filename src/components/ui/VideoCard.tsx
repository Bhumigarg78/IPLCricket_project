"use client";

import { VideoSnippet } from "@/types";
import { Play, Eye, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface VideoCardProps {
  video: VideoSnippet;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all cursor-pointer border border-gray-200 dark:border-white/5"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-black/10 dark:group-hover:bg-black/20 transition-colors" />
        
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
           <div className="w-14 h-14 bg-amber-500/90 dark:bg-accent/90 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/20 backdrop-blur-md">
              <Play className="h-6 w-6 text-white dark:text-primary fill-current ml-1" />
           </div>
        </div>

        {/* Tag */}
        <div className="absolute top-3 left-3 bg-white/20 dark:bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-black uppercase text-white border border-white/20 dark:border-white/10 tracking-widest shadow-sm">
           {video.tag}
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-black/70 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-tighter">
           {video.duration}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-accent transition-colors leading-snug line-clamp-2">
           {video.title}
        </h3>
        
        <div className="flex items-center gap-4 text-[11px] font-bold text-gray-500 dark:text-white/40 uppercase tracking-widest">
           <div className="flex items-center gap-1.5">
              <Eye className="h-3 w-3" />
              <span>{video.views} Views</span>
           </div>
           <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              <span>2 hours ago</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
