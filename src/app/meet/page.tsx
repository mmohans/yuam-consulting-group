export default function MeetPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-6">
          Schedule a Meeting
        </h1>

        <p className="text-slate-600 mb-10 max-w-2xl">
          Book a confidential discussion with YUAM Consulting Group to
          explore QA consulting, automation strategy, or QA staffing needs.
        </p>

        <div className="w-full h-[700px] border rounded-lg overflow-hidden">
          <iframe
            src="https://calendly.com/yuam-consulting/qa-consultation"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with YUAM Consulting Group"
          />
        </div>
      </section>
    </main>
  );
}
