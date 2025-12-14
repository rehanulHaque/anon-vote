export const voteData = [
    {
        id: "vote_1",
        question: "Cats vs Dogs?",
        status: "running",
        totalVotes: 124,
        endsAt: "2025-01-20",
        createdBy: "user_1",
        createdAt: "2025-01-02",
    },
    {
        id: "vote_2",
        question: "Dark Mode or Light Mode?",
        status: "running",
        totalVotes: 89,
        endsAt: "2025-01-18",
        createdBy: "user_2",
        createdAt: "2025-01-02",
    },
    {
        id: "vote_3",
        question: "Tabs or Spaces?",
        status: "ended",
        totalVotes: 342,
        createdBy: "user_1",
        createdAt: "2025-01-02",
        endsAt: "2025-01-20",
    },
]

export const adminVote = {
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
}

export const userProfile = {
    id: "user_1",
    name: "Alex Johnson",
    email: "alex@example.com",
    joinedAt: "2024-02-12",
    avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=voteanon",
};

export const publicVote = {
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