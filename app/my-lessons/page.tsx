"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Clock, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface Lesson {
  id: string;
  title: string;
  description: string;
  lastStudied: string;
  progress: number;
  nextReview: string;
}

export default function MyLessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch actual lessons from Supabase
    setLessons([
      {
        id: "1",
        title: "Basic Spanish Phrases",
        description: "Essential phrases for everyday conversations",
        lastStudied: "2024-03-15",
        progress: 75,
        nextReview: "2024-03-20",
      },
      {
        id: "2",
        title: "Introduction to React Hooks",
        description: "Learn the basics of React Hooks",
        lastStudied: "2024-03-14",
        progress: 45,
        nextReview: "2024-03-18",
      },
      {
        id: "3",
        title: "World War II Timeline",
        description: "Key events of World War II",
        lastStudied: "2024-03-13",
        progress: 90,
        nextReview: "2024-03-21",
      },
    ]);
    setIsLoading(false);
  }, []);

  const handleDelete = async (lessonId: string) => {
    try {
      // TODO: Implement deletion with Supabase
      setLessons(lessons.filter(lesson => lesson.id !== lessonId));
      toast.success("Lesson deleted successfully");
    } catch (error) {
      toast.error("Failed to delete lesson");
    }
  };

  if (isLoading) {
    return (
      <div className="container py-6">
        <div className="flex items-center justify-center h-64">
          <Brain className="h-8 w-8 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-6">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Lessons</h1>
          <p className="text-muted-foreground">
            Track and manage your learning progress
          </p>
        </div>

        <Tabs defaultValue="in-progress" className="space-y-6">
          <TabsList>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="created">Created</TabsTrigger>
          </TabsList>

          <TabsContent value="in-progress" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lessons.map((lesson) => (
                <Card key={lesson.id}>
                  <CardHeader>
                    <CardTitle>{lesson.title}</CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>Next review: {lesson.nextReview}</span>
                        </div>
                        <span className="font-medium">{lesson.progress}%</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Study Now
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Lesson
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this lesson? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(lesson.id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="flex items-center justify-center h-48 text-muted-foreground">
              <Brain className="h-12 w-12" />
            </div>
          </TabsContent>

          <TabsContent value="created">
            <div className="flex items-center justify-center h-48 text-muted-foreground">
              <Edit2 className="h-12 w-12" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}