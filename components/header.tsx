"use client";

import Image from "next/image";

interface HeaderProps {
  title: string;
  showSearch?: boolean;
}

export function Header({ title, showSearch = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-background/80 px-8 backdrop-blur-md transition-all duration-200">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:opacity-80 md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="font-headline text-xl font-black tracking-tight text-on-primary-fixed">
          {title}
        </h1>
      </div>

      {showSearch && (
        <div className="mx-12 hidden max-w-xl flex-1 md:flex">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Global Orchestrator Search..."
              className="h-11 w-full rounded-lg border-none bg-surface-container-low pl-12 pr-4 font-medium transition-all duration-200 placeholder:text-outline-variant focus:bg-surface-container-lowest focus:ring-0"
            />
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="hidden flex-col items-end sm:flex">
          <span className="text-[10px] font-bold uppercase tracking-widest text-outline-variant">
            Status
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-on-primary-fixed">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-on-tertiary-container"></span>
            HUB ACTIVE
          </span>
        </div>
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary-container ring-2 ring-surface">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd0twm0PGypPI0Qg4EuQuZzeM8Gc1I8WHw3yirXI20JE2sCn7Gz4mFgd1UlLHV7Kst93KD4IDG4VXiokevbCJ04ykdYfLEiZzXA6tNUKN5tsjvar-ML07PaR6WRUEweFQMsZwbp5QlZikq-lcIn4CU2UE9albcGhvE-QDsNgjsS8hgAYLV2JCAJUmAhVGAwE5TTl3dSK-fQlv4up4ZuC026jpXoqs3NrBhnXaeJ1Ma92P71qHSwGO6kp37j-199o_j-7vrCOluomc"
            alt="User"
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
