"use client";
import toast from "@/components/Toast";
import VoteCard from "@/components/VoteCard";
import Skeleton from "@/components/VoteCardSkeleton";
import { VoteOption, VoteSession } from "@/types";
import delay from "@/utils/delay";
import { useEffect, useState, useTransition } from "react";

// ---------------- MOCK API ----------------

async function fetchVoteSession(): Promise<VoteSession> {
  await delay(500);
  return {
    id: "vote_123",
    question: "This or That?",
    hasVoted: false,
    options: [
      {
        id: "A",
        label: "Option A",
        type: "text",
        value: "Cats 🐱",
        votes: 1398,
      },
      {
        id: "B",
        label: "Option B",
        type: "text",
        value: "Dogs 🐶",
        votes: 500,
      },
    ],
  };
}

async function submitVote(optionId: string) {
  await delay(400);
  return { success: true, optionId };
}

export default function VotePage() {
  const [data, setData] = useState<VoteSession | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetchVoteSession().then(setData);
  }, []);

  if (!data) return <Skeleton />;

  const totalVotes =
    data.options[0].votes + data.options[1].votes || 1;

  const vote = (id: string) => {
    if (data.hasVoted) return;

    startTransition(async () => {
      const res = await submitVote(id);
      if (!res.success) return;

      setData((prev) =>
        prev
          ? {
              ...prev,
              hasVoted: true,
              options: prev.options.map((o) =>
                o.id === id ? { ...o, votes: o.votes + 1 } : o
              ) as [VoteOption, VoteOption],
            }
          : prev
      );

      toast("Vote submitted successfully 🎉");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 px-4">
      <div className="w-full max-w-4xl space-y-10">
        <h1 className="text-center text-3xl md:text-4xl font-semibold">
          {data.question}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {data.options.map((option) => {
            const percent = (option.votes / totalVotes) * 100;

            return (
              <VoteCard
                key={option.id}
                option={option}
                percentage={percent}
                disabled={data.hasVoted || isPending}
                selected={data.hasVoted}
                onVote={() => vote(option.id)}
              />
            );
          })}
        </div>

        {data.hasVoted && (
          <p className="text-center text-sm text-slate-400">
            Thanks for voting anonymously. Results update in real time.
          </p>
        )}
      </div>
    </div>
  );
}
