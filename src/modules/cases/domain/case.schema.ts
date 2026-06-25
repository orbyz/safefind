import { z } from "zod";
import { GENDER, REPORT_STATUS } from "@/modules/shared/constants";

export const reportSchema = z.object({
  fullName: z.string().min(3).max(120),

  age: z.number().optional(),

  gender: z.enum([GENDER.MALE, GENDER.FEMALE, GENDER.OTHER, GENDER.UNKNOWN]),

  city: z.string(),

  state: z.string(),

  country: z.string(),

  lastSeenLocation: z.string(),

  lastSeenAt: z.coerce.date(),

  description: z.string().min(10),

  contactName: z.string(),

  contactPhone: z.string(),

  contactEmail: z.email().optional(),

  photo: z.url().optional(),

  status: z
    .enum([
      REPORT_STATUS.PENDING,
      REPORT_STATUS.VERIFIED,
      REPORT_STATUS.FOUND,
      REPORT_STATUS.CLOSED,
    ])
    .default(REPORT_STATUS.PENDING),
});

export type CaseInput = z.infer<typeof reportSchema>;
