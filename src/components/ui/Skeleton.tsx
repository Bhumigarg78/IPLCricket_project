export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/5 rounded-xl border border-white/5 ${className}`} />
  );
}

export function MatchCardSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-6">
       <div className="flex justify-between items-center">
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-24 h-3" />
       </div>
       <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-4">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-20 h-4" />
             </div>
             <Skeleton className="w-12 h-6" />
          </div>
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-4">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-20 h-4" />
             </div>
             <Skeleton className="w-12 h-6" />
          </div>
       </div>
       <div className="pt-4 border-t border-white/5">
          <Skeleton className="w-32 h-3" />
       </div>
    </div>
  );
}
