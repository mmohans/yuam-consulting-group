export const metadata = {
  title: "QA Recruitment & Staffing | YUAM Consulting Group",
  description:
    "Hire experienced QA professionals or submit your QA profile. YUAM Consulting Group provides focused QA recruitment and staffing services.",
};

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          QA Recruitment & Staffing
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We help companies hire reliable QA talent and help QA professionals
          find the right opportunities — with a focus on quality, clarity,
          and long-term fit.
        </p>
      </section>

      {/* TWO FLOWS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* COMPANIES */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-3">
              For Companies & Startups
            </h2>

            <p className="text-slate-600 mb-6">
              Looking to hire QA engineers or build a QA team?
              Share your requirement and we’ll respond with
              suitable profiles or a recommended approach.
            </p>

            <ul className="text-slate-600 text-sm mb-6 list-disc list-inside space-y-2">
              <li>Manual & automation QA engineers</li>
              <li>Contract, full-time, or project-based hiring</li>
              <li>Fast turnaround with pre-screened candidates</li>
            </ul>

            <form
              method="POST"
              action="/api/upload-cv"
              encType="multipart/form-data"
              className="space-y-4"
            >
              <input
                type="text"
                name="company"
                placeholder="Company name"
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Contact email"
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <textarea
                name="requirement"
                rows="4"
                placeholder="Brief requirement (skills, experience, location)"
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="file"
                name="jd"
                className="w-full border rounded-md px-3 py-2"
              />

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                Submit Requirement
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4">
              What happens next: We review your requirement and respond
              with suitable profiles or a recommended hiring approach.
            </p>
          </div>

          {/* CANDIDATES */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-3">
              For QA Professionals
            </h2>

            <p className="text-slate-600 mb-6">
              Looking for your next QA role?
              Share your profile and we’ll reach out when
              there’s a suitable opportunity.
            </p>

            <ul className="text-slate-600 text-sm mb-6 list-disc list-inside space-y-2">
              <li>Manual, automation, and senior QA roles</li>
              <li>Startup and product-company opportunities</li>
              <li>Transparent communication</li>
            </ul>

            <form
              method="POST"
              action="/api/upload-cv"
              encType="multipart/form-data"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
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
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                Submit Profile
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4">
              What happens next: If your profile matches a current or
              upcoming requirement, we’ll contact you directly.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Prefer a direct discussion?
        </h2>

        <p className="text-slate-600 mb-8">
          If you’re hiring urgently or exploring options,
          you can also schedule a short discussion.
        </p>

        <a
          href="/meet"
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-700 transition"
        >
          Schedule a QA Discussion
        </a>
      </section>
    </main>
  );
}
