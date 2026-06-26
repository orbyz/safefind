import { connectDB } from "@/lib/db/db";
import { CaseModel } from "./case.model";
import type { CaseData } from "../domain/case.types";
import { normalizeText } from "@/lib/utils/normalize";

export async function createCase(data: CaseData) {
  await connectDB();

  return CaseModel.create({
    ...data,
    searchName: normalizeText(data.fullName),
    searchCity: normalizeText(data.city),
  });
}

export async function getCases(search?: string) {
  await connectDB();

  if (search?.trim()) {
    const normalized = normalizeText(search);

    return CaseModel.find({
      searchName: {
        $regex: normalized,
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
