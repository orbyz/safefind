"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Share2 } from "lucide-react";

import { ShareModal } from "@/components/case/share/ShareModal";

type Props = {
  fullName: string;
};

export function CaseActions({ fullName }: Props) {
  const [openShare, setOpenShare] = useState(false);

  function printPoster() {
    window.open(`${window.location.pathname}/print`, "_blank");
  }

  return (
    <>
      <aside className="rounded-2xl border bg-white p-5 shadow-sm">
        <h3 className="mb-5 text-lg font-semibold">Acciones</h3>

        <div className="space-y-3">
          <button
            onClick={() => setOpenShare(true)}
            className="flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:bg-slate-50"
          >
            <Share2 size={18} />
            Compartir ficha
          </button>

          <button
            onClick={printPoster}
            className="flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:bg-slate-50"
          >
            <Printer size={18} />
            Imprimir cartel
          </button>

          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl border p-3 transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Volver al buscador
          </Link>
        </div>
      </aside>

      {openShare && (
        <ShareModal fullName={fullName} onClose={() => setOpenShare(false)} />
      )}
    </>
  );
}
