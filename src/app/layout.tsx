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
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold">
              <span className="text-orange-500">YUAM</span> Consulting
            </a>

            <nav className="flex gap-6 text-sm font-medium">
              <a href="/ai-qa-tools" className="hover:text-orange-500">
                AI QA Tools
              </a>
              <a href="/blog" className="hover:text-orange-500">
                Blog
              </a>
              <a href="/recruitment/upload-cv" className="hover:text-orange-500">
                Recruitment
              </a>
              <a
                href="/meet"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Book a Meeting
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
