export default function QAChecklistPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Free QA Readiness Checklist
          </h1>
  
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A practical, no-nonsense QA checklist used by experienced QA leaders
            to evaluate test coverage, automation maturity, and release readiness.
          </p>
        </section>
  
        {/* CONTENT */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
  
            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                What’s inside the checklist?
              </h2>
  
              <ul className="list-disc list-inside text-slate-600 space-y-3">
                <li>QA strategy & test coverage essentials</li>
                <li>Manual vs automation readiness indicators</li>
                <li>Regression & release validation checklist</li>
                <li>Common QA gaps in startups</li>
                <li>Leadership-level QA review points</li>
              </ul>
  
              <p className="text-slate-600 mt-6">
                Ideal for startups, growing product teams, and engineering leaders
                who want confidence before release.
              </p>
            </div>
  
            {/* RIGHT / DOWNLOAD */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Download the free PDF
              </h3>
  
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your work email"
                  required
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
  
                <a
                  href="/YUAM_QA_Checklist.pdf"
                  target="_blank"
                  className="block w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition text-center"
                >
                  Download QA Checklist (PDF)
                </a>
              </form>
  
              <p className="text-xs text-slate-500 mt-3">
                No spam. We respect your inbox.
              </p>
            </div>
  
          </div>
        </section>
  
        {/* CTA */}
        <section className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Want help applying this checklist?
          </h2>
  
          <p className="text-slate-600 mb-8">
            We help teams turn QA gaps into scalable quality systems.
          </p>
  
          <a
            href="/meet"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Book a Free QA Consultation
          </a>
        </section>
      </main>
    );
  }
  