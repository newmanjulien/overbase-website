import { NextResponse } from "next/server";
import { sendWaitlistEmail } from "@/lib/waitlist-email";

type WaitlistRequestBody = {
  email?: string;
};

function getEmail(body: WaitlistRequestBody): string | null {
  const normalizedEmail = body.email?.trim();
  return normalizedEmail ? normalizedEmail : null;
}

export async function POST(req: Request) {
  const body = (await req.json()) as WaitlistRequestBody;
  const email = getEmail(body);

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await sendWaitlistEmail(email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
