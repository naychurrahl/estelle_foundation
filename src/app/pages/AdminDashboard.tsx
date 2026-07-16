import { Link, useNavigate } from "react-router";
import { getSession, logout, canAccess } from "@/app/lib/adminAuth";
import { ProtectedAdminRoute } from "@/app/components/admin/ProtectedAdminRoute";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

function DashboardContent() {
  const session = getSession();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Estelle Admin</h1>
            <p className="text-sm text-slate-600">
              Signed in as {session?.name}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
          >
            Log Out
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {canAccess(session, "aaf") && (
            <Link to="/admin/aaf">
              <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Adopt-a-Future</CardTitle>
                  <CardDescription>
                    Manage children profiles and review sponsorship
                    commitments.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )}

          {canAccess(session, "content") && (
            <Link to="/admin/content">
              <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Site Content</CardTitle>
                  <CardDescription>
                    Edit homepage sections: hero, programs, testimonials, and
                    more.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedAdminRoute>
      <DashboardContent />
    </ProtectedAdminRoute>
  );
}
