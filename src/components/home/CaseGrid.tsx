"use client";

import { useState } from "react";

import { CaseCard } from "./CaseCard";
import type { CaseDTO } from "@/modules/cases/domain/case.dto";

type Props = {
  cases: CaseDTO[];
};

export function CaseGrid({ cases }: Props) {
  const [visible, setVisible] = useState(9);

  return (
    <>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cases.slice(0, visible).map((item) => (
          <CaseCard key={item._id} person={item} />
        ))}
      </section>

      {visible < cases.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + 9)}
            className="rounded-xl bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
          >
            Mostrar más
          </button>
        </div>
      )}
    </>
  );
}
