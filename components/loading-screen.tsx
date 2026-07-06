"use client";

import { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

type Sparkle = { left: string; top: string; delay: string; duration: string; size: string };
type BeamAngle = { angle: string; delay: string; duration: string };

export default function LoadingScreen({ onFinish }: Props) {
  const [stage, setStage] = useState(0);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [beamAngles, setBeamAngles] = useState<BeamAngle[]>([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: 20 }, () => ({
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${2 + Math.random() * 3}s`,
        size: `${2 + Math.random() * 5}px`,
      }))
    );
    setBeamAngles(
      Array.from({ length: 3 }, (_, i) => ({
        angle: `${-30 + i * 60 + Math.random() * 20}deg`,
        delay: `${i * 0.6}s`,
        duration: `${3 + Math.random() * 2}s`,
      }))
    );
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 150);
    const t2 = setTimeout(() => setStage(2), 650);
    const t3 = setTimeout(() => setStage(3), 1150);
    const t4 = setTimeout(() => onFinish(), 2000);
    return () => { [t1, t2, t3, t4].forEach(clearTimeout); };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] splash-grain">
      {/* Central golden orb — pulses behind the text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.20) 0%, rgba(212,175,55,0.08) 30%, rgba(5,5,5,0) 70%)",
          animation: "orbPulse 3s ease-in-out infinite",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,248,220,0.12) 0%, rgba(212,175,55,0.06) 40%, rgba(5,5,5,0) 70%)",
          animation: "orbPulse 4s ease-in-out infinite 0.5s",
        }}
      />

      {/* Ambient light rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(212,175,55,0.04)",
          animation: "ringRotate 20s linear infinite",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(212,175,55,0.06)",
          animation: "ringRotate 15s linear infinite reverse",
        }}
      />

      {/* Light intensity burst per word */}
      {stage >= 1 && stage <= 3 && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,248,220,0.3) 0%, rgba(212,175,55,0.15) 20%, rgba(5,5,5,0) 60%)",
            animation: `burstFlash 1s ease-out ${(stage - 1) * 1}s`,
          }}
        />
      )}

      {/* Sweeping light beams from different angles */}
      {beamAngles.map((b, i) => (
        <div key={i} className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: `linear-gradient(${b.angle}, transparent 35%, rgba(212,175,55,0.06) 45%, rgba(255,248,220,0.10) 50%, rgba(212,175,55,0.06) 55%, transparent 65%)`,
              animation: `beamSweep ${b.duration} ease-in-out infinite`,
              animationDelay: b.delay,
            }}
          />
        </div>
      ))}

      {/* Horizontal light streak */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[200px] pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.03) 30%, rgba(255,248,220,0.06) 50%, rgba(212,175,55,0.03) 70%, transparent 100%)",
            animation: "horizontalSweep 4s ease-in-out infinite 1s",
          }}
        />
      </div>

      {/* Sparkle particles */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="splash-sparkle"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            animationDuration: s.duration,
            width: s.size,
            height: s.size,
          }}
        />
      ))}

      <div className="splash-perspective flex flex-col items-center gap-6 relative z-10">
        {/* Word container */}
        <div className="flex flex-col items-center gap-2">
          {["GOLDEN", "HORIZONT", "EGYPT"].map((word, i) => {
            const show = stage > i;
            const isActive = stage === i + 1;
            return (
              <div key={word} className="relative">
                {/* Spotlight cone behind word */}
                {isActive && (
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[80px] pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse, rgba(255,248,220,0.15) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)",
                      animation: "spotlightPulse 0.8s ease-out",
                    }}
                  />
                )}
                <span
                  className={[
                    "splash-word",
                    isActive ? `stage-${stage}` : "",
                    show ? "splash-shimmer splash-glow" : "",
                  ].filter(Boolean).join(" ")}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: i === 1 ? "3.75rem" : "4.5rem",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    opacity: stage <= i ? 0 : 1,
                  }}
                >
                  {word}
                </span>
                {/* Bottom rim light on active word */}
                {isActive && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-[2px]"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), rgba(255,248,220,0.8), rgba(212,175,55,0.6), transparent)",
                      animation: "lineGlow 0.8s ease-out",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Decorative line */}
        {stage >= 3 && (
          <div className="w-48 splash-line relative">
            <div
              className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{
                background: "#D4AF37",
                boxShadow: "0 0 12px rgba(212,175,55,0.6), 0 0 30px rgba(212,175,55,0.3)",
                animation: "glowPulse 2s ease-in-out infinite",
              }}
            />
          </div>
        )}

        {/* Subtitle */}
        {stage >= 3 && (
          <p
            className="splash-subtitle text-sm uppercase tracking-[0.4em] text-white/40 font-light relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="relative">
              Premium Travel Experiences
              <span
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
                  animation: "goldShimmerSweep 3s linear infinite",
                  backgroundSize: "200% 100%",
                }}
              />
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
