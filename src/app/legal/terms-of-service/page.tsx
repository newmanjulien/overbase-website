import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TermsOfService } from "@/app/legal/terms-of-service/TermsOfService";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header
        logoHref="/"
        initialBackgroundColor="var(--color-surface)"
      />
      <TermsOfService />
      <Footer />
    </div>
  );
}
