import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Footer() {
  return (
    <footer className="bg-gray-50/80 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            Overbase, Inc. 600 California St, San Francisco
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Blog
                  <ChevronDown className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/blog/decentralized-data" className="w-full">
                    Decentralized Data
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Legal
                  <ChevronDown className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/legal/terms-of-service" className="w-full">
                    Terms
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/legal/dpa" className="w-full">
                    DPA
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Security
                  <ChevronDown className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/legal/security" className="w-full">
                    Security Overview
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/legal/sub-processors" className="w-full">
                    Subprocessors
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </footer>
  );
}
