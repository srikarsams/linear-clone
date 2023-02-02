import classNames from 'classnames';
import React from 'react';

type HeroProps = {
  children: React.ReactNode;
};

type HeroElementProps = {
  children: React.ReactNode;
  className?: string;
};

export function Hero({ children }: HeroProps) {
  return <div className="text-center">{children}</div>;
}

export function HeroTitle({ children, className }: HeroElementProps) {
  return (
    <h1
      className={classNames(
        "text-gradient my-6 text-6xl md:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function HeroSubTitle({ children, className }: HeroElementProps) {
  return (
    <p
      className={classNames(
        "text mb-12 text-lg text-primary-text md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
}
