"use client";

import { Button } from "@/components/ui/button";

type HeroCtaProps = {
  label: string;
  targetId: string;
};

export default function HeroCta({ label, targetId }: HeroCtaProps) {
  return (
    <Button
      className="bg-gray-100 hover:bg-gray-200/50 text-gray-900 rounded-full px-3 py-1 cursor-pointer"
      onClick={() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {label}
    </Button>
  );
}
