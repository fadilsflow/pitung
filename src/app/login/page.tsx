import { redirect } from "next/navigation";
import { createClient } from "~/utils/supabase/server";
import GoogleSignin from "./GoogleSignin";

export default async function LoginPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data.user) {
    redirect("/home");
  }
  return (
    <>
      <h1>Sign in to P itung</h1>
      <GoogleSignin />
      <p>Hello {data.user}</p>
    </>
  );
}
