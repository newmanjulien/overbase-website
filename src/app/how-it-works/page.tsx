import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HowItWorksHero from "@/app/how-it-works/hero";
import HowItWorksWhat from "@/app/how-it-works/what";
import HowItWorksSections from "@/app/how-it-works/how";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <main className="pb-12">
        <HowItWorksHero />
        <HowItWorksWhat />
        <HowItWorksSections />
      </main>
      <Footer />
    </div>
  );
}
