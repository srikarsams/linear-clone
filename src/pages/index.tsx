import classNames from "classnames";

import { Button, IconWrapper } from "../components/button";
import { Clients } from "../components/clients";
import Container from "../components/container";
import { Hero, HeroSubTitle, HeroTitle } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron-icon";
import { StarHorizon } from "../components/icons/star-horizon";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
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

      <Container>
        <Clients />
      </Container>

      <div
        className={classNames(
          "mask-stars-horizon relative my-[-12.8rem] h-[60rem] overflow-hidden",
          "inset-0 bg-stars-gradient before:absolute before:opacity-40",
          "after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t-[rgba(120,119,198,0.4)] after:bg-background"
        )}
        style={
          {
            "--color": "#7877C6",
          } as React.CSSProperties
        }
      >
        <StarHorizon />
      </div>
    </>
  );
};

export default Home;
