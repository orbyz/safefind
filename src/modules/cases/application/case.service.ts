import type { CaseData } from "../domain/case.types";
import { createCase, getCases } from "../infrastructure/case.repository";

export function createCaseService(data: CaseData) {
  return createCase(data);
}

export async function getCasesService(search?: string, limit?: number) {
  return getCases(search, limit);
}
