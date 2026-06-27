import Link from "next/link";
import { Search, TriangleAlert, Plus } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 px-8 py-14 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400 bg-red-600/90 px-4 py-2 text-sm font-semibold">
          <TriangleAlert size={18} />
          Plataforma ciudadana · RC1
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          SafeFind Venezuela
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Centralizamos reportes de personas desaparecidas para facilitar su
          búsqueda durante situaciones de emergencia.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/report">
            <Button variant="secondary">
              <Plus size={18} />
              Reportar persona
            </Button>
          </Link>

          <a href="#buscador">
            <Button variant="secondary">
              <Search size={18} />
              Buscar persona
            </Button>
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-500/30 bg-white/10 p-5 text-left">
          <p className="font-semibold">Antes de crear un nuevo caso:</p>

          <p className="mt-2 text-blue-100">
            Utiliza el buscador para comprobar si la persona ya ha sido
            reportada. Evitar duplicados ayuda a mantener la información
            organizada.
          </p>
        </div>
      </div>
    </section>
  );
}
