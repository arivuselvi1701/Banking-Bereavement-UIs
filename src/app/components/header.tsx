import { Building2 } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-[--deep-purple]" />
            <span className="text-lg md:text-xl font-semibold text-[--deep-purple]">
              TrustBank
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-8">
            <a
              href="#support"
              className="text-sm md:text-base text-gray-700 hover:text-[--deep-purple] transition-colors"
            >
              Support
            </a>
            <a
              href="#help"
              className="text-sm md:text-base text-gray-700 hover:text-[--deep-purple] transition-colors"
            >
              Help
            </a>
            <a
              href="#contact"
              className="text-sm md:text-base text-gray-700 hover:text-[--deep-purple] transition-colors"
            >
              Contact
            </a>
            <button className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-[--deep-purple] text-white hover:bg-[#4A2D73] transition-colors">
              Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
