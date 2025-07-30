import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email } = await req.json();

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

  try {
    // Send the email
    await transporter.sendMail({
      from: `"Julien @ hndl" <${process.env.SMTP_USER}>`,
      to: email,
      cc: "julien@hndlai.com",
      subject: "hndl waitlist",
      text: "Thank you for joining the waitlist. I'll be in touch soon.\n\nLet me know if you have questions or want a demo :)\n\n--\n\njulien\n@hndl",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
