"use client";

import { MessageSquare, Camera, Hash, Tv, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#020817] border-t border-gray-200 dark:border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-100 dark:from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
             <Link href="/" className="flex items-center gap-2">
               <div className="h-10 w-10 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-lg flex items-center justify-center border border-white/20 shadow-xl">
                  <span className="text-white font-black italic text-xl">IPL</span>
               </div>
               <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white italic uppercase">
                 STREAM<span className="text-amber-600 dark:text-accent italic">MAX</span>
               </span>
             </Link>
             <p className="text-sm text-gray-600 dark:text-white/50 leading-relaxed font-medium">
               Experience the adrenaline-pumping action of IPL with high-definition streaming, real-time stats, and exclusive highlights. Join the largest cricket community today.
             </p>
             <div className="flex items-center gap-4">
                {[MessageSquare, Camera, Hash, Tv].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-white dark:text-white/70 hover:bg-amber-500 dark:hover:bg-accent dark:hover:text-primary transition-all duration-300">
                     <Icon className="h-5 w-5" />
                  </button>
                ))}
             </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
             <h4 className="text-gray-900 dark:text-white text-lg font-black italic uppercase tracking-tighter">Quick Links</h4>
             <ul className="flex flex-col gap-4">
                {["Home", "All matches", "Teams & Players", "News & Updates", "About StreamMax"].map((item) => (
                  <li key={item}>
                     <Link href="#" className="text-sm font-medium text-gray-500 hover:text-amber-600 dark:text-white/40 dark:hover:text-accent transition-colors duration-200">
                        {item}
                     </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Resources */}
           <div className="flex flex-col gap-6">
             <h4 className="text-gray-900 dark:text-white text-lg font-black italic uppercase tracking-tighter">Legal</h4>
             <ul className="flex flex-col gap-4">
                {["Privacy Policy", "Terms of Service", "Help Center", "Cookie Policy", "Contact Us"].map((item) => (
                  <li key={item}>
                     <Link href="#" className="text-sm font-medium text-gray-500 hover:text-amber-600 dark:text-white/40 dark:hover:text-accent transition-colors duration-200">
                        {item}
                     </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
             <h4 className="text-gray-900 dark:text-white text-lg font-black italic uppercase tracking-tighter">Stay Updated</h4>
             <p className="text-sm font-medium text-gray-500 dark:text-white/40">Subscribe to get match alerts and trending highlights directly in your inbox.</p>
             <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:border-amber-500 dark:focus:border-accent group-hover:border-gray-300 dark:group-hover:border-white/20 transition-all font-medium"
                />
                <button className="absolute right-2 top-2 bg-amber-500 hover:bg-amber-600 dark:bg-accent dark:hover:bg-yellow-500 text-white dark:text-primary p-1.5 rounded-lg transition-all group-hover:scale-105 shadow-sm">
                   <Mail className="h-4 w-4" />
                </button>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-[0.2em] text-center md:text-left">
              © 2024 IPL STREAMMAX. ALL RIGHTS RESERVED.
           </p>
           <p className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-[0.2em] flex items-center justify-center md:justify-end gap-2 text-center md:text-right">
              DESIGNED WITH <span className="text-red-500 animate-pulse">❤</span> FOR CRICKET FANS
           </p>
        </div>
      </div>
    </footer>
  );
}
