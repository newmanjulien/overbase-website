export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            FACT, Inc. 600 California St, San Francisco
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a
              href="/terms-of-service"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
