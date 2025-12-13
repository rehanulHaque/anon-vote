export default function Skeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-4xl space-y-6 animate-pulse">
        <div className="h-8 bg-white/10 rounded w-1/2" />
        <div className="h-32 bg-white/10 rounded-2xl" />
        <div className="h-64 bg-white/10 rounded-3xl" />
      </div>
    </div>
  );
}
