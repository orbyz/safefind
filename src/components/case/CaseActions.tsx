"use client";

import { Printer, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  fullName: string;
};

export function CaseActions({ fullName }: Props) {
  function printPage() {
    window.print();
  }

  async function share() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: fullName,
        url,
      });

      return;
    }

    await navigator.clipboard.writeText(url);

    alert("Enlace copiado al portapapeles.");
  }

  return (
    <aside className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold">Acciones</h3>

      <div className="space-y-3">
        <button
          onClick={share}
          className="flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:bg-slate-50"
        >
          <Share2 size={18} />
          Compartir ficha
        </button>

        <button
          onClick={printPage}
          className="flex w-full items-center gap-3 rounded-xl border p-3 text-left transition hover:bg-slate-50"
        >
          <Printer size={18} />
          Imprimir
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
  );
}
