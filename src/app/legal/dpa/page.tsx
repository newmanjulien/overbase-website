import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { DataProcessingAgreement } from "./DataProcessingAgreement";

export default function DataProcessingAgreementPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header
        logoHref="/"
        initialBackgroundColor="var(--color-surface)"
      />
      <DataProcessingAgreement />
      <Footer />
    </div>
  );
}
