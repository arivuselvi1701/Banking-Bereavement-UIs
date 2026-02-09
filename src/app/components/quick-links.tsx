const links = [
  {
    title: "Notify us of a death"
  },
  {
    title: "Steps after letting us know"
  },
  {
    title: "Claiming rewards"
  },
  {
    title: "Frequently asked questions"
  },
  {
    title: "More support"
  },
  {
    title: "Independent support"
  },
  {
    title: "Safe custody"
  },
  {
    title: "Estate administration"
  }
];

export function QuickLinks() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-900">
            We want to support you at this time
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We know that managing finances after losing someone can feel overwhelming. 
            That's why we've created a simple, guided process to help you through each 
            step. You don't have to navigate this alone—we're here to help you every 
            step of the way.
          </p>
        

    
        
        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <a
              key={link.title}
              href="#"
              className="text-[--deep-purple] font-medium hover:underline transition-all duration-200"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
