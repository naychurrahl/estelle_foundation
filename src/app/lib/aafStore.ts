// Adopt-a-Future data: localStorage-backed for now (no backend yet).
// `data/children.ts` supplies the seed array; this is where admin
// edits/commitments actually live and get read back from.
import { children as seedChildren, type Child, type ChildStatus } from "@/app/data/children";

export type { Child, ChildStatus };

export type CommitmentTier = "full" | "co";
export type CommitmentStatus = "new" | "reviewed";

export type Commitment = {
  id: string;
  childId: string;
  childName: string;
  tier: CommitmentTier;
  sponsorName: string;
  sponsorEmail: string;
  sponsorPhone: string;
  message: string;
  status: CommitmentStatus;
  createdAt: string;
};

const CHILDREN_KEY = "estelle-children";
const COMMITMENTS_KEY = "estelle-commitments";

function readChildren(): Child[] {
  try {
    const raw = localStorage.getItem(CHILDREN_KEY);
    return raw ? JSON.parse(raw) : seedChildren;
  } catch {
    return seedChildren;
  }
}

function writeChildren(children: Child[]): void {
  localStorage.setItem(CHILDREN_KEY, JSON.stringify(children));
}

export function getChildren(): Child[] {
  return readChildren();
}

export function saveChild(child: Child): void {
  const children = readChildren();
  const index = children.findIndex((c) => c.id === child.id);
  if (index === -1) {
    writeChildren([...children, child]);
  } else {
    writeChildren(children.map((c) => (c.id === child.id ? child : c)));
  }
}

export function deleteChild(id: string): void {
  writeChildren(readChildren().filter((c) => c.id !== id));
}

function readCommitments(): Commitment[] {
  try {
    const raw = localStorage.getItem(COMMITMENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCommitments(commitments: Commitment[]): void {
  localStorage.setItem(COMMITMENTS_KEY, JSON.stringify(commitments));
}

export function getCommitments(): Commitment[] {
  return readCommitments();
}

// Also flips the committed child to "pending" so they come off the public
// list - avoids two sponsors committing to the same child at once.
export function addCommitment(
  input: Omit<Commitment, "id" | "status" | "createdAt">,
): void {
  const commitment: Commitment = {
    ...input,
    id: `sc-${Date.now()}`,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  writeCommitments([...readCommitments(), commitment]);

  const children = readChildren();
  writeChildren(
    children.map((c) =>
      c.id === input.childId ? { ...c, status: "pending" as ChildStatus } : c,
    ),
  );
}

export function updateCommitmentStatus(
  id: string,
  status: CommitmentStatus,
): void {
  writeCommitments(
    readCommitments().map((c) => (c.id === id ? { ...c, status } : c)),
  );
}
