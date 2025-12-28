
export default function Meet() {
  return (
    <section className="p-10 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary">Schedule a Meeting</h1>
      <iframe
        src="https://calendly.com/your-calendly-link"
        className="w-full h-[700px] mt-6 border"
      ></iframe>
    </section>
  );
}
