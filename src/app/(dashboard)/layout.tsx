import { AppSidebar } from "~/components/app-sidebar"
import { Separator } from "~/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar"
import { createClient } from "~/app/utils/supabase/server"
import { headers } from 'next/headers'

export default async function Layout({ children }) {
  // create supabase client
  const supabase = await createClient()
  
  // user data
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  
  if (error || !user) {
    redirect("/login")
  }

  // Get current path
const headersList = await headers();
const pathname = headersList.get('x-invoke-path') || '';
console.log(pathname); // Cek di terminal server, apakah pathname-nya benar
  // Split path into segments
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
