import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import {
  getSession,
  canAccess,
  type AdminModule,
  type AdminSession,
} from "@/app/lib/adminAuth";

const AdminSessionContext = createContext<AdminSession | null>(null);

// Lets pages under a ProtectedAdminRoute read the already-resolved session
// instead of each calling getSession() again.
export function useAdminSession(): AdminSession | null {
  return useContext(AdminSessionContext);
}

// requiredModule omitted => just needs any valid session (used by the
// dashboard, which shows different module cards per role rather than
// gating on one specific module).
export function ProtectedAdminRoute({
  requiredModule,
  children,
}: {
  requiredModule?: AdminModule;
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<AdminSession | null | undefined>(
    undefined,
  );

  useEffect(() => {
    getSession()
      .then(setSession)
      .catch(() => setSession(null));
  }, []);

  if (session === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-500">
        Loading...
      </div>
    );
  }

  const allowed = requiredModule
    ? canAccess(session, requiredModule)
    : !!session;

  if (!allowed) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <AdminSessionContext.Provider value={session}>
      {children}
    </AdminSessionContext.Provider>
  );
}
