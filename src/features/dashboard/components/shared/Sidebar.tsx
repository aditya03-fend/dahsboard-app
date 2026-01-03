"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, X } from "lucide-react";
import { SidebarProps } from "../../types/dashboard.types";

export function Sidebar({ open, onClose, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={`w-64 border-r p-4 hidden sm:block ${className}`}>
        <h2 className="mb-6 text-lg font-semibold">Dashboard App</h2>
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent",
              pathname === "/dashboard" &&
                "bg-accent font-medium text-accent-foreground"
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
        </nav>
      </aside>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          ></div>

          {/* Sidebar content */}
          <div className="relative w-64 bg-white h-full p-4">
            <button className="absolute top-4 right-4" onClick={onClose}>
              <X size={24} />
            </button>

            <h2 className="mb-6 text-lg font-semibold">Dashboard App</h2>
            <nav className="space-y-1">
              <Link
                href="/dashboard"
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent",
                  pathname === "/dashboard" &&
                    "bg-accent font-medium text-accent-foreground"
                )}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
