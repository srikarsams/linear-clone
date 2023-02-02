import classNames from 'classnames';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={classNames("mx-auto max-w-[120rem] px-6 sm:px-8", className)}
    >
      {children}
    </div>
  );
}
