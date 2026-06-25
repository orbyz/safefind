type Props = {
  fullName: string;
  city: string;
  state: string;
  status: string;
};

export function CaseCard({ fullName, city, state, status }: Props) {
  return (
    <article className="rounded-lg border bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{fullName}</h3>

      <p className="text-sm text-slate-600">
        {city}, {state}
      </p>

      <p className="mt-2 text-sm font-medium">{status}</p>
    </article>
  );
}
