export const metadata = {
    title: "AI vs Human Intelligence | AI Basics",
  };
  
  export default function AIvsHuman() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          AI vs Human Intelligence
        </h1>
  
        <Section
          title="Humans Learn Broadly"
          text="Humans can learn across domains, adapt emotionally, and reason abstractly."
        />
  
        <Section
          title="AI Learns Narrowly"
          text="AI systems are trained for specific tasks and fail outside those boundaries."
        />
  
        <Section
          title="Why This Difference Matters"
          text="Understanding these limitations prevents unrealistic expectations and misuse of AI."
        />
  
        <nav className="mt-12 flex justify-between text-sm">
          <a href="/learning/basics-of-artificial-intelligence/history-of-ai" className="text-slate-500">
            ← Previous
          </a>
          <a href="/learning/basics-of-artificial-intelligence/ai-myths" className="text-orange-600">
            Next →
          </a>
        </nav>
      </main>
    );
  }
  