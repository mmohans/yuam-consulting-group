export default function HomePage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="text-orange-500">YUAM</span> Consulting Group
          </h1>
  
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Helping startups and growing businesses build
            <span className="font-semibold text-slate-900"> world-class QA </span>
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
  
        {/* Services */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
            {[
              "QA Consulting",
              "Test Automation",
              "Fractional QA Head",
              "IT QA Recruitment",
            ].map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-slate-600 text-sm">
                  Practical, scalable solutions tailored to your business stage.
                </p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Footer */}
        <footer className="py-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} YUAM Consulting Group · All rights reserved
        </footer>
      </main>
    );
  }
  