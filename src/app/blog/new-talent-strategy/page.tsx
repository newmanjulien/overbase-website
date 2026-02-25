import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewTalentStrategy } from "@/app/blog/new-talent-strategy/new-talent-strategy";

export default function NewTalentStrategyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <NewTalentStrategy />
      <Footer />
    </div>
  );
}
