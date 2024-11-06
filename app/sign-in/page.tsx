"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthLayout } from "@/components/auth/auth-layout";
import { signIn, signInWithGoogle } from "@/lib/auth";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: { email: string; password: string }) {
    try {
      setIsLoading(true);
      const { error } = await signIn(values.email, values.password);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Successfully signed in!");
      router.push("/my-lessons");
      router.refresh();
    } catch (error) {
      toast.error("An error occurred while signing in");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      setIsLoading(true);
      const { error } = await signInWithGoogle();

      if (error) {
        toast.error(error);
        return;
      }
    } catch (error) {
      toast.error("An error occurred while signing in with Google");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthLayout
      testimonial={{
        quote: "This platform has revolutionized how I learn and retain information. The spaced repetition system is incredibly effective!",
        author: "Sofia Davis",
      }}
    >
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email to sign in to your account
        </p>
      </div>
      <AuthForm
        type="sign-in"
        onSubmit={onSubmit}
        onGoogleSignIn={handleGoogleSignIn}
        isLoading={isLoading}
      />
      <div className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
}