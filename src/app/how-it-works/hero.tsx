import Hero from "@/components/hero";

export default function HowItWorksHero() {
  return (
    <Hero
      title={
        <>
          Deal intelligence from a <span className="italic">human</span> data
          scientist
        </>
      }
      titleMaxWidthClass="max-w-lg"
      divider={false}
    />
  );
}
