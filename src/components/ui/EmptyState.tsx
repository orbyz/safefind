import Link from "next/link";
import { Button } from "./Button";

export function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
      <h2 className="text-xl font-semibold">No encontramos coincidencias</h2>

      <p className="mt-2 text-slate-600">
        Si no encuentras a tu familiar, puedes crear un caso.
      </p>

      <Link href="/report" className="mt-6 block">
        <Button>Reportar una persona</Button>
      </Link>
    </div>
  );
}
