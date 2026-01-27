import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { SecurityAddendum } from "./SecurityAddendum";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header
        logoHref="/"
        initialBackgroundColor="var(--color-surface)"
      />
      <SecurityAddendum />
      <Footer />
    </div>
  );
}
