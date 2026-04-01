import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MatchCard } from "@/components/ui/MatchCard";
import { VideoCard } from "@/components/ui/VideoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { Subscription } from "@/components/sections/Subscription";
import { Footer } from "@/components/layout/Footer";
import { LIVE_MATCHES, UPCOMING_MATCHES, HIGHLIGHTS } from "@/data/dummy";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#020817] selection:bg-amber-500 dark:selection:bg-accent selection:text-white dark:selection:text-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero match={LIVE_MATCHES[0]} />

      <div className="container mx-auto px-4 md:px-8 py-20 flex flex-col gap-24 relative z-10">
        
        {/* Live Matches Section */}
        <section>
          <SectionHeading 
            title="Live Matches" 
            subtitle="Catch the action as it happens" 
            viewAll="Live" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIVE_MATCHES.map((match) => (
              <MatchCard key={match.id} match={match} isLive />
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section>
          <SectionHeading 
            title="IPL Highlights" 
            subtitle="Top moments from the pitch" 
            viewAll="Videos" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Upcoming Matches Section */}
        <section>
          <SectionHeading 
            title="Upcoming Schedule" 
            subtitle="Set your reminders for the next big game" 
            viewAll="Fixtures" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_MATCHES.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>

        {/* Subscription Plans */}
        <Subscription />

        {/* Team Showcase */}
        <section className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gray-200 dark:border-white/5 shadow-xl dark:shadow-none relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 dark:bg-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
          <SectionHeading 
            title="IPL Teams" 
            subtitle="All your favorite teams in one place" 
          />
          <TeamShowcase />
        </section>

      </div>

      <Footer />
    </main>
  );
}
