export type CaseDTO = {
  _id: string;
  fullName: string;
  city: string;
  state: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
  photo?: string;
  description?: string;
  lastSeenLocation?: string;
  contactName?: string;
  contactPhone?: string;
};
