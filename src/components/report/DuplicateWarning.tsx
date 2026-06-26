import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { getStatusLabel } from "@/lib/utils/status";

type MatchCase = {
  _id: string;
  fullName: string;
  city: string;
  state: string;
  status: string;
};

type Props = {
  matches: MatchCase[];
  onContinue: () => void;
};

export function DuplicateWarning({ matches, onContinue }: Props) {
  return (
    <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
      <h2 className="text-lg font-bold text-amber-900">
        ⚠ Posibles coincidencias encontradas
      </h2>

      <p className="mt-2 text-sm text-amber-800">
        Antes de crear un nuevo caso, revisa si la persona ya fue reportada.
      </p>

      <div className="mt-5 space-y-4">
        {matches.map((item) => (
          <div key={item._id} className="rounded-lg border bg-white p-4">
            <h3 className="font-semibold">{item.fullName}</h3>

            <p className="text-sm text-slate-600">
              📍 {item.city}, {item.state}
            </p>

            <p className="mt-2 text-sm">{getStatusLabel(item.status)}</p>

            <div className="mt-4">
              <Link href={`/case/${item._id}`}>
                <Button className="w-auto px-5">Ver ficha</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Button
          className="bg-slate-700 hover:bg-slate-800"
          onClick={onContinue}
        >
          Continuar de todos modos
        </Button>
      </div>
    </div>
  );
}
