import { notFound } from "next/navigation";
import Image from "next/image";

import { getCaseByIdService } from "@/modules/cases/application/case.service";
import { AutoPrint } from "@/components/print/AutoPrint";
import { PrintButton } from "@/components/print/PrintButton";

import { formatDate } from "@/lib/utils/date";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PrintPage({ params }: Props) {
  const { id } = await params;

  const person = await getCaseByIdService(id);

  if (!person) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl bg-white p-8 print:p-0">
      <AutoPrint />
      <div className="overflow-hidden rounded-2xl border shadow print:border-0 print:shadow-none">
        {/* Cabecera */}
        <div className="bg-red-600 px-6 py-5 text-center text-white">
          <h1 className="text-4xl font-black tracking-wide">
            🚨 DESAPARECIDO 🚨
          </h1>

          <p className="mt-2 text-lg">SafeFind Venezuela</p>
        </div>

        {/* Foto */}
        <div className="p-8">
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.fullName}
              width={900}
              height={900}
              className="mx-auto h-[420px] w-full rounded-xl object-cover"
              priority
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center rounded-xl bg-slate-100">
              Sin fotografía
            </div>
          )}

          <h2 className="mt-8 text-center text-4xl font-bold">
            {person.fullName}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border p-4">
              <p className="text-sm text-slate-500">Última ubicación</p>

              <p className="mt-1 font-semibold">
                {person.lastSeenLocation || "No disponible"}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-slate-500">Ciudad / Estado</p>

              <p className="mt-1 font-semibold">
                {person.city}, {person.state}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-slate-500">Fecha del reporte</p>

              <p className="mt-1 font-semibold">
                {formatDate(person.createdAt)}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-slate-500">Contacto</p>

              <p className="mt-1 font-semibold">{person.contactName}</p>

              <p>{person.contactPhone}</p>
            </div>
          </div>

          {person.description && (
            <div className="mt-6 rounded-xl border p-4">
              <p className="text-sm text-slate-500">Descripción</p>

              <p className="mt-2">{person.description}</p>
            </div>
          )}

          <div className="mt-10 border-t pt-6 text-center">
            <p className="text-sm text-slate-500">Más información en</p>

            <p className="font-semibold">
              {process.env.NEXT_PUBLIC_APP_URL}/case/{person._id}
            </p>

            <PrintButton />
          </div>
        </div>
      </div>
    </main>
  );
}
