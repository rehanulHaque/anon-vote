import { VoteSummary } from "@/types";
import Link from "next/link";

export default function VoteCard({ vote }: { vote: VoteSummary }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 hover:border-indigo-400 transition">
      <h3 className="font-medium mb-2 line-clamp-2">{vote.question}</h3>

      <p className="text-sm text-slate-400">
        {vote.totalVotes} votes
      </p>

      <div className="flex gap-3 mt-4">
        <Link
          href={`/admin/vote/${vote.id}`}
          className="flex-1 rounded-xl bg-indigo-500 py-2 text-sm text-center hover:bg-indigo-400 transition"
        >
          Manage
        </Link>

        <Link
          href={`/vote/${vote.id}`}
          className="flex-1 rounded-xl border border-white/10 py-2 text-sm text-center hover:bg-white/10"
        >
          Public View
        </Link>
      </div>
    </div>
  );
}