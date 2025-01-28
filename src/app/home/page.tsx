import Link from "next/link";
import LogoutButton from "~/components/button/LogoutButton";
import { createClient } from "~/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = data.user;
  const metadata = user?.user_metadata;
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div>
      <h1></h1>
      <Link href={"/"}></Link>
      <p>Email: {user?.email}</p>
      <p>Full Name: {metadata?.full_name}</p>
      {metadata?.avatar_url && (
        <img
          src={metadata.avatar_url}
          alt={"profile picture"}
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <LogoutButton />
    </div>
  );
}
