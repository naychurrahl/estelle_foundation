import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { login } from "@/app/lib/adminAuth";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { Toaster } from "@/app/components/ui/sonner";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const session = login(email, password);
    if (!session) {
      toast.error("Invalid email or password");
      return;
    }
    navigate("/admin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <PrimaryButton type="submit" className="w-full">
              Log In
            </PrimaryButton>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
}
