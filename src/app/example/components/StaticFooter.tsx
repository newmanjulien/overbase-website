"use client";

import Image from "next/image";

export default function StaticFooter() {
  // Hardcoded or prop-driven URL for standalone
  const logoUrl =
    "https://opulent-goat-242.convex.cloud/api/storage/ca2ca061-7a0c-4a8d-be0c-665aecea8c51";

  return (
    <footer className="bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Unclickable Logo */}
            <div className="h-4 cursor-default">
              <Image src={logoUrl} alt="" width={38} height={20} />
            </div>
          </div>
          <nav className="flex space-x-8">
            {["Home", "Docs", "Guides", "Help", "Contact", "Legal"].map(
              (label) => (
                <div
                  key={label}
                  className="text-gray-500 cursor-default text-sm font-light transition-colors"
                >
                  {label}
                </div>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
