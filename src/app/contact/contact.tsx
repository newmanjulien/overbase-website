"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/form-page-layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClassName =
  "w-full rounded-md border border-gray-200 px-3 py-3 text-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-900";

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      router.push("/contact/confirmation");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setError("Oops, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormPageLayout
      title={
        <h1 className="text-4xl font-medium tracking-tight text-gray-900">
          How can we help?
        </h1>
      }
      description="Tell us what you're working on and we'll get back to you soon"
      onLogoClick={() => router.push("/")}
      onSubmit={handleSubmit}
      primaryActionText="Submit"
      isLoading={loading}
      loadingText="Sending message..."
    >
      <div className="space-y-3">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClassName}
          placeholder="Name"
          required
          disabled={loading}
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClassName}
          placeholder="Email"
          required
          disabled={loading}
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClassName} min-h-32 resize-none`}
          placeholder="Message"
          required
          disabled={loading}
        />

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    </FormPageLayout>
  );
}
