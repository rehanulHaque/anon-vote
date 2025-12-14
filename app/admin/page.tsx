"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import StatCard from "@/app/admin/_components/StatCard";
import FilterButton from "@/components/FilterButton";
import { AdminVoteItem, VoteStatus } from "@/types";
import { getAdminData } from "@/services/admin";


export default function AdminDashboardPage() {
  const [votes, setVotes] = useState<AdminVoteItem[]>([]);
  const [filter, setFilter] = useState<"all" | VoteStatus>("all");

  useEffect(() => {
    getAdminData().then(({data}) => setVotes(data));
  }, []);

  const filteredVotes = votes.filter((v) =>
    filter === "all" ? true : v.status === filter
  );

  const runningCount = votes.filter((v) => v.status === "running").length;
  const endedCount = votes.filter((v) => v.status === "ended").length;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <p className="text-sm text-slate-400">
              Manage all votes you’ve created
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <Link
            href="/create"
            className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium hover:bg-indigo-400 transition"
          >
            + Create Vote
          </Link>
          <Link
            href="/profile"
            className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium hover:bg-indigo-400 transition"
          >
            Profile
          </Link>
          </div>
        </header>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          <StatCard label="Total Votes" value={votes.length} />
          <StatCard label="Running" value={runningCount} accent="emerald" />
          <StatCard label="Ended" value={endedCount} accent="slate" />
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterButton>
          <FilterButton
            active={filter === "running"}
            onClick={() => setFilter("running")}
          >
            Running
          </FilterButton>
          <FilterButton
            active={filter === "ended"}
            onClick={() => setFilter("ended")}
          >
            Ended
          </FilterButton>
        </div>

        {/* Votes Table */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-slate-400">
              <tr>
                <th className="text-left px-6 py-4">Question</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Votes</th>
                <th className="text-left px-6 py-4">Created</th>
                <th className="text-right px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVotes.map((vote) => (
                <tr
                  key={vote.id}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-4 max-w-xs line-clamp-2">
                    {vote.question}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full
                        ${vote.status === "running"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-500/20 text-slate-400"}`}
                    >
                      {vote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">
                    {vote.totalVotes}
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {new Date(vote.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/admin/vote/${vote.id}`}
                      className="rounded-xl bg-indigo-500 px-4 py-2 text-xs hover:bg-indigo-400 transition"
                    >
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredVotes.length === 0 && (
            <div className="p-10 text-center text-slate-400">
              No votes found for this filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
