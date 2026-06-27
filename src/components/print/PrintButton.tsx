"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white print:hidden"
    >
      Imprimir cartel
    </button>
  );
}
