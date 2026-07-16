// Adopt-a-Future data, backed by the real /children and /commitments API.
import { ApiRequest, baseUrl } from "@/app/components/ApiRequest";

export type ChildStatus = "available" | "pending" | "matched";

export type Child = {
  id: string;
  photo: string;
  firstName: string;
  age: number;
  schoolClass: string;
  feeTotal: number;
  status: ChildStatus;
};

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

export async function getChildren(): Promise<Child[]> {
  return ApiRequest({ url: `${baseUrl}/children` });
}

export async function addChild(input: Omit<Child, "id">): Promise<{ id: string }> {
  return ApiRequest({ url: `${baseUrl}/children`, method: "POST", body: input });
}

export async function updateChild(
  id: string,
  patch: Partial<Omit<Child, "id">>,
): Promise<void> {
  await ApiRequest({
    url: `${baseUrl}/children`,
    method: "PUT",
    body: { id, ...patch },
  });
}

export async function deleteChild(id: string): Promise<void> {
  await ApiRequest({ url: `${baseUrl}/children`, method: "DELETE", body: { id } });
}

export async function getCommitments(): Promise<Commitment[]> {
  return ApiRequest({ url: `${baseUrl}/commitments` });
}

// Backend also flips the committed child to "pending" so they come off the
// public list - avoids two sponsors committing to the same child at once.
export async function addCommitment(
  input: Omit<Commitment, "id" | "status" | "createdAt">,
): Promise<{ id: string; childId: string }> {
  return ApiRequest({ url: `${baseUrl}/commitments`, method: "POST", body: input });
}

export async function updateCommitmentStatus(
  id: string,
  status: CommitmentStatus,
): Promise<void> {
  await ApiRequest({
    url: `${baseUrl}/commitments`,
    method: "PUT",
    body: { id, status },
  });
}
