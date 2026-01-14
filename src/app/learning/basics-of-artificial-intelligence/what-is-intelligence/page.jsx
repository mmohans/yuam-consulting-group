export const metadata = {
    title: "What is Intelligence? | AI Basics",
  };
  
  export default function WhatIsIntelligence() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20 text-slate-900">
        <h1 className="text-4xl font-bold mb-6">What is Intelligence?</h1>
  
        <p className="text-slate-600 mb-6">
          Before understanding Artificial Intelligence, we must first understand
          what <strong>intelligence</strong> itself means.
        </p>
  
        <Section
          title="Intelligence in Humans"
          text="Human intelligence includes the ability to learn, reason, adapt to new situations, understand complex ideas, and solve problems. Doctors diagnose illnesses, lawyers analyze cases, students learn subjects — all of this requires intelligence."
        />
  
        <Section
          title="Is Intelligence Just Knowledge?"
          text="No. Memorizing facts alone is not intelligence. Intelligence involves understanding, applying knowledge, learning from mistakes, and improving over time."
        />
  
        <Section
          title="Can Intelligence Exist Without Consciousness?"
          text="Yes. A calculator is not conscious, yet it performs intelligent tasks like complex calculations. Intelligence does not require emotions or awareness."
        />
  
        <Section
          title="Why This Matters for AI"
          text="When we say 'Artificial Intelligence', we mean artificial systems that perform tasks requiring intelligence — not systems that think or feel like humans."
        />
  
        <nav className="mt-12 flex justify-between">
          <a href="/learning/basics-of-artificial-intelligence" className="text-sm text-slate-500">
            ← Back to Overview
          </a>
          <a
            href="/learning/basics-of-artificial-intelligence/what-is-ai"
            className="text-orange-600 font-medium"
          >
            Next: What is Artificial Intelligence →
          </a>
        </nav>
      </main>
    );
  }
  
  function Section({ title, text }) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </div>
    );
  }
  