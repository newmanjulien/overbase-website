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
          You&apos;re too busy
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-lg text-center md:text-left">
          Get unbusy with the first AI agent that can{" "}
          <strong>make both tool calls and human calls</strong>
        </p>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={onJoinWaitlist}
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg rounded-full"
          >
            Join waitlist
          </Button>

          {/* Second button */}
          <a
            href="https://cal.com/juliennewman/15min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Demo with our CEO"
          >
            <Button
              size="lg"
              className="bg-gray-50 hover:bg-gray-100 text-black px-8 py-3 text-lg rounded-full"
            >
              Talk to our CEO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
