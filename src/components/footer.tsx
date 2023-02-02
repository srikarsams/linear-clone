import Link from 'next/link';

import Container from './container';
import { GithubIcon } from './icons/github-icon';
import { Logo } from './icons/logo';
import { SlackIcon } from './icons/slack-icon';
import { TwitterIcon } from './icons/twitter-icon';

const footerLinks = [
  {
    title: "Products",
    links: [
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Integrations",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Changelog",
        href: "#",
      },
      {
        title: "Docs",
        href: "#",
      },
      {
        title: "Linear Method",
        href: "#",
      },
      {
        title: "Download",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Customers",
        href: "#",
      },
      {
        title: "Brand",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Community",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
      {
        title: "DPA",
        href: "#",
      },
      {
        title: "Terms of Service",
        href: "#",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        title: "API",
        href: "#",
      },
      {
        title: "Status",
        href: "#",
      },
      {
        title: "Github",
        href: "#",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white-a08 py-[5.6rem] text-sm">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="transition-color flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center gap-4 text-grey transition-colors hover:text-white">
              <Logo className="h-4 w-4 flex-shrink-0" />
              Linear - Designed Worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {footerLinks.map((column) => {
            return (
              <div
                className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
                key={column.title}
              >
                <h3 className="mb-4 font-medium ">{column.title}</h3>
                <ul>
                  {column.links.map((link) => {
                    return (
                      <li key={link.title} className="[&_a]:last:mb-0">
                        <Link
                          className="mb-3 block text-grey transition-colors hover:text-white"
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
