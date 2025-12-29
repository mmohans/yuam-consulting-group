export default function HowWeWorkPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            How We Work
          </h1>
  
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            YUAM Consulting Group partners with startups and product companies
            through flexible engagement models designed to scale quality
            without unnecessary overhead.
          </p>
        </section>
  
        {/* ENGAGEMENT MODELS */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
  
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                QA Consulting
              </h3>
              <p className="text-slate-600 mb-4">
                Short-term or ongoing consulting to define QA strategy,
                improve processes, and guide automation decisions.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>QA audits & assessments</li>
                <li>Automation strategy</li>
                <li>Process improvement</li>
                <li>Tooling recommendations</li>
              </ul>
            </div>
  
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Fractional QA Leadership
              </h3>
              <p className="text-slate-600 mb-4">
                Senior QA leadership without the cost of a full-time hire.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>QA ownership & roadmap</li>
                <li>Team mentoring</li>
                <li>Release readiness</li>
                <li>Stakeholder collaboration</li>
              </ul>
            </div>
  
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                QA Staffing & Recruitment
              </h3>
              <p className="text-slate-600 mb-4">
                Flexible hiring support for QA engineers and QA teams.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Contract & full-time hiring</li>
                <li>Dedicated QA teams</li>
                <li>Pre-screened candidates</li>
                <li>Fast turnaround</li>
              </ul>
            </div>
  
          </div>
        </section>
  
        {/* PROCESS */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Engagement Process
            </h2>
  
            <ol className="list-decimal list-inside text-slate-600 space-y-4 max-w-3xl mx-auto">
              <li>Understand goals and constraints</li>
              <li>Assess current QA or hiring needs</li>
              <li>Recommend engagement model</li>
              <li>Execute with regular checkpoints</li>
              <li>Continuously improve quality outcomes</li>
            </ol>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-orange-50 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Let’s discuss how we can help
          </h2>
  
          <p className="text-slate-600 mb-8">
            We’ll recommend the most effective engagement model for your needs.
          </p>
  
          <a
            href="/meet"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Start a Discussion
          </a>
        </section>
      </main>
    );
  }
  