"use client";

import { useEffect, useState } from "react";

type Stats = {
  totalCases: number;
  pending: number;
  verified: number;
  found: number;
  closed: number;
  version: string;
  lastUpdate: string;
};

export function FooterStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function loadStats() {
      const res = await fetch("/api/stats", {
        cache: "no-store",
      });

      const data = await res.json();

      setStats(data);
    }

    loadStats();

    window.addEventListener("stats-updated", loadStats);

    return () => {
      window.removeEventListener("stats-updated", loadStats);
    };
  }, []);

  if (!stats) {
    return <p>Cargando estadísticas...</p>;
  }

  return (
    <div className="grid gap-4 text-sm sm:grid-cols-2">
      <div>
        <p>
          <strong>Casos registrados:</strong> {stats.totalCases}
        </p>

        <p>
          <strong>Pendientes:</strong> {stats.pending}
        </p>

        <p>
          <strong>Verificados:</strong> {stats.verified}
        </p>

        <p>
          <strong>Localizados:</strong> {stats.found}
        </p>
      </div>

      <div>
        <p>
          <strong>Versión:</strong> {stats.version}
        </p>

        <p>
          <strong>Última actualización:</strong>{" "}
          {new Date(stats.lastUpdate).toLocaleString("es-ES")}
        </p>
      </div>
    </div>
  );
}
