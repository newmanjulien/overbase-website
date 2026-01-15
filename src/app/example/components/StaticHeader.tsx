"use client";

import Image from "next/image";

export default function StaticHeader() {
  // Hardcoded or prop-driven URL for standalone
  const logoUrl =
    "https://opulent-goat-242.convex.cloud/api/storage/ca2ca061-7a0c-4a8d-be0c-665aecea8c51";

  const navItems = [
    { label: "Questions" },
    { label: "Templates" },
    { label: "Connectors" },
    { label: "People" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/60">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <div className="flex items-center space-x-8">
            {/* Unclickable Logo */}
            <div className="h-7 cursor-default">
              <Image src={logoUrl} alt="" width={42} height={30} priority />
            </div>

            {/* Unclickable Nav */}
            <nav className="flex space-x-3 items-center">
              {navItems.map((item) => {
                const isActive = item.label === "Questions";
                return (
                  <div
                    key={item.label}
                    className={`px-2 py-1 text-sm font-[350] rounded-lg cursor-default hover:text-gray-900 hover:bg-gray-100 ${
                      isActive ? "text-gray-700 bg-gray-100" : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
