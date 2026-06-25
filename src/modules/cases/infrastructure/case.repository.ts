import { connectDB } from "@/lib/db/db";
import { CaseModel } from "./case.model";
import type { CaseData } from "../domain/case.types";

export async function createCase(data: CaseData) {
  await connectDB();

  return CaseModel.create(data);
}

export async function getCases(search?: string) {
  await connectDB();

  if (search?.trim()) {
    return CaseModel.find({
      fullName: {
        $regex: search,
        $options: "i",
      },
    }).sort({
      createdAt: -1,
    });
  }

  return CaseModel.find().sort({
    createdAt: -1,
  });
}
