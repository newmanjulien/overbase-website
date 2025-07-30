import { useEffect } from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  // Handle keyboard press for "w" and for "f"
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "w") {
        onJoinWaitlist();
      }

      if (e.key.toLowerCase() === "f") {
        window.open("https://cal.com/juliennewman/15min", "_blank");
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onJoinWaitlist]);

  // return (
  //   <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-16">
  //     <div className="flex flex-col items-center md:items-start space-y-8 max-w-2xl mx-auto md:mx-0">
  //       <h1 className="text-6xl lg:text-7xl text-gray-900 tracking-tight text-center md:text-left font-bold">
  //         Startup founders are way too busy
  //       </h1>

  //       <p className="text-lg text-gray-700 leading-relaxed max-w-lg text-center md:text-left">
  //         Get unbusy with the only AI agent that can{" "}
  //         <strong>make both tool calls and human calls</strong>
  //       </p>

  //       <div className="flex items-center space-x-4">
  //         {/* Button with "D" icon */}
  //         <Button
  //           onClick={onJoinWaitlist}
  //           size="lg"
  //           className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg rounded-full"
  //         >
  //           <span className="inline-flex items-center gap-2">
  //             Join waitlist
  //             <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-white text-sm font-bold">
  //               W
  //             </span>
  //           </span>
  //         </Button>

  //         <a
  //           href="https://cal.com/juliennewman/15min"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           aria-label="Demo with our founders"
  //         >
  //           <Button
  //             size="lg"
  //             className="bg-gray-50 hover:bg-gray-100 text-black px-8 py-3 text-lg rounded-full"
  //           >
  //             <span className="inline-flex items-center gap-2">
  //               Demo with founder
  //               <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-black text-sm font-bold">
  //                 F
  //               </span>
  //             </span>
  //           </Button>
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section className="min-h-screen flex items-center md:items-stretch justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-16">
      <div className="w-full md:flex md:items-stretch gap-12">
        {/* LEFT: Content */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-8 max-w-2xl mx-auto md:mx-0 py-12 md:py-0">
          <h1 className="text-6xl lg:text-7xl text-gray-900 tracking-tight text-center md:text-left font-bold">
            Startup founders are way too busy
          </h1>

          <p className="text-lg text-gray-900 leading-relaxed max-w-lg text-center md:text-left">
            Get unbusy with the only AI agent that can{" "}
            <strong>make both tool calls and human calls</strong>
          </p>

          <div className="flex items-center space-x-4">
            <Button
              onClick={onJoinWaitlist}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg rounded-full"
            >
              <span className="inline-flex items-center gap-2">
                Join waitlist
                <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-white text-sm font-bold">
                  W
                </span>
              </span>
            </Button>

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
                <span className="inline-flex items-center gap-2">
                  Demo with founder
                  <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-black text-sm font-bold">
                    F
                  </span>
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* RIGHT: Image (Desktop only) */}
        <div className="hidden xl:block">
          <img
            src="/point.png"
            alt="AI agent"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
