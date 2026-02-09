export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-600 hover:text-[--deep-purple] transition-colors"
            >
              Privacy Notice
            </a>
            <a
              href="#accessibility"
              className="text-gray-600 hover:text-[--deep-purple] transition-colors"
            >
              Accessibility
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[--deep-purple] transition-colors"
            >
              Contact Support
            </a>
          </div>
          <div className="text-sm text-gray-600 text-center md:text-right">
            © 2026 TrustBank. We're here for you.
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500 max-w-3xl mx-auto">
          TrustBank is committed to supporting you during difficult times. 
          All information is handled with the utmost confidentiality and care.
        </div>
      </div>
    </footer>
  );
}
