import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AiGame } from "@/app/blog/ai-game/ai-game";

export default function AiGamePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <AiGame />
      <Footer />
    </div>
  );
}
