import React from "react";

const heartCount = 18;

const FloatingHearts: React.FC = () => {
  const [canAnimate, setCanAnimate] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) setCanAnimate(true);
  }, []);

  if (!canAnimate) return null;

  return (
    <div aria-hidden className="floating-hearts absolute inset-0 overflow-hidden">
      {Array.from({ length: heartCount }).map((_, i) => {
        const left = Math.floor(Math.random() * 100);
        const duration = 6 + Math.random() * 6; // 6s - 12s
        const delay = Math.random() * 4; // 0 - 4s
        const size = 18 + Math.random() * 22; // 18px - 40px
        return (
          <span
            key={i}
            style={
              {
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                fontSize: `${size}px`,
              } as React.CSSProperties
            }
          >
            ❤
          </span>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
