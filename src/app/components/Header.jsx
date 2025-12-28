"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">
          <span className="text-orange-500">YUAM</span> Consulting
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <a href="/ai-qa-tools" className="hover:text-orange-500">
            AI QA Tools
          </a>
          <a href="/qa-checklist" className="hover:text-orange-500">
            QA Checklist
          </a>
          <a href="/how-we-work" className="hover:text-orange-500">
            How We Work
          </a>
          <a href="/recruitment/upload-cv" className="hover:text-orange-500">
            Recruitment
          </a>
          <a
            href="/meet"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Discuss QA Needs
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
            <a href="/ai-qa-tools" onClick={() => setMenuOpen(false)}>
              AI QA Tools
            </a>
            <a href="/qa-checklist" onClick={() => setMenuOpen(false)}>
              QA Checklist
            </a>
            <a href="/how-we-work" onClick={() => setMenuOpen(false)}>
              How We Work
            </a>
            <a
              href="/recruitment/upload-cv"
              onClick={() => setMenuOpen(false)}
            >
              Recruitment
            </a>
            <a
              href="/meet"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 text-white text-center py-2 rounded-md"
            >
              Discuss QA Needs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
