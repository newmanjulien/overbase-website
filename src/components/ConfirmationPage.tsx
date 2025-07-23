import { Button } from "./ui/button";
import Logo from "@/components/ui/Logo";

interface ConfirmationPageProps {
  onHome: () => void;
}

export function ConfirmationPage({ onHome }: ConfirmationPageProps) {
  const handleTwitterClick = () => {
    window.open("https://x.com/hndlai", "_blank");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header with logo */}
        <div className="px-6 md:px-12 lg:px-24 py-8">
          <button
            type="button"
            aria-label="Go back to home"
            onClick={onHome}
            className="h-11 w-auto"
          >
            <div className="h-full aspect-[1000/550]">
              <Logo />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 -mt-16">
          <div className="w-full max-w-xs space-y-8">
            <div className="space-y-8 text-center">
              <h1 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-bold">
                We&apos;ll reach out soon
              </h1>
              <p className="text-md text-gray-900 leading-relaxed">
                Thank you for signing up and we look forward to collaborating
                soon
              </p>
            </div>

            {/* Two buttons side by side */}
            <div className="flex gap-4">
              <Button
                onClick={onHome}
                size="lg"
                className="flex-1 bg-transparent hover:bg-gray-100 text-gray-900 px-8 py-3 text-lg rounded-full"
              >
                Go Home
              </Button>

              <Button
                onClick={handleTwitterClick}
                size="lg"
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-900 px-8 py-3 text-lg rounded-full"
              >
                Follow us on X
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Dark background */}
      <div className="flex-1 bg-gray-900 relative overflow-hidden hidden lg:block">
        {/* Enhanced visual texture with animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 30%)",
              animation: "float1 9s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 0%, transparent 65%)",
              animation: "float2 11s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 90%)",
              animation: "float3 13s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Animation keyframes */}
        <style>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1.3); }
            25% { transform: translate(25px, -30px) scale(1.5); }
            50% { transform: translate(-15px, 25px) scale(2); }
            75% { transform: translate(-25px, -10px) scale(1.35); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1.3); }
            33% { transform: translate(-30px, 20px) scale(1.55); }
            66% { transform: translate(35px, -25px) scale(1); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1.3); }
            20% { transform: translate(15px, 35px) scale(1.4); }
            40% { transform: translate(-25px, -20px) scale(1); }
            60% { transform: translate(30px, 10px) scale(1.5); }
            80% { transform: translate(-10px, -30px) scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
}
