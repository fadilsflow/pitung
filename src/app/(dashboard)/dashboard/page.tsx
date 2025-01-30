 //page templates
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

   //   <pre className="mt-2 max-h-40  text-xs">
   //  {JSON.stringify(user, null, 2)}
   //  </pre>

  if (error || !user) {
    redirect("/login");
  }

  return (
  <div>

     </div>
  )
}
