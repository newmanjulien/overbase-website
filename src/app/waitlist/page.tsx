"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/FormPageLayout";
import { Input } from "@/components/ui/input";

export default function WaitlistRoute() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send-waitlist-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      router.push("/waitlist/confirmation");
    } catch (err) {
      console.error("Email send failed:", err);
      setError("Oops, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormPageLayout
      title={
        <h1 className="text-xl md:text-4xl text-gray-900 tracking-tight font-medium">
          Join the waitlist
        </h1>
      }
      description="We only work with a handful of design partners at the moment"
      onLogoClick={() => router.push("/")}
      onSubmit={handleSubmit}
      primaryActionText="Submit"
      isLoading={loading}
      loadingText="Adding to waitlist..."
      showVideoOnMobile
    >
      <div className="space-y-3">
        <label htmlFor="email" className="sr-only">
          Work email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-3 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
          placeholder="Work email"
          required
          disabled={loading}
        />
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    </FormPageLayout>
  );
}
