"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthLayout } from "@/components/auth/auth-layout";
import { signUp, signInWithGoogle } from "@/lib/auth";

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: { email: string; password: string }) {
    try {
      setIsLoading(true);
      const { error } = await signUp(values.email, values.password);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Check your email to confirm your account!");
      router.push("/sign-in");
    } catch (error) {
      toast.error("An error occurred while signing up");
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
        quote: "Join thousands of learners who have transformed their learning experience with our innovative platform.",
        author: "Alex Thompson",
      }}
    >
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <AuthForm
        type="sign-up"
        onSubmit={onSubmit}
        onGoogleSignIn={handleGoogleSignIn}
        isLoading={isLoading}
      />
      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
}