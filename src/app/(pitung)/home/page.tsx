import { redirect } from "next/navigation";
import { createClient } from "~/app/utils/supabase/server";
import Footer from "~/components/landiing/Footer";
import Hero from "~/components/landiing/Hero";
import Navbar from "~/components/landiing/navbar";
// import { api, HydrateClient } from "~/trpc/server";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //if (user) {
  //  return redirect("/dashboard");
  //}

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="ml-10 mr-10">
        <Navbar />
        <Hero />
        <Footer />
        {/* <footer><p>footer</p></footer> */}
      </main>
    </HydrateClient>
  );
}
