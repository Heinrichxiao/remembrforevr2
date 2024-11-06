import { Brain } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function EmptyLessons() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
      <Brain className="h-12 w-12 text-muted-foreground" />
      <div className="space-y-2">
        <h3 className="font-semibold">No Lessons Yet</h3>
        <p className="text-sm text-muted-foreground">
          Start your learning journey by exploring available lessons
        </p>
      </div>
      <Button asChild>
        <Link href="/explore">Browse Lessons</Link>
      </Button>
    </div>
  );
}