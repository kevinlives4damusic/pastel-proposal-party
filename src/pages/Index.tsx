import React from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroProposal from "@/components/HeroProposal";
import PhotoCarousel from "@/components/PhotoCarousel";
import PreQuestions from "@/components/PreQuestions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <header className="container py-6 md:py-8">
        <nav className="flex items-center justify-between">
          <a href="#" className="font-display text-xl">💕 Pastel Proposal</a>
          <a href="#gallery" className="story-link text-sm">Gallery</a>
        </nav>
      </header>

      <main className="container space-y-12 md:space-y-16 pb-16">

        <section aria-labelledby="why-title" className="grid md:grid-cols-3 gap-6">
          <Card className="glass animate-enter">
            <CardHeader>
              <CardTitle id="why-title" className="font-display">Perks</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/70">
              <ul className="list-disc pl-5 space-y-2">
                <li>Unlimited hugs</li>
                <li>Unlimited funny tiktoks</li>
                <li>Compliments on demand</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="glass animate-enter">
            <CardHeader>
              <CardTitle className="font-display">Adventure Plan</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/70">
              <p>First date idea includes a fresh pasta, warm hugs and more kisses.</p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section id="gallery" aria-labelledby="gallery-title" className="space-y-4">
          <h2 id="gallery-title" className="font-display text-3xl">Little Gallery</h2>
          <p className="text-foreground/60">A few lovely photos to set the vibe.</p>
          <PhotoCarousel />
        </section>

        <section aria-labelledby="questions-title" className="space-y-4">
          <h2 id="questions-title" className="font-display text-3xl">Warm-up Questions</h2>
          <PreQuestions />
        </section>

        <div className="relative">
          <HeroProposal onAccept={() => setAccepted(true)} />
          <FloatingHearts />
        </div>

        {accepted && (
          <section aria-labelledby="yay-title" className="animate-enter">
            <h2 id="yay-title" className="font-display text-3xl">She said YES! 🎉</h2>
            <p className="text-foreground/70 mt-2">I owe you dessert. Screenshot this page for evidence.</p>
          </section>
        )}
      </main>

      <footer className="container py-10 text-center text-sm text-foreground/60">
        Made with lots of 💜 and pastel pixels.
      </footer>
    </div>
  );
};

export default Index;
