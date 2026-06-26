import { notFound } from "next/navigation";

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
      <h1 className="text-3xl font-bold">{person.fullName}</h1>

      <div className="mt-6 space-y-3">
        <p>
          <strong>Ciudad:</strong> {person.city}
        </p>

        <p>
          <strong>Estado:</strong> {person.state}
        </p>

        <p>
          <strong>Última ubicación:</strong> {person.lastSeenLocation}
        </p>

        <p>
          <strong>Descripción:</strong> {person.description}
        </p>

        <p>
          <strong>Contacto:</strong> {person.contactName}
        </p>

        <p>
          <strong>Teléfono:</strong> {person.contactPhone}
        </p>
      </div>
    </main>
  );
}
