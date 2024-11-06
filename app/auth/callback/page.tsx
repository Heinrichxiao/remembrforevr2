'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const hash = window.location.hash;
        if (hash) {
          const { data, error } = await supabase.auth.getSession();
          if (!error && data) {
            router.push('/my-lessons');
          }
        }
      } catch (error) {
        console.error('Error in auth callback:', error);
        router.push('/sign-in');
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Completing sign in...</h2>
        <p className="text-sm text-muted-foreground">You will be redirected shortly.</p>
      </div>
    </div>
  );
}