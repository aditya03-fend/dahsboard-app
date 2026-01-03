"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/stores/auth.store";
import AuthCard from "@/features/auth/components/AuthCard";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
        <AuthCard handleLogin={handleLogin}/>
    </main>
  );
}
