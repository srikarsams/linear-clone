import type { NextPage } from "next";

import { Button, IconWrapper } from '../components/button';
import Container from '../components/container';
import { Hero, HeroSubTitle, HeroTitle } from '../components/hero';
import { ChevronIcon } from '../components/icons/chevron-icon';

const Home: NextPage = () => {
  return (
    <div>
      <Container className="pt-[6.4rem]">
        <Hero>
          <Button variant="secondary" size="small" href="#" className="flex">
            Linear 2022 Release - Built for scale <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle>
            Linear is a better way
            <br className="hidden md:block" /> to build products
          </HeroTitle>
          <HeroSubTitle>
            Meet the new standard for modern software development.
            <br className="hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubTitle>
          <Button
            href="/"
            variant="primary"
            size="large"
            className="flex items-center"
          >
            Get Started
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <img src="/img/hero.webp" alt="hero image" className="mt-[12.8rem]" />
        </Hero>
      </Container>
    </div>
  );
};

export default Home;
