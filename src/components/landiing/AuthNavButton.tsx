// components/AuthNavButton.tsx
import Link from "next/link";
import { createClient } from "~/app/utils/supabase/server";
import { Button } from "~/components/ui/button"; // Assuming you're using shadcn/ui
export default async function AuthNavButton() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="hidden lg:block">
      {user ? (
        <Link href="/dashboard">
          <Button variant="ghost">Dashboard</Button>
        </Link>
      ) : (
        <Link href="/login">
          <Button variant="ghost">Sign in with Google</Button>
        </Link>
      )}
    </div>
  );
}
