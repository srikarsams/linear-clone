import type { NextPage } from 'next';
import Container from '../components/container';
import { Hero, HeroSubTitle, HeroTitle } from '../components/hero';

const Home: NextPage = () => {
  return (
    <div>
      <Container>
        <Hero>
          <HeroTitle>
            Linear is a better way
            <br /> to build products
          </HeroTitle>
          <HeroSubTitle>
            Meet the new standard for modern software development.
            <br />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubTitle>
          <img src="/img/hero.webp" alt="hero image" />
        </Hero>
      </Container>
    </div>
  );
};

export default Home;
