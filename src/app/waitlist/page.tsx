"use client";

import { useRouter } from "next/navigation";
import { WaitlistPage } from "./WaitlistPage";

export default function WaitlistRoute() {
  const router = useRouter();

  return (
    <WaitlistPage
      onBack={() => router.push("/")}
      onSubmit={() => router.push("/waitlist/confirmation")}
    />
  );
}
