import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Fellowship } from "@/app/fellowship/Fellowship";
import Table from "@/app/fellowship/Table";

export default function FellowshipPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <Fellowship />
      <Table />
      <Footer />
    </div>
  );
}
