import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Search, TrendingUp, Users } from "lucide-react";

const featuredLessons = [
  {
    title: "Introduction to Psychology",
    description: "Learn the fundamentals of human behavior and mental processes",
    author: "Dr. Sarah Wilson",
    students: 1234,
    rating: 4.8,
  },
  {
    title: "World History: Ancient Civilizations",
    description: "Explore the rise and fall of great ancient civilizations",
    author: "Prof. James Miller",
    students: 892,
    rating: 4.7,
  },
  {
    title: "Basic Mathematics",
    description: "Master essential mathematical concepts and problem-solving",
    author: "Emma Thompson",
    students: 2156,
    rating: 4.9,
  },
];

const popularTopics = [
  "Mathematics",
  "Science",
  "History",
  "Languages",
  "Programming",
  "Arts",
  "Music",
  "Literature",
];

export default function ExplorePage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Explore Lessons</h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for lessons..."
              className="pl-9"
            />
          </div>
        </div>

        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredLessons.map((lesson, index) => (
                <Card key={index} className="hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle>{lesson.title}</CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{lesson.students} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4" />
                        <span>{lesson.rating}/5.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Popular Topics</h2>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium hover:bg-primary/20 cursor-pointer transition-colors"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="flex items-center justify-center h-48 text-muted-foreground">
              <TrendingUp className="h-12 w-12" />
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="flex items-center justify-center h-48 text-muted-foreground">
              <Brain className="h-12 w-12" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}