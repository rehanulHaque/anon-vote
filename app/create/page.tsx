"use client";
import Field from "@/components/Field";
import OptionEditor from "@/components/OptionEditor";
import toast from "@/components/Toast";
import { CreateVotePayload, OptionType } from "@/types";
import delay from "@/utils/delay";
import { useState, useTransition } from "react";

// ---------------- MOCK API ----------------
// Replace with real server action / API route
async function createVote(payload: CreateVotePayload) {
  await delay(600);
  return {
    success: true,
    voteId: "vote_123",
    shareUrl: "/vote/vote_123",
  };
}

export default function CreateVotePage() {
  const [question, setQuestion] = useState("This or That?");
  const [typeA, setTypeA] = useState<OptionType>("text");
  const [typeB, setTypeB] = useState<OptionType>("text");
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState<null | { url: string }>(null);

  const [isPending, startTransition] = useTransition();

  const submit = () => {
    if (!question || !valueA || !valueB) {
      toast("Please fill all fields");
      return;
    }

    startTransition(async () => {
      const res = await createVote({
        question,
        optionA: { type: typeA, value: valueA },
        optionB: { type: typeB, value: valueB },
      });

      if (res.success) {
        setResult({ url: res.shareUrl });
        toast("Vote created successfully 🎉");
      }
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Create a Vote
        </h1>

        {/* Form */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur p-8 space-y-8">
          <Field label="Question">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full rounded-xl bg-slate-800 border border-white/10 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="This or That?"
            />
          </Field>

          <OptionEditor
            title="Option A"
            type={typeA}
            setType={setTypeA}
            value={valueA}
            setValue={setValueA}
          />

          <OptionEditor
            title="Option B"
            type={typeB}
            setType={setTypeB}
            value={valueB}
            setValue={setValueB}
          />

          <button
            disabled={isPending}
            onClick={submit}
            className="w-full rounded-2xl bg-indigo-500 py-4 font-medium hover:bg-indigo-400 transition disabled:opacity-60"
          >
            {isPending ? "Creating…" : "Create Vote"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-center space-y-4">
            <p className="text-slate-300">Share this link</p>
            <div className="flex items-center gap-3 justify-center">
              <code className="rounded-xl bg-slate-800 px-4 py-2 text-sm">
                {result.url}
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result.url);
                  toast("Link copied to clipboard");
                }}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}




