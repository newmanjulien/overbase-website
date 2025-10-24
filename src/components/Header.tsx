"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "./ui/button";

export function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="h-8 w-auto flex items-center">
            <div className="h-full">
              <Image
                src="/logo.png"
                alt="Logo"
                width={54}
                height={32}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Waitlist button */}
          <Button
            size="default"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm"
            onClick={() => router.push("/waitlist")}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
