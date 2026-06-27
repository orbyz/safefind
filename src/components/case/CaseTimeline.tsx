import { formatDate } from "@/lib/utils/date";

type Props = {
  createdAt: string;
};

export function CaseTimeline({ createdAt }: Props) {
  return (
    <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">Historial del caso</h2>

      <div className="relative border-l-2 border-blue-200 pl-6">
        <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-blue-600" />

        <p className="font-medium">Caso registrado</p>

        <p className="text-sm text-slate-500">{formatDate(createdAt)}</p>

        <p className="mt-2 text-slate-600">
          El caso fue creado en SafeFind y está pendiente de nuevas
          actualizaciones.
        </p>
      </div>
    </section>
  );
}
