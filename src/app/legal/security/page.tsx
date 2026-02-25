import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SecurityAddendum } from "@/app/legal/security/security-addendum";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <SecurityAddendum />
      <Footer />
    </div>
  );
}
