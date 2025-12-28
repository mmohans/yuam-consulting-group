export default function AIQAToolsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          AI-Powered QA Tools
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          We are building intelligent QA accelerators to help teams move faster,
          test smarter, and ship with confidence.
        </p>
      </section>

      {/* TOOLS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "AI Test Case Generator",
              desc: "Generate high-quality test cases directly from requirements and user stories."
            },
            {
              title: "Smart Regression Selection",
              desc: "Run only the tests that matter using change-impact analysis."
            },
            {
              title: "Requirement-to-Test Mapping",
              desc: "Ensure full coverage by automatically mapping requirements to tests."
            },
            {
              title: "Defect Pattern Analysis",
              desc: "Identify recurring defect patterns and risk areas early."
            }
          ].map((tool) => (
            <div
              key={tool.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl mb-2">
                {tool.title}
              </h3>
              <p className="text-slate-600">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want early access?
        </h2>
        <p className="text-slate-600 mb-8">
          Talk to us about how AI-driven QA can help your team.
        </p>

        <a
          href="/meet"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Book a Discussion
        </a>
      </section>
    </main>
  );
}
