"use client"

import { Button } from "@/components/ui/button"
import { ErrorProps } from "@/features/dashboard/types/dashboard.types"

export default function DashboardError({ error, reset }: ErrorProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-lg font-semibold">Something went wrong</h2>

      <p className="max-w-md text-sm text-muted-foreground">
        {error.message || "Failed to load dashboard data."}
      </p>

      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
