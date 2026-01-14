export const metadata = {
    title: "History of Artificial Intelligence | AI Basics",
  };
  
  export default function HistoryOfAI() {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          History of Artificial Intelligence
        </h1>
  
        <Section
          title="Early Ideas"
          text="The idea of intelligent machines dates back to the 1950s when scientists wondered if machines could simulate human reasoning."
        />
  
        <Section
          title="AI Winters"
          text="AI progress slowed several times due to lack of data, computing power, and realistic expectations. These periods are known as AI winters."
        />
  
        <Section
          title="Modern AI Boom"
          text="Recent advances in data availability, cloud computing, and algorithms revived AI, leading to today's widespread adoption."
        />
  
        <nav className="mt-12 flex justify-between text-sm">
          <a href="/learning/basics-of-artificial-intelligence/what-is-ai" className="text-slate-500">
            ← Previous
          </a>
          <a href="/learning/basics-of-artificial-intelligence/ai-vs-human-intelligence" className="text-orange-600">
            Next →
          </a>
        </nav>
      </main>
    );
  }
  function Section({ title, text }) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {text}
        </p>
      </div>
    );
  }