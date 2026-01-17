import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface TrialSignupData {
  email: string;
  useCase: string;
}

export async function POST(req: Request) {
  const data: TrialSignupData = await req.json();

  const { email, useCase } = data;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Build the email body with form data
  const emailBody = `
New Trial Signup

Email: ${email}

Question they want answered:
${useCase}
`.trim();

  try {
    // Send the summary email only to Julien
    await transporter.sendMail({
      from: `"Overbase Trial" <${process.env.SMTP_USER}>`,
      to: "julien@overbase.app",
      subject: `New Trial Signup: ${email}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
