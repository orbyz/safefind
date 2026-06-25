import { connectDB } from "@/lib/db/db";
import { CaseModel } from "./case.model";
import type { CaseData } from "../domain/case.types";

export async function createCase(data: CaseData) {
  await connectDB();

  return await CaseModel.create(data);
}

export async function getCases() {
  await connectDB();

  return await CaseModel.find().sort({
    createdAt: -1,
  });
}
