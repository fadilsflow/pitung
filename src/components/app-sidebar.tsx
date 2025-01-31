
import * as React from "react";
import {
  Home,
  ShoppingCart,
  DollarSign,
  Receipt,
  Package,
  Box,
  FileText,
  Wallet,
  User,
  Building,
  Users,
  Settings,
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  Globe,

} from "lucide-react"

import { NavMain } from "~/components/nav-main";
import { NavUser } from "~/components/nav-user";
//import { TeamSwitcher } from "~/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/public/vercel.svg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/Dashboard",
      icon: Globe,
    },
    {
      title: "Penjualan",
      url: "#",
      icon: DollarSign,
      items: [
        { title: "Overview", url: "/penjualan" },
        { title: "Tagihan", url: "/penjualan/tagihan" },
        { title: "Pengiriman", url: "/penjualan/pengiriman" },
        { title: "Pemesanan", url: "/penjualan/pemesanan" },
        { title: "Penawaran", url: "/penjualan/penawaran" }
      ]
    },
    {
      title: "Pembelian",
      url: "#",
      icon: ShoppingCart,
      items: [
        { title: "Overview", url: "/pembelian" },
        { title: "Tagihan Pembelian", url: "/pembelian/tagihan" },
        { title: "Pengiriman Pembelian", url: "/pembelian/pengiriman" },
        { title: "Pemesanan Pembelian", url: "/pembelian/pemesanan" },
        { title: "Penawaran Pembelian", url: "/pembelian/penawaran" }
      ]
    },
    {
      title: "Biaya",
      url: "/biaya",
      icon: Receipt
    },
    {
      title: "Produk",
      url: "/produk",
      icon: Package
    },
    {
      title: "Inventory",
      url: "/inventory",
      icon: Box
    },
    {
      title: "Laporan",
      url: "/laporan",
      icon: FileText
    },
    {
      title: "Kas & Bank",
      url: "/kas-bank",
      icon: Wallet
    },
    {
      title: "Akun",
      url: "/akun",
      icon: User
    },
    {
      title: "Aset Tetap",
      url: "/aset-tetap",
      icon: Building
    },
    {
      title: "Kontak",
      url: "/kontak",
      icon: Users
    },
    {
      title: "Pengaturan",
      url: "/pengaturan",
      icon: Settings
    }
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon"{...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
