import type { CaseDTO } from "../domain/case.dto";

type CaseDocument = {
  _id: {
    toString(): string;
  };
  createdAt?: Date;
  updatedAt?: Date;
} & Omit<CaseDTO, "_id" | "createdAt" | "updatedAt">;

export function toCaseDTO(doc: CaseDocument | null): CaseDTO | null {
  if (!doc) {
    return null;
  }

  return {
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString() ?? "",
    updatedAt: doc.updatedAt?.toISOString(),
  };
}

export function toCaseDTOList(docs: CaseDocument[]): CaseDTO[] {
  return docs.map(toCaseDTO).filter((item): item is CaseDTO => item !== null);
}
