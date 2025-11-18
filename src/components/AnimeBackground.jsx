import { useMemo } from 'react'

// Subtle animated background with sparkles and floating petals for an anime vibe
export default function AnimeBackground() {
  const petals = useMemo(() => Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 14 + Math.random() * 18,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 14,
    rotate: Math.random() * 40 - 20,
  })), [])

  const sparkles = useMemo(() => Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 5,
  })), [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Vibrant gradient field */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(244,114,182,0.25),transparent),radial-gradient(1000px_500px_at_90%_0%,rgba(56,189,248,0.18),transparent),radial-gradient(800px_400px_at_50%_100%,rgba(167,139,250,0.18),transparent)]" />

      {/* Starry texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />

      {/* Sparkles */}
      {sparkles.map(s => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white/80 shadow-[0_0_8px_2px_rgba(255,255,255,0.35)] animate-[sparkle_var(--dur)_linear_infinite]"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            ['--dur']: `${s.duration}s`,
          }}
        />
      ))}

      {/* Floating petals */}
      {petals.map(p => (
        <span
          key={p.id}
          className="absolute -top-10 opacity-70 bg-pink-400/80 rounded-tl-[60%] rounded-tr-[40%] rounded-bl-[40%] rounded-br-[60%] rotate-[var(--rot)] blur-[0.3px] animate-[floatDown_var(--dur)_linear_infinite]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.7,
            animationDelay: `${p.delay}s`,
            ['--dur']: `${p.duration}s`,
            ['--rot']: `${p.rotate}deg`,
          }}
        />
      ))}

      <style>{`
        @keyframes floatDown {
          0% { transform: translateY(-10%) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          50% { transform: translateY(60vh) translateX(-10px) rotate(20deg); }
          100% { transform: translateY(110vh) translateX(10px) rotate(45deg); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
