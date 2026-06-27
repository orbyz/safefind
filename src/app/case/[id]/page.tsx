import { notFound } from "next/navigation";

import { getCaseByIdService } from "@/modules/cases/application/case.service";
import { CaseDetail } from "@/components/case/CaseDetail";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CasePage({ params }: Props) {
  const { id } = await params;

  const person = await getCaseByIdService(id);

  if (!person) {
    notFound();
  }

  return <CaseDetail person={person} />;
}
