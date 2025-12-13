import { VoteItem } from "@/types";
import Link from "next/link";

export default function VoteCard({
  vote,
  currentUserId,
}: {
  vote: VoteItem;
  currentUserId: string;
}) {
  const isAdmin = vote.createdBy === currentUserId;

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 space-y-4 hover:border-indigo-400 transition">
      {/* Status + Votes */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs px-2 py-1 rounded-full
            ${
              vote.status === "running"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-slate-500/20 text-slate-400"
            }`}
        >
          {vote.status === "running" ? "Running" : "Ended"}
        </span>
        <span className="text-xs text-slate-400">
          {vote.totalVotes} votes
        </span>
      </div>

      {/* Question */}
      <h3 className="font-medium line-clamp-2">{vote.question}</h3>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        {isAdmin ? (
          // 👑 ADMIN ALWAYS SEES MANAGE
          <Link
            href={`/admin/vote/${vote.id}`}
            className="flex-1 rounded-xl bg-indigo-500 py-2 text-sm text-center hover:bg-indigo-400 transition"
          >
            Manage
          </Link>
        ) : (
          // 👤 NORMAL USER
          <Link
            href={`/vote/${vote.id}`}
            className="flex-1 rounded-xl bg-indigo-500 py-2 text-sm text-center hover:bg-indigo-400 transition"
          >
            {vote.status === "running" ? "Vote" : "View Results"}
          </Link>
        )}

        <button className="flex-1 rounded-xl border border-white/10 py-2 text-sm hover:bg-white/10">
          Share
        </button>
      </div>
    </div>
  );
}