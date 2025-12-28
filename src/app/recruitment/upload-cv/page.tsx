export default function UploadCVPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-4">
          QA & Testing Careers
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          We work with product companies and startups looking for
          skilled QA professionals. Share your profile and we’ll
          reach out when there’s a relevant opportunity.
        </p>
      </section>

      {/* FORM */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-xl mx-auto px-6 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">
            Upload Your CV
          </h2>

          <form
            method="POST"
            action="/api/upload-cv"
            encType="multipart/form-data"
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload CV (PDF/DOC)
              </label>
              <input
                type="file"
                name="cv"
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Submit Profile
            </button>
          </form>
        </div>
      </section>

      {/* TRUST NOTE */}
      <section className="py-12 text-center text-sm text-slate-500">
        We respect your privacy. Your profile is shared only with
        relevant hiring partners.
      </section>
    </main>
  );
}
