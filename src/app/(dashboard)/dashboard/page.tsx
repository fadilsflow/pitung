import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import LogoutButton from "~/components/button/LogoutButton";
import { createClient } from "~/app/utils/supabase/server";

interface userMetadata {
  full_name: string;
  avatar_url: string;
}

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const metadata = user?.user_metadata as userMetadata;

  if (error || !user) {
    redirect("/login");
  }

  return (
    <div>
      <LogoutButton />
      <Link href={"/"}>back to yput ome</Link>
      <p>Email: {user?.email}</p>
      <p>Full Name: {metadata.full_name}</p>
      {metadata.avatar_url && (
        <Image
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
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
