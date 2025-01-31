"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { createClient } from "~/app/utils/supabase/client";
import { Button } from "~/components/ui/button";

export default function AuthNavButton() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    // Get initial user
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="hidden lg:block">
      {user ? (
        <Link href="/Dashboard">
          <Button variant="default">Dashboard</Button>
        </Link>
      ) : (
        <Link href="/login">
          <Button variant="default">Sign in with Google</Button>
        </Link>
      )}
    </div>
  );
}
