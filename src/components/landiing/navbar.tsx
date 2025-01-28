"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "~/lib/utils"
import { ModeToggle } from "~/components/theme/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu"
import { Button } from "~/components/ui/button"
import { Menu, X } from "lucide-react"
import PitungLogo from "./PitungLogo"

const navigationItems = [
  {
    title: "Financial Statements",
    items: [
      { title: "Balance Sheet", href: "/balance-sheet", description: "View your financial position at a glance." },
      {
        title: "Income Statement",
        href: "/income-statement",
        description: "Track your revenues and expenses over time.",
      },
      { title: "Cash Flow", href: "/cash-flow", description: "Monitor your cash inflows and outflows." },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Financial Ratios",
        href: "/financial-ratios",
        description: "Calculate and interpret key financial ratios for better decision-making.",
      },
      {
        title: "Budgeting",
        href: "/budgeting",
        description: "Plan and manage your company's financial resources effectively.",
      },
      {
        title: "Reports",
        href: "/reports",
        description: "Generate comprehensive financial reports for stakeholders and regulators.",
      },
    ],
  },
  { title: "Documentation", href: "/docs" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-24">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <PitungLogo className="h-8 w-8" />
            <span className="hidden text-xl font-bold sm:inline-block">Pitung</span>
          </Link>
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.map((subItem) => (
                              <ListItem key={subItem.title} title={subItem.title} href={subItem.href}>
                                {subItem.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden lg:block">
            <Button variant="ghost">Sign in with Google</Button>
          </Link>
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <ul className="pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <Link href={subItem.href} className="text-sm">
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className="text-sm font-medium">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/login" className="mt-4">
              <Button variant="default" className="w-full">
                Sign in with Google
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

