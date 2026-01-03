"use client";

import { useState } from "react";
import { Navbar } from "@/features/dashboard/components/shared/Navbar";
import { Sidebar } from "@/features/dashboard/components/shared/Sidebar";
import { LayoutProps } from "@/features/dashboard/types/dashboard.types";

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
}
