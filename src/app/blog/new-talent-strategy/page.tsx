import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewTalentStrategy } from "@/app/blog/new-talent-strategy/NewTalentStrategy";

export default function NewTalentStrategyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <NewTalentStrategy />
      <Footer />
    </div>
  );
}
