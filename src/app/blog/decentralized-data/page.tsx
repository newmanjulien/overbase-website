import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DecentralizedData } from "@/app/blog/decentralized-data/decentralized-data";

export default function DecentralizedDataPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <DecentralizedData />
      <Footer />
    </div>
  );
}
