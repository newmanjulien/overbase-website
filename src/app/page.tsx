import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { CEOLetter } from "./CEOLetter";
import { Footer } from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CEOLetter />
      <Footer />
    </div>
  );
}
