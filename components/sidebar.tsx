"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/", icon: "dashboard" },
  { name: "Search", href: "/explorer", icon: "search" },
  { name: "Evaluation", href: "/compliance", icon: "rate_review" },
  { name: "Proposals", href: "/proposals", icon: "description" },
  { name: "Admin", href: "/settings", icon: "admin_panel_settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r-0 bg-surface-container-low transition-all duration-200 ease-in-out md:flex">
      {/* Logo */}
      <div className="p-6">
        <span className="font-headline text-xl font-bold tracking-tight text-on-primary-fixed">
          Sovereign Architect
        </span>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1 space-y-1 px-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 font-headline font-bold tracking-tight transition-all duration-200",
                isActive
                  ? "bg-surface-container-highest text-on-primary-fixed"
                  : "text-on-primary-fixed-variant hover:bg-surface-container-high"
              )}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="p-6">
        <div className="flex items-center gap-3 rounded-xl bg-surface-container-high/50 p-3">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Agijp5UAE817ZJ68qy10gza-H8KetnH254f6sAn8-TVskxsVPCV8Yg5Y7R-nxD_yk2v_z5bfL3Upx6WpHvfQUMnYbzzM14Gr17M6MbsHHF4nkgOUpR-AGPFOlGfptdUDEIa3WdLj4v9uG1-eTgYMsNJRl3dnTVBVjePITmDAh8dcA6pwsXsi5Zq3F0OfpFLrfHgi7XZbciHW83ZPbJyTTNrnEl1DYmXBBcd9iin_EO5qcrdY9L0dkTw2LWBZTXJ17Sbj_PpsZwg"
            alt="Director Marcus"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="overflow-hidden">
            <p className="truncate text-xs font-bold text-on-surface">
              Director Marcus
            </p>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
              Global Ops
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
