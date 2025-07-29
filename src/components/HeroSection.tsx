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
          Startup founders are way too busy
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-lg text-center md:text-left">
          Get unbusy with the only AI agent that can{" "}
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
            aria-label="Demo with our founders"
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

// As a startup founder. You're one of the busiest people in the world
// You're at the top of your game. You have cofounders who you trust and rely on. You have a top notch team who supports you. And you might even have an EA or a Chief of Staff who makes your life so much easier
// But there still aren't enough hours in each day
// Imagine if there was a way to take 3 time consuming tasks then make them easy and quick in a way that reliable and which lets you mostly forget about them
// Email & Slack: hndl
// Investor updates & board decks:
// Internal & external research:
// Most of the work we do for founders gets done by an AI using tool calls. But hndl is the only AI agent that can make also make human calls. In other words, our AI can call on humans to do parts of the work which humans do better
// For example, you might tell hndl to help with something which involves using your LinkedIn to send DMs. Most of the work can be done using tool calls. But LinkedIn won't let AIs log into your account and send DMs. So the AI will call on a human to do that part
// Or another example, you might want your agent to do a task where the AI can't do a good enough job. But where you'd get good results if a human reviews the AI's work
// Join our waitlist and I'll be in touch quickly to help you get set up. I still onboard every founder personally and will do everything I can to make hndl work for you
