
export default function UploadCV() {
  return (
    <section className="p-10 max-w-xl">
      <h1 className="text-4xl font-bold text-primary">Upload Your CV</h1>
      <form method="POST" action="/api/upload-cv" encType="multipart/form-data" className="mt-6 space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full border p-3" required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-3" required />
        <input type="file" name="cv" className="w-full border p-3" required />
        <button className="bg-accent text-white px-6 py-3 rounded-lg">Submit</button>
      </form>
    </section>
  );
}
