import { Bot, FileCheck, Users, Route } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Document review",
    description: "Upload documents and let our assistant read and understand them for you"
  },
  {
    icon: Users,
    title: "Account identification",
    description: "Automatically identify all relevant accounts and beneficiaries"
  },
  {
    icon: Route,
    title: "Step-by-step guidance",
    description: "Clear instructions tailored to your specific situation"
  }
];

export function AgentIntro() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--support-bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[--deep-purple] mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl mb-4 text-gray-900">
            Your Bereavement Case Assistant
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Our intelligent assistant is designed to make this process as smooth as possible. 
            It works alongside our support team to help you navigate everything efficiently 
            and with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-2xl border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-[--soft-lavender] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[--deep-purple]" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your assistant will be available 24/7 to answer questions and help you complete 
            the necessary steps at your own pace. You can always reach a human support 
            specialist if you need additional help.
          </p>
        </div>
      </div>
    </section>
  );
}
