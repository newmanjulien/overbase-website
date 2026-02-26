import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HowItWorksHero from "@/app/how-it-works/hero";
import HowItWorksSections from "@/app/how-it-works/sections";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <main className="pb-12">
        <HowItWorksHero />
        <HowItWorksSections />
      </main>
      <Footer />
    </div>
  );
}
