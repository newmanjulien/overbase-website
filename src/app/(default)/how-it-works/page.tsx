import HowItWorksHero from "./hero";
import HowItWorksSections from "./how";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="pb-12">
        <HowItWorksHero />
        <HowItWorksSections />
      </main>
    </div>
  );
}
