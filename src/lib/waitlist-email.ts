import nodemailer from "nodemailer";

const WAITLIST_EMAIL_CC = "julien@overbase.app";
const WAITLIST_EMAIL_SUBJECT = "Overbase waitlist";
const WAITLIST_EMAIL_TEXT = "Thank you for joining the waitlist. I'll be in touch soon :)";

function getSmtpCredentials() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("Missing SMTP credentials");
  }

  return { user, pass };
}

function createWaitlistTransporter({ user, pass }: { user: string; pass: string }) {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

export async function sendWaitlistEmail(email: string): Promise<void> {
  const credentials = getSmtpCredentials();
  const transporter = createWaitlistTransporter(credentials);

  await transporter.sendMail({
    from: `"Julien Newman" <${credentials.user}>`,
    to: email,
    cc: WAITLIST_EMAIL_CC,
    subject: WAITLIST_EMAIL_SUBJECT,
    text: WAITLIST_EMAIL_TEXT,
  });
}
