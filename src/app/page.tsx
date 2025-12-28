export default function HomePage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO SECTION */}
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
              Book a Free Consultation
            </a>
  
            <a
              href="/ai-qa-tools"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition"
            >
              Explore AI QA Tools
            </a>
          </div>
        </section>
  
        {/* SERVICES SECTION */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">QA Consulting</h3>
              <p className="text-slate-600 text-sm">
                End-to-end quality strategy aligned with business goals.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">Test Automation</h3>
              <p className="text-slate-600 text-sm">
                Scalable automation frameworks for faster releases.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">
                Fractional QA Head
              </h3>
              <p className="text-slate-600 text-sm">
                Senior QA leadership without full-time cost.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">
                IT QA Recruitment
              </h3>
              <p className="text-slate-600 text-sm">
                Hire proven QA talent that fits your team and culture.
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
  