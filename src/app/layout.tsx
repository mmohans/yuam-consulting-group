import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YUAM Consulting Group",
  description: "QA Consulting, Automation, Fractional QA Head & Recruitment"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
