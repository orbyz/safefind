import type { CaseData } from "../domain/case.types";
import {
  createCase,
  getCaseById,
  getCases,
} from "../infrastructure/case.repository";

export function createCaseService(data: CaseData) {
  return createCase(data);
}

export async function getCasesService(search?: string, limit?: number) {
  return getCases(search, limit);
}

export async function getCaseByIdService(id: string) {
  return getCaseById(id);
}
