"use client";

import { Eye } from "lucide-react";

export function SightingCard() {
  return (
    <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex items-center gap-3">
        <Eye className="h-6 w-6 text-blue-600" />

        <h3 className="font-semibold text-blue-900">
          ¿Has visto a esta persona?
        </h3>
      </div>

      <p className="mt-3 text-sm text-slate-700">
        Próximamente podrás enviar un avistamiento indicando la ubicación,
        fecha, hora, comentarios e incluso una fotografía para ayudar en la
        búsqueda.
      </p>

      <button
        disabled
        className="mt-5 w-full cursor-not-allowed rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white opacity-60"
      >
        Disponible en RC2
      </button>
    </div>
  );
}
