export default function Skeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-3xl space-y-6 animate-pulse">
        <div className="h-8 bg-white/10 rounded w-1/2 mx-auto" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 bg-white/10 rounded-3xl" />
          <div className="h-64 bg-white/10 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}