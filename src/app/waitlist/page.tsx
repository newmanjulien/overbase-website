"use client";

import { useRouter } from "next/navigation";
import { WaitlistPage } from "./WaitlistPage";

export default function WaitlistRoute() {
  const router = useRouter();

  return (
    <WaitlistPage
      onHome={() => router.push("/")}
      onSubmit={() => router.push("/waitlist/confirmation")}
    />
  );
}
