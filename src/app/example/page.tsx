import Example from "./Example";
import StaticHeader from "./components/StaticHeader";
import StaticFooter from "./components/StaticFooter";

export default function ExamplePage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <StaticHeader />
      <main className="pt-14 flex-grow">
        <Example />
      </main>
      <StaticFooter />
    </div>
  );
}
