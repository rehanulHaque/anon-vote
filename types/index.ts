export type VoteOption = {
  id: string;
  label: string;
  type?: "text" | "image";
  value?: string; // text OR image URL
  votes: number;
};

export type VoteSession = {
  id: string;
  question: string;
  options: [VoteOption, VoteOption];
  hasVoted: boolean;
};

export type OptionType = "text" | "image";

export type CreateVotePayload = {
  question: string;
  optionA: { type: OptionType; value: string };
  optionB: { type: OptionType; value: string };
};
export type VoteStatus = "running" | "ended";

export type AdminVoteItem = {
  id: string;
  question: string;
  status: VoteStatus;
  totalVotes: number;
  createdAt: string;
  endsAt?: string;
};


export type AdminVote = {
  id: string;
  question: string;
  status: VoteStatus;
  options: [VoteOption, VoteOption];
  totalVotes: number;
  createdAt: string;
  endsAt?: string;
};

export type VoteItem = {
  id: string;
  question: string;
  status: VoteStatus;
  totalVotes: number;
  endsAt?: string;
  createdBy: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedAt: string;
};

export type VoteSummary = {
  id: string;
  question: string;
  totalVotes: number;
  createdAt: string;
};