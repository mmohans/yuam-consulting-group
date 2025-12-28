export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          QA Recruitment & Staffing
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We help companies hire reliable QA talent and help QA professionals
          find the right opportunities — with transparency and quality focus.
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
              Looking for roles in manual testing, automation, or QA leadership?
              Share your profile and we’ll reach out when there’s a suitable match.
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
                type="fi
