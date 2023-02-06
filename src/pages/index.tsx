import classNames from "classnames";

import Container from "../components/container";
import { StarHorizon } from "../components/icons/star-horizon";
import { Clients } from "../components/sections/clients";
import { HomepageHero } from "../components/sections/homepage-hero";
import { Tool } from "../components/sections/tool";

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
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

      <Container>
        <Tool />
      </Container>
    </>
  );
};

export default Home;
