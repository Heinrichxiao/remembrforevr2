import { Button } from "@/components/ui/button";
import { Brain, Star, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

export default async function Home() {
  const { user } = await getCurrentUser();

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Master Any Subject with Spaced Repetition
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Learn smarter, not harder. Our scientifically-proven method helps you remember forever.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={user ? "/learn" : "/sign-up"}>
                  Start Learning Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Smart Learning</h3>
              <p className="text-muted-foreground">
                Our algorithm adapts to your learning pace for maximum retention
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Daily Streaks</h3>
              <p className="text-muted-foreground">
                Stay motivated with daily goals and achievement tracking
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">XP & Levels</h3>
              <p className="text-muted-foreground">
                Earn XP and level up as you learn and master new topics
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}