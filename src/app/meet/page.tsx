export const metadata = {
  title: "Schedule a QA Discussion | YUAM Consulting Group",
  robots: {
    index: false,
    follow: false,
  },
};

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
            src="https://calendly.com/contact-yuamconsultinggroup/"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with YUAM Consulting Group"
          />
        </div>

        <p className="text-sm text-slate-500 mt-6 text-center">
          Having trouble booking?{" "}
          <a href="/contact" className="text-orange-600 underline">
            Use our contact form instead
          </a>
        </p>

      </section>
    </main>
  );
}
