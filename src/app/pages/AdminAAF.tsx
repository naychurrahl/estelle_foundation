import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { ProtectedAdminRoute } from "@/app/components/admin/ProtectedAdminRoute";
import {
  getChildren,
  addChild,
  updateChild,
  deleteChild,
  getCommitments,
  updateCommitmentStatus,
  type Child,
  type ChildStatus,
  type Commitment,
} from "@/app/lib/aafStore";
import { logout } from "@/app/lib/adminAuth";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/app/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/components/ui/select";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { Toaster } from "@/app/components/ui/sonner";
import { Pencil, Trash2, Plus } from "lucide-react";

const emptyChild: Child = {
  id: "",
  photo: "/1.png",
  firstName: "",
  age: 10,
  schoolClass: "",
  feeTotal: 0,
  status: "available",
};

function ChildFormDialog({
  child,
  onSaved,
}: {
  child: Child | null;
  onSaved: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Child>(child ?? emptyChild);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) setForm(child ?? emptyChild);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { id, ...rest } = form;
      if (child) {
        await updateChild(child.id, rest);
      } else {
        await addChild(rest);
      }
      setOpen(false);
      onSaved();
      toast.success(child ? "Child updated" : "Child added");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save child");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {child ? (
          <Button variant="ghost" size="icon">
            <Pencil className="size-4" />
          </Button>
        ) : (
          <Button>
            <Plus className="mr-2 size-4" />
            Add Child
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{child ? "Edit Child" : "Add Child"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="photo">Photo URL</Label>
            <Input
              id="photo"
              value={form.photo}
              onChange={(e) => setForm({ ...form, photo: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={form.age}
                onChange={(e) =>
                  setForm({ ...form, age: Number(e.target.value) })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="schoolClass">Class</Label>
              <Input
                id="schoolClass"
                value={form.schoolClass}
                onChange={(e) =>
                  setForm({ ...form, schoolClass: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="feeTotal">Annual Fees (₦)</Label>
            <Input
              id="feeTotal"
              type="number"
              value={form.feeTotal}
              onChange={(e) =>
                setForm({ ...form, feeTotal: Number(e.target.value) })
              }
              required
            />
          </div>
          <div>
            <Label>Status</Label>
            <Select
              value={form.status}
              onValueChange={(value) =>
                setForm({ ...form, status: value as ChildStatus })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="matched">Matched</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <PrimaryButton type="submit" className="w-full">
            Save
          </PrimaryButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ChildrenTab() {
  const [children, setChildren] = useState<Child[]>([]);

  const refresh = () => {
    getChildren().then(setChildren);
  };

  useEffect(refresh, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteChild(id);
      refresh();
      toast.success("Child deleted");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to delete child");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <ChildFormDialog child={null} onSaved={refresh} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Fees</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {children.map((child) => (
            <TableRow key={child.id}>
              <TableCell>{child.firstName}</TableCell>
              <TableCell>{child.age}</TableCell>
              <TableCell>{child.schoolClass}</TableCell>
              <TableCell>₦{child.feeTotal.toLocaleString("en-NG")}</TableCell>
              <TableCell>
                <Badge variant="secondary">{child.status}</Badge>
              </TableCell>
              <TableCell className="space-x-1 text-right">
                <ChildFormDialog child={child} onSaved={refresh} />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(child.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function CommitmentsTab() {
  const [commitments, setCommitments] = useState<Commitment[]>([]);

  const refresh = () => {
    getCommitments().then(setCommitments);
  };

  useEffect(refresh, []);

  const handleReview = async (id: string) => {
    try {
      await updateCommitmentStatus(id, "reviewed");
      refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update commitment");
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Child</TableHead>
          <TableHead>Tier</TableHead>
          <TableHead>Sponsor</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {commitments.length === 0 && (
          <TableRow>
            <TableCell colSpan={6} className="text-center text-slate-500">
              No commitments yet.
            </TableCell>
          </TableRow>
        )}
        {commitments.map((commitment) => (
          <TableRow key={commitment.id}>
            <TableCell>{commitment.childName}</TableCell>
            <TableCell>
              {commitment.tier === "full" ? "Full" : "Co-Sponsor"}
            </TableCell>
            <TableCell>{commitment.sponsorName}</TableCell>
            <TableCell>
              <div>{commitment.sponsorEmail}</div>
              <div className="text-slate-500">{commitment.sponsorPhone}</div>
            </TableCell>
            <TableCell>
              <Badge
                variant={commitment.status === "new" ? "default" : "secondary"}
              >
                {commitment.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              {commitment.status === "new" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleReview(commitment.id)}
                >
                  Mark Reviewed
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function AdminAAFContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/admin" className="text-sm text-slate-500 hover:underline">
              &larr; Dashboard
            </Link>
            <h1 className="text-2xl">Adopt-a-Future</h1>
          </div>
          <Button
            variant="outline"
            onClick={async () => {
              await logout();
              navigate("/admin/login");
            }}
          >
            Log Out
          </Button>
        </div>

        <Tabs defaultValue="children">
          <TabsList>
            <TabsTrigger value="children">Children</TabsTrigger>
            <TabsTrigger value="commitments">Commitments</TabsTrigger>
          </TabsList>
          <TabsContent value="children">
            <ChildrenTab />
          </TabsContent>
          <TabsContent value="commitments">
            <CommitmentsTab />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}

export default function AdminAAF() {
  return (
    <ProtectedAdminRoute requiredModule="aaf">
      <AdminAAFContent />
    </ProtectedAdminRoute>
  );
}
