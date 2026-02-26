import Hero from "@/components/hero";

export default function HowItWorksHero() {
  return (
    <Hero
      title={
        <>
          Quickly get millions in <span className="italic">easy revenue</span>
        </>
      }
      titleMaxWidthClass="max-w-lg"
    />
  );
}
