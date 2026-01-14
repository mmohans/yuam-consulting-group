export const metadata = {
  title: "QA & AI Learning Resources | YUAM Consulting Group",
  description:
    "Practical learning resources covering artificial intelligence basics, QA fundamentals, automation, and quality strategy for startups and growing teams.",
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
          Structured learning content built from real-world QA and product
          experience — designed to help teams make better quality and technology
          decisions.
        </p>
      </section>

      {/* LEARNING TOPICS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-8 md:grid-cols-3">
        {/* NEW: AI BASICS */}
        <LearningBlock
          title={
            <a
              href="/learning/basics-of-artificial-intelligence"
              className="hover:text-orange-500"
            >
              Basics of Artificial Intelligence
            </a>
          }
          
          description="A practical introduction to artificial intelligence concepts relevant to software teams, testers, and decision-makers."
          points={[
            "What AI is (and what it is not)",
            "Machine learning vs rule-based systems",
            "Where AI fits in modern software products",
          ]}
        />

        <LearningBlock
          title="QA Foundations"
          description="Core quality assurance concepts that help teams think clearly about risk, coverage, and user impact."
          points={[
            "Manual testing approaches",
            "Test case design & coverage",
            "Bug reporting and triage",
          ]}
        />

        <LearningBlock
          title="Automation & Modern QA"
          description="Automation strategies that improve release confidence without adding unnecessary complexity."
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
            Learning helps — context makes the difference
          </h2>
          <p className="text-slate-600 mb-8">
            If you’re evaluating AI, automation, or QA strategy for your product,
            we can help you decide what actually makes sense for your stage.
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
