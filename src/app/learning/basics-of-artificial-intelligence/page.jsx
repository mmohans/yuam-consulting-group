export const metadata = {
    title: "Basics of Artificial Intelligence | YUAM Consulting Group",
    description:
      "A practical introduction to artificial intelligence concepts for software teams, QA professionals, and decision-makers.",
  };
  
  export default function AIBasicsPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm text-orange-500 font-medium mb-2">
            Learning / Artificial Intelligence
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Basics of Artificial Intelligence
          </h1>
          <p className="text-slate-600 max-w-3xl">
            Artificial Intelligence (AI) is increasingly embedded in modern
            software products. This page explains the core ideas in simple,
            practical terms — especially for QA, product, and engineering teams.
          </p>
        </section>
  
        {/* CONTENT */}
        <section className="max-w-3xl mx-auto px-6 pb-20 space-y-10">
          <ContentBlock
            title="What Artificial Intelligence Is"
            text="Artificial Intelligence refers to systems designed to perform tasks that normally require human intelligence, such as pattern recognition, decision-making, and learning from data."
          />
  
          <ContentBlock
            title="What AI Is Not"
            text="AI is not magic, consciousness, or human-like thinking. Most AI systems today are statistical models trained to recognize patterns — not reasoning beings."
          />
  
          <ContentBlock
            title="Machine Learning vs Rule-Based Systems"
            text="Rule-based systems follow predefined logic written by humans. Machine learning systems learn behavior from data and improve over time without explicit rules."
          />
  
          <ContentBlock
            title="Where AI Fits in Modern Software"
            text="AI is commonly used in recommendations, search, fraud detection, image and text processing, and increasingly in software testing and quality assurance."
          />
  
          <ContentBlock
            title="Why AI Matters for QA Teams"
            text="QA teams need to understand AI because AI-driven systems behave probabilistically. Testing focuses more on data quality, bias, edge cases, and outcome validation rather than deterministic outputs."
          />
        </section>
  
        {/* CTA */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Applying AI responsibly requires the right QA approach
            </h2>
            <p className="text-slate-600 mb-8">
              If your product uses AI or machine learning, quality assurance
              requires different thinking, tools, and validation strategies.
            </p>
  
            <a
              href="/ai-qa-tools"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Explore AI QA Tools
            </a>
          </div>
        </section>
      </main>
    );
  }
  
  /* ---------- Helper ---------- */
  
  function ContentBlock({ title, text }) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </div>
    );
  }
  