import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { LessonCard } from "@/components/lesson-card";
import { EmptyLessons } from "@/components/empty-lessons";

export default async function LearnPage() {
  const { user } = await getCurrentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  const { data: userProgress } = await supabase
    .from("user_progress")
    .select(`
      *,
      lessons:lessons(*)
    `)
    .eq("user_id", user.id)
    .order("next_review", { ascending: true });

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  return (
    <div className="container py-6">
      <div className="flex flex-col space-y-8">
        {profile && (
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, {profile.display_name}!</h2>
              <p className="text-muted-foreground">
                {profile.streak_count} day streak • Level {profile.level} • {profile.xp_points} XP
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Due for Review</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {userProgress && userProgress.length > 0 ? (
              userProgress.map((progress) => (
                <LessonCard
                  key={progress.id}
                  lesson={progress.lessons}
                  progress={progress}
                />
              ))
            ) : (
              <EmptyLessons />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}