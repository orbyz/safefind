import { notFound } from "next/navigation";

import { CaseDetail } from "@/components/case/CaseDetail";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function getCase(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/cases/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function CasePage({ params }: Props) {
  const { id } = await params;

  const person = await getCase(id);

  if (!person) {
    notFound();
  }

  return <CaseDetail person={person} />;
}
