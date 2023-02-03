export function HeroImage() {
  return (
    <div className="mt-[12.8rem] overflow-hidden [perspective:2000px] xl:overflow-visible">
      <div className="rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient [transform:rotateX(25deg)]">
        <img src="/img/hero.webp" alt="hero image" />
      </div>
    </div>
  );
}
