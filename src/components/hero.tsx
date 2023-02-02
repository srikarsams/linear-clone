import React from 'react';

type HeroProps = {
  children: React.ReactNode;
};

type HeroElementProps = {
  children: React.ReactNode;
};

export function Hero({ children }: HeroProps) {
  return <div className="text-center">{children}</div>;
}

export function HeroTitle({ children }: HeroElementProps) {
  return (
    <h1 className="text-gradient my-6 text-6xl md:text-8xl">{children}</h1>
  );
}

export function HeroSubTitle({ children }: HeroElementProps) {
  return (
    <p className="text mb-12 text-lg text-primary-text md:text-xl">
      {children}
    </p>
  );
}
