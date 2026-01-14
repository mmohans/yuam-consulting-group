export const metadata = {
    title: "Basics of Artificial Intelligence – Beginner Friendly Guide | YUAM",
    description:
      "A detailed, beginner-friendly introduction to artificial intelligence for IT and non-IT audiences including students, lawyers, doctors, and professionals.",
  };
  
  export default function AIBasicsIndex() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm text-orange-500 font-medium mb-2">
            Learning / Artificial Intelligence
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Basics of Artificial Intelligence
          </h1>
          <p className="text-slate-600 max-w-4xl">
            This is a structured, beginner-friendly learning series designed for
            anyone curious about Artificial Intelligence — regardless of technical
            background. No programming knowledge is required.
          </p>
        </section>
  
        <section className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
          <Module
            title="Module 1: Foundations"
            lessons={[
              ["What is Intelligence?", "what-is-intelligence"],
              ["What is Artificial Intelligence?", "what-is-ai"],
              ["History of Artificial Intelligence", "history-of-ai"],
              ["AI vs Human Intelligence", "ai-vs-human-intelligence"],
              ["AI Myths & Misconceptions", "ai-myths"],
            ]}
          />
  
          <Module
            title="Module 2: How AI Works"
            lessons={[
              ["Data – The Fuel of AI", "data-the-fuel-of-ai"],
              ["Rules vs Learning", "rules-vs-learning"],
              ["Machine Learning Explained Simply", "machine-learning-basics"],
              ["Why AI Makes Mistakes", "why-ai-makes-mistakes"],
            ]}
          />
  
          <Module
            title="Module 3: Types of AI"
            lessons={[
              ["Narrow vs General AI", "narrow-vs-general-ai"],
              ["AI vs ML vs Deep Learning", "ai-vs-ml-vs-dl"],
            ]}
          />
        </section>
      </main>
    );
  }
  
  /* ---------- Components ---------- */
  
  function Module({ title, lessons }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <ul className="space-y-2">
          {lessons.map(([label, slug]) => (
            <li key={slug}>
              <a
                href={`/learning/basics-of-artificial-intelligence/${slug}`}
                className="text-orange-600 hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  