export type CaseStatus = "pending" | "verified" | "found" | "closed";

export interface CaseData {
  fullName: string;
  age?: number;
  gender?: "male" | "female" | "other" | "unknown";

  city: string;
  state: string;
  country: string;

  lastSeenLocation: string;
  lastSeenAt: Date;

  description?: string;
  photo?: string;

  contactName: string;
  contactPhone: string;
  contactEmail?: string;

  status?: CaseStatus;

  verified?: boolean;
  verifiedBy?: string;
  verifiedAt?: Date;
}
