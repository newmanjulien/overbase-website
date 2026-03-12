import HowItWorksHero from "./hero";
import HowItWorksSections from "./how-it-works";
import FAQ from "./faq";

export default function HowItWorksPage() {
  return (
    <div>
      <main>
        <HowItWorksHero />
        <HowItWorksSections />
        <FAQ />
      </main>
    </div>
  );
}
