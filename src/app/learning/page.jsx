export const metadata = {
    title: "QA Learning & Resources | YUAM Consulting Group",
    description:
      "Practical QA learning resources covering manual testing, automation, QA strategy, and real-world quality practices for startups and growing teams.",
  };
  
  export default function LearningPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Learning & Resources
          </h1>
          <p className="text-slate-600 max-w-3xl">
            Curated QA knowledge built from real consulting engagements — focused
            on practical decision-making, not textbook theory.
          </p>
        </section>
  
        {/* LEARNING SECTIONS */}
        <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-8 md:grid-cols-3">
          <LearningBlock
            title="QA Foundations"
            description="Strong quality starts with fundamentals. These topics help teams think clearly about testing and risk."
            points={[
              "Manual testing approaches",
              "Test case design & coverage",
              "Bug reporting and triage",
            ]}
          />
  
          <LearningBlock
            title="Automation & Modern QA"
            description="Automation should simplify delivery, not complicate it. Learn where it fits and where it doesn’t."
            points={[
              "Automation strategy",
              "Tooling & CI integration",
              "AI-assisted testing",
            ]}
          />
  
          <LearningBlock
            title="QA for Startups"
            description="Quality practices that scale with your product and team — without heavy process or cost."
            points={[
              "Early-stage QA setup",
              "Scaling with small teams",
              "Fractional QA leadership",
            ]}
          />
        </section>
  
        {/* CTA */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Learning is useful — context makes it valuable
            </h2>
            <p className="text-slate-600 mb-8">
              If you’d like guidance specific to your product, team size, or
              delivery model, we can help you decide the right QA approach.
            </p>
  
            <a
              href="/meet"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Discuss QA Needs
            </a>
          </div>
        </section>
      </main>
    );
  }
  
  /* ---------- Helper Component ---------- */
  
  function LearningBlock({ title, description, points }) {
    return (
      <div className="border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }
  