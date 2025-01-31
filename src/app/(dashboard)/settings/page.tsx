import Image from "next/image";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Mail } from "lucide-react";
import LogoutButton from "~/components/button/LogoutButton";
import { createClient } from "~/app/utils/supabase/server";

interface UserMetadata {
  full_name: string;
  avatar_url: string;
}

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const metadata = user?.user_metadata as UserMetadata;

  if (error || !user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-4 pb-0">
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

          <CardTitle className="text-center text-2xl font-bold">
            {metadata.full_name}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 pt-6">
          <div className="flex items-center space-x-3 rounded-lg p-3">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-medium">{user?.email}</span>
          </div>

          <div className="flex justify-end">
            <LogoutButton />
          </div>

          {/* Debug Information (Optional) */}
          {process.env.NODE_ENV === "development" && (
            <details className="rounded-lgp-3 mt-4 w-full">
              <summary className="cursor-pointer text-sm font-medium">
                User Details (Dev Mode)
              </summary>
              <pre className="mt-2 max-h-40 overflow-auto text-xs">
                {JSON.stringify(user, null, 2)}
              </pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
