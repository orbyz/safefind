"use client";

import { useEffect, useState } from "react";
import { Users, Clock3, HeartHandshake } from "lucide-react";

type Stats = {
  totalCases: number;
  pending: number;
  found: number;
};

export function Stats() {
  const [stats, setStats] = useState<Stats>({
    totalCases: 0,
    pending: 0,
    found: 0,
  });

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/stats", {
        cache: "no-store",
      });

      const data = await res.json();

      setStats(data);
    }

    load();
  }, []);

  return (
    <section className="mb-12 py-10 grid gap-6 md:grid-cols-3">
      <StatCard
        icon={<Users className="h-8 w-8 text-blue-600" />}
        value={stats.totalCases}
        label="Casos registrados"
      />

      <StatCard
        icon={<Clock3 className="h-8 w-8 text-amber-500" />}
        value={stats.pending}
        label="Pendientes"
      />

      <StatCard
        icon={<HeartHandshake className="h-8 w-8 text-green-600" />}
        value={stats.found}
        label="Personas localizadas"
      />
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
};

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex justify-center">{icon}</div>

      <h3 className="text-4xl font-bold">{value}</h3>

      <p className="mt-2 text-slate-500">{label}</p>
    </div>
  );
}
