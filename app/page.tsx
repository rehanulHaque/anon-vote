import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      {/* Navbar */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href={"/home"}>
          <h1 className="text-xl font-semibold tracking-tight">VoteAnon</h1></Link>
        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <Link href="/home" className="hover:text-white transition">Home</Link>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#security" className="hover:text-white transition">Security</a>
        </nav>
        <Link href={"/admin"} className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition">
          Create Vote
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Anonymous voting.
            <span className="block text-slate-300">Fair, private, and simple.</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Create voting sessions instantly. Let anyone vote without accounts,
            while ensuring every participant can only vote once.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={"/admin"}>
              <button className="rounded-2xl bg-indigo-500 px-6 py-3 font-medium hover:bg-indigo-400 transition">
                Start a Vote
              </button>

            </Link>
            <Link href={"/home"}>
              <button className="rounded-2xl border border-white/20 px-6 py-3 text-slate-200 hover:bg-white/10 transition">
                View Demo
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-3xl" />
          <div className="relative rounded-3xl bg-slate-900/80 backdrop-blur border border-white/10 p-8 shadow-2xl">
            <h3 className="text-lg font-medium mb-4">Live Voting Session</h3>
            <div className="space-y-3">
              {[
                { label: "Option A", value: "45%" },
                { label: "Option B", value: "32%" },
                { label: "Option C", value: "23%" },
              ].map((o) => (
                <div key={o.label} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{o.label}</span>
                    <span className="text-slate-400">{o.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-indigo-400 rounded-full"
                      style={{ width: o.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-semibold mb-16 text-center">Why VoteAnon?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            title="100% Anonymous"
            desc="No sign-ups, no tracking. Voters stay completely anonymous."
          />
          <Feature
            title="One Vote Only"
            desc="Smart protections ensure one vote per user per session."
          />
          <Feature
            title="Instant Results"
            desc="See live results update in real time as votes come in."
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h3 className="text-3xl font-semibold mb-16 text-center">How it works</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <Step number="01" title="Create" desc="Create a voting session in seconds." />
            <Step number="02" title="Share" desc="Share the unique voting link." />
            <Step number="03" title="Vote" desc="Participants vote anonymously." />
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">Privacy-first by design</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We use session-based identifiers, rate limiting, and cryptographic
            techniques to prevent duplicate votes without ever knowing who you are.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} VoteAnon. Anonymous voting made simple.
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 hover:bg-slate-900/80 transition">
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

function Step({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center space-y-3">
      <div className="text-indigo-400 font-semibold">{number}</div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}
