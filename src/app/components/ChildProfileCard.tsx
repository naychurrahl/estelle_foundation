import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { PrimaryButton } from "./PrimaryButton";
import { SponsorCommitmentForm } from "./SponsorCommitmentForm";
import type { Child } from "@/app/data/children";

const statusLabel: Record<Child["status"], string> = {
  available: "Available",
  pending: "Pending",
  matched: "Matched",
};

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function ChildProfileCard({ child }: { child: Child }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={child.photo}
          alt={`${child.firstName}, ${child.age} years old`}
          className="h-full w-full object-cover"
        />
        <Badge className="absolute top-3 right-3" variant="secondary">
          {statusLabel[child.status]}
        </Badge>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="mb-0.5">{child.firstName}</h3>
          <p className="text-sm text-slate-600">
            Age {child.age} &middot; {child.schoolClass}
          </p>
        </div>

        <p className="text-sm text-slate-600">
          Annual fees:{" "}
          <span className="font-medium text-foreground">
            {formatNaira(child.feeTotal)}
          </span>
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <PrimaryButton className="w-full">
              Sponsor {child.firstName}
            </PrimaryButton>
          </DialogTrigger>
          <SponsorCommitmentForm childName={child.firstName} />
        </Dialog>
      </div>
    </Card>
  );
}
