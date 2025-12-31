"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    qaNeeds: "",
    message: "",
    _honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Contact form error", err);
    }

    setLoading(false);
  };

  /* ---------------- THANK YOU STATE ---------------- */
  if (submitted) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Thank you for reaching out
          </h1>
          <p className="text-slate-600 mb-6">
            Your message has been received by YUAM Consulting Group.
            <br />
            We’ll respond confidentially within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/meet"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Schedule a Meeting
            </a>
            <a
              href="/"
              className="border border-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------- FORM ---------------- */
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold mb-4">
        Discuss Your QA Needs
      </h1>

      <p className="text-slate-600 mb-10">
        Share your requirements for QA consulting, automation, or recruitment.
        All conversations are confidential and handled by YUAM Consulting Group.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot – invisible to users */}
        <input
          type="text"
          name="_honeypot"
          value={formData._honeypot}
          onChange={handleChange}
          className="hidden"
        />

        <div>
          <label className="block font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Company / Organization (optional)
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Startup / Enterprise / Agency"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            What best describes your QA need?
          </label>
          <select
            name="qaNeeds"
            value={formData.qaNeeds}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select one</option>
            <option value="QA Consulting">
              QA Consulting / Strategy
            </option>
            <option value="Automation">
              Test Automation
            </option>
            <option value="Fractional QA Leadership">
              Fractional QA Leadership
            </option>
            <option value="Recruitment">
              QA Hiring / Recruitment
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            Message / Details
          </label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Briefly describe your current QA challenges or goals"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </main>
  );
}
