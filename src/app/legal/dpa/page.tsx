import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DataProcessingAgreement } from "@/app/legal/dpa/data-processing-agreement";

export default function DataProcessingAgreementPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" background="tinted" />
      <DataProcessingAgreement />
      <Footer />
    </div>
  );
}
