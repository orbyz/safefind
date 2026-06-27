import { connectDB } from "@/lib/db/db";
import { CaseModel } from "./case.model";

import type { CaseData } from "../domain/case.types";

export async function createCase(data: CaseData) {
  await connectDB();

  return CaseModel.create(data);
}

export async function getCases(search?: string, limit = 9) {
  await connectDB();

  if (search?.trim()) {
    return CaseModel.find({
      fullName: {
        $regex: search,
        $options: "i",
      },
    })
      .sort({
        createdAt: -1,
      })
      .limit(limit);
  }

  return CaseModel.find()
    .sort({
      createdAt: -1,
    })
    .limit(limit);
}
