import Link from "next/link";

export const metadata = {
  title: "How We Work | YUAM Consulting Group",
  description:
    "Learn how YUAM Consulting Group partners with startups and businesses for QA consulting, automation, fractional QA leadership, and recruitment support.",
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          How We Work
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          A clear, flexible engagement model designed for startups and growing
          teams — focused on quality, speed, and long-term sustainability.
        </p>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <ProcessStep
            step="01"
            title="Discovery & Context"
            description="We begin with a confidential discussion to understand your product,
            team structure, QA maturity, and immediate challenges."
          />

          <ProcessStep
            step="02"
            title="Recommendations"
            description="Based on your needs, we recommend the most effective engagement
            model — consulting, automation, leadership, or hiring support."
          />

          <ProcessStep
            step="03"
            title="Execution"
            description="We work hands-on with your team using proven QA practices,
            modern tools, and pragmatic delivery aligned to your timelines."
          />

          <ProcessStep
            step="04"
            title="Scale or Transition"
            description="As your needs evolve, we help scale QA processes, transition
            ownership, or support long-term hiring and enablement."
          />
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Engagement Models
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <EngagementCard
              title="QA Consulting"
              description="Short-term audits, strategy, and improvement plans to strengthen
              your quality foundation."
            />

            <EngagementCard
              title="Automation Setup"
              description="Test automation frameworks, CI integration, and best-practice
              enablement for long-term efficiency."
            />

            <EngagementCard
              title="Fractional QA Leadership"
              description="Senior QA leadership and guidance without full-time overhead."
            />

            <EngagementCard
              title="Recruitment Support"
              description="Targeted hiring support for QA engineers and automation specialists."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Discuss Your QA Needs
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Whether you’re exploring QA consulting, automation, leadership, or
          hiring — we’ll help you choose the right path.
        </p>

        <Link
          href="/meet"
          className="inline-block rounded-lg bg-orange-600 px-8 py-4 text-white font-semibold hover:bg-orange-700 transition"
        >
          Discuss QA Needs
        </Link>
      </section>
    </main>
  );
}

/* ---------- Helper Components ---------- */

function ProcessStep({ step, title, description }) {
  return (
    <div className="border rounded-xl p-6 bg-white">
      <div className="text-orange-600 font-bold text-sm mb-2">
        STEP {step}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

function EngagementCard({ title, description }) {
  return (
    <div className="rounded-xl border p-6 bg-white text-center">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}
