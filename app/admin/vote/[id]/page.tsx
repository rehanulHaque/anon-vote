"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { AdminVote } from "@/types";
import toast from "@/components/Toast";
import delay from "@/utils/delay";
import Skeleton from "@/app/admin/_components/AdminSkeleton";


// ---------------- MOCK API ----------------
async function fetchAdminVote(): Promise<AdminVote> {
  await delay(400);
  return {
    id: "vote_123",
    question: "Cats vs Dogs?",
    status: "running",
    totalVotes: 134,
    createdAt: "2025-01-05",
    endsAt: "2025-01-20",
    options: [
      { id: "A", label: "Cats 🐱", votes: 72 },
      { id: "B", label: "Dogs 🐶", votes: 62 },
    ],
  };
}

async function endVote() {
  await delay(300);
  return { success: true };
}

async function deleteVote() {
  await delay(300);
  return { success: true };
}

// ---------------- PAGE ----------------
export default function AdminVotePage() {
  const [vote, setVote] = useState<AdminVote | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetchAdminVote().then(setVote);
  }, []);

  if (!vote) return <Skeleton />;

  const endHandler = () => {
    startTransition(async () => {
      const res = await endVote();
      if (res.success) {
        setVote({ ...vote, status: "ended" });
        toast("Vote has been ended");
      }
    });
  };

  const deleteHandler = () => {
    if (!confirm("Are you sure you want to delete this vote?")) return;

    startTransition(async () => {
      const res = await deleteVote();
      if (res.success) {
        toast("Vote deleted");
        // router.push('/dashboard') later
      }
    });
  };

  const maxVotes = Math.max(...vote.options.map((o) => o.votes)) || 1;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs text-slate-400">Admin View</span>
            <h1 className="text-3xl font-semibold">{vote.question}</h1>
            <p className="text-xs text-slate-500">
              Created on {new Date(vote.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex gap-3">
            {vote.status === "running" && (
              <button
                disabled={isPending}
                onClick={endHandler}
                className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium hover:bg-amber-400 disabled:opacity-60"
              >
                End Vote
              </button>
            )}
            <Link
              href={`/vote/${vote.id}`}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
            >
              View Public Page
            </Link>
            <button
              disabled={isPending}
              onClick={deleteHandler}
              className="rounded-xl border border-red-500/40 text-red-400 px-4 py-2 text-sm hover:bg-red-500/10 disabled:opacity-60"
            >
              Delete
            </button>
          </div>
        </header>

        {/* Status */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 flex items-center justify-between">
          <span
            className={`text-sm px-3 py-1 rounded-full
              ${vote.status === "running"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-slate-500/20 text-slate-400"}`}
          >
            {vote.status === "running" ? "Running" : "Ended"}
          </span>
          <span className="text-sm text-slate-400">
            {vote.totalVotes} total votes
          </span>
        </div>

        {/* Results */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 space-y-6">
          <h2 className="text-xl font-medium">Results</h2>

          {vote.options.map((opt) => {
            const percent = (opt.votes / vote.totalVotes) * 100;

            return (
              <div key={opt.id} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{opt.label}</span>
                  <span className="text-slate-400">
                    {opt.votes} ({percent.toFixed(1)}%)
                  </span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 transition-all duration-700"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Danger Zone */}
        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 space-y-4">
          <h3 className="text-lg font-medium text-red-400">Danger Zone</h3>
          <p className="text-sm text-slate-400">
            Deleting a vote is permanent and cannot be undone.
          </p>
          <button
            onClick={deleteHandler}
            className="rounded-xl border border-red-500/40 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
          >
            Delete Vote Permanently
          </button>
        </div>
      </div>
    </div>
  );
}

