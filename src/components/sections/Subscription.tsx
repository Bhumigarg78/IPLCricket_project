"use client";

import { Check, Shield, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PLANS = [
  {
    id: "basic",
    name: "Mobile Basic",
    price: "₹499",
    duration: "/year",
    description: "Perfect for watching on the go.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    popular: false,
    features: [
      "1 Mobile Device",
      "720p HD Quality",
      "Live Matches & Highlights",
      "Ads Supported",
    ],
  },
  {
    id: "premium",
    name: "StreamMax Premium",
    price: "₹1499",
    duration: "/year",
    description: "The ultimate ad-free experience.",
    icon: <Crown className="w-6 h-6 text-amber-500" />,
    popular: true,
    features: [
      "4 Devices (TV, Mobile, PC)",
      "4K Ultra HD + Dolby Audio",
      "Live Matches & Highlights",
      "Zero Ads (Except Live Sports)",
      "Exclusive Player Interviews",
    ],
  },
  {
    id: "vip",
    name: "Super VIP",
    price: "₹999",
    duration: "/year",
    description: "Great for big screens at home.",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    popular: false,
    features: [
      "2 Devices Simultaneously",
      "1080p Full HD Quality",
      "Live Matches & Highlights",
      "Zero Ads (Except Live Sports)",
    ],
  },
];

export function Subscription() {
  return (
    <section className="relative z-10 w-full py-10">
      <SectionHeading 
        title="Choose Your Plan" 
        subtitle="Unlock unlimited cricket streaming in high definition" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 isolate">
        {PLANS.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
              plan.popular 
                ? "bg-white dark:bg-[#0f172a] shadow-2xl dark:shadow-[0_0_40px_rgba(245,158,11,0.15)] border-2 border-amber-500 dark:border-accent scale-100 lg:scale-105 z-10" 
                : "bg-gray-50/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-accent dark:to-yellow-600 text-white dark:text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-2xl bg-gray-100 dark:bg-white/5 shadow-sm border border-gray-200 dark:border-white/10 ${plan.popular ? 'bg-amber-50 dark:bg-accent/10 border-amber-200 dark:border-accent/20' : ''}`}>
                 {plan.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">
                 {plan.name}
              </h3>
            </div>

            <div className="mb-6 flex items-baseline gap-1">
               <span className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-none">
                 {plan.price}
               </span>
               <span className="text-sm font-bold text-gray-500 dark:text-white/40 uppercase tracking-widest">
                 {plan.duration}
               </span>
            </div>

            <p className="text-sm font-medium text-gray-600 dark:text-white/60 mb-8 border-b border-gray-200 dark:border-white/10 pb-8 min-h-[4rem]">
               {plan.description}
            </p>

            <ul className="flex flex-col gap-5 flex-1 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={`mt-0.5 rounded-full p-1 ${plan.popular ? 'bg-amber-100 dark:bg-accent/20 text-amber-600 dark:text-accent' : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-white/60'}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-white/80 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-md ${
                plan.popular
                  ? "bg-amber-500 hover:bg-amber-600 dark:bg-accent dark:hover:bg-yellow-500 text-white dark:text-primary hover:shadow-lg hover:shadow-amber-500/20"
                  : "bg-gray-900 hover:bg-black dark:bg-white/10 dark:hover:bg-white/20 text-white dark:text-white border border-transparent dark:border-white/5"
              }`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
