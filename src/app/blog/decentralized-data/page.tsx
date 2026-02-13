import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DecentralizedData } from "@/app/blog/decentralized-data/DecentralizedData";

export default function DecentralizedDataPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <DecentralizedData />
      <Footer />
    </div>
  );
}
