"use client"

import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/features/auth/stores/auth.store"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const logout = useAuthStore((state) => state.logout)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <Button variant="destructive" onClick={handleLogout}>
      Logout
    </Button>
  )
}
