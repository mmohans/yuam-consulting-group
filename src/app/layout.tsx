import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold">
              <span className="text-orange-500">YUAM</span> Consulting
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
              <a href="/ai-qa-tools" className="hover:text-orange-500">AI QA Tools</a>
              <a href="/qa-checklist" className="hover:text-orange-500">QA Checklist</a>
              <a href="/recruitment/upload-cv" className="hover:text-orange-500">Recruitment</a>
              <a
                href="/meet"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Discuss QA Needs
              </a>
            </nav>

            {/* Mobile CTA */}
            <a
              href="/meet"
              className="md:hidden bg-orange-500 text-white px-3 py-2 rounded-md text-sm"
            >
              Talk
            </a>
          </div>
        </header>


        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
