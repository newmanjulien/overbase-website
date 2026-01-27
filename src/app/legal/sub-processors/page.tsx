import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { SubProcessors } from "./SubProcessors";

export default function SubProcessorsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header
        logoHref="/"
        initialBackgroundColor="var(--color-surface)"
      />
      <SubProcessors />
      <Footer />
    </div>
  );
}
