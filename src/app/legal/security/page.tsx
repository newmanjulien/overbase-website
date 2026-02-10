import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SecurityAddendum } from "@/app/legal/security/SecurityAddendum";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <SecurityAddendum />
      <Footer />
    </div>
  );
}
