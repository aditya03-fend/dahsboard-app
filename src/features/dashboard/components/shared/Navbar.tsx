"use client";

import { Menu } from "lucide-react";
import { LogoutButton } from "../ui/LogoutButton";
import { NavbarProps } from "../../types/dashboard.types";

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <div className="flex items-center gap-3">
        {/* Tombol menu hanya muncul di mobile */}
        <button className="sm:hidden" onClick={onMenuClick}>
          <Menu size={24} />
        </button>

        <p className="text-sm text-muted-foreground">
          Welcome to my Dashboard App
        </p>
      </div>

      <LogoutButton />
    </header>
  );
}
