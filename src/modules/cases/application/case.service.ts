import type { CaseData } from "../domain/case.types";
import { createCase, getCases } from "../infrastructure/case.repository";

export function createCaseService(data: CaseData) {
  return createCase(data);
}

export function getCasesService(search?: string) {
  return getCases(search);
}
