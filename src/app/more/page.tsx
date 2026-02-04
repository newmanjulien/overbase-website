import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { More } from "@/app/more/More";

export default function MorePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <More />
      <Footer />
    </div>
  );
}
