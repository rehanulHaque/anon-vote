export default function StatCard({
  label,
  value,
  accent = "indigo",
}: {
  label: string;
  value: number;
  accent?: "indigo" | "emerald" | "slate";
}) {
  const colors = {
    indigo: "text-indigo-400",
    emerald: "text-emerald-400",
    slate: "text-slate-400",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
      <p className="text-sm text-slate-400">{label}</p>
      <p className={`text-3xl font-semibold ${colors[accent]}`}>{value}</p>
    </div>
  );
}