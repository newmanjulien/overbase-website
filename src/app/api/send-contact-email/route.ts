import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact-email";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

function getRequiredField(value?: string): string | null {
  const normalizedValue = value?.trim();
  return normalizedValue ? normalizedValue : null;
}

export async function POST(req: Request) {
  let body: ContactRequestBody;

  try {
    body = (await req.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = getRequiredField(body.name);
  const email = getRequiredField(body.email);
  const message = getRequiredField(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
