export const metadata = {
    title: "Contact | YUAM Consulting Group",
    description:
      "Get in touch with YUAM Consulting Group for QA consulting, automation, leadership, or recruitment inquiries.",
  };
  
  export default function ContactPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact Us
          </h1>
  
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Prefer not to schedule a meeting right now?  
            Share your details and we’ll get back to you.
          </p>
        </section>
  
        {/* FORM */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-xl mx-auto px-6">
            <form
              method="POST"
              action="/api/contact"
              className="bg-white rounded-xl shadow-sm p-8 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border rounded-md px-3 py-2"
              />
  
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full border rounded-md px-3 py-2"
              />
  
              <select
                name="interest"
                required
                className="w-full border rounded-md px-3 py-2"
              >
                <option value="">I am interested in…</option>
                <option value="QA Consulting">QA Consulting</option>
                <option value="Test Automation">Test Automation</option>
                <option value="Fractional QA Leadership">Fractional QA Leadership</option>
                <option value="QA Recruitment">QA Recruitment</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
  
              <textarea
                name="message"
                rows="5"
                placeholder="Briefly describe your requirement"
                required
                className="w-full border rounded-md px-3 py-2"
              />
  
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                Send Message
              </button>
  
              <p className="text-xs text-slate-500 text-center">
                We respect confidentiality. No spam.
              </p>
            </form>
          </div>
        </section>
      </main>
    );
  }
  