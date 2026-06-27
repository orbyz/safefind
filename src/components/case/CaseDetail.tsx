import Image from "next/image";

import { CaseActions } from "@/components/case/CaseActions";
import { ShareButtons } from "@/components/case/ShareButtons";
import { SightingCard } from "@/components/case/SightingCard";
import { CaseTimeline } from "@/components/case/CaseTimeline";
import type { CaseDTO } from "@/modules/cases/domain/case.dto";

import { formatDate } from "@/lib/utils/date";
import { getStatusLabel } from "@/lib/utils/status";

type Props = {
  person: CaseDTO;
};

export function CaseDetail({ person }: Props) {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="grid gap-8 xl:grid-cols-[420px_1fr_280px]">
        {/* Fotografía */}
        <section>
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.fullName}
              width={1200}
              height={800}
              className="h-[420px] w-full rounded-2xl object-cover shadow-sm"
              priority
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              Sin fotografía
            </div>
          )}
        </section>

        {/* Información */}
        <section>
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            {getStatusLabel(person.status)}
          </span>

          <h1 className="mt-4 text-4xl font-bold">{person.fullName}</h1>

          <p className="mt-2 text-sm text-slate-500">
            Reportado el {formatDate(person.createdAt)}
          </p>

          <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">
              📍 Última ubicación conocida
            </h2>

            <p className="mt-3">{person.lastSeenLocation || "No disponible"}</p>

            <p className="mt-2 text-sm text-slate-500">
              {person.city}, {person.state}
            </p>
          </section>

          <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">📝 Descripción</h2>

            <p className="mt-3 leading-7 text-slate-700">
              {person.description || "Sin descripción disponible."}
            </p>
          </section>

          <CaseTimeline createdAt={person.createdAt} />

          <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">☎ Persona de contacto</h2>

            <p className="mt-3 font-medium">
              {person.contactName || "No disponible"}
            </p>

            <p className="text-slate-600">
              {person.contactPhone || "No disponible"}
            </p>
          </section>

          <div className="mt-8">
            <ShareButtons id={person._id} fullName={person.fullName} />
          </div>
        </section>

        {/* Acciones */}
        <section>
          <CaseActions fullName={person.fullName} />
          <SightingCard />
        </section>
      </div>
    </main>
  );
}
