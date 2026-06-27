import { connectDB } from "@/lib/db/db";
import { CaseModel } from "./case.model";

import { toCaseDTO, toCaseDTOList } from "./case.mapper";

import type { CaseData } from "../domain/case.types";

export async function createCase(data: CaseData) {
  await connectDB();

  return CaseModel.create(data);
}

export async function getCases(search?: string, limit = 9) {
  await connectDB();

  const query = search?.trim()
    ? {
        fullName: {
          $regex: search,
          $options: "i",
        },
      }
    : {};

  const cases = await CaseModel.find(query)
    .sort({
      createdAt: -1,
    })
    .limit(limit)
    .lean();

  return toCaseDTOList(cases);
}

export async function getCaseById(id: string) {
  await connectDB();

  const person = await CaseModel.findById(id).lean();

  return toCaseDTO(person);
}
