// components/HeroVideoBg.tsx
"use client";

export default function HeroVideoBg() {
  return (
    <div className="absolute  inset-0 z-0 w-full h-[60vh] md:h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg" // Good for slow networks
        className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
      >
        <source src="/videos/clinic-hero.mp4" type="video/mp4" />
      </video>

      {/* Clinical Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

      {/* Subtle Noise Texture for a professional film look */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
