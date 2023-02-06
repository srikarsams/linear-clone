import { Button, IconWrapper } from "../button";
import { Hero, HeroSubTitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron-icon";

export function HomepageHero() {
  return (
    <Hero>
      <Button
        variant="secondary"
        size="small"
        href="#"
        className="flex animate-fade-in"
      >
        Linear 2022 Release - Built for scale <IconWrapper>→</IconWrapper>
      </Button>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Linear is a better way
        <br className="hidden md:block" /> to build products
      </HeroTitle>
      <HeroSubTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Meet the new standard for modern software development.
        <br className="hidden md:block" />
        Streamline issues, sprints, and product roadmaps.
      </HeroSubTitle>
      <Button
        href="/"
        variant="primary"
        size="large"
        className="flex translate-y-[-1rem] animate-fade-in items-center opacity-0 [--animation-delay:600ms]"
      >
        Get Started
        <IconWrapper>
          <ChevronIcon />
        </IconWrapper>
      </Button>
      <HeroImage />
    </Hero>
  );
}
