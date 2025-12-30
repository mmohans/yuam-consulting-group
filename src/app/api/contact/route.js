import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log("Contact form submission:", data);

    // Later:
    // - Send email to brand inbox
    // - Store in CRM / Sheet if needed

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Contact submission failed" },
      { status: 500 }
    );
  }
}
