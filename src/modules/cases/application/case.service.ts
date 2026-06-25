import { createCase, getCases } from "../infrastructure/case.repository";
import type { CaseData } from "../domain/case.types";

export async function createCaseService(data: CaseData) {
  return createCase(data);
}

export async function getCasesService() {
  return getCases();
}
