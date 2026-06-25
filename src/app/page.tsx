"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Header } from "@/components/ui/Header";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";

type Case = {
  _id: string;
  fullName: string;
  city: string;
  state: string;
  status: string;
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCases() {
      setLoading(true);

      const res = await fetch(`/api/cases?q=${encodeURIComponent(search)}`);

      const data = await res.json();

      setCases(data);

      setLoading(false);
    }

    loadCases();
  }, [search]);

  return (
    <Container>
      <Header />

      <section className="mb-10">
        <Input
          placeholder="Nombre y apellido de la persona"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {loading ? (
        <p className="text-center text-slate-500">Buscando...</p>
      ) : cases.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {cases.map((item) => (
            <Card key={item._id}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{item.fullName}</h2>

                  <p className="text-slate-600">
                    📍 {item.city}, {item.state}
                  </p>

                  <div className="mt-3">
                    <Badge status={item.status} />
                  </div>
                </div>

                <Link href={`/case/${item._id}`}>
                  <Button className="w-auto px-5">Ver</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link href="/report">
          <Button>Reportar una persona desaparecida</Button>
        </Link>
      </div>
    </Container>
  );
}
