export default function HomePage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl font-bold mb-4">
          YUAM Consulting Group
        </h1>
  
        <p className="text-lg max-w-2xl mb-6">
          QA Consulting • Automation • Fractional QA Leadership • IT Recruitment
        </p>
  
        <div className="flex gap-4">
          <a href="/ai-qa-tools" className="underline">
            AI QA Tools
          </a>
          <a href="/meet" className="underline">
            Book a Meeting
          </a>
          <a href="/blog" className="underline">
            Blog
          </a>
        </div>
      </main>
    );
  }
  