"use client";
import { useEffect, useState } from "react";
import { VoteItem, VoteStatus } from "@/types";
import VoteCard from "@/app/home/_components/VoteCard";
import delay from "@/utils/delay";
import FilterButton from "@/components/FilterButton";

// ---------------- MOCK API ----------------
async function fetchVotes(): Promise<VoteItem[]> {
  await delay(500);
  return [
    {
      id: "vote_1",
      question: "Cats vs Dogs?",
      status: "running",
      totalVotes: 124,
      endsAt: "2025-01-20",
      createdBy: "user_1",
    },
    {
      id: "vote_2",
      question: "Dark Mode or Light Mode?",
      status: "running",
      totalVotes: 89,
      endsAt: "2025-01-18",
      createdBy: "user_2",
    },
    {
      id: "vote_3",
      question: "Tabs or Spaces?",
      status: "ended",
      totalVotes: 342,
      createdBy: "user_1",
    },
  ];
}

// ---------------- PAGE ----------------
export default function HomeFeedPage() {
  const [votes, setVotes] = useState<VoteItem[]>([]);
  const [filter, setFilter] = useState<"all" | VoteStatus>("all");

  useEffect(() => {
    fetchVotes().then(setVotes);
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