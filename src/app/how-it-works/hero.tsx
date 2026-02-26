import Hero from "@/components/hero";

export default function HowItWorksHero() {
  return (
    <Hero
      title={
        <>
          Data-driven with a <span className="italic">deep audit</span>
        </>
      }
      titleMaxWidthClass="max-w-lg"
    />
  );
}
