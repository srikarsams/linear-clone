import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends VariantProps<typeof buttonClassNames> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const buttonClassNames = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]",
        "[&_.icon-wrapper]:ml-2 ",
      ],
      secondary: [
        "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-blur-[1.2rem]",
        "[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2",
        "hover:bg-white hover:bg-opacity-20 transition-colors ease-in",
      ],
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export function IconWrapper({ children }: { children: React.ReactNode }) {
  return <span className="icon-wrapper">{children}</span>;
}

export function Button({
  children,
  href,
  variant,
  size,
  className,
}: ButtonProps) {
  return (
    <Link
      className={classNames(buttonClassNames({ variant, size }), className)}
      href={href}
    >
      {children}
    </Link>
  );
}
