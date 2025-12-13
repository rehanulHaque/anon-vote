export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="max-w-5xl w-full space-y-6 animate-pulse">
        <div className="h-8 bg-white/10 rounded w-1/3" />
        <div className="h-40 bg-white/10 rounded-3xl" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-40 bg-white/10 rounded-2xl" />
          <div className="h-40 bg-white/10 rounded-2xl" />
          <div className="h-40 bg-white/10 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}