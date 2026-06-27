import Image from "next/image";
import Link from "next/link";

import { timeAgo } from "@/lib/utils/timeAgo";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { CaseDTO } from "@/modules/cases/domain/case.dto";

type Props = {
  person: CaseDTO;
};

export function CaseCard({ person }: Props) {
  return (
    <Card>
      <div className="flex h-full flex-col gap-4">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.fullName}
            width={500}
            height={320}
            className="h-56 w-full rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-56 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
            Sin fotografía
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold">{person.fullName}</h2>

          <p className="mt-2 text-sm text-slate-500">
            📍 {person.city}, {person.state}
          </p>

          <p className="mt-3 text-sm text-slate-500">
            📅 {timeAgo(person.createdAt)}
          </p>

          {person.lastSeenLocation && (
            <p className="mt-2 line-clamp-2 text-sm text-slate-600">
              🏥 {person.lastSeenLocation}
            </p>
          )}

          <p className="mt-3 line-clamp-2 text-sm text-slate-500">
            {person.description || "Sin información adicional."}
          </p>
        </div>

        <div className="mt-auto">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
            Estado del caso
          </p>

          <Badge status={person.status} />
        </div>

        <Link href={`/case/${person._id}`}>
          <Button className="mt-2 w-full">Ver ficha completa</Button>
        </Link>
      </div>
    </Card>
  );
}
