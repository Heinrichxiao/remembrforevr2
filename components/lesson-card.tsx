import { Brain, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import Link from "next/link";
import { Database } from "@/lib/database.types";

type Lesson = Database["public"]["Tables"]["lessons"]["Row"];
type UserProgress = Database["public"]["Tables"]["user_progress"]["Row"];

interface LessonCardProps {
  lesson: Lesson;
  progress: UserProgress;
}

export function LessonCard({ lesson, progress }: LessonCardProps) {
  const strengthBars = "●".repeat(progress.strength) + "○".repeat(5 - progress.strength);
  
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{lesson.title}</span>
          <span className="text-primary text-sm font-mono">{strengthBars}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={progress.progress} className="h-2" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Progress: {progress.progress}%</span>
            <span>Due: {new Date(progress.next_review).toLocaleDateString()}</span>
          </div>
          <Button asChild className="w-full">
            <Link href={`/study/${lesson.id}`}>Study Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}