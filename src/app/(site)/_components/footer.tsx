import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50/80 border-t border-gray-100">
      <div className="w-full px-6 md:px-12 lg:px-24 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="hidden text-sm text-gray-500 md:block">
            Overbase, Inc. 600 California St, San Francisco
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="/legal/terms-of-service"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/legal/dpa"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              DPA
            </Link>
            <Link
              href="/legal/security"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              Security
            </Link>
            <Link
              href="/legal/sub-processors"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              Sub-processors
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
