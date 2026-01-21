import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type AccessMethod = "export" | "system";

interface TestSignupData {
  email: string;
  useCase: string;
  datasource1?: string;
  datasource1AccessMethod?: AccessMethod;
  datasource2?: string;
  datasource2AccessMethod?: AccessMethod;
}

const formatAccessMethod = (method?: AccessMethod): string => {
  if (!method) return "";
  return method === "export" ? "Send export" : "System access";
};

const formatDatasource = (
  name?: string,
  accessMethod?: AccessMethod,
): string => {
  if (!name) return "N/A";
  const method = formatAccessMethod(accessMethod);
  return method ? `${name} (${method})` : name;
};

export async function POST(req: Request) {
  const data: TestSignupData = await req.json();

  const {
    email,
    useCase,
    datasource1,
    datasource1AccessMethod,
    datasource2,
    datasource2AccessMethod,
  } = data;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Dev mode: skip sending email, just log
  if (process.env.NODE_ENV === "development") {
    console.log("DEV MODE - Would send email:", {
      email,
      useCase,
      datasource1,
      datasource1AccessMethod,
      datasource2,
      datasource2AccessMethod,
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

Datasource 1: ${formatDatasource(datasource1, datasource1AccessMethod)}
Datasource 2: ${formatDatasource(datasource2, datasource2AccessMethod)}
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
