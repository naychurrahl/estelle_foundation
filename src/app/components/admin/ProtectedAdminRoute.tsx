import { Navigate } from "react-router";
import { getSession, canAccess, type AdminModule } from "@/app/lib/adminAuth";

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
  const session = getSession();
  const allowed = requiredModule
    ? canAccess(session, requiredModule)
    : !!session;

  if (!allowed) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
