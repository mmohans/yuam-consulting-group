export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="text-orange-500">YUAM</span> Consulting Group
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
          Helping startups and growing businesses build{" "}
          <span className="font-semibold text-slate-900">
            world-class QA
          </span>{" "}
          through consulting, automation, and fractional QA leadership.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/meet"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Discuss QA Needs
          </a>

          <a
            href="/ai-qa-tools"
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition"
          >
            Explore AI QA Tools
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            "QA Consulting",
            "Test Automation",
            "Fractional QA Head",
            "QA Recruitment",
          ].map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-slate-600 text-sm">
                Practical, scalable QA solutions aligned to business needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QA CHECKLIST LEAD MAGNET */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free QA Readiness Checklist
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            A practical checklist used by QA leaders to quickly assess
            test coverage, automation maturity, and release readiness
            for startups and growing product teams.
          </p>

          <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your work email"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <a
                href="/qa-checklist"
                className="block w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition text-center"
              >
                Get the Free QA Checklist
              </a>
            </form>

            <p className="text-xs text-slate-500 mt-3">
              Brand-safe. No spam. Useful QA insights only.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} YUAM Consulting Group · All rights reserved
      </footer>
    </main>
  );
}
