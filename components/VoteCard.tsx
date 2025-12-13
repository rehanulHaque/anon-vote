import { VoteOption } from "@/types";

export default function VoteCard({
  option,
  percentage,
  disabled,
  selected,
  onVote,
}: {
  option: VoteOption;
  percentage: number;
  disabled: boolean;
  selected: boolean;
  onVote: () => void;
}) {
  return (
    <div className="relative rounded-3xl border border-white/10 p-6 overflow-hidden group hover:border-indigo-400 transition">
      {/* animated progress */}
      <div
        className="absolute inset-y-0 left-0 bg-indigo-500/20 transition-all duration-700"
        style={{ width: `${percentage}%` }}
      />

      <div className="relative z-10 space-y-6">
        <span className="text-xs uppercase tracking-wider text-slate-400">
          {option.label}
        </span>

        <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-8 flex items-center justify-center min-h-40">
          {option.type === "image" ? (
            <img
              src={option.value}
              alt={option.label}
              className="rounded-xl max-h-40 object-contain"
            />
          ) : (
            <span className="text-2xl font-medium">{option.value}</span>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Votes</span>
            <span className="text-slate-400">
              {percentage.toFixed(1)}%
            </span>
          </div>

          <button
            disabled={disabled}
            onClick={onVote}
            className={`w-full rounded-xl py-3 font-medium transition
              ${selected
                ? "bg-indigo-500"
                : "bg-slate-800 hover:bg-slate-700"}
              ${disabled && !selected ? "cursor-not-allowed opacity-60" : ""}`}
          >
            {selected ? "Voted" : "Vote"}
          </button>
        </div>
      </div>
    </div>
  );
}