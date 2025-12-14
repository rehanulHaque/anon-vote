"use client";
import { useEffect, useState } from "react";
import { VoteItem, VoteStatus } from "@/types";
import VoteCard from "@/app/home/_components/VoteCard";
import FilterButton from "@/components/FilterButton";
import { getHomeData } from "@/services/home";

export default function HomeFeedPage() {
  const [votes, setVotes] = useState<VoteItem[]>([]);
  const [filter, setFilter] = useState<"all" | VoteStatus>("all");

  useEffect(() => {
    getHomeData().then(({ data }) => setVotes(data));
  }, []);

  const filteredVotes = votes.filter((v) =>
    filter === "all" ? true : v.status === filter
  );
const currentUserId = "user_1";
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-3xl font-semibold">Explore Votes</h1>

          <div className="flex gap-3">
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </FilterButton>
            <FilterButton active={filter === "running"} onClick={() => setFilter("running")}>
              Running
            </FilterButton>
            <FilterButton active={filter === "ended"} onClick={() => setFilter("ended")}>
              Ended
            </FilterButton>
          </div>
        </header>

        {/* Vote List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVotes.map((vote) => (
            <VoteCard key={vote.id} vote={vote} currentUserId={currentUserId}/>
          ))}
        </div>

        {filteredVotes.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-10 text-center text-slate-400">
            No votes found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}