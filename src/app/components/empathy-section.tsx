export function EmpathySection() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "var(--soft-lavender)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-900">
            We want to support you at this time
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We know that managing finances after losing someone can feel overwhelming. 
            That's why we've created a simple, guided process to help you through each 
            step. You don't have to navigate this alone—we're here to help you every 
            step of the way.
          </p>
        
          {/* Quick links inserted into this section */}
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">Notify us of a death</a>
              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">Steps after letting us know</a>
              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">Claiming rewards</a>
              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">Frequently asked questions</a>

              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">More support</a>
              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">Independent support</a>
              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">Safe custody</a>
              <a href="#" className="text-[#5a3a8a] font-medium hover:underline">Estate administration</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
