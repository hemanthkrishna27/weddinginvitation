export function CinematicBand() {
  return (
    <section className="relative h-64 overflow-hidden bg-burgundy-deep sm:h-80">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/diyas.jpg"
      >
        <source src="/videos/diyas.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-burgundy-deep/35" />
      <p className="relative z-10 flex h-full items-center justify-center px-6 text-center font-display text-4xl text-ivory sm:text-5xl">
        Two families, one home
      </p>
    </section>
  );
}
