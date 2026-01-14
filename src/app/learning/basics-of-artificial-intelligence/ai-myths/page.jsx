export const metadata = {
    title: "AI Myths & Misconceptions | AI Basics",
  };
  
  export default function AIMyths() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          AI Myths & Misconceptions
        </h1>
  
        <Section
          title="AI Will Replace All Jobs"
          text="AI changes jobs, but it does not replace human judgment, ethics, and responsibility."
        />
  
        <Section
          title="AI Is Always Accurate"
          text="AI systems can fail due to biased data, wrong assumptions, or unexpected scenarios."
        />
  
        <Section
          title="AI Understands Like Humans"
          text="AI processes patterns, not meaning or intent."
        />
  
        <nav className="mt-12 flex justify-between text-sm">
          <a href="/learning/basics-of-artificial-intelligence/ai-vs-human-intelligence" className="text-slate-500">
            ← Previous
          </a>
          <a href="/learning/basics-of-artificial-intelligence/data-the-fuel-of-ai" className="text-orange-600">
            Next →
          </a>
        </nav>
      </main>
    );
  }
  