"use server";

import { redirect } from "next/navigation";
import { createClient } from "~/app/utils/supabase/server";

export async function logout() {
  const supabase = createClient();
  await (await supabase).auth.signOut();
  redirect("/home");
}
