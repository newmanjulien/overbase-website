import nodemailer from "nodemailer";

const CONTACT_EMAIL_TO = "julien@overbase.app";

type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

function getSmtpCredentials() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("Missing SMTP credentials");
  }

  return { user, pass };
}

function createContactTransporter({
  user,
  pass,
}: {
  user: string;
  pass: string;
}) {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

function buildContactEmailText({
  name,
  email,
  message,
}: ContactEmailPayload): string {
  return `Name: ${name}
Email: ${email}

Message:
${message}`;
}

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactEmailPayload): Promise<void> {
  const credentials = getSmtpCredentials();
  const transporter = createContactTransporter(credentials);

  await transporter.sendMail({
    from: `"Julien Newman" <${credentials.user}>`,
    to: CONTACT_EMAIL_TO,
    replyTo: email,
    subject: `Overbase contact form: ${name}`,
    text: buildContactEmailText({ name, email, message }),
  });
}
