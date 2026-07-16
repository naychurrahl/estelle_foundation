// Mock data standing in for a real backend. Deliberately shaped as the
// privacy-safe subset only (no full legal name, exact DOB, or school name) -
// see the Adopt-a-Future plan for why. When a real API replaces this, the
// Child type here is the contract it should match.
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

export const children: Child[] = [
  {
    id: "1",
    photo: "/1.png",
    firstName: "Amina",
    age: 15,
    schoolClass: "SS2 Science",
    feeTotal: 78500,
    status: "available",
  },
  {
    id: "2",
    photo: "/2.png",
    firstName: "Tunde",
    age: 13,
    schoolClass: "JSS2",
    feeTotal: 52000,
    status: "available",
  },
  {
    id: "3",
    photo: "/3.png",
    firstName: "Blessing",
    age: 17,
    schoolClass: "SS3 Art",
    feeTotal: 82800,
    status: "available",
  },
  {
    id: "4",
    photo: "/4.png",
    firstName: "Ibrahim",
    age: 14,
    schoolClass: "JSS3",
    feeTotal: 60500,
    status: "pending",
  },
  {
    id: "5",
    photo: "/1.png",
    firstName: "Grace",
    age: 16,
    schoolClass: "SS1 Commercial",
    feeTotal: 71000,
    status: "available",
  },
  {
    id: "6",
    photo: "/2.png",
    firstName: "Musa",
    age: 12,
    schoolClass: "JSS1",
    feeTotal: 48500,
    status: "matched",
  },
];
