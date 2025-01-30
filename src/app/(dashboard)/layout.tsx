 
import { createClient } from "~/app/utils/supabase/server";

export default async function Layout({ children }) {
    // create supabase client
  const supabase = await createClient();
  
  // user data
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  

  if (error || !user) {
    redirect("/login");
  }


  return (
    <>
      <h1>INI ADALAH LAYOUT DASHBOARD GROUP</h1>
      <main>{children}</main>
    </>
  )
}
