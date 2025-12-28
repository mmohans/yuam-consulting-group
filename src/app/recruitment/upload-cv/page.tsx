export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          QA Recruitment & Staffing
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We connect skilled QA professionals with product companies,
          startups, and engineering teams that care about quality.
        </p>
      </section>

      {/* TWO AUDIENCES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          {/* FOR CANDIDATES */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              For QA Professionals
            </h2>

            <p className="text-slate-600 mb-6">
              Looking for your next opportunity in QA, automation,
              or testing leadership? Share your profile and we’ll
              reach out when there’s a relevant role.
            </p>

            <form
              method="POST"
              action="/api/upload-cv"
              encType="multipart/form-data"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="file"
                name="cv"
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
              >
                Submit Your Profile
              </button>
            </form>
          </div>

          {/* FOR COMPANIES */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              For Companies & Startups
            </h2>

            <p className="text-slate-600 mb-6">
              Need reliable QA resources? We provide vetted QA engineers,
              automation specialists, and QA leads for short-term,
              long-term, and fractional engagements.
            </p>

            <ul className="list-disc list-inside text-slate-600 mb-8 space-y-2">
              <li>Manual & Automation QA Engineers</li>
              <li>Contract & Full-Time Hiring</li>
              <li>Dedicated QA Teams</li>
              <li>Fractional QA Leadership</li>
            </ul>

            <a
              href="/meet"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Discuss Your QA Requirement
            </a>
          </div>

        </div>
      </section>

      {/* TRUST NOTE */}
      <section className="py-12 text-center text-sm text-slate-500">
        We work with integrity. Candidate profiles are shared only
        with relevant clients. Companies get pre-screened QA talent.
      </section>
    </main>
  );
}
