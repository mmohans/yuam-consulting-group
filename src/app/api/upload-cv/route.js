import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const data = {};
    for (const [key, value] of formData.entries()) {
      if (value?.name) {
        data[key] = value.name;
      } else {
        data[key] = value;
      }
    }

    console.log("Form submission received:", data);

    // Email wiring will be added here next

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }
}
