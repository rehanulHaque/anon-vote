"use client";
import DashboardSkeleton from "@/app/profile/_components/Skeleton";
import VoteCard from "@/app/profile/_components/VoterCard";
import { getUserProfileData } from "@/services/profile";
import { UserProfile, VoteSummary } from "@/types";
import { useEffect, useState } from "react";

export default function ProfileDashboard() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [votes, setVotes] = useState<VoteSummary[]>([]);

  useEffect(() => {
    getUserProfileData().then(({userCreatedVotes, profileData}) => {
      setProfile(profileData)
      setVotes(userCreatedVotes)
    })
  }, []);

  if (!profile) return <DashboardSkeleton />;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl font-semibold">Profile Dashboard</h1>

        {/* Profile Card */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 rounded-full border border-white/10"
          />

          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-medium">{profile.name}</h2>
            <p className="text-slate-400 text-sm">{profile.email}</p>
            <p className="text-slate-500 text-xs">
              Joined on {new Date(profile.joinedAt).toLocaleDateString()}
            </p>

            <div className="flex gap-3 pt-4 justify-center md:justify-start">
              <button className="rounded-xl bg-indigo-500 px-4 py-2 text-sm hover:bg-indigo-400 transition">
                Edit Profile
              </button>
              <button className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Created Votes */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Your Votes</h2>

          {votes.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center text-slate-400">
              You haven’t created any votes yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {votes.map((vote) => (
                <VoteCard key={vote.id} vote={vote} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}