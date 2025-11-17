export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[40vh] md:min-h-screen overflow-hidden bg-emerald-50/30">
      {/* Background image only */}
      <div className="absolute inset-0">
        <img
          src="/images/fitonova-hero.png"
          alt="Fitonova - Bugünün Tedavileri Yarının Umudu"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Content area */}
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[40vh] md:min-h-screen py-8 md:py-20">
        {/* Placeholder for any future content */}
      </div>
    </section>
  )
}
