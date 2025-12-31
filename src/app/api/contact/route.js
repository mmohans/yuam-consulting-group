import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot (spam protection)
    if (body._honeypot) {
      return NextResponse.json({ success: true });
    }

    const { name, email, company, qaNeeds, message } = body;

    /* ---------- EMAIL VIA RESEND ---------- */
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ⚠️ MUST be a verified domain in Resend
        from: "YUAM Consulting <contact@yuamconsultinggroup.in>",
        to: ["contact@yuamconsultinggroup.in"],
        reply_to: email,
        subject: `New QA Inquiry – ${qaNeeds || "General"}`,
        html: `
          <h3>New Contact Request</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Company:</b> ${company || "-"}</p>
          <p><b>QA Need:</b> ${qaNeeds || "-"}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error("❌ Resend error:", errorText);

      return NextResponse.json(
        { success: false, error: "Email delivery failed" },
        { status: 500 }
      );
    }

    /* ---------- SLACK ALERT (OPTIONAL) ---------- */
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `📩 *New YUAM Lead*\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company || "-"}\n*Need:* ${qaNeeds || "-"}\n*Message:* ${message}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Contact API crash:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
