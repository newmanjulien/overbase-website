"use client";
import { useRouter } from "next/navigation";

import Logo from "../components/ui/Logo";
import { Button } from "../components/ui/button";

export function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="h-11 w-auto flex items-center">
            <div className="h-full aspect-[1000/600]">
              <Logo />
            </div>
          </div>

          {/* Waitlist button */}
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-base"
            onClick={() => router.push("/waitlist")}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
