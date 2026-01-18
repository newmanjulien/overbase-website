import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface TestSignupData {
  email: string;
  useCase: string;
  datasource1?: string;
  datasource2?: string;
  datasource3?: string;
}

export async function POST(req: Request) {
  const data: TestSignupData = await req.json();

  const { email, useCase, datasource1, datasource2, datasource3 } = data;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Dev mode: skip sending email, just log
  if (process.env.NODE_ENV === "development") {
    console.log("DEV MODE - Would send email:", {
      email,
      useCase,
      datasource1,
      datasource2,
      datasource3,
    });
    return NextResponse.json({ success: true });
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
New Test Signup

Email: ${email}

Question they want answered:
${useCase}

Datasource 1: ${datasource1 || "N/A"}
Datasource 2: ${datasource2 || "N/A"}
Datasource 3: ${datasource3 || "N/A"}
`.trim();

  try {
    // Send the summary email only to Julien
    await transporter.sendMail({
      from: `"Overbase Test" <${process.env.SMTP_USER}>`,
      to: "julien@overbase.app",
      subject: `New Test Signup: ${email}`,
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
