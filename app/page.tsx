export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Health Tracking for Professionals & Athletes
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Know Your Sleep Debt.<br />Reclaim Your Performance.
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track daily sleep against your personal target, calculate cumulative sleep debt, and see exactly how it impacts your health and productivity — with visual charts.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start Tracking — $7/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📊", title: "Cumulative Debt", desc: "See your total sleep deficit build up day by day with clear charts." },
          { icon: "⚡", title: "Impact Metrics", desc: "Understand how your debt affects reaction time, mood, and focus." },
          { icon: "🎯", title: "Personal Targets", desc: "Set your ideal sleep goal and track progress toward full recovery." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Daily sleep logging",
              "Cumulative debt chart",
              "Health & productivity impact scores",
              "Personal sleep target",
              "Local storage + optional cloud sync",
              "Export your data anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How is sleep debt calculated?",
              a: "We subtract your actual sleep hours from your personal target each night and accumulate the deficit over time, giving you a running total of hours owed to your body."
            },
            {
              q: "Is my data private?",
              a: "Your sleep logs are stored locally in your browser by default. Cloud sync is optional and your data is never sold or shared."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your account dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Sleep Debt Tracker. Built for health-conscious professionals.
      </footer>
    </main>
  );
}
