export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Track Time.<br />
          <span className="text-[#58a6ff]">Get Paid Faster.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Log hours, auto-generate professional invoices, collect client approvals, and send payment reminders — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $9/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⏱", title: "One-Click Time Tracking", desc: "Start and stop timers per project. Every second is captured and billed." },
            { icon: "📄", title: "Auto Invoice Generation", desc: "Turn tracked hours into polished invoices with your branding instantly." },
            { icon: "🔔", title: "Payment Reminders", desc: "Automated email nudges so you never have to chase a client again." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pro Plan</span>
          <div className="text-6xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited time tracking",
              "Automated invoice generation",
              "Client approval workflows",
              "Payment reminder emails",
              "Multiple clients & projects",
              "CSV & PDF export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">No credit card required for trial</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does automatic invoice generation work?",
              a: "Once you stop a timer, the hours are logged against your project. With one click, we compile all unbilled hours into a professional invoice PDF ready to send to your client."
            },
            {
              q: "Can clients approve invoices online?",
              a: "Yes. Clients receive a secure link to review and approve their invoice. You get notified instantly when they approve or request changes."
            },
            {
              q: "What happens if I need to cancel?",
              a: "Cancel anytime from your account settings. You keep access until the end of your billing period and can export all your data before leaving."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} TimeInvoice. Built for freelancers who value their time.
      </footer>
    </main>
  )
}
