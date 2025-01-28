import { redirect } from "next/navigation";
import { createClient } from "~/app/utils/supabase/server";
import GoogleSignin from "./GoogleSignin";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default async function LoginPage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect("/home");
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl">
            Welcome to Pitung
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to access your financial dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <GoogleSignin />
        </CardContent>
      </Card>
    </div>
  );
}
