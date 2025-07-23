import { Button } from "./ui/button";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-16">
      <div className="flex flex-col items-center md:items-start space-y-8 max-w-2xl mx-auto md:mx-0">
        {/* Title */}
        <h1 className="text-6xl lg:text-7xl text-gray-900 tracking-tight text-center md:text-left font-bold">
          Stop doing 3 time consuming tasks
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 leading-relaxed max-w-lg text-center md:text-left">
          We combine AI & humans to help C-Suite Execs triage emails, create
          decks and gather internal data
        </p>

        {/* CTA Button */}
        <Button
          onClick={onJoinWaitlist}
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg rounded-full"
        >
          Join waitlist
        </Button>
      </div>
    </section>
  );
}
