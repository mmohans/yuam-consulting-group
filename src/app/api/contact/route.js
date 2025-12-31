import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot check (spam protection)
    if (body._honeypot) {
      return NextResponse.json({ success: true });
    }

    const {
      name,
      email,
      company,
      qaNeeds,
      message,
    } = body;

    /* ---------- SEND EMAIL VIA RESEND HTTP API ---------- */
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "YUAM Consulting <no-reply@yuamconsultinggroup.in>",
        to: ["contact@yuamconsultinggroup.in"],
        reply_to: email,
        subject: `New QA Inquiry – ${qaNeeds || "General"}`,
        html: `
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>QA Need:</strong> ${qaNeeds || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", await res.text());
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
