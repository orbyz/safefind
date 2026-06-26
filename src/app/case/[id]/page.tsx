import { notFound } from "next/navigation";
import Image from "next/image";
import { ShareButtons } from "@/components/case/ShareButtons";
import { formatDate } from "@/lib/utils/date";
import { getStatusLabel } from "@/lib/utils/status";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function getCase(id: string) {
  const res = await fetch(`http://localhost:3000/api/cases/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function CasePage({ params }: Props) {
  const { id } = await params;

  const person = await getCase(id);

  if (!person) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      {person.photo ? (
        <Image
          src={person.photo}
          alt={person.fullName}
          width={1200}
          height={800}
          className="mb-6 h-64 w-full rounded-xl object-cover"
        />
      ) : (
        <div className="mb-6 flex h-64 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
          Sin fotografía
        </div>
      )}
      <h1 className="text-3xl font-bold">{person.fullName}</h1>
      <p className="mt-2 text-lg">{getStatusLabel(person.status)}</p>

      <p className="text-sm text-slate-500">
        Reportado el {formatDate(person.createdAt)}
      </p>

      <div className="mt-6 space-y-6">
        <section className="rounded-xl border p-5">
          <h2 className="mb-2 text-lg font-semibold">
            📍 Última ubicación conocida
          </h2>

          <p>{person.lastSeenLocation}</p>
          <p className="text-sm text-slate-500">
            {person.city}, {person.state}
          </p>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="mb-2 text-lg font-semibold">📝 Descripción</h2>

          <p>{person.description || "Sin descripción."}</p>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="mb-2 text-lg font-semibold">☎ Persona de contacto</h2>

          <p>{person.contactName}</p>
          <p>{person.contactPhone}</p>
        </section>
      </div>
      <ShareButtons id={person._id} fullName={person.fullName} />
    </main>
  );
}
