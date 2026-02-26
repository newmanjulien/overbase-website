import Hero from "@/components/hero";

export default function HowItWorksHero() {
  return (
    <Hero
      title={
        <>
          <span className="italic">A human</span> audits every deal every week
        </>
      }
      titleMaxWidthClass="max-w-lg"
    />
  );
}
