import { Button } from "~/components/ui/button";
import Link from "next/link";
// import { FcGoogle } from "react-icons/fc"
// import PitungLogo from "~/components/landiing/PitungLogo";

export default function Hero() {
  return (
    <section className="flex w-full items-center bg-background md:py-48 lg:py-20 xl:py-36">
      <div className="md:48 container px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:w-1/2">
            <div className="space-y-2">
              <h1 className="text-3 font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Simplify Your Financial Statements
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Pitung makes it easy to create, analyze, and share your
                financial statements. Start making informed decisions today.
              </p>
            </div>
            <div className="space-y-4">
              <Link href="/login">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {/* <FcGoogle className="mr-2 h-5 w-5" /> */}
                  Get Started with Pitung
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
