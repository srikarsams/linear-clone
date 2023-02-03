import type { NextPage } from "next";

import { Button, IconWrapper } from '../components/button';
import Container from '../components/container';
import { Hero, HeroSubTitle, HeroTitle } from '../components/hero';
import { HeroImage } from '../components/hero-image';
import { ChevronIcon } from '../components/icons/chevron-icon';

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Container className="pt-[6.4rem]">
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
      </Container>
    </div>
  );
};

export default Home;
