import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const PreQuestions: React.FC = () => {
  const [rating, setRating] = React.useState<number[]>([8]);
  const [choice, setChoice] = React.useState<string>("pasta");

  const lockRating = () => {
    const value = rating[0] ?? 8;
    toast({
      title: "Noted.",
      description: `Talking stage: ${value}/10. We'll fine‑tune the vibes.`,
    });
  };

  const handleChoice = (val: string) => {
    setChoice(val);
    const quips: Record<string, string> = {
      pasta: "Chef's kiss. Carbs + romance = science.",
      hugs: "Valid. Warm > everything.",
      kisses: "Bold. No notes.",
    };
    toast({ title: "Solid pick.", description: quips[val] ?? "Excellent taste." });
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="glass animate-enter">
        <CardHeader>
          <CardTitle className="font-display">Talking stage rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-foreground/70">Out of 10, no pressure.</p>
              <div className="font-display text-2xl">{rating[0] ?? 8}/10</div>
            </div>
            <Slider
              value={rating}
              min={0}
              max={10}
              step={1}
              onValueChange={setRating}
              aria-label="Rate our talking stage out of 10"
            />
            <div className="flex justify-end">
              <Button variant="secondary" onClick={lockRating}>
                Lock it in
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass animate-enter">
        <CardHeader>
          <CardTitle className="font-display">Quick poll</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70 mb-4">Tonight, which one wins?</p>
          <RadioGroup value={choice} onValueChange={handleChoice} className="space-y-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="pasta" id="q-pasta" />
              <Label htmlFor="q-pasta">Fresh pasta</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="hugs" id="q-hugs" />
              <Label htmlFor="q-hugs">Warm hugs</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="kisses" id="q-kisses" />
              <Label htmlFor="q-kisses">More kisses</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreQuestions;
