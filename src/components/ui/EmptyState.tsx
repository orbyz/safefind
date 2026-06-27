import Link from "next/link";

import { SearchX } from "lucide-react";
import { Button } from "./Button";

export function EmptyState() {
  return (
    <section className="rounded-2xl border bg-white px-8 py-16 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
        <SearchX className="h-10 w-10 text-slate-400" />
      </div>

      <h2 className="mt-6 text-2xl font-bold">No se encontraron resultados</h2>

      <p className="mx-auto mt-3 max-w-md text-slate-600">
        Comprueba el nombre o intenta con otra búsqueda. Si la persona aún no ha
        sido registrada, puedes crear un nuevo caso.
      </p>

      <div className="mt-8">
        <Link href="/report">
          <Button className="w-auto">Reportar una persona</Button>
        </Link>
      </div>
    </section>
  );
}
