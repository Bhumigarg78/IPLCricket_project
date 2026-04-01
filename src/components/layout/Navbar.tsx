"use client";

import { Search, User, Menu, Bell } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-[#020817]/90 backdrop-blur-lg border-b border-gray-200 dark:border-white/5 py-4 shadow-sm dark:shadow-none" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-lg flex items-center justify-center border border-white/20 shadow-xl">
               <span className="text-white font-black italic text-xl">IPL</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white hidden sm:block">
              STREAM<span className="text-accent italic">MAX</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-600 dark:text-white/70">
            {["Home", "Matches", "Teams", "Highlights"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-amber-600 dark:hover:text-accent transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 dark:bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-gray-600 dark:text-white/80">
          <button className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer hidden md:block">
            <Search className="h-5 w-5" />
          </button>
          
          <div className="relative cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white dark:border-[#020817]"></span>
          </div>
          
          <ThemeToggle />

          <Link
            href="#"
            className="flex items-center gap-2 py-2 px-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full transition-all duration-300 group ml-2"
          >
            <User className="h-5 w-5 text-gray-600 dark:text-current group-hover:text-amber-600 dark:group-hover:text-accent font-bold" />
            <span className="text-sm font-bold text-gray-700 dark:text-inherit hidden md:block group-hover:text-amber-600 dark:group-hover:text-accent">John Doe</span>
          </Link>
          
          <button className="lg:hidden ml-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
