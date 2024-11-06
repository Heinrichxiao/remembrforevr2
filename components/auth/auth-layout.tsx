import { Brain } from "lucide-react";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  testimonial: {
    quote: string;
    author: string;
  };
}

export function AuthLayout({ children, testimonial }: AuthLayoutProps) {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary" />
        <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
          <Brain className="h-6 w-6" />
          RembrForevr
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">{testimonial.quote}</p>
            <footer className="text-sm">{testimonial.author}</footer>
          </blockquote>
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
        </div>
      </div>
    </div>
  );
}