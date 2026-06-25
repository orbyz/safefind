import { GENDER, REPORT_STATUS } from "@/modules/shared/constants";

export type ReportStatus = (typeof REPORT_STATUS)[keyof typeof REPORT_STATUS];

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export interface ReportProps {
  id?: string;

  fullName: string;

  age?: number;

  gender: Gender;

  city: string;

  state: string;

  country: string;

  lastSeenLocation: string;

  lastSeenAt: Date;

  description: string;

  contactName: string;

  contactPhone: string;

  contactEmail?: string;

  photo?: string;

  status: ReportStatus;

  createdAt?: Date;

  updatedAt?: Date;
}
