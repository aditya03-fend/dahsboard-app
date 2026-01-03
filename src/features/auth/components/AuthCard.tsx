import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthCardProps } from "../types/auth.types";
import { Button } from "@/components/ui/button";

export default function AuthCard({ handleLogin }: AuthCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome</CardTitle>
        <CardDescription>Product Dashboard App</CardDescription>
      </CardHeader>

      <CardContent>
        <Button className="w-full" onClick={handleLogin}>
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
}
