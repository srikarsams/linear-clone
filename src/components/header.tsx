import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import { Button } from './button';
import Container from './container';
import { HamburgerIcon } from './icons/hamburger-icon';
import { Logo } from './icons/logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document
      .querySelector("body")
      ?.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  React.useEffect(() => {
    const closeHamburger = () => setIsMenuOpen(false);
    window.addEventListener("resize", closeHamburger);
    window.addEventListener("orientationchange", closeHamburger);

    return () => {
      window.removeEventListener("resize", closeHamburger);
      window.removeEventListener("orientationchange", closeHamburger);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-transparent-white backdrop-blur-md">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="m-2 ml-0 h-[1.8rem] w-[1.8rem]" />
          Linear
        </Link>

        <div
          className={classNames(
            isMenuOpen ? "visible" : "invisible delay-500",
            "transition-[visibility] sm:visible"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100dvh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 sm:translate-x-0",
              "sm:relative sm:top-0 sm:block sm:h-full sm:w-auto sm:overflow-visible sm:bg-transparent sm:opacity-100",
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col sm:flex-row sm:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-b-grey-dark sm:[&_li]:border-b-0",
                "[&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-md [&_a]:transition-[transform,color] [&_a]:duration-300 sm:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a:hover]:text-grey",
                isMenuOpen ? "[&_a]:translate-y-0" : ""
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Methods</Link>
              </li>
              <li className="sm:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="sm:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="sm:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto flex h-full items-center">
          <Link className="mr-6 text-sm" href="#">
            Log in
          </Link>
          <Button href="#" variant="primary" size="medium">
            Sign up
          </Button>
        </div>

        <button
          className="ml-6 sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
}
