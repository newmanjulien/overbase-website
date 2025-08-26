export function AnimatedBackground() {
  return (
    <div className="flex-1 bg-gray-900 relative overflow-hidden hidden lg:block">
      {/* Enhanced visual texture with animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 30%)",
            animation: "float1 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 0%, transparent 65%)",
            animation: "float2 11s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 90%)",
            animation: "float3 13s ease-in-out infinite",
          }}
        />
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
        />
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
  );
}
