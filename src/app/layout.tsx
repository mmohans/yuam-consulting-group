import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "QA Consulting & Automation Services | YUAM Consulting Group",
  description:
    "YUAM Consulting Group provides QA consulting, test automation, fractional QA leadership, and QA recruitment services for startups and growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-slate-900">
        <Header />
        {children}
        <footer className="py-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} YUAM Consulting Group · All rights reserved
        </footer>
      </body>
    </html>
  );
}
