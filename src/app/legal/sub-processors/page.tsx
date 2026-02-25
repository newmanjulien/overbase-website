import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SubProcessors } from "@/app/legal/sub-processors/sub-processors";

export default function SubProcessorsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <SubProcessors />
      <Footer />
    </div>
  );
}
