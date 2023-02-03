import classNames from 'classnames';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export function HeroImage() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = React.useState([
    { direction: "to bottom", duration: 2000, size: 20, id: "test1" },
    { direction: "to right", duration: 3000, size: 15, id: "test2" },
  ]);

  function removeLine(id: string) {
    setLines(lines.filter((line) => line.id !== id));
  }

  return (
    <div ref={ref} className="isolate mt-[12.8rem] [perspective:2000px]">
      <div
        className={classNames(
          "relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:blur-[120px]",
          inView && "before:animate-image-glow"
        )}
      >
        <div className="absolute top-0 left-0 z-[2] h-full w-full">
          {lines.map((line) => {
            return (
              <span
                key={line.id}
                onAnimationEnd={() => removeLine(line.id)}
                style={
                  {
                    "--direction": line.direction,
                    "--size": line.size,
                    "--animation-duration": `${line.duration}ms`,
                  } as React.CSSProperties
                }
                className={classNames(
                  "absolute top-0 block bg-glow-lines",
                  line.direction === "to right" &&
                    `left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal`,
                  line.direction === "to bottom" &&
                    `right-0 h-[calc(var(--size)*1rem)] w-[1px] animate-glow-line-vertical`
                )}
              />
            );
          })}
        </div>
        <svg
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
          className={classNames(
            "absolute top-0 left-0 h-full w-full [&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1]  [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-sketch-lines"
          )}
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <img
          src="/img/hero.webp"
          alt="hero image"
          className={classNames(
            "relative z-[1] opacity-0 transition-opacity delay-[680ms]",
            inView && "opacity-100"
          )}
        />
      </div>
    </div>
  );
}
