import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { EmpathySection } from "./components/empathy-section";
import { AgentIntro } from "./components/agent-intro";
import { Footer } from "./components/footer";
import { QuickLinks } from "./components/quick-links";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AgentIntro />
        {/* <QuickLinks /> */}
        {/* <EmpathySection /> */}
      </main>
      <Footer />
    </div>
  );
}
