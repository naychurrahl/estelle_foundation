// Admin auth against the real backend - session lives in the httpOnly JWT
// cookie `/auth` issues, so getSession() has to ask the server (`ping`)
// rather than read anything client-side.
import { ApiRequest, baseUrl } from "@/app/components/ApiRequest";

export type AdminRole = "admin" | "content-admin" | "sponsorship-admin";
export type AdminModule = "aaf" | "content";

export type AdminSession = {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
};

export async function login(email: string, password: string): Promise<AdminSession> {
  return ApiRequest({
    url: `${baseUrl}/auth`,
    method: "POST",
    body: { email, password },
  });
}

export async function logout(): Promise<void> {
  await ApiRequest({ url: `${baseUrl}/auth`, method: "DELETE" });
}

export async function getSession(): Promise<AdminSession | null> {
  const res = await ApiRequest({ url: `${baseUrl}/auth` });
  return res.status === "in" ? res.user : null;
}

export function canAccess(
  session: AdminSession | null,
  requiredModule: AdminModule,
): boolean {
  if (!session) return false;
  if (session.role === "admin") return true;
  if (requiredModule === "aaf") return session.role === "sponsorship-admin";
  if (requiredModule === "content") return session.role === "content-admin";
  return false;
}
