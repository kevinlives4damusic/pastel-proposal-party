import React from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type HeroProposalProps = {
  onAccept: () => void;
};

const HeroProposal: React.FC<HeroProposalProps> = ({ onAccept }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [noPos, setNoPos] = React.useState({ x: 50, y: 50 });
  const [dodges, setDodges] = React.useState(0);

  const popConfetti = React.useCallback(() => {
    const end = Date.now() + 800;
    const colors = [
      "#F5C2E7", // pastel pink
      "#D0B3FF", // lavender
      "#C7D2FE", // periwinkle
      "#E9D5FF", // soft violet
    ];
    const frame = () => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleYes = () => {
    popConfetti();
    toast({
      title: "Yay!",
      description: "Excellent choice. Date planning unlocked! 💕",
    });
    onAccept();
  };

  const moveNo = () => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const padding = 24; // prevent overflow
    const x = Math.random() * (rect.width - 120 - padding) + padding;
    const y = Math.random() * (rect.height - 44 - padding) + padding;
    setNoPos({ x, y });
    setDodges((d) => d + 1);
  };

  React.useEffect(() => {
    // On small devices, auto-move every few seconds
    const mql = window.matchMedia("(max-width: 640px)");
    if (!mql.matches) return;
    const id = setInterval(moveNo, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-love p-6 md:p-10 shadow-xl animate-enter">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,hsl(var(--accent)/.35),transparent_60%)]" aria-hidden />
      <div className="relative z-10" ref={containerRef}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase tracking-widest text-sm text-foreground/70 animate-fade-in">A very important question</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-2 md:mt-3 leading-tight">
            Will you be my girlfriend?
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mt-4">
            I bring amasnack, twitter memes, warm hoodies, and unlimited compliments sthandwa sam
          </p>
        </div>

        <div className="relative mx-auto mt-8 md:mt-10 h-[180px] md:h-[220px]">
          <div className="flex items-center justify-center gap-4 md:gap-6 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Button variant="hero" size="lg" onClick={handleYes} className="hover-scale hover-glow">
              YES, obviously ✨
            </Button>
          </div>

          <Button
            variant="secondary"
            size="lg"
            onMouseEnter={moveNo}
            onFocus={moveNo}
            className="absolute glass hover-scale"
            style={{ left: noPos.x, top: noPos.y }}
          >
            {dodges > 4 ? "Nice try 😜" : "No"}
          </Button>
        </div>

        <p className="text-sm text-foreground/60 mt-2 text-center">
          P.S. The NO button is a little shy.
        </p>
      </div>
    </section>
  );
};

export default HeroProposal;
