"use client";

import { Search, User, Menu, Bell, X, LogIn } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Matches", "Teams", "Highlights"];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-white/95 dark:bg-[#020817]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 py-4 shadow-lg dark:shadow-none" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-lg flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                 <span className="text-white font-black italic text-xl">IPL</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white hidden sm:block">
                STREAM<span className="text-amber-500 dark:text-accent italic">MAX</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-bold text-gray-600 dark:text-white/70">
              {menuItems.map((item) => (
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
          <div className="flex items-center gap-2 md:gap-4 text-gray-600 dark:text-white/80">
            <button className="p-2 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            
            <div className="relative p-2 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-[#020817]"></span>
            </div>
            
            <ThemeToggle />

            {/* Desktop Login Button */}
            <Link
              href="#"
              className="hidden lg:flex items-center gap-2 py-2.5 px-6 bg-amber-500 hover:bg-amber-600 dark:bg-accent dark:hover:bg-yellow-500 text-white dark:text-primary rounded-full transition-all duration-300 font-black shadow-md hover:shadow-amber-500/20 uppercase text-xs tracking-widest"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 ml-1 text-gray-900 dark:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#020817] z-[55] lg:hidden pt-24"
          >
            <div className="container mx-auto px-6 flex flex-col gap-8">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href="#"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter hover:text-amber-500 dark:hover:text-accent transition-colors block border-b border-gray-100 dark:border-white/5 pb-4"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 mt-4"
              >
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 py-5 px-6 bg-amber-500 text-white dark:bg-accent dark:text-primary rounded-2xl font-black uppercase tracking-widest shadow-xl"
                >
                  <LogIn className="h-5 w-5" />
                  Sign In Now
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 py-5 px-6 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white rounded-2xl font-black uppercase tracking-widest"
                >
                  <User className="h-5 w-5" />
                  Create Account
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
