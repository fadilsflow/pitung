// page templates
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "~/app/utils/supabase/server";

// types of metadata
interface UserMetadata {
  full_name: string;
  avatar_url: string;
}

export default async function Page() {
  // create supabase client
  const supabase = await createClient();
  
  // user data
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  
  const metadata = user?.user_metadata as UserMetadata;

  if (error || !user) {
    redirect("/login");
  }

  return (
  <div>
    <Link href={"/Dashboard/Settings"}>go to settings</Link>
</div>
  )
}
