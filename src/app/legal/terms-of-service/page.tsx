import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TermsOfService } from "@/app/legal/terms-of-service/terms-of-service";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <TermsOfService />
      <Footer />
    </div>
  );
}
