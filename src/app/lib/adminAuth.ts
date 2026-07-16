// Mock, client-side-only auth for gating the CMS while there's no backend.
// The accounts below ship in the JS bundle and are trivially readable - this
// is NOT real access control, just an interim UI gate so different admins
// see different sections. Replace with real server-side auth once a backend
// exists.
export type AdminRole = "admin" | "content-admin" | "sponsorship-admin";
export type AdminModule = "aaf" | "content";

type AdminAccount = {
  email: string;
  password: string;
  role: AdminRole;
  name: string;
};

const ACCOUNTS: AdminAccount[] = [
  {
    email: "admin@estelle.org",
    password: "estelle-admin",
    role: "admin",
    name: "Foundation Admin",
  },
  {
    email: "content@estelle.org",
    password: "estelle-content",
    role: "content-admin",
    name: "Content Editor",
  },
  {
    email: "sponsorship@estelle.org",
    password: "estelle-sponsorship",
    role: "sponsorship-admin",
    name: "Sponsorship Coordinator",
  },
];

export type AdminSession = { email: string; name: string; role: AdminRole };

const SESSION_KEY = "estelle-admin-session";

export function login(email: string, password: string): AdminSession | null {
  const account = ACCOUNTS.find(
    (a) => a.email === email && a.password === password,
  );
  if (!account) return null;

  const session: AdminSession = {
    email: account.email,
    name: account.name,
    role: account.role,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
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
