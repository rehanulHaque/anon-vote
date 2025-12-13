export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 px-4">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-3xl" />
        <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur p-8 shadow-2xl space-y-3">
          <div className="mb-6 text-center">
            <h1 className="text-xl font-semibold">VoteAnon</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}