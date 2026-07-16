import { useState } from "react";
import { toast } from "sonner";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { PrimaryButton } from "./PrimaryButton";
import { CheckCircle2 } from "lucide-react";
import { addCommitment, type CommitmentTier } from "@/app/lib/aafStore";

type SponsorCommitmentFormProps = {
  childId: string;
  childName: string;
};

// Records the commitment via the real /commitments API (shows up in the
// admin CMS's Commitments tab), then moves to the handbook's bank-transfer
// instructions.
export function SponsorCommitmentForm({
  childId,
  childName,
}: SponsorCommitmentFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    tier: "full" as CommitmentTier,
    sponsorName: "",
    sponsorEmail: "",
    sponsorPhone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCommitment({ childId, childName, ...formData });
      toast.success(`Thank you for committing to sponsor ${childName}!`);
      setSubmitted(true);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to submit commitment",
      );
    }
  };

  if (submitted) {
    return (
      <DialogContent>
        <DialogHeader>
          <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-purple-100">
            <CheckCircle2 className="size-6 text-purple-600" />
          </div>
          <DialogTitle className="text-center">
            Commitment Received
          </DialogTitle>
          <DialogDescription className="text-center">
            Complete your sponsorship by making payment to the account below,
            then email your receipt to{" "}
            <span className="font-medium text-foreground">
              theestellefoundation@gmail.com
            </span>
            .
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-1 rounded-lg border bg-slate-50 p-4 text-sm">
          <p>
            <span className="text-slate-500">Account Name:</span> Estelle
            Education Foundation
          </p>
          <p>
            <span className="text-slate-500">Bank Name:</span> Union Bank
          </p>
          <p>
            <span className="text-slate-500">Account Number:</span> 0232152893
          </p>
          <p className="pt-2 text-slate-500">
            Please use "Sponsor - {childName}" as your payment reference.
          </p>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sponsor {childName}</DialogTitle>
        <DialogDescription>
          Choose how you'd like to support {childName}'s education and share
          your details so we can follow up.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Sponsorship Option</Label>
          <RadioGroup
            value={formData.tier}
            onValueChange={(value) =>
              setFormData({ ...formData, tier: value as CommitmentTier })
            }
            className="mt-2"
          >
            <div className="flex items-start gap-2">
              <RadioGroupItem value="full" id="tier-full" />
              <Label htmlFor="tier-full" className="font-normal">
                Full Sponsorship (100%) - take full ownership of{" "}
                {childName}'s academic expenses for the year.
              </Label>
            </div>
            <div className="flex items-start gap-2">
              <RadioGroupItem value="co" id="tier-co" />
              <Label htmlFor="tier-co" className="font-normal">
                Co-Sponsorship (50%) - split the annual cost with another
                sponsor.
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="sponsorName">Full Name</Label>
          <Input
            id="sponsorName"
            value={formData.sponsorName}
            onChange={(e) =>
              setFormData({ ...formData, sponsorName: e.target.value })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="sponsorEmail">Email Address</Label>
          <Input
            id="sponsorEmail"
            type="email"
            value={formData.sponsorEmail}
            onChange={(e) =>
              setFormData({ ...formData, sponsorEmail: e.target.value })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="sponsorPhone">Phone Number</Label>
          <Input
            id="sponsorPhone"
            type="tel"
            value={formData.sponsorPhone}
            onChange={(e) =>
              setFormData({ ...formData, sponsorPhone: e.target.value })
            }
          />
        </div>

        <div>
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <PrimaryButton type="submit" className="w-full">
          Commit to Sponsor
        </PrimaryButton>
      </form>
    </DialogContent>
  );
}
