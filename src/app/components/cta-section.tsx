import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-[#faf4ff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl mb-4 text-gray-900">
            Tell us about a bereavement
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            To get started, please complete our secure online form. This helps us 
            understand your situation and prepare the right support for you and your family.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[--deep-purple] text-white hover:bg-[#4A2D73] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start bereavement case
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
